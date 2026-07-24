# Algemene voorwaarden — waar staan ze en wat moet er nog gebeuren

De volledige tekst van de algemene voorwaarden staat op één plek: in de
pagina's zelf. Dit bestand bevat géén voorwaarden, alleen waar ze staan en
wat er nog open staat.

## De bron

| Bestand | Wat het is |
| ------- | ---------- |
| [`src/pages/algemene-voorwaarden.astro`](../src/pages/algemene-voorwaarden.astro) | De Nederlandse tekst. **Dit is de bindende versie.** |
| [`src/pages/en/terms-and-conditions.astro`](../src/pages/en/terms-and-conditions.astro) | De Engelse vertaling, uitdrukkelijk niet bindend. |

Bedrijfsgegevens staan daar niet hard in: KvK-nummer, e-mailadres,
vestigingsplaats en BTW-id komen uit
[`src/data/site.ts`](../src/data/site.ts) en worden automatisch ingevuld.
Pas je die aan, dan veranderen beide pagina's mee — ook de
privacyverklaring en de footer.

**Twee regels bij het aanpassen:**

1. Wijzig altijd beide pagina's in dezelfde commit. De Engelse versie is een
   vertaling, geen eigen tekst.
2. Houd de artikelnummering én de leden gelijk in beide talen. Nu zijn het
   18 artikelen met samen 61 leden, van Definities tot Toepasselijk recht en
   geschillen. Voeg je er een toe, dan schuift de rest op en moeten de
   onderlinge verwijzingen mee — artikel 6 lid 3 verwijst naar artikel 5
   (meerwerk) en artikel 6 lid 5 naar artikel 16 (looptijd en opzegging).
3. Artikel 11, 15 en 17 bestaan uit één bepaling en hebben daarom geen
   genummerde leden. Dat is bewust.

## Geen PDF's meer in deze map

De eerdere exports van 2 juli 2026 zijn verwijderd: ze misten het
KvK-nummer, artikel 6, Cloudflare en GitHub, en de huidige nummering.
Exporteer pas een nieuwe PDF als de tekst definitief is en een jurist ernaar
heeft gekeken — anders ligt er weer een verouderde kopie klaar om per
ongeluk mee te sturen met een offerte.

## Nog aan te vullen / te controleren

- [x] KvK-nummer invullen — 42120924, staat in `src/data/site.ts`.
- [ ] BTW-identificatienummer invullen zodra bekend (staat nu op `volgt`).
- [x] Vestigingsplaats invullen — Rotterdam. Die wordt gebruikt in artikel 1
      en bepaalt in artikel 18 welke rechter bevoegd is: het arrondissement
      Rotterdam.
- [ ] Vastleggen wat er per abonnement is inbegrepen en tegen welk tarief.
      Artikel 6 verwijst daarvoor naar de offerte. Op de site staat nu:
      eerste jaar inbegrepen bij de bouw, daarna € 149 per jaar excl. btw,
      met twee kleine wijzigingen per jaar.
- [ ] Per klant bijhouden: opleverdatum, verlengdatum, bedrag, status.
      Factureren op de verlengdatum van die klant zelf, niet op een vaste
      datum voor iedereen. Herinnering 30 dagen vooraf, want dat is de
      aankondigingstermijn uit artikel 7 bij een prijswijziging.
- [ ] De link naar de voorwaarden opnemen in elke offerte, vóór akkoord.
      Alleen een link in de footer is mager; ter hand stellen vóór het
      sluiten van de overeenkomst is wat ze rechtsgeldig maakt.
- [ ] Bepalen of je de voorwaarden laat deponeren bij de KvK.
- [ ] Overwegen om de tekst te laten toetsen door een jurist, met name
      artikel 12 (garantie) en 13 (aansprakelijkheid).

## Laatste inhoudelijke wijziging

Op 24 juli 2026 zijn drie bepalingen toegevoegd die eerder alleen in een
concept stonden. Leg ze voor als je de tekst laat toetsen:

- Artikel 4 lid 2 — Dorchain Studio bepaalt de wijze van uitvoering, binnen
  de afspraken over het op te leveren resultaat.
- Artikel 5 lid 3 — meerwerk dat zonder schriftelijke opdracht is uitgevoerd
  blijft betaalbaar, mits uit de gedragingen van partijen blijkt dat het in
  opdracht is gedaan.
- Artikel 9 lid 6 — de opdrachtgever mag auteursrecht- en merkaanduidingen
  niet uit de materialen verwijderen.
