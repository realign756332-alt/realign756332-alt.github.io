// Готовит производные картинки из исходников в assets/.
// Запуск: npm run assets (нужно только после замены исходных файлов).
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { badgeSvg, letterSvg } from '../src/lib/logo.mjs';

// 1. Маскот вырезается из фона отдельным скриптом: python3 scripts/cutout-mascot.py (см. README).

// 2. Картинка для соцсетей (Open Graph) 1200×630 с логотипом и маскотом:
//    отдельный скрипт scripts/og-image.mjs (нужен браузер, см. README).

// 3. Буква «B» отдельным файлом (для тех, кому нужен логотип без значка).
await writeFile('src/assets/logo.svg', letterSvg());

// 4. Иконки сайта: фирменный значок (лаймовый квадрат, тёмно-синяя «B», нижняя чаша — пиксельная сетка).
//    Для каждого размера — своя крупность сетки, чтобы она читалась.
await writeFile('public/favicon.svg', badgeSvg({ size: 32, id: 'fav' }).replace(/ width="32" height="32"/, '') + '\n');
for (const [size, file] of [
  [32, 'public/favicon-32.png'],
  [180, 'public/apple-touch-icon.png'],
  [512, 'public/icon-512.png'],
]) {
  // Рисуем в 4 раза крупнее и уменьшаем — так края чище.
  const svg = badgeSvg({ size, id: 'fav' }).replace(`width="${size}" height="${size}"`, `width="${size * 4}" height="${size * 4}"`);
  await sharp(Buffer.from(svg)).resize(size, size).png().toFile(file);
}

console.log('Assets ready.');
