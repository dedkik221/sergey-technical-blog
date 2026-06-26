import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL ?? 'https://example.com';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.trycloudflare.com']
    },
    preview: {
      allowedHosts: ['.trycloudflare.com']
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
