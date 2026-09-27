// Категории приложений. Иконка — файл в src/assets/categories/<slug>.svg.
// Категория показывается на сайте, только если в ней есть хотя бы одно приложение.
export const categories = [
  { slug: 'productivity', name: 'Productivity', summary: 'Plan, focus and get things done.' },
  { slug: 'finance', name: 'Finance', summary: 'Track money without spreadsheets.' },
  { slug: 'utilities', name: 'Utilities', summary: 'Small tools for everyday jobs.' },
  { slug: 'lifestyle', name: 'Lifestyle', summary: 'Habits, health and daily routine.' },
  { slug: 'creativity', name: 'Creativity', summary: 'Make images, colors and ideas.' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];
export const categorySlugs = categories.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
