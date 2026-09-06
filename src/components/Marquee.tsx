"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import s from "@/styles/motion.module.css";

const ITEMS = [
  "Frontend",
  "UI · UX",
  "React",
  "Next.js",
  "TypeScript",
  "Interaction",
  "반응형 웹",
  "퍼블리싱",
  "GSAP",
  "Design System",
  "QA",
];

type Props = {
  items?: string[];
  /** true 면 기본 방향이 왼쪽 → 오른쪽 */
  reverse?: boolean;
};

/**
 * 스크롤 속도에 반응하는 마퀴 띠.
 * - 기본적으로 천천히 흐른다
 * - 빠르게 스크롤하면 빨라지고, 위로 스크롤하면 방향이 뒤집힌다
 */
export default function Marquee({ items = ITEMS, reverse = false }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const tripled = [...items, ...items, ...items];

  useGSAP(
    () => {
      const track = rootRef.current?.querySelector<HTMLElement>("[data-track]");
      if (!track) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // 3배로 복제했으니 1/3 만큼 이동하면 한 사이클
      const loop = gsap.fromTo(
        track,
        { xPercent: reverse ? -33.333 : 0 },
        {
          xPercent: reverse ? 0 : -33.333,
          duration: 38,
          ease: "none",
          repeat: -1,
        }
      );
      if (reduce) {
        loop.pause();
        return;
      }

      const clampTs = gsap.utils.clamp(1, 6);
      const clampSkew = gsap.utils.clamp(-6, 6);
      let settle: gsap.core.Tween | undefined;

      ScrollTrigger.create({
        onUpdate: (self) => {
          const v = self.getVelocity();
          const dir = v < 0 ? -1 : 1;
          const ts = clampTs(1 + Math.abs(v) / 700);
          settle?.kill();
          gsap.to(loop, { timeScale: dir * ts, duration: 0.2, overwrite: true });
          gsap.to(track, { skewX: clampSkew(-v / 220), duration: 0.2, overwrite: "auto" });
          settle = gsap.to(loop, {
            timeScale: dir,
            duration: 1.2,
            delay: 0.25,
            ease: "power2.out",
            onStart: () => {
              gsap.to(track, { skewX: 0, duration: 0.8, ease: "power2.out" });
            },
          });
        },
      });
    },
    { scope: rootRef, dependencies: [reverse] }
  );

  return (
    <div ref={rootRef} className={s.mq} aria-hidden>
      <div data-track className={s.mq_track}>
        {tripled.map((item, i) => (
          <span key={i} className={s.mq_item}>
            {item}
            <span className={s.mq_dot}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
