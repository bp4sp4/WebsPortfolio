import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
  id: "korhrd-office",
  type: "company",
  title: "한평생오피스",
  date: "2026. 03. 16 ~ 진행 중",
  description:
    "한국HRD그룹의 사내 업무 통합 관리 시스템(ERP)입니다. 5개 사업부의 매출·정산부터 전자결재·손익 리포트·인사·근태·웹메일까지 통합하고, Claude 기반 AI 개인 브리핑과 팀 성과 분석으로 구성원이 바로 실행할 수 있는 업무 인사이트를 제공합니다.",
  tags: ["Next.js 16", "TypeScript", "Supabase", "Claude AI", "Recharts", "Naver Cloud Platform"],
  gifImage: "/main/work__gif/office.png",
  github: "#",
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
      "/detail__main/page3imgs/office_approvals_details2.png",
      "/detail__main/page3imgs/office_maps.png",
    ],
    overview: [
      "⚠️ 한평생오피스는 현재 한평생그룹 사내에서 운영 중인 시스템으로, 외부에 공개된 데모 사이트는 제공되지 않습니다. 또한 본 페이지에 노출된 화면 중 매출·고객·정산 등 회사 기밀 정보가 포함된 영역은 블러 처리되었으니 양해 부탁드립니다.",
      "출발점은 영업단인 학점은행제 사업부였습니다. 상담 등록·고객 관리·매출·정산·계약·중복조회 등 일선 업무가 엑셀과 메신저에 파편화되어 있어 이를 한 시스템으로 합치는 것이 1차 목표였고, 같은 구조를 자격증·유학·실습·올케어 사업부로 확장한 뒤 전자결재·손익 리포트·예산·인사·근태·웹메일 같은 경영·협업 기능까지 흡수해 전사 통합 ERP로 발전시켰습니다. 현재 약 90개 DB 테이블과 14만 줄 이상의 TypeScript 코드베이스 규모로 운영 중입니다.",
      "Next.js 16 App Router + React 19 + Supabase(SSR 쿠키 세션) 기반 풀스택 아키텍처 위에, 다단계 전자결재 상태 머신, 매출 3종 통합 예상손익계산서, 신한은행 오픈API 기반 법인 계좌조회, 다음 스마트워크 IMAP/SMTP 웹메일, OTP 전자근로계약, 정량 인사평가 자동 환산까지 — 사내 업무 전반을 코드로 자동화했습니다.",
      "최근에는 Claude 기반 AI 인사이트 기능을 추가했습니다. 개인 업무 브리핑은 실적·가망 고객·전환율 데이터를 바탕으로 오늘의 우선순위와 추천 연락 고객을 제안하고, 관리자용 팀 분석은 전환율·매출 데이터를 분석해 우수·개선 필요 인원과 실행 권장 사항을 정리합니다. 핵심 수치는 서버에서 직접 계산해 AI 응답과 결합함으로써 신뢰성을 확보했습니다.",
    ],
    role: {
      type: "실무 프로젝트 (사내)",
      parts: [
        "풀스택 설계·개발 100% (전사 통합 ERP)",
        "DB 스키마(약 90개 테이블) 및 역할 6종 × 섹션 40여 개 다층 권한 체계 설계",
        "전자결재 상태 머신·예상손익계산서·인사평가 자동 환산 등 핵심 비즈니스 로직 구현",
        "신한은행 Open API·알리고 API·네이버 클라우드 플랫폼 연동 및 Claude AI 기반 업무 인사이트 기능 구현",
        "엑셀 대량 처리·PDF 계약서 생성·다음 스마트워크 연동 웹메일 등 업무 자동화 구축",
        "Claude 기반 개인 업무 브리핑·관리자용 팀 성과 분석 기능 설계·구현",
      ],
    },
    links: {
      github: "#",
      demo: "#",
    },
    goals: [
      {
        icon: "fas fa-bullhorn",
        title: "영업단 업무 올인원 통합",
        description:
          "학점은행제 영업단의 상담·매출·정산·계약·중복조회·배정 업무가 엑셀과 메신저에 흩어져 있었습니다. 이 모든 업무를 한 시스템에 합쳐 한 화면에서 끝낼 수 있는 올인원 환경을 구축했습니다.",
      },
      {
        icon: "fas fa-cubes",
        title: "5개 사업부 + 경영·인사로 확장",
        description:
          "영업단을 위해 만든 구조를 자격증·유학·실습·올케어로 확장하고, 전자결재·손익·예산·인사·근태·웹메일까지 흡수하여 전사가 하나의 플랫폼에서 일하는 통합 ERP로 발전시켰습니다.",
      },
      {
        icon: "fas fa-chart-pie",
        title: "데이터 기반 의사결정",
        description:
          "매출 3종을 통합 집계한 예상손익계산서와 법인 계좌 실시간 조회, 사업부별 매출·손익 대시보드를 제공하여 경영진이 데이터를 직접 보고 빠르게 의사결정할 수 있게 합니다.",
      },
      {
        icon: "fas fa-wand-magic-sparkles",
        title: "AI 기반 업무 인사이트",
        description:
          "개인에게는 오늘의 우선순위·추천 연락 고객을, 관리자에게는 팀 성과 요약·코칭 대상·권장 액션을 제공해 데이터 확인 시간을 줄이고 실행을 돕습니다.",
      },
      {
        icon: "fas fa-stamp",
        title: "결재·계약의 완전한 디지털화",
        description:
          "18종 결재 양식과 다단계 결재선 기반 전자결재, OTP 본인인증 전자근로계약으로 종이 기반 업무를 시스템으로 대체합니다.",
      },
      {
        icon: "fas fa-file-excel",
        title: "엑셀 워크플로우 일원화",
        description:
          "비개발자에게 익숙한 엑셀 기반 업무 흐름을 그대로 살려, 템플릿 다운로드 → 대량 업로드 → 자동 검증·저장으로 이어지는 엑셀 파이프라인을 시스템에 연결합니다.",
      },
    ],
    keyFeatures: [
      {
        icon: "fas fa-wand-magic-sparkles",
        title: "Claude AI 개인 브리핑 · 팀 성과 분석 [NEW]",
        description:
          "Claude Opus가 개인의 실적·가망 고객·전환율을 분석해 오늘 확인할 일, 추천 연락 고객, 강점·개선점을 제안합니다. 관리자는 팀별 전환율·매출을 기반으로 우수·개선 필요 인원과 실행 권장 사항을 한눈에 확인합니다.",
      },
      {
        icon: "fas fa-graduation-cap",
        title: "5개 사업부 통합 운영 [핵심]",
        description:
          "학점은행제·자격증·유학·실습·올케어 사업부를 단일 대시보드 그룹에서 운영합니다. 사업부별 문의 DB·등록 관리·매출·통계를 68개 페이지에서 하나의 사이드바로 탐색합니다.",
      },
      {
        icon: "fas fa-stamp",
        title: "전자결재 워크플로우 [핵심]",
        description:
          "휴가·지출품의·지출결의·사직서 등 18종 결재 양식과 다단계 결재선(기안 → 순차 승인 → 참조자 공유)을 상태 머신으로 구현했습니다. 승인된 지출결의는 지출 테이블로 자동 전기되어 회계 처리와 바로 연결됩니다.",
      },
      {
        icon: "fas fa-chart-line",
        title: "매출·손익 리포트",
        description:
          "학점은행제·자격증·실습 3종 매출을 통합 집계하는 예상손익계산서를 자동 산출하고, Recharts·Ant Design Charts 기반 대시보드로 기간별·사업부별 매출과 손익을 시각화합니다.",
      },
      {
        icon: "fas fa-university",
        title: "법인 계좌·전자금융 연동",
        description:
          "신한은행 오픈API를 연동해 법인 계좌 거래내역을 시스템에서 실시간 조회하고, 거래내역을 고정비 항목과 키워드 매칭으로 자동 분류합니다.",
      },
      {
        icon: "fas fa-file-excel",
        title: "엑셀 일괄 업로드/다운로드",
        description:
          "xlsx 기반 템플릿 다운로드 → 대량 업로드 파이프라인으로 수천 건의 매출 데이터를 한 번에 등록하고, 엑셀 날짜 시리얼 변환·배치 저장·삭제까지 처리합니다.",
      },
      {
        icon: "fas fa-user-check",
        title: "인사평가 정량 자동 환산",
        description:
          "전분기 대비 매출·등록률, 환불 건수, 근태 데이터를 구간별 점수(1~5점)로 자동 환산하는 정량평가 엔진을 구현하고, 이의신청 절차까지 시스템화했습니다.",
      },
      {
        icon: "fas fa-file-signature",
        title: "전자근로계약 (OTP 서명)",
        description:
          "OTP 본인인증 후 전자서명하는 근로계약 플로우를 구현하고, 서명 완료된 계약서를 PDF로 자동 생성·보관합니다. 연차·근태·인사기록 관리와 연결됩니다.",
      },
      {
        icon: "fas fa-envelope",
        title: "자체 웹메일 & 알림",
        description:
          "IMAP/SMTP 기반 웹메일 클라이언트를 자체 구현하고 다음 스마트워크 메일과 연동했습니다. 카카오 알림톡·SMS(NCP SENS)·인앱 알림벨로 결재·업무 알림을 실시간 전달합니다.",
      },
      {
        icon: "fas fa-shield-alt",
        title: "다층 권한 시스템",
        description:
          "역할 6종(master-admin~guest) × 섹션 40여 개 × 조회 범위 3단계(none/all/own) 조합의 세분화된 인가 체계를 구축하고, 감사 로그로 주요 액션을 추적합니다.",
      },
    ],
    technologies: [
      {
        category: "AI 인사이트",
        items: [
          { name: "Claude Opus 4.8", description: "개인 업무 브리핑과 팀 성과 분석 생성" },
          { name: "Anthropic SDK", description: "JSON Schema 기반의 구조화된 AI 응답 생성" },
          { name: "Server-side Metrics", description: "핵심 수치를 서버에서 직접 계산해 AI 응답과 결합" },
        ],
      },
      {
        category: "프론트엔드",
        items: [
          { name: "Next.js 16 + React 19", description: "App Router 기반 풀스택 프레임워크" },
          { name: "TypeScript 5", description: "약 14만 줄 규모의 타입 안전 코드베이스" },
          { name: "Tailwind CSS 4 + CSS Modules", description: "유틸리티 + 모듈(130개) 하이브리드 스타일링" },
          { name: "Lucide React + Motion", description: "아이콘 시스템과 마이크로 인터랙션" },
        ],
      },
      {
        category: "데이터 시각화 & 문서 처리",
        items: [
          { name: "Recharts · Ant Design Charts", description: "매출·손익 대시보드 시각화" },
          { name: "d3-cloud", description: "상담·로그 데이터 워드클라우드" },
          { name: "xlsx (SheetJS)", description: "엑셀 대량 업로드/다운로드 파이프라인" },
          { name: "jsPDF · pdf-lib · pdfmake", description: "전자계약서·리포트 PDF 생성" },
        ],
      },
      {
        category: "백엔드 & 인프라",
        items: [
          { name: "Supabase + @supabase/ssr", description: "PostgreSQL(약 90개 테이블) + SSR 쿠키 세션 인증" },
          { name: "JWT + bcryptjs", description: "자체 비밀번호 검증과 토큰 레이어" },
          { name: "Express 고정 IP 프록시", description: "은행 API IP 화이트리스트 대응 프록시 서버" },
          { name: "Vercel", description: "프로덕션 배포" },
        ],
      },
      {
        category: "외부 서비스 연동",
        items: [
          { name: "신한은행 Open API", description: "법인 계좌조회·전자금융" },
          { name: "다음 스마트워크 IMAP/SMTP", description: "사내 메일 수신·발신 연동" },
          { name: "카카오 알림톡 · NCP SENS", description: "결재·업무 알림 메시징" },
          { name: "IMAP/SMTP (imapflow·nodemailer)", description: "자체 웹메일 수신·발신" },
        ],
      },
    ],
    challenges: [
      {
        title: "영업단의 흩어진 업무를 하나로 합치기",
        challenge:
          "학점은행제 영업단은 상담 등록·고객 관리·매출·정산·계약·중복조회 등 매일 처리할 업무가 많았고, 각 업무가 엑셀·메신저·구두로 흩어져 있어 누락과 중복이 자주 발생했습니다. 한 사람이 여러 도구를 오가며 작업해야 하는 비효율도 컸습니다.",
        solution:
          "영업단의 실제 업무 흐름을 인터뷰로 정리해 우선순위를 매기고, 가장 자주 쓰는 기능부터 한 화면에서 끝나도록 사이드바 + 통합 대시보드 구조로 재설계했습니다. 상담·매출·정산이 같은 데이터 모델로 연결되어 한 번 입력하면 계약·정산까지 이어지도록 워크플로우를 자동화했습니다.",
      },
      {
        title: "다단계 전자결재 상태 머신 설계",
        challenge:
          "18종 결재 양식마다 결재선 구성이 다르고, 기안 → 다단계 순차 승인 → 반려·회수 → 참조자 공유로 이어지는 상태 전이를 정확히 관리해야 했습니다. '내가 지금 결재할 차례인 문서'를 판정하는 쿼리도 복잡했습니다.",
        solution:
          "결재 문서와 결재 단계를 별도 테이블로 분리하고 DRAFT → SUBMITTED → IN_PROGRESS → APPROVED/REJECTED 상태 머신과 current_step 순차 진행 로직을 설계했습니다. 승인 완료된 지출결의는 지출 테이블로 자동 전기해 결재와 회계가 끊김 없이 이어지게 했습니다.",
      },
      {
        title: "이질적인 매출 3종을 통합한 예상손익계산서",
        challenge:
          "학점은행제·자격증·실습 매출은 데이터 출처와 기준월, 식별 키가 모두 달라 단순 합산이 불가능했고, 환불 제외·과목 수 기반 교강사비·4대보험 같은 회계 규칙까지 자동 반영해야 했습니다.",
        solution:
          "매출원별 최신 기준월을 각각 판정해 집계하는 통합 레이어를 만들고, 판관비 가정값·교강사비 산정·4대보험 자동 행 추가 등 회계 로직을 API 하나로 캡슐화해 예상손익계산서를 자동 산출했습니다.",
      },
      {
        title: "은행 API의 고정 IP 제약과 서버리스 환경의 충돌",
        challenge:
          "신한은행 오픈API는 사전 등록된 고정 IP에서만 호출할 수 있는데, Vercel 서버리스 환경은 요청마다 IP가 바뀌어 직접 연동이 불가능했습니다.",
        solution:
          "고정 IP를 가진 별도 Express 프록시 서버를 구축하고, HMAC-SHA256 요청 서명으로 프록시 접근을 보호하며 OAuth 토큰 캐싱으로 은행 API 호출을 최소화했습니다. 조회된 거래내역은 고정비 키워드 매칭으로 자동 분류됩니다.",
      },
    ],
    metrics: [
      {
        value: "개인 · 팀",
        label: "Claude AI 성과 분석",
        icon: "fas fa-wand-magic-sparkles",
      },
      {
        value: "68 · 90",
        label: "페이지 라우트 · DB 테이블",
        icon: "fas fa-database",
      },
      {
        value: "10+",
        label: "외부 서비스 연동",
        icon: "fas fa-link",
      },
      {
        value: "실서비스",
        label: "전사 운영 중",
        icon: "fas fa-rocket",
      },
    ],
    outcome: [
      "학점은행제 영업단의 흩어진 업무를 한 시스템으로 합치는 것에서 출발해, 5개 사업부와 경영·인사·협업 기능까지 아우르는 전사 통합 ERP로 발전시켰습니다. 영업단이 여러 도구를 오가던 작업이 한 화면에서 끝나게 되어 입력 누락·중복 작성 같은 일선 비효율이 크게 줄었습니다.",
      "Claude AI 개인 브리핑과 팀 성과 분석을 도입해 담당자는 오늘의 우선순위와 놓치면 안 되는 가망 고객을, 관리자는 팀의 우수·개선 필요 인원과 코칭 방향을 빠르게 파악할 수 있게 했습니다. AI의 서술은 실제 데이터에 근거하되 핵심 수치는 서버 계산값으로 보완해, 실무에서 신뢰하고 사용할 수 있는 인사이트 경험을 만들었습니다.",
      "다단계 전자결재 상태 머신, 매출 3종 통합 손익 산출, 은행 API 고정 IP 프록시, 역할 6종 × 섹션 40여 개 권한 체계 등 단순 CRUD를 넘는 시스템 설계 경험을 쌓았고, 실제 사용자 인터뷰로 UX를 다듬으며 비개발자 조직 전체가 매일 쓰는 실서비스를 혼자 힘으로 구축·운영하는 역량을 확보했습니다.",
    ],
  },
};
