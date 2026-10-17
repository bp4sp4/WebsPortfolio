import type { ProjectEntry } from "../types";

const P = "/detail__main/page3imgs/";

export const project: ProjectEntry = {
  id: "stuckpoint",
  badge: "개인 프로젝트 · 오픈소스",
  type: "personal",
  title: "Stuckpoint",
  headline: "사용자가 막히는 순간을 잡아내는 3KB 스크립트",
  date: "2026. 10. 17 ~ 진행 중",
  description:
    "분노 클릭 · 반응 없는 클릭 · 폼 이탈 · 클릭 후 오류처럼 사용자의 답답함이 행동으로 드러나는 순간을 감지해, 문제가 된 버튼과 입력칸을 짚어주는 브라우저 SDK와 대시보드입니다. 일부러 불편하게 만든 결제 화면에서 직접 막혀 보고, 대시보드에서 바로 확인할 수 있습니다.",
  tags: ["TypeScript", "Next.js 15", "Supabase", "Vitest", "npm workspaces"],
  gifImage: `${P}stuckpoint_home.png`,
  github: "https://github.com/bp4sp4/stuckpoint",
  demo: "https://stuckpoint.vercel.app/demo",
  detail: {
    period: "2026. 10. 17 ~ 진행 중",
    mainImage: `${P}stuckpoint_dash.png`,
    images: [
      `${P}stuckpoint_demo.png`,
      `${P}stuckpoint_fixed.png`,
      `${P}stuckpoint_dash.png`,
      `${P}stuckpoint_dash_overlay.png`,
      `${P}stuckpoint_dash_compare.png`,
      `${P}stuckpoint_home.png`,
      `${P}stuckpoint_m_demo.png`,
      `${P}stuckpoint_m_dash.png`,
      `${P}stuckpoint_m_spots.png`,
    ],
    overview: [
      "QA 테스터로 일하며 배운 것은 사용자는 화면이 아니라 막히는 순간을 기억한다는 것이었습니다. 그런데 그 순간은 대부분 조용히 지나갑니다. 사용자는 버그 리포트를 쓰지 않고, 버튼을 몇 번 더 누르다가 떠납니다. Stuckpoint는 그 '몇 번 더 누르는' 행동을 신호로 바꿔, 누가 말해주지 않아도 고칠 곳을 찾게 해주는 도구입니다.",
      "SDK는 의존성 없는 TypeScript로 gzip 3KB입니다. script 태그 한 줄 또는 npm으로 설치하면 분노 클릭 · 반응 없는 클릭 · 폼 이탈 · 클릭 후 오류 네 가지를 감지하고, 경로별 방문을 함께 보내 '방문 중 몇 %가 막혔는지'를 계산합니다. 입력값은 읽지 않고, 쿠키 없이 sessionStorage의 무작위 id만 씁니다.",
      "Next.js 15 웹앱에는 일부러 다섯 군데를 고장 낸 결제 화면과 그 문제를 고친 버전, 3초마다 갱신되는 대시보드가 있습니다. 대시보드는 막힌 곳 순위, 실제 화면 위 표시, 폼 이탈 지점, 고치기 전후 비교를 보여줍니다. 저장소는 인터페이스로 분리해 배포에서는 Supabase, 개발에서는 로컬 JSON 파일을 씁니다.",
    ],
    role: {
      type: "개인 프로젝트 (오픈소스)",
      parts: [
        "기획 · 설계 · 개발 · 배포 1인",
        "브라우저 SDK: 네 가지 막힘 감지기, 선택자 생성, 묶음 전송 (gzip 3KB, 의존성 0)",
        "감지 정확도: 오탐 사례를 찾아 판정 기준을 고치고 테스트 24개로 고정",
        "데모 결제 화면(고장 · 고친 버전)과 실시간 대시보드",
        "공개 수집 API: 형식 검증 · 길이 제한 · IP별 속도 제한 · 허용 키",
        "npm workspaces 모노레포, Vercel · Supabase 배포",
      ],
    },
    links: {
      github: "https://github.com/bp4sp4/stuckpoint",
      demo: "https://stuckpoint.vercel.app/demo",
    },
    goals: [
      {
        icon: "fas fa-hand-pointer",
        title: "직접 막혀 보는 데모",
        description:
          "가상의 쇼핑몰 결제 화면에 손가락 커서만 뜨는 상품 사진, 눌러도 반응 없는 쿠폰 버튼, 응답 모양이 바뀌어 오류가 나는 포인트 사용, 3초 동안 아무 표시 없는 결제 버튼, 하이픈을 넣으면 말없이 실패하는 연락처 칸을 심었습니다. 막히는 순간마다 오른쪽 아래에 감지 알림이 뜨고, 같은 화면을 고친 버전에서는 같은 행동을 해도 막힘이 생기지 않습니다.",
        groups: [
          {
            title: "웹",
            layout: "web",
            shots: [
              { src: `${P}stuckpoint_demo.png`, tag: "고장난 버전", caption: "쿠폰 적용 · 포인트 사용을 누르고 결제 버튼을 연타하자 반응 없는 클릭 2건과 분노 클릭(5번 연타)이 바로 감지됨" },
              { src: `${P}stuckpoint_fixed.png`, tag: "고친 버전", caption: "쿠폰 적용 안내, 결제 진행 표시, 연락처는 숫자만 받도록 고친 화면 - 같은 행동에서 막힘 0건" },
            ],
          },
          {
            title: "모바일",
            layout: "mobile",
            shots: [
              { src: `${P}stuckpoint_m_demo.png`, tag: "데모", caption: "모바일에서 상품 사진과 쿠폰 버튼을 누르자 반응 없는 클릭 알림" },
              { src: `${P}stuckpoint_m_dash.png`, tag: "대시보드", caption: "감지된 막힘과 막힘을 겪은 방문 비율, 종류별 건수" },
              { src: `${P}stuckpoint_m_spots.png`, tag: "막힌 곳", caption: "여러 방문자가 겪은 순서로 정렬한 막힌 곳과 오류 메시지" },
            ],
          },
        ],
      },
      {
        icon: "fas fa-chart-column",
        title: "어디서 · 몇 명이 · 어떻게 막혔는지",
        description:
          "대시보드는 같은 요소에서 생긴 막힘을 묶어 여러 방문자가 겪은 순서로 정렬합니다. 히트맵은 좌표 대신 요소 기준입니다. 방문자마다 화면 폭이 달라 좌표는 흩어지기 때문에, 페이지를 iframe으로 띄우고 기록된 선택자로 요소를 다시 찾아 그 위에 겪은 방문 수만큼 원을 그립니다. 폼 이탈은 제출하지 않고 떠날 때 마지막으로 머문 칸을 모아 어느 칸에서 포기하는지 보여줍니다.",
        shots: [
          { src: `${P}stuckpoint_dash.png`, tag: "요약 · 순위", caption: "감지된 막힘, 막힘을 겪은 방문 비율, 종류별 건수와 가장 많이 막힌 곳 (선택자 · 평균 연타 횟수 · 오류 메시지)" },
          { src: `${P}stuckpoint_dash_overlay.png`, tag: "화면 위에서 보기", caption: "실제 결제 화면 위에 종류별 색과 겪은 방문 수로 원을 표시" },
          { src: `${P}stuckpoint_dash_compare.png`, tag: "폼 이탈 · 전후 비교", caption: "연락처 칸에서 이탈, 고장난 버전 100% → 고친 버전 0% (막힘을 겪은 방문 비율), 실시간 기록" },
        ],
      },
      {
        icon: "fas fa-code",
        title: "스크립트 한 줄 설치",
        description:
          "다른 사이트에서도 바로 쓸 수 있게 script 태그 한 줄(data-key만 넣으면 자동 시작)과 npm 두 가지로 배포합니다. 10건 또는 5초마다 묶어 fetch(keepalive)로 보내고, 탭을 닫을 땐 sendBeacon을 씁니다. 본문을 text/plain으로 보내 다른 도메인에서도 CORS 사전 요청이 생기지 않습니다.",
        shots: [{ src: `${P}stuckpoint_home.png`, tag: "소개", caption: "감지하는 네 가지 막힘, 설치 방법(script 태그 · npm), 개인정보 원칙" }],
        snippet: {
          title: "설치",
          code: `<script
  src="https://stuckpoint.vercel.app/stuckpoint.global.js"
  data-key="my-site"
  defer
></script>`,
          note: "React · Next.js에서는 import { init } from \"stuckpoint\" 후 init({ endpoint, projectKey }). SPA에서 정리할 때 destroy()가 남은 기록을 보내고 리스너를 뗍니다.",
        },
      },
    ],
    technologies: [
      {
        category: "SDK",
        items: [
          { name: "TypeScript", description: "의존성 0, strict · noUncheckedIndexedAccess" },
          { name: "tsup", description: "ESM · CJS · IIFE(script 태그용) 동시 빌드, gzip 3KB" },
          { name: "Vitest + jsdom", description: "감지기 · 선택자 테스트 24개, 가짜 타이머로 시간 판정 검증" },
          { name: "브라우저 API", description: "MutationObserver · sendBeacon · history 감싸기(SPA 방문)" },
        ],
      },
      {
        category: "웹 · 데이터",
        items: [
          { name: "Next.js 15", description: "App Router, 수집 · 집계 API 라우트" },
          { name: "Supabase", description: "PostgreSQL, RLS로 브라우저 직접 접근 차단 (서버만 읽고 씀)" },
          { name: "저장소 인터페이스", description: "Supabase(배포) / 로컬 JSON 파일(개발) 교체" },
          { name: "npm workspaces · Vercel", description: "SDK와 웹앱 모노레포, 웹 빌드에서 SDK를 함께 빌드" },
        ],
      },
    ],
    challenges: [
      {
        title: "반응 없는 클릭의 오탐 줄이기",
        challenge:
          "처음 만든 감지기는 '1초 동안 화면이 안 바뀌면 반응 없음'이었는데, 데모를 실제로 써 보니 대부분 틀렸습니다. 사용자가 포기하고 다음 칸을 누르면 포커스 이동이 반응으로 잡혔고, 알림 토스트처럼 클릭과 상관없는 화면 변화가 있으면 모든 클릭이 정상으로 판정됐고, 손가락 커서가 상속되어 버튼 대신 안쪽 아이콘이 기록됐습니다.",
        solution:
          "포커스 이동은 클릭 직후 100ms 안에만 반응으로 보고, data-stuckpoint-ignore 영역과 입력창 자체의 속성 변화(타이핑 · 자동완성)는 반응에서 뺐습니다. 손가락 커서는 시작되는 가장 바깥 요소를 고르고, 같은 요소를 연타하면 판정 중인 첫 클릭 하나로만 셉니다. 사례마다 테스트를 추가해 다시 깨지지 않게 했습니다.",
      },
      {
        title: "'막힘 0건'의 의미 구분하기",
        challenge:
          "고친 버전에서 막힘이 0건으로 나왔는데, 막힘 이벤트만 보내다 보니 방문이 없어서 0건인지 정말 막힘이 없어서 0건인지 구분할 수 없었습니다. 전후 비교가 성립하지 않았습니다.",
        solution:
          "경로마다 방문에서 한 번만 방문 기록을 보내도록 했습니다. SPA 이동은 history.pushState · replaceState를 감싸 따라가고, 화면 전환과 함께 SDK가 정리될 때 다음 페이지를 잘못 세지 않도록 경로를 즉시 읽고 기록은 잠시 뒤에 합니다. 이제 대시보드는 '방문 중 몇 %가 막혔는지'를 보여주고, 데모에서 고장난 버전 100% → 고친 버전 0%로 비교됩니다.",
      },
      {
        title: "SPA에서 기록이 사라지거나 엉뚱한 페이지로 남는 문제",
        challenge:
          "폼을 쓰다가 다른 화면으로 이동하면 모아둔 기록이 전송 전에 버려졌고, 겨우 남은 폼 이탈은 감지가 끝나는 시점의 주소인 다음 페이지(/dashboard)로 기록됐습니다.",
        solution:
          "destroy()가 리스너를 떼기 전에 쓰다 만 폼과 모아둔 이벤트를 먼저 보내도록 바꾸고, 모든 감지기가 사용자가 행동한 시점의 경로를 저장해 두었다가 그 값으로 기록하게 했습니다. 폼이 DOM에서 사라지는 것도 MutationObserver로 잡아 이탈로 셉니다.",
      },
    ],
    changes: [
      {
        key: "문제 발견",
        before: "사용자가 말해주거나 직접 써 봐야 어디서 막히는지 알 수 있음",
        after: "분노 클릭 · 반응 없는 클릭 · 폼 이탈 · 클릭 후 오류를 **자동 감지**해 버튼과 입력칸 단위로 순위화",
      },
      {
        key: "판단 근거",
        before: "\"좀 불편한 것 같다\"는 느낌",
        after: "**막힘을 겪은 방문 비율**로 고치기 전후를 비교 (데모 기준 100% → 0%)",
      },
      {
        key: "설치",
        before: "분석 도구는 무겁고 설정이 많음",
        after: "script 태그 **한 줄**, gzip **3KB**, 의존성 0, 입력값 · 쿠키 없음",
      },
    ],
    metrics: [
      { value: "3KB", label: "SDK 크기 (gzip)", icon: "fas fa-feather" },
      { value: "4종", label: "감지하는 막힘", icon: "fas fa-hand-pointer" },
      { value: "24", label: "SDK 테스트", icon: "fas fa-vial" },
      { value: "100→0%", label: "데모 전후 막힘 방문 비율", icon: "fas fa-chart-line" },
    ],
    outcome: [
      "QA에서 손으로 찾던 '사용자가 막히는 순간'을 코드로 감지하는 도구로 만들었습니다.",
      "오탐 사례를 직접 찾아 판정 기준을 고친 과정을 테스트로 남겨, 감지 정확도를 근거와 함께 설명할 수 있습니다.",
    ],
  },
};
