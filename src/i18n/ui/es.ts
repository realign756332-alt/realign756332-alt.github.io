import type { Dict } from './en';

// Trato de usted en todo el sitio.
const es: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — El ecosistema de su productividad',
    homeDescription:
      'Descubra el ecosistema de apps móviles y web de BitEon Studio, creado para ampliar sus posibilidades y llevar su productividad a un nuevo nivel.',
    homeImageAlt: 'Logotipo de BitEon Studio sobre fondo verde lima',
    notFoundTitle: 'Página no encontrada — BitEon Studio',
    notFoundDescription: 'Es posible que la página se haya movido o ya no exista.',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    homeLink: 'BitEon Studio, inicio',
    mainNav: 'Menú principal',
    footerNav: 'Pie de página',
    openMenu: 'Menú',
    closeMenu: 'Cerrar',
  },
  nav: {
    apps: 'Apps',
    new: 'Novedades',
    principles: 'Principios',
    faq: 'Preguntas',
    cta: 'Explorar apps',
  },
  language: {
    label: 'Idioma',
    change: 'Cambiar idioma. Actual: {lang}',
    hint: 'Esta página también está disponible en {language}.',
    hintAction: 'Cambiar',
    hintClose: 'Cerrar',
  },
  hero: {
    title: 'El ecosistema de su productividad.',
    lead: 'Descubra el ecosistema de apps de BitEon Studio, creado para ampliar sus posibilidades. Servicios web innovadores y software móvil que se adaptan a su ritmo de vida y llevan su productividad personal a un nivel completamente nuevo.',
    primary: 'Explorar apps',
    secondary: 'Novedades',
    mascotAlt:
      'La mascota de BitEon Studio: una mujer joven de pelo largo azul marino con un mechón verde lima, con un polo azul marino con el logo B en verde lima y las manos en los bolsillos.',
  },
  categories: {
    title: 'Encuentre su app.',
    count: { one: '{n} app', other: '{n} apps' },
    items: {
      productivity: {
        name: 'Productividad',
        slogan: 'Céntrese en lo importante.',
        text: 'Gestione su tiempo y alcance sus objetivos sin complicaciones.',
      },
      finance: {
        name: 'Finanzas',
        slogan: 'Su dinero, bajo control total.',
        text: 'Un control del presupuesto simple y claro, sin hojas de cálculo complicadas.',
      },
      utilities: {
        name: 'Utilidades',
        slogan: 'Ayudantes discretos.',
        text: 'Soluciones elegantes para las tareas rápidas del día a día.',
      },
      creativity: {
        name: 'Creatividad',
        slogan: 'Libertad para crear.',
        text: 'Herramientas para diseñadores, escritores y creadores de contenido digital.',
      },
    },
  },
  releases: {
    title: 'Novedades.',
    lead: 'Las nuevas soluciones creativas ya están aquí.',
    available: 'Disponible',
    comingSoon: 'Próximamente',
  },
  apps: {
    typeMobile: 'Móvil',
    typeWeb: 'Web',
    appStore: 'Descargar en el App Store',
    googlePlay: 'Disponible en Google Play',
    openApp: 'Abrir app',
    appLanguages: 'Idiomas de la app:',
    priceFree: 'Gratis',
    priceFrom: 'Desde {price}',
    perMonth: '{price} / mes',
    perYear: '{price} / año',
  },
  principles: {
    title: 'Principios de BitEon.',
    lead: 'Creamos software como nos gustaría que lo crearan para nosotros.',
    points: [
      {
        title: 'Un objetivo: el resultado perfecto',
        text: 'No intentamos hacerlo todo a la vez. Nuestras apps dan justo en el blanco y ofrecen la máxima rapidez y sencillez.',
      },
      {
        title: 'Enfoque centrado en el cliente',
        text: 'Desarrollamos nuestros productos a partir de la experiencia real de los usuarios. Cada comentario influye en nuestras actualizaciones y mejora el software con cada versión.',
      },
      {
        title: 'Resultados inmediatos',
        text: 'Diseñamos nuestras interfaces para que usted resuelva su tarea con el menor número de clics. Sin curva de aprendizaje: ábrala y obtenga resultados al instante.',
      },
      {
        title: 'Respeto por su tiempo',
        text: 'Sin instrucciones complicadas, registros largos ni procesos confusos. Nuestros productos son útiles desde el primer segundo.',
      },
    ],
  },
  faq: {
    title: 'Preguntas.',
    intro: 'Compra, instalación y uso de las apps de BitEon.',
    items: [
      {
        q: '¿Cómo consigo una app de BitEon?',
        a: 'Las apps móviles están disponibles en el App Store y Google Play. Las apps web se abren directamente en su navegador; encontrará el enlace en la página de cada app.',
      },
      { q: '¿Cuánto cuestan las apps?', a: 'La página de cada app muestra su precio y sus planes antes de la compra.' },
      {
        q: '¿Qué dispositivos son compatibles?',
        a: 'Depende de la app. Las plataformas compatibles figuran en la página de cada app.',
      },
      { q: '¿En qué idiomas están disponibles las apps?', a: 'La página de cada app indica los idiomas disponibles.' },
      { q: '¿Cómo contacto con el soporte?', a: 'A través del enlace de soporte dentro de la app o en su página.' },
    ],
  },
  footer: {
    tagline: 'El ecosistema de su productividad.',
    apps: 'Apps',
    allApps: 'Todas las apps',
    mobileApps: 'Apps móviles',
    webApps: 'Apps web',
    support: 'Soporte',
    helpFaq: 'Ayuda y preguntas',
    contact: 'Contacto',
    company: 'Empresa',
    about: 'Acerca de BitEon',
    legal: 'Legal',
    privacy: 'Política de privacidad',
    terms: 'Condiciones de uso',
    rights: '© {year} BitEon Studio. Todos los derechos reservados.',
  },
  notFound: {
    title: 'Página no encontrada.',
    lead: 'Es posible que la página se haya movido o ya no exista.',
    home: 'Volver al inicio',
    explore: 'Explorar apps',
    searchPlaceholder: 'Buscar apps',
    noResults: 'No se encontró nada. Pruebe con otra palabra.',
  },
};

export default es;
