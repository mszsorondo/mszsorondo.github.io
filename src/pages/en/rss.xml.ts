import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', (p) => p.id.startsWith('en/') && !p.data.draft);
  return rss({
    title: 'Marco Sánchez Sorondo - Blog',
    description: 'Notes on AI, development, research, consulting, and training.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.pubDate,
        link: `/en/blog/${p.id.replace(/^en\//, '')}/`,
      })),
    customData: '<language>en-US</language>',
  });
}
