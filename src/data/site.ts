// Centrale site-configuratie. Pas de placeholders hieronder aan zodra de
// eenmanszaak is opgericht en je echte gegevens hebt.
export const site = {
  brand: 'Dorchain Web Solutions',
  person: 'Jaiden Dorchain',
  tagline: 'Webverbetering voor zzp’ers',
  description:
    'Ik help zzp’ers met een bestaande website die beter moet: ' +
    'styling, vindbaarheid in Google, snelheid, toegankelijkheid en ' +
    'mobiel gebruik. Vraag een gratis website-scan aan.',
  url: 'https://dorchainwebsolutions.nl',

  // Formspree endpoint voor het contactformulier (door jou aangeleverd).
  formspreeEndpoint: 'https://formspree.io/f/mkolwgbn',

  // --- Placeholders: invullen zodra bekend ---
  email: 'jaiden@dorchainwebsolutions.nl',
  phone: '',                 // bijv. '+31 6 12 34 56 78'
  city: 'Nederland',
  kvk: 'volgt',              // KvK-nummer na inschrijving
  btw: 'volgt',              // BTW-id na inschrijving

  nav: [
    { label: 'Herkenbaar?', href: '#herkenning' },
    { label: 'Diensten', href: '#diensten' },
    { label: 'Aanpak', href: '#aanpak' },
    { label: 'Over', href: '#over' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;
