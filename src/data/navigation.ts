// Пункты меню в шапке. Подписи — в src/i18n/ui/<язык>.ts (раздел nav).
// Пока готова только главная, пункты ведут к её блокам.
// Когда появятся разделы, замени href на '/apps/', '/tools/' и т. д. — язык подставится сам.
export const mainNav = [
  { key: 'apps', href: '/#apps' },
  { key: 'categories', href: '/#categories' },
  { key: 'why', href: '/#why' },
  { key: 'faq', href: '/#faq' },
] as const;

export const headerCta = { key: 'cta', href: '/#apps' } as const;
