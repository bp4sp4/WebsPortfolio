import type { ProjectEntry } from "../types";

const P = "/detail__main/page3imgs/";

export const project: ProjectEntry = {
  id: "baroemp",
  type: "company",
  title: "한평생 바로취업",
  headline: "중장년 취업을 5단계로 잇는 원스톱 플랫폼",
  date: "2026. 08. 12 ~ 진행 중",
  description:
    "중장년을 위한 취업 원스톱 플랫폼입니다. 직업진단 → 일자리 → 지원금 → 이력서·자소서 → 지원까지 한 사람의 취업 경로를 5단계로 잇고, 회원 행동이 쌓일수록 리드 점수·추천·CRM 상담으로 연결되는 Career DB를 구축했습니다.",
  tags: ["Next.js 16", "TypeScript", "Supabase", "Claude AI", "고용24 API", "Tailwind CSS 4"],
  gifImage: `${P}baroemp_home.png`,
  github: "https://github.com/KorhrdGroup/baroemp",
  demo: "https://www.job24.co.kr/",
  detail: {
    period: "2026. 08. 12 ~ 진행 중",
    mainImage: `${P}baroemp_home.png`,
    images: [
      `${P}baroemp_home.png`,
      `${P}baroemp_home_2.png`,
      `${P}baroemp_assessment_q.png`,
      `${P}baroemp_support.png`,
      `${P}baroemp_home_3.png`,
      `${P}baroemp_mypage.png`,
      `${P}baroemp_m_home.png`,
      `${P}baroemp_m_assessment.png`,
      `${P}baroemp_m_jobs.png`,
      `${P}baroemp_m_mypage.png`,
      `${P}baroemp_m_resume.png`,
      `${P}baroemp_jobs_user.png`,
      `${P}baroemp_admin_jobs.png`,
      `${P}baroemp_resume_new.png`,
      `${P}baroemp_resume.png`,
      `${P}baroemp_cover_letter.png`,
      `${P}baroemp_admin_users.png`,
      `${P}baroemp_admin_assessments.png`,
      `${P}baroemp_admin_support.png`,
    ],
    overview: [
      "⚠️ 아래 화면은 실제 회원 데이터 대신 시드 데이터로 동작하는 Mock 모드에서 캡처한 것입니다. 이름·연락처는 모두 가상의 값이며, 운영 중인 서비스의 회원 정보는 포함되어 있지 않습니다.",
      "한평생 바로취업은 중장년을 중심으로 취업 가능성을 진단하고, 직업 → 채용 → 지원금 → 자격·교육 → 취업까지 개인별 취업 경로를 한 시스템에서 연결하는 Career Platform입니다. 회원은 마이페이지에서 취업 프로필·직업진단·일자리·이력서·지원의 5단계 진행 상황을 보며 다음 할 일을 안내받고, 운영자는 같은 데이터를 CRM으로 봅니다.",
      "Next.js 16 App Router + React 19 + Supabase(PostgreSQL, RLS) 기반으로 공개 사이트·회원 영역·관리자를 단일 코드베이스에 두었습니다. 고용24(Work24) 채용공고 API와 공공 지원사업 API를 Provider 패턴으로 동기화하고, Vercel Cron이 매일 공고를 갱신하고 거주지 근처 신규 공고를 알림톡으로 보냅니다. 이력서·자소서 첨삭은 Claude API를 구조화 출력으로 호출하며, 작업 무게에 따라 모델과 사고 깊이를 나눠 씁니다.",
      "핵심 자산은 영업 가능한 Career DB입니다. 직업진단 응답·공고 조회·지원·지원금 검사 같은 행동 이벤트가 쌓이면 규칙 기반 리드 점수(A~D 등급)로 환산되고, 콘텐츠 ↔ 회원 양방향 매칭 엔진이 추천과 잠재고객 추출을 담당합니다. 환경 변수가 없으면 InMemory Mock 저장소로 동작해 개발·테스트가 DB 없이도 가능합니다.",
    ],
    role: {
      type: "실무 프로젝트 (사내)",
      parts: [
        "풀스택 설계·개발 (약 5.8만 줄 TypeScript, 마이그레이션 74개 · 테이블 63개)",
        "5단계 취업 여정 UX와 마이페이지 진행 상태 설계",
        "고용24·공공 지원사업 API Provider 패턴 및 Vercel Cron 동기화",
        "Claude API 기반 이력서·자소서 첨삭 (구조화 출력, 모델 티어링)",
        "규칙 기반 리드 스코어링·양방향 매칭 엔진, 관리자 CRM·엑셀 내보내기",
        "Supabase Auth·RLS·역할(USER/CONSULTANT/ADMIN) 권한 체계, Mock/Supabase 이중 데이터 모드",
      ],
    },
    links: {
      github: "https://github.com/KorhrdGroup/baroemp",
      demo: "https://www.job24.co.kr/",
    },
    goals: [
      {
        icon: "fas fa-route",
        title: "진단 → 일자리 → 지원금 → 취업, 한 줄로 잇는 여정",
        description:
          "홈에서 인기 직종과 신청 가능한 지원금을 먼저 보여주고, 3~5분 직업진단과 2~3분 지원금 진단으로 회원의 조건을 모읍니다. 마이페이지는 취업 프로필·직업진단·일자리·이력서·지원의 5단계 중 지금 어디까지 왔는지와 다음 할 일을 한 문장으로 안내합니다.",
        groups: [
          {
            title: "웹",
            layout: "web",
            shots: [
              { src: `${P}baroemp_home.png`, tag: "홈", caption: "홈 - 관심 직종 검색과 인기 검색어, 4개 핵심 서비스 카드, 누적 지표 배너" },
              { src: `${P}baroemp_home_2.png`, caption: "인기 직업 - 채용 건수·평균 연봉·신입 가능 여부를 카드로 비교" },
              { src: `${P}baroemp_assessment_q.png`, tag: "직업진단", caption: "직업진단 문항 - 프로필에서 이미 아는 항목은 미리 채워 두고 확인만 하게 함 (26문항 5영역)" },
              { src: `${P}baroemp_support.png`, tag: "지원금", caption: "지원금 찾기 - 민감정보 없이 몇 가지 조건으로 정부·지자체 지원제도와 가능성 등급을 안내" },
              { src: `${P}baroemp_home_3.png`, caption: "신청 가능한 지원금 카드와 취업 성공 스토리" },
              { src: `${P}baroemp_mypage.png`, tag: "마이페이지", caption: "5단계 진행 상태 - 완료 단계는 체크, 현재 단계는 다음 행동 버튼, 거주지 근처 공고 알림톡 설정" },
            ],
          },
          {
            title: "모바일",
            layout: "mobile",
            shots: [
              { src: `${P}baroemp_m_home.png`, tag: "홈", caption: "모바일 홈 - 검색과 인기 검색어를 상단에, 서비스 카드는 2열" },
              { src: `${P}baroemp_m_assessment.png`, tag: "직업진단", caption: "직업진단 시작 화면 - 큰 글자와 한 개의 시작 버튼" },
              { src: `${P}baroemp_m_jobs.png`, tag: "일자리", caption: "일자리찾기 - 큐레이션 탭을 가로 스크롤로, 희망직무 미설정 시 설정 유도" },
              { src: `${P}baroemp_m_mypage.png`, tag: "마이페이지", caption: "5단계 진행 상태를 세로로 재배치, 다음 행동 버튼은 전체 폭" },
              { src: `${P}baroemp_m_resume.png`, tag: "이력서", caption: "이력서·자기소개서 목록과 새로 만들기" },
            ],
          },
        ],
      },
      {
        icon: "fas fa-briefcase",
        title: "맞춤 일자리 큐레이션과 고용24 연동",
        description:
          "채용공고는 고용24(Work24) 오픈 API를 Provider 패턴으로 받아 지역·직종·연령대 추천을 정규화해 저장하고, 매일 새벽 Vercel Cron이 목록과 상세를 동기화합니다. 회원에게는 맞춤 추천·진단 맞춤 공고·지금 지원가능·자격 따면 열리는 공고·신규·마감임박 6개 탭으로 나눠 보여주고, 비로그인 방문자에게도 잠긴 탭을 보여 가입을 유도합니다.",
        shots: [
          { src: `${P}baroemp_jobs_user.png`, tag: "회원", caption: "맞춤 추천 탭 - 희망 지역 일치·자격 요건 없음·신입 가능·중장년 추천 배지로 준비도를 표시" },
          { src: `${P}baroemp_admin_jobs.png`, tag: "관리자", caption: "채용공고 관리 - 현재 Provider와 보유·노출 건수, 동기화 버튼, 연령대별 활동과 많이 본 직종 집계" },
        ],
      },
      {
        icon: "fas fa-wand-magic-sparkles",
        title: "Claude 기반 이력서·자소서 첨삭",
        description:
          "양식 선택을 '어떤 기준으로 AI가 첨삭하는가'로 바꿔 표준·경력직·중장년 재취업·복지·돌봄 4종 AI 에이전트로 보여줍니다. 회원 프로필의 경력·자격·희망직무를 불러와 초안을 만들고, 문장 다듬기·전체 점검·공고 맞춤·자소서 초안을 구조화 출력으로 받아 자유 텍스트 파싱을 하지 않습니다. 사용자가 주지 않은 경력이나 수치를 만들어내지 않도록 시스템 프롬프트로 강제합니다.",
        shots: [
          { src: `${P}baroemp_resume_new.png`, tag: "AI 에이전트", caption: "이력서 만들기 - 표준·경력직·중장년 재취업·복지·돌봄 에이전트 중 선택, 항목 수는 다음 단계에서 조정" },
          { src: `${P}baroemp_resume.png`, caption: "이력서·자기소개서 홈 - 프로필 정보를 불러와 빠르게 작성하고 AI 첨삭으로 다듬는 흐름 안내" },
          { src: `${P}baroemp_cover_letter.png`, caption: "자기소개서 - 문항을 자유롭게 추가·삭제·순서 변경하고 AI 초안·첨삭을 받는 편집기" },
        ],
      },
      {
        icon: "fas fa-users-gear",
        title: "Career DB · 리드 스코어링 · 관리자 CRM",
        description:
          "회원의 프로필과 행동 이벤트가 규칙 기반 리드 점수와 A~D 등급으로 환산되어 관리자 회원 목록에 바로 표시됩니다. 직업진단 응답 분포, 지원금 검사 응답, 채용공고·지원제도 동기화 현황을 관리자에서 보고, 영업 리드는 엑셀로 내보내 상담 조직에 전달합니다. /admin은 서버 컴포넌트에서 DB의 역할을 조회해 차단하므로 클라이언트에서 우회할 수 없습니다.",
        shots: [
          { src: `${P}baroemp_admin_users.png`, tag: "회원·Career DB", caption: "회원 목록 - 지역·취업상태·유입 채널·가입일과 함께 리드 등급(A 85, B 45 …)과 마케팅 동의를 한 줄에 표시 (시드 데이터)" },
          { src: `${P}baroemp_admin_assessments.png`, tag: "직업진단", caption: "직업진단 집계 - 검사 시작·완료·완료율과 26문항 5영역별 연령대 응답 분포" },
          { src: `${P}baroemp_admin_support.png`, tag: "지원금", caption: "지원금 카탈로그 - 운영기관·카테고리·관련도 점수·신청기간과 Provider 동기화" },
        ],
      },
    ],
    keyFeatures: [
      {
        icon: "fas fa-diagram-project",
        title: "5단계 취업 여정 [핵심]",
        description: "취업 프로필 → 직업진단·지원금 → 일자리 → 이력서·자소서 → 지원. 각 단계 완료 여부를 실제 행동 신호로 판정하고 마이페이지가 다음 할 일을 안내합니다.",
      },
      {
        icon: "fas fa-clipboard-list",
        title: "직업진단 · 지원금 진단",
        description: "26문항 5영역 직업진단으로 적합도·준비도를 계산하고, 지원금 진단은 민감정보 없이 조건만으로 가능성 등급과 신청 방법을 안내합니다.",
      },
      {
        icon: "fas fa-briefcase",
        title: "고용24 채용공고 동기화 [핵심]",
        description: "Work24 오픈 API 목록·상세를 Provider로 정규화해 저장하고 Vercel Cron이 매일 갱신합니다. 키가 없으면 Mock Provider로 동작합니다.",
      },
      {
        icon: "fas fa-wand-magic-sparkles",
        title: "Claude AI 첨삭 · 4종 에이전트",
        description: "문장 다듬기·전체 점검·공고 맞춤·자소서 초안을 zod 구조화 출력으로 받고, 작업 무게에 따라 Sonnet/Opus와 사고 깊이를 나눠 씁니다.",
      },
      {
        icon: "fas fa-bell",
        title: "거주지 근처 공고 알림톡",
        description: "동의한 회원에게 매일 아침 10시 거주지 근처 신규 공고 1건을 카카오 알림톡으로 보냅니다. 회원당 하루 1건, 같은 공고 재발송 금지.",
      },
      {
        icon: "fas fa-chart-line",
        title: "리드 스코어링 · 양방향 매칭",
        description: "행동 이벤트를 규칙으로 점수화해 A~D 등급을 매기고, 회원 → 콘텐츠·공고·지원금과 콘텐츠 → 잠재고객 양방향 매칭으로 추천과 영업 리드를 만듭니다.",
      },
      {
        icon: "fas fa-file-excel",
        title: "관리자 CRM · 엑셀 내보내기",
        description: "회원·직업진단·채용공고·지원금·이력서·컨설팅·공고 알림·영업 리드·통계 9개 메뉴. 영업 리드와 통계는 ExcelJS로 내보내 상담 조직에 전달합니다.",
      },
      {
        icon: "fas fa-database",
        title: "Mock / Supabase 이중 데이터 모드",
        description: "UI → Service → Repository 구조에서 환경 변수 유무로 InMemory Mock과 Supabase 저장소를 바꿔 끼웁니다. 운영환경에서는 Mock 폴백을 막아 저장 실패가 성공처럼 보이지 않게 합니다.",
      },
    ],
    technologies: [
      {
        category: "프론트엔드",
        items: [
          { name: "Next.js 16", description: "App Router · 서버 컴포넌트 · 라우트 그룹 (site / admin)" },
          { name: "React 19", description: "서버 액션 기반 폼 처리" },
          { name: "TypeScript", description: "strict 모드, 도메인 타입 공유" },
          { name: "Tailwind CSS 4", description: "shadcn/ui + lucide 아이콘" },
        ],
      },
      {
        category: "백엔드 & 데이터",
        items: [
          { name: "Supabase", description: "PostgreSQL · Auth · RLS · 마이그레이션 74개" },
          { name: "Repository 패턴", description: "Mock(InMemory)과 Supabase 저장소 교체 가능" },
          { name: "매칭·스코어링 엔진", description: "규칙 기반 리드 점수, 양방향 매칭" },
          { name: "ExcelJS", description: "영업 리드·통계 엑셀 내보내기" },
        ],
      },
      {
        category: "외부 연동 & AI",
        items: [
          { name: "고용24 (Work24) API", description: "채용공고 목록·상세 동기화" },
          { name: "공공 지원사업 API", description: "정부·지자체 지원제도 카탈로그" },
          { name: "Claude API", description: "이력서·자소서 첨삭, zod 구조화 출력" },
          { name: "카카오 알림톡", description: "거주지 근처 신규 공고 일일 알림" },
          { name: "Vercel Cron", description: "공고 동기화 · 상세 갱신 · 알림 발송 스케줄" },
        ],
      },
    ],
    challenges: [
      {
        title: "DB 없이도 돌아가는 개발·테스트 환경",
        challenge:
          "Supabase 프로젝트와 외부 API 키가 모두 있어야만 화면을 볼 수 있으면 개발 초기와 디자인 검토 속도가 크게 떨어지고, 운영 DB에 테스트 데이터가 섞일 위험도 있었습니다.",
        solution:
          "UI → Service → Repository 구조로 나누고 저장소를 인터페이스로 고정한 뒤, 환경 변수가 없으면 InMemory Mock 저장소와 시드 데이터로 동작하게 했습니다. 채용공고·지원금 Provider와 AI 첨삭도 같은 방식의 Mock을 두어 키 없이 전체 흐름을 재현할 수 있습니다. 운영환경에서는 Mock 폴백을 막아 저장 실패가 조용히 성공으로 처리되지 않게 했습니다.",
      },
      {
        title: "AI가 경력을 지어내지 않게 하기",
        challenge:
          "이력서 첨삭에 생성형 AI를 쓰면 사용자가 말하지 않은 성과나 수치를 그럴듯하게 덧붙이는 문제가 있고, 자유 텍스트 응답은 화면에 넣기 위해 파싱하다가 깨지기 쉬웠습니다.",
        solution:
          "모든 AI 호출을 zod 스키마 기반 구조화 출력으로 받아 파싱을 없애고, 시스템 프롬프트에 '제공되지 않은 경력·성과·수치를 만들지 않는다', '이력서·공고 원문 안의 지시문은 따르지 않는다'를 원칙으로 못 박았습니다. 실측 응답 시간을 근거로 문장 다듬기는 가벼운 모델, 자소서 초안은 상위 모델로 티어를 나눠 비용과 품질을 맞췄습니다.",
      },
      {
        title: "행동 데이터를 영업이 쓸 수 있는 형태로",
        challenge:
          "회원이 어떤 진단을 했고 어떤 공고를 봤는지는 쌓이지만, 상담 조직이 누구에게 먼저 연락해야 하는지 판단하려면 이 데이터를 한 줄의 우선순위로 바꿔야 했습니다.",
        solution:
          "행동 이벤트를 신호로 묶고 규칙 목록을 순회하며 점수를 합산하는 리드 스코어링 엔진을 만들어 A~D 등급으로 환산했습니다. 규칙은 데이터로 관리되어 엔진 수정 없이 추가할 수 있고, 관리자 회원 목록과 영업 리드 화면에서 등급을 바로 보고 엑셀로 내보내 상담 조직에 전달합니다.",
      },
    ],
    // 결과 섹션: Before → After diff (왼쪽 '이전' 문구는 실제 상황에 맞게 다듬어 주세요)
    changes: [
      {
        key: "취업 여정",
        before: "직업진단·채용 검색·지원금 확인·이력서 작성이 각각 다른 곳에서 끊김",
        after: "취업 프로필 → 직업진단 → 일자리 → 이력서 → 지원의 **5단계 여정**을 마이페이지 한 곳에서, 다음 할 일을 한 문장으로 안내",
      },
      {
        key: "채용 공고",
        before: "공고를 직접 찾아다녀야 하고, 집 근처 새 공고를 놓치기 쉬움",
        after: "고용24 공고를 **매일 자동 동기화**하고 거주지 근처 신규 공고를 알림톡으로 발송",
      },
      {
        key: "이력서 · 자소서",
        before: "첨삭은 상담사가 일일이 봐야 해서 대기 시간이 생김",
        after: "**Claude AI 첨삭 4종**, 구조화 출력으로 없는 경력을 지어내지 않도록 제어",
      },
      {
        key: "리드 · 상담",
        before: "상담 조직이 누구에게 먼저 연락할지 감으로 판단",
        after: "행동 이벤트 → 리드 점수 → 영업 전달 파이프라인을 규칙 데이터로 관리, 기준을 코드 수정 없이 변경",
      },
    ],
    // diff 아래 숫자 한 줄
    metrics: [
      { value: "5단계", label: "취업 여정", icon: "fas fa-route" },
      { value: "63", label: "DB 테이블", icon: "fas fa-database" },
      { value: "74", label: "마이그레이션", icon: "fas fa-layer-group" },
      { value: "4종", label: "Claude AI 첨삭", icon: "fas fa-wand-magic-sparkles" },
      { value: "4", label: "외부 연동 · 고용24 · 지원사업 · Claude · 알림톡", icon: "fas fa-link" },
      { value: "5.8만", label: "줄 TypeScript", icon: "fas fa-code" },
    ],
    outcome: [
      "직업진단부터 지원까지 끊기던 중장년 취업 준비 과정을 한 플랫폼의 5단계 여정으로 묶었고, 회원은 마이페이지에서 다음 할 일을, 운영자는 같은 데이터를 리드 등급과 CRM으로 봅니다.",
      "고용24·공공 지원사업·Claude·알림톡 네 가지 외부 연동을 Provider·Repository 인터페이스 뒤에 두어, 키가 없는 환경에서도 전체 흐름이 동작하고 운영환경에서는 실패가 감춰지지 않는 구조를 만들었습니다.",
      "행동 이벤트 → 리드 점수 → 영업 전달까지의 파이프라인을 규칙 데이터로 관리해, 상담 조직이 우선순위를 판단하는 기준을 코드 수정 없이 바꿀 수 있게 했습니다.",
    ],
  },
};
