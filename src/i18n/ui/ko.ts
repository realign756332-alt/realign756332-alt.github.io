import type { Dict } from './en';

// 사이트 전체에서 존댓말을 사용합니다.
const ko: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — 당신의 생산성 에코시스템',
    homeDescription:
      'BitEon Studio의 모바일·웹 앱 에코시스템을 만나 보세요. 더 많은 일을 가능하게 하고 생산성을 새로운 차원으로 끌어올립니다.',
    homeImageAlt: '라임색 배경 위의 BitEon Studio 로고',
    notFoundTitle: '페이지를 찾을 수 없습니다 — BitEon Studio',
    notFoundDescription: '페이지가 이동되었거나 더 이상 존재하지 않을 수 있습니다.',
  },
  a11y: {
    skipToContent: '본문으로 건너뛰기',
    homeLink: 'BitEon Studio 홈',
    mainNav: '주 메뉴',
    footerNav: '푸터',
    openMenu: '메뉴',
    closeMenu: '닫기',
  },
  nav: {
    apps: '앱',
    new: '새 소식',
    principles: '원칙',
    faq: '질문',
    cta: '앱 둘러보기',
  },
  language: {
    label: '언어',
    change: '언어 변경. 현재 언어: {lang}',
    hint: '이 페이지는 {language}로도 보실 수 있습니다.',
    hintAction: '전환',
    hintClose: '닫기',
  },
  hero: {
    title: '당신의 생산성 에코시스템.',
    lead: 'BitEon Studio의 앱 에코시스템을 만나 보세요. 당신의 가능성을 넓히기 위해 만들었습니다. 생활 리듬에 맞춰 적응하는 혁신적인 웹 서비스와 모바일 소프트웨어가 개인 생산성을 완전히 새로운 수준으로 끌어올립니다.',
    primary: '앱 둘러보기',
    secondary: '새 소식',
    mascotAlt:
      'BitEon Studio 마스코트: 라임색 브리지가 들어간 긴 남색 머리의 젊은 여성이 라임색 B 로고가 있는 남색 폴로셔츠를 입고 주머니에 손을 넣은 채 서 있습니다.',
  },
  categories: {
    title: '나에게 맞는 앱을 찾아보세요.',
    count: { other: '앱 {n}개' },
    items: {
      productivity: {
        name: '생산성',
        slogan: '중요한 일에 집중하세요.',
        text: '번거로움 없이 시간을 관리하고 목표를 달성하세요.',
      },
      finance: {
        name: '금융',
        slogan: '돈 관리를 완벽하게.',
        text: '복잡한 스프레드시트 없이 간단하고 명확하게 예산을 관리하세요.',
      },
      utilities: {
        name: '유틸리티',
        slogan: '조용한 도우미.',
        text: '일상의 간단한 작업을 위한 세련된 솔루션.',
      },
      creativity: {
        name: '크리에이티브',
        slogan: '자유롭게 창작하세요.',
        text: '디자이너, 작가, 디지털 콘텐츠 크리에이터를 위한 도구.',
      },
    },
  },
  releases: {
    title: '새로운 앱.',
    lead: '새로운 크리에이티브 솔루션이 준비되었습니다.',
    available: '이용 가능',
    comingSoon: '출시 예정',
  },
  apps: {
    typeMobile: '모바일',
    typeWeb: '웹',
    appStore: 'App Store에서 다운로드하기',
    googlePlay: 'Google Play에서 다운로드',
    openApp: '앱 열기',
    appLanguages: '앱 지원 언어:',
    priceFree: '무료',
    priceFrom: '{price}부터',
    perMonth: '월 {price}',
    perYear: '연 {price}',
  },
  principles: {
    title: 'BitEon의 원칙.',
    lead: '우리가 쓰고 싶은 방식 그대로 소프트웨어를 만듭니다.',
    points: [
      {
        title: '하나의 목표: 완벽한 결과',
        text: '모든 것을 한꺼번에 하려 하지 않습니다. BitEon 앱은 정확히 목표를 겨냥해 최고의 속도와 단순함을 제공합니다.',
      },
      {
        title: '고객 중심 접근',
        text: '실제 사용자 경험을 바탕으로 제품을 발전시킵니다. 모든 피드백이 업데이트에 반영되어 릴리스마다 소프트웨어가 더 좋아집니다.',
      },
      {
        title: '즉각적인 결과',
        text: '최소한의 클릭으로 작업을 끝내실 수 있도록 인터페이스를 설계합니다. 따로 배울 필요 없이 열자마자 바로 결과를 얻으실 수 있습니다.',
      },
      {
        title: '당신의 시간을 존중합니다',
        text: '복잡한 설명서, 긴 가입 절차, 헷갈리는 흐름이 없습니다. 실행하는 첫 순간부터 유용하도록 만들었습니다.',
      },
    ],
  },
  faq: {
    title: '질문.',
    intro: 'BitEon 앱 구매, 설치, 사용 안내.',
    items: [
      {
        q: 'BitEon 앱은 어떻게 받나요?',
        a: '모바일 앱은 App Store와 Google Play에서 받으실 수 있습니다. 웹 앱은 브라우저에서 바로 열리며, 링크는 각 앱 페이지에 있습니다.',
      },
      { q: '앱 가격은 얼마인가요?', a: '구매 전에 각 앱 페이지에서 가격과 요금제를 확인하실 수 있습니다.' },
      { q: '어떤 기기를 지원하나요?', a: '앱마다 다릅니다. 지원 플랫폼은 각 앱 페이지에 나와 있습니다.' },
      { q: '앱은 어떤 언어를 지원하나요?', a: '각 앱의 지원 언어는 해당 앱 페이지에 나와 있습니다.' },
      { q: '고객 지원에는 어떻게 문의하나요?', a: '앱 안이나 앱 페이지에 있는 지원 링크를 이용해 주세요.' },
    ],
  },
  footer: {
    tagline: '당신의 생산성 에코시스템.',
    apps: '앱',
    allApps: '모든 앱',
    mobileApps: '모바일 앱',
    webApps: '웹 앱',
    support: '지원',
    helpFaq: '도움말 및 자주 묻는 질문',
    contact: '문의하기',
    company: '회사',
    about: 'BitEon 소개',
    legal: '법적 고지',
    privacy: '개인정보 처리방침',
    terms: '이용약관',
    rights: '© {year} BitEon Studio. 모든 권리 보유.',
  },
  notFound: {
    title: '페이지를 찾을 수 없습니다.',
    lead: '페이지가 이동되었거나 더 이상 존재하지 않을 수 있습니다.',
    home: '홈으로 돌아가기',
    explore: '앱 둘러보기',
    searchPlaceholder: '앱 검색',
    noResults: '결과가 없습니다. 다른 단어로 검색해 보세요.',
  },
};

export default ko;
