# Dorchain Web Solutions — portfolio/landingssite

**Datum:** 2026-06-20
**Status:** Goedgekeurd, in uitvoering

## Doel

Een portfolio-/landingssite voor de (mogelijk op te richten) eenmanszaak **Dorchain Web
Solutions**, met **Jaiden Dorchain** als gezicht erachter. De site moet vertrouwen wekken
bij mede-zzp'ers en leads opleveren via een gratis website-scan / contactformulier.

## Positionering

Geen generieke "ik bouw websites". De propositie is het **verbeteren van bestaande
websites** van mede-zzp'ers (die zelf weinig van websites weten), op vijf pijlers:

1. Styling / design
2. Toegankelijkheid (accessibility)
3. SEO / vindbaarheid
4. Performance / snelheid
5. Responsiveness (mobiel + desktop)

Optioneel: volledige vernieuwing van de website wanneer de opdrachtgever dat wil.

**Kernidee:** de site verkoopt SEO, toegankelijkheid en performance, dus moet hij dat
zelf 100% waarmaken — *practice what you preach*.

## Beslissingen

| Onderwerp | Keuze |
|-----------|-------|
| Taal | Nederlands |
| Techniek | Astro (statisch) |
| Architectuur | One-pager met ankernavigatie + utility-pagina's (privacy, 404) |
| Bewijs/portfolio | Geen nepportfolio — focus op **aanpak/werkwijze** |
| Visuele richting | Licht & redactioneel met tech-precisie; donker contrastblok voor diepte; één accentkleur |
| Formulier | Formspree endpoint `https://formspree.io/f/mkolwgbn`, met `mailto:`-fallback en honeypot |

## Secties (home, one-pager)

1. **Hero** — heldere belofte + primaire CTA ("Vraag een gratis website-scan aan")
2. **Herkenning** — pijnpunten van zzp'ers (traag, gedateerd, niet vindbaar, niet mobielvriendelijk)
3. **Diensten** — de 5 pijlers + optionele volledige vernieuwing
4. **Aanpak** — werkwijze in stappen (scan -> plan/offerte -> verbeteren -> oplevering met uitleg)
5. **Over Jaiden** — persoonlijk, vertrouwen voor een starter
6. **Contact** — Formspree-formulier (met spambescherming) + directe CTA
7. **Footer** — contact, KvK/BTW (placeholder; nog niet opgericht), links

## Standaard meegenomen "benodigdheden"

- **SEO:** meta + Open Graph/Twitter tags, `sitemap.xml`, `robots.txt`, JSON-LD
  (`ProfessionalService`), semantische HTML, correcte heading-hierarchie
- **Toegankelijkheid:** WCAG AA — skip-link, focus-states, contrast, `prefers-reduced-motion`, aria-labels
- **Performance:** statische build, geoptimaliseerde afbeeldingen, minimale JS, font-preload
- **AVG:** `privacyverklaring`-pagina (nodig zodra het formulier data verzamelt)
- **Overig:** favicon/app-icons, Open Graph-afbeelding, nette 404-pagina

## Placeholders (zaak nog niet opgericht)

- KvK-nummer, BTW-id: placeholder, duidelijk als "in te vullen" gemarkeerd
- E-mailadres / telefoon: placeholder
- Echte klantprojecten/testimonials: bewust afwezig (eerlijk voor een starter)

## Niet in scope (YAGNI)

- CMS / blog (later eenvoudig toe te voegen met Astro content collections)
- Analytics/tracking (privacy-vriendelijk later optioneel)
- Meertaligheid
