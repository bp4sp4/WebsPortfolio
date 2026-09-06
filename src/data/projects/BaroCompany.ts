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
    images: [
      "/detail__main/page3imgs/baro_main.png",
      "/detail__main/page3imgs/baro_admin_login.png",
      "/detail__main/page3imgs/baro_02.png",
      "/detail__main/page3imgs/baro_03.png",
      "/detail__main/page3imgs/baro_04.png",
      "/detail__main/page3imgs/baro_m_01.png",
      "/detail__main/page3imgs/baro_m_02.png",
      "/detail__main/page3imgs/baro_m_03.png",
    ],
    overview: [
      "⚠️ 한평생 바로기업 사이트와 어드민은 현재 운영을 중단한 상태입니다. 아래 화면은 운영 당시의 캡처이며, 상담 데이터가 담긴 어드민 화면은 내부 정보라 코드 발췌로 대신합니다. 사이트 방문 링크는 예고 없이 닫힐 수 있습니다.",
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
        "Slack·이메일 알림 시스템 구축 (Webhook · Brevo SMTP)",
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
        description:
          "당근·인스타그램 등 광고 링크에 붙은 click_source 또는 utm_source 값을 세션에 보관했다가 상담 신청과 함께 저장합니다. 어떤 채널이 실제 상담으로 이어졌는지 어드민에서 필터·집계해 광고 예산을 데이터로 조정할 수 있습니다.",
        snippet: {
          title: "app/utils/clickSource.ts",
          code: "// app/utils/clickSource.ts — 광고 링크의 유입경로를 세션에 보관해 상담 신청에 함께 저장\nexport function getClickSource(): string | null {\n  if (typeof window === \"undefined\") return null;\n  const params = new URLSearchParams(window.location.search);\n\n  // 1) ?click_source=daangn 처럼 직접 지정한 값\n  const direct = params.get(\"click_source\");\n  if (direct) {\n    sessionStorage.setItem(\"click_source\", direct);\n    return direct;\n  }\n\n  // 2) 광고 플랫폼이 붙여 주는 utm_source 도 같은 키로 흡수\n  const utm = params.get(\"utm_source\");\n  if (utm) {\n    const src = utm.toLowerCase();\n    sessionStorage.setItem(\"click_source\", src);\n    return src;\n  }\n\n  // 3) 페이지를 옮겨 다녀도 세션에 남은 값을 유지\n  return sessionStorage.getItem(\"click_source\");\n}\n\n// 저장된 값이 없고 홈에서 신청했다면 \"바로기업 홈페이지\" 로 기록\n// → 상담 신청 API 가 이 값을 consultations.click_source 에 저장\n// → 어드민에서 유입경로별 필터·집계",
          note: "실제 소스에서 발췌해 주석만 보강했습니다. 상담 데이터는 회사 내부 정보라 어드민 화면 대신 코드로 보여 드립니다.",
        },
      },
      {
        icon: "fas fa-bell",
        title: "상담 즉시 알림 자동화",
        description:
          "상담 신청이 접수되면 같은 요청 안에서 Slack 웹훅으로 담당자 채널에 바로 알리고, Brevo SMTP로 HTML 이메일도 함께 보냅니다. 리드가 들어온 지 몇 초 안에 첫 연락을 시작할 수 있는 환경입니다.",
        snippet: {
          title: "app/api/consultations/route.ts · lib/email.ts",
          code: "// app/api/consultations/route.ts — 상담 접수 즉시 Slack + 이메일로 담당자에게 알림\nexport const maxDuration = 90; // Vercel 서버리스: 이메일 재시도 여유\n\nasync function sendSlackNotification({ name, contact, click_source, landing_page }) {\n  const text = [\n    \"*새로운 상담 신청이 접수되었습니다.*\",\n    landing_page ? `- 랜딩페이지: ${landing_page}` : \"\",\n    `- 이름/기업명: ${name}`,\n    `- 연락처: ${contact}`,\n    `- 유입경로: ${click_source || \"바로기업 홈페이지\"}`,\n    `- 신청시각: ${new Date().toLocaleString(\"ko-KR\")}`,\n  ].filter(Boolean).join(\"\\n\");\n\n  await fetch(process.env.SLACK_WEBHOOK_URL!, {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({ text }),\n  });\n}\n\n// lib/email.ts — Brevo SMTP(465/SSL) + 10초 타임아웃으로 서버리스에서 안정 동작\nconst transporter = nodemailer.createTransport({\n  host: \"smtp-relay.brevo.com\",\n  port: 465,\n  secure: true,\n  auth: { user: process.env.BREVO_SMTP_LOGIN, pass: process.env.BREVO_SMTP_KEY },\n  connectionTimeout: 10000,\n  greetingTimeout: 10000,\n  socketTimeout: 10000,\n});",
          note: "웹훅 URL·SMTP 자격증명은 환경 변수로만 다루며 코드에는 포함하지 않았습니다.",
        },
      },
      {
        icon: "fas fa-shield-alt",
        title: "역할 기반 접근 제어",
        description:
          "어드민은 공개 사이트와 분리된 별도 로그인 관문을 거치고, super_admin/admin 두 단계 역할은 DB 제약으로 고정한 뒤 서버에서 토큰을 재검증합니다. 데이터 삭제 같은 민감 작업은 super_admin만 할 수 있습니다.",
        shots: [
          { src: "/detail__main/page3imgs/baro_admin_login.png", tag: "어드민 관문", caption: "/admin 진입 시 나오는 관리자 전용 로그인 — 공개 사이트와 완전히 분리된 화면" },
        ],
        snippet: {
          title: "migrations/create_admins_table.sql · api/admin/check-role",
          code: "-- migrations/create_admins_table.sql — 관리자 역할을 DB 제약으로 고정\nCREATE TABLE IF NOT EXISTS admins (\n  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email      TEXT UNIQUE NOT NULL,\n  role       TEXT NOT NULL CHECK (role IN ('super_admin', 'admin')),\n  created_at TIMESTAMPTZ DEFAULT NOW(),\n  updated_at TIMESTAMPTZ DEFAULT NOW()\n);\nALTER TABLE admins ENABLE ROW LEVEL SECURITY;  -- 서버(service role)만 접근\n\n-- app/api/admin/check-role/route.ts\n-- 클라이언트가 보낸 토큰을 서버에서 다시 검증한 뒤 역할을 돌려준다\nconst { data: { user } } = await supabaseAdmin.auth.getUser(token);\nconst { data } = await supabaseAdmin\n  .from(\"admins\").select(\"role\").eq(\"email\", user.email).single();\nreturn NextResponse.json({ role: data?.role ?? \"admin\" });\n\n-- 화면: 삭제 버튼은 super_admin 세션에서만 렌더링\n-- 서버: 삭제 API 도 같은 검증을 거쳐 클라이언트 우회를 차단",
        },
      },
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
              { src: "/detail__main/page3imgs/baro_02.png", caption: "성공 사례 슬라이더 — 승인 금액을 앞세운 카드형 후기, 우측에는 페이지 어디서나 따라오는 상담 신청 폼" },
              { src: "/detail__main/page3imgs/baro_03.png", caption: "투자 유치 프로세스 — 5단계 절차를 카드로 정리, 하단에 컨설팅 무료상담 바" },
              { src: "/detail__main/page3imgs/baro_04.png", caption: "서비스 소개 — 전문가 팀·네트워크·데이터 기반·지속 지원 4가지 강점" },
            ],
          },
          {
            title: "모바일",
            layout: "mobile",
            shots: [
              { src: "/detail__main/page3imgs/baro_m_01.png", tag: "홈", caption: "모바일 히어로 — 데스크톱과 다른 세로 영상을 서빙, 하단에 1:1 전문가 상담·전화 버튼 고정" },
              { src: "/detail__main/page3imgs/baro_m_02.png", tag: "단계 선택", caption: "대표님 단계 선택과 정책자금 성공사례 카드 슬라이드" },
              { src: "/detail__main/page3imgs/baro_m_03.png", tag: "상담 신청", caption: "하단 배너를 누르면 뜨는 상담 신청 모달 — 이름·연락처·동의만으로 접수" },
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
    outcome: [
      "광고 채널 소스 추적 기능 도입으로 당근·인스타그램 등 각 채널의 상담 전환 효과를 수치로 파악할 수 있게 되었습니다. 마케팅 담당자가 데이터를 기반으로 광고 예산을 조정할 수 있는 환경이 마련되었습니다.",
      "Next.js 16·React 19 등 최신 기술 스택을 실무에 적용하며 풀스택 개발 역량을 확장했습니다. Brevo SMTP 이메일 자동화와 이중 권한 어드민 설계를 통해 운영 자동화와 보안 설계 경험을 쌓았습니다.",
    ],
  },
};
