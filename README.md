# Devlog Сергея

Статический Astro-блог и портфолио: MDX-контент, Pagefind-поиск, RSS, sitemap, `llms.txt`, JSON-LD и готовность к Cloudflare Pages.

## Команды

```bash
npm install
npm run dev
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
```

## Где менять публичные данные

Основной конфиг:

```text
src/lib/site.ts
```

Там меняются:

- `siteUrl`;
- имя и описание автора;
- Telegram/email/GitHub;
- `PUBLIC_CF_ANALYTICS_TOKEN`;
- `PUBLIC_FEEDBACK_ENDPOINT`.

Для Cloudflare Pages:

```text
Build command: npm run build
Output directory: dist
```

## Контент

Статьи:

```text
src/content/articles/
```

Проекты:

```text
src/content/projects/
```

Черновики статей остаются в content collection, но не получают публичный URL, пока `draft: true`.
