import { getCollection } from 'astro:content';

type ContentEntryWithBody = {
  body?: string;
};

export function readingTime(entry: ContentEntryWithBody) {
  const words = (entry.body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 180));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

export async function getPublishedArticles() {
  const articles = await getCollection('articles');
  return articles
    .filter((article) => !article.data.draft)
    .sort((a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime());
}

export async function getDraftArticles() {
  const articles = await getCollection('articles');
  return articles
    .filter((article) => article.data.draft)
    .sort((a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime());
}

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.dateModified.getTime() - a.data.dateModified.getTime());
}

export function pathForArticle(id: string) {
  return `/articles/${id}/`;
}

export function pathForProject(id: string) {
  return `/projects/${id}/`;
}
