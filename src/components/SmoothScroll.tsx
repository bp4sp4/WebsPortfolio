"use client";

import { useEffect, useMemo } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Lenis 스무스 스크롤 + GSAP ScrollTrigger 동기화.
 * - Lenis raf는 gsap.ticker가 구동 (autoRaf: false)
 * - Lenis scroll 이벤트마다 ScrollTrigger.update
 * - prefers-reduced-motion 이면 보간을 끈다 (lerp 1)
 */
function Sync() {
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    if (!lenis) return;
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const options = useMemo<LenisOptions>(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return {
      autoRaf: false,
      lerp: reduce ? 1 : 0.1,
      smoothWheel: !reduce,
      anchors: false,
    };
  }, []);

  return (
    <ReactLenis root options={options}>
      <Sync />
      {children}
    </ReactLenis>
  );
}
