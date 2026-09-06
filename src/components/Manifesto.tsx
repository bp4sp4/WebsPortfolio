"use client";

import { useRef } from "react";
import { manifesto } from "@/data/profile";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import s from "@/styles/motion.module.css";
import styles from "@/styles/main.module.css";

const DIM = "#262626";
const LIT = "#f4f4f2";

/**
 * 매니페스토 × 기술 스택 섹션.
 * 문장(주장)이 단어 단위로 어두운 회색 → 흰색으로 켜지고,
 * 다 켜지면 그 문장을 뒷받침하는 스택 토큰(증거)이 아래에 떠오른다.
 *
 * 데스크톱: 섹션을 화면에 고정(pin)하고 스크롤 240vh 동안 챕터(문장)를 차례로 진행.
 *           왼쪽 레일의 진행선과 챕터 점이 함께 켜진다.
 * 모바일:   고정 없이, 단어는 읽는 위치를 따라 켜지고 토큰은 줄이 보일 때 떠오른다.
 */
export default function Manifesto() {
  const rootRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const chapters = gsap.utils.toArray<HTMLElement>("[data-ch]", root);
      const dots = gsap.utils.toArray<HTMLElement>("[data-dot]", root);
      const allWords = gsap.utils.toArray<HTMLElement>("[data-w]", root);
      const allTokens = gsap.utils.toArray<HTMLElement>("[data-tk]", root);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        gsap.set(allWords, { color: LIT });
        gsap.set(allTokens, { opacity: 1, y: 0 });
        gsap.set(dots, { "--dot": 1 });
        return;
      }

      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 900px)", mobile: "(max-width: 899px)" },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean };

          if (desktop) {
            // 레일 선: 첫 점 중심 ~ 마지막 점 중심
            const rail = railRef.current;
            const fill = railFillRef.current;
            const layoutRail = () => {
              if (!rail || !fill || dots.length === 0) return;
              const rb = rail.getBoundingClientRect();
              const first = dots[0].getBoundingClientRect();
              const last = dots[dots.length - 1].getBoundingClientRect();
              const top = first.top + first.height / 2 - rb.top;
              const bottom = last.top + last.height / 2 - rb.top;
              rail.style.setProperty("--rail-top", `${top}px`);
              rail.style.setProperty("--rail-h", `${bottom - top}px`);
            };
            layoutRail();
            ScrollTrigger.addEventListener("refreshInit", layoutRail);

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: () => `+=${Math.round(window.innerHeight * 2.4)}`,
                pin: true,
                anticipatePin: 1,
                scrub: 0.6,
                onUpdate: (st) => {
                  if (fill) fill.style.transform = `scaleY(${st.progress})`;
                },
              },
            });

            chapters.forEach((ch, i) => {
              const words = ch.querySelectorAll<HTMLElement>("[data-w]");
              const tokens = ch.querySelectorAll<HTMLElement>("[data-tk]");
              const dot = dots[i];
              // 단어가 거의 다 켜질 때 토큰이 떠오르고, 같은 시점에 레일 점이 켜진다
              tl.fromTo(words, { color: DIM }, { color: LIT, ease: "none", stagger: 0.35, duration: 1 })
                .fromTo(
                  tokens,
                  { opacity: 0, y: 8 },
                  { opacity: 1, y: 0, ease: "power2.out", stagger: 0.12, duration: 0.5 },
                  ">-0.4"
                )
                .to(dot, { "--dot": 1, duration: 0.3 }, "<")
                .to({}, { duration: 0.6 }); // 잠깐 머무름
            });

            return () => ScrollTrigger.removeEventListener("refreshInit", layoutRail);
          }

          // 모바일: 단어가 화면 아래 85% → 58% 지점을 지나는 동안 켜진다 (읽는 위치를 따라감)
          chapters.forEach((ch) => {
            const words = ch.querySelectorAll<HTMLElement>("[data-w]");
            const tokens = ch.querySelectorAll<HTMLElement>("[data-tk]");
            words.forEach((w) => {
              gsap.fromTo(
                w,
                { color: DIM },
                {
                  color: LIT,
                  ease: "none",
                  scrollTrigger: { trigger: w, start: "top 85%", end: "top 58%", scrub: true },
                }
              );
            });
            gsap.fromTo(
              tokens,
              { opacity: 0, y: 8 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.06,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: { trigger: ch.querySelector("[data-ev]"), start: "top 72%" },
              }
            );
          });
        }
      );
    },
    { scope: rootRef }
  );

  const moduleCount = manifesto.reduce((n, ch) => n + ch.stack.length, 0);

  return (
    <section id="skills" ref={rootRef} className={s.mf}>
      <div className={styles.term_scanlines} />
      <div className={s.mf_inner}>
        {/* 왼쪽 레일: 챕터 번호 + 진행선 (데스크톱만) */}
        <div ref={railRef} className={s.mf_rail} aria-hidden="true">
          <div className={s.mf_rail_line} />
          <div ref={railFillRef} className={s.mf_rail_fill} />
        </div>

        <div className={s.mf_body}>
          <div className={s.mf_cmd}>
            <span className={styles.term_arrow}>➜</span>{" "}
            <span className={styles.term_path}>~/portfolio</span>{" "}
            <span className={styles.term_cmd}>cat manifesto.md</span>{" "}
            <span className={s.mf_flag}>--with-stack</span>
          </div>

          {manifesto.map((ch, i) => (
            <div key={i} data-ch className={s.mf_ch}>
              <div className={s.mf_idx} aria-hidden="true">
                <i data-dot className={s.mf_dot} />
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                <p className={s.mf_p}>
                  {ch.statement.split(" ").map((w, j) => (
                    <span key={j} data-w className={s.mf_w}>
                      {w}
                    </span>
                  ))}
                </p>
                <div data-ev className={s.mf_ev}>
                  <span className={s.mf_ev_k}>└─ {ch.label}</span>
                  {ch.stack.map((t) => (
                    <span
                      key={t.name}
                      data-tk
                      className={`${s.mf_tk} ${t.hi ? s.mf_tk_hi : ""}`}
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className={s.mf_foot}>
            <span>
              <span className={styles.term_arrow}>➜</span>{" "}
              <span className={styles.term_path}>~/portfolio</span>{" "}
              <span className={styles.term_cmd}>_</span>
              <span className={styles.term_blink_cursor} />
            </span>
            <span className={s.mf_meta}>
              {`// `}
              <b>{moduleCount} modules</b>
              {` · ${manifesto.length} principles · 2023 → 2026`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
