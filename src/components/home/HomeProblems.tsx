"use client";

import { useRef } from "react";
import { projectDetails, projects } from "@/data/data";
import { gsap, useGSAP } from "@/lib/gsap";
import s from "@/styles/home.module.css";
import { reduceMotion, useRevealUp } from "./useHomeMotion";

/** 홈에 보여줄 "문제와 해결" — [프로젝트 id, 상세 challenges 순번] (상세 데이터 그대로 사용) */
const PICKS: [string, number][] = [
  ["korhrd-office", 3], // 은행 API 고정 IP × 서버리스
  ["baroemp", 1], // AI가 경력을 지어내지 않게
  ["korhrd-office", 1], // 다단계 전자결재 상태 머신
  ["hanpyeong-lms", 0], // 강의 영상 무단 접근 차단
  ["baroemp", 0], // DB 없이도 도는 개발 · 테스트 환경
  ["korhrd-office", 2], // 매출 3종 통합 손익
];

const CARDS = PICKS.flatMap(([id, i]) => {
  const c = projectDetails[id]?.challenges[i];
  const p = projects.find((x) => x.id === id);
  return c && p ? [{ id, project: p.title, ...c }] : [];
});

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * 화면 뒤에서 풀었던 문제들.
 * 데스크톱: 섹션을 고정하고, 세로 스크롤만큼 카드 줄이 가로로 흘러간다 (아래 진행 막대가 함께 찬다).
 * 모바일:   손가락으로 넘기는 가로 스크롤 카드.
 */
export default function HomeProblems() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useRevealUp(rootRef);

  useGSAP(
    () => {
      if (reduceMotion()) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (min-height: 700px)", () => {
        const track = trackRef.current!;
        // 마지막 카드가 오른쪽 여백까지 들어올 만큼만 민다
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: stageRef.current,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          })
          .to(track, { x: () => -distance(), duration: 1 }, 0)
          .fromTo("[data-pb]", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0);
      });
    },
    { scope: rootRef }
  );

  const head = (
    <>
      <div className={s.eyebrow}>Behind the screen</div>
      <h2 className={s.pb_h}>
        화면 뒤에서
        <br />
        풀었던 문제들
      </h2>
      <p className={s.pb_lead}>보이는 화면보다 더 오래 고민한 것들이에요. 옆으로 넘겨 보세요.</p>
    </>
  );

  return (
    <section id="problems" ref={rootRef} className={s.pb}>
      <div ref={stageRef} className={s.pb_stage}>
        {/* 모바일에서는 제목을 카드 줄 위에 */}
        <div data-up className={s.pb_head_top}>
          {head}
        </div>

        <div ref={trackRef} className={s.pb_track}>
          {/* 데스크톱에서는 제목이 카드 줄의 맨 앞에서 함께 흘러간다 */}
          <div className={s.pb_head_in}>{head}</div>

          {CARDS.map((c, i) => (
            <article key={c.title} className={s.pb_card}>
              <div className={s.pb_top}>
                <span className={s.pb_no}>{pad(i + 1)}</span>
                <span className={s.pb_project}>{c.project}</span>
              </div>
              <h3 className={s.pb_title}>{c.title}</h3>
              <dl className={s.pb_rows}>
                <div>
                  <dt>문제</dt>
                  <dd>{c.challenge}</dd>
                </div>
                <div className={s.pb_row_on}>
                  <dt>해결</dt>
                  <dd>{c.solution}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className={s.pb_bar} aria-hidden="true">
          <i data-pb />
        </div>
      </div>
    </section>
  );
}
