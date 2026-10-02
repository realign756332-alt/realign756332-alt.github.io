// Языки сайта. Общий файл для astro.config.mjs (роутинг, sitemap, шрифты) и для кода страниц.
// Чтобы добавить язык: строка здесь + файл переводов src/i18n/ui/<code>.ts (см. README).

/**
 * @typedef {object} LocaleInfo
 * @property {string} code    код в адресе (/de/) и ключ словаря; строчными буквами
 * @property {string} [lang]  тег BCP 47 для lang и hreflang, если отличается от code (zh-Hant для /zh-hant/)
 * @property {string} [short] короткая метка на кнопке переключателя (по умолчанию code заглавными)
 * @property {string} name    название языка на самом языке — так он показан в переключателе
 * @property {'ltr' | 'rtl'} dir
 * @property {string} og      og:locale для соцсетей
 * @property {string} [script] свой шрифт Noto Sans для письменности (ja, ko, zh-hant, th, hi, ar)
 * @property {string[]} [montserrat] какие части Montserrat загружать заранее (preload)
 */

/** Язык по умолчанию: открывается в корне сайта, без префикса в адресе. */
export const defaultLocale = 'en';

/** @type {LocaleInfo[]} */
export const locales = [
  { code: 'en', name: 'English', dir: 'ltr', og: 'en_US' },
  { code: 'de', name: 'Deutsch', dir: 'ltr', og: 'de_DE' },
  { code: 'fr', name: 'Français', dir: 'ltr', og: 'fr_FR' },
  { code: 'ja', name: '日本語', dir: 'ltr', og: 'ja_JP', script: 'ja' },
  { code: 'es', name: 'Español', dir: 'ltr', og: 'es_ES' },
  { code: 'ko', name: '한국어', dir: 'ltr', og: 'ko_KR', script: 'ko' },
  { code: 'it', name: 'Italiano', dir: 'ltr', og: 'it_IT' },
  { code: 'nl', name: 'Nederlands', dir: 'ltr', og: 'nl_NL' },
  { code: 'pt', name: 'Português', dir: 'ltr', og: 'pt_BR' },
  { code: 'uk', name: 'Українська', dir: 'ltr', og: 'uk_UA', montserrat: ['latin', 'cyrillic'] },
  { code: 'ru', name: 'Русский', dir: 'ltr', og: 'ru_RU', montserrat: ['latin', 'cyrillic'] },
  { code: 'pl', name: 'Polski', dir: 'ltr', og: 'pl_PL', montserrat: ['latin', 'latin-ext'] },
  { code: 'hi', name: 'हिन्दी', dir: 'ltr', og: 'hi_IN', script: 'hi' },
  { code: 'vi', name: 'Tiếng Việt', dir: 'ltr', og: 'vi_VN', montserrat: ['latin', 'vietnamese'] },
  { code: 'th', name: 'ไทย', dir: 'ltr', og: 'th_TH', script: 'th' },
  { code: 'ar', name: 'العربية', dir: 'rtl', og: 'ar_AR', script: 'ar' },
  { code: 'zh-hant', lang: 'zh-Hant', short: 'ZH-TW', name: '繁體中文', dir: 'ltr', og: 'zh_TW', script: 'zh-hant' },
];

/** Тег BCP 47 для lang / hreflang / Intl. @param {LocaleInfo} l */
export const langTag = (l) => l.lang ?? l.code;

export const localeCodes = locales.map((l) => l.code);
