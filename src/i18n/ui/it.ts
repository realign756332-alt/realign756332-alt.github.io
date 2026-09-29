import type { Dict } from './en';

// In tutto il sito ci si rivolge all’utente con il “Lei”.
const it: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — L’ecosistema della sua produttività',
    homeDescription:
      'Scopra l’ecosistema di app mobili e web di BitEon Studio, pensato per ampliare le sue possibilità e portare la sua produttività a un nuovo livello.',
    homeImageAlt: 'Logo di BitEon Studio su sfondo verde lime',
    notFoundTitle: 'Pagina non trovata — BitEon Studio',
    notFoundDescription: 'La pagina potrebbe essere stata spostata o non esistere più.',
  },
  a11y: {
    skipToContent: 'Vai al contenuto',
    homeLink: 'BitEon Studio, home',
    mainNav: 'Menu principale',
    footerNav: 'Piè di pagina',
    openMenu: 'Menu',
    closeMenu: 'Chiudi',
  },
  nav: {
    apps: 'App',
    new: 'Novità',
    principles: 'Principi',
    faq: 'Domande',
    cta: 'Scopra le app',
  },
  language: {
    label: 'Lingua',
    change: 'Cambia lingua. Attuale: {lang}',
    hint: 'Questa pagina è disponibile anche in {language}.',
    hintAction: 'Cambia lingua',
    hintClose: 'Chiudi',
  },
  hero: {
    title: 'L’ecosistema della sua produttività.',
    lead: 'Scopra l’ecosistema di app di BitEon Studio, pensato per ampliare le sue possibilità. Servizi web innovativi e software mobile che si adattano al suo ritmo di vita e portano la sua produttività personale a un livello completamente nuovo.',
    primary: 'Scopra le app',
    secondary: 'Novità',
    mascotAlt:
      'La mascotte di BitEon Studio: una giovane donna con lunghi capelli blu notte e una ciocca verde lime, in polo blu notte con il logo B verde lime, le mani in tasca.',
  },
  categories: {
    title: 'Trovi la sua app.',
    count: { one: '{n} app', other: '{n} app' },
    items: {
      productivity: {
        name: 'Produttività',
        slogan: 'Concentrarsi su ciò che conta.',
        text: 'Gestisca il suo tempo e raggiunga i suoi obiettivi senza affanni.',
      },
      finance: {
        name: 'Finanza',
        slogan: 'Il suo denaro, sotto pieno controllo.',
        text: 'Una gestione del budget semplice e chiara, senza fogli di calcolo complicati.',
      },
      utilities: {
        name: 'Utilità',
        slogan: 'Aiutanti discreti.',
        text: 'Soluzioni eleganti per le piccole attività di ogni giorno.',
      },
      creativity: {
        name: 'Creatività',
        slogan: 'Libertà di creare.',
        text: 'Strumenti per designer, autori e creatori di contenuti digitali.',
      },
    },
  },
  releases: {
    title: 'Novità.',
    lead: 'Nuove soluzioni creative sono già qui.',
    available: 'Disponibile',
    comingSoon: 'In arrivo',
  },
  apps: {
    typeMobile: 'Mobile',
    typeWeb: 'Web',
    appStore: 'Scarica su App Store',
    googlePlay: 'Disponibile su Google Play',
    openApp: 'Apra l’app',
    appLanguages: 'Lingue dell’app:',
    priceFree: 'Gratis',
    priceFrom: 'Da {price}',
    perMonth: '{price} / mese',
    perYear: '{price} / anno',
  },
  principles: {
    title: 'I principi di BitEon.',
    lead: 'Sviluppiamo software come vorremmo che fosse sviluppato per noi.',
    points: [
      {
        title: 'Un obiettivo: il risultato perfetto',
        text: 'Non cerchiamo di fare tutto insieme. Le nostre app centrano l’obiettivo con la massima velocità e semplicità.',
      },
      {
        title: 'Approccio centrato sul cliente',
        text: 'Facciamo crescere i nostri prodotti in base all’esperienza reale degli utenti. Ogni feedback orienta gli aggiornamenti e rende il software migliore a ogni versione.',
      },
      {
        title: 'Risultati immediati',
        text: 'Progettiamo le interfacce perché Lei possa completare il suo compito con il minor numero di clic. Nessun apprendimento: apra l’app e ottenga subito il risultato.',
      },
      {
        title: 'Rispetto per il suo tempo',
        text: 'Niente istruzioni complicate, registrazioni lunghe o percorsi confusi. I nostri prodotti sono utili fin dal primo secondo.',
      },
    ],
  },
  faq: {
    title: 'Domande.',
    intro: 'Acquisto, installazione e utilizzo delle app BitEon.',
    items: [
      {
        q: 'Come posso ottenere un’app BitEon?',
        a: 'Le app mobili sono disponibili su App Store e Google Play. Le app web si aprono direttamente nel browser: il link è nella pagina di ogni app.',
      },
      {
        q: 'Quanto costano le app?',
        a: 'La pagina di ogni app mostra il prezzo e i piani disponibili prima dell’acquisto.',
      },
      {
        q: 'Quali dispositivi sono supportati?',
        a: 'Dipende dall’app. Le piattaforme supportate sono indicate nella pagina di ogni app.',
      },
      { q: 'In quali lingue sono disponibili le app?', a: 'Le lingue di ogni app sono indicate nella sua pagina.' },
      { q: 'Come posso contattare l’assistenza?', a: 'Tramite il link di assistenza nell’app o nella pagina dell’app.' },
    ],
  },
  footer: {
    tagline: 'L’ecosistema della sua produttività.',
    apps: 'App',
    allApps: 'Tutte le app',
    mobileApps: 'App mobili',
    webApps: 'App web',
    support: 'Assistenza',
    helpFaq: 'Aiuto e domande',
    contact: 'Contatti',
    company: 'Azienda',
    about: 'Chi è BitEon',
    legal: 'Note legali',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini di utilizzo',
    rights: '© {year} BitEon Studio. Tutti i diritti riservati.',
  },
  notFound: {
    title: 'Pagina non trovata.',
    lead: 'La pagina potrebbe essere stata spostata o non esistere più.',
    home: 'Torni alla home',
    explore: 'Scopra le app',
    searchPlaceholder: 'Cerca app',
    noResults: 'Nessun risultato. Provi con un’altra parola.',
  },
};

export default it;
