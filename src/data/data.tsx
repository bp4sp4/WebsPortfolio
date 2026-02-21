// ============================================================
// data.tsx - 포트폴리오 데이터 파일
// ============================================================
//
// ✅ 프로젝트 추가 방법: allProjects 배열에 항목 하나만 추가!
//    - projects(카드 목록), projectDetails(상세 페이지), projectIds(네비게이션)
//      모두 자동으로 만들어집니다.
//
// 📌 detail 없이 카드만 표시하려면 detail 필드를 아예 빼면 됩니다.
// ============================================================

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

// ─────────────────────────────────────────────
// 타입 정의
// ─────────────────────────────────────────────
type ProjectDetail = {
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

type ProjectEntry = {
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

// ─────────────────────────────────────────────────────────────────────────
// ✅ 프로젝트 데이터 - 새 프로젝트는 여기에만 추가하세요!
//
// 순서 = 카드 목록 순서 + 상세 페이지 이전/다음 프로젝트 순서
// ─────────────────────────────────────────────────────────────────────────
const allProjects: ProjectEntry[] = [
  {
    id: "BaroCompany",
    type: "company",
    title: "바로기업",
    date: "2025. 12 ~ 2026. 01.21",
    description:
      "정책자금·투자유치·창업 컨설팅 서비스를 소개하는 마케팅 사이트와 사내 상담 관리 어드민을 하나의 Next.js 플랫폼으로 통합했습니다. 광고 채널별 상담 유입 추적부터 이메일 자동 알림, 역할 기반 어드민까지 비즈니스 운영 전반을 디지털화했습니다.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Supabase", "GSAP"],
    gifImage: "/main/work__gif/파일명.gif",
    github: "https://github.com/bp4sp4/BaroCompany",
    demo: "https://xn--ok0bx6qu3cv5m.com/",
    detail: {
      period: "2025. 08 ~ 현재",
      mainImage: "/detail__main/main__page__img/파일명.png",
      images: [],
      overview: [
        "한평생 바로기업은 정책자금·투자유치·경영지원·창업교육 분야의 컨설팅 서비스를 제공하는 기업의 공개 마케팅 사이트와 사내 어드민 대시보드를 단일 Next.js 16 App Router 프로젝트로 통합한 플랫폼입니다. 당근·인스타그램 등 광고 채널에서 유입된 상담 신청자의 소스를 자동으로 추적하여 채널별 전환 효과를 측정할 수 있도록 설계했습니다.",
        "상담 신청이 접수되면 Brevo SMTP를 통해 담당자에게 HTML 이메일이 즉시 발송되고, 어드민 대시보드에서 상태·채널·날짜별로 필터링하며 관리할 수 있습니다. super_admin/admin 두 단계 권한 체계로 민감한 데이터 삭제 권한을 분리하여 운영 안전성을 확보했습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내) · 단독 개발",
        parts: [
          "프론트엔드 개발 100%",
          "마케팅 사이트 기획 및 퍼블리싱",
          "어드민 대시보드 설계 및 구현",
          "DB 설계 및 Supabase 연동",
          "이메일 알림 시스템 구축 (Brevo SMTP)",
        ],
      },
      links: {
        github: "https://github.com/bp4sp4/BaroCompany",
        demo: "https://xn--ok0bx6qu3cv5m.com/",
      },
      goals: [
        {
          icon: "fas fa-chart-bar",
          title: "광고 채널 성과 측정",
          description: "당근·인스타그램 등 각 광고 채널에서 유입된 상담 수를 추적하여 채널별 ROI를 데이터로 파악합니다.",
        },
        {
          icon: "fas fa-bell",
          title: "상담 즉시 알림 자동화",
          description: "상담 신청 즉시 Brevo SMTP로 HTML 이메일을 자동 발송하여 빠른 상담 대응 환경을 구축합니다.",
        },
        {
          icon: "fas fa-shield-alt",
          title: "역할 기반 접근 제어",
          description: "super_admin/admin 이중 권한 구조로 삭제 등 민감 작업을 제한하여 운영 데이터를 안전하게 보호합니다.",
        },
        {
          icon: "fas fa-layer-group",
          title: "마케팅·운영 통합 플랫폼",
          description: "공개 서비스 소개 페이지와 사내 어드민을 단일 코드베이스로 관리하여 유지보수 효율을 극대화합니다.",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-crosshairs",
          title: "광고 소스 추적 (ClickSourceTracker)",
          description: "URL 파라미터(source=instagram 등)를 파싱하여 상담 신청 데이터에 유입 채널을 자동 태깅. 채널별 상담 전환율을 대시보드에서 즉시 확인 가능.",
        },
        {
          icon: "fas fa-envelope",
          title: "이메일 자동 알림 (Brevo SMTP)",
          description: "상담 신청 시 Brevo SMTP·Resend를 통해 담당자에게 HTML 포맷 이메일이 즉시 발송. 리드 대응 속도를 높이는 운영 자동화.",
        },
        {
          icon: "fas fa-user-shield",
          title: "이중 권한 어드민 (super_admin / admin)",
          description: "일반 admin은 조회·필터링만, super_admin은 데이터 삭제까지 허용하는 2단계 Role 시스템으로 실수로 인한 데이터 손실 방지.",
        },
        {
          icon: "fas fa-filter",
          title: "상담 관리 대시보드",
          description: "상태(대기·진행·완료)·채널·날짜 범위로 필터링하고 엑셀로 내보내는 상담 관리 인터페이스. 페이지네이션으로 대량 데이터도 쾌적하게 처리.",
        },
        {
          icon: "fas fa-video",
          title: "반응형 비디오 배너",
          description: "useIsMobile() 훅으로 1023px 기준 모바일·데스크톱 별도 영상을 서빙. 미디어 프리로드로 첫 화면 로딩 성능 최적화.",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js 16", description: "App Router 기반 풀스택 프레임워크" },
            { name: "React 19", description: "최신 React 버전, 서버 컴포넌트 활용" },
            { name: "TypeScript 5", description: "타입 안정성을 갖춘 코드베이스" },
            { name: "Tailwind CSS 4", description: "유틸리티 기반 CSS 프레임워크" },
            { name: "GSAP 3", description: "스크롤 기반 인터랙션 애니메이션" },
            { name: "Swiper", description: "서비스 소개 캐러셀 슬라이더" },
          ],
        },
        {
          category: "이메일 & 알림",
          items: [
            { name: "Brevo SMTP", description: "상담 신청 시 HTML 이메일 자동 발송" },
            { name: "Resend", description: "이메일 전송 서비스" },
            { name: "Nodemailer", description: "SMTP 이메일 처리 라이브러리" },
          ],
        },
        {
          category: "백엔드 & 배포",
          items: [
            { name: "Supabase", description: "PostgreSQL 기반 인증·데이터베이스" },
            { name: "Vercel", description: "Next.js 최적화 호스팅 및 자동 배포" },
            { name: "XLSX", description: "상담 데이터 엑셀 내보내기" },
          ],
        },
      ],
      challenges: [
        {
          title: "광고 채널별 상담 소스 추적 구현",
          challenge:
            "당근·인스타그램 등 여러 광고 채널에서 동일한 랜딩 URL로 유입될 때, 어떤 채널에서 실제 상담 신청으로 이어졌는지 구분할 수 없어 마케팅 예산 최적화가 어려웠습니다.",
          solution:
            "ClickSourceTracker 컴포넌트를 구현하여 URL의 source 파라미터를 파싱하고, 상담 신청 데이터에 유입 채널을 자동으로 태깅했습니다. 어드민 대시보드에서 채널별 필터링과 통계를 확인할 수 있어 데이터 기반 마케팅 의사결정이 가능해졌습니다.",
        },
        {
          title: "이중 권한 어드민 설계",
          challenge:
            "일반 담당자도 상담 현황을 볼 수 있어야 하지만, 데이터 삭제 같은 민감한 작업은 관리자만 가능해야 했습니다. 단순한 로그인/비로그인 구분으로는 권한 세분화가 어려웠습니다.",
          solution:
            "Supabase의 Role 컬럼을 활용해 super_admin/admin 두 단계 권한 체계를 설계했습니다. 삭제 버튼은 super_admin 세션에서만 렌더링되며, 서버사이드에서도 Role을 재검증하여 클라이언트 우회를 원천 차단했습니다.",
        },
        {
          title: "반응형 비디오 배너 성능 최적화",
          challenge:
            "히어로 섹션에 자동재생 비디오를 사용하면서 모바일과 데스크톱에 다른 해상도 영상을 서빙해야 했고, 초기 로딩 시 비디오가 늦게 뜨는 UX 문제가 있었습니다.",
          solution:
            "useIsMobile() 커스텀 훅으로 뷰포트를 감지하여 화면 크기에 맞는 영상만 로드하고, preload 속성으로 미리 버퍼링하여 첫 화면에서 바로 재생되도록 최적화했습니다.",
        },
      ],
      outcome: [
        "광고 채널 소스 추적 기능 도입으로 당근·인스타그램 등 각 채널의 상담 전환 효과를 수치로 파악할 수 있게 되었습니다. 마케팅 담당자가 데이터를 기반으로 광고 예산을 조정할 수 있는 환경이 마련되었습니다.",
        "Next.js 16·React 19 등 최신 기술 스택을 실무에 적용하며 풀스택 개발 역량을 확장했습니다. Brevo SMTP 이메일 자동화와 이중 권한 어드민 설계를 통해 운영 자동화와 보안 설계 경험을 쌓았습니다.",
      ],
    },
  },
  // ──────────────────────────────────────────
  {
    id: "landingsite",
    type: "company",
    title: "마케팅 랜딩사이트 모음",
    date: "2025. 12 ~ 2026. 01.29",
    description:
      "당근·페이스북·인스타그램 광고와 연결되는 모바일 전용 랜딩페이지 8종입니다. 디자이너와 협업하여 주부·청년·여성 사장님·소상공인 등 타겟별 맞춤 메시지와 CTA를 구성, 실제 상담 전환을 극대화하는 퍼포먼스 마케팅 페이지들입니다.",
    tags: ["Next.js", "TypeScript", "모바일 전용", "마케팅 랜딩페이지", "Vercel"],
    gifImage: "/main/work__gif/파일명.gif",
    github: "#",
    demo: "https://recruit-jubu.vercel.app/",
    detail: {
      period: "2025. 06 ~ 2025. 12",
      mainImage: "",
      images: [],
      overview: [
        "당근·페이스북·인스타그램 SNS 광고와 연결되는 채용·정책자금 분야 모바일 전용 랜딩페이지 총 8종을 디자이너와 협업하여 기획·개발·배포했습니다. 모든 페이지는 SNS 광고를 통한 모바일 유입을 1순위로 설계되었으며, 타겟층(주부·청년·여성 사장님·소상공인)의 심리와 니즈에 맞는 메시지 구조와 CTA를 적용했습니다.",
        "디자이너가 각 타겟에 맞는 시안을 제작하면 개발자인 제가 Next.js로 빠르게 구현·배포하는 롤 분담 체계로 운영했습니다. 공통 컴포넌트 재사용 패턴 덕분에 후반부 페이지는 초반 대비 개발 속도가 크게 단축되었습니다. 정책자금 계산기(barocal)는 자가진단 기능으로 체류 시간과 상담 전환율을 동시에 높이는 인터랙티브 요소를 포함합니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내) · 2인 협업 (개발자 1 + 디자이너 1)",
        parts: [
          "프론트엔드 개발 100%",
          "디자이너 시안 기반 모바일 퍼블리싱",
          "당근·페이스북·인스타그램 광고 연동 랜딩 구조 설계",
          "Vercel 배포 및 도메인 연결",
        ],
      },
      links: {
        github: "#",
        demo: "https://recruit-jubu.vercel.app/",
      },
      goals: [
        {
          icon: "fas fa-bullseye",
          title: "상담 전환 극대화",
          description: "각 타겟층의 핵심 니즈에 집중한 메시지와 명확한 CTA 배치로 실제 상담 신청 전환율을 높입니다.",
        },
        {
          icon: "fas fa-mobile-alt",
          title: "모바일 퍼스트 설계",
          description: "전체 유입의 대부분이 SNS 광고를 통한 모바일인 환경에 맞춰 모든 페이지를 모바일 전용으로 최적화합니다.",
        },
        {
          icon: "fas fa-bolt",
          title: "빠른 초기 로딩",
          description: "Next.js SSG·이미지 최적화·코드 스플리팅으로 느린 모바일 네트워크에서도 빠른 첫 화면 렌더링을 보장합니다.",
        },
        {
          icon: "fas fa-copy",
          title: "컴포넌트 재사용",
          description: "공통 섹션(헤더·CTA·폼)을 모듈화하여 신규 랜딩 추가 시 개발 공수를 최소화하는 구조를 설계합니다.",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-female",
          title: "주부 채용 랜딩",
          description: "주부 대상 채용 상담 유도 랜딩페이지. 경력 단절 고민에 공감하는 헤드카피와 심플한 상담 신청 폼으로 구성.",
          link: "https://recruit-jubu.vercel.app/",
        },
        {
          icon: "fas fa-user-graduate",
          title: "청년 채용 랜딩",
          description: "20·30대 타겟 채용 상담 전환 페이지. 취업 고민에 공감하는 메시지와 Slack 연동 알림으로 빠른 상담 대응.",
          link: "https://recruit-youth.vercel.app/",
        },
        {
          icon: "fas fa-calculator",
          title: "정책자금 계산기",
          description: "사장님이 본인에게 맞는 정책자금 규모를 직접 계산해볼 수 있는 인터랙티브 자가진단 도구. 체류 시간 증가와 상담 전환을 동시에 공략.",
          link: "https://barocal.vercel.app/",
        },
        {
          icon: "fas fa-venus",
          title: "정책자금 — 여성 사장님",
          description: "여성 소상공인·사장님 타겟 정책자금 상담 랜딩. 여성 창업자 맞춤 혜택 강조 및 공감형 헤드카피 구성.",
          link: "https://barolanding-female.vercel.app/",
        },
        {
          icon: "fas fa-mars",
          title: "정책자금 — 40·50 남성 사장님",
          description: "40·50대 남성 사장님 타겟 정책자금 랜딩. 신뢰감을 주는 톤과 직관적인 CTA로 빠른 상담 연결 유도.",
          link: "https://barolanding-50man.vercel.app/",
        },
        {
          icon: "fas fa-store",
          title: "정책자금 — 소상공인",
          description: "소상공인 전반 타겟 정책자금 랜딩. 지원 자격·혜택을 쉬운 언어로 풀어낸 구조로 낮은 진입 장벽 설계.",
          link: "https://barosmb.vercel.app/",
        },
        {
          icon: "fas fa-store-alt",
          title: "정책자금 — 소상공인 v2",
          description: "소상공인 타겟 리뉴얼 버전. 사용자 피드백을 반영한 개선된 레이아웃과 강화된 CTA 구성으로 전환율 개선.",
          link: "https://smb-ver2.vercel.app/",
        },
        {
          icon: "fas fa-file-alt",
          title: "정책자금 상담 신청 (baroform)",
          description: "정책자금 상담을 원하는 사장님을 위한 전용 신청 폼 페이지. 간결한 입력 단계로 신청 이탈률을 최소화하고 빠른 상담 연결을 유도.",
          link: "https://baroform.vercel.app/",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js", description: "App Router 기반 SSG/SSR 페이지 생성" },
            { name: "TypeScript", description: "타입 안정성을 갖춘 코드베이스 유지" },
            { name: "CSS / CSS Modules", description: "모바일 전용 반응형 스타일링" },
          ],
        },
        {
          category: "배포 & 인프라",
          items: [
            { name: "Vercel", description: "각 랜딩페이지 독립 배포 및 도메인 연결" },
            { name: "GitHub", description: "페이지별 독립 리포지토리로 버전 관리" },
          ],
        },
      ],
      challenges: [
        {
          title: "타겟별 메시지 차별화와 빠른 납기",
          challenge:
            "채용·정책자금 각 타겟(주부, 청년, 여성, 소상공인 등)마다 공감 포인트와 CTA 메시지가 달라야 했고, 마케팅 일정에 맞춰 단기간 내 다수의 페이지를 완성해야 했습니다.",
          solution:
            "헤더·CTA·폼 등 반복 섹션을 공통 컴포넌트로 모듈화하고, 타겟별 데이터(텍스트·이미지)만 교체하는 구조로 설계했습니다. 이를 통해 후반 페이지로 갈수록 개발 속도가 눈에 띄게 빨라졌습니다.",
        },
        {
          title: "모바일 전용 환경에서의 성능 최적화",
          challenge:
            "유입 채널이 SNS 광고인 만큼 느린 모바일 네트워크에서도 첫 화면이 빠르게 로드되어야 상담 전환율이 유지됩니다.",
          solution:
            "Next.js Image 컴포넌트로 이미지를 WebP 변환·lazy load 처리하고, SSG로 페이지를 정적 생성하여 서버 응답 시간을 최소화했습니다. 불필요한 JS 번들을 제거해 LCP 지표를 개선했습니다.",
        },
      ],
      outcome: [
        "당근·페이스북·인스타그램에 실제 집행된 채용 2종·정책자금 6종, 총 8개의 모바일 전용 랜딩페이지를 마케팅 일정에 맞춰 납기 내 완료했습니다. 공통 컴포넌트 재사용 구조 덕분에 후반부 페이지는 초반 대비 개발 속도가 크게 단축되었습니다.",
        "디자이너와의 협업을 통해 시각적 완성도와 개발 속도를 동시에 확보하는 롤 분담의 효과를 실감했습니다. 또한 퍼포먼스 마케팅 환경에서 개발자가 타겟 설정·메시지 전략·전환 최적화까지 이해해야 한다는 점을 몸소 배우며, 비즈니스 지표를 염두에 둔 UI 설계 능력을 키웠습니다.",
      ],
    },
  },
  {
    id: "Eduvisors",
    type: "company",
    title: "한평생 에듀바이저스",
    date: "2025. 06. 09 ~ 2025. 12. 24",
    description:
      "교육기관의 홍보 사이트와 사내 운영 관리를 하나로 합친 풀스택 플랫폼입니다. 비개발자 직원도 팝업·상담·채용 공고를 직접 관리할 수 있는 어드민 대시보드를 구축하여 운영 효율을 크게 높였습니다.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "Supabase", "Zustand"],
    gifImage: "/main/work__gif/파일명.gif",
    github: "https://github.com/bp4sp4/korhrdbusiness",
    demo: "https://www.eduvisor.kr/",
    detail: {
      period: "2025. 06. 09 ~ 2025. 12. 24",
      mainImage: "/detail__main/main__page__img/파일명.png",
      images: ["/detail__main/page3imgs/파일명1.png"],
      overview: [
        "한평생 에듀바이저스는 교육기관의 공개 마케팅 사이트와 사내 운영 어드민을 하나의 Next.js 15 App Router 프로젝트로 통합한 풀스택 플랫폼입니다. 홈페이지·서비스 소개·채용 공고 등 공개 페이지와, 팝업·상담·공고를 관리하는 어드민 대시보드가 하나의 코드베이스에서 운영됩니다.",
        "비개발자 직원도 복잡한 배포 과정 없이 콘텐츠를 직접 수정할 수 있도록 TinyMCE 리치 에디터와 직관적인 CRUD 인터페이스를 제공했습니다. Slack 알림 연동으로 신규 상담 접수 시 담당자에게 실시간으로 통보되는 운영 자동화 워크플로우도 구현했습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내) · 2인 협업 (개발자 1 + 디자이너 1)",
        parts: ["프론트엔드 개발 100%", "어드민 대시보드 설계", "DB 설계 및 Supabase 연동", "디자이너와 첫 협업 — Figma 시안 기반 퍼블리싱"],
      },
      links: {
        github: "https://github.com/bp4sp4/korhrdbusiness",
        demo: "https://www.eduvisor.kr/",
      },
      goals: [
        {
          icon: "fas fa-layer-group",
          title: "통합 플랫폼 구축",
          description: "공개 마케팅 사이트와 사내 어드민을 단일 코드베이스로 통합하여 유지보수 비용을 최소화합니다.",
        },
        {
          icon: "fas fa-users-cog",
          title: "비개발자 친화적 어드민",
          description: "담당 직원이 코드 수정 없이 팝업·채용·상담 콘텐츠를 직접 관리할 수 있는 직관적 대시보드를 제공합니다.",
        },
        {
          icon: "fas fa-search",
          title: "SEO 최적화",
          description: "Next.js 15 SSR·ISR을 활용해 교육원의 검색 노출을 극대화하고 초기 로딩 성능을 개선합니다.",
        },
        {
          icon: "fas fa-bell",
          title: "운영 자동화",
          description: "상담 신청 시 Slack 알림·EmailJS 자동 발송으로 담당자가 놓치는 문의 없이 즉각 대응할 수 있도록 합니다.",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-window-restore",
          title: "팝업 관리 시스템",
          description: "Zustand 기반 전역 팝업 상태 관리로, 어드민에서 생성·수정·삭제한 팝업이 실시간으로 공개 사이트에 반영됩니다.",
        },
        {
          icon: "fas fa-comment-dots",
          title: "상담 신청 & Slack 알림",
          description: "사용자가 상담을 신청하면 EmailJS로 확인 메일이 발송되고, Slack 웹훅으로 담당자에게 즉시 알림이 전송됩니다.",
        },
        {
          icon: "fas fa-briefcase",
          title: "채용 공고 CRUD",
          description: "TinyMCE 리치 에디터로 채용 공고를 작성하고 Supabase에 저장, 공개 페이지에 즉시 반영하는 풀스택 콘텐츠 관리 기능입니다.",
        },
        {
          icon: "fas fa-shield-alt",
          title: "어드민 접근 제어",
          description: "Next.js 미들웨어와 Supabase Auth를 결합해 서버사이드에서 권한을 검증하여 어드민 페이지를 보호합니다.",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js 15", description: "App Router 기반 풀스택 프레임워크 (Turbopack)" },
            { name: "TypeScript", description: "타입 안정성을 높인 자바스크립트" },
            { name: "Tailwind CSS 4", description: "유틸리티 기반 CSS 프레임워크" },
            { name: "Framer Motion", description: "페이지 전환 및 UI 애니메이션" },
            { name: "Radix UI", description: "접근성 기반 헤드리스 UI 컴포넌트" },
          ],
        },
        {
          category: "상태관리 & 유틸리티",
          items: [
            { name: "Zustand", description: "경량 전역 상태 관리 (팝업·모달)" },
            { name: "TinyMCE", description: "채용 공고 작성용 리치 텍스트 에디터" },
            { name: "EmailJS", description: "서버 없이 클라이언트에서 이메일 발송" },
            { name: "XLSX", description: "엑셀 데이터 파싱 및 내보내기" },
          ],
        },
        {
          category: "백엔드 & 배포",
          items: [
            { name: "Supabase", description: "PostgreSQL 기반 인증·데이터베이스·스토리지" },
            { name: "Vercel", description: "Next.js 최적화 호스팅 및 자동 배포" },
            { name: "Vercel Analytics", description: "실시간 트래픽 및 성능 모니터링" },
          ],
        },
      ],
      challenges: [
        {
          title: "전역 팝업 상태의 서버·클라이언트 동기화",
          challenge:
            "Next.js App Router에서 서버 컴포넌트와 클라이언트 컴포넌트가 혼재하는 환경에서, 어드민이 수정한 팝업 데이터를 공개 사이트 전체에 즉시 반영하는 전역 상태 관리가 복잡했습니다.",
          solution:
            "Zustand로 팝업 전역 스토어를 설계하고, 최상단 ModalProvider에서 Supabase 실시간 구독을 연결했습니다. 데이터 변경 시 스토어가 자동 갱신되어 모든 클라이언트 컴포넌트에 즉시 반영됩니다.",
        },
        {
          title: "미들웨어 기반 어드민 보안 처리",
          challenge:
            "어드민 경로(/admin/*)에 대한 접근 제어를 클라이언트가 아닌 서버 레벨에서 처리해야 했으며, Supabase 세션 쿠키를 Next.js 미들웨어에서 안전하게 검증하는 방법이 필요했습니다.",
          solution:
            "Next.js middleware.ts에서 Supabase SSR 클라이언트로 세션을 검증하고, 비인가 접근 시 로그인 페이지로 리다이렉트하도록 구현했습니다. 클라이언트 측 보호 로직을 제거해 보안 구멍을 원천 차단했습니다.",
        },
        {
          title: "서버·클라이언트 컴포넌트 경계 설계",
          challenge:
            "App Router에서 데이터 페칭은 서버 컴포넌트, 인터랙션은 클라이언트 컴포넌트로 분리해야 하는데, 기존 페이지 라우터 방식에 익숙한 상태에서 경계 설정이 혼란스러웠습니다.",
          solution:
            "데이터 페칭·SEO 메타데이터는 서버 컴포넌트에, 상태·이벤트 핸들러는 클라이언트 컴포넌트('use client')에 명확히 분리했습니다. Suspense와 스트리밍을 활용해 초기 로딩 성능도 개선했습니다.",
        },
      ],
      outcome: [
        "비개발자 직원도 팝업·채용·상담을 직접 관리할 수 있는 어드민 시스템을 구축하여, 기존에 개발팀을 거쳐야 했던 콘텐츠 수정 업무를 현업 담당자가 독립적으로 처리하게 되었습니다. 반복적인 수정 요청이 줄어들면서 개발팀은 기능 고도화에 집중할 수 있는 환경이 만들어졌습니다.",
        "Next.js 15 App Router의 서버/클라이언트 컴포넌트 분리, Supabase 실시간 구독, Zustand 전역 상태 관리를 실무에 적용하며 풀스택 설계 역량을 크게 키울 수 있었습니다.",
        "디자이너와의 첫 협업 프로젝트였던 만큼 Figma 시안을 코드로 옮기는 과정에서 디자인 의도를 정확히 파악하고 의사소통하는 방법을 익혔습니다. 개발자 혼자서는 고려하기 어려웠던 사용자 경험 디테일을 디자이너와 함께 다듬으며, 혼자 작업할 때보다 훨씬 완성도 높은 결과물을 만들 수 있었습니다. 이 경험을 통해 협업의 중요성과 커뮤니케이션 능력의 가치를 몸소 느꼈습니다.",
      ],
    },
  },
  // ──────────────────────────────────────────
  {
    id: "CRM",
    type: "company",
    title: "CRM 시스템",
    date: "2025. 08. 26 ~ 현재",
    description:
      "엑셀과 수기 문서에 의존하던 복잡한 사내 행정 프로세스를 전사적 디지털 환경으로 전환했습니다. 파편화된 영업 및 인사 데이터를 하나의 시스템으로 통합 관리함으로써 수동 입력의 번거로움과 데이터 누락 가능성을 근본적으로 제거했으며, 결과적으로 업무의 정확도를 높이고 투명한 관리 체계를 확립했습니다.",
    tags: ["React", "Tailwind CSS 4", "TypeScript", "Supabase (PostgreSQL)"],
    gifImage: "/main/work__gif/pinkshop.gif",
    github: "https://github.com/bp4sp4/NMS-System",
    demo: "https://nms-system.vercel.app",
    detail: {
      period: "2025. 08. 26 ~ 현재",
      mainImage: "/detail__main/main__page__img/pinkshop__main.png",
      images: [
        "/detail__main/page3imgs/pinkshop__main.png",
        "/detail__main/page3imgs/pinkshop__contents.png",
        "/detail__main/page3imgs/pinkshopdetail.png",
      ],
      overview: [
        "기존 영업팀이 개별적으로 관리하던 수십 개의 엑셀 파일 기반 보고 체계를 전면 디지털화하여, 데이터의 파편화와 수동 취합 과정에서 발생하는 비효율을 근본적으로 해결했습니다. 영업 현장에서 발생하는 실시간 데이터를 통합 플랫폼에 즉각 기록하게 함으로써 업무 누락을 방지하고, 인사 담당자가 즉시 데이터를 검토하여 정산까지 원스톱으로 처리할 수 있는 전사적 행정 워크플로우를 구축하는 데 집중했습니다.",
        "단순한 데이터 저장소를 넘어, 인사 팀의 정산 업무를 지원하기 위한 데이터 검증 및 관리 시스템 설계를 주도했습니다. QA 마인드셋을 바탕으로 입력 단계부터 엄격한 유효성 검사 로직을 적용하여 휴먼 에러를 차단했으며, 복잡한 정산 프로세스를 자동화된 대시보드로 시각화하여 행정 처리의 정확도와 속도를 동시에 확보했습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내)",
        parts: ["프론트엔드 개발 100%", "DB 설계 및 API 연동", "UI/UX 설계"],
      },
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
      keyFeatures: [
        {
          icon: "fas fa-users-cog",
          title: "권한별 대시보드",
          description: "관리자, 매니저, 영업사원 등 직급별 Role 기반 접근 제어로 민감 데이터 보호 및 맞춤형 화면 제공",
          gif: "/main/work__gif/pinkshop.gif",
        },
        {
          icon: "fas fa-file-excel",
          title: "엑셀 데이터 일괄 업로드",
          description: "CSV/엑셀 파일의 대량 고객 데이터를 실시간 진행 상태와 함께 일괄 등록하는 벌크 임포트 기능",
        },
        {
          icon: "fas fa-file-pdf",
          title: "PDF 문서 미리보기",
          description: "PDF.js 기반의 브라우저 내 계약서 뷰어로, 지연 로딩을 적용해 초기 로딩 성능 최적화",
        },
        {
          icon: "fas fa-chart-line",
          title: "실시간 정산 관리",
          description: "영업 데이터의 자동 집계 및 시각화 대시보드로 인사팀의 정산 업무를 원스톱 처리",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js", description: "React 기반의 풀스택 프레임워크" },
            { name: "TypeScript", description: "타입 안정성을 높인 자바스크립트" },
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
            "엑셀(CSV) 형태의 대량 고객 데이터를 한 번에 등록할 때, 데이터가 정확히 입력되고 있는지 사용자가 확인하기 어렵고 대기 시간이 길어지는 불편함이 있었습니다.",
          solution:
            "서버사이드에서 데이터를 안정적으로 처리하도록 설계하고, 클라이언트에서는 현재 어떤 정보가 입력되고 있는지 실시간 상태를 화면에 노출했습니다.",
        },
        {
          title: "DB Role 기반의 세분화된 직급 권한 체계 구축",
          challenge:
            "관리자, 매니저, 영업사원 등 사용자 역할에 따라 접근 권한과 노출되는 데이터의 범위가 엄격히 제한되어야 했습니다.",
          solution:
            "데이터베이스의 Role 필드를 활용하여 직급별 권한을 정의하고, 이를 기반으로 페이지 접근을 제어하는 보안 가직을 구현했습니다.",
        },
        {
          title: "PDF 미리보기 도입 및 로딩 지연 방지",
          challenge:
            "웹에서 계약서 등 PDF 문서를 확인할 때 브라우저 호환성 문제로 내용이 깨지거나, 문서 로딩 중 화면이 일시적으로 멈추는 현상이 있었습니다.",
          solution:
            "PDF.js 라이브러리를 활용해 어떤 브라우저에서도 동일하게 문서가 보이도록 구현했으며, 지연 로딩(Lazy-loading) 방식을 적용했습니다.",
        },
      ],
      outcome: [
        "본 프로젝트를 통해 엑셀 기반의 방대한 과거 데이터를 유실 없이 통합하고, 이를 연도별·월별로 체계적으로 관리할 수 있는 그룹웨어 구조를 구축했습니다.",
        "QA 경험을 녹여낸 치밀한 예외 처리와 유효성 검사 로직을 도입하여 정산 프로세스에서 데이터 누락이나 휴먼 에러를 근본적으로 방지했습니다.",
      ],
    },
  },
  // ──────────────────────────────────────────
  {
    id: "care",
    type: "company",
    title: "한평생 요양보호사교육원",
    date: "2025.12.05 ~ 2025.12.10",
    description:
      "본 프로젝트는 동일한 코드베이스를 유지한 채 회사명·로고·텍스트·이미지 등 일부 데이터만 교체하여 다른 요양회사에 빠르게 납품할 수 있도록 템플릿화할 계획인 프로젝트입니다.",
    tags: ["React", "CSS Modules", "TypeScript", "UI/UX"],
    gifImage: "/main/work__gif/pinkshop.gif",
    github: "https://github.com/bp4sp4/caving_demo",
    demo: "https://caving-demo.vercel.app/",
    detail: {
      period: "25.03.25 ~ 25.04.01",
      mainImage: "/detail__main/main__page__img/pinkshop__main.png",
      images: [
        "/detail__main/page3imgs/pinkshop__main.png",
        "/detail__main/page3imgs/pinkshop__contents.png",
        "/detail__main/page3imgs/pinkshopdetail.png",
      ],
      overview: [
        "[Next.js 기반의 고효율 확장형 아키텍처 구축] 본 프로젝트는 '한평생 요양보호사교육원'의 웹 서비스를 구축함과 동시에, 향후 다양한 파트너사에 신속하게 대응할 수 있는 화이트 라벨(White-label) 템플릿 제작을 목표로 진행되었습니다.",
        "핵심 전략: 동일한 로직의 코드베이스를 유지하되 데이터 주입만으로 브랜드 아이덴티티(로고, 컬러, 텍스트)를 즉각 변경할 수 있는 구조 설계에 집중했습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내)",
        parts: ["프론트엔드 개발 100%", "UI/UX 디자인", "반응형 퍼블리싱"],
      },
      links: {
        github: "https://github.com/bp4sp4/caving_demo",
        demo: "https://caving-demo.vercel.app/",
      },
      goals: [
        {
          icon: "fas fa-mobile-alt",
          title: "반응형 디자인",
          description: "모든 디바이스에서 최적의 사용자 경험을 제공하는 반응형 웹 디자인 구현",
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
          description: "Next.js와 TypeScript를 활용한 안정적이고 유지보수가 용이한 코드베이스 구축",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-palette",
          title: "화이트 라벨 템플릿",
          description: "JSON Config 파일 교체만으로 로고, 컬러, 텍스트 등 브랜드 아이덴티티를 즉각 변경 가능한 구조",
        },
        {
          icon: "fas fa-search",
          title: "SEO 최적화",
          description: "Next.js SSR/ISR을 활용한 검색엔진 최적화로 교육원 노출도 극대화",
        },
        {
          icon: "fas fa-mobile-alt",
          title: "모바일 퍼스트 반응형",
          description: "요양 서비스 특성상 높은 모바일 사용 비중에 맞춘 Mobile-first 접근의 반응형 UI",
        },
        {
          icon: "fas fa-puzzle-piece",
          title: "컴포넌트 모듈화",
          description: "공통 컴포넌트 구조화와 테마 시스템으로 신규 납품 시 개발 공수 최소화",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js", description: "React 기반의 풀스택 프레임워크" },
            { name: "TypeScript", description: "타입 안정성을 높인 자바스크립트" },
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
            "회사별 브랜드 정보를 담은 JSON 형태의 Config 파일을 설계하고, 이를 Context API나 상위 Props로 주입하는 데이터 중심 구조를 구축했습니다.",
        },
        {
          title: "복잡한 반응형 환경에서의 사용자 경험(UX) 최적화",
          challenge:
            "요양 서비스 특성상 모바일과 태블릿 사용 비중이 높아, 다양한 기기 환경에서도 레이아웃이 무너지지 않는 고도화된 반응형 대응이 필요했습니다.",
          solution:
            "CSS Grid와 Flexbox를 전략적으로 조합해 유연한 레이아웃을 구현했습니다. 특히 QA 관점에서 기기별 중단점(Breakpoints) 테스트를 거쳐 모바일 우선(Mobile-first)의 쾌적한 UX를 보장했습니다.",
        },
      ],
      outcome: [
        "본 프로젝트를 통해 Next.js와 TypeScript를 활용한 고성능 확장형 아키텍처 구축 역량을 증명했습니다.",
        "데이터 관리 기반의 템플릿화 설계를 통해 비즈니스 확장성을 확보했으며, QA 경험을 녹여낸 치밀한 예외 처리로 다양한 환경에서 완결성 있는 사용자 경험을 구현했습니다.",
      ],
    },
  },
  // ──────────────────────────────────────────
  {
    id: "pinkshop",
    type: "personal",
    title: "PinkShop",
    date: "25.03.25 ~ 25.04.01",
    description:
      "핑크숍은 Figma 기반의 디자인을 정교하게 구현하여 퍼블리싱 작업을 진행하는 데 중점을 두었습니다. 반응형 레이아웃과 시멘틱 HTML, CSS 모듈을 활용해 UI를 완성했고 퍼블리싱 작업을 진행했습니다.",
    tags: ["Next.js", "Vercel", "TypeScript", "UI/UX"],
    gifImage: "/main/work__gif/pinkshop.gif",
    github: "https://github.com/bp4sp4/pinkshoppingmall",
    demo: "https://pinkshoppingmall.vercel.app/",
    figma:
      "https://www.figma.com/design/7dPx5W1nz4VdLMgs84G4Z8/%ED%95%91%ED%81%AC%EC%88%8D?node-id=0-1&p=f&t=fziTtiQUrxhBWbrc-0",
    detail: {
      period: "25.03.25 ~ 25.04.01",
      mainImage: "/detail__main/main__page__img/pinkshop__main.png",
      images: [
        "/detail__main/page3imgs/pinkshop__main.png",
        "/detail__main/page3imgs/pinkshop__contents.png",
        "/detail__main/page3imgs/pinkshopdetail.png",
      ],
      overview: [
        "핑크숍은 Figma 기반의 디자인을 정교하게 구현하여 퍼블리싱 작업을 진행하는 데 중점을 두었습니다. 반응형 레이아웃과 시멘틱 HTML, CSS 모듈을 활용해 UI를 완성했고 퍼블리싱 작업을 진행했습니다.",
        "Figma의 디자인 시스템을 코드로 구현하는 과정에서 디자인 일관성을 유지하면서도 웹 접근성과 사용자 경험을 최적화하는 데 중점을 두었습니다.",
      ],
      role: {
        type: "개인 프로젝트",
        parts: ["프론트엔드 개발 100%", "Figma 디자인", "반응형 퍼블리싱"],
      },
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
          description: "모든 디바이스에서 최적의 사용자 경험을 제공하는 반응형 웹 디자인 구현",
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
          description: "Next.js와 TypeScript를 활용한 안정적이고 유지보수가 용이한 코드베이스 구축",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-ruler-combined",
          title: "Pixel Perfect 구현",
          description: "Figma 디자인을 픽셀 단위로 정교하게 코드로 변환하여 디자인 의도를 100% 재현",
        },
        {
          icon: "fas fa-th-large",
          title: "디자인 토큰 시스템",
          description: "CSS 변수 기반의 디자인 토큰으로 색상, 타이포그래피, 간격을 체계적으로 관리",
        },
        {
          icon: "fas fa-expand-arrows-alt",
          title: "반응형 레이아웃",
          description: "CSS Grid와 Flexbox 조합으로 모바일부터 데스크톱까지 유연한 레이아웃 대응",
        },
        {
          icon: "fas fa-layer-group",
          title: "재사용 컴포넌트",
          description: "시멘틱 HTML과 CSS Modules 기반의 재사용 가능한 UI 컴포넌트 라이브러리 구축",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js", description: "React 기반의 풀스택 프레임워크" },
            { name: "TypeScript", description: "타입 안정성을 높인 자바스크립트" },
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
        "Next.js와 TypeScript의 조합으로 타입 안정성이 높고 성능이 최적화된 웹 애플리케이션을 구축하는 경험을 쌓았습니다.",
      ],
    },
  },
  // ──────────────────────────────────────────
  {
    id: "interactui",
    type: "personal",
    title: "InteractUI,",
    date: "25.03.04 ~ 25.03.12",
    description:
      "InteractUI는 사용자 경험을 극대화하는 인터랙티브한 홈페이지입니다. 최신 기술과 트렌드를 반영하여 직관적이고 감각적인 웹 인터페이스를 구축하는 데 집중하고 있으며, 반응형 디자인과 동적인 인터랙션을 통해 사용자와 웹 간의 자연스러운 상호작용을 제공합니다.",
    tags: ["React", "Magic UI", "Aceternity UI", "Vercel", "Framer Motion"],
    gifImage: "/main/work__gif/uidesign.gif",
    github: "https://github.com/bp4sp4/notinghomepage",
    demo: "https://notinghomepage.vercel.app/",
    detail: {
      period: "25.03.04 ~ 25.03.12",
      mainImage: "/detail__main/main__page__img/InteractUI__main.png",
      images: [
        "/detail__main/page3imgs/UI__main.png",
        "/detail__main/page3imgs/UI__contents.png",
        "/detail__main/page3imgs/UI__footer.png",
      ],
      overview: [
        "InteractUI는 사용자 경험을 극대화하는 인터랙티브한 홈페이지입니다. 최신 기술과 트렌드를 반영하여 직관적이고 감각적인 웹 인터페이스를 구축했습니다.",
        "반응형 디자인과 동적인 인터랙션을 통해 사용자와 웹 간의 자연스러운 상호작용을 제공합니다.",
      ],
      role: {
        type: "개인 프로젝트",
        parts: ["프론트엔드 개발 100%", "인터랙션 디자인", "애니메이션 구현"],
      },
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
      keyFeatures: [
        {
          icon: "fas fa-wand-magic-sparkles",
          title: "인터랙티브 애니메이션",
          description: "Framer Motion을 활용한 스크롤 기반 트리거 애니메이션과 부드러운 전환 효과",
        },
        {
          icon: "fas fa-cube",
          title: "3D 시각 효과",
          description: "Magic UI와 Aceternity UI 컴포넌트를 조합한 몰입감 있는 3D 인터랙션",
        },
        {
          icon: "fas fa-bolt",
          title: "성능 최적화 애니메이션",
          description: "GPU 가속과 requestAnimationFrame 기반의 60fps 부드러운 애니메이션 구현",
        },
        {
          icon: "fas fa-hand-pointer",
          title: "마이크로 인터랙션",
          description: "호버, 클릭, 스크롤 등 사용자 행동에 즉각 반응하는 세밀한 UI 피드백",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "React", description: "사용자 인터페이스 구축을 위한 JavaScript 라이브러리" },
            { name: "Framer Motion", description: "React 애니메이션 라이브러리" },
            { name: "Magic UI", description: "현대적인 UI 컴포넌트 및 애니메이션 효과 라이브러리" },
            { name: "Aceternity UI", description: "인터랙티브한 웹 경험을 위한 UI 컴포넌트 모음" },
          ],
        },
        {
          category: "배포 환경",
          items: [
            { name: "Vercel", description: "프론트엔드 애플리케이션 호스팅 플랫폼" },
            { name: "GitHub", description: "버전 관리 및 협업" },
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
        "Framer Motion과 Magic UI를 결합해 60fps의 부드러운 인터랙션을 구현하며 성능 최적화 역량을 키웠습니다.",
        "반응형 웹 디자인을 통해 모바일, 태블릿, 데스크톱 등 다양한 기기에서 최적의 사용자 경험을 제공했습니다.",
      ],
    },
  },
  // ──────────────────────────────────────────
  // 🆕 새 프로젝트 추가 예시 (복사해서 위에 붙여넣고 내용 채우기)
  {
    id: "my-new-project",          // URL: /project/my-new-project
    type: "company",               // "company" 또는 "personal"
    title: "프로젝트 이름",
    date: "2026.01 ~ 2026.02",
    description: "카드에 표시될 한 두 줄 설명",
    tags: ["React", "TypeScript"],
    gifImage: "/main/work__gif/파일명.gif",
    github: "https://github.com/...",
    demo: "https://...",
    figma: "https://...",           // 선택 사항
    detail: {                       // 없으면 상세 페이지 없이 카드만 표시
      period: "2026.01 ~ 2026.02",
      mainImage: "/detail__main/main__page__img/파일명.png",
      images: ["/detail__main/page3imgs/파일명1.png"],
      overview: ["프로젝트 개요 문단1", "문단2"],
      role: { type: "개인 프로젝트", parts: ["프론트엔드 개발 100%"] },
      links: { github: "https://...", demo: "https://..." },
      goals: [{ icon: "fas fa-code", title: "목표", description: "설명" }],
      keyFeatures: [{ icon: "fas fa-star", title: "기능", description: "설명" }],
      technologies: [{ category: "프론트엔드", items: [{ name: "React", description: "UI 라이브러리" }] }],
      challenges: [{ title: "도전", challenge: "문제", solution: "해결" }],
      outcome: ["결과 문단1"],
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────
// 아래는 자동 생성됩니다 — 수정하지 마세요
// ─────────────────────────────────────────────────────────────────────────

export const projects = allProjects.map((p) => ({
  id: p.id,
  type: p.type,
  title: p.title,
  date: p.date,
  description: p.description,
  tags: p.tags,
  image: p.gifImage,
  gifImage: p.gifImage,
  github: p.github,
  demo: p.demo,
  ...(p.figma ? { figma: p.figma } : {}),
}));

export const projectDetails: Record<string, ProjectDetailType> = Object.fromEntries(
  allProjects
    .filter((p) => p.detail)
    .map((p) => [
      p.id,
      {
        id: p.id,
        title: p.title,
        period: p.detail!.period,
        tags: p.tags,
        mainImage: p.detail!.mainImage,
        images: p.detail!.images,
        overview: p.detail!.overview,
        role: p.detail!.role,
        links: p.detail!.links,
        goals: p.detail!.goals,
        ...(p.detail!.keyFeatures ? { keyFeatures: p.detail!.keyFeatures } : {}),
        technologies: p.detail!.technologies,
        challenges: p.detail!.challenges,
        outcome: p.detail!.outcome,
      } satisfies ProjectDetailType,
    ])
);

// detail 있는 프로젝트만 상세 페이지 네비게이션에 포함
export const projectIds = allProjects.filter((p) => p.detail).map((p) => p.id);

// ─────────────────────────────────────────────
// 타입 export (외부에서 사용)
// ─────────────────────────────────────────────
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
  question: "Did you have an interactive experience?",
  email: "bp4sp4@naver.com",
  brand: "InteractUI",
};

// 하위 호환성 유지
export const projectDetail = projectDetails.pinkshop;
