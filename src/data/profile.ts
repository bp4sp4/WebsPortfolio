// ─────────────────────────────────────────────
// 개발자 정보
// ─────────────────────────────────────────────
export const developerInfo = {
  name: "박상훈",
  role: "Frontend Developer",
  skills: ["React", "Next.js", "TypeScript", "CSS", "HTML"],
  tools: ["Supabase", "Git", "Vercel"],
  passion: "창의적인 웹 경험",
  motto: "배움에 끝은 없다!",
};

// ─────────────────────────────────────────────
// 경력 사항
// ─────────────────────────────────────────────
export const experiences = [
  {
    date: "2025. 04 — 현재 재직 중",
    info: "한평생그룹 개발본부 프론트엔드 개발자",
    type: "work" as const,
    icon: "fas fa-briefcase",
    current: true,
  },
  {
    date: "2023. 02 — 2023. 05",
    info: "새롬정보시스템 AI빅데이터그룹 연구원",
    type: "work" as const,
    icon: "fas fa-briefcase",
  },
  {
    date: "2022. 05 — 2022. 12",
    info: "한국ICT인재개발원 웹 개발 과정",
    type: "education" as const,
    icon: "fas fa-laptop-code",
  },
  {
    date: "2021. 10 — 2022. 04",
    info: "와이즈스톤티 앱·웹 QA 테스터",
    type: "work" as const,
    icon: "fas fa-briefcase",
  },
  {
    date: "2022. 02",
    info: "대림대학교 컴퓨터정보학부 졸업",
    type: "education" as const,
    icon: "fas fa-graduation-cap",
  },
];

// ─────────────────────────────────────────────
// 스킬 정보
// ─────────────────────────────────────────────
export const skills = [
  {
    icon: "fas fa-code",
    title: "프론트엔드",
    description:
      "시멘틱 마크업과 모던 CSS, React/Next.js 컴포넌트 설계로 반응형 화면과 UI 상태를 구현",
    tags: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: "fas fa-server",
    title: "백엔드 · 데이터",
    description:
      "Supabase(PostgreSQL) 스키마·권한(RLS) 설계, 인증, 결제·외부 API 연동까지 화면 뒤의 데이터 흐름을 구축",
    tags: ["Supabase", "PostgreSQL", "Auth · RLS", "Server Actions", "외부 API 연동"],
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX 디자인",
    description:
      "Figma를 활용한 와이어프레임, 프로토타이핑 및 디자인 시스템 구축",
    tags: ["Figma", "Responsive Design", "Prototyping"],
  },
  {
    icon: "fas fa-magic",
    title: "인터랙션 & 애니메이션",
    description:
      "GSAP·ScrollTrigger 기반 스크롤 인터랙션과 CSS 애니메이션으로 살아 움직이는 웹 경험 구현",
    tags: ["GSAP", "ScrollTrigger", "Lenis", "Framer Motion", "CSS Animation"],
  },
  {
    icon: "fas fa-tools",
    title: "개발 도구",
    description: "Git 버전 관리, Vercel·Cloudflare 배포 환경 구성과 AI 도구를 활용한 개발 생산성 향상",
    tags: ["Git", "GitHub", "Vercel", "Cloudflare", "Claude Code"],
  },
  {
    icon: "fas fa-mobile-alt",
    title: "퍼블리싱",
    description:
      "크로스 브라우저 호환성, 웹 접근성, 웹 표준을 준수한 정교한 퍼블리싱",
    tags: ["웹 접근성", "SEO", "Cross-Browser", "Pixel Perfect"],
  },
];

// ─────────────────────────────────────────────
// 연락처 정보
// ─────────────────────────────────────────────
export const contactInfo = {
  email: "bp4sp4@naver.com",
  tagline: "사용자 입장에서 먼저 테스트하는 개발자를 찾으신다면",
  description: [
    "QA 테스터로 시작한 프론트엔드 개발자 박상훈입니다.",
    "배포 전에 사용자보다 먼저 겪어보는 습관은 그때 생겼습니다.",
    "지금은 한평생그룹에서 웹 디자이너와 2인 팀으로 ERP·취업 플랫폼·LMS 등 6개 서비스를 만들고 운영합니다.",
  ],
};

// ─────────────────────────────────────────────
// 푸터 정보
// ─────────────────────────────────────────────
export const footerInfo = {
  copyright: "© 2026 SangHunPark. All Rights Reserved.",
  credit: "coded by : PSH",
  question: "배포 전에 먼저 깨뜨려 보는 개발자입니다. 언제든지 연락주세요.",
  email: "bp4sp4@naver.com",
  brand: "SangHun's Web Portfolio",
};

// ─────────────────────────────────────────────
// 기술 스택 (홈 ~/skills 섹션 · 이력서와 같은 구성)
// where: 그 기술을 실제로 쓴 프로젝트 — 검토자가 근거를 바로 찾을 수 있게
// ─────────────────────────────────────────────
export const stack = [
  {
    group: "Frontend",
    items: ["React 19", "Next.js 15·16 (App Router)", "TypeScript", "Tailwind CSS 4", "CSS Modules"],
    where: "전 프로젝트",
  },
  {
    group: "UI · 퍼블리싱",
    items: ["시맨틱 마크업", "반응형 · 모바일 우선", "웹 접근성", "크로스 브라우저", "GSAP", "Framer Motion"],
    where: "한평생유학 · 에듀바이저스 · 바로기업 · 이 포트폴리오",
  },
  {
    group: "Data",
    items: ["Supabase (PostgreSQL · Auth · RLS)", "Server Actions", "Route Handlers", "Vercel Cron"],
    where: "한평생오피스 · 바로취업 · 직업훈련 LMS",
  },
  {
    group: "연동",
    items: ["PayApp · 나이스페이", "고용24 API", "신한은행 오픈API", "Claude API", "알림톡 · SMS"],
    where: "한평생오피스 · 바로취업 · 직업훈련 LMS · 한평생유학",
  },
  {
    group: "협업 · 배포",
    items: ["Git · GitHub", "Figma", "Vercel", "Cloudflare", "AWS S3"],
    where: "디자이너와 Figma 시안 협업 · Vercel 배포",
  },
];
