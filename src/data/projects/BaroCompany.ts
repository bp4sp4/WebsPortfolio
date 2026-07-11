import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
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
};
