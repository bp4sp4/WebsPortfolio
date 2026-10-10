"use client";

import { Fragment, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import s from "@/styles/home.module.css";
import { reduceMotion, useRevealUp } from "./useHomeMotion";

// "*"로 감싼 단어는 파란색으로 강조
const STATEMENT =
  "QA 테스터로 처음 서비스를 만났습니다. 사용자는 화면이 아니라 *막히는* *순간을* 기억한다는 걸 배웠고, 지금은 한평생그룹에서 사내 ERP와 취업 플랫폼, LMS를 만들고 운영합니다.";

const FACTS = [
  { k: "포지션", v: "Frontend Developer · React · Next.js · TypeScript" },
  { k: "현재", v: "한평생그룹 개발본부 (2025.04 ~) · 웹 디자이너와 2인 팀에서 개발 전담" },
  { k: "출발점", v: "QA 테스터 출신 · 배포 전에 사용자 흐름을 직접 검증합니다" },
];

/**
 * 소개 문장. 단어가 스크롤에 맞춰 흐림 → 선명으로 켜진다 (toss.im "누구나 금융" 패턴).
 * 단어 사이에는 실제 공백을 남겨 복사·스크린리더에서도 문장이 이어진다.
 */
export default function HomeIntro() {
  const rootRef = useRef<HTMLElement>(null);
  useRevealUp(rootRef);

  useGSAP(
    () => {
      if (reduceMotion()) return;
      gsap.fromTo(
        "[data-w]",
        { opacity: 0.12, filter: "blur(8px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: "[data-statement]", start: "top 82%", end: "bottom 50%", scrub: true },
        }
      );
    },
    { scope: rootRef }
  );

  const words = STATEMENT.split(" ");

  return (
    <section id="about" ref={rootRef} className={s.intro}>
      <p data-statement className={s.intro_text}>
        {words.map((w, i) => {
          const hl = w.startsWith("*") && w.endsWith("*");
          return (
            <Fragment key={i}>
              <span data-w className={`${s.intro_w} ${hl ? s.intro_w_hl : ""}`}>
                {hl ? w.slice(1, -1) : w}
              </span>{" "}
            </Fragment>
          );
        })}
      </p>

      <dl data-up className={s.intro_facts}>
        {FACTS.map((f) => (
          <div key={f.k}>
            <dt>{f.k}</dt>
            <dd>{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
