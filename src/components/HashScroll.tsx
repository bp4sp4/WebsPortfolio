"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "@/lib/gsap";
import { intro } from "@/lib/intro";

/**
 * 홈에 "/#projects" 같은 해시로 들어왔을 때 해당 섹션까지 이동시킨다.
 * Lenis가 스크롤을 가로채고 로더가 처음에 scrollTo(0,0)을 하기 때문에
 * 브라우저 기본 해시 점프가 무시된다. 인트로가 끝나고 핀 레이아웃이
 * 계산된 뒤(ScrollTrigger.refresh)에 직접 스크롤한다.
 */
export default function HashScroll() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    let cancelled = false;
    const off = intro.onDone(() => {
      // 두 프레임 뒤: 로더 제거·핀 스페이서 반영 후 위치 계산
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (cancelled) return;
          const target = document.querySelector<HTMLElement>(hash);
          if (!target) return;
          ScrollTrigger.refresh();
          lenis.scrollTo(target, { immediate: true, force: true });
        })
      );
    });
    return () => {
      cancelled = true;
      off();
    };
  }, [lenis]);

  return null;
}
