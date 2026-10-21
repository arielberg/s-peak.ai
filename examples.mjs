import { examples } from './examples-catalog.mjs';
import { ExampleCall } from './examples-call.mjs';

const copy = {
  he: {
    pageTitle: 'דוגמאות לשיחה עם סוכני קול | s-peak.ai',
    skip: 'דילוג לתוכן', eyebrow: 'סוכני הקול של s-peak.ai', title: 'בואו לשמוע איך זה עובד.',
    intro: 'בוחרים דוגמה, מפעילים את המיקרופון ומתחילים לדבר. כל סוכן מכיר עולם אחר — מהדרך לעבודה ועד הקפה של הבוקר.',
    note: 'ישירות מהדפדפן · ללא התקנה · שיחה בעברית',
    help: 'בהתחלת השיחה תתבקשו לאשר גישה למיקרופון. לסיום, לחצו על ״סיום שיחה״. בסביבה רועשת כדאי להשתמש באוזניות.',
    contactEyebrow: 'ומה הסוכן שלכם יעשה?', contactTitle: 'אותה שיחה טבעית. העסק שלכם.',
    contactText: 'ספרו לנו איזו שיחה תרצו להפוך לפשוטה יותר.', contactAction: 'בואו נדבר',
    try: 'אפשר להתחיל ככה', start: 'התחלת שיחה', end: 'סיום שיחה', cancel: 'ביטול חיבור', play: 'הפעלת שמע',
    ready: 'לחצו כדי לדבר עם הסוכן', connecting: 'מתחברים… אשרו גישה למיקרופון כשתתבקשו.',
    live: 'השיחה מחוברת — אפשר לדבר', closing: 'מסיימים את השיחה…', ended: 'השיחה הסתיימה. אפשר לנסות שוב.',
    busy: 'סיימו את השיחה הנוכחית כדי לנסות דוגמה נוספת.',
    audioBlocked: 'השיחה מחוברת. לחצו על ״הפעלת שמע״ כדי לשמוע את הסוכן.',
    timeout: 'החיבור ארך זמן רב מדי. נסו שוב.', disconnected: 'החיבור נותק. אפשר לנסות שוב.',
    micDenied: 'הגישה למיקרופון נחסמה. אפשרו אותה בהגדרות האתר ונסו שוב.',
    noMic: 'לא נמצא מיקרופון. חברו מיקרופון ונסו שוב.',
    rateLimited: 'בוצעו כמה ניסיונות ברצף. המתינו מעט ונסו שוב.',
    unavailable: 'הדוגמה לא זמינה כרגע. נסו שוב מאוחר יותר.',
    error: 'לא הצלחנו להתחבר. בדקו את החיבור לרשת ונסו שוב.',
    unsupported: 'הדפדפן אינו מאפשר גישה למיקרופון כאן. פתחו את האתר בדפדפן מעודכן ובחיבור מאובטח.',
    gallery: 'דוגמאות לשיחה', navigation: 'ניווט ראשי',
  },
  en: {
    pageTitle: 'Voice agent examples | s-peak.ai',
    skip: 'Skip to content', eyebrow: 'VOICE AGENTS BY S-PEAK.AI', title: 'Hear how it works.',
    intro: 'Pick an example, turn on your microphone, and start talking. Each agent knows a different world — from your commute to your morning coffee.',
    note: 'In your browser · No installation · Conversations in Hebrew',
    help: 'Allow microphone access when the call starts. Choose “End call” to finish. Headphones help in noisy surroundings.',
    contactEyebrow: 'WHAT WILL YOUR AGENT DO?', contactTitle: 'Natural conversations. Your business.',
    contactText: 'Tell us which conversation you want to make easier.', contactAction: 'Talk to us',
    try: 'Try asking (in Hebrew)', start: 'Start a call', end: 'End call', cancel: 'Cancel connection', play: 'Enable audio',
    ready: 'Click to talk to the agent', connecting: 'Connecting… allow microphone access when prompted.',
    live: 'Connected — you can speak now', closing: 'Ending the call…', ended: 'Call ended. You can try again.',
    busy: 'End your current call to try another example.',
    audioBlocked: 'Connected. Select “Enable audio” to hear the agent.',
    timeout: 'The connection took too long. Please try again.', disconnected: 'Connection lost. You can try again.',
    micDenied: 'Microphone access is blocked. Allow it in site settings and try again.',
    noMic: 'No microphone found. Connect one and try again.',
    rateLimited: 'Too many attempts. Please wait a little and try again.',
    unavailable: 'This demo is unavailable right now. Please try again later.',
    error: 'Could not connect. Check your internet connection and try again.',
    unsupported: 'Microphone access is unavailable here. Open the secure site in an up-to-date browser.',
    gallery: 'Voice examples', navigation: 'Main navigation',
  },
};
const icons = {
  bus: '<path d="M43 78V31c0-12 74-12 74 0v47M43 47h74M78 25v22M50 78h60M52 79v10m56-10v10M39 38h-8v20h8m82-20h8v20h-8"/><rect x="43" y="21" width="74" height="60" rx="10"/><path d="M54 63h9m34 0h9M25 97h110"/><circle cx="26" cy="23" r="3"/><path d="M134 68v10m-5-5h10"/>',
  coffee: '<path d="M48 42h62v29a27 27 0 0 1-27 27h-8a27 27 0 0 1-27-27V42Zm62 6h9a14 14 0 0 1 0 28h-10M38 99h91M64 10c-10 10 10 10 0 20m18-20c-10 10 10 10 0 20m18-20c-10 10 10 10 0 20"/><path d="M70 65c-5-8-17 1 8 16 25-15 13-24 8-16l-8 7-8-7Z" stroke-width="2"/>',
};
const micIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg>';
const endIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="3"/></svg>';
const audio = document.getElementById('exampleAudio');
const cards = new Map();
let activeId = null;
let lang = () => document.documentElement.lang === 'en' ? 'en' : 'he';
let text = (key) => copy[lang()][key];
const controller = new ExampleCall({
  apiBase: window.SPEAK_CONFIG?.apiBase || 'https://162-35-181-76.sslip.io:8443',
  userId: window.SPEAK_CONFIG?.webrtcUserId || 'shiri', audio,
  onState(id, state) {
    const card = cards.get(id);
    if (!card) return;
    card.state = state;
    activeId = ['connecting', 'live', 'audioBlocked', 'closing'].includes(state) ? id : null;
    updateControls();
  },
});

