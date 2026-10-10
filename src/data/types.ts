// ─────────────────────────────────────────────
// 포트폴리오 데이터 타입 정의
// ─────────────────────────────────────────────

export type ProjectDetail = {
  period: string;
  mainImage: string;
  images: string[];
  overview: string[];
  role: {
    type: string;
    /** 협업 구성 등 부제 (제목 아래 작은 글씨). 제목이 길어져 줄이 깨지지 않게 분리 */
    team?: string;
    parts: string[];
  };
  links: {
    github: string;
    demo: string;
    figma?: string;
  };
  goals: {
    icon: string;
    title: string;
    description: string;
    /** 이 섹션에 고정할 화면. 없으면 images를 섹션 수에 맞춰 자동 분배 */
    shots?: { src: string; tag?: string; caption?: string }[];
    /** 설명 아래에 보여줄 코드/프롬프트 스니펫 */
    snippet?: { title: string; code: string; note?: string };
    /** 화면을 소제목별로 묶어서 보여줄 때 (웹 = 세로 나열, 모바일 = 폰 프레임 격자) */
    groups?: { title: string; layout?: "web" | "mobile"; shots: { src: string; tag?: string; caption?: string }[] }[];
  }[];
  keyFeatures?: {
    icon: string;
    title: string;
    description: string;
    gif?: string;
    link?: string;
    category?: string;
  }[];
  technologies: {
    category: string;
    items: {
      name: string;
      description: string;
    }[];
  }[];
  /** 결과 섹션: Before → After diff. 있으면 metrics 타일 대신 diff + 숫자 한 줄로 렌더링 */
  changes?: {
    key: string;
    before: string;
    after: string;
  }[];
  metrics?: {
    value: string;
    label: string;
    icon: string;
  }[];
  challenges: {
    title: string;
    challenge: string;
    solution: string;
  }[];
  outcome: string[];
};

export type ProjectEntry = {
  id: string;
  type: "company" | "personal"; // 회사/개인 분류
  title: string;
  date: string;
  /** 상세 OVERVIEW 제목 (2줄 안에 들어가게 30자 안팎). 없으면 description 첫 문장을 사용 */
  headline?: string;
  description: string;
  tags: string[];
  gifImage: string;
  github: string;
  demo: string;
  figma?: string;
  /** 홈 프로젝트 화면 위에 띄우는 짧은 역할 배지 (예: "1인 개발 · 운영 중") */
  badge?: string;
  /** 홈 프로젝트 화면 뒤 배경색 (프로젝트 브랜드 톤의 연한 색) */
  tint?: string;
  /** 홈 대표작 스토리 (있으면 홈에서 "문제 → 해결" 스크롤 장면으로 크게 보여준다)
   *  problem: 줄 단위. { muted } 줄은 회색으로 흐리게 (흩어진 것들의 나열) */
  story?: {
    problem: (string | { muted: string })[];
    answer: string;
    web: string;
    phone?: string;
  };
  detail?: ProjectDetail; // 없으면 카드만 표시, 있으면 상세 페이지도 생성
};

export type ProjectDetailType = {
  id: string;
  title: string;
  period: string;
  tags: string[];
  mainImage: string;
  images: string[];
  overview: string[];
  role: {
    type: string;
    /** 협업 구성 등 부제 (제목 아래 작은 글씨). 제목이 길어져 줄이 깨지지 않게 분리 */
    team?: string;
    parts: string[];
  };
  links: {
    github: string;
    demo: string;
    figma?: string;
  };
  goals: {
    icon: string;
    title: string;
    description: string;
    /** 이 섹션에 고정할 화면. 없으면 images를 섹션 수에 맞춰 자동 분배 */
    shots?: { src: string; tag?: string; caption?: string }[];
    /** 설명 아래에 보여줄 코드/프롬프트 스니펫 */
    snippet?: { title: string; code: string; note?: string };
    /** 화면을 소제목별로 묶어서 보여줄 때 (웹 = 세로 나열, 모바일 = 폰 프레임 격자) */
    groups?: { title: string; layout?: "web" | "mobile"; shots: { src: string; tag?: string; caption?: string }[] }[];
  }[];
  keyFeatures?: {
    icon: string;
    title: string;
    description: string;
    gif?: string;
    link?: string;
    category?: string;
  }[];
  /** 결과 섹션: Before → After diff. 있으면 metrics 타일 대신 diff + 숫자 한 줄로 렌더링 */
  changes?: {
    key: string;
    before: string;
    after: string;
  }[];
  metrics?: {
    value: string;
    label: string;
    icon: string;
  }[];
  technologies: {
    category: string;
    items: {
      name: string;
      description: string;
    }[];
  }[];
  challenges: {
    title: string;
    challenge: string;
    solution: string;
  }[];
  outcome: string[];
};
