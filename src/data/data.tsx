// data.tsx - 포트폴리오 데이터 파일

// 개발자 정보
export const developerInfo = {
  name: "박상훈",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  passion: "창의적인 웹 경험",
  motto: "배움에 끝은 없다!",
};

// 경력 사항
export const experiences = [
  {
    date: "22.02",
    info: "대림대학교 컴퓨터정보학부 졸업",
  },
  {
    date: "22.04",
    info: "와이즈스터디 앱,웹 QA테스터 근무 (21.10 ~ 22.04)",
  },
  {
    date: "22.05",
    info: "한국 ICT인재개발원 (22.05 ~ 22.12)",
  },
  {
    date: "23.02",
    info: "새롱정보시스템 시빅데이터그룹파트원 (23.02 ~ 23.05)",
  },
];

// 스킬 정보
export const skills = [
  {
    title: "프론트엔드",
    description:
      "HTML, CSS, JavaScript, React, Next.js를 활용한 반응형 웹사이트 개발",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
    level: 80,
  },
  {
    title: "백엔드",
    description:
      "Spring Boot와 Next.js를 활용한 서버 개발, API 설계 및 데이터베이스 관리",
    tags: ["Next.js", "Spring Boot", "TypeScript", "Oracle", "MySQL"],
    level: 75,
  },
  {
    title: "디자인 도구",
    description: "UI/UX 디자인과 프로토타이핑 도구 활용",
    tags: ["Figma"],
    level: 100,
  },
  {
    title: "개발 도구",
    description: "버전 관리와 개발 환경 설정",
    tags: ["Git", "GitHub", "VS Code", "Eclipse", "Vercel"],
    level: 85,
  },
];

// 프로젝트 정보
export const projects = [
  {
    id: "pinkshop",
    title: "PinkShop",
    date: "25.03.25 ~ 25.04.01",
    description:
      "핑크숍은 Figma 기반의 디자인을 정교하게 구현하여 퍼블리싱 작업을 진행하는 데 중점을 두었습니다. 반응형 레이아웃과 시멘틱 HTML, CSS 모듈을 활용해 UI를 완성했고 퍼블리싱 작업을 진행했습니다.",
    tags: ["Next.js", "Vercel", "TypeScript", "UI/UX"],
    image: "/main/work__gif/pinkshop.gif",
    gifImage: "/main/work__gif/pinkshop.gif",
    github: "https://github.com/bp4sp4/pinkshoppingmall",
    demo: "https://pinkshoppingmall.vercel.app/",
    detailDescription:
      "Figma의 디자인 시스템을 코드로 구현하는 과정에서 디자인 일관성을 유지하면서도 웹 접근성과 사용자 경험을 최적화하는 데 중점을 두었습니다. 이를 통해 퍼블리셔의 새로운 기술력을 발전시킬 수 있었습니다.",
  },
  {
    id: "interactui",
    title: "InteractUI,",
    date: "25.03.04 ~ 25.03.12",
    description:
      "InteractUI는 사용자 경험을 극대화하는 인터랙티브한 홈페이지입니다. 최신 기술과 트렌드를 반영하여 직관적이고 감각적인 웹 인터페이스를 구축하는 데 집중하고 있으며, 반응형 디자인과 동적인 인터랙션을 통해 사용자와 웹 간의 자연스러운 상호작용을 제공합니다.",
    tags: ["React", "Magic UI", "Aceternity UI", "Vercel", "Framer Motion"],
    image: "/main/work__gif/uidesign.gif",
    gifImage: "/main/work__gif/uidesign.gif",
    github: "https://github.com/bp4sp4/notinghomepage",
    demo: "https://notinghomepage.vercel.app/",
  },
  {
    id: "tmmedia",
    title: "(주)TM media",
    date: "24.12.10 ~ 24.12.17",
    description:
      "TM 미디어 퍼블리싱은 HTML, CSS, JavaScript를 활용하여 사용자 친화적이고 기능적인 웹페이지를 제작했습니다. 반응형 디자인을 통해 다양한 디바이스 환경에서도 최적의 사용자 경험을 제공합니다.",
    tags: ["Publishing", "HTML5", "CSS3", "Javascript"],
    image: "/main/work__gif/tmgif.gif",
    gifImage: "/main/work__gif/tmgif.gif",
    github: "https://github.com/bp4sp4/TM-Media",
    demo: "https://tmmedia.co.kr/",
  },
  {
    id: "WeddingLery",
    title: "WeddingLery",
    date: "23.11.01 ~ 23.12.06",
    description:
      "웨딩러리는 웨딩관련팁, 계획, 영상을 통해 제공하여 방문자들이 웨딩을 더 효율적으로 준비할 수 있도록 도움을 줄 수 있는 사이트 입니다. UX/UI를 디자인을 논의하기 위해 Figma를 활용했으며, Java, swiper.js, Html5/Css3 이용하여 UI 개발을 진행했습니다.",
    tags: ["SpringBoot", "HTML5", "CSS3", "Javascript"],
    image: "/main/work__gif/wedding-main.gif",
    gifImage: "/main/work__gif/wedding-main.gif",
    github: "https://github.com/bp4sp4/WeddingVideoPage",
    demo: "https://bp4sp4.github.io/WeddingVideoPage/",
  },
  {
    id: "htmlstudy",
    title: "HtmlStudy",
    date: "24.06.27 ~ 24.08.22",
    description:
      "개인 프로젝트로 HtmlStudy는 HTML과 CSS에 대한 소개를 제공하는 React 기반 웹 페이지입니다. 이 사이트는 웹 개발을 처음 접하는 사람들에게 HTML과 CSS의 기초 개념과 사용 방법을 쉽게 설명하고, 예제를 통해 더 깊이 이해할 수 있도록 돕는 것이 목표입니다",
    tags: ["React", "HTML5", "CSS3", "Htmlstudy"],
    image: "/main/work__gif/htmlstudy.gif",
    gifImage: "/main/work__gif/htmlstduy.gif",
    github: "https://github.com/bp4sp4/HtmlStudy",
    demo: "https://htmlstudy.co.kr/",
  },
  {
    id: "gallery",
    title: "Gallery",
    date: "25.02.25 ~ 25.02.27",
    description:
      "Next.js 기반으로 개발한 갤러리 홈페이지 미니 프로젝트입니다. HTML5, CSS3, TypeScript, Unsplash API를 활용해 동적 이미지 로딩과 반응형 레이아웃을 구현했습니다. 사용자 경험(UX)을 고려한 디자인으로 다양한 디바이스 환경에서도 최적의 성능을 제공합니다.",
    tags: ["Next.js", "TypeScript", "HTML5", "CSS3", "JavaScript"],
    image: "/main/work__gif/grid.gif",
    gifImage: "/main/work__gif/grid.gif",
    github: "https://github.com/bp4sp4/CSSGrid",
    demo: "https://lolmoney.vercel.app//",
  },
];

