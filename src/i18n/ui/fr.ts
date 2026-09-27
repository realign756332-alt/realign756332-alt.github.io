import type { Dict } from './en';

const fr: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — Des applis mobiles et web qui marchent',
    homeDescription:
      'BitEon Studio crée des applis simples pour iPhone, Android et le web. Prix clairs, zéro pistage, sur l’App Store, Google Play ou dans votre navigateur.',
    homeImageAlt: 'Logo BitEon Studio sur fond vert citron',
    notFoundTitle: 'Page introuvable — BitEon Studio',
    notFoundDescription:
      'Cette page n’existe pas. Cherchez dans le catalogue d’applis BitEon Studio ou rejoignez une rubrique principale.',
    siteDescription:
      'BitEon Studio crée des applis mobiles et web ciblées. Chacune fait une chose et la fait bien, affiche son prix d’emblée et s’installe depuis l’App Store, Google Play ou le navigateur.',
  },
  a11y: {
    skipToContent: 'Aller au contenu',
    homeLink: 'BitEon Studio, accueil',
    mainNav: 'Menu principal',
    footerNav: 'Pied de page',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  nav: {
    apps: 'Applis',
    categories: 'Catégories',
    why: 'Pourquoi BitEon',
    faq: 'FAQ',
    cta: 'Voir les applis',
  },
  language: {
    label: 'Langue',
    change: 'Changer de langue. Langue actuelle : {lang}',
    hint: 'Cette page existe aussi en français.',
    hintAction: 'Lire en français',
    hintClose: 'Fermer',
  },
  hero: {
    title: 'Des applis qui marchent, tout simplement',
    lead: 'BitEon Studio crée des applis mobiles et web ciblées. Chacune fait une chose et la fait bien, affiche son prix d’emblée et ne vous encombre pas.',
    primary: 'Voir les applis',
    secondary: 'Comment acheter',
    mascotAlt:
      'La mascotte de BitEon Studio : une jeune femme aux longs cheveux bleu nuit avec une mèche vert citron, en polo bleu nuit orné d’un logo B vert citron, les mains dans les poches.',
  },
  categories: {
    title: 'Parcourir par catégorie',
    count: { one: '{n} appli', many: '{n} d’applis', other: '{n} applis' },
    items: {
      productivity: { name: 'Productivité', summary: 'Planifier, se concentrer, avancer.' },
      finance: { name: 'Finances', summary: 'Suivre son argent sans tableur.' },
      utilities: { name: 'Utilitaires', summary: 'Petits outils pour le quotidien.' },
      lifestyle: { name: 'Style de vie', summary: 'Habitudes, santé et routine.' },
      creativity: { name: 'Créativité', summary: 'Images, couleurs et idées.' },
    },
  },
  apps: {
    featuredTitle: 'Applis à la une',
    featuredLead: 'Choisissez une appli, voyez son prix, installez-la en un geste.',
    upcomingTitle: 'Bientôt disponibles',
    upcomingLead: 'Nos premières applis sont en préparation. Voici ce qu’elles feront.',
    example: 'Exemple',
    comingSoon: 'Bientôt',
    typeMobile: 'Mobile',
    typeWeb: 'Appli web',
    platformWeb: 'Web',
    appStore: 'Télécharger sur l’App Store',
    googlePlay: 'Disponible sur Google Play',
    openApp: 'Ouvrir l’appli',
    appLanguages: 'Langues de l’appli :',
    priceFree: 'Gratuit',
    priceFreemium: 'Gratuit + achats intégrés',
    priceFreemiumPro: 'Gratuit, Pro {price}',
    perMonth: '{price} / mois',
    perYear: '{price} / an',
  },
  why: {
    title: 'Pourquoi BitEon',
    lead: 'Un petit studio, des règles simples pour chaque appli.',
    points: [
      {
        title: 'Une seule tâche, bien faite',
        text: 'Chaque appli résout un problème précis. Pas de fonctions en pagaille, pas de labyrinthe de réglages.',
      },
      { title: 'Des prix clairs', text: 'Chaque appli affiche son prix avant l’achat.' },
      {
        title: 'Aucun pistage sur ce site',
        text: 'Ni traqueurs publicitaires ni bandeau cookies. La politique de confidentialité de chaque appli indique précisément quelles données elle utilise.',
      },
      {
        title: 'Faites par une vraie personne',
        text: 'Alex, le fondateur, développe chaque appli et lit chaque message d’assistance.',
      },
    ],
  },
  faq: {
    title: 'Achat, paiement et assistance',
    intro: 'Des réponses courtes aux questions qu’on se pose avant d’acheter.',
    items: [
      {
        q: 'Comment acheter une appli mobile ?',
        a: 'Les applis mobiles sont vendues sur l’App Store et Google Play. Apple et Google gèrent le paiement et le téléchargement selon leurs propres règles.',
      },
      {
        q: 'Comment payer une appli web ?',
        a: 'Les conditions de paiement de chaque appli web seront indiquées sur sa page.',
      },
      {
        q: 'Puis-je être remboursé ?',
        a: 'Pour les applis mobiles, les remboursements suivent les règles de l’App Store et de Google Play : faites la demande auprès d’Apple ou de Google. Les conditions de remboursement de chaque appli web seront indiquées sur sa page.',
      },
      {
        q: 'Comment contacter l’assistance ?',
        a: 'Via le lien d’assistance dans l’appli ou sur sa page sur ce site. Votre message arrive directement chez le développeur.',
      },
      {
        q: 'Sur quels appareils fonctionnent les applis ?',
        a: 'La page de chaque appli indique ses plateformes : iPhone, Android ou tout navigateur récent.',
      },
    ],
  },
  footer: {
    tagline: 'Des applis mobiles et web ciblées, conçues par un petit studio.',
    apps: 'Applis',
    categories: 'Catégories',
    compare: 'Comparatifs',
    allComparisons: 'Tous les comparatifs',
    tools: 'Outils',
    allTools: 'Tous les outils gratuits',
    faq: 'FAQ',
    buyingRefunds: 'Achat et remboursement',
    company: 'Studio',
    about: 'À propos',
    contact: 'Contact',
    privacy: 'Confidentialité',
    terms: 'Conditions d’utilisation',
    refundPolicy: 'Politique de remboursement',
  },
  notFound: {
    title: 'Cette page n’existe pas',
    lead: 'Le lien est peut-être ancien ou mal saisi. Cherchez une appli ci-dessous ou rejoignez une rubrique principale.',
    searchLabel: 'Rechercher une appli',
    searchPlaceholder: 'Nom de l’appli ou ce qu’elle fait',
    noResults: 'Aucune appli ne correspond à cette recherche.',
    sections: 'Rubriques principales',
    home: 'Accueil',
  },
};

export default fr;
