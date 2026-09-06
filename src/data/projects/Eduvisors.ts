import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
  id: "Eduvisors",
  type: "company",
  title: "에듀바이저스",
  date: "2026. 07. 01 ~ 2026. 07. 09",
  description:
    "교육 전문가·GA 모집을 위한 리크루팅 사이트입니다. 50% 수익 구조를 비교 콘텐츠로 전달하고, 소개서 자동 발송·열람 추적, Slack 즉시 알림, 팝업 관리 어드민까지 리드 접수 뒤의 운영 흐름을 함께 구축했습니다.",
  tags: ["Next.js 15", "TypeScript", "Supabase", "Slack Webhook", "Tailwind CSS 4"],
  gifImage: "/main/work__gif/eduvisor.gif",
  github: "https://github.com/bp4sp4/korhrdbusiness",
  demo: "https://www.eduvisor.kr/",
  detail: {
    period: "2026. 07. 01 ~ 2026. 07. 09",
    mainImage: "/detail__main/page3imgs/eduvisor_main.png",
    images: [
      "/detail__main/page3imgs/eduvisor_main.png",
      "/detail__main/page3imgs/edu_concern.png",
      "/detail__main/page3imgs/edu_compare.png",
      "/detail__main/page3imgs/eduvisor_01.png",
      "/detail__main/page3imgs/edu_faq.png",
      "/detail__main/page3imgs/edu_addbranch.png",
      "/detail__main/page3imgs/edu_m_01.png",
      "/detail__main/page3imgs/edu_m_02.png",
      "/detail__main/page3imgs/edu_m_03.png",
      "/detail__main/page3imgs/edu_m_popup.png",
      "/detail__main/page3imgs/edu_brochure_modal.png",
      "/detail__main/page3imgs/edu_partner_modal.png",
      "/detail__main/page3imgs/edu_popup.png",
    ],

    overview: [
      "에듀바이저스는 교육 전문가와 GA를 모집하기 위한 리크루팅 홈페이지입니다. 성과에 따른 보상, 자율적인 프리랜서 활동, 조직 운영 지원 등 파트너가 합류 전에 확인해야 할 핵심 정보를 한 흐름으로 구성했습니다.",
      "첫 화면에서 수익 구조와 핵심 메시지를 전달하고, 일반 GA와의 보상 구조 비교, 지원 대상, 제공 혜택, FAQ, 소개서·파트너 문의 CTA까지 자연스럽게 이어지도록 설계했습니다. 방문자가 활동 방식과 지원 내용을 빠르게 이해한 뒤 문의로 전환할 수 있는 정보 구조에 집중했습니다.",
      "랜딩 뒤의 운영 흐름도 같은 코드베이스에 담았습니다. 소개서 요청은 Supabase에 리드로 저장된 뒤 다음 스마트워크 SMTP로 열람 링크가 발송되고, 링크를 열면 열람 시각과 횟수가 기록됩니다. 파트너 문의·교육 상담·채용 지원은 서버에서 메시지를 조립해 Slack으로 즉시 알리며, 교육 상담은 한평생오피스의 문의 DB로 바로 넘어갑니다. 메인 팝업은 어드민에서 이미지·순서·활성 여부를 관리합니다.",
    ],
    role: {
      type: "실무 프로젝트 (사내) · 2인 협업 (개발자 1 + 디자이너 1)",
      parts: [
        "프론트엔드·API 개발 100%",
        "GA 리크루팅 랜딩페이지 구현 (Figma 시안 기반)",
        "소개서 자동 발송·열람 추적 API 및 Supabase 스키마 설계",
        "Slack 알림 API (서버 측 메시지 조립·입력 정제)",
        "팝업 관리 어드민 · 관리자 인증 가드",
        "한평생오피스 문의 DB 연동 (교육 상담 → 학점은행제 사업부)",
      ],
    },
    links: {
      github: "https://github.com/bp4sp4/korhrdbusiness",
      demo: "https://www.eduvisor.kr/",
    },
    goals: [
      {
        icon: "fas fa-layer-group",
        title: "GA 리크루팅 메시지와 전환 흐름",
        description:
          "교육 전문가가 겪는 고민에서 출발해 일반 GA와의 수익 구조 비교, 지원 혜택, FAQ 순으로 정보를 쌓고, 관심이 생긴 지점마다 소개서 받기·파트너 문의 버튼을 두어 문의로 이어지게 했습니다. 지점 단위 모집을 위한 별도 페이지도 같은 흐름으로 구성했습니다.",
        groups: [
          {
            title: "웹",
            layout: "web",
            shots: [
              { src: "/detail__main/page3imgs/edu_concern.png", caption: "공감 섹션 - 성과·미래·가능성·보상 네 가지 고민으로 방문자의 상황을 먼저 짚음" },
              { src: "/detail__main/page3imgs/edu_compare.png", caption: "수익 구조 비교 - 일반 GA의 4단계 수수료(약 80%)와 에듀바이저스의 50% 직접 지급을 같은 매출 1,000만원 기준으로 대비" },
              { src: "/detail__main/page3imgs/eduvisor_01.png", caption: "지원 혜택 - 매출 50% 보장, 자율 활동, 조직 컨설팅, 개별 CRM 제공을 카드 4장으로 정리" },
              { src: "/detail__main/page3imgs/edu_faq.png", caption: "FAQ - 지급 이유, 지원 자격, 출근 여부, 초기 비용 등 합류 전 질문을 아코디언으로 제공" },
              { src: "/detail__main/page3imgs/edu_addbranch.png", tag: "지점 모집", caption: "개인이 아닌 지점 단위로 합류하려는 파트너를 위한 별도 랜딩과 문의 흐름" },
            ],
          },
          {
            title: "모바일",
            layout: "mobile",
            shots: [
              { src: "/detail__main/page3imgs/edu_m_01.png", tag: "홈", caption: "모바일 히어로 - 메시지와 두 CTA를 상단에, 인물 이미지는 아래로 재배치" },
              { src: "/detail__main/page3imgs/edu_m_02.png", tag: "비교", caption: "수익 구조 비교를 세로 흐름으로 풀어 한 손 스크롤로 읽히게 구성" },
              { src: "/detail__main/page3imgs/edu_m_03.png", tag: "소개서", caption: "소개서 받기 모달 - 이름·연락처·이메일 3칸만으로 요청" },
              { src: "/detail__main/page3imgs/edu_m_popup.png", tag: "팝업", caption: "메인 진입 팝업의 모바일 표시 - 화면 폭에 맞춰 세로형으로 배치" },
            ],
          },
        ],
      },
      {
        icon: "fas fa-envelope-open-text",
        title: "소개서 자동 발송과 열람 추적",
        description:
          "소개서 받기 폼이 제출되면 리드를 Supabase에 저장하고, 다음 스마트워크 SMTP로 사람마다 다른 열람 링크를 담은 메일을 보냅니다. 링크를 열면 최초 열람 시각과 열람 횟수가 기록되어 어드민에서 누가 실제로 소개서를 봤는지 확인할 수 있습니다. 메일 발송이 실패해도 리드는 남기고 상태만 failed로 표시합니다.",
        shots: [
          { src: "/detail__main/page3imgs/edu_brochure_modal.png", tag: "소개서 받기", caption: "소개서 받기 모달 - 입력한 이메일로 열람 링크가 발송된다는 안내를 폼 안에 표시" },
        ],
      },
      {
        icon: "fab fa-slack",
        title: "문의 접수 즉시 Slack 알림",
        description:
          "파트너 문의·교육 상담·채용 지원 세 가지 폼이 모두 Slack 담당자 채널로 바로 알림을 보냅니다. 클라이언트는 알림 종류와 필드값만 전달하고 메시지 블록은 서버가 조립하므로, 외부에서 임의의 메시지를 주입할 수 없습니다. 교육 상담은 한평생오피스의 학점은행제 문의 DB에도 유입경로와 함께 바로 적재됩니다.",
        shots: [
          { src: "/detail__main/page3imgs/edu_partner_modal.png", tag: "파트너 문의", caption: "파트너 문의 모달 - 이름·연락처·컨설팅 콘텐츠·현재 상황·궁금한 내용이 그대로 Slack 블록 메시지가 됨" },
        ],
      },
      {
        icon: "fas fa-window-restore",
        title: "팝업 운영과 관리자 영역",
        description:
          "메인 팝업은 어드민에서 배경·중앙 이미지와 문구, 표시 순서, 활성 여부를 편집하고 여러 장이면 슬라이드로 넘깁니다. 방문자에게는 '오늘 하루 안보기'를 제공합니다. 어드민은 로그인과 admins 테이블 등록을 모두 확인하는 가드 뒤에 있고, 소개서 요청·파트너 문의·상담·채용 지원 목록을 각각 관리합니다.",
        groups: [
          {
            title: "웹",
            layout: "web",
            shots: [
              { src: "/detail__main/page3imgs/edu_popup.png", tag: "팝업", caption: "메인 진입 시 뜨는 모집 팝업 - 어드민에서 등록한 이미지와 문구, 우상단 '오늘 하루 안보기'" },
            ],
          },
        ],
      },
    ],
    keyFeatures: [
      {
        icon: "fas fa-window-restore",
        title: "성과 중심 히어로 섹션",
        description: "핵심 보상 메시지와 두 개의 CTA를 첫 화면에 배치해 방문자가 사이트의 목적을 즉시 이해하도록 구현했습니다.",
      },
      {
        icon: "fas fa-comment-dots",
        title: "수익 구조 비교 콘텐츠",
        description: "일반 GA의 다단계 수수료 구조와 에듀바이저스의 직접 지급 구조를 대비해 보상 차이를 명확하게 보여줍니다.",
      },
      {
        icon: "fas fa-briefcase",
        title: "지원 혜택 안내",
        description: "매출의 50% 보장, 자율적인 활동 환경, 조직 컨설팅, 개별 CRM 제공 등 파트너 지원 내용을 카드형 콘텐츠로 정리했습니다.",
      },
      {
        icon: "fas fa-shield-alt",
        title: "FAQ 기반 신뢰 형성",
        description: "지원 자격, 활동 방식, 초기 비용, 수익 구조 등 합류 전 자주 묻는 질문을 정리해 의사결정을 돕습니다.",
      },
      {
        icon: "fas fa-envelope-open-text",
        title: "소개서 발송 · 열람 추적",
        description: "요청자마다 고유 열람 링크를 메일로 보내고, 링크를 열면 최초 열람 시각과 횟수를 기록해 리드의 관심도를 어드민에서 확인합니다.",
      },
      {
        icon: "fab fa-slack",
        title: "Slack 즉시 알림 (서버 조립)",
        description: "파트너 문의·교육 상담·채용 지원 접수 시 서버가 입력값을 정제해 블록 메시지를 만들고 Slack 채널로 즉시 전송합니다.",
      },
      {
        icon: "fas fa-window-restore",
        title: "팝업 관리 어드민",
        description: "이미지 업로드, 문구, 표시 순서, 활성화를 어드민에서 편집하고 방문자에게는 '오늘 하루 안보기'를 제공합니다.",
      },
      {
        icon: "fas fa-database",
        title: "한평생오피스 문의 DB 연동",
        description: "교육 상담 신청을 학점은행제 사업부의 문의 DB에 유입경로(에듀바이저스_상담폼)와 함께 바로 적재해 영업 담당자가 같은 화면에서 이어받습니다.",
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
        category: "백엔드 & 알림",
        items: [
          { name: "Supabase", description: "리드·팝업·관리자 테이블, RLS, Storage(팝업 이미지)" },
          { name: "Slack Webhook", description: "문의·상담·지원 접수 즉시 채널 알림" },
          { name: "Nodemailer", description: "다음 스마트워크 SMTP로 소개서 열람 메일 발송" },
          { name: "Zustand", description: "소개서·파트너·상담 모달 전역 상태" },
        ],
      },
      {
        category: "배포 & 품질",
        items: [
          { name: "Vercel", description: "Next.js 기반 웹사이트 배포 (Analytics · Speed Insights)" },
          { name: "Responsive Design", description: "데스크톱과 모바일 환경에 맞춘 반응형 UI" },
          { name: "SEO", description: "검색 유입을 고려한 페이지 구조와 메타데이터 구성" },
        ],
      },
    ],
    challenges: [
      {
        title: "복잡한 보상 구조를 짧은 흐름으로 전달",
        challenge:
          "GA 지원자가 처음 방문했을 때 보상 구조와 활동 방식의 차이를 빠르게 이해하지 못하면, 핵심 강점이 전달되기 전에 이탈할 수 있었습니다.",
        solution:
          "첫 화면의 핵심 메시지에서 출발해 일반 GA와의 수익 구조 비교, 지원 혜택, FAQ 순으로 정보를 단계적으로 배치했습니다. 수치와 비교 콘텐츠를 중심에 두어 방문자가 핵심 가치를 빠르게 파악할 수 있게 했습니다.",
      },
      {
        title: "정보 전달과 문의 전환의 균형",
        challenge:
          "활동 방식과 지원 혜택을 충분히 설명하면서도, 방문자가 문의 행동까지 자연스럽게 이어지도록 만드는 CTA 흐름이 필요했습니다.",
        solution:
          "소개서 받기와 파트너 문의 버튼을 히어로·본문·마무리 구간에 반복 배치하고, 각 CTA 전후에는 보상·지원·활동 조건과 FAQ를 제공해 충분한 판단 근거를 만든 뒤 전환을 유도했습니다.",
      },
      {
        title: "신뢰감 있는 리크루팅 브랜드 경험",
        challenge:
          "수익과 프리랜서 활동을 다루는 리크루팅 사이트인 만큼 과장된 표현보다 투명하고 안정적인 인상을 유지해야 했습니다.",
        solution:
          "차분한 블루 계열의 시각 언어와 일관된 카드·비교 UI를 적용하고, 지원 조건과 자주 묻는 질문을 명확한 문장으로 안내해 신뢰도 높은 브랜드 경험을 구현했습니다.",
      },
    ],
    outcome: [
      "에듀바이저스의 보상 구조와 파트너 지원 내용을 한 페이지에서 명확히 전달하는 GA 리크루팅 홈페이지를 구축했습니다. 방문자는 일반 GA와의 차이, 활동 방식, 지원 혜택을 순서대로 확인한 뒤 소개서 또는 파트너 문의로 이동할 수 있습니다.",
      "리크루팅 랜딩페이지에서는 메시지의 우선순위와 CTA의 위치가 전환 경험을 좌우한다는 점을 체감했습니다. 핵심 수치·비교 콘텐츠·FAQ를 조합해 정보 탐색과 행동 전환이 끊기지 않는 구조를 설계했습니다.",
      "디자이너와 협업하며 Figma 시안의 브랜드 톤과 정보 위계를 웹으로 구현했습니다. 시각적 완성도뿐 아니라 파트너가 실제로 궁금해할 질문을 중심으로 콘텐츠 흐름을 다듬는 경험을 쌓았습니다.",
    ],
  },
};
