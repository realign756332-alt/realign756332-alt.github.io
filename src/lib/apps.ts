import { getCollection, type CollectionEntry } from 'astro:content';
import { sections } from '../data/site';
import { categories } from '../data/categories';

export type App = CollectionEntry<'apps'>;

/** Все приложения, кроме черновиков. Сначала избранные, затем по дате обновления. */
export async function getPublicApps(): Promise<App[]> {
  const apps = await getCollection('apps', ({ data }) => data.status !== 'draft');
  return apps.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.updatedDate.getTime() - a.data.updatedDate.getTime(),
  );
}

/** Категории, в которых есть хотя бы одно опубликованное приложение. */
export async function getActiveCategories() {
  const apps = await getPublicApps();
  return categories
    .map((c) => ({ ...c, count: apps.filter((a) => a.data.category === c.slug).length }))
    .filter((c) => c.count > 0);
}

/** Ссылка на приложение: своя страница, когда раздел готов, иначе карточка на главной. */
export function appHref(app: App) {
  return sections.apps ? `/apps/${app.data.slug}/` : `/#app-${app.data.slug}`;
}

export function categoryHref(slug: string) {
  return sections.categories ? `/category/${slug}/` : `/#categories`;
}

/** Цена словами: «Free», «$9», «$3 / month», «Free + in-app». */
export function priceLabel(app: App) {
  const { price, currency, pricingModel, billingPeriod } = app.data;
  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
  switch (pricingModel) {
    case 'free':
      return 'Free';
    case 'freemium':
      return price > 0 ? `Free, Pro ${amount}` : 'Free + in-app';
    case 'subscription':
      return `${amount} / ${billingPeriod}`;
    default:
      return amount;
  }
}

export const platformNames = { ios: 'iOS', android: 'Android', web: 'Web' } as const;
