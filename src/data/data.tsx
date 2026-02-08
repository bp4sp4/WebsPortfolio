// data.tsx - 포트폴리오 데이터 파일

// 개발자 정보
export const developerInfo = {
  name: "박상훈",
  role: "Frontend Developer",
  skills: ["React", "Next.js", "TypeScript", "CSS", "HTML"],
  tools: ["Supabase", "Git", "Vercel"],
  passion: "창의적인 웹 경험",
  motto: "배움에 끝은 없다!",
  // typingSpeed (ms) used by Header's typewriter effect. Lower = faster typing.
  typingSpeed: 15,
};

// 경력 사항
export const experiences = [
    {
    date: "2025. 04 — 현재 재직 중",
    info: "한평생교육원 개발본부 | 웹 개발자 (25.04 ~ 26.02)",
  },
  {
    date: "2023. 02 — 2023. 05",
    info: "새롱정보시스템 시빅데이터그룹파트원 (23.02 ~ 23.05)",
  },
  {
    date: "2022. 05 — 2022. 12",
    info: "한국 ICT인재개발원 (22.05 ~ 22.12)",
  },
  {
    date: "2021. 04 — 2022. 04",
    info: "와이즈스터디 앱,웹 QA테스터 근무 (21.10 ~ 22.04)",
  },
  {
    date: "2022. 02",
    info: "대림대학교 컴퓨터정보학부 졸업",
  },
  {
    date: "2022. 04",
    info: "와이즈스터디 앱,웹 QA테스터 근무 (21.10 ~ 22.04)",
  }
];

// 스킬 정보
export const skills = [
  {
    icon: "fas fa-code",
    title: "프론트엔드",
    description:
      "시멘틱 마크업과 모던 CSS, React/Next.js를 활용한 반응형 웹 애플리케이션 개발",
    tags: ["HTML5", "CSS3", "TypeScript", "React", "Next.js"],
    level: 85,
  },
  {
    icon: "fas fa-server",
    title: "풀스택 개발",
    description:
      "Next.js 기반 풀스택 개발, API Routes 설계 및 서버 사이드 렌더링",
    tags: ["Next.js", "API Routes", "SSR", "TypeScript", "REST API"],
    level: 70,
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX 디자인",
    description:
      "Figma를 활용한 와이어프레임, 프로토타이핑 및 디자인 시스템 구축",
    tags: ["Figma", "Responsive Design", "Prototyping"],
    level: 50,
  },
  {
    icon: "fas fa-magic",
    title: "인터랙션 & 애니메이션",
    description:
      "Framer Motion, CSS 애니메이션을 활용한 인터랙티브 웹 경험 구현",
    tags: ["Framer Motion", "CSS Animation", "GSAP", "Magic UI"],
    level: 80,
  },
  {
    icon: "fas fa-tools",
    title: "개발 도구",
    description: "Git 버전 관리, CI/CD 파이프라인 및 클라우드 배포 환경 구성 데이터베이스 관리",
    tags: ["Git", "GitHub", "VS Code", "Vercel", "Supabase"],
    level: 85,
  },
  {
    icon: "fas fa-mobile-alt",
    title: "퍼블리싱",
    description:
      "크로스 브라우저 호환성, 웹 접근성, 웹 표준을 준수한 정교한 퍼블리싱",
    tags: ["웹 접근성", "SEO", "Cross-Browser", "Pixel Perfect"],
    level: 90,
  },
];

