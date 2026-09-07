const CFG = Object.assign(
  {
    talkMode: 'auto',
    talkConfigUrl: 'https://mcp.w3b.works/api/talk/config',
    elevenLabsAgentId: 'agent_6101kw9b2sq2e3nvhyb8kx4mze2c',
    apiBase: 'https://162-35-181-76.sslip.io:8443',
    webrtcUserId: 'shiri',
    contactApiUrl: 'https://162-35-181-76.sslip.io:8443/api/contact',
    source: 's-peak.ai',
  },
  window.SPEAK_CONFIG || {}
);

const translations = {
  en: {
    'nav.demo': 'Live demo',
    'nav.capabilities': 'Capabilities',
    'nav.connect': 'Connections',
    'nav.useCases': 'Use cases',
    'nav.contact': 'Contact',
    'hero.brand': 's-peak.ai',
    'hero.title': 'Voice agents that plug into your business systems',
    'hero.subtitle':
      'Natural AI conversations in Hebrew and English — answering, qualifying, and acting through CRM, telephony, and your internal APIs.',
    'hero.tryDemo': 'Try live demo',
    'hero.talkUs': 'Talk to us',
    'demo.title': 'Talk to an agent now',
    'demo.subtitle': 'Press the microphone and speak — the agent is live in your browser.',
    'demo.aria': 'Start voice demo',
    'demo.ready': 'Ready — click to start',
    'demo.hint': 'Allow microphone access when prompted. Click again to hang up.',
    'demo.end': 'End call',
    'demo.connecting': 'Connecting…',
    'demo.live': 'On call — speak freely',
    'demo.ended': 'Call ended',
    'demo.unavailable': 'Voice demo is unavailable right now. Leave a message below.',
    'demo.error': 'Something went wrong. Please try again.',
    'demo.micDenied': 'Microphone access is required for the demo.',
    'features.title': 'Built for real operations',
    'features.subtitle': 'Not a chatbot demo — agents that hear, decide, and take action in your stack.',
    'features.voice.title': 'Natural voice',
    'features.voice.desc':
      'Low-latency speech in Hebrew and English with barge-in, so callers can interrupt naturally.',
    'features.connect.title': 'System connections',
    'features.connect.desc':
      'Read and write CRM records, calendars, tickets, and custom APIs during the call — with permissions you control.',
    'features.telephony.title': 'Telephony ready',
    'features.telephony.desc':
      'Inbound and outbound PSTN, WebRTC in-browser demos, and transfer to a human when needed.',
    'features.knowledge.title': 'Company knowledge',
    'features.knowledge.desc':
      'Ground answers in your playbooks, product docs, and live data — not generic internet guesses.',
    'features.governance.title': 'Governance',
    'features.governance.desc':
      'Audit trails, scoped tools, and handoff rules so agents stay inside your operational boundaries.',
    'features.bilingual.title': 'Hebrew & English',
    'features.bilingual.desc':
      'Designed for Israeli and global teams — colloquial Hebrew, clear English, and smooth language switching.',
    'connect.title': 'Connect to client systems',
    'connect.subtitle': 'Agents act through the systems you already run — securely, with the tools you expose.',
    'connect.crm.title': 'CRM & sales',
    'connect.crm.desc':
      'Create leads, update opportunities, schedule follow-ups, and log call notes while the conversation is live.',
    'connect.crm.i1': 'Salesforce & HubSpot',
    'connect.crm.i2': 'Custom CRM APIs',
    'connect.crm.i3': 'Lead qualification flows',
    'connect.ops.title': 'Ops & service',
    'connect.ops.desc':
      'Open tickets, check order status, verify identity, and escalate to the right queue with full context.',
    'connect.ops.i1': 'Helpdesk & ticketing',
    'connect.ops.i2': 'Order & billing lookups',
    'connect.ops.i3': 'Warm transfer to humans',
    'connect.custom.title': 'Your stack',
    'connect.custom.desc':
      'Wire REST/GraphQL endpoints, webhooks, and internal tools so the agent can execute your business logic.',
    'connect.custom.i1': 'Authenticated APIs',
    'connect.custom.i2': 'Playbooks & workflows',
    'connect.custom.i3': 'Event webhooks',
    'use.title': 'Where voice agents shine',
    'use.subtitle': 'From first contact to ongoing service — always connected to the systems that matter.',
    'use.inbound.title': 'Inbound reception',
    'use.inbound.desc':
      'Answer every call, route intelligently, capture intent, and book meetings without hold music.',
    'use.outbound.title': 'Outbound campaigns',
    'use.outbound.desc':
      'Compliant outbound dialing with live CRM updates and natural conversation — not robotic scripts.',
    'use.support.title': 'Support & status',
    'use.support.desc':
      'Let callers check status, reset access, or open tickets while the agent reads live system data.',
    'use.qualify.title': 'Lead qualification',
    'use.qualify.desc':
      'Ask the right questions, score fit, write structured notes, and hand warm leads to sales.',
    'contact.title': 'Put a voice agent on your systems',
    'contact.subtitle':
      'Tell us which systems you run and what conversations you want automated. We’ll propose a focused pilot.',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.company': 'Company',
    'form.message': 'What should the agent connect to?',
    'form.send': 'Send message',
    'form.sending': 'Sending…',
    'form.success': 'Message sent. We’ll get back to you soon.',
    'form.error': 'Could not send the message.',
    'form.networkError': 'Network error. Please try again later.',
    'footer.description':
      'AI voice agents that connect to your client systems — natural conversation, real actions.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.copyright': '© 2026 s-peak.ai. All rights reserved.',
  },
  he: {
    'nav.demo': 'הדגמה חיה',
    'nav.capabilities': 'יכולות',
    'nav.connect': 'חיבורים',
    'nav.useCases': 'שימושים',
    'nav.contact': 'צור קשר',
    'hero.brand': 's-peak.ai',
    'hero.title': 'סוכני קול שמתחברים למערכות העסקיות שלכם',
    'hero.subtitle':
      'שיחות AI טבעיות בעברית ובאנגלית — מענה, סינון לידים וביצוע פעולות דרך CRM, טלפוניה ו־API פנימיים.',
    'hero.tryDemo': 'נסו הדגמה חיה',
    'hero.talkUs': 'דברו איתנו',
    'demo.title': 'דברו עם סוכן עכשיו',
    'demo.subtitle': 'לחצו על המיקרופון ודברו — הסוכן פעיל בדפדפן.',
    'demo.aria': 'התחלת הדגמת קול',
    'demo.ready': 'מוכן — לחצו להתחלה',
    'demo.hint': 'אשרו גישה למיקרופון כשתתבקשו. לחצו שוב לסיום השיחה.',
    'demo.end': 'סיים שיחה',
    'demo.connecting': 'מתחבר…',
    'demo.live': 'בשיחה — אפשר לדבר',
    'demo.ended': 'השיחה הסתיימה',
    'demo.unavailable': 'הדגמת הקול לא זמינה כרגע. השאירו הודעה למטה.',
    'demo.error': 'משהו השתבש. נסו שוב.',
    'demo.micDenied': 'נדרשת גישה למיקרופון להדגמה.',
    'features.title': 'בנוי לתפעול אמיתי',
    'features.subtitle': 'לא דמו של צ׳אטבוט — סוכנים ששומעים, מחליטים ופועלים במערכות שלכם.',
    'features.voice.title': 'קול טבעי',
    'features.voice.desc':
      'דיבור בעברית ובאנגלית עם השהיה נמוכה ו־barge-in, כדי שהמתקשר יוכל להפסיק באמצע.',
    'features.connect.title': 'חיבור למערכות',
    'features.connect.desc':
      'קריאה וכתיבה ל־CRM, יומנים, קריאות שירות ו־API מותאמים — עם הרשאות שאתם מגדירים.',
    'features.telephony.title': 'מוכן לטלפוניה',
    'features.telephony.desc':
      'שיחות נכנסות ויוצאות ב־PSTN, הדגמות WebRTC בדפדפן, והעברה לנציג אנושי בעת הצורך.',
    'features.knowledge.title': 'ידע ארגוני',
    'features.knowledge.desc':
      'תשובות מבוססות על פלייבוקים, מסמכי מוצר ונתונים חיים — לא ניחושים כלליים מהאינטרנט.',
    'features.governance.title': 'ממשל ובקרה',
    'features.governance.desc':
      'יומני ביקורת, כלים מוגבלים וכללי העברה — כדי שהסוכן יישאר בגבולות התפעול שלכם.',
    'features.bilingual.title': 'עברית ואנגלית',
    'features.bilingual.desc':
      'מותאם לצוותים בישראל ובעולם — עברית מדוברת, אנגלית ברורה ומעבר שפה חלק.',
    'connect.title': 'חיבור למערכות הלקוח',
    'connect.subtitle': 'הסוכנים פועלים דרך המערכות שכבר רצות אצלכם — בצורה מאובטחת ועם הכלים שתחשפו.',
    'connect.crm.title': 'CRM ומכירות',
    'connect.crm.desc':
      'יצירת לידים, עדכון הזדמנויות, תיאום פגישות ותיעוד שיחה — בזמן אמת במהלך השיחה.',
    'connect.crm.i1': 'Salesforce ו־HubSpot',
    'connect.crm.i2': 'API ל־CRM מותאם',
    'connect.crm.i3': 'תהליכי סינון לידים',
    'connect.ops.title': 'תפעול ושירות',
    'connect.ops.desc':
      'פתיחת קריאות, בדיקת סטטוס הזמנה, אימות זהות והסלמה לתור הנכון עם הקשר מלא.',
    'connect.ops.i1': 'מערכות תמיכה וקריאות',
    'connect.ops.i2': 'בדיקות הזמנה וחיוב',
    'connect.ops.i3': 'העברה חמה לנציג',
    'connect.custom.title': 'הסטאק שלכם',
    'connect.custom.desc':
      'חיבור REST/GraphQL, webhooks וכלים פנימיים כדי שהסוכן יבצע את הלוגיקה העסקית שלכם.',
    'connect.custom.i1': 'API מאומתים',
    'connect.custom.i2': 'פלייבוקים ותהליכים',
    'connect.custom.i3': 'אירועי webhook',
    'use.title': 'איפה סוכני קול מצטיינים',
    'use.subtitle': 'ממגע ראשון ועד שירות שוטף — תמיד מחוברים למערכות שחשובות.',
    'use.inbound.title': 'קבלה נכנסת',
    'use.inbound.desc': 'מענה לכל שיחה, ניתוב חכם, הבנת כוונה ותיאום פגישות — בלי מוזיקת המתנה.',
    'use.outbound.title': 'קמפיינים יוצאים',
    'use.outbound.desc':
      'חיוג יוצא תואם רגולציה עם עדכוני CRM חיים ושיחה טבעית — לא תסריט רובוטי.',
    'use.support.title': 'תמיכה וסטטוס',
    'use.support.desc':
      'בדיקת סטטוס, איפוס גישה או פתיחת קריאה — בזמן שהסוכן קורא נתונים חיים מהמערכת.',
    'use.qualify.title': 'סינון לידים',
    'use.qualify.desc':
      'שאלות מדויקות, דירוג התאמה, הערות מובנות והעברת לידים חמים למכירות.',
    'contact.title': 'שימו סוכן קול על המערכות שלכם',
    'contact.subtitle':
      'ספרו אילו מערכות רצות אצלכם ואילו שיחות תרצו לאוטומט. נציע פיילוט ממוקד.',
    'form.name': 'שם',
    'form.email': 'אימייל',
    'form.company': 'חברה',
    'form.message': 'לאילו מערכות הסוכן צריך להתחבר?',
    'form.send': 'שליחת הודעה',
    'form.sending': 'שולח…',
    'form.success': 'ההודעה נשלחה. נחזור אליכם בהקדם.',
    'form.error': 'לא הצלחנו לשלוח את ההודעה.',
    'form.networkError': 'שגיאת רשת. נסו שוב מאוחר יותר.',
    'footer.description': 'סוכני קול AI שמתחברים למערכות הלקוח — שיחה טבעית, פעולות אמיתיות.',
    'footer.product': 'מוצר',
    'footer.company': 'חברה',
    'footer.copyright': '© 2026 s-peak.ai. כל הזכויות שמורות.',
  },
};

