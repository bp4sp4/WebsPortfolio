"use client";

import { useCallback, type MouseEvent, type RefObject } from "react";
import { useLenis } from "lenis/react";
import { gsap, useGSAP } from "@/lib/gsap";

export const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** 앵커 링크를 Lenis 스무스 스크롤로 이동시키는 클릭 핸들러 */
export function useGoTo() {
  const lenis = useLenis();
  return useCallback(
    (e: MouseEvent<HTMLElement>, href: string) => {
      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { duration: 1.2 });
      else target.scrollIntoView({ behavior: "smooth" });
    },
    [lenis]
  );
}

/** scope 안의 [data-up] 요소가 화면에 들어올 때 아래에서 떠오른다 (토스의 기본 등장 모션) */
export function useRevealUp(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      if (reduceMotion()) return;
      gsap.utils.toArray<HTMLElement>("[data-up]").forEach((el) => {
        gsap.from(el, {
          y: 48,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: Number(el.dataset.up) || 0,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    },
    { scope }
  );
}
