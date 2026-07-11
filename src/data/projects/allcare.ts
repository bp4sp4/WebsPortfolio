import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
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
};
