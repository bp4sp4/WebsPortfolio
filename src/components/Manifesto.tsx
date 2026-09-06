"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import s from "@/styles/motion.module.css";
import styles from "@/styles/main.module.css";

const STATEMENTS = [
  "화면을 그리는 게 아니라, 사용자의 흐름을 설계합니다.",
  "픽셀 하나의 어긋남도 결국 사용자는 느낍니다. 그래서 끝까지 맞춥니다.",
  "기획·디자인·코드가 한 호흡으로 이어질 때, 좋은 웹이 됩니다.",
];

/**
 * 스크롤할 때 단어가 하나씩 어두운 회색 → 흰색으로 밝아지는 문장 섹션.
 * 데스크톱: 섹션을 화면에 고정(pin)하고 스크롤 160vh 동안 단어를 채운다.
 *           (고정하지 않으면 섹션이 올라오는 사이 이미 다 밝아져 효과가 안 보인다)
 * 모바일:   고정 없이, 섹션이 지나가는 동안 채운다.
 */
export default function Manifesto() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>("[data-w]");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set(words, { color: "#f4f4f2" });
        return;
      }

      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 900px)", mobile: "(max-width: 899px)" },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean };

          if (desktop) {
            gsap.fromTo(
              words,
              { color: "#262626" },
              {
                color: "#f4f4f2",
                ease: "none",
                stagger: 0.35,
                duration: 1,
                scrollTrigger: {
                  trigger: rootRef.current,
                  start: "top top",
                  end: () => `+=${Math.round(window.innerHeight * 1.6)}`,
                  pin: true,
                  anticipatePin: 1,
                  scrub: 0.5,
                },
              }
            );
            return;
          }

          // 모바일: 단어가 화면 아래 85% → 60% 지점을 지나는 동안 켜진다 (읽는 위치를 따라감)
          words.forEach((w) => {
            gsap.fromTo(
              w,
              { color: "#262626" },
              {
                color: "#f4f4f2",
                ease: "none",
                scrollTrigger: { trigger: w, start: "top 85%", end: "top 58%", scrub: true },
              }
            );
          });
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className={s.mf}>
      <div className={styles.term_scanlines} />
      <div className={s.mf_inner}>
        <div className={s.mf_cmd}>
          <span className={styles.term_arrow}>➜</span>{" "}
          <span className={styles.term_path}>~/portfolio</span>{" "}
          <span className={styles.term_cmd}>cat manifesto.md</span>
        </div>
        {STATEMENTS.map((line, i) => (
          <p key={i} className={s.mf_p}>
            {line.split(" ").map((w, j) => (
              <span key={j} data-w className={s.mf_w}>
                {w}
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
