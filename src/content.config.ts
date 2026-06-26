import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    outline: z.array(z.string()).default([])
  })
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    dateModified: z.coerce.date()
  })
});

export const collections = { articles, projects };
