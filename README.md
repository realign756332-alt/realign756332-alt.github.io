# BitEon Studio — сайт

Сайт-витрина приложений BitEon Studio: https://realign756332-alt.github.io

Сделан на [Astro](https://astro.build): на выходе обычные HTML-страницы, JavaScript только там, где он правда нужен.
Постоянное ТЗ проекта — в файле `CLAUDE.md`.

## Как устроено

| Что | Где |
|---|---|
| Приложения (по одному файлу на приложение) | `src/content/apps/<slug>.md` |
| Иконки приложений | `src/assets/apps/` |
| Категории и их иконки | `src/data/categories.ts`, `src/assets/categories/<slug>.svg` |
| Данные студии (YouTube, e-mail поддержки) и готовые разделы | `src/data/site.ts` |
| Меню в шапке | `src/data/navigation.ts` |
| Тексты главной: «Why BitEon» и FAQ | `src/data/home.ts` |
| Цвета, шрифты, размеры (дизайн-токены) | `src/styles/tokens.css` |
| Логотип (SVG) | `src/assets/logo.svg` |
| Маскот (2D) | `src/assets/mascot/mascot-2d.jpg` (готовится из `assets/mascot/mascot-2d.jpg`) |
| Картинка для соцсетей, favicon | `public/` (готовятся скриптом, см. ниже) |
| Исходники бренда (не трогать) | `assets/` |

Публикация: при каждом merge в ветку `main` GitHub Actions (`.github/workflows/deploy.yml`) собирает сайт и выкладывает его на GitHub Pages.

## Запуск у себя на компьютере

Нужен [Node.js](https://nodejs.org) версии 22 или новее.

```bash
npm install      # один раз
npm run dev      # сайт на http://localhost:4321, обновляется при правке файлов
npm run build    # собрать готовый сайт в папку dist/
npm run check    # проверить, что в данных и коде нет ошибок
```

## Как добавить приложение

1. Положи иконку (квадрат, лучше SVG или PNG 512×512) в `src/assets/apps/<slug>.svg`.
2. Скопируй любой файл из `src/content/apps/` в `src/content/apps/<slug>.md` и заполни поля:

| Поле | Что писать |
|---|---|
| `name` | Название приложения |
| `slug` | Адрес: латиница, цифры, дефисы. Совпадает с именем файла |
| `tagline` | Одна строка: что делает (до 80 символов) |
| `description` | 1–2 предложения для поисковиков (до 160 символов) |
| `type` | `mobile` или `web` |
| `category` | Одна из категорий в `src/data/categories.ts` |
| `platforms` | `[ios, android]`, `[ios]`, `[web]` … |
| `price`, `currency` | Цена числом (`4.99`) и валюта (по умолчанию `USD`) |
| `pricingModel` | `free`, `paid`, `subscription`, `freemium` |
| `billingPeriod` | Для подписки: `month` или `year` |
| `appStoreUrl`, `googlePlayUrl` | Ссылки на магазины (для mobile) |
| `webAppUrl`, `paddleCheckoutUrl` | Ссылка на приложение и на оплату Paddle (для web) |
| `icon` | Путь к иконке: `../../assets/apps/<slug>.svg` |
| `screenshots` | Список `{ src, alt }` |
| `features` | Список `{ title, text }` |
| `faq` | Список `{ q, a }` — только реальные вопросы |
| `useCases` | Сценарии использования `{ slug, title, summary, body }` |
| `competitors` | Список конкурентов (для страниц сравнения) |
| `releaseDate`, `updatedDate` | Даты в формате `2026-09-27`. `updatedDate` попадает в sitemap |
| `status` | `live` — опубликовано, `coming-soon` — скоро, `draft` — не показывать |
| `featured` | `true` — показывать выше на главной |
| `example` | `true` только у тестовых примеров |

Под текстом между `---` пишется обычное описание приложения.
Если ошиблась какая-то строка, `npm run build` покажет, какое поле неправильное.

**Примеры.** Сейчас в каталоге 4 тестовых приложения `sample-*` (`example: true`, на сайте с бейджем «Example»).
Удали их, когда появятся настоящие приложения.

## Как добавить категорию

Добавь строку в `src/data/categories.ts` и иконку `src/assets/categories/<slug>.svg`.
Категория появится на главной и в подвале, как только в ней будет хотя бы одно приложение.

## Сценарии, сравнения, FAQ, инструменты, статьи

Эти разделы ещё не собраны (следующие этапы). Когда раздел будет готов, в `src/data/site.ts`
для него ставится `true` в `sections` — и шапка, подвал и карточки на главной начинают вести на новые страницы.
Инструкции для каждого раздела появятся здесь вместе с ним.

- **Сценарий** — поле `useCases` в файле приложения.
- **Сравнение** — поле `competitors` в файле приложения + файл с данными о конкурентах (с датой проверки).
- **FAQ** — поле `faq` в файле приложения; общий FAQ главной — в `src/data/home.ts`.

## Как заменить маскота

**2D-картинка:** замени файл `assets/mascot/mascot-2d.jpg` и запусти `npm run assets`.
Скрипт `scripts/prepare-assets.mjs` обрежет чёрные поля и положит готовую версию в `src/assets/mascot/`.
Если у новой картинки другие поля — поправь числа в `extract(...)` в скрипте.
Сайт сам сделает из неё лёгкие AVIF/WebP нужных размеров.

**3D-модель (этап 2):** положи файл в `assets/mascot/mascot.glb` — дальше по разделу 5 в `CLAUDE.md`.

## Как заменить логотип, favicon и картинку для соцсетей

- Логотип: `src/assets/logo.svg` (цвет берётся из текста — лаймовый на чёрном, тёмно-синий на лаймовом).
- Потом `npm run assets` — пересоберёт favicon, иконку для iPhone и картинку для соцсетей
  (`public/og-default.jpg`, из `assets/brand/banner.jpg`).

## Как подключить свой домен

1. В `astro.config.mjs` поменяй строку `const SITE = 'https://realign756332-alt.github.io';` на свой адрес,
   например `https://biteon.studio`.
2. Создай файл `public/CNAME` с одной строкой — доменом без `https://` (например `biteon.studio`).
3. У регистратора домена добавь DNS-записи для GitHub Pages
   ([инструкция GitHub](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
4. В репозитории: Settings → Pages → Custom domain — впиши домен и включи «Enforce HTTPS».

## Первая настройка GitHub Pages (один раз)

Settings → Pages → Build and deployment → Source: **GitHub Actions**.
После этого каждый merge в `main` публикует сайт автоматически (вкладка Actions показывает ход сборки).

## Шрифт

Montserrat (Google Fonts, лицензия OFL) — из npm-пакета `@fontsource-variable/montserrat`,
подключён через встроенные шрифты Astro и отдаётся с нашего же сайта. Сейчас подключена только латиница;
для украинской версии нужно будет добавить файл `montserrat-cyrillic-wght-normal.woff2` в `astro.config.mjs`.
