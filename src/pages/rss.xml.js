import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '@lib/site';

export async function GET(context) {
  const articles = await getCollection('articles');
  const published = articles
    .filter((article) => !article.data.draft)
    .sort((a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime());

  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? site.siteUrl,
    items: published.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.datePublished,
      link: `/articles/${article.id}/`,
      categories: article.data.tags
    }))
  });
}
