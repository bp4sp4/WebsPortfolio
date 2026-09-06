import type { ProjectEntry } from "../types";

export const project: ProjectEntry = {
  id: "landingsite",
  type: "company",
  title: "마케팅 랜딩사이트 모음",
  date: "2025. 12 ~ 2026. 01.29",
  description:
    "당근·페이스북·인스타그램 광고와 연결되는 모바일 전용 랜딩페이지 8종입니다. 디자이너와 협업하여 주부·청년·여성 사장님·소상공인 등 타겟별 맞춤 메시지와 CTA를 구성, 실제 상담 전환을 극대화하는 퍼포먼스 마케팅 페이지들입니다.",
  tags: ["Next.js", "TypeScript", "모바일 전용", "마케팅 랜딩페이지", "Vercel"],
  gifImage: "/main/work__gif/landing_page.gif",
  github: "#",
  demo: "https://recruit-jubu.vercel.app/",
  detail: {
    period: "2025. 06 ~ 2025. 12",
    mainImage: "",
    images: [],
    overview: [
      "당근·페이스북·인스타그램 SNS 광고와 연결되는 채용·정책자금 분야 모바일 전용 랜딩페이지 총 8종을 디자이너와 협업하여 기획·개발·배포했습니다. 모든 페이지는 SNS 광고를 통한 모바일 유입을 1순위로 설계되었으며, 타겟층(주부·청년·여성 사장님·소상공인)의 심리와 니즈에 맞는 메시지 구조와 CTA를 적용했습니다.",
      "디자이너가 각 타겟에 맞는 시안을 제작하면 개발자인 제가 Next.js로 빠르게 구현·배포하는 롤 분담 체계로 운영했습니다. 공통 컴포넌트 재사용 패턴 덕분에 후반부 페이지는 초반 대비 개발 속도가 크게 단축되었습니다. 정책자금 계산기(barocal)는 자가진단 기능으로 체류 시간과 상담 전환율을 동시에 높이는 인터랙티브 요소를 포함합니다.",
    ],
    role: {
      type: "실무 프로젝트 (사내)",
      team: "2인 협업 · 개발자 1 + 디자이너 1",
      parts: [
        "프론트엔드 개발 100%",
        "디자이너 시안 기반 모바일 퍼블리싱",
        "당근·페이스북·인스타그램 광고 연동 랜딩 구조 설계",
        "Vercel 배포 및 도메인 연결",
      ],
    },
    links: {
      github: "#",
      demo: "https://recruit-jubu.vercel.app/",
    },
    goals: [
      {
        icon: "fas fa-bullseye",
        title: "상담 전환 극대화",
        description: "각 타겟층의 핵심 니즈에 집중한 메시지와 명확한 CTA 배치로 실제 상담 신청 전환율을 높입니다.",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "모바일 퍼스트 설계",
        description: "전체 유입의 대부분이 SNS 광고를 통한 모바일인 환경에 맞춰 모든 페이지를 모바일 전용으로 최적화합니다.",
      },
      {
        icon: "fas fa-bolt",
        title: "빠른 초기 로딩",
        description: "Next.js SSG·이미지 최적화·코드 스플리팅으로 느린 모바일 네트워크에서도 빠른 첫 화면 렌더링을 보장합니다.",
      },
      {
        icon: "fas fa-copy",
        title: "컴포넌트 재사용",
        description: "공통 섹션(헤더·CTA·폼)을 모듈화하여 신규 랜딩 추가 시 개발 공수를 최소화하는 구조를 설계합니다.",
      },
    ],
    keyFeatures: [
      {
        icon: "fas fa-female",
        title: "주부 채용 랜딩",
        description: "주부 대상 채용 상담 유도 랜딩페이지. 경력 단절 고민에 공감하는 헤드카피와 심플한 상담 신청 폼으로 구성.",
        link: "https://recruit-jubu.vercel.app/",
      },
      {
        icon: "fas fa-user-graduate",
        title: "청년 채용 랜딩",
        description: "20·30대 타겟 채용 상담 전환 페이지. 취업 고민에 공감하는 메시지와 Slack 연동 알림으로 빠른 상담 대응.",
        link: "https://recruit-youth.vercel.app/",
      },
      {
        icon: "fas fa-calculator",
        title: "정책자금 계산기",
        description: "사장님이 본인에게 맞는 정책자금 규모를 직접 계산해볼 수 있는 인터랙티브 자가진단 도구. 체류 시간 증가와 상담 전환을 동시에 공략.",
        link: "https://barocal.vercel.app/",
      },
      {
        icon: "fas fa-venus",
        title: "정책자금 — 여성 사장님",
        description: "여성 소상공인·사장님 타겟 정책자금 상담 랜딩. 여성 창업자 맞춤 혜택 강조 및 공감형 헤드카피 구성.",
        link: "https://barolanding-female.vercel.app/",
      },
      {
        icon: "fas fa-mars",
        title: "정책자금 — 40·50 남성 사장님",
        description: "40·50대 남성 사장님 타겟 정책자금 랜딩. 신뢰감을 주는 톤과 직관적인 CTA로 빠른 상담 연결 유도.",
        link: "https://barolanding-50man.vercel.app/",
      },
      {
        icon: "fas fa-store",
        title: "정책자금 — 소상공인",
        description: "소상공인 전반 타겟 정책자금 랜딩. 지원 자격·혜택을 쉬운 언어로 풀어낸 구조로 낮은 진입 장벽 설계.",
        link: "https://barosmb.vercel.app/",
      },
      {
        icon: "fas fa-store-alt",
        title: "정책자금 — 소상공인 v2",
        description: "소상공인 타겟 리뉴얼 버전. 사용자 피드백을 반영한 개선된 레이아웃과 강화된 CTA 구성으로 전환율 개선.",
        link: "https://smb-ver2.vercel.app/",
      },
      {
        icon: "fas fa-file-alt",
        title: "정책자금 상담 신청 (baroform)",
        description: "정책자금 상담을 원하는 사장님을 위한 전용 신청 폼 페이지. 간결한 입력 단계로 신청 이탈률을 최소화하고 빠른 상담 연결을 유도.",
        link: "https://baroform.vercel.app/",
      },
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: [
          { name: "Next.js", description: "App Router 기반 SSG/SSR 페이지 생성" },
          { name: "TypeScript", description: "타입 안정성을 갖춘 코드베이스 유지" },
          { name: "CSS / CSS Modules", description: "모바일 전용 반응형 스타일링" },
        ],
      },
      {
        category: "배포 & 인프라",
        items: [
          { name: "Vercel", description: "각 랜딩페이지 독립 배포 및 도메인 연결" },
          { name: "GitHub", description: "페이지별 독립 리포지토리로 버전 관리" },
        ],
      },
    ],
    challenges: [
      {
        title: "타겟별 메시지 차별화와 빠른 납기",
        challenge:
          "채용·정책자금 각 타겟(주부, 청년, 여성, 소상공인 등)마다 공감 포인트와 CTA 메시지가 달라야 했고, 마케팅 일정에 맞춰 단기간 내 다수의 페이지를 완성해야 했습니다.",
        solution:
          "헤더·CTA·폼 등 반복 섹션을 공통 컴포넌트로 모듈화하고, 타겟별 데이터(텍스트·이미지)만 교체하는 구조로 설계했습니다. 이를 통해 후반 페이지로 갈수록 개발 속도가 눈에 띄게 빨라졌습니다.",
      },
      {
        title: "모바일 전용 환경에서의 성능 최적화",
        challenge:
          "유입 채널이 SNS 광고인 만큼 느린 모바일 네트워크에서도 첫 화면이 빠르게 로드되어야 상담 전환율이 유지됩니다.",
        solution:
          "Next.js Image 컴포넌트로 이미지를 WebP 변환·lazy load 처리하고, SSG로 페이지를 정적 생성하여 서버 응답 시간을 최소화했습니다. 불필요한 JS 번들을 제거해 LCP 지표를 개선했습니다.",
      },
    ],
    outcome: [
      "당근·페이스북·인스타그램에 실제 집행된 채용 2종·정책자금 6종, 총 8개의 모바일 전용 랜딩페이지를 마케팅 일정에 맞춰 납기 내 완료했습니다. 공통 컴포넌트 재사용 구조 덕분에 후반부 페이지는 초반 대비 개발 속도가 크게 단축되었습니다.",
      "디자이너와의 협업을 통해 시각적 완성도와 개발 속도를 동시에 확보하는 롤 분담의 효과를 실감했습니다. 또한 퍼포먼스 마케팅 환경에서 개발자가 타겟 설정·메시지 전략·전환 최적화까지 이해해야 한다는 점을 몸소 배우며, 비즈니스 지표를 염두에 둔 UI 설계 능력을 키웠습니다.",
    ],
  },
};
