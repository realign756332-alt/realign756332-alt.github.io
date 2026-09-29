// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { defaultLocale, localeCodes } from './src/i18n/config.mjs';
import { buildFonts } from './src/i18n/fonts.mjs';

// Адрес сайта. Чтобы подключить свой домен — поменяй только эту строку
// (и добавь файл public/CNAME, см. README).
const SITE = 'https://realign756332-alt.github.io';

// Даты обновления для sitemap берём из поля updatedDate в файлах приложений.
// Тестовые примеры (example: true) и черновики на сайт не попадают — их даты не учитываем.
function readUpdatedDates() {
  const dir = new URL('./src/content/apps/', import.meta.url);
  /** @type {Record<string, Date>} */
  const dates = {};
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const text = readFileSync(new URL(file, dir), 'utf8');
    if (/^example:\s*true\b/m.test(text) || /^status:\s*["']?draft/m.test(text)) continue;
    const slug = text.match(/^slug:\s*["']?([\w-]+)/m)?.[1];
    const updated = text.match(/^updatedDate:\s*["']?([\d-]+)/m)?.[1];
    if (slug && updated) dates[slug] = new Date(updated);
  }
  return dates;
}
const updatedDates = readUpdatedDates();
const latestUpdate = new Date(Math.max(...Object.values(updatedDates).map(Number), 0));

// Путь без языкового префикса: /de/apps/x/ → /apps/x/
const localePrefix = new RegExp(`^/(${localeCodes.filter((c) => c !== defaultLocale).join('|')})(?=/)`);
const stripLocale = (/** @type {string} */ path) => path.replace(localePrefix, '') || '/';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  // Встроенный i18n-роутинг Astro: английский в корне, остальные языки — /de/, /ja/, /ar/ …
  i18n: {
    locales: localeCodes,
    defaultLocale,
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Языковые альтернативы (xhtml:link hreflang) для каждой страницы.
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(localeCodes.map((c) => [c, c])),
      },
      // Служебные страницы 404 в sitemap не нужны.
      filter: (page) => !/\/404\/$/.test(new URL(page).pathname),
      serialize(item) {
        const path = stripLocale(new URL(item.url).pathname);
        const appSlug = path.match(/^\/apps\/([\w-]+)\//)?.[1];
        if (appSlug && updatedDates[appSlug]) item.lastmod = updatedDates[appSlug].toISOString();
        else if (path === '/' && latestUpdate.getTime() > 0) item.lastmod = latestUpdate.toISOString();
        // x-default ведёт на английскую версию.
        if (item.links?.length) {
          item.links.push({ lang: 'x-default', url: new URL(path, SITE).href });
        }
        return item;
      },
    }),
  ],
  fonts: await buildFonts(),
});
