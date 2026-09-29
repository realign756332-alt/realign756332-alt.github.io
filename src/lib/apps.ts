import { getCollection, type CollectionEntry } from 'astro:content';
import { sections } from '../data/site';
import { categories } from '../data/categories';
import { defaultLocale, fill, localizePath, useTranslations } from '../i18n';

export type App = CollectionEntry<'apps'>;

/**
 * Приложения, которые показываются на сайте: без черновиков и без тестовых примеров
 * (`example: true` остаются в данных для проверки шаблонов, но на сайт и в sitemap не попадают).
 * Сначала избранные, затем по дате обновления.
 */
export async function getPublicApps(): Promise<App[]> {
  const apps = await getCollection('apps', ({ data }) => data.status !== 'draft' && !data.example);
  return apps.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.updatedDate.getTime() - a.data.updatedDate.getTime(),
  );
}

/** Есть ли на сайте хотя бы одно реальное приложение (от этого зависят блок новинок, «New» и «What's new»). */
export async function hasPublicApps() {
  return (await getPublicApps()).length > 0;
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

/** Все категории с числом реальных приложений в каждой. */
export async function getCategoriesWithCounts() {
  const apps = await getPublicApps();
  return categories.map((c) => ({ ...c, count: apps.filter((a) => a.data.category === c.slug).length }));
}

/** Ссылка на приложение: своя страница, когда раздел готов, иначе карточка на главной. */
export function appHref(app: App, locale: string) {
  return localizePath(sections.apps ? `/apps/${app.data.slug}/` : `/#app-${app.data.slug}`, locale);
}

export function categoryHref(slug: string, locale: string) {
  return localizePath(sections.categories ? `/category/${slug}/` : `/#categories`, locale);
}

/** Цена словами на языке страницы: «Free», «9,99 $», «$3 / month», «Free · From $4.99». */
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
      // Бесплатно, платная версия — от указанной цены.
      return price > 0 ? `${t.priceFree} · ${fill(t.priceFrom, { price: amount })}` : t.priceFree;
    case 'subscription':
      return fill(billingPeriod === 'year' ? t.perYear : t.perMonth, { price: amount });
    default:
      return amount;
  }
}

export function platformName(platform: 'ios' | 'android' | 'web', locale: string) {
  return platform === 'ios' ? 'iOS' : platform === 'android' ? 'Android' : useTranslations(locale).apps.typeWeb;
}
