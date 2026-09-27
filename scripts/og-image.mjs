// Картинка для соцсетей (Open Graph) 1200×630: логотип BitEon Studio и маскот на чёрном фоне.
// Без слов, кроме названия, — поэтому одна картинка подходит для всех языков.
// Рисуется в браузере (Chromium через Playwright), чтобы шрифт Montserrat выглядел как на сайте.
// Запуск (нужно только после смены логотипа или маскота):
//   npm i --no-save playwright && npx playwright install chromium && node scripts/og-image.mjs
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import sharp from 'sharp';
import { badgeSvg } from '../src/lib/logo.mjs';

const require = createRequire(import.meta.url);
const { chromium } = await import('playwright');

const font = readFileSync(require.resolve('@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2')).toString('base64');
const mascot = (await sharp('src/assets/mascot/mascot-2d.png').resize({ height: 1180 }).png().toBuffer()).toString('base64');

// Пиксельное рассыпание вокруг маскота (как на сайте).
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
const pixels = Array.from({ length: 150 }, () => {
  const angle = rand() * Math.PI * 2;
  const dist = Math.pow(rand(), 0.9) * 290;
  const edge = dist / 300;
  const s = Math.round(3 + (1 - edge) * 6 * rand());
  return `<rect x="${Math.round(300 + Math.cos(angle) * dist * 0.9)}" y="${Math.round(300 + Math.sin(angle) * dist)}" width="${s}" height="${s}" opacity="${(0.25 + (1 - edge) * 0.6 * rand()).toFixed(2)}"/>`;
}).join('');

const html = `<!doctype html><html><head><style>
@font-face { font-family: M; src: url(data:font/woff2;base64,${font}) format('woff2'); font-weight: 100 900; }
* { margin: 0; box-sizing: border-box; }
body { width: 1200px; height: 630px; background: #000; overflow: hidden; font-family: M, sans-serif; position: relative; }
.lockup { position: absolute; left: 90px; top: 50%; transform: translateY(-50%); display: flex; align-items: center; gap: 16px; }
.name { color: #fff; font-weight: 700; font-size: 88px; letter-spacing: -0.01em; line-height: 1; }
.visual { position: absolute; right: 40px; top: 0; width: 460px; height: 630px; }
.glow { position: absolute; inset: 20px 40px 30px; filter: blur(30px);
  background: linear-gradient(180deg, rgb(30 66 100 / .95), rgb(22 52 80 / .9) 30%, rgb(60 100 70 / .6) 55%, rgb(150 185 35 / .6) 78%, rgb(189 218 38 / .75));
  -webkit-mask-image: radial-gradient(closest-side, #000 30%, rgb(0 0 0 / .45) 62%, transparent); }
.floor { position: absolute; left: 90px; right: 90px; bottom: 14px; height: 60px; border-radius: 50%; filter: blur(10px);
  background: radial-gradient(closest-side, rgb(189 218 38 / .5), transparent); }
.pixels { position: absolute; left: -70px; top: 15px; width: 600px; height: 600px; fill: #BDDA26; }
.mascot { position: absolute; left: 50%; bottom: 22px; height: 590px; transform: translateX(-50%); }
</style></head><body>
<div class="lockup">${badgeSvg({ size: 120, id: 'og' })}<span class="name">itEon Studio</span></div>
<div class="visual"><div class="glow"></div><div class="floor"></div>
<svg class="pixels" viewBox="0 0 600 600">${pixels}</svg>
<img class="mascot" src="data:image/png;base64,${mascot}" alt=""></div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
const png = await page.screenshot();
await browser.close();
await sharp(png).jpeg({ quality: 88, mozjpeg: true }).toFile('public/og-default.jpg');
console.log('public/og-default.jpg ready');
