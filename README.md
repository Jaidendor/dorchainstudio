# Dorchain Web Solutions

Portfolio-/landingssite voor de eenmanszaak **Dorchain Web Solutions** (Jaiden Dorchain).
Gericht op het verbeteren van bestaande websites van zzp’ers: styling, vindbaarheid,
snelheid, toegankelijkheid en mobiel gebruik.

Gebouwd met [Astro](https://astro.build) als statische site.

## Commando’s

| Commando            | Wat het doet                                  |
| ------------------- | --------------------------------------------- |
| `npm install`       | Installeert de dependencies                   |
| `npm run dev`       | Lokale dev-server op http://localhost:4321    |
| `npm run build`     | Bouwt de productie-site naar `dist/`          |
| `npm run preview`   | Bekijkt de gebouwde site lokaal               |

## Hosten via Laravel Herd

Astro bouwt een statische site naar `dist/`. Laat Herd die map serveren, of zet de
inhoud van `dist/` op je hosting. Voor dagelijks werk gebruik je `npm run dev`.

## Aanpassen voordat je live gaat

Alle teksten en gegevens staan op één plek: `src/data/site.ts`.

- Vul `email`, `phone`, `kvk` en `btw` in zodra de zaak is ingeschreven.
- Pas `url` aan naar je definitieve domein (gebruikt voor sitemap, canonical en Open Graph).
- De Formspree-endpoint staat al ingesteld op het contactformulier.
- Vervang `public/og-image.svg` eventueel door een PNG (sommige sociale platforms tonen
  geen SVG-voorbeeld).

De ontwerp- en inhoudskeuzes staan in
`docs/superpowers/specs/2026-06-20-portfolio-site-design.md`.
