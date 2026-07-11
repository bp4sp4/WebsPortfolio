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
    date: "2021. 04 — 2022. 04",
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
      "시멘틱 마크업과 모던 CSS, React/Next.js를 활용한 반응형 웹 애플리케이션 개발",
    tags: ["HTML5", "CSS3", "TypeScript", "React", "Next.js"],
  },
  {
    icon: "fas fa-server",
    title: "풀스택 개발",
    description:
      "Next.js 기반 풀스택 개발, API Routes 설계 및 서버 사이드 렌더링",
    tags: ["Next.js", "API Routes", "SSR", "TypeScript", "REST API"],
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
      "Framer Motion, CSS 애니메이션을 활용한 인터랙티브 웹 경험 구현",
    tags: ["Framer Motion", "CSS Animation", "GSAP", "Magic UI"],
  },
  {
    icon: "fas fa-tools",
    title: "개발 도구",
    description: "Git 버전 관리, CI/CD 파이프라인 및 클라우드 배포 환경 구성 데이터베이스 관리",
    tags: ["Git", "GitHub", "VS Code", "Vercel", "Supabase"],
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
  tagline: "유능한 웹개발자, QA 를 찾고 있으신가요?",
  description: [
    "새로운 기술을 습득하는 것에 대한 두려움이 없는 웹개발자, QA 박상훈 입니다.",
    "다양한 프로젝트 경험과 기술적 역량을 바탕으로 나만의 홈페이지를 만들어 가고 있습니다.",
    "저의 성장과 발전을 함께할 동료를 기대합니다.",
  ],
};

// ─────────────────────────────────────────────
// 푸터 정보
// ─────────────────────────────────────────────
export const footerInfo = {
  copyright: "© 2026 SangHunPark. All Rights Reserved.",
  credit: "coded by : PSH",
  question: "배움에는 끝이 없다고 생각합니다. 언제든지 연락주세요!",
  email: "bp4sp4@naver.com",
  brand: "SangHun's Web Portfolio",
};
