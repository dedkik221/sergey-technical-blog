const rawSiteUrl = import.meta.env.SITE_URL || 'https://example.com';

export const site = {
  name: 'Сергей: видео, AI-автомонтаж и self-hosted workflow',
  shortName: 'sergey.devlog',
  description:
    'Личный технический блог о видео, автоматизации монтажа, AI-инструментах, Premiere/DaVinci и self-hosted процессах.',
  siteUrl: rawSiteUrl.replace(/\/$/, ''),
  language: 'ru-RU',
  locale: 'ru_RU',
  author: {
    name: 'Сергей',
    avatarInitials: 'С',
    avatarImage: '/images/avatar.png',
    role: 'видео / автоматизация / AI-инструменты',
    description:
      'Я исследую и собираю инструменты на стыке видеопроизводства, автоматизации монтажа, AI и локальной инфраструктуры.',
    sidebarDescription:
      'Разрабатываю продукты и инструменты, автоматизирую контент-процессы и делюсь опытом в блоге.',
    telegram: 'https://t.me/your_username',
    email: 'hello@example.com',
    github: 'https://github.com/your_username'
  },
  nav: [
    { href: '/', label: 'Главная' },
    { href: '/articles/', label: 'Статьи' },
    { href: '/projects/', label: 'Проекты' },
    { href: '/about/', label: 'Обо мне' },
    { href: '/contact/', label: 'Контакты' }
  ],
  cloudflareAnalyticsToken: import.meta.env.PUBLIC_CF_ANALYTICS_TOKEN || '',
  feedbackEndpoint: import.meta.env.PUBLIC_FEEDBACK_ENDPOINT || ''
} as const;

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${site.siteUrl}${normalizedPath}`;
}

export function canonicalPath(path = '/') {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}
