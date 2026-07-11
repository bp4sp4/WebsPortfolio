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
