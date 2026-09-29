// Пункты меню в шапке. Подписи — в src/i18n/ui/<язык>.ts (раздел nav), тексты — из site-copy.md.
// Пока готова только главная, пункты ведут к её блокам.
// Когда появятся разделы, замени href на '/apps/', '/tools/' и т. д. — язык подставится сам.
// onlyWithApps: пункт показывается, только когда на сайте есть хотя бы одно реальное приложение
// (блок новинок до этого скрыт).
export const mainNav = [
  { key: 'apps', href: '/#categories' },
  { key: 'new', href: '/#new', onlyWithApps: true },
  { key: 'principles', href: '/#principles' },
  { key: 'faq', href: '/#faq' },
] as const;

export const headerCta = { key: 'cta', href: '/#categories' } as const;

/** Пункты меню, которые сейчас можно показать. */
export function visibleNav(hasApps: boolean) {
  return mainNav.filter((item) => hasApps || !('onlyWithApps' in item && item.onlyWithApps));
}
