// Категории приложений. Иконка — файл в src/assets/categories/<slug>.svg.
// Название и описание категории на каждом языке — в src/i18n/ui/<язык>.ts (categories.items).
// Категория показывается на сайте, только если в ней есть хотя бы одно приложение.
export const categories = [
  { slug: 'productivity' },
  { slug: 'finance' },
  { slug: 'utilities' },
  { slug: 'lifestyle' },
  { slug: 'creativity' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];
export const categorySlugs = categories.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
