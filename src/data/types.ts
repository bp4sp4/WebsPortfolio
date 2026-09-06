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
  description: string;
  tags: string[];
  gifImage: string;
  github: string;
  demo: string;
  figma?: string;
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
