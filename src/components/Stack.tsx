"use client";

import { useRef } from "react";
import { stack } from "@/data/profile";
import { gsap, useGSAP } from "@/lib/gsap";
import s from "@/styles/motion.module.css";
import styles from "@/styles/main.module.css";

/**
 * 기술 스택 섹션.
 * 이력서와 같은 5개 그룹을 표로 보여주고, 그룹마다 실제로 쓴 프로젝트(where)를 붙인다.
 * 고정(pin) 없이 각 행이 화면에 들어올 때 한 번 떠오르기만 한다.
 */
export default function Stack() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // 행마다 따로 트리거 → 모바일처럼 섹션이 길어도 행이 보일 때 떠오른다
      gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row) => {
        gsap.from(row, {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 88%" },
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <section id="skills" ref={rootRef} className={s.st}>
      <div className={styles.term_scanlines} />
      <div className={s.st_inner}>
        <div className={s.st_cmd}>
          <span className={styles.term_arrow}>➜</span>{" "}
          <span className={styles.term_path}>~/portfolio</span>{" "}
          <span className={styles.term_cmd}>cat stack.md</span>
        </div>

        <h2 className={s.st_title}>Skills</h2>

        <div className={s.st_table}>
          {stack.map((row) => (
            <div key={row.group} data-row className={s.st_row}>
              <div className={s.st_group}>{row.group}</div>
              <div>
                <ul className={s.st_items}>
                  {row.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className={s.st_where}>└─ {row.where}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
