import type { Dict } from './en';

const pl: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — proste aplikacje mobilne i webowe',
    homeDescription:
      'BitEon Studio tworzy proste aplikacje na iPhone’a, Androida i przeglądarkę. Jasne ceny, zero śledzenia. Z App Store, Google Play lub w przeglądarce.',
    homeImageAlt: 'Logo BitEon Studio na limonkowym tle',
    notFoundTitle: 'Nie znaleziono strony — BitEon Studio',
    notFoundDescription: 'Ta strona nie istnieje. Przeszukaj katalog aplikacji BitEon Studio albo przejdź do jednej z głównych sekcji.',
    siteDescription:
      'BitEon Studio tworzy konkretne aplikacje mobilne i webowe. Każda dobrze robi jedną rzecz, od razu pokazuje cenę i instaluje się z App Store, Google Play albo działa w przeglądarce.',
  },
  a11y: {
    skipToContent: 'Przejdź do treści',
    homeLink: 'BitEon Studio, strona główna',
    mainNav: 'Menu główne',
    footerNav: 'Stopka',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
  },
  nav: {
    apps: 'Aplikacje',
    categories: 'Kategorie',
    why: 'Dlaczego BitEon',
    faq: 'Pytania',
    cta: 'Zobacz aplikacje',
  },
  language: {
    label: 'Język',
    change: 'Zmień język. Obecnie: {lang}',
    hint: 'Ta strona jest dostępna również po polsku.',
    hintAction: 'Czytaj po polsku',
    hintClose: 'Zamknij',
  },
  hero: {
    title: 'Aplikacje, które po prostu działają',
    lead: 'BitEon Studio tworzy konkretne aplikacje mobilne i webowe. Każda dobrze robi jedną rzecz, od razu pokazuje cenę i nie zawraca głowy.',
    primary: 'Zobacz aplikacje',
    secondary: 'Jak kupić',
    mascotAlt:
      'Maskotka BitEon Studio: młoda kobieta z długimi granatowymi włosami i limonkowym pasemkiem, w granatowej koszulce polo z limonkowym logo „B”, z rękami w kieszeniach.',
  },
  categories: {
    title: 'Przeglądaj według kategorii',
    count: { one: '{n} aplikacja', few: '{n} aplikacje', many: '{n} aplikacji', other: '{n} aplikacji' },
    items: {
      productivity: { name: 'Produktywność', summary: 'Planuj, skup się i kończ zadania.' },
      finance: { name: 'Finanse', summary: 'Pieniądze pod kontrolą, bez arkuszy.' },
      utilities: { name: 'Narzędzia', summary: 'Małe narzędzia do codziennych spraw.' },
      lifestyle: { name: 'Styl życia', summary: 'Nawyki, zdrowie i codzienny rytm.' },
      creativity: { name: 'Kreatywność', summary: 'Obrazy, kolory i pomysły.' },
    },
  },
  apps: {
    featuredTitle: 'Polecane aplikacje',
    featuredLead: 'Wybierz aplikację, sprawdź cenę i zainstaluj ją w jednym kroku.',
    upcomingTitle: 'Już wkrótce',
    upcomingLead: 'Pracujemy nad pierwszymi aplikacjami. Oto, co będą robić.',
    example: 'Przykład',
    comingSoon: 'Wkrótce',
    typeMobile: 'Mobilna',
    typeWeb: 'Aplikacja webowa',
    platformWeb: 'Przeglądarka',
    appStore: 'Pobierz z App Store',
    googlePlay: 'Pobierz z Google Play',
    openApp: 'Otwórz aplikację',
    appLanguages: 'Języki aplikacji:',
    priceFree: 'Za darmo',
    priceFreemium: 'Za darmo + zakupy w aplikacji',
    priceFreemiumPro: 'Za darmo, Pro {price}',
    perMonth: '{price} / mies.',
    perYear: '{price} / rok',
  },
  why: {
    title: 'Dlaczego BitEon',
    lead: 'Małe studio z prostymi zasadami dla każdej aplikacji.',
    points: [
      {
        title: 'Jedno zadanie, dobrze zrobione',
        text: 'Każda aplikacja rozwiązuje jeden konkretny problem. Bez stosu funkcji i labiryntu ustawień.',
      },
      { title: 'Jasne ceny', text: 'Każda aplikacja pokazuje cenę, zanim cokolwiek kupisz.' },
      {
        title: 'Zero śledzenia na tej stronie',
        text: 'Żadnych trackerów reklamowych ani banerów cookie. Polityka prywatności każdej aplikacji dokładnie opisuje, z jakich danych korzysta.',
      },
      {
        title: 'Tworzy je prawdziwy człowiek',
        text: 'Alex, założyciel studia, sam tworzy każdą aplikację i czyta każdą wiadomość do supportu.',
      },
    ],
  },
  faq: {
    title: 'Zakup, płatność i pomoc',
    intro: 'Krótkie odpowiedzi na pytania, które pojawiają się przed zakupem.',
    items: [
      {
        q: 'Jak kupić aplikację mobilną?',
        a: 'Aplikacje mobilne są dostępne w App Store i Google Play. Płatności i pobieraniem zajmują się Apple i Google według własnych zasad.',
      },
      {
        q: 'Jak zapłacić za aplikację webową?',
        a: 'Warunki płatności każdej aplikacji webowej znajdą się na jej stronie.',
      },
      {
        q: 'Czy mogę dostać zwrot pieniędzy?',
        a: 'Zwroty za aplikacje mobilne działają według zasad App Store i Google Play: zgłoś je bezpośrednio do Apple lub Google. Warunki zwrotu każdej aplikacji webowej znajdą się na jej stronie.',
      },
      {
        q: 'Jak skontaktować się z pomocą?',
        a: 'Skorzystaj z linku do pomocy w aplikacji albo na jej stronie w tym serwisie. Wiadomość trafi prosto do twórcy.',
      },
      {
        q: 'Na jakich urządzeniach działają aplikacje?',
        a: 'Na stronie każdej aplikacji podane są platformy: iPhone, Android albo dowolna nowoczesna przeglądarka.',
      },
    ],
  },
  footer: {
    tagline: 'Konkretne aplikacje mobilne i webowe od małego studia.',
    apps: 'Aplikacje',
    categories: 'Kategorie',
    tools: 'Narzędzia',
    allTools: 'Wszystkie darmowe narzędzia',
    faq: 'Pytania',
    buyingRefunds: 'Zakupy i zwroty',
    company: 'Studio',
    about: 'O nas',
    contact: 'Kontakt',
    privacy: 'Prywatność',
    terms: 'Regulamin',
    refundPolicy: 'Zasady zwrotów',
  },
  notFound: {
    title: 'Ta strona nie istnieje',
    lead: 'Link może być nieaktualny albo zawierać literówkę. Znajdź aplikację poniżej lub przejdź do głównej sekcji.',
    searchLabel: 'Szukaj aplikacji',
    searchPlaceholder: 'Nazwa aplikacji lub co robi',
    noResults: 'Żadna aplikacja nie pasuje do wyszukiwania.',
    sections: 'Główne sekcje',
    home: 'Strona główna',
  },
};

export default pl;
