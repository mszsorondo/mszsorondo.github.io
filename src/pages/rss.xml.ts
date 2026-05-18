import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', (p) => p.id.startsWith('es/') && !p.data.draft);
  return rss({
    title: 'Marco Sánchez Sorondo — Blog',
    description: 'Notas sobre IA, desarrollo, investigación, consultoría y capacitaciones.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.pubDate,
        link: `/es/blog/${p.id.replace(/^es\//, '')}/`,
      })),
    customData: '<language>es-AR</language>',
  });
}