// 프로젝트 상세 정보 타입 정의
export type ProjectDetailType = {
  id: string;
  title: string;
  period: string;
  tags: string[];
  mainImage: string;
  overview: string[];
  links: {
    github: string;
    demo: string;
  };
  goals: {
    icon: string;
    title: string;
    description: string;
  }[];
  screenshots: string[];
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

// 프로젝트 상세 정보 (인덱스 시그니처 추가)
export const projectDetails: { [key: string]: ProjectDetailType } = {
  // PinkShop 프로젝트 상세 정보
  pinkshop: {
    id: "pinkshop",
    title: "PinkShop",
    period: "25.03.25 ~ 25.04.01",
    tags: ["Next.js", "Vercel", "TypeScript", "UI/UX"],
    mainImage: "/detail__main/main__page__img/pinkshop__main.png",
    overview: [
      "핑크숍은 Figma 기반의 디자인을 정교하게 구현하여 퍼블리싱 작업을 진행하는 데 중점을 두었습니다. 반응형 레이아웃과 시멘틱 HTML, CSS 모듈을 활용해 UI를 완성했고 퍼블리싱 작업을 진행했습니다.",
      "Figma의 디자인 시스템을 코드로 구현하는 과정에서 디자인 일관성을 유지하면서도 웹 접근성과 사용자 경험을 최적화하는 데 중점을 두었습니다. 이를 통해 퍼블리셔의 새로운 기술력을 발전시킬 수 있었습니다.",
    ],
    links: {
      github: "https://github.com/bp4sp4/pinkshoppingmall",
      demo: "https://pinkshoppingmall.vercel.app/",
    },
    goals: [
      {
        icon: "fas fa-mobile-alt",
        title: "반응형 디자인",
        description:
          "모든 디바이스에서 최적의 사용자 경험을 제공하는 반응형 웹 디자인 구현",
      },
      {
        icon: "fas fa-universal-access",
        title: "웹 접근성",
        description: "다양한 사용자를 고려한 접근성 높은 웹사이트 개발",
      },
      {
        icon: "fas fa-bolt",
        title: "최적화",
        description: "빠른 로딩 속도와 부드러운 인터랙션을 위한 성능 최적화",
      },
      {
        icon: "fas fa-code",
        title: "모던 기술 스택",
        description:
          "Next.js와 TypeScript를 활용한 안정적이고 유지보수가 용이한 코드베이스 구축",
      },
    ],
    screenshots: [
      "/detail__main/page3imgs/pinkshop__main.png",
      "/detail__main/page3imgs/pinkshop__contents.png",
      "/detail__main/page3imgs/pinkshopdetail.png",
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: [
          { name: "Next.js", description: "React 기반의 풀스택 프레임워크" },
          {
            name: "TypeScript",
            description: "타입 안정성을 높인 자바스크립트",
          },
          { name: "CSS Modules", description: "컴포넌트 기반 스타일링" },
          { name: "Responsive Design", description: "다양한 디바이스 대응" },
        ],
      },
      {
        category: "배포 환경",
        items: [
          { name: "Vercel", description: "Next.js 애플리케이션 호스팅 플랫폼" },
          { name: "GitHub", description: "버전 관리 및 협업" },
        ],
      },
      {
        category: "디자인 도구",
        items: [
          { name: "Figma", description: "UI/UX 디자인 및 프로토타이핑" },
          { name: "Adobe Photoshop", description: "이미지 편집 및 최적화" },
        ],
      },
    ],
    challenges: [
      {
        title: "Figma 디자인 일관성 유지",
        challenge:
          "Figma에서 디자인된 다양한 컴포넌트의 일관성을 코드로 옮길 때 디자인 시스템 구축이 필요했습니다.",
        solution:
          "재사용 가능한 컴포넌트와 CSS 변수를 활용하여 디자인 토큰을 코드화했으며, 컴포넌트 라이브러리를 구축하여 일관된 UI를 유지했습니다.",
      },
      {
        title: "반응형 레이아웃 최적화",
        challenge:
          "다양한 화면 크기에서 동일한 사용자 경험을 제공하기 위한 복잡한 반응형 레이아웃 구현이 필요했습니다.",
        solution:
          "CSS Grid와 Flexbox를 조합하여 유연한 레이아웃을 구현했으며, 중단점(breakpoints)을 세밀하게 설정하여 모든 디바이스에서 최적화된 경험을 제공했습니다.",
      },
    ],
    outcome: [
      "이 프로젝트를 통해 Figma에서 디자인된 UI 컴포넌트를 정확하게 구현하고 웹 표준 및 접근성을 준수하는 프론트엔드 개발 역량을 향상시켰습니다.",
      "특히 Next.js와 TypeScript의 조합으로 타입 안정성이 높고 성능이 최적화된 웹 애플리케이션을 구축하는 경험을 쌓았습니다. 반응형 웹 디자인을 적용하여 다양한 기기에서 최적의 사용자 경험을 제공하도록 구현했으며, 픽셀 완벽성(Pixel Perfect)을 추구하며 디자인 의도를 정확히 구현하는 능력을 키웠습니다.",
      " Vercel을 활용한 배포 프로세스를 경험함으로써 개발부터 운영까지의 전체 웹 서비스 라이프사이클을 이해하게 되었으며, 사용자 중심의 디자인 사고방식과 기술적 구현 능력을 균형 있게 발전시킬 수 있었습니다. 이러한 종합적인 경험은 향후 프로젝트에서 UI/UX 개발 및 프론트엔드 아키텍처 설계에 큰 도움이 될 것입니다.",
    ],
  },

  // InteractUI 프로젝트 상세 정보
  interactui: {
    id: "interactui",
    title: "InteractUI,",
    period: "25.03.04 ~ 25.03.12",
    tags: ["React", "Magic UI", "Aceternity UI", "Vercel", "Framer Motion"],
    mainImage: "/detail__main/main__page__img/InteractUI__main.png",
    overview: [
      "InteractUI는 사용자 경험을 극대화하는 인터랙티브한 홈페이지입니다. 최신 기술과 트렌드를 반영하여 직관적이고 감각적인 웹 인터페이스를 구축했습니다.",
      "반응형 디자인과 동적인 인터랙션을 통해 사용자와 웹 간의 자연스러운 상호작용을 제공합니다.",
    ],
    links: {
      github: "https://github.com/bp4sp4/notinghomepage",
      demo: "https://notinghomepage.vercel.app/",
    },
    goals: [
      {
        icon: "fas fa-palette",
        title: "독창적인 디자인",
        description: "차별화된 시각적 경험을 제공하는 독창적인 디자인 구현",
      },
      {
        icon: "fas fa-magic",
        title: "인터랙티브 요소",
        description: "사용자 참여를 유도하는 다양한 인터랙티브 요소 개발",
      },
      {
        icon: "fas fa-tachometer-alt",
        title: "성능 최적화",
        description: "애니메이션 효과에도 최적의 성능을 유지하는 웹사이트 구현",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "반응형 디자인",
        description: "모든 디바이스에서 완벽하게 작동하는 반응형 레이아웃 구현",
      },
    ],
    screenshots: [
      "/detail__main/page3imgs/UI__main.png",
      "/detail__main/page3imgs/UI__contents.png",
      "/detail__main/page3imgs/UI__footer.png",
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: [
          {
            name: "React",
            description: "사용자 인터페이스 구축을 위한 JavaScript 라이브러리",
          },
          {
            name: "Framer Motion",
            description: "React 애니메이션 라이브러리",
          },
          {
            name: "Magic UI",
            description: "현대적인 UI 컴포넌트 및 애니메이션 효과 라이브러리",
          },
          {
            name: "Aceternity UI",
            description: "인터랙티브한 웹 경험을 위한 UI 컴포넌트 모음",
          },
        ],
      },
      {
        category: "배포 환경",
        items: [
          {
            name: "Vercel",
            description: "프론트엔드 애플리케이션 호스팅 플랫폼",
          },
          {
            name: "GitHub",
            description: "버전 관리 및 협업",
          },
        ],
      },
      {
        category: "디자인 도구",
        items: [
          {
            name: "Figma",
            description: "UI/UX 디자인 및 프로토타이핑",
          },
        ],
      },
    ],
    challenges: [
      {
        title: "복잡한 인터랙션 구현",
        challenge:
          "다양한 인터랙티브 요소를 구현하면서 성능과 사용자 경험 간의 균형 유지가 어려웠습니다.",
        solution:
          "Framer Motion과 최적화된 컴포넌트 구조를 활용하여 성능을 유지하면서도 부드러운 애니메이션을 구현했습니다.",
      },
      {
        title: "반응형 디자인 최적화",
        challenge:
          "복잡한 인터랙티브 요소들이 모든 디바이스에서 일관되게 작동하도록 만드는 것이 과제였습니다.",
        solution:
          "세밀한 미디어 쿼리와 디바이스별 최적화를 통해 모든 화면 크기에서 완벽하게 작동하는 인터페이스를 구현했습니다.",
      },
    ],
    outcome: [
      "핑크숍 프로젝트는 Figma 기반의 디자인을 정교하게 코드로 구현하며 퍼블리싱 역량을 강화하는 데 중점을 두었습니다.",
      "반응형 웹 디자인을 통해 모바일, 태블릿, 데스크톱 등 다양한 기기에서 최적의 사용자 경험을 제공하며, 픽셀 완벽한 구현을 목표로 작업했습니다.",

      "이를 통해 디자인과 기술적 구현의 균형을 맞추며 퍼블리셔로서의 종합적인 역량을 증진했습니다.",
      "Vercel 배포까지 경험하며 실제 운영 가능한 수준의 웹사이트를 완성했고, 성능 최적화와 SEO 개선을 통해 사용자 중심의 서비스를 제공했습니다.",
    ],
  },
  // 커뮤니티 플랫폼 프로젝트 상세 정보
  tmmedia: {
    id: "tmmedia",
    title: "(주)TM media",
    period: "24.10.10 ~ 24.12.05",
    tags: ["Publishing", "HTML5", "CSS3", "Javascript"],
    mainImage: "/detail__main/main__page__img/tm__main.png",
    overview: [
      "TM 미디어 퍼블리싱은 HTML, CSS, JavaScript를 활용하여 사용자 친화적이고 기능적인 웹페이지를 제작했습니다.",
      "반응형 디자인을 통해 다양한 디바이스 환경에서도 최적의 사용자 경험을 제공합니다.",
    ],
    links: {
      github: "https://github.com/bp4sp4/TM-Media",
      demo: "https://tmmedia.co.kr/",
    },
    goals: [
      {
        icon: "fas fa-laptop",
        title: "사용자 친화적 디자인",
        description: "직관적인 UI/UX를 통한 편리한 사용자 경험 제공",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "반응형 웹 디자인",
        description: "다양한 디바이스에 최적화된 레이아웃 구현",
      },
      {
        icon: "fas fa-code",
        title: "클린 코드 작성",
        description: "유지보수가 용이한 구조화된 코드 작성",
      },
      {
        icon: "fas fa-tachometer-alt",
        title: "성능 최적화",
        description: "빠른 로딩 속도와 효율적인 리소스 관리 구현",
      },
    ],
    screenshots: [
      "/detail__main/page3imgs/tm_main.png",
      "/detail__main/page3imgs/tm_business.png",
      "/detail__main/page3imgs/tm_product.png",
    ],
    technologies: [
      {
        category: "퍼블리싱",
        items: [
          { name: "HTML5", description: "시맨틱 마크업 구조 활용" },
          { name: "CSS3", description: "모던 레이아웃 및 스타일링" },
          { name: "JavaScript", description: "동적 기능 및 인터랙션 구현" },
        ],
      },
      {
        category: "반응형 디자인",
        items: [
          { name: "Media Queries", description: "디바이스별 최적화 레이아웃" },
          { name: "Flexbox", description: "유연한 레이아웃 시스템" },
          { name: "Grid Layout", description: "복잡한 레이아웃 구성" },
        ],
      },
      {
        category: "개발 도구",
        items: [
          { name: "Git", description: "버전 관리 시스템" },
          { name: "VS Code", description: "코드 에디터" },
          { name: "Chrome DevTools", description: "테스트 및 디버깅" },
        ],
      },
    ],
    challenges: [
      {
        title: "반응형 이미지 최적화",
        challenge:
          "다양한 화면 크기에서 이미지 품질과 로딩 속도 간 균형을 맞추기 어려웠습니다.",
        solution:
          "srcset 속성과 미디어 쿼리를 활용한 이미지 최적화 전략을 구현하고, 지연 로딩 기법을 적용하여 페이지 로딩 속도를 개선했습니다.",
      },
      {
        title: "복잡한 레이아웃 구현",
        challenge:
          "다양한 콘텐츠와 요소를 포함한 복잡한 레이아웃을 구현하는 데 어려움이 있었습니다.",
        solution:
          "CSS Grid와 Flexbox를 효과적으로 조합하여 레이아웃을 구성하고, 섹션별 모듈화된 접근 방식으로 유지보수성을 향상시켰습니다.",
      },
    ],
    outcome: [
      "이 프로젝트를 통해 HTML5, CSS3, JavaScript를 활용한 모던 웹 퍼블리싱 역량을 강화했습니다. 특히 반응형 디자인 구현과 크로스 브라우저 호환성 확보에 관한 실무 경험을 쌓았습니다.",
      "클라이언트의 요구사항을 정확히 구현하면서도 사용자 경험을 최우선으로 고려한 웹사이트를 제작하여 긍정적인 피드백을 받았습니다. 향후 애니메이션 효과와 접근성 개선을 추가할 예정입니다.",
    ],
  },

  // 데이터 대시보드 프로젝트 상세 정보
  WeddingLery: {
    id: "WeddingLery",
    title: "WeddingLery",
    period: "23.11.01 ~ 23.12.06",
    tags: ["SpringBoot", "HTML5", "CSS3", "Javascript"],
    mainImage: "/detail__main/main__page__img/weddinglery__main.png",
    overview: [
      "웨딩러리는 웨딩관련팁, 계획, 영상을 통해 방문자들이 웨딩을 더 효율적으로 준비할 수 있도록 도움을 제공하는 사이트입니다.",
      "UX/UI 디자인을 위해 Figma를 활용했으며, Java, swiper.js, Html5/Css3를 이용하여 UI 개발을 진행했습니다.",
    ],
    links: {
      github: "https://github.com/bp4sp4/WeddingVideoPage",
      demo: "https://bp4sp4.github.io/WeddingVideoPage/",
    },
    goals: [
      {
        icon: "fas fa-heart",
        title: "웨딩 정보 제공",
        description: "웨딩 관련 팁과 계획 정보를 체계적으로 제공",
      },
      {
        icon: "fas fa-video",
        title: "영상 콘텐츠",
        description: "웨딩 준비에 도움이 되는 다양한 영상 콘텐츠 제공",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "반응형 디자인",
        description: "다양한 디바이스에서 최적화된 사용자 경험 제공",
      },
      {
        icon: "fas fa-paint-brush",
        title: "직관적인 UI",
        description: "사용자 친화적인 인터페이스로 정보 접근성 향상",
      },
    ],
    screenshots: [
      "/detail__main/page3imgs/videostop5__pc.png",
      "/detail__main/page3imgs/videostop5__pad.png",
      "/detail__main/page3imgs/videostop5__phone.png",
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: [
          { name: "HTML5", description: "웹 페이지 구조 설계" },
          { name: "CSS3", description: "스타일링 및 레이아웃" },
          { name: "JavaScript", description: "동적 기능 구현" },
          { name: "Swiper.js", description: "슬라이더 및 캐러셀 구현" },
        ],
      },
      {
        category: "백엔드",
        items: [
          {
            name: "SpringBoot",
            description: "Java 기반 웹 애플리케이션 프레임워크",
          },
          { name: "Java", description: "서버 측 로직 구현" },
        ],
      },
      {
        category: "디자인 도구",
        items: [{ name: "Figma", description: "UX/UI 디자인 및 프로토타이핑" }],
      },
    ],
    challenges: [
      {
        title: "직관적인 사용자 경험 설계",
        challenge:
          "웨딩 정보와 영상을 효과적으로 배치하면서도 직관적인 사용자 경험을 제공하는 것이 과제였습니다.",
        solution:
          "Figma를 활용한 프로토타이핑과 사용자 피드백을 기반으로 정보 구조를 최적화하고, 시각적 계층 구조를 명확히 하여 사용자가 쉽게 원하는 정보를 찾을 수 있도록 설계했습니다.",
      },
      {
        title: "다양한 콘텐츠 유형의 통합",
        challenge:
          "텍스트 기반 정보, 이미지, 영상 등 다양한 형태의 콘텐츠를 하나의 일관된 인터페이스로 통합하는 것이 어려웠습니다.",
        solution:
          "Swiper.js를 활용하여 다양한 콘텐츠 형식을 일관된 방식으로 탐색할 수 있는 인터페이스를 구현하고, 반응형 디자인을 적용하여 모든 디바이스에서 최적의 사용자 경험을 제공했습니다.",
      },
    ],
    outcome: [
      "웨딩 준비를 위한 효율적이고 사용자 친화적인 정보 플랫폼을 성공적으로 구축했습니다. 특히 직관적인 UI 디자인과 다양한 콘텐츠 통합에 중점을 두었습니다.",
      "프로젝트를 통해 SpringBoot와 프론트엔드 기술을 결합한 웹 개발 역량을 향상시켰으며, 효과적인 UX/UI 디자인 방법론에 대한 이해를 넓혔습니다.",
      " 초기 모바일 화면에서의 메뉴 탐색 문제를 발견하고 이를 개선하기 위해 메뉴 구성과 동영상 배치를 단순화했으며, 클릭 가능한 요소의 크기를 최적화하여 가독성과 접근성을 크게 향상시켰습니다.",
      " 또한 콘텐츠 계층 구조를 재설계하고 네비게이션을 간소화하여 사용자가 원하는 정보를 더 빠르게 찾을 수 있도록 개선했습니다.",
      "이러한 사용자 중심 개선 작업을 통해 웹사이트 체류 시간이 증가했으며, 단순한 퍼블리싱을 넘어 사용자 관점에서의 디지털 경험 설계의 중요성을 깊이 이해하게 되었습니다.",
    ],
  },
  htmlstudy: {
    id: "htmlstudy",
    title: "HtmlStudy",
    period: "24.06.27 ~ 24.08.22",
    tags: ["React", "HTML5", "CSS3", "Htmlstudy"],
    mainImage: "/detail__main/main__page__img/htmlstudy__main.png",
    overview: [
      "개인 프로젝트로 HtmlStudy는 HTML과 CSS에 대한 소개를 제공하는 React 기반 웹 페이지입니다.",
      "이 사이트는 웹 개발을 처음 접하는 사람들에게 HTML과 CSS의 기초 개념과 사용 방법을 쉽게 설명하고, 예제를 통해 더 깊이 이해할 수 있도록 돕는 것이 목표입니다.",
    ],
    links: {
      github: "https://github.com/bp4sp4/HtmlStudy",
      demo: "https://htmlstudy.co.kr/",
    },
    goals: [
      {
        icon: "fas fa-book",
        title: "학습 자료 제공",
        description:
          "HTML과 CSS의 기초 개념을 쉽게 이해할 수 있는 학습 자료 제공",
      },
      {
        icon: "fas fa-code",
        title: "실용적인 예제",
        description: "직접 활용할 수 있는 실용적인 코드 예제 제공",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "반응형 디자인",
        description: "다양한 디바이스에서 최적화된 학습 경험 제공",
      },
      {
        icon: "fas fa-user-graduate",
        title: "초보자 친화적",
        description: "웹 개발 입문자도 쉽게 이해할 수 있는 콘텐츠 구성",
      },
    ],
    screenshots: [
      "/detail__main/page3imgs/html__main.png",
      "/detail__main/page3imgs/html__para.png",
      "/detail__main/page3imgs/html__skeleton.png",
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: [
          { name: "React", description: "사용자 인터페이스 구축" },
          { name: "HTML5", description: "웹 페이지 구조 설계" },
          { name: "CSS3", description: "스타일링 및 레이아웃" },
          { name: "JavaScript", description: "동적 기능 구현" },
        ],
      },
      {
        category: "개발 도구",
        items: [
          { name: "Git", description: "버전 관리 시스템" },
          { name: "VS Code", description: "코드 에디터" },
          { name: "npm", description: "패키지 관리자" },
        ],
      },
      {
        category: "배포",
        items: [
          { name: "GitHub Pages", description: "정적 웹사이트 호스팅" },
          { name: "Hosting KR", description: "도메인 구매 및 배포" },
        ],
      },
    ],
    challenges: [
      {
        title: "복잡한 개념의 단순화",
        challenge:
          "HTML과 CSS의 기술적 개념들을 초보자도 쉽게 이해할 수 있도록 설명하는 것이 과제였습니다.",
        solution:
          "시각적 예제와 단계별 가이드를 통해 복잡한 개념을 분해하고, 실생활 비유를 활용하여 직관적인 이해를 돕는 방식으로 콘텐츠를 구성했습니다.",
      },
      {
        title: "효과적인 학습 경로 설계",
        challenge:
          "다양한 배경과 학습 속도를 가진 사용자들을 위한 효과적인 학습 경로를 설계하는 것이 어려웠습니다.",
        solution:
          "기초부터 심화까지 단계별로 구성된 학습 경로를 제공하고, 사용자가 자신의 속도에 맞게 학습할 수 있는 모듈식 콘텐츠 구조를 개발했습니다. 또한 인터랙티브 예제를 통해 개념을 직접 실습할 수 있는 기회를 제공했습니다.",
      },
    ],
    outcome: [
      "웹 개발 입문자들을 위한 접근성 높은 학습 플랫폼을 성공적으로 구축했습니다. 특히 복잡한 개념을 쉽게 이해할 수 있는 콘텐츠 설계에 중점을 두었습니다.",
      "프로젝트를 진행하며 초보자의 입장에서 어떤 점이 어렵고 불편할 수 있는지 꾸준히 고민했고, 이를 해결하기 위해 학습의 흐름과 인터페이스를 지속적으로 개선했습니다. 초기에는 복잡한 내용을 단순히 나열하는 방식이었지만, 직접 사용해보며 더 직관적인 구조로 발전시켰습니다.",
      " 이 과정을 통해 기능 구현뿐만 아니라 사용자 경험을 중심으로 설계하는 역량을 키웠으며, HtmlStudy는 초보 개발자들이 웹 개발의 첫걸음을 자신감 있게 내딛는 데 도움이 되는 진심 어린 결과물이 되었습니다.",
    ],
  },
  gallery: {
    id: "gallery",
    title: "Gallery",
    period: "25.02.25 ~ 25.02.27",
    tags: ["Next.js", "TypeScript", "HTML5", "CSS3", "JavaScript"],
    mainImage: "/detail__main/main__page__img/gallery__main.png",
    overview: [
      "Next.js 기반으로 개발한 갤러리 홈페이지 미니 프로젝트입니다. HTML5, CSS3, TypeScript, Unsplash API를 활용했습니다.",
      "동적 이미지 로딩과 반응형 레이아웃을 구현했으며, 사용자 경험(UX)을 고려한 디자인으로 다양한 디바이스 환경에서도 최적의 성능을 제공합니다.",
    ],
    links: {
      github: "https://github.com/bp4sp4/CSSGrid",
      demo: "https://lolmoney.vercel.app//",
    },
    goals: [
      {
        icon: "fas fa-images",
        title: "시각적 갤러리",
        description: "다양한 이미지를 효과적으로 표시할 수 있는 갤러리 구현",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "반응형 디자인",
        description: "모든 디바이스에서 최적화된 레이아웃 제공",
      },
      {
        icon: "fas fa-bolt",
        title: "성능 최적화",
        description: "빠른 로딩 속도와 효율적인 리소스 관리",
      },
      {
        icon: "fas fa-th",
        title: "CSS Grid 레이아웃",
        description: "모던 레이아웃 기술을 활용한 효과적인 그리드 디자인",
      },
    ],
    screenshots: [
      "/detail__main/page3imgs/grid__desktop.png",
      "/detail__main/page3imgs/grid__desktop2.png",
      "/detail__main/page3imgs/grid__desktop3.png",
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: [
          { name: "Next.js", description: "React 기반 프레임워크" },
          { name: "TypeScript", description: "정적 타입 지원" },
          { name: "HTML5", description: "웹 페이지 구조 설계" },
          { name: "CSS3", description: "스타일링 및 레이아웃" },
        ],
      },
      {
        category: "API 및 통합",
        items: [
          { name: "Unsplash API", description: "고품질 이미지 소스" },
          { name: "Fetch API", description: "데이터 요청 및 처리" },
        ],
      },
      {
        category: "배포",
        items: [
          { name: "Vercel", description: "Next.js 애플리케이션 호스팅" },
          { name: "Git", description: "버전 관리 시스템" },
        ],
      },
    ],
    challenges: [
      {
        title: "효율적인 이미지 로딩",
        challenge:
          "다수의 고해상도 이미지를 효율적으로 로딩하면서 성능 저하를 방지하는 것이 과제였습니다.",
        solution:
          "Next.js의 이미지 최적화 기능과 지연 로딩 기법을 활용하여 필요한 시점에 이미지를 로드하는 방식을 구현했습니다. 또한 이미지 캐싱 전략을 적용하여 재방문 시 로딩 시간을 단축했습니다.",
      },
      {
        title: "반응형 그리드 레이아웃",
        challenge:
          "다양한 화면 크기에서 일관된 시각적 경험을 제공하는 그리드 레이아웃을 구현하는 것이 어려웠습니다.",
        solution:
          "CSS Grid와 미디어 쿼리를 활용하여 화면 크기에 따라 자동으로 조정되는 동적 그리드 시스템을 개발했습니다. 이미지 비율을 유지하면서도 다양한 화면 크기에 최적화된 레이아웃을 제공할 수 있었습니다.",
      },
    ],
    outcome: [
      "Next.js와 TypeScript를 활용하여 모던하고 성능이 최적화된 갤러리 웹사이트를 성공적으로 구현했습니다. 특히 CSS Grid를 활용한 반응형 레이아웃 구현 기술을 크게 향상시켰습니다.",
      "짧은 개발 기간에도 불구하고 효율적인 코드 구조와 성능 최적화에 중점을 두었으며, 이미지 로딩 최적화를 통해 사용자 경험을 개선했습니다. 이 프로젝트를 통해 Next.js 프레임워크의 활용 역량과 타입스크립트 기반 개발 경험을 쌓을 수 있었습니다.",
      "미니 프로젝트로 시작했지만 반응형 디자인과 최적화에 대한 깊은 이해를 얻을 수 있었고, 향후 이미지 검색 기능과 필터링 옵션을 추가하여 기능성을 확장할 계획입니다.",
    ],
  },
};

// 프로젝트 ID 배열 (네비게이션에 사용)
export const projectIds = [
  "pinkshop",
  "interactui",
  "tmmedia",
  "WeddingLery",
  "htmlstudy",
  "gallery",
];

// 이전 프로젝트 상세 정보 (하위 호환성 유지)
export const projectDetail = projectDetails.pinkshop;

// 연락처 정보
export const contactInfo = {
  email: "bp4sp4@naver.com",
  tagline: "유능한 웹개발자, QA 를 찾고 있으신가요?",
  description: [
    "새로운 기술을 습득하는 것에 대한 두려움이 없는 웹개발자, QA 박상훈 입니다.",
    "다양한 프로젝트 경험과 기술적 역량을 바탕으로 나만의 홈페이지를 만들어 가고 있습니다.",
    "저의 성장과 발전을 함께할 동료를 기대합니다.",
  ],
};

// 푸터 정보
export const footerInfo = {
  copyright: "© 2025 SangHunPark. All Rights Reserved.",
  credit: "coded by : PSH",
  question: "Did you have an interactive experience?",
  email: "bp4sp4@naver.com",
  brand: "InteractUI",
};
