// Шрифты для astro.config.mjs. Файлы берутся из npm-пакетов @fontsource-variable/*
// и отдаются с нашего сайта (без запросов к Google). Каждый шрифт разбит на подмножества
// символов (unicode-range): браузер скачивает только те куски, символы из которых есть на странице.
import { readFileSync, readdirSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { fontProviders } from 'astro/config';
import subsetFont from 'subset-font';
import { locales } from './config.mjs';

const require = createRequire(import.meta.url);

/** @typedef {NonNullable<import('astro').AstroUserConfig['fonts']>[number]} FontFamily */

/** Читает @font-face из CSS пакета fontsource: файл и unicode-range каждого подмножества. */
/** @param {string} pkg */
function readFaces(pkg) {
  const css = readFileSync(require.resolve(`${pkg}/index.css`), 'utf8');
  return [...css.matchAll(/\/\* ([^*]+?) \*\/\s*@font-face\s*{([^}]*)}/g)]
    .map(([, name, body]) => ({
      name,
      file: body.match(/url\(\.\/(files\/[^)]+)\)/)?.[1] ?? '',
      range: body.match(/unicode-range:\s*([^;]+);/)?.[1].trim() ?? '',
    }))
    .filter((f) => f.file.endsWith('-normal.woff2'));
}

/** Убирает из unicode-range латиницу (до U+02FF): латиница и цифры остаются за Montserrat. */
/** @param {string} range */
function withoutLatin(range) {
  return range
    .split(',')
    .map((part) => {
      const [a, b = a] = part.trim().replace(/^U\+/i, '').split('-');
      const start = Math.max(parseInt(a, 16), 0x300);
      const end = parseInt(b, 16);
      if (end < start) return null;
      const hex = (/** @type {number} */ n) => n.toString(16).toUpperCase().padStart(4, '0');
      return start === end ? `U+${hex(start)}` : `U+${hex(start)}-${hex(end)}`;
    })
    .filter(Boolean)
    .join(',');
}

/** Части Montserrat в порядке, в котором они попадают в fontData (нужно для preload). */
export const montserratSubsets = ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'];

/** @returns {FontFamily} */
function montserrat() {
  const faces = readFaces('@fontsource-variable/montserrat');
  return {
    // Montserrat — геометрический гротеск, ближе всего к надписи на баннере.
    // Латиница, кириллица и вьетнамский.
    provider: fontProviders.local(),
    name: 'Montserrat',
    cssVariable: '--font-brand',
    display: 'swap',
    fallbacks: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    options: {
      variants: montserratSubsets.map((subset) => {
        const face = faces.find((f) => f.name === `montserrat-${subset}-wght-normal`);
        if (!face) throw new Error(`Montserrat: нет подмножества ${subset}`);
        return {
          src: [`@fontsource-variable/montserrat/${face.file}`],
          weight: '100 900',
          style: 'normal',
          unicodeRange: /** @type {[string]} */ ([face.range]),
        };
      }),
    },
  };
}

/**
 * Noto Sans для японского, корейского, традиционного китайского, тайского, хинди и арабского.
 * Подключается только на страницах своего языка (см. BaseHead.astro).
 * Латинские подмножества не берём: латиница на этих страницах тоже Montserrat.
 */
const scriptFonts = {
  ja: { pkg: 'noto-sans-jp', name: 'Noto Sans JP', subset: true },
  ko: { pkg: 'noto-sans-kr', name: 'Noto Sans KR', subset: true },
  'zh-hant': { pkg: 'noto-sans-tc', name: 'Noto Sans TC', subset: true },
  th: { pkg: 'noto-sans-thai', name: 'Noto Sans Thai' },
  hi: { pkg: 'noto-sans-devanagari', name: 'Noto Sans Devanagari' },
  ar: { pkg: 'noto-sans-arabic', name: 'Noto Sans Arabic' },
};

const latinSubsets = /-(latin|latin-ext|cyrillic|cyrillic-ext|vietnamese|greek|greek-ext|math|symbols)-wght-normal$/;

/** @param {string} range  «U+3000-303F,U+30FB» → [[0x3000, 0x303f], [0x30fb, 0x30fb]] */
function parseRange(range) {
  return range.split(',').map((part) => {
    const [a, b = a] = part.trim().replace(/^U\+/i, '').split('-');
    return /** @type {[number, number]} */ ([parseInt(a, 16), parseInt(b, 16)]);
  });
}

/** @param {number[]} codes отсортированные коды символов → «U+3042,U+3044-3046» */
function toRange(codes) {
  const hex = (/** @type {number} */ n) => n.toString(16).toUpperCase().padStart(4, '0');
  const out = [];
  for (let i = 0; i < codes.length; i++) {
    let j = i;
    while (j + 1 < codes.length && codes[j + 1] === codes[j] + 1) j++;
    out.push(i === j ? `U+${hex(codes[i])}` : `U+${hex(codes[i])}-${hex(codes[j])}`);
    i = j;
  }
  return out.join(',');
}

