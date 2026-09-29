import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categorySlugs } from './data/categories';
import { localeCodes } from './i18n/config.mjs';

// Переводы текстов приложения на другие языки сайта (английский — в основных полях).
const appTranslation = z.object({
  tagline: z.string().max(80),
  description: z.string().max(160),
  features: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
});

// Одно приложение = один файл src/content/apps/<slug>.md.
// Описание поля — в README, раздел «Как добавить приложение».
const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'slug: только латиница, цифры и дефисы'),
        tagline: z.string().max(80),
        description: z.string().max(160),
        type: z.enum(['mobile', 'web']),
        category: z.enum(categorySlugs),
        platforms: z.array(z.enum(['ios', 'android', 'web'])).min(1),
        price: z.number().nonnegative().default(0),
        currency: z.string().length(3).default('USD'),
        pricingModel: z.enum(['free', 'paid', 'subscription', 'freemium']),
        billingPeriod: z.enum(['month', 'year']).optional(),
        appStoreUrl: z.url().optional(),
        googlePlayUrl: z.url().optional(),
        webAppUrl: z.url().optional(),
        paddleCheckoutUrl: z.url().optional(),
        icon: image(),
        screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
        features: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
        faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
        useCases: z
          .array(
            z.object({
              slug: z.string(),
              title: z.string(),
              summary: z.string(),
              body: z.string().optional(),
            }),
          )
          .default([]),
        // Языки самого приложения (интерфейса), коды BCP 47: en, de, uk, pt-BR …
        appLanguages: z.array(z.string().regex(/^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/, 'appLanguages: коды языков вида en, de, pt-BR')).default([]),
        // Переводы tagline, description и features: translations.de, translations.ja …
        translations: z.partialRecord(z.enum(localeCodes as [string, ...string[]]), appTranslation).default({}),
        releaseDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date(),
        status: z.enum(['live', 'coming-soon', 'draft']),
        featured: z.boolean().default(false),
        // true = тестовый пример, не настоящее приложение. Остаётся в данных, но на сайт и в sitemap не попадает.
        example: z.boolean().default(false),
      })
      .refine((a) => a.pricingModel !== 'subscription' || a.billingPeriod, {
        message: 'Для подписки укажи billingPeriod: month или year',
      }),
});

export const collections = { apps };
