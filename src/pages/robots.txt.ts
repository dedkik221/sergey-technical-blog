import { absoluteUrl } from '@lib/site';

export const prerender = true;

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap-index.xml')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
