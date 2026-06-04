const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const languageSelect = document.querySelector("[data-language-select]");
const languagePicker = document.querySelector(".language-picker");
const STORAGE_KEY = "gohanpass-language";
const supportedLanguages = ["en", "ko", "ja", "zh"];

function readStoredLanguage() {
  try {
    return window.localStorage?.getItem(STORAGE_KEY);
  } catch (error) {
    console.warn("[i18n] localStorage is unavailable. Language preference will not be restored.", error);
    return null;
  }
}

function writeStoredLanguage(lang) {
  try {
    window.localStorage?.setItem(STORAGE_KEY, lang);
  } catch (error) {
    console.warn("[i18n] localStorage is unavailable. Language preference will not be saved.", error);
  }
}

const translations = {
  en: {
    meta: {
      title: "GO Hanpass | Travel Korea Smart",
      description: "GO Hanpass is an all-in-one travel app for foreign visitors in Korea.",
    },
    brand: {
      homeLabel: "GO Hanpass home",
    },
    language: {
      label: "Language",
    },
    nav: {
      mainLabel: "Main navigation",
      mobileLabel: "Mobile navigation",
      openMenu: "Open menu",
      features: "Features",
      service: "Service",
      touristCard: "Tourist Card",
      download: "Download",
    },
    hero: {
      eyebrow: "Korea travel platform for visitors",
      title: "Travel Smarter<br>with GO Hanpass",
      description: "All-in-one travel companion for foreign visitors in Korea. Find places, move around, pay, and enjoy Korea with one service.",
      downloadApp: "Download App",
      openApp: "Open GO Hanpass",
    },
    qr: {
      panelLabel: "GO Hanpass app download QR code",
      imageAlt: "QR code to install GO Hanpass app",
      title: "Scan to download",
      description: "Use the mobile CTA when browsing on your phone.",
    },
    mockup: {
      panelLabel: "GO Hanpass app mockup",
      imageAlt: "GO Hanpass app home screen showing card application, recommended destinations, transport shortcuts, and bottom navigation",
    },
    intro: {
      eyebrow: "From arrival to departure",
      title: "One pass for exploring, moving, paying, and enjoying Korea.",
      description: "GO Hanpass supports foreign visitors with passport-based onboarding, 18 languages, a travel wallet, tourist card, mobility booking, and local recommendations.",
    },
    compare: {
      eyebrow: "GO Hanpass service",
      title: "Built for short-term visitors in Korea",
      caption: "GO Hanpass service summary",
      category: "Category",
      targetLabel: "Target",
      targetValue: "Foreign visitors in Korea for short-term travel",
      platformLabel: "Platform",
      platformValue: "Mobile web + app for iOS and Android",
      coreLabel: "Core service",
      coreValue: "Map-based route guidance, mobility booking and payment, tourist convenience, wallet charging and payment",
      financeLabel: "Finance",
      financeValue: "Wallet, card, barcode and QR payments, remaining balance refund",
      moveLabel: "Move",
      moveValue: "Connect route search to mobility calls, reservations, payments, and transportation card use",
      convenienceLabel: "Convenience",
      convenienceValue: "Tourist attractions, restaurants, hospitals, festivals, wellness, and K-style local information",
      signupLabel: "Signup",
      signupValue: "Simple passport-based signup",
    },
    features: {
      eyebrow: "Main features",
      title: "Travel essentials in one flow",
      exploreTitle: "Explore",
      exploreText: "Find nearby restaurants, tourist attractions, cultural facilities, festivals, wellness spots, and K-style stores.",
      moveTitle: "Move",
      moveText: "Search places, check routes, and connect to taxi, KTX, express bus, airport transport, or city mobility services.",
      payTitle: "Pay",
      payText: "Charge once and pay with wallet, barcode, QR, prepaid card, and transportation card while traveling.",
      enjoyTitle: "Enjoy",
      enjoyText: "Get travel information and recommendations that help visitors plan the next stop like a local.",
    },
    card: {
      eyebrow: "Tourist card promotion",
      title: "GO Hanpass Card",
      description: "Use one card for prepaid payments and transportation. Domestic payments earn 0.3% cashback with no previous-month spending requirement or cashback cap.",
      prepaid: "Prepaid card",
      transportation: "Transportation card",
      cashback: "0.3% cashback",
      refund: "Balance refund",
    },
    footer: {
      description: "GO Hanpass is operated as a travel service for foreign visitors in Korea.",
      navLabel: "Footer navigation",
      servicePage: "Service page",
    },
  },
  ko: {
    meta: {
      title: "GO Hanpass | 더 스마트한 한국 여행",
      description: "GO Hanpass는 방한 외국인 관광객을 위한 올인원 여행 앱입니다.",
    },
    brand: {
      homeLabel: "GO Hanpass 홈",
    },
    language: {
      label: "언어",
    },
    nav: {
      mainLabel: "주요 내비게이션",
      mobileLabel: "모바일 내비게이션",
      openMenu: "메뉴 열기",
      features: "주요 기능",
      service: "서비스",
      touristCard: "관광객 카드",
      download: "다운로드",
    },
    hero: {
      eyebrow: "방한 관광객을 위한 한국 여행 플랫폼",
      title: "GO Hanpass로<br>스마트한 한국 여행",
      description: "GO Hanpass는 방한 외국인 관광객을 위한 올인원 여행 동반자입니다. 장소 탐색부터 이동, 결제, 여행 정보까지 하나의 서비스로 이용할 수 있습니다.",
      downloadApp: "앱 다운로드",
      openApp: "GO Hanpass 열기",
    },
    qr: {
      panelLabel: "GO Hanpass 앱 다운로드 QR 코드",
      imageAlt: "GO Hanpass 앱 설치용 QR 코드",
      title: "QR로 다운로드",
      description: "모바일에서는 바로가기 버튼으로 GO Hanpass를 이용할 수 있습니다.",
    },
    mockup: {
      panelLabel: "GO Hanpass 앱 목업",
      imageAlt: "카드 신청, 추천 여행지, 교통 바로가기, 하단 내비게이션이 표시된 GO Hanpass 앱 홈 화면",
    },
    intro: {
      eyebrow: "입국부터 출국까지",
      title: "탐색, 이동, 결제, 여행 즐기기를 하나의 패스로 해결하세요.",
      description: "GO Hanpass는 여권 기반 간편 가입, 18개 언어, 여행 월렛, 관광객 카드, 모빌리티 예약, 현지 추천 정보를 제공해 방한 외국인 관광객의 여정을 돕습니다.",
    },
    compare: {
      eyebrow: "GO Hanpass 서비스",
      title: "단기 방한 관광객을 위해 설계된 서비스",
      caption: "GO Hanpass 서비스 요약",
      category: "구분",
      targetLabel: "대상",
      targetValue: "단기 여행 목적으로 한국을 방문한 외국인 관광객",
      platformLabel: "플랫폼",
      platformValue: "iOS 및 Android를 지원하는 모바일 웹과 앱",
      coreLabel: "핵심 서비스",
      coreValue: "지도 기반 경로 안내, 모빌리티 예약 및 결제, 관광 편의 기능, 월렛 충전 및 결제",
      financeLabel: "금융",
      financeValue: "월렛, 카드, 바코드 및 QR 결제, 잔액 환급",
      moveLabel: "이동",
      moveValue: "경로 검색에서 모빌리티 호출, 예약, 결제, 교통카드 이용까지 연결",
      convenienceLabel: "편의",
      convenienceValue: "관광지, 맛집, 병원, 축제, 웰니스, K-스타일 현지 정보",
      signupLabel: "가입",
      signupValue: "여권 인증 기반 간편 가입",
    },
    features: {
      eyebrow: "주요 기능",
      title: "한국 여행에 필요한 기능을 하나의 흐름으로",
      exploreTitle: "탐색",
      exploreText: "주변 맛집, 관광지, 문화시설, 축제, 웰니스 시설, K-스타일 매장을 빠르게 찾아볼 수 있습니다.",
      moveTitle: "이동",
      moveText: "장소 검색과 경로 확인 후 택시, KTX, 고속버스, 공항 이동, 도시 모빌리티 서비스로 연결할 수 있습니다.",
      payTitle: "결제",
      payText: "한 번 충전한 월렛으로 여행 중 바코드, QR, 선불카드, 교통카드 결제를 이용할 수 있습니다.",
      enjoyTitle: "즐기기",
      enjoyText: "다음 목적지를 현지인처럼 계획할 수 있도록 여행 정보와 추천 콘텐츠를 제공합니다.",
    },
    card: {
      eyebrow: "관광객 카드 프로모션",
      title: "GO Hanpass 카드",
      description: "선불 결제와 교통카드 기능을 카드 한 장으로 이용하세요. 국내 결제 시 전월 실적과 캐시백 한도 조건 없이 0.3% 캐시백을 제공합니다.",
      prepaid: "선불카드",
      transportation: "교통카드",
      cashback: "0.3% 캐시백",
      refund: "잔액 환급",
    },
    footer: {
      description: "GO Hanpass는 방한 외국인 관광객을 위한 여행 서비스로 운영됩니다.",
      navLabel: "푸터 내비게이션",
      servicePage: "서비스 페이지",
    },
  },
  ja: {
    meta: {
      title: "GO Hanpass | 韓国旅行をスマートに",
      description: "GO Hanpassは、韓国を訪れる外国人旅行者のためのオールインワン旅行アプリです。",
    },
    brand: {
      homeLabel: "GO Hanpass ホーム",
    },
    language: {
      label: "言語",
    },
    nav: {
      mainLabel: "メインナビゲーション",
      mobileLabel: "モバイルナビゲーション",
      openMenu: "メニューを開く",
      features: "機能",
      service: "サービス",
      touristCard: "観光客カード",
      download: "ダウンロード",
    },
    hero: {
      eyebrow: "韓国を訪れる旅行者のための旅行プラットフォーム",
      title: "GO Hanpassで<br>スマートな韓国旅行を",
      description: "GO Hanpassは、韓国を訪れる外国人旅行者のためのオールインワン旅行パートナーです。スポット検索、移動、決済、旅行情報まで、ひとつのサービスで利用できます。",
      downloadApp: "アプリをダウンロード",
      openApp: "GO Hanpassを開く",
    },
    qr: {
      panelLabel: "GO Hanpassアプリダウンロード用QRコード",
      imageAlt: "GO HanpassアプリをインストールするためのQRコード",
      title: "QRでダウンロード",
      description: "スマートフォンでは、CTAボタンからGO Hanpassを直接開けます。",
    },
    mockup: {
      panelLabel: "GO Hanpassアプリのモックアップ",
      imageAlt: "カード申請、おすすめスポット、交通ショートカット、下部ナビゲーションが表示されたGO Hanpassアプリのホーム画面",
    },
    intro: {
      eyebrow: "入国から出国まで",
      title: "探す、移動する、支払う、楽しむをひとつのパスで。",
      description: "GO Hanpassは、パスポートによる簡単登録、18言語対応、旅行ウォレット、観光客カード、モビリティ予約、現地おすすめ情報で、韓国旅行をサポートします。",
    },
    compare: {
      eyebrow: "GO Hanpassサービス",
      title: "短期滞在の訪韓旅行者のために設計されたサービス",
      caption: "GO Hanpassサービス概要",
      category: "項目",
      targetLabel: "対象",
      targetValue: "短期旅行で韓国を訪れる外国人旅行者",
      platformLabel: "プラットフォーム",
      platformValue: "iOS / Android対応のモバイルWebとアプリ",
      coreLabel: "主なサービス",
      coreValue: "地図ベースの経路案内、モビリティ予約・決済、観光便利機能、ウォレットチャージ・決済",
      financeLabel: "金融",
      financeValue: "ウォレット、カード、バーコード・QR決済、残高の払い戻し",
      moveLabel: "移動",
      moveValue: "経路検索からモビリティの呼び出し、予約、決済、交通カード利用まで連携",
      convenienceLabel: "便利機能",
      convenienceValue: "観光地、グルメ、病院、祭り、ウェルネス、K-Styleの現地情報",
      signupLabel: "登録",
      signupValue: "パスポート認証による簡単登録",
    },
    features: {
      eyebrow: "主な機能",
      title: "韓国旅行に必要な機能をひとつの流れで",
      exploreTitle: "探す",
      exploreText: "近くのレストラン、観光地、文化施設、祭り、ウェルネス施設、K-Styleショップをすばやく探せます。",
      moveTitle: "移動",
      moveText: "場所検索と経路確認から、タクシー、KTX、高速バス、空港交通、都市モビリティサービスへつなげられます。",
      payTitle: "支払う",
      payText: "一度チャージしたウォレットで、旅行中にバーコード、QR、プリペイドカード、交通カード決済を利用できます。",
      enjoyTitle: "楽しむ",
      enjoyText: "次の目的地を現地の人のように計画できるよう、旅行情報とおすすめを提供します。",
    },
    card: {
      eyebrow: "観光客カードプロモーション",
      title: "GO Hanpassカード",
      description: "プリペイド決済と交通カード機能を一枚のカードで利用できます。韓国国内での決済時には、前月利用実績やキャッシュバック上限なしで0.3%のキャッシュバックを受けられます。",
      prepaid: "プリペイドカード",
      transportation: "交通カード",
      cashback: "0.3%キャッシュバック",
      refund: "残高払い戻し",
    },
    footer: {
      description: "GO Hanpassは、韓国を訪れる外国人旅行者向けの旅行サービスとして運営されています。",
      navLabel: "フッターナビゲーション",
      servicePage: "サービスページ",
    },
  },
  zh: {
    meta: {
      title: "GO Hanpass | 让韩国旅行更智能",
      description: "GO Hanpass是一款面向访韩外国游客的一站式旅行应用。",
    },
    brand: {
      homeLabel: "GO Hanpass首页",
    },
    language: {
      label: "语言",
    },
    nav: {
      mainLabel: "主导航",
      mobileLabel: "移动端导航",
      openMenu: "打开菜单",
      features: "功能",
      service: "服务",
      touristCard: "游客卡",
      download: "下载",
    },
    hero: {
      eyebrow: "面向访韩游客的韩国旅行平台",
      title: "用GO Hanpass<br>智享韩国旅行",
      description: "GO Hanpass是面向访韩外国游客的一站式旅行伙伴。从地点探索、出行到支付和旅行资讯，一个服务即可完成。",
      downloadApp: "下载应用",
      openApp: "打开GO Hanpass",
    },
    qr: {
      panelLabel: "GO Hanpass应用下载二维码",
      imageAlt: "用于安装GO Hanpass应用的二维码",
      title: "扫码下载",
      description: "使用手机浏览时，可通过快捷按钮直接打开GO Hanpass。",
    },
    mockup: {
      panelLabel: "GO Hanpass应用界面示意图",
      imageAlt: "展示卡片申请、推荐目的地、交通快捷入口和底部导航的GO Hanpass应用首页",
    },
    intro: {
      eyebrow: "从入境到离境",
      title: "用一个通行服务完成探索、出行、支付和畅玩韩国。",
      description: "GO Hanpass通过护照快捷注册、18种语言支持、旅行钱包、游客卡、出行预约和本地推荐信息，帮助访韩外国游客轻松完成旅程。",
    },
    compare: {
      eyebrow: "GO Hanpass服务",
      title: "专为短期访韩游客打造的服务",
      caption: "GO Hanpass服务概要",
      category: "类别",
      targetLabel: "目标用户",
      targetValue: "以短期旅行为目的访问韩国的外国游客",
      platformLabel: "平台",
      platformValue: "支持iOS和Android的移动网页与应用",
      coreLabel: "核心服务",
      coreValue: "基于地图的路线指引、出行预约与支付、旅游便利功能、钱包充值与支付",
      financeLabel: "金融",
      financeValue: "钱包、卡片、条码和QR支付、余额退还",
      moveLabel: "出行",
      moveValue: "从路线搜索到叫车、预约、支付和交通卡使用，一站式连接",
      convenienceLabel: "便利服务",
      convenienceValue: "旅游景点、美食、医院、节庆、康养和K-Style本地信息",
      signupLabel: "注册",
      signupValue: "基于护照认证的快捷注册",
    },
    features: {
      eyebrow: "主要功能",
      title: "将韩国旅行所需功能整合为一个流程",
      exploreTitle: "探索",
      exploreText: "快速查找附近餐厅、旅游景点、文化设施、节庆活动、康养场所和K-Style门店。",
      moveTitle: "出行",
      moveText: "搜索地点、确认路线，并连接出租车、KTX、高速巴士、机场交通或城市出行服务。",
      payTitle: "支付",
      payText: "一次充值旅行钱包，即可在旅途中使用条码、QR、预付卡和交通卡进行支付。",
      enjoyTitle: "畅玩",
      enjoyText: "提供旅行资讯和推荐内容，帮助游客像本地人一样规划下一站。",
    },
    card: {
      eyebrow: "游客卡优惠",
      title: "GO Hanpass卡",
      description: "一张卡即可使用预付支付和交通卡功能。在韩国境内消费可享0.3%返现，无上月消费额和返现上限条件。",
      prepaid: "预付卡",
      transportation: "交通卡",
      cashback: "0.3%返现",
      refund: "余额退还",
    },
    footer: {
      description: "GO Hanpass作为面向访韩外国游客的旅行服务运营。",
      navLabel: "页脚导航",
      servicePage: "服务页面",
    },
  },
};

