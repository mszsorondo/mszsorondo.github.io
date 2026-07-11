// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mszsorondo.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/es/servicios': '/es/#que-hago',
    '/es/proyectos': '/es/#que-construi',
    '/es/trabajo': '/es/#trayectoria',
    '/es/acerca': '/es/#trayectoria',
    '/es/contacto': '/es/#trabajemos',
    '/en/services': '/en/#what-i-do',
    '/en/projects': '/en/#what-i-built',
    '/en/work': '/en/#track-record',
    '/en/about': '/en/#track-record',
    '/en/contact': '/en/#work-with-me',
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR', en: 'en-US' },
      },
    }),
  ],
  build: {
    format: 'directory',
  },
});
