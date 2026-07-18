import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
  id: "Eduvisors",
  type: "company",
  title: "에듀바이저스",
  date: "2026. 07. 01 ~ 2026. 07. 09",
  description:
    "교육 전문가·GA 모집을 위한 리크루팅 홈페이지입니다. 투명한 50% 수익 구조와 프리랜서 활동 환경, 개별 CRM 지원을 명확하게 전달해 파트너 합류를 유도합니다.",
  tags: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "GA 리크루팅", "반응형 웹"],
  gifImage: "/main/work__gif/eduvisor.gif",
  github: "https://github.com/bp4sp4/korhrdbusiness",
  demo: "https://www.eduvisor.kr/",
  detail: {
    period: "2026. 07. 01 ~ 2026. 07. 09",
    mainImage: "/detail__main/page3imgs/eduvisor_main.png",
    images: ["/detail__main/page3imgs/eduvisor_main.png","/detail__main/page3imgs/eduvisor_01.png", "/detail__main/page3imgs/eduvisor_02.png", "/detail__main/page3imgs/eduvisor_03.png"],

    overview: [
      "에듀바이저스는 교육 전문가와 GA를 모집하기 위한 리크루팅 홈페이지입니다. 성과에 따른 보상, 자율적인 프리랜서 활동, 조직 운영 지원 등 파트너가 합류 전에 확인해야 할 핵심 정보를 한 흐름으로 구성했습니다.",
      "첫 화면에서 수익 구조와 핵심 메시지를 전달하고, 일반 GA와의 보상 구조 비교, 지원 대상, 제공 혜택, FAQ, 소개서·파트너 문의 CTA까지 자연스럽게 이어지도록 설계했습니다. 방문자가 활동 방식과 지원 내용을 빠르게 이해한 뒤 문의로 전환할 수 있는 정보 구조에 집중했습니다.",
    ],
    role: {
      type: "실무 프로젝트 (사내) · 2인 협업 (개발자 1 + 디자이너 1)",
      parts: ["프론트엔드 개발 100%", "GA 리크루팅 랜딩페이지 구현", "반응형 UI·CTA 전환 흐름 설계", "Figma 시안 기반 퍼블리싱"],
    },
    links: {
      github: "https://github.com/bp4sp4/korhrdbusiness",
      demo: "https://www.eduvisor.kr/",
    },
    goals: [
      {
        icon: "fas fa-layer-group",
        title: "GA 리크루팅 메시지 전달",
        description: "교육 전문가와 GA가 에듀바이저스의 활동 방식과 보상 구조를 빠르게 이해할 수 있는 소개 흐름을 구성합니다.",
      },
      {
        icon: "fas fa-users-cog",
        title: "보상 구조의 명확한 비교",
        description: "일반 GA와 에듀바이저스의 수익 구조를 시각적으로 비교해 합류 시 얻는 가치를 직관적으로 전달합니다.",
      },
      {
        icon: "fas fa-search",
        title: "신뢰를 만드는 정보 구조",
        description: "지원 대상·혜택·활동 방식·자주 묻는 질문을 순서대로 배치해 파트너 문의 전 필요한 정보를 충분히 제공합니다.",
      },
      {
        icon: "fas fa-bell",
        title: "문의 전환 최적화",
        description: "소개서 받기와 파트너 문의 CTA를 주요 구간마다 배치해 관심이 생긴 순간 바로 다음 행동으로 이어지게 합니다.",
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
        category: "배포 & 품질",
        items: [
          { name: "Vercel", description: "Next.js 기반 웹사이트 배포" },
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
