import { useEffect, useState } from 'react';

interface Props {
  url: string;
  fallbackLabel: string;
}

export default function CalendlyEmbed({ url, fallbackLabel }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 8000);
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => setFailed(true);
    document.body.appendChild(script);
    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);

  if (failed) {
    return (
      <div className="border border-line p-6 text-center">
        <p className="text-ink-soft">{fallbackLabel}</p>
        <a href={url} target="_blank" rel="noopener" className="mt-3 inline-block border border-ink px-5 py-2 text-xs uppercase tracking-widest hover:bg-ink hover:text-paper">
          Calendly →
        </a>
      </div>
    );
  }

  return (
    <div
      className="calendly-inline-widget min-h-[650px]"
      data-url={url}
      style={{ minHeight: 650 }}
    />
  );
}
