// ─────────────────────────────────────────────
// 개발자 정보
// ─────────────────────────────────────────────
export const developerInfo = {
  name: "박상훈",
  role: "Web Developer",
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
    info: "한평생그룹 마케팅 개발본부 웹 개발자",
    type: "work" as const,
    icon: "fas fa-briefcase",
    current: true,
  },
  {
    date: "2023. 02 — 2023. 05",
    info: "새롱정보시스템 빅데이터그룹파트원",
    type: "work" as const,
    icon: "fas fa-briefcase",
  },
  {
    date: "2022. 05 — 2022. 12",
    info: "한국 ICT인재개발원",
    type: "education" as const,
    icon: "fas fa-laptop-code",
  },
  {
    date: "2021. 10 — 2022. 04",
    info: "와이즈스터디 앱,웹 QA테스터 근무",
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
    "QA 테스터로 시작해 풀스택 개발까지 온 웹 개발자 박상훈입니다.",
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
// 매니페스토 × 스택
// 문장(주장) 하나마다 그 문장을 뒷받침하는 스택(증거)을 붙인다.
// 순서: 설계 → 데이터 → 퍼블리싱 → 모션 → 워크플로 (skills 6그룹과 1:1에 가깝게)
// hi: true 인 항목은 흰색으로 강조, 나머지는 회색.
// ─────────────────────────────────────────────
export const manifesto = [
  {
    statement: "화면을 그리는 게 아니라, 사용자의 흐름을 설계합니다.",
    label: "design · frontend",
    stack: [
      { name: "Figma", hi: true },
      { name: "Prototyping" },
      { name: "Design System", hi: true },
      { name: "Responsive" },
      { name: "React", hi: true },
      { name: "Next.js", hi: true },
    ],
  },
  {
    statement: "화면 뒤의 데이터 흐름까지 설계해야, 화면이 거짓말하지 않습니다.",
    label: "data · backend",
    stack: [
      { name: "Supabase", hi: true },
      { name: "PostgreSQL", hi: true },
      { name: "Auth · RLS" },
      { name: "Server Actions" },
      { name: "외부 API 연동" },
    ],
  },
  {
    statement: "픽셀 하나의 어긋남도 결국 사용자는 느낍니다. 그래서 끝까지 맞춥니다.",
    label: "craft · publishing",
    stack: [
      { name: "HTML5", hi: true },
      { name: "CSS3", hi: true },
      { name: "Tailwind CSS" },
      { name: "Pixel Perfect", hi: true },
      { name: "SEO" },
    ],
  },
  {
    statement: "QA에서 시작한 습관 하나, 배포 전에 사용자보다 먼저 겪어봅니다.",
    label: "qa · reliability",
    stack: [
      { name: "사용자 인터뷰", hi: true },
      { name: "Cross-Browser" },
      { name: "웹 접근성" },
      { name: "Mock 모드 테스트" },
      { name: "실운영 모니터링", hi: true },
    ],
  },
  {
    statement: "움직임은 장식이 아니라, 시선을 안내하는 문장입니다.",
    label: "motion · interaction",
    stack: [
      { name: "GSAP", hi: true },
      { name: "ScrollTrigger", hi: true },
      { name: "Lenis" },
      { name: "Framer Motion" },
      { name: "CSS Animation" },
    ],
  },
  {
    statement: "기획·디자인·코드가 한 호흡으로 이어질 때, 좋은 웹이 됩니다.",
    label: "workflow · tools",
    stack: [
      { name: "Git", hi: true },
      { name: "GitHub" },
      { name: "Vercel", hi: true },
      { name: "Cloudflare" },
      { name: "Claude Code", hi: true },
    ],
  },
];
