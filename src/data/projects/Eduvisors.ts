import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
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
};