function readTranslation(lang, key) {
  const value = key.split(".").reduce((source, part) => source?.[part], translations[lang]);
  if (typeof value === "string") {
    return value;
  }

  const fallback = key.split(".").reduce((source, part) => source?.[part], translations.en);
  console.warn(`[i18n] Missing translation for "${key}" in "${lang}". Falling back to English.`);
  return typeof fallback === "string" ? fallback : "";
}

function applyAttributeTranslations(element, lang) {
  const attrConfig = element.dataset.i18nAttr;
  if (!attrConfig) return;

  attrConfig.split(",").forEach((entry) => {
    const [attr, key] = entry.split(":").map((item) => item.trim());
    if (!attr || !key) return;
    element.setAttribute(attr, readTranslation(lang, key));
  });
}

function setLanguage(lang) {
  const nextLang = supportedLanguages.includes(lang) ? lang : "en";

  document.documentElement.lang = nextLang;
  document.title = readTranslation(nextLang, "meta.title");
  document.querySelector('meta[name="description"]')?.setAttribute("content", readTranslation(nextLang, "meta.description"));
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", readTranslation(nextLang, "meta.title"));
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", readTranslation(nextLang, "meta.description"));
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", readTranslation(nextLang, "meta.title"));
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", readTranslation(nextLang, "meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = readTranslation(nextLang, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = readTranslation(nextLang, element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    applyAttributeTranslations(element, nextLang);
  });

  if (languageSelect) {
    languageSelect.value = nextLang;
    languageSelect.dataset.activeLanguage = nextLang;
  }

  languagePicker?.classList.toggle("is-active", nextLang !== "en");
  writeStoredLanguage(nextLang);
}

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    header.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

languageSelect?.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

setLanguage(readStoredLanguage() || "en");
