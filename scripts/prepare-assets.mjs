// Готовит производные картинки из исходников в assets/.
// Запуск: npm run assets (нужно только после замены исходных файлов).
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

// 1. Маскот вырезается из фона отдельным скриптом: python3 scripts/cutout-mascot.py (см. README).

// 2. Картинка для соцсетей (Open Graph) 1200×630 из фирменного баннера.
await sharp('assets/brand/banner.jpg')
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile('public/og-default.jpg');

// 3. Иконки сайта: тёмно-синий логотип на лаймовом скруглённом квадрате.
const logo = await readFile('src/assets/logo.svg', 'utf8');
const inner = logo
  .replace(/<svg[^>]*>/, '')
  .replace('</svg>', '')
  .replace(/biteon-grid/g, 'fav-grid');
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#BDDA26"/>
  <svg x="14" y="13" width="36" height="38" viewBox="20 25 920 950" fill="#0A1926">${inner}</svg>
</svg>
`;
await writeFile('public/favicon.svg', favicon);
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp(Buffer.from(favicon)).resize(512, 512).png().toFile('public/icon-512.png');
await sharp(Buffer.from(favicon)).resize(32, 32).png().toFile('public/favicon-32.png');

console.log('Assets ready.');
