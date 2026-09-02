// ============================================================
// 프로젝트 목록 관리
// ============================================================
//
// ✅ 프로젝트 추가 방법:
//    1. 이 폴더에 새 파일 생성 (기존 파일 하나 복사해서 수정하면 편합니다)
//    2. 아래에 import 추가
//    3. allProjects 배열의 원하는 위치에 넣기 (순서 = 카드/상세 페이지 순서)
//
// ✅ 프로젝트 삭제: import와 allProjects에서 빼기만 하면 됩니다.
// 📌 detail 없이 카드만 표시하려면 해당 파일에서 detail 필드를 빼면 됩니다.
// ============================================================
import type { ProjectDetailType, ProjectEntry } from "../types";
import { project as korhrdOffice } from "./korhrd-office";
import { project as hanpyeongLms } from "./hanpyeong-lms";
import { project as hanpyungsaengEdu } from "./hanpyungsaeng-edu";
import { project as baroCompany } from "./BaroCompany";
import { project as eduvisors } from "./Eduvisors";

const allProjects: ProjectEntry[] = [
  korhrdOffice,
  hanpyeongLms,
  hanpyungsaengEdu,
  baroCompany,
  eduvisors,
];

// ─────────────────────────────────────────────────────────────────────────
// 아래는 allProjects에서 자동 생성됩니다 — 수정하지 마세요
// ─────────────────────────────────────────────────────────────────────────

export const projects = allProjects.map((p) => ({
  id: p.id,
  type: p.type,
  title: p.title,
  date: p.date,
  description: p.description,
  tags: p.tags,
  image: p.gifImage,
  gifImage: p.gifImage,
  github: p.github,
  demo: p.demo,
  ...(p.figma ? { figma: p.figma } : {}),
}));

export const projectDetails: Record<string, ProjectDetailType> = Object.fromEntries(
  allProjects
    .filter((p) => p.detail)
    .map((p) => [
      p.id,
      {
        id: p.id,
        title: p.title,
        period: p.detail!.period,
        tags: p.tags,
        mainImage: p.detail!.mainImage,
        images: p.detail!.images,
        overview: p.detail!.overview,
        role: p.detail!.role,
        links: p.detail!.links,
        goals: p.detail!.goals,
        ...(p.detail!.keyFeatures ? { keyFeatures: p.detail!.keyFeatures } : {}),
        ...(p.detail!.metrics ? { metrics: p.detail!.metrics } : {}),
        technologies: p.detail!.technologies,
        challenges: p.detail!.challenges,
        outcome: p.detail!.outcome,
      } satisfies ProjectDetailType,
    ])
);

// detail 있는 프로젝트만 상세 페이지 네비게이션에 포함
export const projectIds = allProjects.filter((p) => p.detail).map((p) => p.id);
