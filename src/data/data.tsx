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
    info: "한평생교육원 개발본부 | 웹 개발자",
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
    id: "korhrd-office",
    type: "company",
    title: "한평생오피스",
    date: "2026. 03. 16 ~ 진행 중",
    description:
      "한국HRD그룹의 사내 업무 통합 관리 시스템(ERP)입니다. 영업단인 학점은행제 사업부의 매출·정산·계약·상담 등 흩어진 업무를 한 시스템으로 모은 것이 출발점이며, 자격증·유학·실습·올케어 5개 사업부 전체로 확장해 매출관리·전자결재·손익 리포트·엑셀 일괄 처리까지 하나로 통합한 올인원 플랫폼입니다.",
    tags: ["Next.js 16", "TypeScript", "Supabase", "Tailwind 4", "Recharts", "Popbill"],
    gifImage: "/main/work__gif/office.png",
    github: "https://github.com/bp4sp4/KorhrdGroupDB",
    demo: "#",
    detail: {
      period: "2026. 03. 16 ~ 진행 중",
      mainImage: "/main/work__gif/office.png",
      images: [
        "/detail__main/page3imgs/office_main_blur.png",
        "/detail__main/page3imgs/office_chart.png",
        "/detail__main/page3imgs/office_chart2.png",
        "/detail__main/page3imgs/office_approvals.png",
        "/detail__main/page3imgs/office_approvals_details.png",
      ],
      overview: [
        "⚠️ 한평생오피스는 현재 한평생그룹 사내에서 운영 중인 시스템으로, 외부에 공개된 데모 사이트는 제공되지 않습니다. 또한 본 페이지에 노출된 화면 중 매출·고객·정산 등 회사 기밀 정보가 포함된 영역은 블러 처리되었으니 양해 부탁드립니다.",
        "한평생오피스의 출발점은 한평생그룹의 영업단인 학점은행제 사업부였습니다. 영업단은 상담 등록·고객 관리·매출 등록·정산·계약·중복조회·배정 등 일선에서 다뤄야 할 업무가 너무 많고 도구가 파편화되어 있었기에, 이 모든 업무를 한 시스템으로 합치는 것이 1차 목표였습니다. 학점은행제 영업단의 워크플로우를 정리하고 올인원으로 모은 후, 같은 구조를 자격증·유학·실습·올케어 등 다른 사업부로 확장해 5개 사업부 통합 ERP로 발전시켰습니다.",
        "Next.js 16 App Router + Supabase 기반 풀스택 아키텍처에 Tailwind CSS 4 + CSS Modules 하이브리드 스타일링, Recharts/Ant Design Charts/D3 Cloud의 다층 데이터 시각화, xlsx 대용량 엑셀 일괄 업로드/다운로드, Popbill 전자세금계산서·전자문서 연동까지 한국형 B2B 환경에 특화된 기능을 한 곳에 모았습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내)",
        parts: [
          "프론트엔드 개발 100%",
          "5개 사업부 통합 라우트 및 데이터 모델 설계",
          "매출·손익 리포트 시각화 (Recharts · Ant Design Charts · D3 Cloud)",
          "엑셀 일괄 업로드/다운로드 (xlsx)",
          "Popbill 전자세금계산서·전자문서 연동",
          "Supabase Auth + bcryptjs 하이브리드 인증",
        ],
      },
      links: {
        github: "https://github.com/bp4sp4/KorhrdGroupDB",
        demo: "#",
      },
      goals: [
        {
          icon: "fas fa-bullhorn",
          title: "영업단 업무 올인원 통합",
          description:
            "출발점인 학점은행제 영업단은 상담·매출·정산·계약·중복조회·배정 등 처리할 업무가 너무 많고 도구가 흩어져 있었습니다. 이 모든 업무를 한 시스템에 합쳐 영업단 한 화면에서 끝낼 수 있는 올인원 환경을 구축했습니다.",
        },
        {
          icon: "fas fa-cubes",
          title: "5개 사업부로 확장",
          description:
            "학점은행제 영업단을 위해 만든 구조를 자격증·유학·실습·올케어로 확장하여, 분야가 다른 5개 사업부를 단일 플랫폼에서 운영하는 통합 ERP로 발전시켰습니다.",
        },
        {
          icon: "fas fa-chart-pie",
          title: "데이터 기반 의사결정",
          description:
            "매출·계좌·손익을 실시간으로 차트와 대시보드로 시각화하여, 경영진과 사업부 담당자가 데이터를 직접 보고 빠르게 의사결정할 수 있는 환경을 만듭니다.",
        },
        {
          icon: "fas fa-stamp",
          title: "전자결재 & 한국형 B2B",
          description:
            "Popbill 연동을 통한 전자세금계산서·전자문서 발행과 사내 전자결재 워크플로우로 종이 기반 업무를 완전히 디지털화합니다.",
        },
        {
          icon: "fas fa-file-excel",
          title: "엑셀 워크플로우 일원화",
          description:
            "xlsx 라이브러리로 대용량 엑셀 일괄 업로드/다운로드를 지원하여, 비개발자도 익숙한 엑셀 기반 업무 흐름을 그대로 시스템에 연결합니다.",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-graduation-cap",
          title: "5개 사업부 통합 라우트 [핵심]",
          description: "/hakjeom(학점은행)·/cert(자격증)·/abroad(유학)·/practice(실습)·올케어를 단일 (dashboard) 그룹에서 운영하여 사업부별 데이터를 한 사이드바로 탐색합니다.",
        },
        {
          icon: "fas fa-route",
          title: "신청 유입 채널(UTM) 자동 분류",
          description: "상담·신청 데이터에 utm_source(어디서 신청했는지)·utm_medium(어떤 매체)·utm_campaign(어떤 캠페인)을 자동 저장하여, 광고·블로그·검색·소개 등 채널별 신청 건수와 매출 전환을 어드민에서 한눈에 분류·필터링할 수 있습니다.",
        },
        {
          icon: "fas fa-chart-line",
          title: "매출·손익 리포트 [핵심]",
          description: "Recharts·Ant Design Charts·D3 Cloud로 사업부별 매출·손익·로그 데이터를 다층 시각화. 기간별·부서별 필터링과 실시간 통계를 지원합니다.",
        },
        {
          icon: "fas fa-file-invoice-dollar",
          title: "Popbill 전자세금계산서",
          description: "Popbill API 연동으로 한국형 전자세금계산서·전자문서 발행을 자동화하여 회계팀의 수기 작업을 제거했습니다.",
        },
        {
          icon: "fas fa-file-excel",
          title: "엑셀 일괄 업로드/다운로드",
          description: "xlsx + jszip으로 수백~수천 건 매출·고객 데이터를 한 번에 업로드하고, 사업부별 정형화된 양식으로 일괄 다운로드합니다.",
        },
        {
          icon: "fas fa-stamp",
          title: "전자결재 워크플로우",
          description: "결재 라인 자동 설정·다단계 승인·결재 이력 추적으로 종이 결재를 시스템화하고,",
        },
        {
          icon: "fas fa-shield-alt",
          title: "Supabase Auth + bcryptjs",
          description: "Supabase Auth 세션과 bcryptjs 자체 비밀번호 검증을 결합한 하이브리드 인증으로 사내 정책에 맞춘 보안 체계를 구축했습니다.",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js 16", description: "App Router 기반 풀스택 프레임워크" },
            { name: "TypeScript 5", description: "타입 안정성을 갖춘 코드베이스 (TS 80%+)" },
            { name: "Tailwind CSS 4 + CSS Modules", description: "유틸리티 + 모듈 하이브리드 스타일링" },
            { name: "Lucide React + Motion", description: "아이콘 시스템과 마이크로 인터랙션" },
          ],
        },
        {
          category: "데이터 시각화 & 처리",
          items: [
            { name: "Recharts", description: "매출·손익 차트 시각화" },
            { name: "Ant Design Charts", description: "고급 통계 차트 (Funnel·Sankey 등)" },
            { name: "D3 Cloud", description: "로그·상담 데이터 워드클라우드" },
            { name: "xlsx + jszip", description: "엑셀 업로드/다운로드 + 압축 처리" },
            { name: "date-fns", description: "기간별 필터링·집계 연산" },
          ],
        },
        {
          category: "백엔드 & 한국형 B2B",
          items: [
            { name: "Supabase + @supabase/ssr", description: "PostgreSQL + Auth + Storage (서버사이드 세션 동기화)" },
            { name: "bcryptjs", description: "비밀번호 해싱 자체 검증 레이어" },
            { name: "Popbill", description: "전자세금계산서·전자문서 한국형 B2B API" },
            { name: "Vercel", description: "프로덕션 배포" },
          ],
        },
      ],
      challenges: [
        {
          title: "영업단의 흩어진 업무를 하나로 합치기",
          challenge:
            "학점은행제 영업단은 상담 등록·고객 관리·매출 등록·정산 계산·계약·중복조회·배정 등 매일 처리해야 할 업무가 너무 많았고, 각 업무가 엑셀·메신저·구두로 흩어져 있어 누락과 중복이 자주 발생했습니다. 한 사람이 동시에 여러 도구를 오가며 작업해야 하는 비효율도 컸습니다.",
          solution:
            "영업단의 실제 업무 흐름을 1:1 인터뷰로 정리해 우선순위를 매기고, 가장 자주 쓰는 기능부터 한 화면에서 끝나도록 사이드바 + 통합 대시보드 구조로 재설계했습니다. 상담·매출·정산이 같은 데이터 모델로 연결되어 한 번 입력하면 자동으로 계약·정산까지 이어지도록 워크플로우를 자동화하여, 영업단의 작업 시간을 크게 단축했습니다.",
        },
        {
          title: "5개 사업부의 이질적인 데이터 모델 통합",
          challenge:
            "학점은행제 영업단을 위한 구조를 자격증·유학·실습·올케어 사업부로 확장할 때, 사업부마다 고객 정보·매출 구조·결제 방식·정산 규칙이 모두 달라 단순 복제로는 운영이 불가능했습니다.",
          solution:
            "공통 베이스 스키마(고객·매출·결제)를 정의하고, 사업부별 확장 테이블을 분리하여 통합과 특화를 동시에 만족하는 하이브리드 모델을 설계. 라우트도 (dashboard) 그룹 하위에 사업부별 디렉토리로 분리하여 코드 격리와 통합 사이드바 동시 운영을 구현했습니다.",
        },
        {
          title: "대용량 엑셀 데이터의 실시간 처리",
          challenge:
            "영업단은 기존 업무를 엑셀로 관리해왔기 때문에 수천 건의 매출·고객 데이터를 시스템으로 옮기려면 엑셀 일괄 업로드가 필수였는데, 그대로 처리하면 브라우저가 멈추거나 Supabase 응답이 느려지는 문제가 있었습니다.",
          solution:
            "xlsx 라이브러리로 클라이언트에서 엑셀 파싱을 처리하고, 데이터를 청크 단위로 분할해 Supabase에 순차 업로드. 진행률 UI로 사용자에게 처리 상황을 실시간으로 노출하여 체감 대기 시간을 줄였습니다.",
        },
      ],
      metrics: [
        {
          value: "약 900명",
          label: "학점은행제 누적 상담신청",
          icon: "fas fa-users",
        },
        {
          value: "502건",
          label: "이번 달 신규 신청 (▲46%)",
          icon: "fas fa-chart-line",
        },
        {
          value: "1억원 이상",
          label: "상담신청 매출",
          icon: "fas fa-won-sign",
        },
        {
          value: "실서비스",
          label: "운영 중",
          icon: "fas fa-rocket",
        },
      ],
      outcome: [
        "학점은행제 영업단의 흩어진 업무(상담·매출·정산·계약·중복조회·배정)를 한 시스템으로 합치는 것에서 출발하여, 같은 구조를 자격증·유학·실습·올케어 사업부로 확장해 5개 사업부 통합 ERP로 발전시켰습니다. 영업단이 여러 도구를 오가던 작업을 한 화면에서 끝낼 수 있게 되어 입력 누락·중복 작성 같은 일선 비효율이 크게 줄었습니다.",
        "데이터 시각화 라이브러리 다중 통합, 엑셀 대용량 처리, Popbill 한국형 B2B API 연동, 신청 유입 채널(UTM) 자동 분류 등 단순 CRUD를 넘는 사내 업무 자동화 시스템 설계 경험을 쌓았으며, 영업단 등 비개발자가 직관적으로 쓸 수 있도록 실제 사용자 인터뷰를 거쳐 UX를 다듬는 사내 ERP 설계 역량을 확보했습니다.",
      ],
    },
  },
  // ──────────────────────────────────────────
  {
    id: "hanpyungsaeng-edu",
    type: "company",
    title: "한평생유학",
    date: "2026. 03.25 ~ 2026. 03.30",
    description:
      "어린이·청소년 대상 해외 유학(미국·캐나다·영국·필리핀·뉴질랜드) 신청·결제 플랫폼입니다. 카카오·네이버 소셜 로그인, PayApp 간편결제, 결제 후 6개 섹션 신청서 작성, 어드민 검토까지 풀스택으로 구현했습니다.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "PayApp", "Tailwind 4"],
    gifImage: "/main/work__gif/youhak.gif",
    github: "https://github.com/bp4sp4/KorhrdStudyAbroad",
    demo: "https://www.hanyouhak.com/",
    detail: {
      period: "2026. 03.25 ~ 2026. 03.30",
      mainImage: "/detail__main/page3imgs/youhak_main.png",
      images: [
        "/detail__main/page3imgs/youhak_main.png",
        "/detail__main/page3imgs/youhak_02.png",
        "/detail__main/page3imgs/youhak_03.png",
      ],
      overview: [
        "한평생유학은 \"잘 보내는 것보다, 잘 적응하는 유학이 중요합니다\"라는 슬로건 아래 어린이·청소년에게 미국·캐나다·영국·필리핀·뉴질랜드 등 해외 어학연수·사립학교·홈스테이 프로그램을 안내하고 온라인 결제와 학생 신청 정보를 받는 유학 신청 플랫폼입니다.",
        "Next.js 16 App Router + React 19 + Supabase 기반으로 카카오·네이버 소셜 로그인, 네이버 클라우드 SMS 휴대폰 인증, PayApp 간편결제(카드·카카오페이·네이버페이·계좌이체 등), 결제 완료 후 6개 섹션 학생 신청서, 임시저장(draft) 복구, 여권·증명사진 업로드, 어드민 신청서 검토까지 결제·신청 전 흐름을 풀스택으로 구현했습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내) · 2인 협업 (개발자 1 + 디자이너 1)",
        parts: [
          "프론트엔드 개발 100%",
          "디자이너 Figma 시안 기반 퍼블리싱 (CSS Modules · BEM)",
          "PayApp 결제 시스템 연동 (결제 요청 · webhook · 결과 페이지 · 상태 폴링)",
          "결제 후 6개 섹션 학생 신청서 폼 설계·구현",
          "Supabase 데이터 모델링 (profiles · applications · payments · consultations)",
          "카카오·네이버 OAuth 소셜 로그인 + 네이버 클라우드 SMS 인증",
          "어드민 대시보드 (신청서 검토 · 사용자 · 결제 통합 관리)",
        ],
      },
      links: {
        github: "https://github.com/bp4sp4/KorhrdStudyAbroad",
        demo: "https://www.hanyouhak.com/",
      },
      goals: [
        {
          icon: "fas fa-credit-card",
          title: "결제 → 신청 흐름 일원화",
          description: "PayApp 결제와 학생 신청서를 하나의 흐름으로 연결해, 학부모가 결제 후 이탈 없이 신청까지 완료할 수 있는 매끄러운 UX를 제공합니다.",
        },
        {
          icon: "fas fa-user-shield",
          title: "신뢰 가능한 본인 확인",
          description: "카카오·네이버 소셜 로그인과 네이버 클라우드 SMS 휴대폰 인증으로 회원 본인 확인을 강화하고 허위 신청을 차단합니다.",
        },
        {
          icon: "fas fa-passport",
          title: "유학 진행에 필요한 정보 완비",
          description: "여권·증명사진 업로드, 보호자 정보, 영어 수준·알러지·수영 가능 여부 등 홈스테이/현지 진행에 필요한 정보를 결제 후 폼에서 수집합니다.",
        },
        {
          icon: "fas fa-mobile-alt",
          title: "모바일 우선 설계",
          description: "학부모 사용자의 주된 환경인 모바일에 맞춰 결제 폼·신청 폼·서명 패드까지 모바일 우선으로 최적화했습니다.",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-credit-card",
          title: "PayApp 간편결제 연동 [핵심]",
          description: "PayApp REST API로 결제 요청·webhook·결과 페이지를 처리하고, 카드·카카오페이·네이버페이·계좌이체 등 다중 결제수단을 지원합니다.",
        },
        {
          icon: "fas fa-file-signature",
          title: "결제 후 6개 섹션 신청서 [핵심]",
          description: "프로그램·참가자·여권·보호자·홈스테이·서명 6개 섹션으로 분리한 신청서. 임시저장(draft) 복구로 중간 이탈해도 이어서 작성 가능합니다.",
        },
        {
          icon: "fas fa-video",
          title: "Cloudflare 영상 빠른 로딩",
          description: "Cloudflare CDN 스트리밍으로 글로벌 영상 재생을 가속하고, 첫 프레임 썸네일을 미리 띄워 로딩 체감 시간을 최소화했습니다.",
        },
        {
          icon: "fas fa-user-shield",
          title: "소셜 로그인 + SMS 인증",
          description: "카카오·네이버 OAuth 소셜 로그인과 네이버 클라우드 SMS 휴대폰 인증으로 본인 확인을 강화하고 허위 신청을 차단합니다.",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js 16", description: "App Router 기반 풀스택 프레임워크" },
            { name: "React 19", description: "최신 React 서버 컴포넌트 활용" },
            { name: "TypeScript 5", description: "타입 안정성을 갖춘 코드베이스" },
            { name: "Tailwind CSS 4 + CSS Modules", description: "유틸리티 + BEM 방식 스타일링" },
            { name: "Swiper 12", description: "메인 페이지 프로그램 슬라이더" },
          ],
        },
        {
          category: "결제 & 백엔드",
          items: [
            { name: "PayApp", description: "한국 간편결제 게이트웨이 - /api/payments(요청) · /webhook(콜백) · /result(결과) · /check(폴링)" },
            { name: "Supabase", description: "PostgreSQL + Auth + Storage (profiles · applications · payments · consultations 테이블 + RLS)" },
            { name: "@supabase/ssr", description: "서버 컴포넌트용 Supabase 클라이언트 (client/server/admin 분리)" },
            { name: "Naver Cloud SMS", description: "회원가입 휴대폰 인증번호 발송 (HMAC-SHA256 서명)" },
            { name: "Kakao / Naver OAuth", description: "소셜 로그인 callback 라우트 통한 자동 회원가입" },
          ],
        },
        {
          category: "미디어 & 배포",
          items: [
            { name: "Cloudflare CDN", description: "유학 소개 동영상 스트리밍 (첫 프레임 썸네일로 체감 로딩 시간 최소화)" },
            { name: "Vercel", description: "프로덕션 배포 및 hanyouhak.com 커스텀 도메인 연결" },
          ],
        },
      ],
      challenges: [
        {
          title: "PayApp 결제 콜백과 신청서 폼의 매끄러운 연결",
          challenge:
            "PayApp은 결제 후 가맹점 feedbackurl로 결제 결과를 보내는 서버사이드 콜백 방식이라, 사용자 화면에서 결제 완료 직후 바로 학생 신청서 작성으로 이어지게 만들기 위해 클라이언트와 서버 콜백의 타이밍을 동기화해야 했습니다. 또한 PayApp 매출전표가 별도 팝업창에서 열려 부모창과의 통신이 COOP(Cross-Origin-Opener-Policy)으로 제약되는 문제도 있었습니다.",
          solution:
            "주문 생성 시 HPS-/BANK- 접두사가 붙은 고유 payapp_order_id를 발급하고, /api/payments/webhook이 결제 완료를 감지하면 payments 테이블의 status를 'completed'로 업데이트. 결제 결과 페이지에서 postMessage + localStorage 이중 채널로 부모창에 결제 완료를 알리는 방식(COOP 우회)을 구현하고, 클라이언트는 /api/payments/check로 폴링해 신청서 폼으로 즉시 전환합니다.",
        },
        {
          title: "결제 진입 장벽과 유학 정보 수집의 균형",
          challenge:
            "결제 단계에서는 진입 장벽을 낮추기 위해 최소 정보만 받아야 했지만, 실제 유학 진행에는 여권·증명사진·보호자·홈스테이 등 학생의 상세 정보가 필요했습니다. 6개 섹션을 한 화면에 몰아넣으면 학부모가 작성 중 이탈하는 문제도 컸습니다.",
          solution:
            "결제(payments)와 신청서(applications)를 분리해 결제는 빠르게 끝내고, 결제 완료 후 6개 섹션 신청서를 단계별로 진행하도록 UX를 설계. 임시저장(draft) 복구 기능을 넣어 학부모가 중간에 페이지를 떠나도 이어서 작성할 수 있게 했습니다. 여권 사본·증명사진은 Supabase Storage에 업로드하고 어드민의 ImageViewer 컴포넌트에서 바로 확인할 수 있도록 연결했습니다.",
        },
        {
          title: "유학 소개 영상의 글로벌 로딩 속도",
          challenge:
            "유학 소개 동영상을 메인 페이지에 노출해야 하는데, 영상 파일이 크고 해외/국내 사용자 모두에게 빠르게 재생되어야 했습니다.",
          solution:
            "동영상을 Cloudflare CDN으로 스트리밍하여 글로벌 엣지 캐싱을 적용하고, 영상 첫 프레임 이미지를 썸네일로 미리 노출. 사용자가 영상이 로딩되는 동안에도 빈 화면이 아닌 의미 있는 시각 정보를 보게 만들어 체감 로딩 시간을 크게 줄였습니다.",
        },
      ],
      outcome: [
        "어린이·청소년 대상 해외 유학 신청·결제 플랫폼을 hanyouhak.com에서 운영 중이며, 카카오·네이버 소셜 로그인, PayApp 간편결제, 6개 섹션 신청서, 임시저장 복구, 여권·증명사진 업로드, 어드민 검토까지 결제·신청 전 흐름을 풀스택으로 완성했습니다.",
        "PayApp 결제 게이트웨이 통합과 COOP 제약 환경에서의 결제창 통신 처리, Supabase 기반 도메인 분리 데이터 모델링, Cloudflare CDN을 활용한 영상 로딩 최적화 등 단순 CRUD를 넘는 풀스택 비즈니스 시스템 설계 경험을 쌓았습니다. 디자이너와의 Figma 시안 기반 협업으로 시각적 완성도와 개발 속도를 동시에 확보했습니다.",
      ],
    },
  },
  // ──────────────────────────────────────────
  {
    id: "korhrdDev",
    type: "company",
    title: "한평생 개발 가이드",
    date: "2026. 01. 04 ~ 2026. 01. 26",
    description:
      "회사 프론트엔드 개발 표준 및 베스트 프랙티스를 안내하는 가이드입니다. Next.js 기반 프로젝트에서 일관된 코드 스타일과 디자인 시스템을 적용하기 위한 사내 문서 사이트입니다.",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn UI"],
    gifImage: "/main/work__gif/korhrddev.gif",
    github: "https://github.com/bp4sp4/KorhrdDev",
    demo: "https://korhrd-dev.vercel.app/",
    detail: {
      period: "2026. 01. 04 ~ 2026. 01. 26",
      mainImage: "/detail__main/page3imgs/korhrdDev_Main.png",
      images: [
        "/detail__main/page3imgs/korhrdDev_Main.png",
        "/detail__main/page3imgs/korhrdDev_01.png",
        "/detail__main/page3imgs/korhrdDev_02.png",
        "/detail__main/page3imgs/korhrdDev_03.png",
      ],
      overview: [
        "회사 프론트엔드 개발 표준과 베스트 프랙티스를 안내하는 가이드 사이트를 Next.js 14 App Router 기반으로 구축했습니다. CSS 기초, 클래스 네이밍 컨벤션, 컬러 팔레트, 로고 가이드라인, 반응형 디자인 등 11개 섹션으로 구성된 종합 개발 문서를 제공합니다.",
        "토스 스타일의 미니멀하고 현대적인 디자인을 적용하여 좌측 사이드바 + 우측 콘텐츠 레이아웃으로 직관적인 탐색을 지원합니다. 코드 예제 복사, 컬러 코드 복사, 타이포그래피 미리보기 등 개발자 편의 기능을 갖추었습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내)",
        parts: ["프론트엔드 개발 100%", "디자인 시스템 설계", "문서 구조 기획", "디자이너님 이미지 리소스 제공 협업"],
      },
      links: {
        github: "https://github.com/bp4sp4/KorhrdDev",
        demo: "https://korhrd-dev.vercel.app/",
      },
      goals: [
        {
          icon: "fas fa-book",
          title: "개발 표준 문서화",
          description:
            "CSS 기초부터 반응형 디자인까지, 프론트엔드 개발에 필요한 표준과 컨벤션을 체계적으로 문서화하여 팀 내 일관된 코드 품질을 확보합니다.",
        },
        {
          icon: "fas fa-palette",
          title: "디자인 시스템 가이드",
          description: "컬러 팔레트, 타이포그래피, 로고 가이드라인 등 디자인 토큰과 시각적 규칙을 정의하여 일관된 UI를 유지합니다.",
        },
        {
          icon: "fas fa-code",
          title: "코드 컨벤션 정립",
          description: "BEM 기반 클래스 네이밍, 파일 구조, 환경 변수 관리 등 코딩 규칙을 명확히 정의하여 협업 효율을 높입니다.",
        },
        {
          icon: "fas fa-mobile-alt",
          title: "반응형 디자인 가이드",
          description:
            "다양한 디바이스에 대응하는 반응형 디자인 원칙과 구현 방법을 문서화하여 모든 환경에서 최적의 사용자 경험을 제공합니다.",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-copy",
          title: "코드 예제 복사",
          description: "CopyableCodeBlock 컴포넌트를 통해 가이드 내 모든 코드 예제를 클릭 한 번으로 클립보드에 복사",
          category: "개발자 편의",
        },
        {
          icon: "fas fa-bars",
          title: "사이드바 아코디언 네비게이션",
          description: "11개 섹션을 아코디언 형태로 구성하여 원하는 가이드 항목을 빠르게 탐색하고 이동",
          category: "네비게이션",
        },
        {
          icon: "fas fa-palette",
          title: "컬러 팔레트 & Hex 코드 복사",
          description: "프로젝트 공식 컬러 팔레트를 시각적으로 제공하고, Hex 코드를 클릭하여 즉시 복사",
          category: "디자인 시스템",
        },
        {
          icon: "fas fa-font",
          title: "타이포그래피 미리보기",
          description: "Pretendard 폰트 기반 타이포그래피 스타일을 실시간으로 미리보기하여 적용 결과를 즉시 확인",
          category: "디자인 시스템",
        },
        {
          icon: "fas fa-download",
          title: "로고 다운로드",
          description: "가이드 페이지에서 프로젝트 공식 로고 이미지를 직접 다운로드할 수 있는 기능 제공",
          category: "에셋 관리",
        },
        {
          icon: "fas fa-file-code",
          title: "CSS 기초 가이드",
          description: "Normalize, Pretendard 폰트, 디자인 토큰, 베이스 스타일, 레이아웃 등 CSS 기반 구조를 체계적으로 안내",
          category: "문서",
        },
        {
          icon: "fas fa-tags",
          title: "클래스 네이밍 컨벤션",
          description: "BEM 기반 클래스 네이밍 규칙을 정의하고 올바른 사용 예시와 안티패턴을 함께 제공",
          category: "문서",
        },
        {
          icon: "fas fa-history",
          title: "변경 이력 관리",
          description: "Changelog 섹션을 통해 가이드 문서의 업데이트 내역과 변경 사항을 추적하고 관리",
          category: "문서",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js 14", description: "App Router 기반 프레임워크" },
            { name: "TypeScript", description: "타입 안정성을 높인 자바스크립트" },
            { name: "Tailwind CSS", description: "유틸리티 기반 CSS 프레임워크" },
          ],
        },
        {
          category: "UI 컴포넌트",
          items: [
            { name: "shadcn UI", description: "Radix UI 기반 컴포넌트 라이브러리" },
            { name: "Radix UI", description: "접근성 기반 헤드리스 UI 프리미티브" },
            { name: "Lucide React", description: "아이콘 라이브러리" },
          ],
        },
        {
          category: "유틸리티 & 빌드",
          items: [
            { name: "clsx", description: "조건부 클래스명 유틸리티" },
            { name: "tailwind-merge", description: "Tailwind 클래스 충돌 해결" },
            { name: "CVA", description: "Class Variance Authority 변형 관리" },
          ],
        },
      ],
      challenges: [
        {
          title: "11개 섹션의 체계적 문서 구조 설계",
          challenge:
            "CSS 기초부터 반응형 디자인까지 다양한 주제를 하나의 가이드로 통합해야 했으며, 개발자가 원하는 내용을 빠르게 찾을 수 있는 구조가 필요했습니다.",
          solution:
            "좌측 사이드바 아코디언 네비게이션을 도입하고, 각 섹션을 독립적인 페이지로 분리하여 직관적인 탐색 구조를 구현했습니다.",
        },
        {
          title: "코드 예제의 실용적 제공 방식",
          challenge:
            "가이드에 포함된 다양한 코드 예제를 개발자가 즉시 활용할 수 있도록 편리한 복사 기능이 필요했습니다.",
          solution:
            "CopyableCodeBlock 컴포넌트를 자체 개발하여 모든 코드 블록에 원클릭 복사 기능을 적용하고, 복사 완료 피드백을 제공했습니다.",
        },
        {
          title: "토스 스타일 미니멀 디자인 적용",
          challenge:
            "기술 문서이면서도 시각적으로 깔끔하고 현대적인 디자인을 유지해야 했으며, 다양한 콘텐츠 유형(코드, 컬러, 이미지)을 일관되게 표현해야 했습니다.",
          solution:
            "shadcn UI와 Tailwind CSS를 활용하여 토스 스타일의 미니멀 디자인을 구현하고, 각 콘텐츠 유형에 맞는 인터랙티브 컴포넌트를 설계했습니다.",
        },
      ],
      metrics: [
        {
          value: "11개",
          label: "가이드 섹션",
          icon: "fas fa-book-open",
        },
        {
          value: "BEM",
          label: "클래스 네이밍 컨벤션",
          icon: "fas fa-code",
        },
        {
          value: "Pretendard",
          label: "공식 타이포그래피",
          icon: "fas fa-font",
        },
        {
          value: "실서비스",
          label: "사내 운영 중",
          icon: "fas fa-rocket",
        },
      ],
      outcome: [
        "프론트엔드 개발 표준을 체계적으로 문서화하여 팀 내 코드 일관성을 확보하고, 신규 개발자의 온보딩 시간을 단축하는 사내 가이드 사이트를 구축했습니다.",
        "코드 예제 복사, 컬러 코드 복사, 타이포그래피 미리보기 등 개발자 편의 기능을 갖춘 인터랙티브 문서를 구현하여, 단순 읽기용 문서를 넘어 실무에서 즉시 활용 가능한 도구로 완성했습니다.",
        "Next.js 14, Tailwind CSS, shadcn UI 등 최신 프론트엔드 스택을 활용하여 토스 스타일의 미니멀하고 현대적인 디자인 시스템 가이드를 완성했습니다.",
      ],
    },
  },
    {
    id: "allcare",
    type: "company",
    title: "한평생 올케어",
    date: "2026. 02. 02 ~ 2026. 03. 05",
    description:
      "돌봄 서비스 제공자와 이용자를 연결하는 위치 기반 매칭 플랫폼입니다. 네이버 지도 기반 검색, PayApp SDK 기반 구독 결제 시스템, AI 챗봇 상담 기능을 제공하며, Next.js 16과 Supabase를 활용해 풀스택으로 구축했습니다.",
    tags: ["Next.js 16", "TypeScript", "Supabase", "Naver Maps API"],
    gifImage: "/main/work__gif/allcare.gif",
    github: "https://github.com/bp4sp4/allcare",
    demo: "https://www.hanallcare.com/",
    detail: {
      period: "2026. 02. 02 ~ 2026. 03. 05",
      mainImage: "/detail__main/page3imgs/allcare_main.png",
      images: [
        "/detail__main/page3imgs/allcare_main.png",
        "/detail__main/page3imgs/allcare_01.png",
        "/detail__main/page3imgs/allcare_02.png",
        "/detail__main/page3imgs/allcare_03.png",
      ],
      overview: [
        "돌봄 서비스 제공자와 이용자를 연결하는 위치 기반 매칭 플랫폼을 Next.js 16 App Router와 Supabase 기반으로 풀스택 구축했습니다. 네이버 지도 API와 Haversine 알고리즘을 활용한 거리 기반 검색, PayApp SDK 기반 구독·패키지·단과 3종 결제 시스템, Google Gemini 기반 AI 챗봇 상담까지 핵심 서비스를 직접 설계하고 구현했습니다.",
        "결제 모델은 구독(월정액)·패키지(묶음 상품)·단과(단건) 3가지로 분리 설계했고, 그중 패키지 판매가 전체 매출의 71%를 차지하며 핵심 수익원으로 자리잡았습니다. JWT + bcrypt 인증과 네이버 OAuth 소셜 로그인으로 보안성을 확보했으며, 관리자 대시보드에서 회원·구독·매출을 실시간으로 모니터링할 수 있도록 통계 시스템을 구축했습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내)",
        parts: ["풀스택 개발 100%", "DB 설계 및 API 구축", "UI/UX 설계"],
      },
      links: {
        github: "https://github.com/bp4sp4/allcare",
        demo: "https://www.hanallcare.com/",
      },
      goals: [
        {
          icon: "fas fa-map-marked-alt",
          title: "위치 기반 매칭",
          description:
            "네이버 지도 API와 Haversine 알고리즘을 활용하여 사용자 위치 기반으로 가까운 돌봄 서비스를 자동 매칭하고 거리순으로 제공합니다.",
        },
        {
          icon: "fas fa-credit-card",
          title: "구독 결제 시스템",
          description: "PayApp SDK를 활용한 3단계(Basic·Standard·Premium) 구독 결제 체계와 Webhook 기반 결제 결과 처리를 구현합니다.",
        },
        {
          icon: "fas fa-robot",
          title: "AI 챗봇 상담",
          description: "Google Gemini API를 활용한 AI 상담 챗봇으로, 마크다운 렌더링과 전화번호 자동 하이퍼링크 변환을 지원합니다.",
        },
        {
          icon: "fas fa-lock",
          title: "보안 인증 체계",
          description:
            "JWT + bcrypt 인증과 네이버 OAuth 소셜 로그인, 이메일 인증·비밀번호 재설정까지 포괄하는 다층 보안 구조를 구축합니다.",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-map",
          title: "네이버 지도 기반 검색",
          description: "Haversine 알고리즘으로 거리를 계산하고, 지역별 필터링과 사용자 위치 자동 감지로 근처 돌봄 서비스를 탐색",
          category: "매칭 시스템",
        },
        {
          icon: "fas fa-search-location",
          title: "거리순 자동 정렬",
          description: "사용자 현재 위치로부터 가까운 순으로 돌봄 서비스 제공자를 자동 정렬하여 최적의 매칭을 지원",
          category: "매칭 시스템",
        },
        {
          icon: "fas fa-user-plus",
          title: "회원가입 & 소셜 로그인",
          description: "이메일 기반 회원가입과 네이버 OAuth 소셜 로그인을 지원하며, 이메일 인증 및 비밀번호 재설정 워크플로우 제공",
          category: "인증",
        },
        {
          icon: "fas fa-shopping-cart",
          title: "구독 결제",
          description: "Basic·Standard·Premium 3단계 구독 플랜과 PayApp SDK 결제, 갱신·변경·해지·환불 처리 및 결제 이력 관리",
          category: "결제",
        },
        {
          icon: "fas fa-box-open",
          title: "패키지 판매 시스템",
          description: "여러 돌봄 서비스를 묶은 패키지 상품을 구매·결제할 수 있는 시스템. 전체 매출의 71%(약 4,600만원)를 차지하는 핵심 수익원으로, PayApp 단건 결제 + Supabase 주문/패키지 매핑 테이블로 구성",
          category: "결제",
        },
        {
          icon: "fas fa-receipt",
          title: "단과 결제",
          description: "개별 돌봄 회차를 단건으로 결제하는 모델. 구독·패키지에 부담을 느끼는 사용자를 위한 진입 장벽이 낮은 결제 옵션으로 약 1,900만원 매출 기여",
          category: "결제",
        },
        {
          icon: "fas fa-comments",
          title: "AI 챗봇 상담",
          description: "Google Gemini 기반 AI 상담 챗봇으로 마크다운 응답 렌더링과 전화번호 자동 하이퍼링크 변환 기능 제공",
          category: "AI 서비스",
        },
        {
          icon: "fas fa-user-cog",
          title: "마이페이지",
          description: "프로필 관리, 비밀번호 변경, 구독 정보 확인, 회원 탈퇴 등 사용자 셀프 서비스 기능 제공",
          category: "사용자 관리",
        },
        {
          icon: "fas fa-users-cog",
          title: "관리자 대시보드",
          description: "관리자 인증 시스템, 회원 목록·권한 관리, 구독 현황 모니터링, 통계 분석 기능을 제공하는 어드민 패널",
          category: "관리자",
        },
        {
          icon: "fas fa-bell",
          title: "Webhook 결제 처리",
          description: "PayApp에서 전송하는 결제 결과를 /api/payments/webhook으로 수신하여 구독 활성화를 자동 처리",
          category: "결제",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js 16", description: "App Router 기반 풀스택 프레임워크" },
            { name: "TypeScript", description: "타입 안정성을 높인 자바스크립트" },
            { name: "Pretendard", description: "프로젝트 메인 타이포그래피" },
          ],
        },
        {
          category: "백엔드 및 데이터베이스",
          items: [
            { name: "Supabase", description: "PostgreSQL 기반 BaaS 플랫폼" },
            { name: "JWT + bcrypt", description: "토큰 기반 인증 및 비밀번호 암호화" },
            { name: "Naver OAuth", description: "네이버 소셜 로그인 연동" },
          ],
        },
        {
          category: "외부 서비스 연동",
          items: [
            { name: "Naver Maps API", description: "지도 기반 위치 검색 서비스" },
            { name: "PayApp SDK", description: "구독 결제 처리 시스템" },
            { name: "Google Gemini API", description: "AI 챗봇 상담 엔진" },
          ],
        },
      ],
      challenges: [
        {
          title: "Haversine 기반 거리 계산 및 실시간 매칭",
          challenge:
            "사용자 위치에서 가까운 돌봄 서비스 제공자를 실시간으로 탐색해야 했으나, 대량의 좌표 데이터를 매번 계산하면 응답 속도가 저하되는 문제가 있었습니다.",
          solution:
            "Haversine 알고리즘으로 정확한 거리를 계산하되, 지역 필터링을 선행하여 계산 대상을 줄이고, 결과를 거리순으로 정렬하여 효율적인 매칭을 구현했습니다.",
        },
        {
          title: "PayApp Webhook 기반 결제 상태 동기화",
          challenge:
            "PayApp SDK를 통한 결제 후 결과가 비동기로 전달되므로, 결제 성공/실패에 따른 구독 상태를 정확히 동기화해야 했습니다.",
          solution:
            "Webhook 엔드포인트(/api/payments/webhook)를 구축하여 PayApp의 결제 결과를 수신하고, 구독 활성화·갱신·해지를 자동 처리하는 로직을 설계했습니다.",
        },
        {
          title: "다중 인증 체계 통합 (JWT + OAuth + 이메일 인증)",
          challenge:
            "이메일 회원가입, 네이버 소셜 로그인, 이메일 인증, 비밀번호 재설정 등 여러 인증 흐름을 하나의 시스템으로 통합 관리해야 했습니다.",
          solution:
            "JWT 토큰 기반 인증을 중심에 두고, bcrypt 해시 비밀번호 저장과 네이버 OAuth를 통합했으며, 이메일 인증 및 비밀번호 재설정 워크플로우를 API Routes로 구현했습니다.",
        },
      ],
      metrics: [
        {
          value: "약 110명",
          label: "누적 회원 (이번 달 신규 71명, ▲129%)",
          icon: "fas fa-users",
        },
        {
          value: "약 6,000만원",
          label: "총 매출 (구독·패키지·단과)",
          icon: "fas fa-won-sign",
        },
        {
          value: "약 4,600만원",
          label: "패키지 매출 (전체의 71%)",
          icon: "fas fa-chart-line",
        },
        {
          value: "실서비스",
          label: "운영 중",
          icon: "fas fa-rocket",
        },
      ],
      outcome: [
        "위치 기반 매칭부터 결제·인증·AI 상담까지 돌봄 서비스 플랫폼의 핵심 기능을 풀스택으로 직접 설계·구현하여 실서비스로 운영 중이며, 누적 회원 약 110명(이번 달 신규 71명, ▲129% 성장), 총 매출 약 6,000만원(패키지 71% / 단과 29%)의 실제 비즈니스 성과를 만들어냈습니다.",
        "PayApp SDK 기반의 첫 실결제 시스템을 직접 구축하여 구독·패키지·단과 3종 결제 모델을 도입했고, 그중 패키지 판매가 약 4,600만원으로 매출의 핵심 축이 됐습니다. 단순 기능 구현을 넘어 실제 매출을 만드는 결제·구독 플랫폼을 책임지고 운영하는 경험을 쌓았습니다.",
        "Next.js 16 App Router, Supabase, 네이버 지도 API, PayApp SDK, Google Gemini API 등 다양한 기술 스택을 통합하며, 30개 이상의 API 엔드포인트로 비즈니스 로직을 체계적으로 분리·관리하는 풀스택 설계 역량을 확보했습니다.",
      ],
    },
  },
  {
    id: "BaroCompany",
    type: "company",
    title: "한평생 바로기업",
    date: "2025. 12.19 ~ 2026. 01.21",
    description:
      "정책자금·투자유치·창업 컨설팅 서비스를 소개하는 마케팅 사이트와 사내 상담 관리 어드민을 하나의 Next.js 플랫폼으로 통합했습니다. 광고 채널별 상담 유입 추적부터 이메일 자동 알림, 역할 기반 어드민까지 비즈니스 운영 전반을 디지털화했습니다.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Supabase", "GSAP"],
    gifImage: "/main/work__gif/barocompany.gif",
    github: "https://github.com/bp4sp4/BaroCompany",
    demo: "https://xn--ok0bx6qu3cv5m.com/",
    detail: {
      period: "2025. 12.19 ~ 2026. 01.21",
      mainImage: "/detail__main/page3imgs/baro_main.png",
      images: ["/detail__main/page3imgs/baro_main.png", "/detail__main/page3imgs/baro_02.png", "/detail__main/page3imgs/baro_03.png", "/detail__main/page3imgs/baro_04.png"],
      overview: [
        "한평생 바로기업은 정책자금·투자유치·경영지원·창업교육 분야의 컨설팅 서비스를 제공하는 기업의 공개 마케팅 사이트와 사내 어드민 대시보드를 단일 Next.js 16 App Router 프로젝트로 통합한 플랫폼입니다. 당근·인스타그램 등 광고 채널에서 유입된 상담 신청자의 소스를 자동으로 추적하여 채널별 전환 효과를 측정할 수 있도록 설계했습니다.",
        "상담 신청이 접수되면 Brevo SMTP를 통해 담당자에게 HTML 이메일이 즉시 발송되고, 어드민 대시보드에서 상태·채널·날짜별로 필터링하며 관리할 수 있습니다. super_admin/admin 두 단계 권한 체계로 민감한 데이터 삭제 권한을 분리하여 운영 안전성을 확보했습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내) · 1인 개발,   디자이너 협업 (시안 제공)",
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
  // [REMOVED] 마케팅 랜딩사이트 모음
  // ──────────────────────────────────────────
  /* {
    id: "landingsite",
    type: "company",
    title: "마케팅 랜딩사이트 모음",
    date: "2025. 12 ~ 2026. 01.29",
    description:
      "당근·페이스북·인스타그램 광고와 연결되는 모바일 전용 랜딩페이지 8종입니다. 디자이너와 협업하여 주부·청년·여성 사장님·소상공인 등 타겟별 맞춤 메시지와 CTA를 구성, 실제 상담 전환을 극대화하는 퍼포먼스 마케팅 페이지들입니다.",
    tags: ["Next.js", "TypeScript", "모바일 전용", "마케팅 랜딩페이지", "Vercel"],
    gifImage: "/main/work__gif/landing_page.gif",
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
  }, */
  {
    id: "Eduvisors",
    type: "company",
    title: "한평생 에듀바이저스",
    date: "2025. 06. 09 ~ 2025. 12. 24",
    description:
      "교육기관의 홍보 사이트와 사내 운영 관리를 하나로 합친 풀스택 플랫폼입니다. 비개발자 직원도 팝업·상담·채용 공고를 직접 관리할 수 있는 어드민 대시보드를 구축하여 운영 효율을 크게 높였습니다.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "Supabase", "Zustand"],
    gifImage: "/main/work__gif/eduvisor.gif",
    github: "https://github.com/bp4sp4/korhrdbusiness",
    demo: "https://www.eduvisor.kr/",
    detail: {
      period: "2025. 06. 09 ~ 2025. 12. 24",
      mainImage: "/detail__main/page3imgs/eduvisor_main.png",
      images: ["/detail__main/page3imgs/eduvisor_main.png","/detail__main/page3imgs/eduvisor_01.png", "/detail__main/page3imgs/eduvisor_02.png", "/detail__main/page3imgs/eduvisor_03.png"],

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
  // [REMOVED] NMS 통합 관리 시스템
  // ──────────────────────────────────────────
  /* {
    id: "CRM",
    type: "company",
    title: "NMS 통합 관리 시스템",
    date: "2025. 08. 26 ~ 현재",
    description:
      "교육기관을 위한 전사적 통합 관리 플랫폼으로, 전자결재·계약관리·CRM·인사관리·근태·업무협조 등 18개 모듈을 하나의 시스템으로 통합했습니다. Next.js 15 App Router와 Supabase 기반으로 50개 이상의 컴포넌트와 30개의 비즈니스 로직 라이브러리를 설계·구현했습니다.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "Supabase"],
    gifImage: "/main/work__gif/pinkshop.gif",
    github: "https://github.com/bp4sp4/NMS-System",
    demo: "#",
    detail: {
      period: "2025. 08. 26 ~ 현재",
      mainImage: "/detail__main/page3imgs/crm_main.png",
      images: [
        "/detail__main/page3imgs/pinkshop__main.png",
        "/detail__main/page3imgs/pinkshop__contents.png",
        "/detail__main/page3imgs/pinkshopdetail.png",
      ],
      overview: [
        "교육기관의 전자결재, 계약관리, CRM, 영업관리, 인사·정산, 근태, 업무협조, 게시판, 회의록, 랭킹 등 18개 핵심 업무 모듈을 하나의 통합 플랫폼으로 구축했습니다. src/app 하위에 20개 이상의 페이지 라우트와 30개 이상의 API Routes를 설계하여 복잡한 비즈니스 로직을 체계적으로 분리했으며, src/lib에 30개의 유틸리티 모듈(approval.ts, contract.ts, commission.ts, attendance.ts, kpi.ts 등)로 재사용 가능한 비즈니스 로직 레이어를 구축했습니다.",
        "50개 이상의 React 컴포넌트(ApprovalFormRenderer, SignaturePad, TemplateEditor, PDFViewer, ChatBot, BulkUploadModal 등)를 직접 설계·구현했으며, Supabase Auth 기반 3단계 권한 체계(super_admin·admin·user), DocxTemplater+jsPDF 기반 전자계약서 생성, Chart.js 기반 KPI 대시보드, react-signature-canvas 기반 전자서명까지 엔터프라이즈급 기능을 풀스택으로 개발했습니다.",
      ],
      role: {
        type: "실무 프로젝트 (사내)",
        parts: ["풀스택 개발 100%", "DB 설계 및 API 구축 (30+ 라이브러리)", "UI/UX 설계 (50+ 컴포넌트)"],
      },
      links: {
        github: "https://github.com/bp4sp4/NMS-System",
        demo: "#",
      },
      goals: [
        {
          icon: "fas fa-cubes",
          title: "18개 모듈 통합 플랫폼",
          description:
            "전자결재·계약·CRM·영업·인사·근태·업무협조·게시판·회의록·랭킹 등 파편화된 업무 도구를 단일 시스템으로 통합하여 운영 효율을 극대화합니다.",
        },
        {
          icon: "fas fa-project-diagram",
          title: "체계적인 코드 아키텍처",
          description: "src/lib에 30개의 비즈니스 로직 모듈, src/components에 50개 이상의 UI 컴포넌트를 분리하여 유지보수성과 확장성을 확보합니다.",
        },
        {
          icon: "fas fa-file-signature",
          title: "전자계약 & 결재 자동화",
          description: "DocxTemplater 기반 계약서 템플릿, react-signature-canvas 전자서명, 다단계 결재 라인을 자동화하여 문서 처리 효율을 높입니다.",
        },
        {
          icon: "fas fa-shield-alt",
          title: "엔터프라이즈급 권한 관리",
          description:
            "Supabase Auth 기반 super_admin·admin·user 3단계 RBAC 체계로 페이지 접근과 데이터 조작 범위를 서버사이드에서 엄격히 제한합니다.",
        },
      ],
      keyFeatures: [
        {
          icon: "fas fa-stamp",
          title: "전자결재 시스템",
          description: "휴가·출장·경비 등 결재 양식과 결재 라인 자동 설정, 긴급도 지정, 파일 첨부, 임시저장 및 결재 이력 추적 (ApprovalFormRenderer, approval.ts)",
          category: "결재·계약",
        },
        {
          icon: "fas fa-file-contract",
          title: "계약 관리",
          description: "DocxTemplater 기반 계약서 템플릿 생성, PDF 전자서명(SignaturePad), 다단계 승인 워크플로우, 변경 이력 추적, 만료일 알림 (contract.ts, contractTemplate.ts)",
          category: "결재·계약",
        },
        {
          icon: "fas fa-address-book",
          title: "고객 관리 (CRM)",
          description: "고객 등록·분류(신규·가망·계약), 학점은행제 교육과정 관리, 매출 추적 및 자동 수수료 계산, 활동 로그, 엑셀 일괄 업로드 (BulkUploadModal, customerActivityLog.ts)",
          category: "영업·CRM",
        },
        {
          icon: "fas fa-chart-bar",
          title: "영업 실적 & 정산",
          description: "매출 등록·수정, 기관별 정산 규칙 적용, 자동 커미션 계산(commission.ts), Chart.js 기반 월별·기간별 통계 분석 대시보드",
          category: "영업·CRM",
        },
        {
          icon: "fas fa-trophy",
          title: "랭킹 시스템",
          description: "개인별 영업 실적 랭킹, 지점별 집계, 월별 스냅샷 데이터 보존, 순위 변동 애니메이션 시각화",
          category: "영업·CRM",
        },
        {
          icon: "fas fa-clock",
          title: "근태·출퇴근 관리",
          description: "실시간 출퇴근 기록(check-in/out API), 근무 시간 자동 계산, 월별 출근율·지각 통계, 개인별 기록 조회 (attendance.ts)",
          category: "인사·근태",
        },
        {
          icon: "fas fa-plane-departure",
          title: "연차·출장 관리",
          description: "전자결재 연동 휴가 신청, 잔여 연차 자동 계산·검증, 반차(오전/오후) 지원, 출장 신청·보고서·승인 프로세스 (annualLeave.ts)",
          category: "인사·근태",
        },
        {
          icon: "fas fa-hands-helping",
          title: "업무협조 시스템",
          description: "부서간 협업 요청 작성, 요청부서·담당자 자동 매칭, 상태 관리(대기·승인·진행·완료), 마감일 알림 및 진행 피드백 (workCooperation.ts)",
          category: "협업",
        },
        {
          icon: "fas fa-comments",
          title: "영업 상담 게시판",
          description: "고객 상담 등록·관리, 녹음·이미지 파일 첨부, 내부·고객 응대 기록, 상태별 분류 및 추적 (salesConsultation.ts)",
          category: "협업",
        },
        {
          icon: "fas fa-chalkboard-teacher",
          title: "실무교육 관리",
          description: "1·2교시 커리큘럼 편성, 오전·오후 출석 체크, 자동 지각 판정, 교육 참여 통계 산출",
          category: "교육",
        },
        {
          icon: "fas fa-bullhorn",
          title: "게시판 & 회의록",
          description: "카테고리별 게시판(공지·일반), 댓글·추천·파일 첨부, 회의실 예약, 회의록 작성 및 PDF 생성 (board.ts, meetingRooms.ts)",
          category: "커뮤니케이션",
        },
        {
          icon: "fas fa-cogs",
          title: "관리자 시스템",
          description: "사용자·권한 관리, 활동 로그 감사, 정산 총괄, 팝업 관리, KPI 목표 설정·달성률 추적, 커스텀 결재 양식 빌더 (kpi.ts, permission.ts)",
          category: "시스템",
        },
      ],
      technologies: [
        {
          category: "프론트엔드",
          items: [
            { name: "Next.js 15", description: "App Router 기반 풀스택 프레임워크 (React 19)" },
            { name: "TypeScript", description: "타입 안정성을 높인 자바스크립트" },
            { name: "Tailwind CSS 4", description: "유틸리티 기반 CSS 프레임워크" },
            { name: "Chart.js", description: "react-chartjs-2 기반 데이터 시각화" },
          ],
        },
        {
          category: "백엔드 및 데이터베이스",
          items: [
            { name: "Supabase", description: "PostgreSQL + Auth + Storage 통합 BaaS" },
            { name: "Next.js API Routes", description: "30개 이상의 서버사이드 API 엔드포인트" },
            { name: "Supabase Auth", description: "RBAC 기반 3단계 권한 인증 체계" },
          ],
        },
        {
          category: "문서 처리 & UI 라이브러리",
          items: [
            { name: "DocxTemplater", description: "Word 기반 계약서 템플릿 생성" },
            { name: "jsPDF / html2canvas", description: "PDF 생성 및 문서 캡처" },
            { name: "PDF.js", description: "브라우저 내 PDF 렌더링 뷰어" },
            { name: "react-signature-canvas", description: "전자서명 패드 컴포넌트" },
            { name: "XLSX / Mammoth", description: "엑셀·Word 파일 처리" },
            { name: "ToastUI Editor", description: "리치 텍스트 에디터" },
          ],
        },
      ],
      challenges: [
        {
          title: "18개 모듈 간 데이터 흐름 설계",
          challenge:
            "전자결재·계약·CRM·정산·근태 등 18개 모듈이 서로 연동되어야 했으며, 모듈 간 데이터 의존성이 복잡하게 얽혀 일관성 유지가 어려웠습니다.",
          solution:
            "src/lib에 30개의 독립적인 비즈니스 로직 모듈(approval.ts, contract.ts, commission.ts 등)을 분리하고, 모듈 간 의존성을 최소화하는 아키텍처를 설계하여 유지보수성을 확보했습니다.",
        },
        {
          title: "DocxTemplater 기반 전자계약서 자동 생성",
          challenge:
            "Word 템플릿에서 필드를 매핑하고 전자서명을 삽입한 뒤 PDF로 변환하는 전 과정을 브라우저 내에서 처리해야 했으며, 템플릿 버전 관리도 필요했습니다.",
          solution:
            "DocxTemplater로 템플릿 파싱·필드 매핑, react-signature-canvas로 전자서명 캡처, jsPDF+html2canvas로 최종 PDF를 생성하는 파이프라인을 구축하고, templateParser.ts로 버전 이력을 관리했습니다.",
        },
        {
          title: "3단계 RBAC 권한과 50+ 컴포넌트 접근 제어",
          challenge:
            "super_admin·admin·user 역할에 따라 20개 이상의 페이지와 50개 이상의 컴포넌트에서 접근 권한과 데이터 노출 범위가 달라야 했습니다.",
          solution:
            "AuthContext.tsx에서 전역 인증 상태를 관리하고, permission.ts로 역할별 권한을 정의하여 서버사이드 API Routes와 클라이언트 컴포넌트 양쪽에서 일관된 접근 제어를 적용했습니다.",
        },
      ],
      metrics: [
        {
          value: "18개",
          label: "통합 업무 모듈",
          icon: "fas fa-cubes",
        },
        {
          value: "50+",
          label: "React 컴포넌트",
          icon: "fas fa-puzzle-piece",
        },
        {
          value: "30개",
          label: "비즈니스 로직 라이브러리",
          icon: "fas fa-code",
        },
        {
          value: "실서비스",
          label: "운영 중",
          icon: "fas fa-rocket",
        },
      ],
      outcome: [
        "18개 업무 모듈, 50개 이상의 컴포넌트, 30개의 비즈니스 로직 라이브러리를 포함한 엔터프라이즈급 통합 관리 시스템을 풀스택으로 단독 구축하여, 교육기관의 전사적 업무 프로세스를 완전히 디지털화했습니다.",
        "전자결재·전자계약서·KPI 대시보드·근태관리 등 복잡한 비즈니스 요구사항을 체계적인 모듈 아키텍처로 해결하며, 대규모 풀스택 프로젝트의 설계·구현·운영 전 과정을 경험했습니다.",
      ],
    },
  }, */
  // ──────────────────────────────────────────
  {
    id: "care",
    type: "company",
    title: "한평생 요양보호사교육원",
    date: "2025.12.05 ~ 2025.12.10",
    description:
      "본 프로젝트는 동일한 코드베이스를 유지한 채 회사명·로고·텍스트·이미지 등 일부 데이터만 교체하여 다른 요양회사에 빠르게 납품할 수 있도록 템플릿화할 계획인 프로젝트입니다.",
    tags: ["React", "CSS Modules", "TypeScript", "UI/UX"],
    gifImage: "/main/work__gif/caving.gif",
    github: "https://github.com/bp4sp4/caving_demo",
    demo: "https://caving-demo.vercel.app/",
    detail: {
      period: "25.03.25 ~ 25.04.01",
      mainImage: "/detail__main/main__page__img/caving_01.png",
      images: [
        "/detail__main/page3imgs/caving_02.png",
        "/detail__main/page3imgs/caving_03.png",
        "/detail__main/page3imgs/caving_04.png",
      ],
      overview: [
        "본 프로젝트는 '한평생 요양보호사교육원'의 웹 서비스를 구축함과 동시에, 향후 다양한 파트너사에 신속하게 대응할 수 있는 화이트 라벨(White-label) 템플릿 제작을 목표로 진행되었습니다.",
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
        ...(p.detail!.metrics ? { metrics: p.detail!.metrics } : {}),
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

// 하위 호환성 유지
export const projectDetail = projectDetails.pinkshop;
