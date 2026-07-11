import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['agentes', 'investigación', 'opinión', 'tutorial', 'behind-the-scenes', 'otros']),
    tags: z.array(z.string()).default([]),
    heroImage: image().optional(),
    translationSlug: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
