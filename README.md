# Dorchain Web Solutions

Landingssite voor **Dorchain Web Solutions**, de eenmanszaak van Jaiden Dorchain.

Ik bouw de website van zzp'ers opnieuw op: styling, vindbaarheid in Google, snelheid,
toegankelijkheid en mobielvriendelijkheid. Ik werk niet in het bestaande systeem van de
klant; de nieuwe site komt in een eigen GitHub-repo en wordt gehost via Cloudflare.

De site is gebouwd met [Astro](https://astro.build) als statische one-pager en gehost via
GitHub Pages.

## Wat er op de site staat

- **Hero** — de belofte direct duidelijk, met een animerende Lighthouse-scorekaart
- **Herkenning** — de meest voorkomende problemen bij zzp-websites
- **Diensten** — de vijf pijlers: styling, SEO, snelheid, toegankelijkheid, responsiveness
- **Aanpak** — vier stappen van gratis scan tot oplevering
- **Over** — wie ik ben en hoe ik werk
- **Contact** — formulier via Formspree, met spambescherming en mailto-fallback
- **Privacyverklaring** en **404-pagina**

## Lokaal draaien

```bash
npm install
npm run dev       # dev-server op http://localhost:4321
npm run build     # bouwt naar dist/
npm run preview   # bekijkt de gebouwde site
```

## Hosten

De site draait op GitHub Pages. Bij elke push naar `main` bouwt GitHub Actions automatisch
de site en publiceert hem. Geen handmatig uploaden nodig.

Zie `.github/workflows/deploy.yml` voor de workflow.

## Aanpassen

Alle teksten en gegevens staan op één plek: [`src/data/site.ts`](src/data/site.ts).

| Veld | Wanneer invullen |
| ---- | ---------------- |
| `email`, `phone` | Direct |
| `kvk` | Ingevuld: 42120924 |
| `btw` | Zodra het BTW-identificatienummer binnen is (staat nu op `volgt`) |
| `url` | Zodra het domein bekend is (stuurt sitemap, canonical en Open Graph aan) |

**Domein koppelen:** de `public/CNAME` staat op `dorchain.studio`. Zet bij je
domeinregistrar A-records naar de GitHub Pages IP-adressen en schakel in de repo-instellingen
"Enforce HTTPS" in.

## Technieken gebruikt

- [Astro](https://astro.build) — statische site, snelle build
- [Fontsource](https://fontsource.org) — zelf-gehoste variabele fonts (Fraunces, Hanken Grotesk, JetBrains Mono)
- [Formspree](https://formspree.io) — contactformulier zonder eigen server
- GitHub Actions + GitHub Pages — automatische deploy
