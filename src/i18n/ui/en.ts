// Английские тексты сайта — основа для всех остальных языков.
// Каждый файл src/i18n/ui/<язык>.ts повторяет эту структуру; если какой-то строки
// не хватает, сборка (npm run check) покажет ошибку.
// {n}, {lang} и т. п. — подстановки, их переводить не нужно.

const en = {
  meta: {
    homeTitle: 'BitEon Studio — Mobile and Web Apps That Just Work',
    homeDescription:
      'BitEon Studio makes focused iPhone, Android and web apps. Clear prices, no tracking, installs from the App Store, Google Play or your browser.',
    homeImageAlt: 'BitEon Studio logo on a lime background',
    notFoundTitle: 'Page not found — BitEon Studio',
    notFoundDescription: 'This page does not exist. Search the BitEon Studio app catalog or go to the main sections.',
    siteDescription:
      'BitEon Studio makes focused mobile and web apps. Each one does one job well, shows its price up front and installs from the App Store, Google Play or your browser.',
  },
  a11y: {
    skipToContent: 'Skip to content',
    homeLink: 'BitEon Studio, home',
    mainNav: 'Main',
    footerNav: 'Footer',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  nav: {
    apps: 'Apps',
    categories: 'Categories',
    why: 'Why BitEon',
    faq: 'FAQ',
    cta: 'Browse apps',
  },
  language: {
    label: 'Language',
    change: 'Change language. Current: {lang}',
    // Подсказка показывается на языке, который она предлагает.
    hint: 'This page is also available in English.',
    hintAction: 'Read in English',
    hintClose: 'Close',
  },
  hero: {
    title: 'Apps that just work',
    lead: 'BitEon Studio makes focused mobile and web apps. Each one does one job well, shows its price up front and stays out of your way.',
    primary: 'Browse apps',
    secondary: 'How buying works',
    mascotAlt:
      'The BitEon Studio mascot: a young woman with long navy hair and a lime streak, in a navy polo with a lime B logo, standing with her hands in her pockets.',
  },
  categories: {
    title: 'Browse by category',
    // Формы множественного числа по правилам языка (Intl.PluralRules): zero, one, two, few, many, other.
    count: { one: '{n} app', other: '{n} apps' } as Plural,
    items: {
      productivity: { name: 'Productivity', summary: 'Plan, focus and get things done.' },
      finance: { name: 'Finance', summary: 'Track money without spreadsheets.' },
      utilities: { name: 'Utilities', summary: 'Small tools for everyday jobs.' },
      lifestyle: { name: 'Lifestyle', summary: 'Habits, health and daily routine.' },
      creativity: { name: 'Creativity', summary: 'Make images, colors and ideas.' },
    },
  },
  apps: {
    featuredTitle: 'Featured apps',
    featuredLead: 'Pick an app, see the price, install it in one step.',
    upcomingTitle: 'Apps on the way',
    upcomingLead: 'Our first apps are in the works. Here is what they will do.',
    example: 'Example',
    comingSoon: 'Coming soon',
    typeMobile: 'Mobile',
    typeWeb: 'Web app',
    platformWeb: 'Web',
    appStore: 'Get on App Store',
    googlePlay: 'Get on Google Play',
    openApp: 'Open app',
    appLanguages: 'App languages:',
    priceFree: 'Free',
    priceFreemium: 'Free + in-app',
    priceFreemiumPro: 'Free, Pro {price}',
    perMonth: '{price} / month',
    perYear: '{price} / year',
  },
  why: {
    title: 'Why BitEon',
    lead: 'A small studio with simple rules for every app we ship.',
    points: [
      { title: 'One job, done well', text: 'Each app solves one clear problem. No feature piles, no settings maze.' },
      { title: 'Clear prices', text: 'Every app shows its price up front, before you buy.' },
      {
        title: 'No tracking on this site',
        text: "No ad trackers and no cookie banners. Each app's privacy policy explains exactly what data it uses.",
      },
      { title: 'Built by a real person', text: 'Alex, the founder, builds every app and reads every support message.' },
    ],
  },
  faq: {
    title: 'Buying, payment and support',
    intro: 'Short answers to what people ask before they buy.',
    // FAQ главной: покупка, оплата, поддержка, возвраты. Ответы короткие и прямые.
    items: [
      {
        q: 'How do I buy a mobile app?',
        a: 'Mobile apps are sold through the App Store and Google Play. Apple and Google handle payment and downloads under their own rules.',
      },
      { q: 'How do I pay for a web app?', a: 'Payment terms for each web app will be listed on that app’s page.' },
      {
        q: 'Can I get a refund?',
        a: 'Refunds for mobile apps follow App Store and Google Play rules: request them from Apple or Google. Refund terms for each web app will be listed on that app’s page.',
      },
      {
        q: 'How do I get support?',
        a: 'Use the support link inside the app or on the app’s page on this site. Your message goes straight to the developer.',
      },
      {
        q: 'Which devices do the apps work on?',
        a: 'Each app’s page lists its platforms: iPhone, Android or any modern web browser.',
      },
    ],
  },
  footer: {
    tagline: 'Focused mobile and web apps, made by one small studio.',
    apps: 'Apps',
    categories: 'Categories',
    compare: 'Compare',
    allComparisons: 'All comparisons',
    tools: 'Tools',
    allTools: 'All free tools',
    faq: 'FAQ',
    buyingRefunds: 'Buying & refunds',
    company: 'Company',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy',
    terms: 'Terms',
    refundPolicy: 'Refund policy',
  },
  notFound: {
    title: 'This page doesn’t exist',
    lead: 'The link may be old or mistyped. Find an app below or go to a main section.',
    searchLabel: 'Search apps',
    searchPlaceholder: 'App name or what it does',
    noResults: 'No apps match that search.',
    sections: 'Main sections',
    home: 'Home',
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
