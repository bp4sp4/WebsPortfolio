// ============================================================
// data.tsx - 포트폴리오 데이터 재수출 허브
// ============================================================
//
// 실제 데이터는 아래 파일에서 관리합니다:
//   - 프로필·경력·스킬·연락처·푸터  → ./profile.ts
//   - 프로젝트 (파일 1개 = 프로젝트 1개) → ./projects/<id>.ts
//   - 프로젝트 노출 순서·추가·삭제      → ./projects/index.ts
//   - 타입 정의                       → ./types.ts
//
// 기존 import 경로(@/data/data)는 그대로 사용할 수 있습니다.
// ============================================================

export {
  developerInfo,
  experiences,
  skills,
  manifesto,
  contactInfo,
  footerInfo,
} from "./profile";

export { projects, projectDetails, projectIds } from "./projects";

export type { ProjectDetail, ProjectDetailType, ProjectEntry } from "./types";
