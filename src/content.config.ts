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

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    tagline: z.string(),
    status: z.enum(['idea', 'wip', 'production', 'launched']),
    heroImage: image().optional(),
    url: z.string().url().optional(),
    logo: z.string().optional(),
    stack: z.array(z.string()).default([]),
    order: z.number(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    subProjects: z.array(z.object({ name: z.string(), tagline: z.string() })).optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    audience: z.string(),
    includes: z.array(z.string()),
    price: z.string().nullable().default(null),
    calendlyUrl: z.string().url().optional(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml,yml}', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    company: z.string(),
    avatar: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable(),
    kind: z.enum(['research', 'applied', 'teaching']),
    bullets: z.array(z.string()),
    location: z.string(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml,yml}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number(),
    authors: z.array(z.string()),
    pdfUrl: z.string().url().optional(),
    kind: z.enum(['paper', 'talk', 'workshop']),
  }),
});

export const collections = { blog, projects, services, testimonials, work, publications };
