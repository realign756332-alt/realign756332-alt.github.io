// Общие данные студии. Меняются здесь — обновляются во всех местах сайта.
export const site = {
  name: 'BitEon Studio',
  tagline: 'Mobile and web apps that just work',
  description:
    'BitEon Studio makes focused mobile and web apps. Each one does one job well, shows its price up front and installs from the App Store, Google Play or your browser.',
  founder: 'Alex',
  // Ссылка на YouTube-канал. Пока пусто — ссылка на сайте не показывается.
  youtubeUrl: '',
  // Адрес поддержки. Пока пусто — не показывается.
  supportEmail: '',
  defaultOgImage: '/og-default.jpg',
  locale: 'en',
} as const;

// Какие разделы сайта уже собраны. Когда раздел готов — ставим true,
// и шапка, подвал и карточки на главной начинают вести на его страницы.
export const sections = {
  apps: false,
  categories: false,
  compare: false,
  tools: false,
  faq: false,
  blog: false,
  company: false,
} as const;
