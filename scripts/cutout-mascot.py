# Вырезает маскота из фона исходной картинки (прозрачный PNG), чтобы на сайте
# не было видно края фона. Нужен только при замене исходника.
# Исходник должен быть на чистом чёрном фоне (как assets/mascot/mascot-2d.jpg).
# Запуск: pip install rembg onnxruntime pillow scipy && python3 scripts/cutout-mascot.py
import numpy as np
from PIL import Image
from rembg import remove, new_session
from scipy import ndimage as nd

SRC = 'assets/mascot/mascot-2d.jpg'
OUT = 'src/assets/mascot/mascot-2d.png'
MAX_HEIGHT = 1600  # на сайте маскот не выше ~720px, этого хватает для экранов 2x

img = Image.open(SRC).convert('RGB')
src = np.asarray(img).astype(np.float32)

# 1. Маска фигуры нейросетью BiRefNet (лучше всего держит длинные волосы).
mask = np.asarray(remove(img, session=new_session('birefnet-general')))[..., 3].astype(np.float32) / 255

# 2. Фон чисто чёрный, поэтому тонкие пряди точнее определяются по яркости:
#    всё, что заметно светлее чёрного рядом с фигурой, — часть персонажа.
near = nd.binary_dilation(mask > 0.05, iterations=24)
by_color = np.clip((src.max(axis=2) - 6) / 30, 0, 1)
# Маску слегка поджимаем (на 2px), чтобы по краю не осталось чёрной каймы.
alpha = np.where(near, np.maximum(nd.grey_erosion(mask, size=(5, 5)), by_color), 0)
# Закрытые «дыры» внутри фигуры: тёмная тень между рукой и телом должна остаться,
# а чёрный фон между волосами и рукавом — стать прозрачным. Фон чисто чёрный (≤ 5),
# тень светлее (≥ 15), поэтому внутри дыр отделяем их по яркости строже.
holes = nd.binary_fill_holes(alpha > 0.5) & (alpha <= 0.5)
alpha = np.where(holes, nd.gaussian_filter(np.clip((src.max(axis=2) - 5) / 12, 0, 1), 2), alpha)
alpha = nd.gaussian_filter(alpha, 0.6)

# 3. На полупрозрачных краях в цвет подмешан чёрный фон — убираем его,
#    иначе на светлом свечении была бы тёмная кромка.
rgb = np.clip(src / np.clip(alpha, 0.25, 1)[..., None], 0, 255)

cut = Image.fromarray(np.dstack([rgb, alpha * 255]).astype(np.uint8), 'RGBA')
left, top, right, bottom = cut.split()[3].point(lambda v: 255 if v > 8 else 0).getbbox()
pad = 12
cut = cut.crop((max(left - pad, 0), max(top - pad, 0), min(right + pad, cut.width), min(bottom + pad, cut.height)))
if cut.height > MAX_HEIGHT:
    cut = cut.resize((round(cut.width * MAX_HEIGHT / cut.height), MAX_HEIGHT), Image.LANCZOS)
cut.save(OUT, optimize=True)
print('Mascot cutout:', cut.size)