let currentLang = localStorage.getItem('speak-lang') || 'en';

function t(key) {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('speak-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (translations[lang]?.[key]) el.setAttribute('aria-label', translations[lang][key]);
  });

  const langText = document.getElementById('langText');
  if (langText) langText.textContent = lang === 'en' ? 'עברית' : 'English';

  if (!talkActive) setTalkStatus(talkStatusKey || 'demo.ready');
}

/* Navigation */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

function setNavOpen(open) {
  if (!navMenu || !navToggle) return;
  navMenu.classList.toggle('active', open);
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  const spans = navToggle.querySelectorAll('span');
  spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : 'none';
  spans[1].style.opacity = open ? '0' : '1';
  spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    setNavOpen(!navMenu.classList.contains('active'));
  });
}

document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => setNavOpen(false));
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 76, behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  if (!navbar) return;
  navbar.classList.toggle('is-scrolled', window.scrollY > 40);

  let current = '';
  document.querySelectorAll('section[id]').forEach((section) => {
    if (window.pageYOffset >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-menu a').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

/* Fade-in cards */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.feature-card, .connect-card, .use-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.55s ease ${i * 0.05}s, transform 0.55s ease ${i * 0.05}s`;
    observer.observe(el);
  });
});

/* Live voice demo (ElevenLabs WebRTC) */
const talkBtn = document.getElementById('talkBtn');
const talkEndBtn = document.getElementById('talkEndBtn');
const talkStatusEl = document.getElementById('talkStatus');

let talkActive = false;
let talkBusy = false;
let talkStatusKey = 'demo.ready';
const rtc = { conversation: null, simpleUser: null, localStream: null, mode: null };

function setTalkStatus(key) {
  talkStatusKey = key;
  if (talkStatusEl) talkStatusEl.textContent = t(key);
}

function setTalkUi(live) {
  talkBtn?.classList.toggle('is-live', live);
  if (talkEndBtn) talkEndBtn.hidden = !live;
}

function talkConfigUrl() {
  return String(CFG.talkConfigUrl || '').replace(/\/$/, '');
}

function resolveTalkTokenUrl(config) {
  const raw = config?.tokenUrl;
  if (raw) {
    if (/^https?:\/\//i.test(raw)) return raw.replace(/\/$/, '');
    const base = new URL(talkConfigUrl());
    return `${base.origin}${raw.startsWith('/') ? raw : `/${raw}`}`;
  }
  return talkConfigUrl().replace(/\/config$/, '/token');
}

async function fetchTalkConfig() {
  const fallback = () => {
    const agentId = String(CFG.elevenLabsAgentId || '').trim();
    if (!agentId) {
      const err = new Error('talk_not_configured');
      err.status = 503;
      throw err;
    }
    return {
      ok: true,
      mode: 'elevenlabs',
      agentId,
      connectionType: 'webrtc',
      auth: 'public',
    };
  };

  try {
    const res = await fetch(talkConfigUrl());
    if (!res.ok) {
      if (res.status === 404 || res.status === 503) return fallback();
      const err = new Error('talk config failed');
      err.status = res.status;
      throw err;
    }
    const body = await res.json().catch(() => ({}));
    if (body?.error === 'talk_not_configured' || !body?.agentId) {
      return fallback();
    }
    return body;
  } catch (err) {
    if (err?.status && err.status !== 404 && err.status !== 503) throw err;
    return fallback();
  }
}

async function fetchTalkToken(config) {
  const res = await fetch(resolveTalkTokenUrl(config));
  if (!res.ok) {
    let body = {};
    try {
      body = await res.json();
    } catch {
      body = {};
    }
    const err = new Error(body.message || body.error || 'talk token failed');
    err.status = res.status;
    throw err;
  }
  return res.json();
}

async function loadElevenLabsClient() {
  const version = '0.16.0';
  // esm.sh first — jsdelivr fails on bare livekit-client imports in the browser.
  const urls = [
    `https://esm.sh/@elevenlabs/client@${version}`,
    `https://cdn.jsdelivr.net/npm/@elevenlabs/client@${version}/dist/lib.modern.js`,
  ];
  let lastErr;
  for (const url of urls) {
    try {
      const mod = await import(url);
      const Conversation = mod.Conversation || mod.default?.Conversation;
      if (typeof Conversation?.startSession === 'function') return Conversation;
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error('elevenlabs_client_unavailable');
}

async function loadSipSimpleUser() {
  const urls = [
    'https://cdn.jsdelivr.net/npm/sip.js@0.21.2/lib/platform/web/simple-user/simple-user.js/+esm',
    'https://cdn.jsdelivr.net/npm/sip.js@0.21.2/lib/platform/web/index.js/+esm',
  ];
  let lastErr;
  for (const url of urls) {
    try {
      const mod = await import(url);
      const SimpleUser = mod.SimpleUser || mod.default?.SimpleUser || mod.default;
      if (typeof SimpleUser === 'function') return SimpleUser;
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error('sipjs_unavailable');
}

function apiBase() {
  return String(CFG.apiBase || '').replace(/\/$/, '');
}

function getPeerConnection(simpleUser) {
  return (
    simpleUser?.session?.sessionDescriptionHandler?.peerConnection ||
    simpleUser?.sessionManager?.managedSessions?.[0]?.session?.sessionDescriptionHandler
      ?.peerConnection ||
    null
  );
}

async function attachLiveMic(simpleUser, stream) {
  const track = stream?.getAudioTracks?.()?.[0];
  if (!track) return false;
  track.enabled = true;
  const pc = getPeerConnection(simpleUser);
  if (!pc || typeof pc.getSenders !== 'function') return false;
  const sender = pc.getSenders().find((s) => !s.track || s.track.kind === 'audio');
  if (sender && typeof sender.replaceTrack === 'function') {
    await sender.replaceTrack(track);
    return true;
  }
  return Boolean(sender);
}

function stopLocalStream() {
  const stream = rtc.localStream;
  rtc.localStream = null;
  if (!stream) return;
  stream.getTracks().forEach((tr) => {
    try {
      tr.stop();
    } catch {
      /* ignore */
    }
  });
}

async function cleanupRtc() {
  const conversation = rtc.conversation;
  const user = rtc.simpleUser;
  rtc.conversation = null;
  rtc.simpleUser = null;
  rtc.mode = null;
  talkActive = false;
  setTalkUi(false);
  stopLocalStream();

  if (conversation) {
    try {
      await conversation.endSession().catch(() => {});
    } catch {
      /* ignore */
    }
  }

  if (user) {
    try {
      await user.hangup().catch(() => {});
    } catch {
      /* ignore */
    }
    try {
      await user.unregister().catch(() => {});
    } catch {
      /* ignore */
    }
    try {
      await user.disconnect().catch(() => {});
    } catch {
      /* ignore */
    }
  }
}

function markTalkLive() {
  talkActive = true;
  setTalkUi(true);
  setTalkStatus('demo.live');
}

async function startElevenLabsTalk() {
  const config = await fetchTalkConfig();
  const agentId = config.agentId || CFG.elevenLabsAgentId;
  const useToken = config.auth === 'token' || Boolean(config.tokenUrl);
  const Conversation = await loadElevenLabsClient();

  const sessionOptions = {
    connectionType: config.connectionType || 'webrtc',
    dynamicVariables: {
      caller_id: 'web',
      source: CFG.source || 's-peak.ai',
      language: currentLang,
    },
    onConnect: () => markTalkLive(),
    onDisconnect: () => {
      hangupTalk(false);
    },
    onError: (message) => {
      console.warn('[speak demo]', message);
    },
  };

  if (useToken) {
    const tokenBody = await fetchTalkToken(config);
    const conversationToken = tokenBody.conversationToken || tokenBody.token;
    if (!conversationToken) {
      const err = new Error('talk_token_missing');
      err.status = 502;
      throw err;
    }
    sessionOptions.conversationToken = conversationToken;
  } else {
    if (!agentId) {
      const err = new Error('agent_id_missing');
      err.status = 503;
      throw err;
    }
    sessionOptions.agentId = agentId;
  }

  const conversation = await Conversation.startSession(sessionOptions);
  rtc.conversation = conversation;
  rtc.mode = 'elevenlabs';
  if (conversation.isOpen?.()) markTalkLive();
}

async function startSipTalk() {
  const base = apiBase();
  if (!base) {
    const err = new Error('sip_not_configured');
    err.status = 503;
    throw err;
  }

  const userId = encodeURIComponent(CFG.webrtcUserId || 'shiri');
  const statusRes = await fetch(`${base}/api/public/web-call/${userId}/status`);
  if (!statusRes.ok) {
    const err = new Error('webrtc unavailable');
    err.status = statusRes.status;
    throw err;
  }

  const sessionRes = await fetch(`${base}/api/public/web-call/${userId}/session`, {
    method: 'POST',
  });
  if (!sessionRes.ok) {
    const err = new Error('session failed');
    err.status = sessionRes.status;
    throw err;
  }
  const session = await sessionRes.json();
  if (session.mode !== 'sipjs' || !session.wsUrl || !session.sipPassword) {
    const err = new Error('unexpected session mode');
    err.status = 503;
    throw err;
  }

  const SimpleUser = await loadSipSimpleUser();
  const domain = session.sipDomain || new URL(base).hostname;
  const sipUser = session.sipUser || 'speak_guest';
  const aor = session.sipUri || `sip:${sipUser}@${domain}`;
  const dial = session.dial || 'weblabs';
  const target = dial.includes('@') ? dial : `sip:${dial}@${domain}`;
  const remoteAudio = document.getElementById('remoteAudio');

  let localStream;
  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
      video: false,
    });
  } catch {
    const err = new Error('microphone_denied');
    err.status = 503;
    throw err;
  }
  rtc.localStream = localStream;

  const simpleUser = new SimpleUser(session.wsUrl, {
    aor,
    media: {
      constraints: { audio: true, video: false },
      remote: remoteAudio ? { audio: remoteAudio } : undefined,
    },
    userAgentOptions: {
      authorizationUsername: sipUser,
      authorizationPassword: session.sipPassword,
      sessionDescriptionHandlerFactoryOptions: {
        constraints: { audio: true, video: false },
        peerConnectionConfiguration: {
          iceServers: session.iceServers || [{ urls: 'stun:stun.l.google.com:19302' }],
        },
      },
    },
  });

  rtc.simpleUser = simpleUser;
  rtc.mode = 'sipjs';

  simpleUser.delegate = {
    onCallAnswered: () => {
      attachLiveMic(simpleUser, localStream).catch(() => {});
      try {
        if (remoteAudio) {
          remoteAudio.muted = false;
          remoteAudio.volume = 1;
          remoteAudio.play()?.catch?.(() => {});
        }
      } catch {
        /* ignore */
      }
      markTalkLive();
    },
    onCallHangup: () => {
      hangupTalk(false);
    },
    onServerDisconnect: () => {
      hangupTalk(false);
    },
  };

  await simpleUser.connect();
  await simpleUser.register();
  await simpleUser.call(target);
  await attachLiveMic(simpleUser, localStream).catch(() => {});
  setTimeout(() => attachLiveMic(simpleUser, localStream).catch(() => {}), 400);
  setTimeout(() => attachLiveMic(simpleUser, localStream).catch(() => {}), 1200);
  try {
    if (remoteAudio) {
      remoteAudio.muted = false;
      await remoteAudio.play().catch(() => {});
    }
  } catch {
    /* ignore */
  }
}

function talkMode() {
  return String(CFG.talkMode || 'auto').trim().toLowerCase();
}

async function startLiveTalk() {
  const mode = talkMode();
  if (mode === 'sipjs') {
    await startSipTalk();
    return;
  }
  if (mode === 'elevenlabs') {
    await startElevenLabsTalk();
    return;
  }

  // auto: prefer ElevenLabs when configured, fall back to SIP web-call
  try {
    await startElevenLabsTalk();
  } catch (err) {
    console.warn('[speak demo] elevenlabs failed, trying sipjs', err);
    await cleanupRtc();
    await startSipTalk();
  }
}

async function startTalk() {
  if (talkBusy) return;
  if (talkActive) {
    await hangupTalk(true);
    return;
  }

  talkBusy = true;
  if (talkBtn) talkBtn.disabled = true;
  setTalkStatus('demo.connecting');

  try {
    if (!navigator.mediaDevices?.getUserMedia) {
      const err = new Error('unsupported');
      err.status = 503;
      throw err;
    }
    await startLiveTalk();
    if (!talkActive && rtc.mode === 'elevenlabs') markTalkLive();
    if (!talkActive && rtc.mode === 'sipjs') setTalkStatus('demo.connecting');
  } catch (err) {
    console.warn('[speak demo] failed', err);
    await cleanupRtc();
    const msg = String(err?.message || '');
    if (err?.name === 'NotAllowedError' || msg === 'microphone_denied') {
      setTalkStatus('demo.micDenied');
    } else if (
      err?.status === 404 ||
      err?.status === 503 ||
      msg.includes('404') ||
      msg === 'agent_id_missing' ||
      msg === 'elevenlabs_client_unavailable' ||
      msg === 'sipjs_unavailable' ||
      msg === 'sip_not_configured' ||
      msg === 'webrtc unavailable'
    ) {
      setTalkStatus('demo.unavailable');
    } else {
      setTalkStatus('demo.error');
    }
  } finally {
    talkBusy = false;
    if (talkBtn) talkBtn.disabled = false;
  }
}

async function hangupTalk(announce = true) {
  await cleanupRtc();
  if (announce) setTalkStatus('demo.ended');
}

talkBtn?.addEventListener('click', startTalk);
talkEndBtn?.addEventListener('click', () => hangupTalk(true));

/* Contact form */
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  document.getElementById('langToggle')?.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'he' : 'en');
  });

  const contactForm = document.getElementById('contactForm');
  const statusMessage = document.getElementById('statusMessage');

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (statusMessage) {
      statusMessage.textContent = t('form.sending');
      statusMessage.className = 'status-message status-info';
    }

    const name = document.getElementById('name')?.value?.trim() || '';
    const email = document.getElementById('email')?.value?.trim() || '';
    const company = document.getElementById('company')?.value?.trim() || '';
    const message = document.getElementById('message')?.value?.trim() || '';
    const source = CFG.source || 's-peak.ai';

    const mailMessage = [
      `Source: ${source}`,
      company ? `Company: ${company}` : '',
      '',
      message,
    ]
      .filter((line, i, arr) => !(line === '' && arr[i - 1] === ''))
      .join('\n')
      .trim();

    const body = {
      name: name || source,
      email,
      message: mailMessage,
      website: '',
    };

    const endpoint =
      CFG.contactApiUrl ||
      CFG.mailEndpoint ||
      'https://162-35-181-76.sslip.io:8443/api/contact';

    try {
      // text/plain avoids a CORS preflight; the contact API still parses JSON.
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(body),
      });
      const data = await resp.json().catch(() => ({}));

      if (data.ok || resp.ok) {
        if (statusMessage) {
          statusMessage.textContent = t('form.success');
          statusMessage.className = 'status-message status-success';
        }
        contactForm.reset();
        setTimeout(() => {
          if (statusMessage) {
            statusMessage.textContent = '';
            statusMessage.className = 'status-message';
          }
        }, 5000);
      } else {
        if (statusMessage) {
          statusMessage.textContent = t('form.error');
          statusMessage.className = 'status-message status-error';
        }
      }
    } catch (err) {
      console.error(err);
      if (statusMessage) {
        statusMessage.textContent = t('form.networkError');
        statusMessage.className = 'status-message status-error';
      }
    }
  });
});
