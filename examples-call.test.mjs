import test from 'node:test';
import assert from 'node:assert/strict';
import { ExampleCall } from './examples-call.mjs';
import { examples } from './examples-catalog.mjs';

const deferred = () => { let resolve; const promise = new Promise((r) => { resolve = r; }); return { promise, resolve }; };
function fixture(overrides = {}) {
  const events = [], calls = [], users = [], tracks = [{ stopped: 0, stop() { this.stopped++; } }];
  const stream = { getTracks: () => tracks };
  const audio = { play: async () => {}, pause() {}, srcObject: stream };
  class SimpleUser {
    constructor(url, options) { this.options = options; this.closed = false; users.push(this); }
    async connect() { if (overrides.connect) await overrides.connect(); }
    async call(uri) {
      calls.push(uri);
      this.handler = this.options.userAgentOptions.sessionDescriptionHandlerFactory();
      this.stream = await this.handler.getMedia();
      this.delegate.onCallAnswered();
    }
    async hangup() { this.hungup = true; }
    async disconnect() { this.closed = true; }
  }
  const controller = new ExampleCall({
    apiBase: 'https://example.test', audio, onState: (id, state) => events.push({ id, state }),
    getMedia: async () => stream,
    fetcher: async () => ({ ok: true, json: async () => ({ mode: 'sipjs', wsUrl: 'wss://example.test', sipPassword: 'test', sipDomain: 'example.test' }) }),
    loadSdk: async () => ({ SimpleUser, defaultSessionDescriptionHandlerFactory: (getMedia) => () => ({
      getMedia, closed: false, close() { this.closed = true; },
    }) }),
    ...overrides,
  });
  return { controller, events, calls, users, tracks, audio, stream };
}

test('each example calls its own internal flow and releases mic and connection', async () => {
  const f = fixture();
  for (const example of examples) {
    await f.controller.start(example);
    assert.equal(f.events.at(-1).state, 'live');
    assert.equal(f.calls.at(-1), `sip:${example.dial}@example.test`);
    assert.equal(f.users.at(-1).stream, f.stream);
    await f.controller.end();
    assert.equal(f.users.at(-1).closed, true);
    assert.equal(f.users.at(-1).hungup, true);
    assert.equal(f.users.at(-1).handler.closed, true);
    assert.equal(f.audio.srcObject, null);
  }
  assert.equal(f.tracks[0].stopped, 2);
});

test('only one call can connect at once; caller-supplied dial cannot override catalog', async () => {
  const f = fixture();
  await f.controller.start({ ...examples[0], dial: 'arbitrary-number' });
  await f.controller.start(examples[1]);
  assert.deepEqual(f.calls, ['sip:406@example.test']);
  await f.controller.end();
  await f.controller.start({ id: 'unknown', dial: '406' });
  assert.equal(f.controller.active, null);
});

test('cancel during microphone permission stops the late stream without dialing', async () => {
  const media = deferred();
  const f = fixture({ getMedia: () => media.promise });
  const starting = f.controller.start(examples[0]);
  await f.controller.end();
  media.resolve(f.stream);
  await starting;
  assert.equal(f.tracks[0].stopped, 1);
  assert.deepEqual(f.calls, []);
  assert.equal(f.events.at(-1).state, 'ended');
});

test('cancel during WebSocket connection prevents a late INVITE', async () => {
  const connection = deferred();
  const f = fixture({ connect: () => connection.promise });
  const starting = f.controller.start(examples[0]);
  await new Promise(setImmediate);
  await f.controller.end();
  connection.resolve();
  await starting;
  assert.deepEqual(f.calls, []);
  assert.equal(f.users[0].closed, true);
  assert.equal(f.tracks[0].stopped, 1);
});

test('remote hangup cleans up resources and leaves the UI ended', async () => {
  const f = fixture();
  await f.controller.start(examples[0]);
  f.users[0].delegate.onCallHangup();
  await new Promise(setImmediate);
  assert.equal(f.controller.active, null);
  assert.equal(f.tracks[0].stopped, 1);
  assert.equal(f.events.at(-1).state, 'ended');
});

test('permission denial and rate limiting produce recoverable messages', async () => {
  const denied = fixture({ getMedia: async () => { throw new DOMException('Denied', 'NotAllowedError'); } });
  await denied.controller.start(examples[0]);
  assert.equal(denied.events.at(-1).state, 'micDenied');
  assert.equal(denied.controller.active, null);
  const limited = fixture({ fetcher: async () => ({ ok: false, status: 429 }) });
  await limited.controller.start(examples[0]);
  assert.equal(limited.events.at(-1).state, 'rateLimited');
  assert.equal(limited.tracks[0].stopped, 1);
});

test('connection timeout releases the mic and does not dial after SDK loads', async () => {
  const sdk = deferred();
  const f = fixture({ connectTimeout: 10, loadSdk: () => sdk.promise });
  const starting = f.controller.start(examples[0]);
  await new Promise((resolve) => setTimeout(resolve, 30));
  sdk.resolve({});
  await starting;
  assert.equal(f.events.at(-1).state, 'timeout');
  assert.equal(f.tracks[0].stopped, 1);
  assert.deepEqual(f.calls, []);
});

test('blocked autoplay keeps the call active so the visitor can enable audio', async () => {
  const f = fixture();
  f.audio.play = async () => { throw new DOMException('Gesture required', 'NotAllowedError'); };
  await f.controller.start(examples[0]);
  assert.equal(f.events.at(-1).state, 'audioBlocked');
  assert.ok(f.controller.active);
  await f.controller.end();
});
