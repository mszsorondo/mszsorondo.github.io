# Pendientes antes del launch

Items que requieren tu input manual. Cada uno tiene el "dónde" exacto para que sea rápido.

## Alta prioridad (bloquean un buen launch)

### 1. Calendly de 15 min "intro"
Single source of truth en `src/lib/contact.ts`:
```ts
introCalendly: 'https://calendly.com/marco-sanchez-sorondo/intro',
```
Reemplazá por la URL real de tu Calendly de 15 min "para conocernos". Aparece en `/servicios`, `/contacto` (y sus equivalentes EN) y en el footer.

### 2. Foto profesional
Reemplazá `public/placeholder-photo.svg` por una foto real:
- Guardala como `public/marco.jpg` (o `.webp`).
- Actualizá las referencias a `/placeholder-photo.svg` en:
  - `src/components/Hero.astro` (default del prop `photo`)
  - `src/pages/es/acerca.astro` y `src/pages/en/about.astro`
- Recomendado: cuadrada, ≥800×800, fondo neutro.

### 3. CVs en PDF
Crear carpeta `public/cv/` y copiar:
- `marco-sanchez-sorondo-es.pdf` (podés usar el que ya tenés en `~/Escritorio/personal/resume_cv_building/`)
- `marco-sanchez-sorondo-en.pdf`

El botón "Descargar CV" en `/acerca` y `/about` apunta ahí.

### 4. Descripción real de Taskue
Hoy dice "Aplicación en producción, más detalles pronto." Editá:
- `src/content/projects/es/taskue.md` (body después del frontmatter)
- `src/content/projects/en/taskue.md`

### 5. URL real del Newsletter
Hoy usa placeholder `mszsorondo` de Buttondown. Configurá tu cuenta (Buttondown / ConvertKit / beehiiv) y editá el `formActionUrl` por default en:
- `src/components/Newsletter.astro`

### 6. Datos de contacto reales
En `src/lib/contact.ts` están centralizados:
- `phoneDisplay` y `phoneTel` — verificar que el número sea el correcto (hoy `+54 9 11 6199-7276`)
- `email` — hoy `msorondo@live.com.ar`
- `linkedin`, `github` — verificar handles

## Media prioridad

### 7. Otras iniciativas tuyas
Mencionaste que ibas a contarme más iniciativas personales. Si querés sumarlas como proyectos:
- Crear `src/content/projects/es/<slug>.md` + `src/content/projects/en/<slug>.md` siguiendo el patrón de los 4 existentes.
- Campo `order` determina el orden en la grilla. Si querés que aparezcan en la home, `featured: true`.

### 8. Testimonios (si los tenés)
La sección aparece en `/servicios` solo si hay testimonios cargados. Crear:
- `src/content/testimonials/es/<slug>.json` con `{quote, author, role, company, avatar?, tags}`
- Schema en `src/content.config.ts`.

### 9. OG image profesional
`public/og-default.svg` ya existe (versión mínima con tu nombre). Si querés algo más diseñado (foto + posicionamiento + tu marca), reemplazá el archivo.
LinkedIn y X aceptan SVG, pero algunos parsers prefieren PNG — si querés versión PNG, exportá `og-default.png` 1200×630 y cambiá la referencia en `src/layouts/BaseLayout.astro`.

## Deploy (setup único)

### 10. Crear el repo en GitHub y pushear
```bash
# En GitHub: crear repo público "marcosanchezsorondo.github.io" (vacío, sin README/gitignore)
cd ~/Escritorio/personal/marcosanchezsorondo.github.io
git remote add origin git@github.com:mszsorondo/marcosanchezsorondo.github.io.git
git push -u origin main
```

### 11. Activar GitHub Pages
- GitHub → Settings → Pages → **Source: GitHub Actions**
- Primer push dispara el workflow; 1-2 min después el sitio está live en `https://marcosanchezsorondo.github.io/`.

## Baja prioridad / futuras iteraciones

- **Analytics**: sumar Plausible o Umami (privacy-friendly).
- **Lighthouse CI**: workflow de quality gates (v1.1).
- **Self-host Satoshi**: hoy viene de Fontshare CDN. Descargar woff2 a `public/fonts/` si querés zero dependencias externas.
- **Dark mode**: toda la paleta está en CSS vars, se switchea con un `[data-theme="dark"]`.
- **Preview deploys por PR**: con Cloudflare Pages free tier, si empezás a recibir PRs.

---

Cualquiera de estos lo hacemos cuando me avises.
