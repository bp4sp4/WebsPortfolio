"use client";

import { Fragment, useRef, useState } from "react";
import { projects } from "@/data/data";
import { contactInfo } from "@/data/profile";
import { gsap, useGSAP } from "@/lib/gsap";
import s from "@/styles/home.module.css";
import { reduceMotion, useGoTo } from "./useHomeMotion";

const TITLE = ["함께 일할 프론트엔드 개발자를", "찾고 계신다면"];
// 흐르는 띠 두 줄 (각 줄을 두 번 이어 붙여 끊김 없이 반복)
const ROW_A = projects.map((p) => p.cover);
const ROW_B = [...projects].reverse().map((p) => p.cover);

/**
 * 마지막 CTA — 첫 화면 히어로와 짝을 이루는 장면.
 * 스크롤하면 어두운 카드가 둥근 상태에서 화면 전체로 펼쳐지고(고정),
 * 뒤에서는 작업 화면 두 줄이 서로 반대 방향으로 흐른다. 제목은 흐림 → 선명.
 */
export default function HomeContact() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const goTo = useGoTo();

  useGSAP(
    () => {
      if (reduceMotion()) return;
      const q = gsap.utils.selector(rootRef);
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // ① 화면에 들어오는 순간부터 위에 닿을 때까지, 스크롤에 맞춰 카드가 계속 커진다 (고정 없음)
        const grow = { trigger: rootRef.current, start: "top bottom", end: "top top", scrub: true, refreshPriority: -1 };
        gsap.fromTo(
          q("[data-cta]"),
          { clipPath: "inset(16% 20% 16% 20% round 56px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: grow }
        );
        gsap.fromTo(
          q("[data-belt]"),
          { scale: 1.2, opacity: 0.2 },
          { scale: 1, opacity: 0.45, ease: "none", scrollTrigger: { ...grow } }
        );

        // ② 화면을 다 채우면 잠깐 고정되고 제목 → 버튼이 켜진다
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "+=70%",
              pin: stageRef.current,
              scrub: 0.6,
              refreshPriority: -1,
            },
          })
          .fromTo(q("[data-cw]"), { opacity: 0.15, filter: "blur(8px)" }, { opacity: 1, filter: "blur(0px)", stagger: 0.08, duration: 0.7 }, 0)
          .fromTo(q("[data-cta-foot]"), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4 }, 0.5)
          .to({}, { duration: 0.2 });
      });
    },
    { scope: rootRef }
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <>
      <section id="contact" ref={rootRef} className={s.cta}>
        <div ref={stageRef} className={s.cta_stage}>
          <div data-cta className={s.cta_card}>
            <div data-belt className={s.cta_belt} aria-hidden="true">
              {[ROW_A, ROW_B].map((row, r) => (
                <div key={r} className={`${s.cta_row} ${r === 1 ? s.cta_row_rev : ""}`}>
                  {[...row, ...row].map((src, i) => (
                    <img key={i} src={src} alt="" />
                  ))}
                </div>
              ))}
            </div>
            <div className={s.cta_shade} />

            <div className={s.cta_body}>
              <div className={s.cta_eyebrow}>Contact</div>
              <h2 className={s.cta_title}>
                {TITLE.map((line, i) => (
                  <span key={i} className={s.cta_line}>
                    {line.split(" ").map((w, j) => (
                      <Fragment key={j}>
                        <span data-cw className={s.cta_w}>
                          {w}
                        </span>{" "}
                      </Fragment>
                    ))}
                  </span>
                ))}
              </h2>

              <div data-cta-foot className={s.cta_foot}>
                {/* 버튼 대신 이메일 주소 자체를 큰 링크로 */}
                <a href={`mailto:${contactInfo.email}`} className={s.cta_mail}>
                  {contactInfo.email}
                </a>
                <div className={s.cta_links}>
                  <button type="button" onClick={copy}>
                    {copied ? "복사됐어요 ✓" : "주소 복사"}
                  </button>
                  <span aria-hidden="true">·</span>
                  <a href="https://github.com/bp4sp4" target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>

            {/* 푸터도 카드 안에 둔다 → 펼쳐진 어두운 카드가 그대로 페이지의 마지막 화면이 된다 */}
            <footer data-cta-foot className={s.foot}>
              <span>© 2026 박상훈 · Frontend Developer</span>
              <nav>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                <a href="https://github.com/bp4sp4" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="#top" onClick={(e) => goTo(e, "#top")}>
                  맨 위로 ↑
                </a>
              </nav>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}
