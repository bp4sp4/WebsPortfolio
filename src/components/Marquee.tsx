"use client";

import styles from "@/styles/main.module.css";

const ITEMS = [
  "Frontend Development",
  "UI · UX Design",
  "React",
  "Next.js",
  "TypeScript",
  "Web Animation",
  "반응형 웹",
  "인터랙션",
  "퍼블리싱",
  "GSAP",
  "Framer Motion",
  "QA Testing",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.marquee_section}>
      <div className={styles.marquee_track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.marquee_item}>
            {item}
            <span className={styles.marquee_dot} aria-hidden>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
