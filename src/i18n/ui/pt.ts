import type { Dict } from './en';

// Português do Brasil (hreflang "pt" — vale para todos os falantes de português).
const pt: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — Apps mobile e web que simplesmente funcionam',
    homeDescription:
      'O BitEon Studio cria apps simples para iPhone, Android e web. Preços claros, sem rastreamento: pela App Store, Google Play ou no navegador.',
    homeImageAlt: 'Logo do BitEon Studio em fundo verde-limão',
    notFoundTitle: 'Página não encontrada — BitEon Studio',
    notFoundDescription: 'Esta página não existe. Pesquise no catálogo de apps do BitEon Studio ou vá para uma das seções principais.',
    siteDescription:
      'O BitEon Studio cria apps mobile e web focados. Cada um faz uma coisa bem feita, mostra o preço logo de cara e é instalado pela App Store, Google Play ou pelo navegador.',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    homeLink: 'BitEon Studio, página inicial',
    mainNav: 'Menu principal',
    footerNav: 'Rodapé',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  nav: {
    apps: 'Apps',
    categories: 'Categorias',
    why: 'Por que BitEon',
    faq: 'Dúvidas',
    cta: 'Ver apps',
  },
  language: {
    label: 'Idioma',
    change: 'Mudar idioma. Atual: {lang}',
    hint: 'Esta página também está disponível em português.',
    hintAction: 'Ler em português',
    hintClose: 'Fechar',
  },
  hero: {
    title: 'Apps que simplesmente funcionam',
    lead: 'O BitEon Studio cria apps mobile e web focados. Cada um faz uma coisa só e faz bem, mostra o preço logo de cara e não atrapalha a sua vida.',
    primary: 'Ver apps',
    secondary: 'Como comprar',
    mascotAlt:
      'A mascote do BitEon Studio: uma jovem de cabelo longo azul-marinho com uma mecha verde-limão, de camisa polo azul-marinho com o logo B verde-limão, com as mãos nos bolsos.',
  },
  categories: {
    title: 'Navegue por categoria',
    count: { one: '{n} app', many: '{n} de apps', other: '{n} apps' },
    items: {
      productivity: { name: 'Produtividade', summary: 'Planeje, foque e conclua.' },
      finance: { name: 'Finanças', summary: 'Controle o dinheiro sem planilhas.' },
      utilities: { name: 'Utilitários', summary: 'Pequenas ferramentas para o dia a dia.' },
      lifestyle: { name: 'Estilo de vida', summary: 'Hábitos, saúde e rotina.' },
      creativity: { name: 'Criatividade', summary: 'Crie imagens, cores e ideias.' },
    },
  },
  apps: {
    featuredTitle: 'Apps em destaque',
    featuredLead: 'Escolha um app, veja o preço e instale em um passo.',
    upcomingTitle: 'Em breve',
    upcomingLead: 'Nossos primeiros apps estão a caminho. Veja o que eles vão fazer.',
    example: 'Exemplo',
    comingSoon: 'Em breve',
    typeMobile: 'Mobile',
    typeWeb: 'App web',
    platformWeb: 'Web',
    appStore: 'Baixar na App Store',
    googlePlay: 'Disponível no Google Play',
    openApp: 'Abrir app',
    appLanguages: 'Idiomas do app:',
    priceFree: 'Grátis',
    priceFreemium: 'Grátis + compras no app',
    priceFreemiumPro: 'Grátis, Pro {price}',
    perMonth: '{price} / mês',
    perYear: '{price} / ano',
  },
  why: {
    title: 'Por que BitEon',
    lead: 'Um estúdio pequeno com regras simples para cada app que lança.',
    points: [
      {
        title: 'Uma tarefa, bem feita',
        text: 'Cada app resolve um problema claro. Sem pilhas de recursos, sem labirinto de configurações.',
      },
      { title: 'Preços claros', text: 'Todo app mostra o preço antes da compra.' },
      {
        title: 'Sem rastreamento neste site',
        text: 'Sem rastreadores de anúncios e sem banners de cookies. A política de privacidade de cada app explica exatamente quais dados ele usa.',
      },
      {
        title: 'Feito por uma pessoa de verdade',
        text: 'Alex, o fundador, desenvolve cada app e lê cada mensagem de suporte.',
      },
    ],
  },
  faq: {
    title: 'Compra, pagamento e suporte',
    intro: 'Respostas curtas para o que as pessoas perguntam antes de comprar.',
    items: [
      {
        q: 'Como compro um app mobile?',
        a: 'Os apps mobile são vendidos na App Store e no Google Play. A Apple e o Google cuidam do pagamento e do download de acordo com as regras deles.',
      },
      {
        q: 'Como pago por um app web?',
        a: 'As condições de pagamento de cada app web vão aparecer na página do próprio app.',
      },
      {
        q: 'Posso pedir reembolso?',
        a: 'Reembolsos de apps mobile seguem as regras da App Store e do Google Play: peça diretamente à Apple ou ao Google. As condições de reembolso de cada app web vão aparecer na página do app.',
      },
      {
        q: 'Como falo com o suporte?',
        a: 'Use o link de suporte dentro do app ou na página do app neste site. Sua mensagem vai direto para o desenvolvedor.',
      },
      {
        q: 'Em quais aparelhos os apps funcionam?',
        a: 'A página de cada app mostra as plataformas: iPhone, Android ou qualquer navegador atualizado.',
      },
    ],
  },
  footer: {
    tagline: 'Apps mobile e web focados, feitos por um pequeno estúdio.',
    apps: 'Apps',
    categories: 'Categorias',
    compare: 'Comparações',
    allComparisons: 'Todas as comparações',
    tools: 'Ferramentas',
    allTools: 'Todas as ferramentas grátis',
    faq: 'Dúvidas',
    buyingRefunds: 'Compras e reembolsos',
    company: 'Estúdio',
    about: 'Sobre',
    contact: 'Contato',
    privacy: 'Privacidade',
    terms: 'Termos de uso',
    refundPolicy: 'Política de reembolso',
  },
  notFound: {
    title: 'Esta página não existe',
    lead: 'O link pode estar desatualizado ou digitado errado. Procure um app abaixo ou vá para uma seção principal.',
    searchLabel: 'Buscar apps',
    searchPlaceholder: 'Nome do app ou o que ele faz',
    noResults: 'Nenhum app corresponde à busca.',
    sections: 'Seções principais',
    home: 'Início',
  },
};

export default pt;
