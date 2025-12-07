export const siteData = {
  name: "밧데리몬스터",
  tagline: "24시간 긴급 출장 · 무료 진단",
  description: "UPS, 발전기, ESS 긴급 상황? 365일 24시간, 1시간 내 출동. 현장 다운타임 ZERO를 위한 산업용 배터리 전문 솔루션",
  shortDescription: "국내 유일의 20년 노하우를 갖춘 정품 공식 총판",
  address: "경기도 김포시 금포로 1517 2층(운양동)",
  seoulAddress: "서울 서초구 방배동 770 오릭스오피스텔 1004",
  phone: "010-3700-3859",
  fax: "0303-0537-6320",
  email: "maxdm8404@daum.net",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "youtube", icon: "ri-youtube-fill", label: "YouTube" },
];

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "본사 위치",
    content: siteData.address,
    link: null,
  },
  {
    icon: "ri-map-pin-2-line",
    title: "서울 지점",
    content: siteData.seoulAddress,
    link: null,
  },
  {
    icon: "ri-phone-line",
    title: "긴급 출장 전화",
    content: siteData.phone,
    link: `tel:${siteData.phone}`,
  },
  {
    icon: "ri-mail-line",
    title: "이메일",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
  {
    icon: "ri-time-line",
    title: "운영시간",
    content: ["365일 24시간 긴급 출동 가능"],
    link: null,
  },
];

export const navigation = [
  { name: "서비스 소개", href: "#services" },
  { name: "핵심 경쟁력", href: "#features" },
  { name: "설치 절차", href: "#process" },
  { name: "FAQ", href: "#faq" },
];

export const statistics = [
  { number: "1,327+", label: "누적 설치 성공 사례", icon: "ri-award-line" },
  { number: "20년", label: "현장 노하우 경력", icon: "ri-time-line" },
  { number: "100%", label: "정품 보장", icon: "ri-verified-badge-line" },
  { number: "24/7", label: "긴급 출동 체계", icon: "ri-24-hours-line" },
  { number: "1시간", label: "평균 출동 시간", icon: "ri-flashlight-line" },
  { number: "0건", label: "설치 사고율", icon: "ri-shield-check-line" },
];

export const brands = [
  {
    name: "DELKOR",
    description: "델코 정품 배터리",
    logo: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=200&h=100&fit=crop&q=80"
  },
  {
    name: "ROCKET",
    description: "로케트 배터리",
    logo: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=200&h=100&fit=crop&q=80"
  },
  {
    name: "ATLASBX",
    description: "아트라스BX",
    logo: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=200&h=100&fit=crop&q=80"
  },
  {
    name: "X-PRO",
    description: "엑스프로",
    logo: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=200&h=100&fit=crop&q=80"
  },
  {
    name: "SOLITE",
    description: "솔라이트",
    logo: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=200&h=100&fit=crop&q=80"
  },
];

