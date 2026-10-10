"use client";

import { useRef, useState } from "react";
import { career } from "@/data/profile";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import s from "@/styles/home.module.css";
import { reduceMotion, useRevealUp } from "./useHomeMotion";

/**
 * 걸어온 길 — 스크롤 타임라인.
 * 데스크톱: 왼쪽에 큰 연도와 그 시기의 제목(chapter)이 고정되고, 오른쪽 항목이 화면 가운데를
 *           지날 때마다 연도가 굴러 바뀐다. 진행선은 스크롤만큼 차오르고, 지나온 항목이 켜진다.
 * 모바일:   고정 없이 항목마다 연도를 함께 보여준다.
 */
export default function HomeCareer() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useRevealUp(rootRef);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-entry]");
      items.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 62%",
          end: "bottom 62%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
      if (reduceMotion()) return;
      gsap.fromTo(
        "[data-fill]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: "[data-tl]", start: "top 62%", end: "bottom 62%", scrub: true },
        }
      );
    },
    { scope: rootRef }
  );

  const now = career[active];

  return (
    <section id="career" ref={rootRef} className={s.career}>
      <div className={s.cr_wrap}>
        <div className={s.cr_side}>
          <div data-up>
            <div className={s.eyebrow} style={{ textAlign: "left" }}>
              Career
            </div>
            <h2 className={s.title}>걸어온 길</h2>
            <p className={s.sub}>QA 테스터로 시작해 프론트엔드 개발자가 되기까지</p>
          </div>
          <div className={s.cr_year_box} aria-hidden="true">
            <div key={now.year + now.chapter} className={s.cr_year}>
              {now.year}
            </div>
            <div key={now.chapter} className={s.cr_chapter}>
              {now.chapter}
            </div>
          </div>
        </div>

        <ol data-tl className={s.cr_tl}>
          <span className={s.cr_line}>
            <i data-fill />
          </span>
          {career.map((c, i) => (
            <li
              key={c.org}
              data-entry
              className={`${s.cr_entry} ${i <= active ? s.cr_entry_on : ""} ${c.current ? s.cr_entry_now : ""}`}
            >
              <span className={s.cr_dot} />
              <div className={s.cr_meta}>
                <span className={s.cr_m_year}>{c.year}</span>
                <span className={s.cr_m_chapter}>{c.chapter}</span>
                <span className={s.cr_period}>{c.period}</span>
              </div>
              <div className={s.cr_org}>
                {c.org}
                {c.current && <span className={s.cr_badge}>재직 중</span>}
              </div>
              <div className={s.cr_role}>{c.role}</div>
              {c.points.length > 0 && (
                <ul className={s.cr_points}>
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
