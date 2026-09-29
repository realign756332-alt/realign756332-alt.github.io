// Английские тексты сайта — основа для всех остальных языков.
// Источник истины для текстов — site-copy.md в корне репозитория: английский и русский берутся
// оттуда дословно, остальные языки переводятся по смыслу в том же стиле.
// Каждый файл src/i18n/ui/<язык>.ts повторяет эту структуру; если какой-то строки
// не хватает, сборка (npm run check) покажет ошибку.
// {n}, {price}, {year}, {language} и т. п. — подстановки, их переводить не нужно.

const en = {
  meta: {
    homeTitle: 'BitEon Studio — Your Productivity Ecosystem',
    homeDescription:
      'Discover the BitEon Studio ecosystem of mobile and web apps, built to expand what you can do and take your productivity to a new level.',
    homeImageAlt: 'BitEon Studio logo on a lime background',
    notFoundTitle: 'Page not found — BitEon Studio',
    notFoundDescription: 'The page may have moved or no longer exists.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    homeLink: 'BitEon Studio, home',
    mainNav: 'Main',
    footerNav: 'Footer',
    openMenu: 'Menu',
    closeMenu: 'Close',
  },
  nav: {
    apps: 'Apps',
    new: 'New',
    principles: 'Principles',
    faq: 'Questions',
    cta: 'Explore apps',
  },
  language: {
    label: 'Language',
    change: 'Change language. Current: {lang}',
    // Подсказка показывается на языке, который она предлагает. {language} — название этого языка.
    hint: 'This page is also available in {language}.',
    hintAction: 'Switch',
    hintClose: 'Dismiss',
  },
  hero: {
    title: 'Your productivity ecosystem.',
    lead: 'Discover the BitEon Studio ecosystem of apps, built to expand what you can do. Innovative web services and mobile software that adapt to your rhythm of life and take your personal productivity to a whole new level.',
    primary: 'Explore apps',
    secondary: "What's new",
    mascotAlt:
      'The BitEon Studio mascot: a young woman with long navy hair and a lime streak, in a navy polo with a lime B logo, standing with her hands in her pockets.',
  },
  categories: {
    title: 'Find your app.',
    // Формы множественного числа по правилам языка (Intl.PluralRules): zero, one, two, few, many, other.
    count: { one: '{n} app', other: '{n} apps' } as Plural,
    items: {
      productivity: {
        name: 'Productivity',
        slogan: 'Focus on what matters.',
        text: 'Manage your time and reach your goals without the hassle.',
      },
      finance: {
        name: 'Finance',
        slogan: 'Your money, fully under control.',
        text: 'Simple, clear budgeting without complicated spreadsheets.',
      },
      utilities: {
        name: 'Utilities',
        slogan: 'Quiet helpers.',
        text: 'Elegant solutions for quick everyday tasks.',
      },
      creativity: {
        name: 'Creativity',
        slogan: 'Freedom to create.',
        text: 'Tools for designers, writers and digital content creators.',
      },
    },
  },
  releases: {
    title: 'New releases.',
    lead: 'Fresh creative solutions are already here.',
    available: 'Available',
    comingSoon: 'Coming soon',
  },
  apps: {
    typeMobile: 'Mobile',
    typeWeb: 'Web',
    appStore: 'Get on the App Store',
    googlePlay: 'Get it on Google Play',
    openApp: 'Open app',
    appLanguages: 'App languages:',
    priceFree: 'Free',
    priceFrom: 'From {price}',
    perMonth: '{price} / month',
    perYear: '{price} / year',
  },
  principles: {
    title: 'BitEon principles.',
    lead: 'We build software the way we would want it built for ourselves.',
    points: [
      {
        title: 'One goal: the perfect result',
        text: "We don't try to do everything at once. Our apps hit the target precisely, delivering maximum speed and simplicity.",
      },
      {
        title: 'Customer-centric approach',
        text: 'We shape our products around real user experience. Every piece of feedback informs our updates, making the software better with each release.',
      },
      {
        title: 'Instant results',
        text: 'Our interfaces are designed so you finish your task in as few clicks as possible. No learning curve — open it and get results right away.',
      },
      {
        title: 'Respect for your time',
        text: 'No complicated instructions, long sign-ups or confusing flows. Our products are built to be useful from the very first second.',
      },
    ],
  },
  faq: {
    title: 'Questions.',
    intro: 'Buying, installing and using BitEon apps.',
    items: [
      {
        q: 'How do I get a BitEon app?',
        a: "Mobile apps are available on the App Store and Google Play. Web apps open right in your browser — the link is on each app's page.",
      },
      { q: 'How much do the apps cost?', a: 'Each app page shows its price and plan options before you buy.' },
      {
        q: 'Which devices are supported?',
        a: "It depends on the app. Supported platforms are listed on each app's page.",
      },
      { q: 'Which languages do the apps support?', a: 'Each app page lists the languages available in the app.' },
      { q: 'How do I contact support?', a: "Use the support link inside the app or on the app's page." },
    ],
  },
  footer: {
    tagline: 'Your productivity ecosystem.',
    apps: 'Apps',
    allApps: 'All apps',
    mobileApps: 'Mobile apps',
    webApps: 'Web apps',
    support: 'Support',
    helpFaq: 'Help & FAQ',
    contact: 'Contact us',
    company: 'Company',
    about: 'About BitEon',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    rights: '© {year} BitEon Studio. All rights reserved.',
  },
  notFound: {
    title: 'Page not found.',
    lead: 'The page may have moved or no longer exists.',
    home: 'Back to home',
    explore: 'Explore apps',
    searchPlaceholder: 'Search apps',
    noResults: 'Nothing found. Try another word.',
  },
};

export type Plural = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

/** Структура словаря: у всех языков одни и те же ключи. */
export type Dict = Widen<typeof en> & { categories: { count: Plural } };

export default en as Dict;
