import type { Dict } from './en';

// Forma grzecznościowa: w tekstach zwracamy się do użytkownika „Państwo”.
// Na przyciskach — standardowe polecenia interfejsu (Pobierz, Otwórz, Zamknij).
const pl: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — ekosystem osobistej produktywności',
    homeDescription:
      'Ekosystem aplikacji mobilnych i webowych BitEon Studio stworzony, by poszerzać Państwa możliwości i wynieść produktywność na nowy poziom.',
    homeImageAlt: 'Logo BitEon Studio na limonkowym tle',
    notFoundTitle: 'Nie znaleziono strony — BitEon Studio',
    notFoundDescription: 'Strona mogła zostać przeniesiona lub już nie istnieje.',
  },
  a11y: {
    skipToContent: 'Przejdź do treści',
    homeLink: 'BitEon Studio, strona główna',
    mainNav: 'Menu główne',
    footerNav: 'Stopka',
    openMenu: 'Menu',
    closeMenu: 'Zamknij',
  },
  nav: {
    apps: 'Aplikacje',
    new: 'Nowości',
    principles: 'Zasady',
    faq: 'Pytania',
    cta: 'Katalog aplikacji',
  },
  language: {
    label: 'Język',
    change: 'Zmień język. Obecnie: {lang}',
    hint: 'Ta strona jest dostępna również w języku: {language}.',
    hintAction: 'Zmień język',
    hintClose: 'Zamknij',
  },
  hero: {
    title: 'Ekosystem osobistej produktywności.',
    lead: 'Ekosystem aplikacji BitEon Studio powstał, by poszerzać Państwa możliwości. Innowacyjne usługi webowe i oprogramowanie mobilne, które dopasowują się do Państwa rytmu życia i wynoszą osobistą produktywność na zupełnie nowy poziom.',
    primary: 'Katalog aplikacji',
    secondary: 'Co nowego',
    mascotAlt:
      'Maskotka BitEon Studio: młoda kobieta z długimi granatowymi włosami i limonkowym pasemkiem, w granatowej koszulce polo z limonkowym logo „B”, z rękami w kieszeniach.',
  },
  categories: {
    title: 'Aplikacja dopasowana do Państwa.',
    count: { one: '{n} aplikacja', few: '{n} aplikacje', many: '{n} aplikacji', other: '{n} aplikacji' },
    items: {
      productivity: {
        name: 'Produktywność',
        slogan: 'Skupienie na tym, co ważne.',
        text: 'Zarządzanie czasem i realizacja celów bez zbędnego zamieszania.',
      },
      finance: {
        name: 'Finanse',
        slogan: 'Pieniądze pod pełną kontrolą.',
        text: 'Prosta i przejrzysta kontrola budżetu bez skomplikowanych arkuszy.',
      },
      utilities: {
        name: 'Narzędzia',
        slogan: 'Dyskretni pomocnicy.',
        text: 'Eleganckie rozwiązania do szybkich, codziennych zadań.',
      },
      creativity: {
        name: 'Kreatywność',
        slogan: 'Swoboda tworzenia.',
        text: 'Narzędzia dla projektantów, autorów i twórców treści cyfrowych.',
      },
    },
  },
  releases: {
    title: 'Nowości.',
    lead: 'Nowe kreatywne rozwiązania są już dostępne.',
    available: 'Dostępna',
    comingSoon: 'Wkrótce',
  },
  apps: {
    typeMobile: 'Mobilna',
    typeWeb: 'Webowa',
    appStore: 'Pobierz z App Store',
    googlePlay: 'Pobierz z Google Play',
    openApp: 'Otwórz aplikację',
    appLanguages: 'Języki aplikacji:',
    priceFree: 'Bezpłatna',
    priceFrom: 'Od {price}',
    perMonth: '{price} / mies.',
    perYear: '{price} / rok',
  },
  principles: {
    title: 'Zasady BitEon.',
    lead: 'Tworzymy oprogramowanie tak, jak chcielibyśmy, by tworzono je dla nas.',
    points: [
      {
        title: 'Jeden cel: idealny rezultat',
        text: 'Nie próbujemy robić wszystkiego naraz. Nasze aplikacje trafiają dokładnie w cel, zapewniając maksymalną szybkość i prostotę.',
      },
      {
        title: 'Klient w centrum uwagi',
        text: 'Rozwijamy produkty w oparciu o prawdziwe doświadczenia użytkowników. Każda opinia wpływa na aktualizacje, dzięki czemu oprogramowanie jest lepsze z każdą wersją.',
      },
      {
        title: 'Natychmiastowy rezultat',
        text: 'Projektujemy interfejsy tak, by mogli Państwo wykonać zadanie przy minimalnej liczbie kliknięć. Bez nauki — wystarczy otworzyć i od razu mieć wynik.',
      },
      {
        title: 'Szacunek dla Państwa czasu',
        text: 'Żadnych skomplikowanych instrukcji, długich rejestracji ani zagmatwanych procesów. Nasze produkty są użyteczne od pierwszej sekundy.',
      },
    ],
  },
  faq: {
    title: 'Pytania.',
    intro: 'Zakup, instalacja i korzystanie z aplikacji BitEon.',
    items: [
      {
        q: 'Jak zdobyć aplikację BitEon?',
        a: 'Aplikacje mobilne są dostępne w App Store i Google Play. Aplikacje webowe otwierają się bezpośrednio w przeglądarce — link znajduje się na stronie każdej aplikacji.',
      },
      {
        q: 'Ile kosztują aplikacje?',
        a: 'Cena i dostępne plany są podane na stronie każdej aplikacji jeszcze przed zakupem.',
      },
      {
        q: 'Jakie urządzenia są obsługiwane?',
        a: 'To zależy od aplikacji. Obsługiwane platformy są podane na jej stronie.',
      },
      { q: 'W jakich językach działają aplikacje?', a: 'Języki każdej aplikacji są podane na jej stronie.' },
      {
        q: 'Jak skontaktować się z pomocą techniczną?',
        a: 'Przez link do pomocy w aplikacji lub na jej stronie.',
      },
    ],
  },
  footer: {
    tagline: 'Ekosystem osobistej produktywności.',
    apps: 'Aplikacje',
    allApps: 'Wszystkie aplikacje',
    mobileApps: 'Mobilne',
    webApps: 'Webowe',
    support: 'Pomoc',
    helpFaq: 'Pomoc i pytania',
    contact: 'Kontakt',
    company: 'Firma',
    about: 'O BitEon',
    legal: 'Informacje prawne',
    privacy: 'Polityka prywatności',
    terms: 'Warunki korzystania',
    rights: '© {year} BitEon Studio. Wszelkie prawa zastrzeżone.',
  },
  notFound: {
    title: 'Nie znaleziono strony.',
    lead: 'Strona mogła zostać przeniesiona lub już nie istnieje.',
    home: 'Strona główna',
    explore: 'Katalog aplikacji',
    searchPlaceholder: 'Szukaj aplikacji',
    noResults: 'Nic nie znaleziono. Proszę spróbować innego słowa.',
  },
};

export default pl;
