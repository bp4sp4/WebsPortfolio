"use client";

import { useRef } from "react";
import { contactInfo } from "@/data/data";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import s from "@/styles/motion.module.css";

const LABEL = "SAY HELLO";

/**
 * "Ready to work?" 큰 타이포 + 마그네틱 버튼(호버 시 글자 스크램블).
 */
export default function Cta() {
  const rootRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const h2 = root?.querySelector<HTMLElement>("[data-h2]");
      if (!root || !h2) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // 글자 단위 리빌 (한 번)
      const split = new SplitText(h2, { type: "chars,words,lines", mask: "lines" });
      if (reduce) {
        gsap.set(split.chars, { yPercent: 0 });
      } else {
        gsap.from(split.chars, {
          yPercent: 110,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.025,
          scrollTrigger: { trigger: h2, start: "top 80%" },
        });
      }

      gsap.from("[data-fade]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root, start: "top 70%" },
      });

      // 마그네틱 버튼
      const wrap = wrapRef.current;
      const btn = btnRef.current;
      const label = labelRef.current;
      if (!wrap || !btn || !label || reduce) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3" });

      const onMove = (e: MouseEvent) => {
        const r = wrap.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        xTo(dx * 0.35);
        yTo(dy * 0.35);
      };
      const onEnter = () => {
        gsap.to(label, {
          duration: 0.7,
          scrambleText: { text: LABEL, chars: "upperCase", speed: 0.5 },
        });
      };
      const onLeave = () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
      };

      wrap.addEventListener("mousemove", onMove);
      wrap.addEventListener("mouseenter", onEnter);
      wrap.addEventListener("mouseleave", onLeave);
      return () => {
        wrap.removeEventListener("mousemove", onMove);
        wrap.removeEventListener("mouseenter", onEnter);
        wrap.removeEventListener("mouseleave", onLeave);
        split.revert();
      };
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} className={s.cta}>
      <div data-fade className={s.cta_label}>NEXT STEP</div>
      <h2 data-h2 className={s.cta_h2}>
        Ready to
        <br />
        work together?
      </h2>
      <div ref={wrapRef} data-fade className={s.cta_btn_wrap}>
        <a ref={btnRef} href={`mailto:${contactInfo.email}`} className={s.cta_btn}>
          <span ref={labelRef} className={s.cta_btn_txt}>
            {LABEL}
          </span>
          <span aria-hidden>→</span>
        </a>
      </div>
      <div data-fade className={s.cta_sub}>
        {contactInfo.email}
      </div>
    </section>
  );
}
