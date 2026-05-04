# Pendientes antes del launch

Items que requieren tu input manual. Cada uno tiene el "dónde" exacto.

## Alta prioridad

### 1. Foto profesional
Reemplazá `public/placeholder-photo.svg` por una foto real:
- Guardala como `public/marco.jpg` (o `.webp`).
- Actualizá las referencias a `/placeholder-photo.svg` en:
  - `src/components/Hero.astro` (default del prop `photo`)
  - `src/pages/es/acerca.astro` y `src/pages/en/about.astro`
- Recomendado: cuadrada, ≥800×800, fondo neutro.

### 2. Verificar contacto
En `src/lib/contact.ts` está centralizado:
- `phoneDisplay: '+54 9 11 6199-7276'` — verificar que sea correcto
- `phoneTel: '+5491161997276'` — versión sin formato para `tel:`
- `email: 'mssorondom00@gmail.com'` — verificar
- `linkedin`, `github` — verificar handles

Email y teléfono ya están **obfuscados** con base64 + decode JS. No aparecen en el HTML estático → bots de scraping no los ven (solo los ven después de que el navegador ejecuta JS, que la mayoría de los spam bots no hacen). Spam mitigado pero no eliminado completamente — para los pocos que se cuelan, los filtros de Gmail hacen el resto.

## Media prioridad

### 3. Otras iniciativas tuyas
Mencionaste que ibas a contarme más iniciativas personales. Si querés sumarlas como proyectos:
- Crear `src/content/projects/es/<slug>.md` + `src/content/projects/en/<slug>.md` siguiendo el patrón de los 4 existentes.
- Campo `order` determina el orden en la grilla. Si querés que aparezcan en la home, `featured: true`.

### 4. Testimonios (si los tenés)
La sección aparece en `/servicios` solo si hay testimonios cargados. Crear:
- `src/content/testimonials/es/<slug>.json` con `{quote, author, role, company, avatar?, tags}`
- Schema en `src/content.config.ts`.

### 5. OG image profesional
`public/og-default.svg` ya existe (versión mínima con tu nombre). Si querés algo más diseñado (foto + posicionamiento + tu marca), reemplazá el archivo. LinkedIn y X aceptan SVG, pero algunos parsers prefieren PNG — si querés versión PNG, exportá `og-default.png` 1200×630 y cambiá la referencia en `src/layouts/BaseLayout.astro`.

## Deploy (setup único)

### 6. Crear el repo en GitHub y pushear
```bash
# En GitHub: crear repo público "marcosanchezsorondo.github.io" (vacío, sin README/gitignore)
cd ~/Escritorio/personal/marcosanchezsorondo.github.io
git remote add origin git@github.com:mszsorondo/marcosanchezsorondo.github.io.git
git push -u origin main
```

### 7. Activar GitHub Pages
- GitHub → Settings → Pages → **Source: GitHub Actions**
- Primer push dispara el workflow; 1-2 min después el sitio está live en `https://marcosanchezsorondo.github.io/`.

## Baja prioridad / futuras iteraciones

- **Newsletter**: removido por ahora. Cuando tengas 5-10 posts y quieras crecer audiencia, sumamos Buttondown/ConvertKit/beehiiv.
- **Analytics**: Plausible o Umami (privacy-friendly), opcional.
- **Lighthouse CI**: workflow de quality gates (v1.1).
- **Self-host Satoshi**: hoy viene de Fontshare CDN. Descargar woff2 a `public/fonts/` si querés zero dependencias externas.
- **Dark mode**: toda la paleta está en CSS vars, se switchea con un `[data-theme="dark"]`.

---

Cualquiera de estos lo hacemos cuando me avises.
