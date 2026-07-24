// Centrale site-configuratie.
export const site = {
  brand: 'Dorchain Studio',
  person: 'Jaiden Dorchain',
  tagline: 'Nieuwe websites voor zzp’ers',
  description:
    'Ik bouw de website van zzp’ers opnieuw op: styling, vindbaarheid in ' +
    'Google, snelheid, toegankelijkheid en mobiel gebruik. Hosting en ' +
    'onderhoud regel ik. Vraag een gratis scan van je huidige site aan.',
  url: 'https://dorchain.studio',

  // Formspree endpoint voor het contactformulier (door jou aangeleverd).
  formspreeEndpoint: 'https://formspree.io/f/mkolwgbn',

  email: 'jaiden@dorchain.studio',
  phone: '',                 // bijv. '+31 6 12 34 56 78' — nog invullen
  city: 'Rotterdam',
  kvk: '42120924',           // KvK-nummer
  btw: 'volgt',              // BTW-identificatienummer — nog invullen
} as const;

// De navigatie-items staan per taal in src/i18n/translations.ts (nl.nav / en.nav).
