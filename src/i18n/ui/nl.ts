import type { Dict } from './en';

// Op de hele site spreken we de bezoeker aan met ‘u’.
const nl: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — Uw ecosysteem voor productiviteit',
    homeDescription:
      'Ontdek het ecosysteem van mobiele apps en webapps van BitEon Studio, gemaakt om uw mogelijkheden te vergroten en uw productiviteit te verhogen.',
    homeImageAlt: 'Logo van BitEon Studio op een limoengroene achtergrond',
    notFoundTitle: 'Pagina niet gevonden — BitEon Studio',
    notFoundDescription: 'De pagina is mogelijk verplaatst of bestaat niet meer.',
  },
  a11y: {
    skipToContent: 'Naar de inhoud',
    homeLink: 'BitEon Studio, home',
    mainNav: 'Hoofdmenu',
    footerNav: 'Voettekst',
    openMenu: 'Menu',
    closeMenu: 'Sluiten',
  },
  nav: {
    apps: 'Apps',
    new: 'Nieuw',
    principles: 'Principes',
    faq: 'Vragen',
    cta: 'Bekijk de apps',
  },
  language: {
    label: 'Taal',
    change: 'Taal wijzigen. Huidige taal: {lang}',
    hint: 'Deze pagina is ook beschikbaar in het {language}.',
    hintAction: 'Wisselen',
    hintClose: 'Sluiten',
  },
  hero: {
    title: 'Uw ecosysteem voor productiviteit.',
    lead: 'Ontdek het app-ecosysteem van BitEon Studio, gemaakt om uw mogelijkheden te vergroten. Innovatieve webdiensten en mobiele software die zich aanpassen aan uw levensritme en uw persoonlijke productiviteit naar een heel nieuw niveau tillen.',
    primary: 'Bekijk de apps',
    secondary: 'Wat is er nieuw',
    mascotAlt:
      'De mascotte van BitEon Studio: een jonge vrouw met lang donkerblauw haar en een limoengroene lok, in een donkerblauwe polo met een limoengroen B-logo, met haar handen in haar zakken.',
  },
  categories: {
    title: 'Vind uw app.',
    count: { one: '{n} app', other: '{n} apps' },
    items: {
      productivity: {
        name: 'Productiviteit',
        slogan: 'Focus op wat telt.',
        text: 'Beheer uw tijd en bereik uw doelen zonder gedoe.',
      },
      finance: {
        name: 'Financiën',
        slogan: 'Uw geld volledig onder controle.',
        text: 'Eenvoudig en overzichtelijk budgetteren, zonder ingewikkelde spreadsheets.',
      },
      utilities: {
        name: 'Hulpmiddelen',
        slogan: 'Stille helpers.',
        text: 'Elegante oplossingen voor snelle dagelijkse taken.',
      },
      creativity: {
        name: 'Creativiteit',
        slogan: 'Vrijheid om te creëren.',
        text: 'Tools voor ontwerpers, schrijvers en makers van digitale content.',
      },
    },
  },
  releases: {
    title: 'Nieuwe releases.',
    lead: 'Nieuwe creatieve oplossingen zijn er al.',
    available: 'Beschikbaar',
    comingSoon: 'Binnenkort',
  },
  apps: {
    typeMobile: 'Mobiel',
    typeWeb: 'Web',
    appStore: 'Download in de App Store',
    googlePlay: 'Ontdek het op Google Play',
    openApp: 'App openen',
    appLanguages: 'Talen van de app:',
    priceFree: 'Gratis',
    priceFrom: 'Vanaf {price}',
    perMonth: '{price} / maand',
    perYear: '{price} / jaar',
  },
  principles: {
    title: 'BitEon-principes.',
    lead: 'Wij maken software zoals we die zelf gemaakt zouden willen zien.',
    points: [
      {
        title: 'Eén doel: het perfecte resultaat',
        text: 'We proberen niet alles tegelijk te doen. Onze apps raken precies de kern, met maximale snelheid en eenvoud.',
      },
      {
        title: 'Klantgerichte aanpak',
        text: 'We ontwikkelen onze producten op basis van echte gebruikerservaring. Elke reactie vormt onze updates, zodat de software met elke release beter wordt.',
      },
      {
        title: 'Direct resultaat',
        text: 'Onze interfaces zijn zo ontworpen dat u uw taak met zo min mogelijk klikken afrondt. Geen leercurve: openen en direct resultaat.',
      },
      {
        title: 'Respect voor uw tijd',
        text: 'Geen ingewikkelde handleidingen, lange registraties of verwarrende stappen. Onze producten zijn vanaf de eerste seconde nuttig.',
      },
    ],
  },
  faq: {
    title: 'Vragen.',
    intro: 'BitEon-apps kopen, installeren en gebruiken.',
    items: [
      {
        q: 'Hoe krijg ik een BitEon-app?',
        a: 'Mobiele apps zijn beschikbaar in de App Store en Google Play. Webapps openen direct in uw browser; de link staat op de pagina van elke app.',
      },
      { q: 'Wat kosten de apps?', a: 'Op de pagina van elke app ziet u vóór aankoop de prijs en de abonnementen.' },
      {
        q: 'Welke apparaten worden ondersteund?',
        a: 'Dat hangt af van de app. De ondersteunde platforms staan op de pagina van de app.',
      },
      { q: 'In welke talen zijn de apps beschikbaar?', a: 'Op de pagina van elke app staan de beschikbare talen.' },
      { q: 'Hoe neem ik contact op met support?', a: 'Via de supportlink in de app of op de pagina van de app.' },
    ],
  },
  footer: {
    tagline: 'Uw ecosysteem voor productiviteit.',
    apps: 'Apps',
    allApps: 'Alle apps',
    mobileApps: 'Mobiele apps',
    webApps: 'Webapps',
    support: 'Support',
    helpFaq: 'Hulp en vragen',
    contact: 'Contact opnemen',
    company: 'Bedrijf',
    about: 'Over BitEon',
    legal: 'Juridisch',
    privacy: 'Privacybeleid',
    terms: 'Gebruiksvoorwaarden',
    rights: '© {year} BitEon Studio. Alle rechten voorbehouden.',
  },
  notFound: {
    title: 'Pagina niet gevonden.',
    lead: 'De pagina is mogelijk verplaatst of bestaat niet meer.',
    home: 'Terug naar home',
    explore: 'Bekijk de apps',
    searchPlaceholder: 'Apps zoeken',
    noResults: 'Niets gevonden. Probeer een ander woord.',
  },
};

export default nl;
