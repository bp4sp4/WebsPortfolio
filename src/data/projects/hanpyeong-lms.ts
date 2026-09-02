import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
  id: "hanpyeong-lms",
  type: "company",
  title: "한평생 직업훈련 LMS",
  date: "2026. 07. 01 ~ 진행 중",
  description:
    "무료수강신청 → 온라인 강의 → 온라인 시험 → 자격증 발급까지 이어지는 민간자격 온라인 교육기관 LMS입니다. 공개 사이트, 학생 강의실, 어드민 대시보드를 하나의 Next.js 16 프로젝트로 통합하고 Cloudflare 영상 게이트·나이스페이/PayApp 결제·Aligo/SENS SMS·AWS S3 자료 관리까지 풀스택으로 구축했습니다.",
  tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind 4", "Cloudflare", "AWS S3"],
  gifImage: "/main/work__gif/lms.gif",
  github: "#",
  demo: "https://www.korhrd.co.kr/",
  detail: {
    period: "2026. 07. 01 ~ 진행 중",
    mainImage: "/detail__main/page3imgs/lms_main.png",
    images: [
      "/detail__main/page3imgs/lms_main.png",
      "/detail__main/page3imgs/lms_01.png",
      "/detail__main/page3imgs/lms_02.png",
      "/detail__main/page3imgs/lms_03.png",
    ],
    overview: [
      "한평생 직업훈련은 사회복지사·보육교사·평생교육사·한국어 교원 등 국가자격증 준비를 지원하고 정식 등록 민간자격을 온라인으로 발급하는 교육 플랫폼입니다. 무료수강신청 → 온라인 강의 수강(약 20시간, 6주) → 온라인 시험(60분) → 상장형·카드형 자격증 발급까지 학습자의 전체 여정을 한 시스템에서 처리합니다.",
      "Next.js 16 App Router + React 19 + Supabase 기반으로 공개 사이트, 학생 강의실, 어드민 대시보드를 단일 코드베이스로 통합했고, Cloudflare video-gate로 강의 영상 접근을 제어하며, 나이스페이·PayApp 이중 PG 연동, Aligo·SENS SMS 발송, AWS S3 학습 자료 저장, ExcelJS 기반 회원·수강·매출 엑셀 내보내기까지 실운영에 필요한 기능을 갖췄습니다.",
    ],
    role: {
      type: "실무 프로젝트 (사내)",
      parts: [
        "프론트엔드·풀스택 개발 100%",
        "공개 사이트 · 학생 강의실 · 어드민 통합 라우트 설계",
        "Cloudflare video-gate 강의 영상 접근 제어 연동",
        "나이스페이 · PayApp 이중 결제 게이트웨이 연동",
        "온라인 시험 · 과제 · 자격증 발급 워크플로우 구현",
        "Supabase 마이그레이션 기반 스키마 설계 (회원·과정·수강·시험·결제)",
        "Aligo · 네이버 클라우드 SENS SMS 발송 · AWS S3 자료 업로드",
      ],
    },
    links: {
      github: "#",
      demo: "https://www.korhrd.co.kr/",
    },
    goals: [
      {
        icon: "fas fa-graduation-cap",
        title: "수강 → 시험 → 자격증 통합 여정",
        description:
          "무료수강신청부터 강의 수강, 온라인 시험 응시, 상장형·카드형 자격증 발급까지 학습자의 여정을 한 시스템에서 끊김 없이 이어지도록 설계했습니다.",
      },
      {
        icon: "fas fa-video",
        title: "안전한 강의 영상 접근 제어",
        description:
          "Cloudflare video-gate로 수강권을 가진 학생만 강의 영상에 접근할 수 있도록 서명 기반 게이트를 두어 콘텐츠 유출을 방지합니다.",
      },
      {
        icon: "fas fa-user-shield",
        title: "역할 기반 통합 라우트",
        description:
          "공개 사이트 (korhrd) · 학생 강의실 · 어드민 대시보드를 단일 Next.js 프로젝트로 운영하되, 라우트 그룹과 미들웨어로 역할별 접근을 분리했습니다.",
      },
      {
        icon: "fas fa-cogs",
        title: "운영자용 어드민 자동화",
        description:
          "회원·과정·수강·시험·결제·자격증 발급을 어드민에서 관리하고, ExcelJS로 대량 데이터를 엑셀 내보내기해 운영 실무를 자동화합니다.",
      },
    ],
    keyFeatures: [
      {
        icon: "fas fa-video",
        title: "Cloudflare 강의 영상 게이트 [핵심]",
        description:
          "cloudflare/video-gate 워커로 수강권·본인 인증을 서버에서 검증한 뒤 서명 URL을 발급, 정당한 학생만 강의 영상을 재생할 수 있도록 접근을 제어합니다.",
      },
      {
        icon: "fas fa-file-signature",
        title: "온라인 시험 · 과제 · 수료",
        description:
          "60분 온라인 시험, 과제 제출·채점, 수료 조건 판별을 하나의 워크플로우로 묶어 강의 → 시험 → 수료 → 자격증 발급까지 자동으로 이어집니다.",
      },
      {
        icon: "fas fa-credit-card",
        title: "나이스페이 + PayApp 이중 결제",
        description:
          "카드·계좌이체 중심의 나이스페이와 간편결제 중심의 PayApp을 병행 연동하여 학습자가 선호하는 결제수단을 자유롭게 선택할 수 있습니다.",
      },
      {
        icon: "fas fa-id-card",
        title: "상장형 · 카드형 자격증 발급",
        description:
          "수료 조건을 충족한 학생에게 상장형·카드형 자격증을 발급하고, 배송·수령까지 관리하는 자격증 라이프사이클을 구현했습니다.",
      },
      {
        icon: "fas fa-bullhorn",
        title: "배너 · 공지 · 후기 · 라이브 피드",
        description:
          "어드민에서 등록한 홈 배너·공지·수강 후기와, 실제 수강완료·발급완료 내역을 보여주는 라이브 티커로 신뢰감 있는 홈 화면을 구성합니다.",
      },
      {
        icon: "fas fa-sms",
        title: "Aligo · SENS SMS 발송",
        description:
          "Aligo와 네이버 클라우드 SENS를 병행 연동하여 회원가입 인증번호·수강 안내·시험 알림 등 자동 SMS 발송을 안정적으로 처리합니다.",
      },
      {
        icon: "fas fa-cloud-upload-alt",
        title: "AWS S3 학습 자료 관리",
        description:
          "@aws-sdk/client-s3로 강의 자료·과제 파일을 S3에 저장하고, 어드민에서 업로드·삭제·다운로드 링크 발급까지 관리합니다.",
      },
      {
        icon: "fas fa-file-excel",
        title: "ExcelJS 대량 데이터 내보내기",
        description:
          "회원·수강·매출·결제 데이터를 ExcelJS로 대량 엑셀 다운로드하여, 실무진이 익숙한 엑셀 기반으로 리포트를 활용할 수 있게 했습니다.",
      },
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: [
          { name: "Next.js 16", description: "App Router 기반 풀스택 프레임워크 (라우트 그룹으로 공개/학생/어드민 분리)" },
          { name: "React 19", description: "서버 컴포넌트 기반 최신 React" },
          { name: "TypeScript 5", description: "타입 안정성을 갖춘 코드베이스" },
          { name: "Tailwind CSS 4 + shadcn/ui", description: "유틸리티 + Base UI 기반 컴포넌트 시스템" },
          { name: "Lucide React", description: "아이콘 시스템" },
        ],
      },
      {
        category: "백엔드 & 데이터",
        items: [
          { name: "Supabase + @supabase/ssr", description: "PostgreSQL + Auth (회원·과정·수강·시험·과제·결제·자격증 스키마)" },
          { name: "Supabase Migrations", description: "선언적 마이그레이션으로 스키마 버전 관리" },
          { name: "AWS S3 (@aws-sdk/client-s3)", description: "강의 자료·과제 파일 저장 및 서명 URL 발급" },
          { name: "ExcelJS", description: "회원·수강·매출 엑셀 대량 내보내기" },
        ],
      },
      {
        category: "결제 · 미디어 · 알림",
        items: [
          { name: "나이스페이 (Nicepay)", description: "국내 카드·계좌이체 결제 게이트웨이" },
          { name: "PayApp", description: "간편결제(카카오페이·네이버페이 등) 게이트웨이" },
          { name: "Cloudflare Workers (video-gate)", description: "강의 영상 접근 제어 · 서명 URL 발급" },
          { name: "Aligo + Naver Cloud SENS", description: "SMS 인증·안내 이중 발송 채널" },
        ],
      },
    ],
    challenges: [
      {
        title: "강의 영상 무단 접근 차단",
        challenge:
          "국가자격증 대비 강의 영상은 핵심 자산이라 URL 공유·다운로드로 유출되면 매출 손실이 큽니다. 단순히 프론트에서 재생기를 감추는 방식으로는 URL 노출을 막을 수 없었습니다.",
        solution:
          "Cloudflare Workers 기반 video-gate를 도입하여 학생의 수강권·세션을 서버에서 검증한 뒤에만 짧은 만료 시간을 가진 서명 URL을 발급하도록 설계했습니다. 재생 요청 때마다 게이트를 거치므로 URL이 유출되어도 짧은 시간 안에 만료되어 무단 접근을 실질적으로 차단합니다.",
      },
      {
        title: "공개 사이트 · 학생 강의실 · 어드민의 하나의 코드베이스 공존",
        challenge:
          "역할이 서로 다른 세 개의 서비스(비회원 대상 마케팅 사이트, 로그인한 학생의 강의실, 운영자 어드민)를 별도 앱으로 나누면 배포·인증·데이터 모델이 파편화되고, 한 앱에 몰면 라우트가 뒤엉키는 문제가 있었습니다.",
        solution:
          "Next.js App Router의 라우트 그룹((korhrd) 공개, /classroom 학생, /admin 어드민)으로 URL은 그대로 두면서 코드만 분리하고, 미들웨어와 서버 컴포넌트에서 Supabase 세션·역할을 검사해 접근을 제어했습니다. 하나의 배포와 하나의 데이터 모델을 공유하면서도 역할별 화면·권한을 깔끔하게 분리했습니다.",
      },
      {
        title: "두 개의 PG · 두 개의 SMS 채널을 실운영에서 안정 병행",
        challenge:
          "학습자마다 선호 결제수단이 달라 나이스페이(카드·계좌이체)와 PayApp(간편결제)을 병행해야 했고, SMS도 발송량이 몰릴 때 한 채널만 쓰면 실패율이 올라가는 문제가 있었습니다.",
        solution:
          "결제는 주문 생성 시 PG를 선택해 /api/nicepay·/api/payapp로 분리 처리하고, 결제 결과 상태와 취소·환불 로직을 공통 스키마(course_payments)에 통합. SMS는 Aligo와 네이버 클라우드 SENS를 상황에 따라 병행 사용해 발송 안정성을 확보했습니다.",
      },
    ],
    outcome: [
      "무료수강신청부터 강의 수강·시험·자격증 발급까지 학습자의 전체 여정을 한 시스템에서 처리하는 민간자격 온라인 교육기관 LMS를 풀스택으로 구축했고, Cloudflare video-gate를 통한 강의 영상 보호와 나이스페이·PayApp 이중 PG 연동으로 실운영에 필요한 안정성과 매출 유연성을 동시에 확보했습니다.",
      "공개 사이트·학생 강의실·어드민을 하나의 Next.js 코드베이스에서 라우트 그룹과 역할 기반 미들웨어로 분리 운영하는 구조를 설계하며, 큰 규모의 서비스에서도 유지보수 가능한 통합 아키텍처를 다뤄본 경험을 쌓았습니다.",
    ],
  },
};