function updateControls() {
  for (const [id, card] of cards) {
    const own = activeId === id;
    const busy = activeId && !own;
    const button = card.el.querySelector('.example-start');
    const action = own ? card.state === 'connecting' ? 'cancel' : 'end' : 'start';
    button.innerHTML = own ? endIcon : micIcon;
    const label = document.createElement('span');
    label.textContent = text(action);
    button.append(label);
    button.disabled = Boolean(busy || (own && card.state === 'closing'));
    button.setAttribute('aria-label', `${text(action)} — ${card.example[lang()].name}`);
    const status = card.el.querySelector('.example-status');
    status.textContent = text(busy ? 'busy' : card.state);
    status.dataset.state = card.state;
    card.el.classList.toggle('is-active', own);
    const play = card.el.querySelector('.example-audio');
    play.hidden = card.state !== 'audioBlocked' || !own;
    play.textContent = text('play');
  }
}

for (const [index, example] of examples.entries()) {
  const fragment = document.getElementById('exampleCard').content.cloneNode(true);
  const el = fragment.querySelector('article');
  el.id = example.id;
  el.dataset.theme = example.theme;
  el.querySelector('h2').id = `${example.id}-title`;
  el.setAttribute('aria-labelledby', `${example.id}-title`);
  el.querySelector('.example-number').textContent = String(index + 1).padStart(2, '0');
  el.querySelector('.example-scene-label').textContent = example.id.toUpperCase().replaceAll('-', ' / ');
  el.querySelector('.example-illustration').innerHTML = icons[example.icon] || icons.bus;
  const card = { el, example, state: 'ready' };
  cards.set(example.id, card);
  el.querySelector('.example-start').addEventListener('click', () => {
    if (activeId === example.id) { void controller.end(); return; }
    if (!navigator.mediaDevices?.getUserMedia) { card.state = 'unsupported'; updateControls(); return; }
    void controller.start(example);
  });
  el.querySelector('.example-audio').addEventListener('click', async () => {
    try { await audio.play(); if (activeId === example.id) { card.state = 'live'; updateControls(); } }
    catch { /* Keep the user gesture button visible. */ }
  });
  document.getElementById('examplesGallery').append(fragment);
}

function translate() {
  document.title = text('pageTitle');
  document.querySelector('.navbar').setAttribute('aria-label', text('navigation'));
  document.getElementById('examplesGallery').setAttribute('aria-label', text('gallery'));
  document.querySelectorAll('[data-examples-text]').forEach((el) => { el.textContent = text(el.dataset.examplesText); });
  for (const { el, example } of cards.values()) {
    const localized = example[lang()];
    el.querySelector('h2').textContent = localized.name;
    el.querySelector('.example-category').textContent = localized.category;
    el.querySelector('.example-description').textContent = localized.description;
    el.querySelector('.example-details').textContent = localized.details;
    el.querySelector('.example-prompt-label').textContent = text('try');
    el.querySelector('blockquote').textContent = `“${localized.prompt}”`;
  }
  updateControls();
}
document.addEventListener('speak:languagechange', translate);
window.addEventListener('pagehide', () => { void controller.end(); });
translate();
