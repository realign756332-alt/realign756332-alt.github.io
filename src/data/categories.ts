// Категории приложений. Иконка — файл в src/assets/categories/<slug>.svg.
// Название, слоган и описание категории на каждом языке — в src/i18n/ui/<язык>.ts (categories.items),
// тексты берутся из site-copy.md.
// Карточки категорий видны на главной всегда; счётчик приложений — только если в категории
// есть хотя бы одно реальное приложение.
export const categories = [
  { slug: 'productivity' },
  { slug: 'finance' },
  { slug: 'utilities' },
  { slug: 'creativity' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];
export const categorySlugs = categories.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
