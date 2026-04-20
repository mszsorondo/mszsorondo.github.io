import { useMemo, useState } from 'react';

interface PostItem { slug: string; title: string; description: string; category: string; tags: string[]; }
interface Props { posts: PostItem[]; placeholder: string; hrefPrefix: string; }

export default function BlogSearch({ posts, placeholder, hrefPrefix }: Props) {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    const s = q.toLowerCase().trim();
    if (!s) return posts;
    return posts.filter(p =>
      p.title.toLowerCase().includes(s) ||
      p.description.toLowerCase().includes(s) ||
      p.category.toLowerCase().includes(s) ||
      p.tags.some(t => t.toLowerCase().includes(s))
    );
  }, [q, posts]);

  return (
    <div>
      <input
        type="search"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b border-line py-2 text-lg bg-transparent focus:outline-none focus:border-ink"
      />
      <ul className="mt-6 divide-y divide-line">
        {filtered.map(p => (
          <li key={p.slug} className="py-4">
            <a href={`${hrefPrefix}/${p.slug}/`} className="block">
              <p className="text-xs uppercase tracking-widest text-ink-mute">{p.category}</p>
              <h3 className="font-display text-xl mt-1 hover:underline underline-offset-4">{p.title}</h3>
              <p className="text-ink-soft mt-1">{p.description}</p>
            </a>
          </li>
        ))}
        {filtered.length === 0 && <li className="py-6 text-ink-mute">Sin resultados.</li>}
      </ul>
    </div>
  );
}
