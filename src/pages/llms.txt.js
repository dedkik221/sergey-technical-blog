import { getCollection } from 'astro:content';
import { site, absoluteUrl } from '@lib/site';

export async function GET() {
  const articles = await getCollection('articles');
  const published = articles.filter((article) => !article.data.draft);

  const body = [
    `# ${site.name}`,
    '',
    site.description,
    '',
    '## Автор',
    `${site.author.name}: ${site.author.description}`,
    '',
    '## Ключевые страницы',
    `- Главная: ${absoluteUrl('/')}`,
    `- Статьи: ${absoluteUrl('/articles/')}`,
    `- Проект Unicube: ${absoluteUrl('/projects/unicube/')}`,
    `- Обо мне: ${absoluteUrl('/about/')}`,
    `- Контакты: ${absoluteUrl('/contact/')}`,
    '',
    '## Опубликованные статьи',
    ...published.map((article) => `- ${article.data.title}: ${absoluteUrl(`/articles/${article.id}/`)}`),
    '',
    '## Markdown summaries',
    `- Главная: ${absoluteUrl('/summaries/home.md')}`,
    `- About: ${absoluteUrl('/summaries/about.md')}`,
    `- Unicube: ${absoluteUrl('/summaries/unicube.md')}`,
    `- Первая статья: ${absoluteUrl('/summaries/ai-automontage-plugin.md')}`,
    '',
    '## Индексация',
    `- RSS: ${absoluteUrl('/rss.xml')}`,
    `- Sitemap: ${absoluteUrl('/sitemap.xml')}`,
    '',
    '## Контакт',
    `- Telegram: ${site.author.telegram}`,
    `- Email: ${site.author.email}`
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
