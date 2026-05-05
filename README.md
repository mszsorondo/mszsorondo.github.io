# mszsorondo.github.io

Portfolio personal de Marco Sánchez Sorondo — bilingüe (ES/EN), con blog, proyectos, servicios agendables y posicionamiento de thought leadership en IA.

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
npm run test           # Playwright smoke tests
```

## Deploy

Push a `main` → GitHub Actions → GitHub Pages → https://mszsorondo.github.io/

**Setup inicial (una vez):** GitHub → Settings → Pages → Source: **GitHub Actions**.

## Stack

- **Astro 6** (SSG) + **TypeScript**
- **Tailwind v4** (CSS-first `@theme`)
- **React islands** para interactividad (LanguageToggle, CalendlyEmbed, BlogSearch, CategoryFilter)
- **Content Collections** con Zod para blog, proyectos, servicios, work timeline, publicaciones, testimonios
- **Fuentes**: Satoshi (display, vía Fontshare CDN), Inter (body), Source Serif 4 (prosa de blog), JetBrains Mono (código)
- **i18n nativo** con rutas `/es/` (default) y `/en/`
- **RSS feeds** por idioma
- **Deploy** vía GitHub Actions a GitHub Pages

## Estructura

```
src/
  content/         # markdown + JSON de blog, proyectos, work, services, publications, testimonials
  content.config.ts  # schemas Zod
  i18n/            # diccionarios + helpers
  layouts/         # BaseLayout, ProjectLayout, BlogPostLayout
  components/      # componentes .astro reutilizables
    islands/       # componentes React hidratados en cliente
  pages/           # rutas (espejo ES y EN)
  styles/          # global.css, prose.css
public/            # favicon, CV PDFs, imágenes
```

Diseño completo en `docs/superpowers/specs/2026-04-20-portfolio-design.md`.
Plan de implementación en `docs/superpowers/plans/2026-04-20-portfolio-implementation.md`.

## Agregar contenido

**Nuevo post del blog (ES):** crear `src/content/blog/es/YYYY-MM-DD-slug.md` con frontmatter (ver posts existentes).
**Nuevo proyecto:** `src/content/projects/{es,en}/slug.md`.
**Nueva entrada de timeline:** `src/content/work/{es,en}/NN-slug.md`.
