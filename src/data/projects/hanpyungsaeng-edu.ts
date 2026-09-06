import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
  id: "hanpyungsaeng-edu",
  type: "company",
  title: "한평생유학",
  headline: "결제부터 신청서까지 한 번에 끝나는 유학 신청 플랫폼",
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
      "/detail__main/page3imgs/youhak_home.png",
      "/detail__main/page3imgs/youhak_home_2.png",
      "/detail__main/page3imgs/youhak_program.png",
      "/detail__main/page3imgs/youhak_program_2.png",
      "/detail__main/page3imgs/youhak_03.png",
      
      
      "/detail__main/page3imgs/youhak_home_3.png",
      "/detail__main/page3imgs/youhak_02.png",
      "/detail__main/page3imgs/youhak_m_home.png",
      "/detail__main/page3imgs/youhak_m_program.png",
      "/detail__main/page3imgs/youhak_m_program_2.png",
      "/detail__main/page3imgs/youhak_m_program_3.png",
      "/detail__main/page3imgs/youhak_m_reasons.png",
      "/detail__main/page3imgs/youhak_m_reviews.png",
      
      
    ],
    overview: [
      "한평생유학은 \"잘 보내는 것보다, 잘 적응하는 유학이 중요합니다\"라는 슬로건 아래 어린이·청소년에게 미국·캐나다·영국·필리핀·뉴질랜드 등 해외 어학연수·사립학교·홈스테이 프로그램을 안내하고 온라인 결제와 학생 신청 정보를 받는 유학 신청 플랫폼입니다.",
      "Next.js 16 App Router + React 19 + Supabase 기반으로 카카오·네이버 소셜 로그인, 네이버 클라우드 SMS 휴대폰 인증, PayApp 간편결제(카드·카카오페이·네이버페이·계좌이체 등), 결제 완료 후 6개 섹션 학생 신청서, 임시저장(draft) 복구, 여권·증명사진 업로드, 어드민 신청서 검토까지 결제·신청 전 흐름을 풀스택으로 구현했습니다.",
    ],
    role: {
      type: "실무 프로젝트 (사내)",
      team: "2인 협업 · 개발자 1 + 디자이너 1",
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
        description: "홈의 진행 과정 안내와 프로그램 가격표에서 출발해 PayApp 결제, 결제 완료 후 학생 신청서까지 한 흐름으로 이어집니다. 학부모가 결제 후 이탈 없이 신청을 끝낼 수 있도록 단계마다 다음 행동을 바로 보여줍니다.",
        groups: [
          {
            title: "웹",
            layout: "web",
            shots: [
              { src: "/detail__main/page3imgs/youhak_home.png", tag: "홈", caption: "히어로 - '잘 보내는 것보다, 잘 적응하는 유학' 메시지와 무료상담 CTA, 우측 고정 상담예약·견적요청·유학후기 바" },
              { src: "/detail__main/page3imgs/youhak_home_2.png", caption: "유학 진행 과정 5단계(상담 신청 → 1:1 상담 → 맞춤 캠프 → 출국 준비 → 현지 도착)와 국가별 프로그램 카드" },
              { src: "/detail__main/page3imgs/youhak_program.png", tag: "프로그램", caption: "프로그램 안내 페이지 - 국가·지역·형태·일정·참가 연령·가격을 표로 비교" },
              { src: "/detail__main/page3imgs/youhak_program_2.png", caption: "가격표 - 나홀로·부모동반 형태와 3주·4주·10주 일정별 금액, 이 표의 금액을 서버 가격표가 그대로 씀" },
              { src: "/detail__main/page3imgs/youhak_03.png", tag: "참가신청", caption: "결제 후 참가 신청서 - 프로그램·참가자·해외 출국용 정보·보호자·홈스테이·참가 동의 6개 섹션, 여권사본 업로드와 임시저장" },
            ],
          },
        ],
      },
      {
        icon: "fas fa-passport",
        title: "유학 진행에 필요한 정보 완비",
        description: "여권상 영문 이름·여권번호·만료일·여권사본, 보호자 정보, 영어 수준·알러지·수영 가능 여부 등 홈스테이와 현지 진행에 필요한 정보를 결제 후 신청서에서 수집합니다. 첨부 파일은 비공개 스토리지에 저장하고 어드민은 1시간짜리 서명 URL로만 열람합니다.",
        shots: [
          { src: "/detail__main/page3imgs/youhak_home_3.png", caption: "한평생유학을 선택하는 이유 - 현지 담당자 연결, 매일 밀착 사진, 출국 전 준비체크, 검증된 학교 추천" },
          { src: "/detail__main/page3imgs/youhak_02.png", tag: "후기", caption: "학부모 후기 - 프로그램·기간·형태 태그가 붙은 실제 참가 후기 그리드" },
        ],
      },
      {
        icon: "fas fa-mobile-alt",
        title: "모바일 우선 설계",
        description: "학부모의 주된 환경인 모바일에 맞춰 히어로·진행 과정·프로그램 카드·가격표·로그인·약관 동의를 세로 흐름으로 다시 배치했고, 상담예약·견적요청·유학후기는 하단 고정 바로 항상 닿게 했습니다. 결제 폼과 서명 패드도 모바일에서 먼저 검증했습니다.",
        groups: [
          {
            title: "모바일",
            layout: "mobile",
            shots: [
              { src: "/detail__main/page3imgs/youhak_m_home.png", tag: "홈", caption: "모바일 히어로와 하단 고정 상담예약·견적요청·유학후기 바" },
              { src: "/detail__main/page3imgs/youhak_m_program.png", tag: "프로그램", caption: "프로그램 안내 히어로와 국가별 카드 시작" },
              { src: "/detail__main/page3imgs/youhak_m_program_2.png", tag: "가격 카드", caption: "데스크톱의 가격표를 카드로 풀어 금액(달러 병기)·일정·프로그램 구성을 한 카드에 담음 (캐나다 밴쿠버-써리 4주 · 영국 4주)" },
              { src: "/detail__main/page3imgs/youhak_m_program_3.png", tag: "가격 카드", caption: "나홀로·부모동반 형태와 부모동반 금액을 같은 카드에 표시 (뉴질랜드 오클랜드 · 해밀턴 4주)" },
              { src: "/detail__main/page3imgs/youhak_m_reasons.png", tag: "선택 이유", caption: "현지 담당자 연결·밀착사진·출국 전 준비체크 카드를 세로로 배치" },
              { src: "/detail__main/page3imgs/youhak_m_reviews.png", tag: "후기", caption: "학부모 후기를 가로 스와이프 카드로, 하단 고정 상담·견적·후기 바는 항상 노출" },
            ],
          },
        ],
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
    // 결과 섹션: Before → After diff (왼쪽 '이전' 문구는 실제 상황에 맞게 다듬어 주세요)
    changes: [
      {
        key: "신청 접수",
        before: "상담 후 서류를 이메일·메신저로 주고받으며 신청 정보를 모음",
        after: "결제 완료 후 **6개 섹션 온라인 신청서**, 여권·증명사진 업로드까지 웹에서 완료",
      },
      {
        key: "결제",
        before: "계좌 안내 후 입금 확인을 사람이 직접 대조",
        after: "**PayApp 간편결제**(카드·카카오페이·네이버페이·계좌이체)로 결제 즉시 확인",
      },
      {
        key: "작성 이탈",
        before: "긴 신청서를 한 번에 못 채우면 처음부터 다시 작성",
        after: "**임시저장(draft) 복구**로 중단한 곳부터 이어서 작성",
      },
      {
        key: "로그인 · 인증",
        before: "회원가입 절차가 길어 결제 전에 이탈",
        after: "카카오·네이버 **소셜 로그인** + 네이버 클라우드 SMS 휴대폰 인증으로 진입 장벽 축소",
      },
    ],
    // diff 아래 숫자 한 줄
    metrics: [
      { value: "5+", label: "국가 · 미국 · 캐나다 · 영국 · 필리핀 · 뉴질랜드", icon: "fas fa-globe" },
      { value: "6", label: "섹션 신청서", icon: "fas fa-file-alt" },
      { value: "2", label: "소셜 로그인", icon: "fas fa-user" },
      { value: "4+", label: "결제 수단", icon: "fas fa-credit-card" },
      { value: "hanyouhak.com", label: "운영 중", icon: "fas fa-rocket" },
    ],
    outcome: [
      "어린이·청소년 대상 해외 유학 신청·결제 플랫폼을 hanyouhak.com에서 운영 중이며, 카카오·네이버 소셜 로그인, PayApp 간편결제, 6개 섹션 신청서, 임시저장 복구, 여권·증명사진 업로드, 어드민 검토까지 결제·신청 전 흐름을 풀스택으로 완성했습니다.",
      "PayApp 결제 게이트웨이 통합과 COOP 제약 환경에서의 결제창 통신 처리, Supabase 기반 도메인 분리 데이터 모델링, Cloudflare CDN을 활용한 영상 로딩 최적화 등 단순 CRUD를 넘는 풀스택 비즈니스 시스템 설계 경험을 쌓았습니다. 디자이너와의 Figma 시안 기반 협업으로 시각적 완성도와 개발 속도를 동시에 확보했습니다.",
    ],
  },
};
