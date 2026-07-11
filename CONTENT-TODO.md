# Pendientes de contenido

Items que requieren tu input manual, tras el rediseño brutalista (2026-07).

## Copy con números

El estilo Lambda vive de las cifras. Cuando puedas, reemplazá afirmaciones cualitativas por números en `src/pages/es/index.astro` y `src/pages/en/index.astro`:

- Intuitiv AI: cantidad de clientes, industrias, o facturación si querés mostrarla.
- Peak Health: volumen de consultas o usuarios que pasan por los agentes.
- Capacitaciones: cantidad de alumnos/equipos entrenados.

## Blog

Los dos posts actuales son de arranque. Con 5+ posts reales la sección Blog del one-pager gana peso. El post "Por qué elegí Astro" menciona Calendly y páginas de proyectos que ya no existen; actualizalo o despublicalo (`draft: true`).

## Futuras iteraciones

- **OG image**: `public/og-default.svg` sigue siendo la versión mínima; podés regenerarla en el nuevo estilo mono/blanco y negro (PNG 1200×630 para parsers estrictos).
- **Analytics**: Plausible o Umami, opcional.
- **Dark mode**: la paleta son 4 variables CSS en `global.css`; un `@media (prefers-color-scheme: dark)` alcanza.
- **Contenido eliminado**: las descripciones largas de proyectos, servicios, timeline y testimonios viven en git (`git show b32375c^:src/content/...`) si necesitás recuperar algo.
