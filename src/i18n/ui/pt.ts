import type { Dict } from './en';

// Português do Brasil, tratamento cordial em todo o site.
const pt: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — O ecossistema da sua produtividade',
    homeDescription:
      'Descubra o ecossistema de apps móveis e web da BitEon Studio, criado para ampliar suas possibilidades e levar sua produtividade a um novo nível.',
    homeImageAlt: 'Logo do BitEon Studio em fundo verde-limão',
    notFoundTitle: 'Página não encontrada — BitEon Studio',
    notFoundDescription: 'A página pode ter sido movida ou não existe mais.',
  },
  a11y: {
    skipToContent: 'Pular para o conteúdo',
    homeLink: 'BitEon Studio, página inicial',
    mainNav: 'Menu principal',
    footerNav: 'Rodapé',
    openMenu: 'Menu',
    closeMenu: 'Fechar',
  },
  nav: {
    apps: 'Apps',
    new: 'Novidades',
    principles: 'Princípios',
    faq: 'Perguntas',
    cta: 'Explorar apps',
  },
  language: {
    label: 'Idioma',
    change: 'Mudar idioma. Atual: {lang}',
    hint: 'Esta página também está disponível em {language}.',
    hintAction: 'Mudar',
    hintClose: 'Fechar',
  },
  hero: {
    title: 'O ecossistema da sua produtividade.',
    lead: 'Descubra o ecossistema de apps da BitEon Studio, criado para ampliar suas possibilidades. Serviços web inovadores e software móvel que se adaptam ao seu ritmo de vida e levam sua produtividade pessoal a um nível totalmente novo.',
    primary: 'Explorar apps',
    secondary: 'Novidades',
    mascotAlt:
      'A mascote do BitEon Studio: uma jovem de cabelo longo azul-marinho com uma mecha verde-limão, de camisa polo azul-marinho com o logo B verde-limão, com as mãos nos bolsos.',
  },
  categories: {
    title: 'Encontre o seu app.',
    count: { one: '{n} app', other: '{n} apps' },
    items: {
      productivity: {
        name: 'Produtividade',
        slogan: 'Foco no que importa.',
        text: 'Gerencie seu tempo e alcance suas metas sem complicação.',
      },
      finance: {
        name: 'Finanças',
        slogan: 'Seu dinheiro sob controle total.',
        text: 'Controle de orçamento simples e claro, sem planilhas complicadas.',
      },
      utilities: {
        name: 'Utilitários',
        slogan: 'Ajudantes discretos.',
        text: 'Soluções elegantes para tarefas rápidas do dia a dia.',
      },
      creativity: {
        name: 'Criatividade',
        slogan: 'Liberdade para criar.',
        text: 'Ferramentas para designers, escritores e criadores de conteúdo digital.',
      },
    },
  },
  releases: {
    title: 'Novos lançamentos.',
    lead: 'Novas soluções criativas já chegaram.',
    available: 'Disponível',
    comingSoon: 'Em breve',
  },
  apps: {
    typeMobile: 'Móvel',
    typeWeb: 'Web',
    appStore: 'Baixar na App Store',
    googlePlay: 'Disponível no Google Play',
    openApp: 'Abrir app',
    appLanguages: 'Idiomas do app:',
    priceFree: 'Grátis',
    priceFrom: 'A partir de {price}',
    perMonth: '{price} / mês',
    perYear: '{price} / ano',
  },
  principles: {
    title: 'Princípios da BitEon.',
    lead: 'Criamos software do jeito que gostaríamos que fosse criado para nós.',
    points: [
      {
        title: 'Um objetivo: o resultado perfeito',
        text: 'Não tentamos fazer tudo ao mesmo tempo. Nossos apps acertam em cheio, com o máximo de velocidade e simplicidade.',
      },
      {
        title: 'Foco no cliente',
        text: 'Desenvolvemos nossos produtos com base na experiência real dos usuários. Cada feedback orienta nossas atualizações e deixa o software melhor a cada versão.',
      },
      {
        title: 'Resultado imediato',
        text: 'Nossas interfaces são pensadas para que você conclua sua tarefa com o mínimo de cliques. Sem curva de aprendizado: abra e tenha o resultado na hora.',
      },
      {
        title: 'Respeito pelo seu tempo',
        text: 'Nada de instruções complicadas, cadastros longos ou fluxos confusos. Nossos produtos são úteis desde o primeiro segundo.',
      },
    ],
  },
  faq: {
    title: 'Perguntas.',
    intro: 'Compra, instalação e uso dos apps da BitEon.',
    items: [
      {
        q: 'Como obtenho um app da BitEon?',
        a: 'Os apps móveis estão disponíveis na App Store e no Google Play. Os apps web abrem direto no navegador — o link está na página de cada app.',
      },
      { q: 'Quanto custam os apps?', a: 'A página de cada app mostra o preço e as opções de plano antes da compra.' },
      {
        q: 'Quais dispositivos são compatíveis?',
        a: 'Depende do app. As plataformas compatíveis estão na página de cada app.',
      },
      { q: 'Em quais idiomas os apps estão disponíveis?', a: 'A página de cada app informa os idiomas disponíveis.' },
      { q: 'Como entro em contato com o suporte?', a: 'Pelo link de suporte dentro do app ou na página dele.' },
    ],
  },
  footer: {
    tagline: 'O ecossistema da sua produtividade.',
    apps: 'Apps',
    allApps: 'Todos os apps',
    mobileApps: 'Apps móveis',
    webApps: 'Apps web',
    support: 'Suporte',
    helpFaq: 'Ajuda e perguntas',
    contact: 'Fale conosco',
    company: 'Empresa',
    about: 'Sobre a BitEon',
    legal: 'Jurídico',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    rights: '© {year} BitEon Studio. Todos os direitos reservados.',
  },
  notFound: {
    title: 'Página não encontrada.',
    lead: 'A página pode ter sido movida ou não existe mais.',
    home: 'Voltar ao início',
    explore: 'Explorar apps',
    searchPlaceholder: 'Buscar apps',
    noResults: 'Nada encontrado. Tente outra palavra.',
  },
};

export default pt;
