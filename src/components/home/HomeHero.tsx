"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/data/data";
import { gsap, useGSAP } from "@/lib/gsap";
import { intro } from "@/lib/intro";
import s from "@/styles/home.module.css";
import { reduceMotion } from "./useHomeMotion";

// 콜라주 타일 16개 = 프로젝트 대표 화면 6장을 반복
const TILES = Array.from({ length: 16 }, (_, i) => projects[i % projects.length]);

const FULL = "inset(0px 0px 0px 0px round 0px)";

/**
 * 히어로 (toss.im 첫 화면 패턴).
 * 둥근 카드 안에 작업 화면 콜라주를 두고, 스크롤하면
 * ① 카드가 화면 전체로 커지고 ② 콜라주가 확대되며 ③ 첫 문구가 빠지고 두 번째 문구가 들어온다.
 * 섹션은 그동안 고정(pin)된다.
 */
export default function HomeHero() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // 예전 인트로 로더 대신 신호를 보낸다 → HashScroll("/#projects" 복귀)이 동작
  useEffect(() => {
    intro.finish();
  }, []);

  useGSAP(
    () => {
      if (reduceMotion()) return;
      const q = gsap.utils.selector(rootRef);

      // 첫 진입: 카드가 살짝 커지며 나타나고 문구가 올라온다
      gsap.from(q("[data-card]"), { scale: 0.96, autoAlpha: 0, duration: 1.1, ease: "power3.out" });
      gsap.from(q("[data-copy] > *"), { y: 36, autoAlpha: 0, duration: 1, stagger: 0.12, delay: 0.25, ease: "power3.out" });

      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean };
          const start = desktop
            ? "inset(72px 24px 24px 24px round 32px)"
            : "inset(64px 12px 12px 12px round 24px)";

          gsap
            .timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: rootRef.current,
                start: "top top",
                end: "+=140%",
                pin: stageRef.current,
                scrub: 0.6,
              },
            })
            .fromTo(q("[data-card]"), { clipPath: start }, { clipPath: FULL, duration: 1 }, 0)
            .fromTo(q("[data-wall]"), { scale: 1, rotate: -8 }, { scale: 1.18, rotate: -4, duration: 2 }, 0)
            .to(q("[data-copy]"), { autoAlpha: 0, y: -48, duration: 0.45 }, 0.6)
            .to(q("[data-hint]"), { autoAlpha: 0, duration: 0.2 }, 0)
            .to(q("[data-dim]"), { opacity: 1, duration: 0.5 }, 0.85)
            .fromTo(q("[data-copy2]"), { autoAlpha: 0, y: 48 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 1.05)
            .to({}, { duration: 0.35 });
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <header id="top" ref={rootRef} className={s.hero}>
      <div ref={stageRef} className={s.hero_stage}>
        <div data-card className={s.hero_card}>
          <div data-wall className={s.hero_wall} aria-hidden="true">
            {TILES.map((p, i) => (
              <img key={i} src={p.cover} alt="" />
            ))}
          </div>
          <div className={s.hero_shade} />
          <div data-dim className={s.hero_dim} />

          <div data-copy className={s.hero_copy}>
            <div className={s.hero_label}>박상훈 · 프론트엔드 개발자</div>
            <h1 className={s.hero_title}>
              사용자가 막히는 순간을
              <br />
              먼저 찾아 고칩니다
            </h1>
          </div>

          <div data-hint className={s.hero_hint}>
            스크롤 <i />
          </div>

          <div data-copy2 className={s.hero_copy2}>
            <h2 className={s.hero_title}>
              설계부터 운영까지,
              <br />
              직접 만든 실서비스 {projects.length}개
            </h2>
            <p>React · Next.js · TypeScript</p>
          </div>
        </div>
      </div>
    </header>
  );
}
