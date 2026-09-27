// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Адрес сайта. Чтобы подключить свой домен — поменяй только эту строку
// (и добавь файл public/CNAME, см. README).
const SITE = 'https://realign756332-alt.github.io';

// Даты обновления для sitemap берём из поля updatedDate в файлах приложений.
function readUpdatedDates() {
  const dir = new URL('./src/content/apps/', import.meta.url);
  /** @type {Record<string, Date>} */
  const dates = {};
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const text = readFileSync(new URL(file, dir), 'utf8');
    const slug = text.match(/^slug:\s*["']?([\w-]+)/m)?.[1];
    const updated = text.match(/^updatedDate:\s*["']?([\d-]+)/m)?.[1];
    if (slug && updated) dates[slug] = new Date(updated);
  }
  return dates;
}
const updatedDates = readUpdatedDates();
const latestUpdate = new Date(Math.max(...Object.values(updatedDates).map(Number), 0));

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      serialize(item) {
        const path = new URL(item.url).pathname;
        const appSlug = path.match(/^\/apps\/([\w-]+)\//)?.[1];
        if (appSlug && updatedDates[appSlug]) item.lastmod = updatedDates[appSlug].toISOString();
        else if (path === '/' && latestUpdate.getTime() > 0) item.lastmod = latestUpdate.toISOString();
        return item;
      },
    }),
  ],
  fonts: [
    {
      // Montserrat (Google Fonts) — геометрический гротеск, ближе всего к надписи на баннере.
      // Файл шрифта лежит в npm-пакете @fontsource-variable/montserrat и отдаётся с нашего сайта:
      // ни посетитель, ни сборка не обращаются к внешним серверам.
      provider: fontProviders.local(),
      name: 'Montserrat',
      cssVariable: '--font-brand',
      display: 'swap',
      fallbacks: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
