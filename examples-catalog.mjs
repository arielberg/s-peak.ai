// Add a demo here to show another card. dial is an existing internal Asterisk
// extension (infra/asterisk/extensions.conf in voip-v4), never a PSTN number.
export const examples = [
  {
    id: 'kol-kav', dial: '406', theme: 'transit', icon: 'bus',
    he: {
      name: 'קול קו', category: 'תחבורה ציבורית',
      description: 'אומרים מאיפה יוצאים ולאן רוצים להגיע, ומקבלים הכוונה לנסיעה בתחבורה ציבורית — בשיחה פשוטה.',
      prompt: 'איך מגיעים מתחנת סבידור בתל אביב לירושלים?',
      details: 'תכנון מסלול · קווים והחלפות · הכוונה קולית',
    },
    en: {
      name: 'Kol Kav', category: 'Public transport',
      description: 'Say where you are and where you want to go. Get public transport directions in a simple conversation.',
      prompt: 'How do I get from Savidor station in Tel Aviv to Jerusalem?',
      details: 'Route planning · Lines and transfers · Spoken directions',
    },
  },
  {
    id: 'cafe-click', dial: '408', theme: 'cafe', icon: 'coffee',
    he: {
      name: 'קפה קליק', category: 'בית קפה',
      description: 'מזמינים קפה ומשהו ליד, שואלים על התפריט ומתאימים את ההזמנה לטעם שלכם. הסוכנת מסכמת את הכול לפני האישור.',
      prompt: 'אפשר קפוצ׳ינו עם חלב שיבולת שועל?',
      details: 'הזמנה לאיסוף · שאלות על התפריט · התאמות אישיות',
    },
    en: {
      name: 'Cafe Click', category: 'Coffee shop',
      description: 'Order a coffee and a bite, ask about the menu, and customize your order. The agent reads it back before you confirm.',
      prompt: 'Could I have a cappuccino with oat milk?',
      details: 'Takeaway orders · Menu questions · Personal preferences',
    },
  },
];
