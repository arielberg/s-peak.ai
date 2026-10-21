import { examples } from './examples-catalog.mjs';
const AUDIO = { audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }, video: false };
let sdkPromise;
export function loadSip() {
  sdkPromise ||= import('https://cdn.jsdelivr.net/npm/sip.js@0.21.2/lib/platform/web/index.js/+esm')
    .catch((error) => { sdkPromise = null; throw error; });
  return sdkPromise;
}

const stopTracks = (stream) => stream?.getTracks().forEach((track) => track.stop());
const ignore = async (fn) => { try { await fn(); } catch { /* already closed */ } };
async function bounded(fn) {
  let timer;
  try { await Promise.race([ignore(fn), new Promise((resolve) => { timer = setTimeout(resolve, 2000); })]); }
  finally { clearTimeout(timer); }
}

// One owner for the microphone, SIP connection and connecting/active call.
// Dependencies are injectable so cancellation and routing can be tested offline.
export class ExampleCall {
  constructor({ apiBase, userId = 'shiri', audio, onState, fetcher = fetch,
    getMedia = (constraints) => navigator.mediaDevices.getUserMedia(constraints), loadSdk = loadSip,
    connectTimeout = 45000 }) {
    Object.assign(this, { apiBase, userId, audio, onState, fetcher, getMedia, loadSdk, connectTimeout });
    this.active = null;
  }

  current(call) { return this.active === call && !call.cancelled; }
  check(call) { if (!this.current(call)) throw new DOMException('Cancelled', 'AbortError'); }

  async start(example) {
    const configured = examples.find((item) => item.id === example.id);
    if (this.active || !configured) return;
    const call = { id: example.id, abort: new AbortController(), cancelled: false };
    this.active = call;
    this.onState(call.id, 'connecting');
    call.timer = setTimeout(() => { if (this.current(call)) void this.end('timeout'); }, this.connectTimeout);
    try {
      const stream = await this.getMedia(AUDIO);
      if (!this.current(call)) { stopTracks(stream); return; }
      call.stream = stream;
      const response = await this.fetcher(`${this.apiBase.replace(/\/$/, '')}/api/public/web-call/${encodeURIComponent(this.userId)}/session`, {
        method: 'POST', signal: call.abort.signal,
      });
      this.check(call);
      if (!response.ok) throw Object.assign(new Error('session'), { status: response.status });
      const config = await response.json();
      this.check(call);
      if (config.mode !== 'sipjs' || !config.wsUrl || !config.sipPassword || !config.sipDomain) throw new Error('configuration');
      const { SimpleUser, defaultSessionDescriptionHandlerFactory } = await this.loadSdk();
      this.check(call);
      const createHandler = defaultSessionDescriptionHandlerFactory(async () => {
        this.check(call);
        return stream;
      });
      const user = new SimpleUser(config.wsUrl, {
        aor: config.sipUri,
        reconnectionAttempts: 0,
        media: { constraints: { audio: true, video: false }, remote: { audio: this.audio } },
        userAgentOptions: {
          authorizationUsername: config.sipUser,
          authorizationPassword: config.sipPassword,
          logBuiltinEnabled: false,
          sessionDescriptionHandlerFactory: (session, options) => {
            this.check(call);
            call.handler = createHandler(session, options);
            return call.handler;
          },
          sessionDescriptionHandlerFactoryOptions: {
            peerConnectionConfiguration: { iceServers: config.iceServers || [] },
          },
        },
      });
      call.user = user;
      user.delegate = {
        onCallAnswered: () => {
          if (!this.current(call)) return;
          clearTimeout(call.timer);
          this.onState(call.id, 'live');
          this.audio.play().catch(() => { if (this.current(call)) this.onState(call.id, 'audioBlocked'); });
        },
        onCallHangup: () => { if (this.current(call)) void this.end('ended'); },
        onServerDisconnect: () => { if (this.current(call)) void this.end('disconnected'); },
      };
      await user.connect();
      this.check(call);
      // Outgoing authenticated INVITE needs no registration or incoming-call contact.
      await user.call(`sip:${configured.dial}@${config.sipDomain}`);
      this.check(call);
    } catch (error) {
      if (!this.current(call)) {
        await ignore(() => call.user?.disconnect());
        return;
      }
      const state = error.name === 'NotAllowedError' ? 'micDenied'
        : error.name === 'NotFoundError' ? 'noMic'
        : error.status === 429 ? 'rateLimited'
        : [404, 503].includes(error.status) ? 'unavailable' : 'error';
      await this.end(state);
    }
  }

  async end(result = 'ended') {
    const call = this.active;
    if (!call || call.cancelled) return;
    call.cancelled = true;
    clearTimeout(call.timer);
    call.abort.abort();
    stopTracks(call.stream);
    stopTracks(call.user?.localMediaStream);
    this.audio.pause();
    this.audio.srcObject = null;
    this.onState(call.id, 'closing');
    if (call.user) {
      call.user.delegate = {};
      await bounded(() => call.user.hangup());
      // Also close RTP/media if SIP teardown is stalled or the network disappeared.
      await ignore(() => call.handler?.close());
      await bounded(() => call.user.disconnect());
    }
    if (this.active === call) {
      this.active = null;
      this.onState(call.id, result);
    }
  }
}
