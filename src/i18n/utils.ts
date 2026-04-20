import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';

const dictionaries = { es, en } as const;

const routeMap = {
  about: { es: 'acerca', en: 'about' },
  work: { es: 'trabajo', en: 'work' },
  projects: { es: 'proyectos', en: 'projects' },
  services: { es: 'servicios', en: 'services' },
  blog: { es: 'blog', en: 'blog' },
  contact: { es: 'contacto', en: 'contact' },
} as const;

export type RouteKey = keyof typeof routeMap;

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  return (maybeLang === 'en' ? 'en' : 'es') as Lang;
}

export function t(lang: Lang) {
  return (key: string): string => {
    const parts = key.split('.');
    let node: any = dictionaries[lang];
    for (const p of parts) node = node?.[p];
    return typeof node === 'string' ? node : key;
  };
}

export function getAltUrl(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  const qh = url.search + url.hash;
  if (current === target) return url.pathname + qh;

  const hasPrefix = url.pathname === `/${current}` || url.pathname.startsWith(`/${current}/`);
  if (!hasPrefix) {
    return `/${target}/` + qh;
  }
  return url.pathname.replace(new RegExp(`^/${current}`), `/${target}`) + qh;
}

export function localizedPath(lang: Lang, path: string): string {
  const clean = path.replace(/^\//, '').replace(/\/+$/, '');
  return clean === '' ? `/${lang}/` : `/${lang}/${clean}/`;
}

export function route(lang: Lang, key: RouteKey): string {
  return `/${lang}/${routeMap[key][lang]}/`;
}
