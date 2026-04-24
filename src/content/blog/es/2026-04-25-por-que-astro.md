---
title: "Por qué elegí Astro para mi portfolio"
description: "Una comparación corta con Jekyll, Hugo y Next.js, y por qué Astro ganó."
pubDate: 2026-04-25
category: "tutorial"
tags: ["astro", "web", "static-sites"]
translationSlug: "why-astro"
draft: false
---

Resumen corto de la decisión.

## El problema

Necesitaba un sitio estático bilingüe, con blog en markdown, páginas de proyectos, embeds de Calendly, y deploy en GitHub Pages. Todo lo más performante posible.

## Opciones evaluadas

- **Jekyll.** Nativo de GH Pages. Ruby, ecosistema viejo, i18n con plugins incómodos.
- **Hugo.** Rapidísimo, pero templates Go y menos flexibilidad de componentes.
- **Next.js.** React familiar, pero mucho JS por default para un sitio mayormente estático.
- **Astro.** SSG moderno con i18n nativo, content collections, mínimo JS por default.

## Por qué Astro

- i18n out of the box con rutas `/es` `/en`.
- Content Collections con Zod → el build falla si meto frontmatter roto.
- Cero JS por default → Lighthouse 100 fácil.
- Islands para las 4 cosas interactivas que necesito.
- Integra Tailwind en un comando.

Más adelante escribo sobre la implementación concreta.
