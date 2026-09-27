import type { Dict } from './en';

const ko: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — 제대로 작동하는 모바일·웹 앱',
    homeDescription:
      'BitEon Studio는 iPhone, Android, 웹을 위한 군더더기 없는 앱을 만듭니다. 명확한 가격, 추적 없음. App Store, Google Play 또는 브라우저에서 바로 사용하세요.',
    homeImageAlt: '라임색 배경 위의 BitEon Studio 로고',
    notFoundTitle: '페이지를 찾을 수 없습니다 — BitEon Studio',
    notFoundDescription: '존재하지 않는 페이지입니다. BitEon Studio 앱 목록에서 검색하거나 주요 메뉴로 이동하세요.',
    siteDescription:
      'BitEon Studio는 한 가지 일에 집중한 모바일 앱과 웹 앱을 만듭니다. 모든 앱이 한 가지 일을 제대로 해내고, 가격을 먼저 보여 주며, App Store, Google Play 또는 브라우저에서 설치할 수 있습니다.',
  },
  a11y: {
    skipToContent: '본문으로 건너뛰기',
    homeLink: 'BitEon Studio 홈',
    mainNav: '주 메뉴',
    footerNav: '푸터',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
  },
  nav: {
    apps: '앱',
    categories: '카테고리',
    why: 'BitEon을 고르는 이유',
    faq: '자주 묻는 질문',
    cta: '앱 둘러보기',
  },
  language: {
    label: '언어',
    change: '언어 변경. 현재 언어: {lang}',
    hint: '이 페이지는 한국어로도 볼 수 있습니다.',
    hintAction: '한국어로 보기',
    hintClose: '닫기',
  },
  hero: {
    title: '제대로 작동하는 앱',
    lead: 'BitEon Studio는 한 가지 일에 집중한 모바일 앱과 웹 앱을 만듭니다. 모든 앱이 한 가지 일을 제대로 해내고, 가격을 처음부터 분명히 보여 주며, 쓸데없이 방해하지 않습니다.',
    primary: '앱 둘러보기',
    secondary: '구매 방법',
    mascotAlt:
      'BitEon Studio 마스코트: 라임색 브리지가 들어간 긴 남색 머리의 젊은 여성이 라임색 B 로고가 있는 남색 폴로셔츠를 입고 주머니에 손을 넣은 채 서 있습니다.',
  },
  categories: {
    title: '카테고리별로 보기',
    count: { other: '앱 {n}개' },
    items: {
      productivity: { name: '생산성', summary: '계획하고, 집중하고, 끝내세요.' },
      finance: { name: '금융', summary: '스프레드시트 없이 돈 관리.' },
      utilities: { name: '유틸리티', summary: '매일 쓰는 작은 도구.' },
      lifestyle: { name: '라이프스타일', summary: '습관, 건강, 하루 루틴.' },
      creativity: { name: '크리에이티브', summary: '이미지와 색상, 아이디어를 만드세요.' },
    },
  },
  apps: {
    featuredTitle: '추천 앱',
    featuredLead: '앱을 고르고, 가격을 확인하고, 한 번에 설치하세요.',
    upcomingTitle: '곧 나올 앱',
    upcomingLead: '첫 번째 앱들을 만들고 있습니다. 이런 일을 하게 됩니다.',
    example: '예시',
    comingSoon: '출시 예정',
    typeMobile: '모바일',
    typeWeb: '웹 앱',
    platformWeb: '웹',
    appStore: 'App Store에서 받기',
    googlePlay: 'Google Play에서 받기',
    openApp: '앱 열기',
    appLanguages: '앱 지원 언어:',
    priceFree: '무료',
    priceFreemium: '무료 + 앱 내 구매',
    priceFreemiumPro: '무료, Pro {price}',
    perMonth: '월 {price}',
    perYear: '연 {price}',
  },
  why: {
    title: 'BitEon을 고르는 이유',
    lead: '작은 스튜디오가 모든 앱에 지키는 단순한 원칙입니다.',
    points: [
      {
        title: '한 가지 일을 제대로',
        text: '모든 앱은 분명한 문제 하나를 해결합니다. 기능을 잔뜩 쌓지도, 설정을 미로처럼 만들지도 않습니다.',
      },
      { title: '명확한 가격', text: '모든 앱은 구매 전에 가격을 먼저 보여 줍니다.' },
      {
        title: '이 사이트에는 추적이 없습니다',
        text: '광고 추적기도, 쿠키 배너도 없습니다. 각 앱의 개인정보 처리방침에 어떤 데이터를 쓰는지 정확히 적어 두었습니다.',
      },
      {
        title: '실제 사람이 만듭니다',
        text: '창업자 Alex가 모든 앱을 직접 만들고, 지원 메시지도 하나하나 직접 읽습니다.',
      },
    ],
  },
  faq: {
    title: '구매, 결제, 지원',
    intro: '구매 전에 자주 묻는 질문에 짧게 답해 드립니다.',
    items: [
      {
        q: '모바일 앱은 어떻게 구매하나요?',
        a: '모바일 앱은 App Store와 Google Play에서 판매합니다. 결제와 다운로드는 Apple과 Google이 각자의 규정에 따라 처리합니다.',
      },
      {
        q: '웹 앱은 어떻게 결제하나요?',
        a: '각 웹 앱의 결제 조건은 해당 앱 페이지에 안내할 예정입니다.',
      },
      {
        q: '환불받을 수 있나요?',
        a: '모바일 앱 환불은 App Store와 Google Play 규정을 따르며, Apple 또는 Google에 직접 요청하시면 됩니다. 각 웹 앱의 환불 조건은 해당 앱 페이지에 안내할 예정입니다.',
      },
      {
        q: '지원은 어떻게 받나요?',
        a: '앱 안이나 이 사이트의 앱 페이지에 있는 지원 링크를 이용하세요. 메시지는 개발자에게 바로 전달됩니다.',
      },
      {
        q: '어떤 기기에서 쓸 수 있나요?',
        a: '각 앱 페이지에 지원 플랫폼이 나와 있습니다. iPhone, Android 또는 최신 웹 브라우저입니다.',
      },
    ],
  },
  footer: {
    tagline: '작은 스튜디오가 만드는, 한 가지 일에 집중한 모바일·웹 앱.',
    apps: '앱',
    categories: '카테고리',
    compare: '비교',
    allComparisons: '전체 비교',
    tools: '도구',
    allTools: '무료 도구 전체',
    faq: '자주 묻는 질문',
    buyingRefunds: '구매 및 환불',
    company: '회사',
    about: '소개',
    contact: '문의',
    privacy: '개인정보 처리방침',
    terms: '이용약관',
    refundPolicy: '환불 정책',
  },
  notFound: {
    title: '존재하지 않는 페이지입니다',
    lead: '링크가 오래되었거나 주소가 잘못 입력된 것 같습니다. 아래에서 앱을 찾거나 주요 메뉴로 이동하세요.',
    searchLabel: '앱 검색',
    searchPlaceholder: '앱 이름이나 기능',
    noResults: '검색과 일치하는 앱이 없습니다.',
    sections: '주요 메뉴',
    home: '홈',
  },
};

export default ko;