/** Все файлы папки (рекурсивно). @param {URL} dir @returns {URL[]} */
function listFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? listFiles(new URL(`${e.name}/`, dir)) : [new URL(e.name, dir)],
  );
}

/**
 * Из файла приложения оставляет всё, кроме переводов на другие языки
 * (строки внутри `translations:` под `  <другой-язык>:`) — их символы этому шрифту не нужны.
 * @param {string} text
 * @param {string} code
 */
function ownText(text, code) {
  let inTranslations = false;
  let skip = false;
  return text
    .split('\n')
    .filter((line) => {
      if (/^translations:/.test(line)) inTranslations = true;
      else if (/^\S/.test(line)) inTranslations = false;
      if (!inTranslations) return true;
      const lang = line.match(/^ {2}([\w-]+):\s*$/)?.[1];
      if (lang) skip = lang !== code;
      return !skip;
    })
    .join('\n');
}

/**
 * Символы, которые реально встречаются на сайте на этом языке: словарь интерфейса
 * и все файлы контента (там лежат переводы приложений).
 * @param {string} code
 */
function usedChars(code) {
  const root = new URL('../', import.meta.url);
  const files = [new URL(`i18n/ui/${code}.ts`, root), ...listFiles(new URL('content/', root))];
  const set = new Set();
  for (const file of files) {
    for (const ch of ownText(readFileSync(file, 'utf8'), code)) set.add(ch.codePointAt(0));
  }
  // Название языка в переключателе («繁體中文») тоже набирается этим шрифтом.
  for (const ch of locales.find((l) => l.code === code)?.name ?? '') set.add(ch.codePointAt(0));
  return set;
}

/**
 * Японский, корейский и китайский: у Noto Sans JP/KR/TC больше сотни кусков, и одна страница тянет
 * 20–30 из них (~0,5 МБ). Поэтому при сборке оставляем в каждом куске только символы,
 * которые есть в текстах сайта — выходит в разы меньше. Символ, которого нет в текстах
 * (например, введённый в поиск), покажется системным шрифтом.
 * Результат кешируется в node_modules/.cache/biteon-fonts.
 * @param {keyof typeof scriptFonts} code
 */
async function subsetVariants(code) {
  const { pkg } = scriptFonts[code];
  const used = usedChars(code);
  const cacheDir = new URL('../../node_modules/.cache/biteon-fonts/', import.meta.url);
  mkdirSync(cacheDir, { recursive: true });
  const variants = [];
  for (const face of readFaces(`@fontsource-variable/${pkg}`)) {
    if (latinSubsets.test(face.name)) continue;
    const ranges = parseRange(face.range);
    const codes = [...used]
      .filter((c) => c >= 0x300 && ranges.some(([a, b]) => c >= a && c <= b))
      .sort((x, y) => x - y);
    if (!codes.length) continue;
    const text = String.fromCodePoint(...codes);
    const hash = createHash('sha1').update(face.file + text).digest('hex').slice(0, 12);
    const out = new URL(`${code}-${hash}.woff2`, cacheDir);
    if (!existsSync(out)) {
      const source = readFileSync(require.resolve(`@fontsource-variable/${pkg}/${face.file}`));
      writeFileSync(out, await subsetFont(source, text, { targetFormat: 'woff2' }));
    }
    variants.push({ src: [fileURLToPath(out)], range: toRange(codes) });
  }
  return variants;
}

/**
 * @param {keyof typeof scriptFonts} code
 * @returns {Promise<FontFamily>}
 */
async function scriptFont(code) {
  const { pkg, name } = scriptFonts[code];
  const variants = 'subset' in scriptFonts[code]
    ? await subsetVariants(code)
    : readFaces(`@fontsource-variable/${pkg}`)
        .filter((f) => !latinSubsets.test(f.name))
        .map((f) => ({ src: [`@fontsource-variable/${pkg}/${f.file}`], range: withoutLatin(f.range) }))
        .filter((f) => f.range);
  return {
    provider: fontProviders.local(),
    name,
    cssVariable: `--font-${code}`,
    display: 'swap',
    // Без запасных шрифтов: запасные задаются общим стеком в tokens.css.
    fallbacks: [],
    options: {
      variants: variants.map((v) => ({
        src: v.src,
        weight: '100 900',
        style: 'normal',
        unicodeRange: /** @type {[string]} */ ([v.range]),
      })),
    },
  };
}

/** Все шрифты сайта для astro.config.mjs. @returns {Promise<FontFamily[]>} */
export async function buildFonts() {
  const codes = /** @type {(keyof typeof scriptFonts)[]} */ (Object.keys(scriptFonts));
  return [montserrat(), ...(await Promise.all(codes.map(scriptFont)))];
}
