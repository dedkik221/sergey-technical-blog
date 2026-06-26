import { absoluteUrl, site } from './site';

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ArticleStructuredData = {
  title: string;
  description: string;
  datePublished: Date;
  dateModified?: Date;
  tags: string[];
};

type ProjectStructuredData = {
  title: string;
  description: string;
  status: string;
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.author.name,
  url: site.siteUrl,
  description: site.author.description,
  sameAs: [site.author.telegram, site.author.github].filter(Boolean)
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.siteUrl,
  inLanguage: site.language,
  description: site.description,
  author: {
    '@type': 'Person',
    name: site.author.name
  }
};

export const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: site.name,
  url: absoluteUrl('/articles/'),
  inLanguage: site.language,
  description: site.description,
  author: {
    '@type': 'Person',
    name: site.author.name
  }
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function articleJsonLd(article: ArticleStructuredData, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished.toISOString(),
    dateModified: (article.dateModified ?? article.datePublished).toISOString(),
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
    inLanguage: site.language,
    keywords: article.tags.join(', '),
    author: {
      '@type': 'Person',
      name: site.author.name,
      url: site.siteUrl
    },
    publisher: {
      '@type': 'Person',
      name: site.author.name
    }
  };
}

export function softwareApplicationJsonLd(project: ProjectStructuredData, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'macOS',
    url: absoluteUrl(path),
    inLanguage: site.language,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder'
    },
    author: {
      '@type': 'Person',
      name: site.author.name
    },
    applicationSubCategory: project.status
  };
}
