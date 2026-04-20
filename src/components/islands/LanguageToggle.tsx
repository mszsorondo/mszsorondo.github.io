import { useEffect, useState } from 'react';

interface Props {
  currentLang: 'es' | 'en';
  altUrl: string;
}

export default function LanguageToggle({ currentLang, altUrl }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const target = currentLang === 'es' ? 'EN' : 'ES';
  return (
    <a
      href={altUrl}
      aria-label={`Switch to ${target}`}
      className="px-2 py-1 text-xs uppercase tracking-widest font-semibold border border-line hover:border-ink transition-colors"
      suppressHydrationWarning
    >
      {mounted ? target : target}
    </a>
  );
}
