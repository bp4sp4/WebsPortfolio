import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
  id: "BaroCompany",
  type: "company",
  title: "한평생 바로기업",
  headline: "마케팅 사이트와 상담 어드민을 하나로 합친 플랫폼",
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
    images: [
      "/detail__main/page3imgs/baro_main.png",
      "/detail__main/page3imgs/baro_02.png",
      "/detail__main/page3imgs/baro_03.png",
      "/detail__main/page3imgs/baro_04.png",
      "/detail__main/page3imgs/baro_m_01.png",
      "/detail__main/page3imgs/baro_m_02.png",
      "/detail__main/page3imgs/baro_m_03.png",
    ],
    overview: [
      "⚠️ 한평생 바로기업 사이트와 어드민은 현재 운영을 중단한 상태입니다. 아래 화면은 운영 당시의 캡처이며, 상담 데이터가 담긴 어드민 화면은 내부 정보라 제외했습니다. 사이트 방문 링크는 예고 없이 닫힐 수 있습니다.",
      "한평생 바로기업은 정책자금·투자유치·경영지원·창업교육 분야의 컨설팅 서비스를 제공하는 기업의 공개 마케팅 사이트와 사내 어드민 대시보드를 단일 Next.js 16 App Router 프로젝트로 통합한 플랫폼입니다. 당근·인스타그램 등 광고 채널에서 유입된 상담 신청자의 소스를 자동으로 추적하여 채널별 전환 효과를 측정할 수 있도록 설계했습니다.",
      "상담 신청이 접수되면 Brevo SMTP를 통해 담당자에게 HTML 이메일이 즉시 발송되고, 어드민 대시보드에서 상태·채널·날짜별로 필터링하며 관리할 수 있습니다. super_admin/admin 두 단계 권한 체계로 민감한 데이터 삭제 권한을 분리하여 운영 안전성을 확보했습니다.",
    ],
    role: {
      type: "실무 프로젝트 (사내)",
      team: "1인 개발 · 디자이너 협업 (시안 제공)",
      parts: [
        "프론트엔드 개발 100%",
        "마케팅 사이트 기획 및 퍼블리싱",
        "어드민 대시보드 설계 및 구현",
        "DB 설계 및 Supabase 연동",
        "Slack·이메일 알림 시스템 구축 (Webhook · Brevo SMTP)",
      ],
    },
    links: {
      github: "https://github.com/bp4sp4/BaroCompany",
      demo: "https://xn--ok0bx6qu3cv5m.com/",
    },
    goals: [
      {
        icon: "fas fa-layer-group",
        title: "마케팅·운영 통합 플랫폼",
        description:
          "서비스 소개·성공사례·정책자금·투자유치 같은 공개 마케팅 페이지와 사내 상담 관리 어드민을 하나의 Next.js 코드베이스로 운영합니다. 어느 화면에서든 상담 폼이 따라다니고, 모바일에서는 하단 고정 배너로 같은 흐름을 이어갑니다.",
        groups: [
          {
            title: "웹",
            layout: "web",
            shots: [
              { src: "/detail__main/page3imgs/baro_02.png", caption: "성공 사례 슬라이더 - 승인 금액을 앞세운 카드형 후기, 우측에는 페이지 어디서나 따라오는 상담 신청 폼" },
              { src: "/detail__main/page3imgs/baro_03.png", caption: "투자 유치 프로세스 - 5단계 절차를 카드로 정리, 하단에 컨설팅 무료상담 바" },
              { src: "/detail__main/page3imgs/baro_04.png", caption: "서비스 소개 - 전문가 팀·네트워크·데이터 기반·지속 지원 4가지 강점" },
            ],
          },
          {
            title: "모바일",
            layout: "mobile",
            shots: [
              { src: "/detail__main/page3imgs/baro_m_01.png", tag: "홈", caption: "모바일 히어로 - 데스크톱과 다른 세로 영상을 서빙, 하단에 1:1 전문가 상담·전화 버튼 고정" },
              { src: "/detail__main/page3imgs/baro_m_02.png", tag: "단계 선택", caption: "대표님 단계 선택과 정책자금 성공사례 카드 슬라이드" },
              { src: "/detail__main/page3imgs/baro_m_03.png", tag: "상담 신청", caption: "하단 배너를 누르면 뜨는 상담 신청 모달 - 이름·연락처·동의만으로 접수" },
            ],
          },
        ],
      },
    ],
    keyFeatures: [
      {
        icon: "fas fa-crosshairs",
        title: "광고 소스 추적 (ClickSourceTracker)",
        description: "URL 파라미터(click_source 또는 utm_source)를 세션에 보관했다가 상담 신청 데이터에 유입 채널을 자동 태깅. 채널별 상담 전환율을 대시보드에서 즉시 확인 가능.",
      },
      {
        icon: "fas fa-envelope",
        title: "Slack · 이메일 즉시 알림",
        description: "상담 신청 시 Slack 웹훅으로 담당자 채널에 바로 알리고, Brevo SMTP로 HTML 이메일도 함께 발송. 리드 대응 속도를 높이는 운영 자동화.",
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
        category: "알림",
        items: [
          { name: "Slack Webhook", description: "상담 접수 즉시 담당자 채널 알림" },
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
          "ClickSourceTracker 컴포넌트가 URL의 click_source·utm_source 파라미터를 읽어 세션에 보관하고, 상담 신청 데이터에 유입 채널을 자동으로 태깅했습니다. 어드민 대시보드에서 채널별 필터링과 통계를 확인할 수 있어 데이터 기반 마케팅 의사결정이 가능해졌습니다.",
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
    // 결과 섹션: Before → After diff (왼쪽 '이전' 문구는 실제 상황에 맞게 다듬어 주세요)
    changes: [
      {
        key: "광고 성과",
        before: "당근·인스타그램 등 어느 채널에서 상담이 왔는지 알 수 없음",
        after: "유입 소스 **자동 추적**으로 채널별 상담 전환을 수치로 확인, 광고 예산 조정 근거 확보",
      },
      {
        key: "상담 접수",
        before: "신청이 들어와도 담당자가 확인할 때까지 대기",
        after: "접수 즉시 **Brevo SMTP HTML 이메일**이 담당자에게 자동 발송",
      },
      {
        key: "상담 관리",
        before: "상담 목록을 스프레드시트로 옮겨 수동 정리",
        after: "어드민 대시보드에서 **상태·채널·날짜 필터**로 바로 관리",
      },
      {
        key: "권한",
        before: "단일 계정이라 누구나 데이터를 지울 수 있음",
        after: "**super_admin / admin** 2단계 권한으로 삭제 권한 분리",
      },
    ],
    // diff 아래 숫자 한 줄
    metrics: [
      { value: "4", label: "컨설팅 분야 · 정책자금 · 투자유치 · 경영지원 · 창업교육", icon: "fas fa-briefcase" },
      { value: "1", label: "코드베이스 · 사이트 + 어드민", icon: "fas fa-code-branch" },
      { value: "2", label: "단계 권한", icon: "fas fa-user-shield" },
      { value: "즉시", label: "상담 접수 이메일 알림", icon: "fas fa-envelope" },
    ],
    outcome: [
      "광고 채널 소스 추적 기능 도입으로 당근·인스타그램 등 각 채널의 상담 전환 효과를 수치로 파악할 수 있게 되었습니다. 마케팅 담당자가 데이터를 기반으로 광고 예산을 조정할 수 있는 환경이 마련되었습니다.",
      "Next.js 16·React 19 등 최신 기술 스택을 실무에 적용하며 풀스택 개발 역량을 확장했습니다. Brevo SMTP 이메일 자동화와 이중 권한 어드민 설계를 통해 운영 자동화와 보안 설계 경험을 쌓았습니다.",
    ],
  },
};
