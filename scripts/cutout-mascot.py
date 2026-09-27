# Вырезает маскота из фона исходной картинки (прозрачный PNG), чтобы на сайте
# не было видно прямоугольного края фона. Нужен только при замене исходника.
# Запуск: pip install rembg onnxruntime pillow && python3 scripts/cutout-mascot.py
from rembg import remove, new_session
from PIL import Image

src = Image.open('assets/mascot/mascot-2d.jpg')
cut = remove(src, session=new_session('isnet-general-use'))
# Обрезаем по фигуре с небольшим запасом со всех сторон.
alpha = cut.split()[3].point(lambda v: 255 if v > 20 else 0)
left, top, right, bottom = alpha.getbbox()
pad = 16
box = (max(left - pad, 0), max(top - pad, 0), min(right + pad, src.width), min(bottom + pad, src.height))
cut.crop(box).save('src/assets/mascot/mascot-2d.png', optimize=True)
print('Mascot cutout:', box)