// 프로젝트 정보
export const projects = [
  {
    id: "CRM",
    title: "CRM 시스템",
    date: "2025. 08. 26 ~ 현재",
    description:
      "엑셀과 수기 문서에 의존하던 복잡한 사내 행정 프로세스를 전사적 디지털 환경으로 전환했습니다. 파편화된 영업 및 인사 데이터를 하나의 시스템으로 통합 관리함으로써 수동 입력의 번거로움과 데이터 누락 가능성을 근본적으로 제거했으며, 결과적으로 업무의 정확도를 높이고 투명한 관리 체계를 확립했습니다.",
    tags: ["React", "Tailwind CSS 4", "TypeScript", "Supabase (PostgreSQL)"],
    image: "/main/work__gif/pinkshop.gif",
    gifImage: "/main/work__gif/pinkshop.gif",
    github: "https://github.com/bp4sp4/NMS-System",
    demo: "https://nms-system.vercel.app",
    detailDescription:
      "Figma의 디자인 시스템을 코드로 구현하는 과정에서 디자인 일관성을 유지하면서도 웹 접근성과 사용자 경험을 최적화하는 데 중점을 두었습니다. 이를 통해 퍼블리셔의 새로운 기술력을 발전시킬 수 있었습니다.",
  },
    {
    id: "care",
    title: "한평생 요양보호사교육원",
    date: "2025.12.05 ~ 2025.12.10",
    description:
      "본 프로젝트는 동일한 코드베이스를 유지한 채 회사명·로고·텍스트·이미지 등 일부 데이터만 교체하여  다른 요양회사에 빠르게 납품할 수 있도록 템플릿화할 계획인 프로젝트입니다.",
    tags: ["React", "CSS Modules", "TypeScript", "UI/UX"],
    image: "/main/work__gif/pinkshop.gif",
    gifImage: "/main/work__gif/pinkshop.gif",
    github: "https://github.com/bp4sp4/caving_demo",
    demo: "https://caving-demo.vercel.app/",
    detailDescription:
      "Figma의 디자인 시스템을 코드로 구현하는 과정에서 디자인 일관성을 유지하면서도 웹 접근성과 사용자 경험을 최적화하는 데 중점을 두었습니다. 이를 통해 퍼블리셔의 새로운 기술력을 발전시킬 수 있었습니다.",
  },
   {
    id: "care",
    title: "한평생 요양보호사교육원",
    date: "2025.12.05 ~ 2025.12.10",
    description:
      "본 프로젝트는 동일한 코드베이스를 유지한 채 회사명·로고·텍스트·이미지 등 일부 데이터만 교체하여  다른 요양회사에 빠르게 납품할 수 있도록 템플릿화할 계획인 프로젝트입니다.",
    tags: ["React", "CSS Modules", "TypeScript", "UI/UX"],
    image: "/main/work__gif/pinkshop.gif",
    gifImage: "/main/work__gif/pinkshop.gif",
    github: "https://github.com/bp4sp4/caving_demo",
    demo: "https://caving-demo.vercel.app/",
    detailDescription:
      "Figma의 디자인 시스템을 코드로 구현하는 과정에서 디자인 일관성을 유지하면서도 웹 접근성과 사용자 경험을 최적화하는 데 중점을 두었습니다. 이를 통해 퍼블리셔의 새로운 기술력을 발전시킬 수 있었습니다.",
  },
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
    figma:
      "https://www.figma.com/design/7dPx5W1nz4VdLMgs84G4Z8/%ED%95%91%ED%81%AC%EC%88%8D?node-id=0-1&p=f&t=fziTtiQUrxhBWbrc-0",
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
    figma?: string;
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
    CRM: {
    id: "CRM",
    title: "CRM 시스템",
    period: "2025. 08. 26 ~ 현재",
    tags: ["React", "Tailwind CSS 4", "TypeScript", "Supabase (PostgreSQL)"],
    mainImage: "/detail__main/main__page__img/pinkshop__main.png",
    overview: [
   "기존 영업팀이 개별적으로 관리하던 수십 개의 엑셀 파일 기반 보고 체계를 전면 디지털화하여, 데이터의 파편화와 수동 취합 과정에서 발생하는 비효율을 근본적으로 해결했습니다. 영업 현장에서 발생하는 실시간 데이터를 통합 플랫폼에 즉각 기록하게 함으로써 업무 누락을 방지하고, 인사 담당자가 즉시 데이터를 검토하여 정산까지 원스톱으로 처리할 수 있는 전사적 행정 워크플로우를 구축하는 데 집중했습니다.",
   "단순한 데이터 저장소를 넘어, 인사 팀의 정산 업무를 지원하기 위한 데이터 검증 및 관리 시스템 설계를 주도했습니다. QA 마인드셋을 바탕으로 입력 단계부터 엄격한 유효성 검사 로직을 적용하여 휴먼 에러를 차단했으며, 복잡한 정산 프로세스를 자동화된 대시보드로 시각화하여 행정 처리의 정확도와 속도를 동시에 확보했습니다. 이는 결과적으로 수기 관리의 불확실성을 없애고, 데이터에 기반한 신뢰도 높은 의사결정 환경을 제공하는 성과로 이어졌습니다."
    ],
    links: {
      github: "https://github.com/bp4sp4/NMS-System",
      demo: "https://nms-system.vercel.app",
    },
    goals: [
      {
        icon: "fas fa-database",
        title: "데이터 무결성 확보",
        description:
          "설계 바탕으로 철저한 예외 처리를 적용하여, 고객관리 시 데이터 누락이나 휴먼 에러가 없는 완벽한 무결성을 지향합니다.",
      },
      {
        icon: "fas fa-sync-alt",
        title: "워크플로우 자동화",
        description: "엑셀 기반의 반복적인 수기 보고 체계를 디지털화하여, 데이터 입력부터 정산까지 이어지는 업무 효율을 극대화합니다.",
      },
      {
        icon: "fas fa-chart-pie",
        title: "직관적인 관리 대시보드",
        description: "인사 팀, 영업팀 등 사용자 권한별로 필요한 핵심 지표를 한눈에 파악할 수 있는 직관적인 인터페이스를 제공합니다.",
      },
      {
        icon: "fas fa-shield-alt",
        title: "안정적인 아키텍처",
        description:
          "Next.js와 TypeScript를 활용하여 대량의 비즈니스 데이터를 안전하게 처리하고, 유지보수가 용이한 코드를 구축합니다.",
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
          { name: "Tailwind CSS", description: "유틸리티 기반 CSS 프레임워크" },
          { name: "PostCSS", description: "CSS 후처리기" },
        ],
      },
      {
        category: "배포 환경 및 데이터베이스",
        items: [
          { name: "Vercel", description: "Next.js 애플리케이션 호스팅 플랫폼" },
          { name: "Supabase", description: "PostgreSQL 기반의 백엔드 서비스" },
        ],
      },
      {
        category: "파일 및 유틸리티 도구",
        items: [
          { name: "PDF.js", description: "PDF 렌더링 및 뷰어 라이브러리" },
          { name: "XLSX", description: "엑셀 파일 처리 라이브러리" },
        ],
      },
    ],
    challenges: [
   {
  title: "대용량 파일 업로드 / 일괄처리 최적화",
  challenge: 
    "문제 : 엑셀(CSV) 형태의 대량 고객 데이터를 한 번에 등록할 때, 데이터가 정확히 입력되고 있는지 사용자가 확인하기 어렵고 대기 시간이 길어지는 불편함이 있었습니다.",
  solution: 
    "해결 : 서버사이드에서 데이터를 안정적으로 처리하도록 설계하고, 클라이언트에서는 현재 어떤 정보가 입력되고 있는지 실시간 상태를 화면에 노출했습니다. 이를 통해 사용자는 업로드 과정을 직관적으로 파악할 수 있게 되었고, 대량 데이터 처리의 심리적 대기 시간을 줄였습니다"
  },
   {
  title: "DB Role 기반의 세분화된 직급 권한 체계 구축",
  challenge: 
    "문제 : 관리자, 매니저, 영업사원 등 사용자 역할에 따라 접근 권한과 노출되는 데이터의 범위가 엄격히 제한되어야 했습니다. 특히 정산과 관련된 민감한 정보의 노출을 막는 것이 관건이었습니다.",
  solution: 
    "해결: 데이터베이스의 Role 필드를 활용하여 직급별 권한을 정의하고, 이를 기반으로 페이지 접근을 제어하는 보안 가직을 구현했습니다. 이를 통해 인사 팀은 모든 정산 데이터를, 영업사원은 본인 담당 데이터만 볼 수 있도록 관리 체계를 명확히 했습니다."
  },
  {
  title: "PDF 미리보기 도입 및 로딩 지연 방지",
  challenge: 
    "문제 : 웹에서 계약서 등 PDF 문서를 확인할 때 브라우저 호환성 문제로 내용이 깨지거나, 문서 로딩 중 화면이 일시적으로 멈추는 현상이 있었습니다.",
  solution: 
    "해결: PDF.js 라이브러리를 활용해 어떤 브라우저에서도 동일하게 문서가 보이도록 구현했습니다. 또한 지연 로딩(Lazy-loading) 방식을 적용하여, 사용자가 실제 문서를 클릭해 확인하는 시점에만 리소스를 불러오도록 설정해 전체 시스템의 초기 부하를 줄였습니다."
  },
    ],
    outcome: [
      "본 프로젝트를 통해 엑셀 기반의 방대한 과거 데이터를 유실 없이 통합하고, 이를 연도별·월별로 체계적으로 관리할 수 있는 그룹웨어 구조를 구축했습니다. 특히 데이터 관리 기반의 설계로 비즈니스 확장성을 확보했으며, QA 경험을 녹여낸 치밀한 예외 처리와 유효성 검사 로직을 도입하여 정산 프로세스에서 데이터 누락이나 휴먼 에러를 근본적으로 방지했습니다.",
      "단순히 시스템 구축에 그치지 않고, 과거 데이터부터 현재까지의 연속성을 보장하는 안정적인 DB 설계를 경험하며 프론트엔드 개발의 전 과정을 주도했습니다. 이러한 경험은 향후 대규모 비즈니스 데이터를 정교하게 다루고, 연도별 히스토리 추적이 필수적인 기업용 관리 시스템을 설계하는 데 있어 큰 밑거름이 될 것입니다.",
    ],
  },
  // 한평생요양원 프로젝트 상세 정보
    care: {
    id: "care",
    title: "한평생 요양보호사교육원",
    period: "25.03.25 ~ 25.04.01",
    tags: ["Next.js", "Vercel", "TypeScript", "UI/UX"],
    mainImage: "/detail__main/main__page__img/pinkshop__main.png",
    overview: [
    "[Next.js 기반의 고효율 확장형 아키텍처 구축] 본 프로젝트는 '한평생 요양보호사교육원'의 웹 서비스를 구축함과 동시에, 향후 다양한 파트너사에 신속하게 대응할 수 있는 화이트 라벨(White-label) 템플릿 제작을 목표로 진행되었습니다.",
    "핵심 전략: 동일한 로직의 코드베이스를 유지하되 데이터 주입만으로 브랜드 아이덴티티(로고, 컬러, 텍스트)를 즉각 변경할 수 있는 구조 설계에 집중했습니다.",
    "기술적 이점: * Next.js의 서버 사이드 렌더링(SSR) 및 정적 재생성(ISR)을 활용하여 교육원 노출을 위한 SEO(검색 최적화)를 극대화했습니다.",
    "공통 컴포넌트 구조화와 테마 시스템(Theming)을 적용하여, 신규 납품 시 개발 공수를 최소화하고 유지보수 효율을 높였습니다.",
    ],
    links: {
      github: "https://github.com/bp4sp4/caving_demo",
      demo: "https://caving-demo.vercel.app/",
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
        ],
      },
      {
        category: "디자인 도구",
        items: [
          { name: "Figma", description: "UI/UX 디자인 및 프로토타이핑" },
        ],
      },
    ],
    challenges: [
   {
  title: "효율적인 데이터 치환 및 템플릿화",
  challenge: 
    "동일한 코드베이스에서 회사별로 다른 데이터(로고, 텍스트, 이미지 등)를 관리하고, 이를 실수 없이 신속하게 교체할 수 있는 시스템이 필요했습니다.",
  solution: 
    "회사별 브랜드 정보를 담은 JSON 형태의 Config 파일을 설계하고, 이를 Context API나 상위 Props로 주입하는 데이터 중심 구조를 구축했습니다. 이를 통해 코드 수정 없이 데이터셋 교체만으로도 새로운 서비스 배포가 가능한 환경을 만들었습니다."
  },
   {
  title: "복잡한 반응형 환경에서의 사용자 경험(UX) 최적화",
  challenge: 
    "문제: 요양 서비스 특성상 모바일과 태블릿 사용 비중이 높아, 다양한 기기 환경에서도 레이아웃이 무너지지 않는 고도화된 반응형 대응이 필요했습니다.",
  solution: 
    "해결: CSS Grid와 Flexbox를 전략적으로 조합해 유연한 레이아웃을 구현했습니다. 특히 QA 관점에서 기기별 중단점(Breakpoints) 테스트를 거쳐 모바일 우선(Mobile-first)의 쾌적한 UX를 보장했습니다."
  },
    ],
    outcome: [
      "본 프로젝트를 통해 Next.js와 TypeScript를 활용한 고성능 확장형 아키텍처 구축 역량을 증명했습니다. 특히 데이터 관리 기반의 템플릿화 설계를 통해 비즈니스 확장성을 확보했으며, QA 경험을 녹여낸 치밀한 예외 처리로 다양한 환경에서 완결성 있는 사용자 경험을 구현했습니다.",
      "단순히 화면을 그리는 것을 넘어, 픽셀 단위의 정교한 UI 구현과 Vercel 기반의 안정적인 배포 프로세스까지 경험하며 프론트엔드 개발의 전 과정을 주도적으로 이끌었습니다. 이러한 경험은 향후 안정성과 효율성을 동시에 잡는 프론트엔드 설계자로서 기여하는 밑거름이 될 것입니다.",

    ],
  },
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
      figma:
        "https://www.figma.com/design/7dPx5W1nz4VdLMgs84G4Z8/%ED%95%91%ED%81%AC%EC%88%8D?node-id=0-1&p=f&t=fziTtiQUrxhBWbrc-0",
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
      figma: "",
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

};

// 프로젝트 ID 배열 (네비게이션에 사용)
export const projectIds = [
  "care",
  "pinkshop",
  "interactui",
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
  copyright: "© 2026 SangHunPark. All Rights Reserved.",
  credit: "coded by : PSH",
  question: "Did you have an interactive experience?",
  email: "bp4sp4@naver.com",
  brand: "InteractUI",
};
