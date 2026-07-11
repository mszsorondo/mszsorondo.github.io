# mszsorondo.github.io

Sitio personal de Marco Sánchez Sorondo — bilingüe (ES/EN), minimalista brutalista: una página por idioma, monospace, blanco y negro, un solo acento de color.

Inspirado en lambdaclass.com, tinygrad.org y yann.lecun.com: el contenido es la interfaz, la credibilidad son los datos concretos, y la copy filtra clientes ("trabajo por proyecto, con presupuesto y plazos").

## Local dev

```bash
npm install
npm run dev            # http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Tests

```bash
npm run test           # Playwright smoke tests (levanta preview sobre dist/)
```

## Deploy

Push a `main` → GitHub Actions → GitHub Pages → https://mszsorondo.github.io/

## Stack

- **Astro 6** (SSG) + **TypeScript** — cero JavaScript en el cliente salvo el decode de contacto
- **CSS plano** (`src/styles/global.css`, ~130 líneas) — sin framework
- **JetBrains Mono** self-hosted vía @fontsource — única fuente
- **Content Collections** con Zod solo para el blog
- **i18n** con rutas `/es/` (default) y `/en/`, páginas espejadas a mano
- **RSS** por idioma, sitemap, JSON-LD, hreflang, `llms.txt`
- **Formspree** para el formulario de aplicación con filtros de presupuesto y plazo

## Estructura

```
src/
  content/blog/      # posts markdown por idioma
  content.config.ts  # schema Zod del blog
  i18n/utils.ts      # detección de idioma + URL alternativa
  layouts/           # BaseLayout (head/SEO), BlogPostLayout
  lib/contact.ts     # datos de contacto (obfuscados en HTML con base64)
  pages/
    es/ en/          # index (one-pager), blog, aplicar/apply, gracias/thanks
  styles/global.css  # todo el sistema de diseño
public/llms.txt      # resumen del sitio para crawlers de LLMs
```

Las rutas viejas (`/es/servicios/`, `/es/proyectos/`, etc.) redirigen a anclas del one-pager vía `redirects` en `astro.config.mjs`.
