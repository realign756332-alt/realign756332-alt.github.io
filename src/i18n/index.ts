// Помощники для языков: словарь, адреса на другом языке, форматирование.
import { getRelativeLocaleUrl } from 'astro:i18n';
import { locales, defaultLocale, localeCodes, langTag, type LocaleInfo } from './config.mjs';
import type { Dict, Plural } from './ui/en';

export { locales, defaultLocale, localeCodes, langTag };
export type { Dict, LocaleInfo };

// Все словари собираются автоматически из папки ui/.
const dicts = import.meta.glob<{ default: Dict }>('./ui/*.ts', { eager: true });

export function getLocaleInfo(code: string | undefined): LocaleInfo {
  return locales.find((l) => l.code === code) ?? locales.find((l) => l.code === defaultLocale)!;
}

/** Тег BCP 47 языка по коду из адреса: 'zh-hant' → 'zh-Hant'. */
export function langOf(code: string | undefined) {
  return langTag(getLocaleInfo(code));
}

export function useTranslations(code: string | undefined): Dict {
  const dict = dicts[`./ui/${getLocaleInfo(code).code}.ts`]?.default;
  if (!dict) throw new Error(`Нет файла переводов src/i18n/ui/${code}.ts`);
  return dict;
}

/** Подставляет значения: fill('{n} apps', { n: 3 }) → '3 apps'. */
export function fill(text: string, vars: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));
}

/** Множественное число по правилам языка. */
export function plural(code: string, forms: Plural, n: number) {
  const rule = new Intl.PluralRules(langOf(code)).select(n);
  return fill(forms[rule] ?? forms.other, { n: new Intl.NumberFormat(langOf(code)).format(n) });
}

/** Страницы на других языках, для которых нужен свой адрес (все, кроме английского). */
export const nonDefaultLocales = localeCodes.filter((c) => c !== defaultLocale);

/** getStaticPaths для страниц в src/pages/[locale]/. */
export function localeStaticPaths() {
  return nonDefaultLocales.map((locale) => ({ params: { locale } }));
}

const prefix = new RegExp(`^/(${nonDefaultLocales.join('|')})(?=/|$)`);

/** Путь без языкового префикса: /de/apps/ → /apps/ */
export function stripLocale(pathname: string) {
  return pathname.replace(prefix, '') || '/';
}

/**
 * Адрес страницы на нужном языке. Путь пишется «по-английски», от корня:
 * localizePath('/apps/', 'de') → '/de/apps/'. Якоря (#faq) сохраняются.
 */
export function localizePath(path: string, code: string) {
  const [pathname, hash] = path.split('#');
  const url = getRelativeLocaleUrl(code, stripLocale(pathname || '/').replace(/^\//, ''));
  return hash ? `${url}#${hash}` : url;
}

/** Названия языков на языке страницы: ['en', 'de'] → «English, German» / «англійська, німецька». */
export function languageList(codes: string[], pageLocale: string) {
  const tag = langOf(pageLocale);
  const names = new Intl.DisplayNames([tag], { type: 'language' });
  const list = new Intl.ListFormat(tag, { style: 'narrow', type: 'conjunction' });
  return list.format(codes.map((c) => names.of(c) ?? c));
}
