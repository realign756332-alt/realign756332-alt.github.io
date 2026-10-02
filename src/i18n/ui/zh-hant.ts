import type { Dict } from './en';

// 繁體中文（臺灣、香港）：全站使用敬稱「您」，用詞採臺灣習慣（應用程式、軟體、使用者）。
const zhHant: Dict = {
  meta: {
    homeTitle: 'BitEon Studio — 您的生產力生態系',
    homeDescription: '探索 BitEon Studio 的行動與網頁應用程式生態系，拓展您的可能性，讓生產力邁向全新層次。',
    homeImageAlt: '萊姆綠背景上的 BitEon Studio 標誌',
    notFoundTitle: '找不到頁面 — BitEon Studio',
    notFoundDescription: '頁面可能已移動，或已不存在。',
  },
  a11y: {
    skipToContent: '跳至主要內容',
    homeLink: 'BitEon Studio 首頁',
    mainNav: '主選單',
    footerNav: '頁尾',
    openMenu: '選單',
    closeMenu: '關閉',
  },
  nav: {
    apps: '應用程式',
    new: '新品',
    principles: '理念',
    faq: '常見問題',
    cta: '瀏覽應用程式',
  },
  language: {
    label: '語言',
    change: '切換語言（目前：{lang}）',
    hint: '本頁面也提供{language}版本。',
    hintAction: '切換',
    hintClose: '關閉',
  },
  hero: {
    title: '您的生產力生態系。',
    lead: '探索 BitEon Studio 的應用程式生態系，為拓展您的可能性而生。創新的網路服務與行動軟體，貼合您的生活節奏，讓個人生產力邁向全新境界。',
    primary: '瀏覽應用程式',
    secondary: '最新消息',
    mascotAlt:
      'BitEon Studio 吉祥物：一位留著深藍色長髮、挑染萊姆綠的女孩，身穿印有萊姆綠「B」標誌的深藍色 Polo 衫，雙手插在口袋裡站著。',
  },
  categories: {
    title: '找到適合您的應用程式。',
    count: { other: '{n} 個應用程式' },
    items: {
      productivity: {
        name: '生產力',
        slogan: '專注於重要的事。',
        text: '輕鬆管理時間，從容達成目標。',
      },
      finance: {
        name: '財務',
        slogan: '您的財務，盡在掌握。',
        text: '不必面對複雜的試算表，簡單清楚地記錄預算。',
      },
      utilities: {
        name: '工具',
        slogan: '默默相助的好幫手。',
        text: '以優雅的方式，快速處理日常小事。',
      },
      creativity: {
        name: '創作',
        slogan: '自由創作，盡情表達。',
        text: '為設計師、作者與數位內容創作者打造的工具。',
      },
    },
  },
  releases: {
    title: '新品上市。',
    lead: '全新的創意解決方案，現已登場。',
    available: '已上架',
    comingSoon: '即將推出',
  },
  apps: {
    typeMobile: '行動版',
    typeWeb: '網頁版',
    appStore: '前往 App Store 下載',
    googlePlay: '前往 Google Play 下載',
    openApp: '開啟應用程式',
    appLanguages: '應用程式語言：',
    priceFree: '免費',
    priceFrom: '{price} 起',
    perMonth: '{price}／月',
    perYear: '{price}／年',
  },
  principles: {
    title: 'BitEon 的理念。',
    lead: '我們打造軟體的方式，就是我們希望別人為自己打造的方式。',
    points: [
      {
        title: '一個目標：完美的成果',
        text: '我們不求面面俱到。我們的應用程式精準命中目標，帶來極致的速度與簡潔。',
      },
      {
        title: '以使用者為中心',
        text: '我們依據真實的使用體驗打造產品。每一則意見都會反映在更新中，讓軟體隨著每次發布更臻完善。',
      },
      {
        title: '立即見效',
        text: '我們設計介面時，力求讓您用最少的點擊完成任務。無需學習，開啟即可立刻看到成果。',
      },
      {
        title: '尊重您的時間',
        text: '沒有繁瑣的說明、冗長的註冊，也沒有令人困惑的流程。我們的產品從啟動的第一秒起，就能派上用場。',
      },
    ],
  },
  faq: {
    title: '常見問題。',
    intro: '關於購買、安裝與使用 BitEon 應用程式。',
    items: [
      {
        q: '如何取得 BitEon 應用程式？',
        a: '行動應用程式可在 App Store 與 Google Play 取得。網頁應用程式可直接在瀏覽器中開啟，連結位於各應用程式的頁面。',
      },
      { q: '應用程式的價格是多少？', a: '購買前，您可以在各應用程式的頁面查看價格與方案。' },
      {
        q: '支援哪些裝置？',
        a: '依應用程式而異。支援的平台列於各應用程式的頁面。',
      },
      { q: '應用程式支援哪些語言？', a: '各應用程式支援的語言列於其頁面。' },
      {
        q: '如何聯絡客服支援？',
        a: '請透過應用程式內或應用程式頁面上的支援連結與我們聯繫。',
      },
    ],
  },
  footer: {
    tagline: '您的生產力生態系。',
    apps: '應用程式',
    allApps: '所有應用程式',
    mobileApps: '行動應用程式',
    webApps: '網頁應用程式',
    support: '支援',
    helpFaq: '說明與常見問題',
    contact: '聯絡我們',
    company: '公司',
    about: '關於 BitEon',
    legal: '法律資訊',
    privacy: '隱私權政策',
    terms: '使用條款',
    rights: '© {year} BitEon Studio. 保留一切權利。',
  },
  notFound: {
    title: '找不到頁面。',
    lead: '頁面可能已移動，或已不存在。',
    home: '回到首頁',
    explore: '瀏覽應用程式',
    searchPlaceholder: '搜尋應用程式',
    noResults: '找不到相關結果，請換個關鍵字試試。',
  },
};

export default zhHant;
