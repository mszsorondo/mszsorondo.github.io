interface Props {
  categories: string[];
  active?: string;
  allLabel: string;
  basePath: string;
}

export default function CategoryFilter({ categories, active, allLabel, basePath }: Props) {
  return (
    <nav className="flex flex-wrap gap-2 mb-6">
      <a
        href={basePath}
        className={`text-xs uppercase tracking-widest px-3 py-1 border ${!active ? 'border-ink' : 'border-line hover:border-ink'}`}
      >
        {allLabel}
      </a>
      {categories.map(c => (
        <a
          key={c}
          href={`${basePath}categoria/${encodeURIComponent(c)}/`}
          className={`text-xs uppercase tracking-widest px-3 py-1 border ${active === c ? 'border-ink' : 'border-line hover:border-ink'}`}
        >
          {c}
        </a>
      ))}
    </nav>
  );
}
