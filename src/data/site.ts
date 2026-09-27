// Общие данные студии (тексты на разных языках — в src/i18n/ui/).
// Меняются здесь — обновляются во всех местах сайта.
export const site = {
  name: 'BitEon Studio',
  founder: 'Alex',
  // Ссылка на YouTube-канал. Канала пока нет: поле пустое, ссылка на сайте не показывается.
  youtubeUrl: '',
  // Адрес поддержки. Пока пусто — не показывается.
  supportEmail: '',
  defaultOgImage: '/og-default.jpg',
} as const;

// Какие разделы сайта уже собраны. Когда раздел готов — ставим true,
// и шапка, подвал и карточки на главной начинают вести на его страницы.
export const sections = {
  apps: false,
  categories: false,
  tools: false,
  faq: false,
  blog: false,
  company: false,
} as const;