export const services = [
  {
    category: "산업용 배터리",
    title: "UPS · 발전기 · ESS 전문",
    description: "UPS, 발전기, 수배전반, 태양광 등 안정적인 전력 공급이 필수적인 현장에 최적화된 솔루션.",
    icon: "ri-building-line",
    features: [
      "무정전 전원장치(UPS)",
      "비상발전기용/ESS",
      "대규모 전산센터",
      "수배전반 배터리"
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "자동차 배터리",
    title: "전차종 배터리 교체",
    description: "국산차, 수입차, 대형 화물차까지. 차종별 최적의 배터리를 현장에서 즉시 교체해 드립니다.",
    icon: "ri-car-line",
    features: [
      "전차종 무료 출장",
      "수입차 전용 코딩",
      "AGM/고성능 배터리",
      "현장 즉시 교체"
    ],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "중장비/특수 배터리",
    title: "산업 특수 장비 전문",
    description: "지게차, 골프카트, 고소작업대 등 특수 목적용 고용량 배터리 전문 취급 및 관리.",
    icon: "ri-tools-line",
    features: [
      "전동지게차/농기계",
      "딥사이클 배터리",
      "캠핑/선박용",
      "골프카트/고소작업대"
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&q=80",
  },
];

export const features = [
  {
    title: "100% 정품 인증 & 업계 1위 브랜드",
    description: "델코, 엑스프로, 아트라스 등 검증된 브랜드 제품만 취급하며 최근 생산된 제품 설치를 보장합니다.",
    icon: "ri-verified-badge-line",
  },
  {
    title: "365일 24시간 긴급 출동",
    description: "산업현장 사고 ZERO를 위해 언제 어디서나 신속하게 출동하여 문제를 해결합니다.",
    icon: "ri-24-hours-line",
  },
  {
    title: "전문가 1:1 맞춤 진단",
    description: "단순 교체가 아닌, 배터리 상태 및 제너레이터 전압 점검까지 무료로 진행합니다.",
    icon: "ri-stethoscope-line",
  },
  {
    title: "폐배터리 무료 수거 & 환경 처리",
    description: "교체 후 발생한 폐배터리는 무료로 수거하며, 환경 규정에 맞춰 안전하게 처리합니다.",
    icon: "ri-recycle-line",
  },
];

export const process = [
  {
    step: "01",
    title: "상담",
    description: "전화/카톡으로 차종 및 용량 확인, 견적 안내",
    icon: "ri-customer-service-2-line",
  },
  {
    step: "02",
    title: "현장 출동 & 무료 진단",
    description: "전문 기사 배정 후 최단 시간 내 현장 도착 및 맞춤 진단",
    icon: "ri-truck-line",
  },
  {
    step: "03",
    title: "신속 설치",
    description: "최신 정품 배터리 교체 및 전압 정밀 테스트",
    icon: "ri-tools-fill",
  },
  {
    step: "04",
    title: "사후 관리",
    description: "폐배터리 무료 수거 및 AS 보증 관리",
    icon: "ri-service-line",
  },
];

export const references = [
  {
    title: "금융기관/은행",
    description: "UPS 전산실 대용량 교체",
    icon: "ri-bank-line",
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "종합 병원",
    description: "비상발전기용 배터리 관리",
    icon: "ri-hospital-line",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "관공서/공공기관",
    description: "정기 점검 및 유지보수 계약",
    icon: "ri-government-line",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "대형 산업단지",
    description: "지게차 및 특수장비 납품",
    icon: "ri-building-2-line",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=600&fit=crop&q=80",
  },
];

export const faqs = [
  {
    question: "24시간 긴급 출장 설치는 전국 어디나 가능한가요?",
    answer: "네, 전국 어디서나 가능합니다. 특히 수도권 지역은 1시간 내 출동을 목표로 하고 있으며, 지방 지역도 신속하게 출동하여 배터리 문제를 해결해 드립니다.",
  },
  {
    question: "취급하는 배터리 브랜드는 무엇이며 정품이 맞나요?",
    answer: "델코(DELKOR), 로케트(ROCKET), 아트라스BX(ATLASBX), 엑스프로(X-PRO), 솔라이트(SOLITE) 등 국내외 최고 품질의 정품 브랜드만 취급합니다. 모든 제품은 정품 인증서와 함께 제공되며, 최근 생산 제품만 설치합니다.",
  },
  {
    question: "폐배터리는 어떻게 처리해야 하나요?",
    answer: "폐배터리는 저희가 무료로 수거해 드립니다. 환경부 규정에 따라 안전하게 처리하며, 별도의 비용이나 절차 없이 교체 시 즉시 수거해 드립니다.",
  },
  {
    question: "산업용 배터리 교체 주기는 얼마나 되나요?",
    answer: "일반적으로 UPS용 배터리는 3-5년, 발전기용은 2-4년이 권장 교체 주기입니다. 하지만 사용 환경과 빈도에 따라 달라질 수 있어, 정기적인 점검을 통해 최적의 교체 시기를 안내해 드립니다.",
  },
  {
    question: "B2B 대량 납품도 가능한가요?",
    answer: "네, 가능합니다. 은행, 병원, 대기업, 공공기관 등 다수의 B2B 납품 실적이 있으며, 대량 구매 시 특별 단가를 적용해 드립니다. 정기 유지보수 계약도 가능합니다.",
  },
  {
    question: "설치 후 사후 관리는 어떻게 되나요?",
    answer: "설치 완료 후 배터리 보증서를 제공하며, 보증 기간 내 문제 발생 시 무상 A/S를 제공합니다. 또한 정기 점검 서비스를 통해 배터리 상태를 지속적으로 관리해 드립니다.",
  },
  {
    question: "상담 시 필요한 정보는 무엇인가요?",
    answer: "차량의 경우 차종과 연식, 산업용의 경우 장비 종류와 용량을 알려주시면 됩니다. 정확한 진단이 필요한 경우 현장 방문 후 무료로 점검해 드립니다.",
  },
  {
    question: "카드 결제나 세금계산서 발행이 가능한가요?",
    answer: "네, 현금, 카드, 계좌이체 모두 가능하며, 사업자 고객께는 세금계산서를 즉시 발행해 드립니다.",
  },
  {
    question: "특수/대용량 배터리도 설치 가능한가요?",
    answer: "네, 가능합니다. 지게차, 선박, 캠핑카, 골프카트, 고소작업대 등 특수 목적용 배터리부터 대용량 산업용 배터리까지 모든 종류의 배터리를 취급합니다.",
  },
  {
    question: "설치 후 배터리 수명을 오래 유지하는 팁이 있나요?",
    answer: "정기적인 단자 청소, 적정 충전 상태 유지, 장기간 미사용 시 정기 충전 등이 중요합니다. 설치 시 배터리 관리 매뉴얼을 제공해 드리며, 궁금한 점은 언제든 문의 주시면 상세히 안내해 드립니다.",
  },
];

export const testimonials = [
  {
    name: "김산업 대표",
    company: "○○물류센터",
    content: "지게차 배터리가 갑자기 방전되어 큰일 날 뻔 했는데, 1시간 만에 출동해서 교체해주셔서 정말 감사했습니다. 배터리 품질도 우수하고 가격도 합리적이었습니다.",
    rating: 5,
  },
  {
    name: "박관리 팀장",
    company: "△△종합병원",
    content: "비상발전기 배터리 정기 교체를 맡기고 있습니다. 20년 노하우답게 전문적이고 꼼꼼하게 관리해주셔서 안심하고 맡기고 있습니다.",
    rating: 5,
  },
  {
    name: "이정보 부장",
    company: "□□은행 본점",
    content: "UPS 배터리 대량 교체 프로젝트를 진행했는데, 다운타임 없이 완벽하게 작업해주셨습니다. B2B 경험이 풍부한 것이 느껴집니다.",
    rating: 5,
  },
];

export const specialOffers = [
  {
    title: "현장방문 즉시 추가 할인",
    description: "견적가 최대 10% 할인 적용",
    icon: "ri-discount-percent-line",
  },
  {
    title: "전문가 진단 보고서",
    description: "20년 전문가의 맞춤 배터리 진단 보고서 무료 제공",
    icon: "ri-file-text-line",
  },
  {
    title: "B2B 특별 단가",
    description: "대규모 납품 시 업계 최저 선착순 특별 단가 적용",
    icon: "ri-briefcase-line",
  },
];
