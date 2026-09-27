import { getCollection, type CollectionEntry } from 'astro:content';
import { sections } from '../data/site';
import { categories } from '../data/categories';
import { defaultLocale, fill, localizePath, useTranslations } from '../i18n';

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

const warned = new Set<string>();

/** Тексты приложения на нужном языке. Если перевода нет — английский (и предупреждение при сборке). */
export function appText(app: App, locale: string) {
  const { tagline, description, features } = app.data;
  const tr = locale === defaultLocale ? undefined : app.data.translations[locale];
  if (!tr && locale !== defaultLocale && !warned.has(`${app.id}:${locale}`)) {
    warned.add(`${app.id}:${locale}`);
    console.warn(`[i18n] У приложения «${app.data.slug}» нет перевода на ${locale}: показан английский текст.`);
  }
  return {
    tagline: tr?.tagline ?? tagline,
    description: tr?.description ?? description,
    features: tr?.features ?? features,
  };
}

/** Категории, в которых есть хотя бы одно опубликованное приложение. */
export async function getActiveCategories() {
  const apps = await getPublicApps();
  return categories
    .map((c) => ({ ...c, count: apps.filter((a) => a.data.category === c.slug).length }))
    .filter((c) => c.count > 0);
}

/** Ссылка на приложение: своя страница, когда раздел готов, иначе карточка на главной. */
export function appHref(app: App, locale: string) {
  return localizePath(sections.apps ? `/apps/${app.data.slug}/` : `/#app-${app.data.slug}`, locale);
}

export function categoryHref(slug: string, locale: string) {
  return localizePath(sections.categories ? `/category/${slug}/` : `/#categories`, locale);
}

/** Цена словами на языке страницы: «Free», «9,99 $», «$3 / month», «Free + in-app». */
export function priceLabel(app: App, locale: string) {
  const t = useTranslations(locale).apps;
  const { price, currency, pricingModel, billingPeriod } = app.data;
  const amount = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
  switch (pricingModel) {
    case 'free':
      return t.priceFree;
    case 'freemium':
      return price > 0 ? fill(t.priceFreemiumPro, { price: amount }) : t.priceFreemium;
    case 'subscription':
      return fill(billingPeriod === 'year' ? t.perYear : t.perMonth, { price: amount });
    default:
      return amount;
  }
}

export function platformName(platform: 'ios' | 'android' | 'web', locale: string) {
  return platform === 'ios' ? 'iOS' : platform === 'android' ? 'Android' : useTranslations(locale).apps.platformWeb;
}
