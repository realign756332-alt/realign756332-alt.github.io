// Фирменный значок BitEon Studio: лаймовый скруглённый квадрат с тёмно-синей буквой «B».
// Используется в шапке и подвале (Logo.astro), для favicon и картинки соцсетей (scripts/).
// Буква «B» (здесь её контуры — единственный источник; src/assets/logo.svg собирается из них
// скриптом npm run assets): ножка и верхняя чаша сплошные, нижняя чаша — пиксельная сетка
// (как в оригинале assets/brand/logo.jpg).

export const LIME = '#BDDA26';
export const NAVY = '#0A1926';

/** Ножка буквы (координаты в рамке 20 25 920 950). */
export const stem = 'M42 35H355V965L30 662V47Q30 35 42 35Z';
/** Верхняя чаша — сплошная. */
export const topBowl =
  'M390 35H690C820 35 905 120 905 240V300C905 355 885 405 848 440L698 352C706 334 710 314 706 292C698 236 660 200 606 200H390Z';
/** Нижняя чаша — заполняется пиксельной сеткой. */
export const bottomBowl =
  'M390 398H655C676 398 689 385 693 370L832 452C893 505 925 575 925 660V805C925 893 857 965 768 965H390V800H602C668 800 716 758 716 697C716 636 668 592 602 592H390Z';

/** Только буква «B» цветом текста (currentColor) — для src/assets/logo.svg. */
export function letterSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="20 25 920 950" fill="currentColor" role="img" aria-label="BitEon Studio">
  <!-- Буква «B» BitEon Studio. Файл собирается из src/lib/logo.mjs (npm run assets) — правь там. -->
  <defs>
    <pattern id="biteon-grid" x="390" y="398" width="30" height="30" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" x="3" y="3"/>
    </pattern>
  </defs>
  <path d="${stem}"/>
  <path d="${topBowl}"/>
  <path d="${bottomBowl}" fill-opacity="0.2"/>
  <path d="${bottomBowl}" fill="url(#biteon-grid)"/>
</svg>
`;
}

/**
 * SVG-значок нужного размера.
 * Клетки сетки подбираются под размер: на маленьком значке они крупнее, чтобы сетка
 * читалась, а не сливалась в серое пятно. Под сеткой — лёгкая заливка чаш, чтобы
 * силуэт буквы угадывался даже на 16px.
 * @param {{ size: number, id?: string, title?: string }} options size — сторона значка в px
 */
export function badgeSvg({ size, id = 'biteon', title }) {
  const letterPx = size * 0.58; // высота буквы на экране
  const unitsPerPx = 950 / letterPx;
  const cell = Math.max(30, Math.round(2.6 * unitsPerPx)); // клетка не меньше ~2,6px на экране
  const dot = Math.round(cell * 0.78);
  const off = Math.round((cell - dot) / 2);
  const a11y = title ? `role="img" aria-label="${title}"` : 'aria-hidden="true" focusable="false"';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}" ${a11y}>
  <defs><pattern id="${id}-grid" x="390" y="398" width="${cell}" height="${cell}" patternUnits="userSpaceOnUse"><rect width="${dot}" height="${dot}" x="${off}" y="${off}"/></pattern></defs>
  <rect width="100" height="100" rx="23" fill="${LIME}"/>
  <svg x="21" y="21" width="58" height="58" viewBox="20 25 920 950" fill="${NAVY}">
    <path d="${stem}"/>
    <path d="${topBowl}"/>
    <path d="${bottomBowl}" fill-opacity="0.2"/>
    <path d="${bottomBowl}" fill="url(#${id}-grid)"/>
  </svg>
</svg>`;
}
