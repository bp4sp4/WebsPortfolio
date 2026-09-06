"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { gsap, useGSAP } from "@/lib/gsap";
import { intro } from "@/lib/intro";
import s from "@/styles/motion.module.css";

const KEY = "pf_intro_seen";

const LINES: { cmd: string; ok?: boolean }[] = [
  { cmd: "➜ ~/portfolio  boot --fast" },
  { cmd: "  loading modules ........", ok: true },
  { cmd: "  mounting ui .............", ok: true },
  { cmd: "  ready." },
];

/**
 * 첫 방문(세션당 1회)에만 1.5초 정도 나오는 터미널 부팅 인트로.
 * 끝나면 intro.finish() 로 Hero 애니메이션을 깨운다.
 *
 * 완료 여부는 React 상태(hidden)로 들고 로더를 DOM에서 제거한다.
 * (gsap.set 으로 숨기면 라우트 이동 후 돌아올 때 effect 정리 단계에서
 *  스타일이 되돌려져 검은 화면이 남는 문제가 있었다)
 */
export default function Loader() {
  const rootRef = useRef<HTMLDivElement>(null);
  // 클라이언트 라우팅으로 다시 홈에 왔을 때는 이미 끝난 상태 → 렌더하지 않음
  const [hidden, setHidden] = useState(() => intro.done);
  const lenis = useLenis();

  // 인트로 동안 스크롤 잠금
  useEffect(() => {
    if (!lenis || intro.done) return;
    lenis.stop();
    return intro.onDone(() => lenis.start());
  }, [lenis]);

  useGSAP(() => {
    const el = rootRef.current;
    if (!el) return;

    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {}
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      intro.finish();
      setHidden(true);
    };

    if (seen || reduce || intro.done) {
      finish();
      return;
    }

    window.scrollTo(0, 0);
    const lines = el.querySelectorAll("[data-line]");
    const fill = el.querySelector("[data-fill]");

    gsap
      .timeline({ onComplete: finish, defaults: { ease: "none" } })
      .to(lines, { opacity: 1, duration: 0.01, stagger: 0.22 }, 0.15)
      .to(fill, { scaleX: 1, duration: 0.95, ease: "power2.inOut" }, 0.1)
      .to(el, { yPercent: -100, duration: 0.75, ease: "power4.inOut" }, "+=0.2");
  }, []);

  if (hidden) return null;

  return (
    <div ref={rootRef} className={s.loader} aria-hidden>
      <div className={s.loader_box}>
        {LINES.map((l, i) => (
          <div key={i} data-line className={s.loader_line}>
            {l.cmd}
            {l.ok && <span className={s.loader_ok}> ok</span>}
          </div>
        ))}
        <div className={s.loader_bar}>
          <div data-fill className={s.loader_bar_fill} />
        </div>
      </div>
    </div>
  );
}
