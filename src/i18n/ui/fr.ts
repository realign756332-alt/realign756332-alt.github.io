import type { Dict } from './en';

// Avant « ? », « : » et « ! » — espace insécable ( ), selon la typographie française.
const fr: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — L’écosystème de votre productivité',
    homeDescription:
      'Découvrez l’écosystème d’applis mobiles et web de BitEon Studio, conçu pour élargir vos possibilités et porter votre productivité à un autre niveau.',
    homeImageAlt: 'Logo BitEon Studio sur fond vert citron',
    notFoundTitle: 'Page introuvable — BitEon Studio',
    notFoundDescription: 'Cette page a peut-être été déplacée ou n’existe plus.',
  },
  a11y: {
    skipToContent: 'Aller au contenu',
    homeLink: 'BitEon Studio, accueil',
    mainNav: 'Menu principal',
    footerNav: 'Pied de page',
    openMenu: 'Menu',
    closeMenu: 'Fermer',
  },
  nav: {
    apps: 'Applis',
    new: 'Nouveautés',
    principles: 'Principes',
    faq: 'Questions',
    cta: 'Découvrir les applis',
  },
  language: {
    label: 'Langue',
    change: 'Changer de langue. Langue actuelle : {lang}',
    hint: 'Cette page est aussi disponible en {language}.',
    hintAction: 'Changer',
    hintClose: 'Fermer',
  },
  hero: {
    title: 'L’écosystème de votre productivité.',
    lead: 'Découvrez l’écosystème d’applis BitEon Studio, conçu pour élargir vos possibilités. Des services web innovants et des logiciels mobiles qui s’adaptent à votre rythme de vie et portent votre productivité personnelle à un tout autre niveau.',
    primary: 'Découvrir les applis',
    secondary: 'Quoi de neuf',
    mascotAlt:
      'La mascotte de BitEon Studio : une jeune femme aux longs cheveux bleu nuit avec une mèche vert citron, en polo bleu nuit orné d’un logo B vert citron, les mains dans les poches.',
  },
  categories: {
    title: 'Trouvez votre appli.',
    count: { one: '{n} appli', many: '{n} d’applis', other: '{n} applis' },
    items: {
      productivity: {
        name: 'Productivité',
        slogan: 'L’essentiel, en priorité.',
        text: 'Gérez votre temps et atteignez vos objectifs sans vous disperser.',
      },
      finance: {
        name: 'Finances',
        slogan: 'Votre argent, parfaitement maîtrisé.',
        text: 'Un suivi de budget simple et clair, sans tableurs compliqués.',
      },
      utilities: {
        name: 'Utilitaires',
        slogan: 'Des assistants discrets.',
        text: 'Des solutions élégantes pour les petites tâches du quotidien.',
      },
      creativity: {
        name: 'Créativité',
        slogan: 'La liberté de créer.',
        text: 'Des outils pour les designers, les auteurs et les créateurs de contenu numérique.',
      },
    },
  },
  releases: {
    title: 'Nouveautés.',
    lead: 'De nouvelles solutions créatives sont déjà là.',
    available: 'Disponible',
    comingSoon: 'Bientôt',
  },
  apps: {
    typeMobile: 'Mobile',
    typeWeb: 'Web',
    appStore: 'Télécharger dans l’App Store',
    googlePlay: 'Disponible sur Google Play',
    openApp: 'Ouvrir l’appli',
    appLanguages: 'Langues de l’appli :',
    priceFree: 'Gratuit',
    priceFrom: 'À partir de {price}',
    perMonth: '{price} / mois',
    perYear: '{price} / an',
  },
  principles: {
    title: 'Les principes BitEon.',
    lead: 'Nous concevons nos logiciels comme nous aimerions qu’on les conçoive pour nous.',
    points: [
      {
        title: 'Un objectif : le résultat parfait',
        text: 'Nous ne cherchons pas à tout faire à la fois. Nos applis visent juste, pour un maximum de rapidité et de simplicité.',
      },
      {
        title: 'L’utilisateur au centre',
        text: 'Nous faisons évoluer nos produits à partir de l’expérience réelle des utilisateurs. Chaque retour nourrit nos mises à jour et rend le logiciel meilleur à chaque version.',
      },
      {
        title: 'Des résultats immédiats',
        text: 'Nos interfaces sont pensées pour que vous accomplissiez votre tâche en un minimum de clics. Aucun apprentissage : vous ouvrez l’appli et obtenez le résultat aussitôt.',
      },
      {
        title: 'Le respect de votre temps',
        text: 'Pas d’instructions compliquées, d’inscriptions interminables ni de parcours confus. Nos produits sont utiles dès la première seconde.',
      },
    ],
  },
  faq: {
    title: 'Questions.',
    intro: 'Acheter, installer et utiliser les applis BitEon.',
    items: [
      {
        q: 'Comment obtenir une appli BitEon ?',
        a: 'Les applis mobiles sont disponibles sur l’App Store et Google Play. Les applis web s’ouvrent directement dans votre navigateur : le lien figure sur la page de chaque appli.',
      },
      {
        q: 'Combien coûtent les applis ?',
        a: 'La page de chaque appli indique son prix et ses formules avant l’achat.',
      },
      {
        q: 'Quels appareils sont compatibles ?',
        a: 'Cela dépend de l’appli. Les plateformes compatibles sont indiquées sur sa page.',
      },
      {
        q: 'Dans quelles langues les applis sont-elles disponibles ?',
        a: 'La page de chaque appli indique les langues disponibles.',
      },
      {
        q: 'Comment contacter l’assistance ?',
        a: 'Via le lien d’assistance dans l’appli ou sur sa page.',
      },
    ],
  },
  footer: {
    tagline: 'L’écosystème de votre productivité.',
    apps: 'Applis',
    allApps: 'Toutes les applis',
    mobileApps: 'Applis mobiles',
    webApps: 'Applis web',
    support: 'Assistance',
    helpFaq: 'Aide et FAQ',
    contact: 'Nous contacter',
    company: 'Entreprise',
    about: 'À propos de BitEon',
    legal: 'Informations légales',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    rights: '© {year} BitEon Studio. Tous droits réservés.',
  },
  notFound: {
    title: 'Page introuvable.',
    lead: 'Cette page a peut-être été déplacée ou n’existe plus.',
    home: 'Retour à l’accueil',
    explore: 'Découvrir les applis',
    searchPlaceholder: 'Rechercher une appli',
    noResults: 'Aucun résultat. Essayez un autre mot.',
  },
};

export default fr;
