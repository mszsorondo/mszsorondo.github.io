export type Lang = 'es' | 'en';

const routeMap = {
  blog: { es: 'blog', en: 'blog' },
  apply: { es: 'aplicar', en: 'apply' },
  thanks: { es: 'gracias', en: 'thanks' },
} as const;

export type RouteKey = keyof typeof routeMap;

const slugToKey: Record<Lang, Record<string, RouteKey>> = { es: {}, en: {} };
for (const [key, val] of Object.entries(routeMap) as [RouteKey, typeof routeMap[RouteKey]][]) {
  slugToKey.es[val.es] = key;
  slugToKey.en[val.en] = key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  return (maybeLang === 'en' ? 'en' : 'es') as Lang;
}

export function getAltUrl(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  const qh = url.search + url.hash;
  if (current === target) return url.pathname + qh;

  const hasPrefix = url.pathname === `/${current}` || url.pathname.startsWith(`/${current}/`);
  if (!hasPrefix) {
    return `/${target}/` + qh;
  }

  const rest = url.pathname.replace(new RegExp(`^/${current}/?`), '');
  const segments = rest.split('/').filter(Boolean);

  if (segments.length === 0) {
    return `/${target}/` + qh;
  }

  const firstSeg = segments[0];
  const routeKey = slugToKey[current][firstSeg];
  if (routeKey) {
    segments[0] = routeMap[routeKey][target];
  }

  return `/${target}/${segments.join('/')}/` + qh;
}
