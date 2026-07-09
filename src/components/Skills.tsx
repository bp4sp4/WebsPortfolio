"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { skills } from "@/data/data";
import styles from "@/styles/main.module.css";

/* ---------- icons ---------- */
const svg = (children: ReactNode) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const CodeIcon = svg(
  <>
    <path d="M8 8l-4 4 4 4" />
    <path d="M16 8l4 4-4 4" />
  </>
);
const StackIcon = svg(
  <>
    <path d="M4 6h16v5H4z" />
    <path d="M4 13h16v5H4z" />
    <path d="M7.5 8.5h.01" />
    <path d="M7.5 15.5h.01" />
  </>
);
const BrushIcon = svg(
  <>
    <path d="M4 20c2 0 3-1 3-3 0-1.2-.8-2-2-2s-2 .8-2 2c0 .8.4 1.4 1 1.7" />
    <path d="M6 15L16 5l3 3L9 18" />
  </>
);
const SparkIcon = svg(
  <>
    <path d="M5 12l3-6 3 6-3 6z" />
    <path d="M15 4v6" />
    <path d="M18 7h-6" />
  </>
);
const ToolsIcon = svg(
  <>
    <path d="M14.5 5.5a3 3 0 00-3.9 3.9l-6.1 6.1 2 2 6.1-6.1a3 3 0 003.9-3.9l-2 2-1.5-.5-.5-1.5z" />
    <path d="M14 14l5 5" />
  </>
);
const DeviceIcon = svg(
  <>
    <path d="M7 3h10v18H7z" />
    <path d="M11 18h2" />
  </>
);

// data.tsx의 fontawesome 아이콘 클래스 → 터미널 테마 SVG 아이콘 + 주석 태그 매핑
const ICON_MAP: Record<string, { icon: ReactNode; tag: string }> = {
  "fas fa-code": { icon: CodeIcon, tag: "// frontend" },
  "fas fa-server": { icon: StackIcon, tag: "// fullstack" },
  "fas fa-paint-brush": { icon: BrushIcon, tag: "// design" },
  "fas fa-magic": { icon: SparkIcon, tag: "// motion" },
  "fas fa-tools": { icon: ToolsIcon, tag: "// devops" },
  "fas fa-mobile-alt": { icon: DeviceIcon, tag: "// publishing" },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // 섹션이 화면에 들어오면 카드 리빌 + 게이지 애니메이션 시작
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`${styles.term_skills} ${visible ? styles.term_skills_visible : ""}`}
    >
      <div className={styles.term_scanlines} />

      <div className={styles.term_skills_inner}>
        <div className={styles.term_skills_cmdline}>
          <span className={styles.term_arrow}>➜</span>{" "}
          <span className={styles.term_path}>~/portfolio</span>{" "}
          <span className={styles.term_cmd}>ls -la ./skills</span>
        </div>

        <div className={styles.term_skills_head}>
          <h2 className={styles.term_skills_h1}>기술 스택</h2>
          <span className={styles.term_skills_count}>
            // {skills.length} modules loaded
          </span>
        </div>
        <div className={styles.term_skills_rule} />

        <div className={styles.term_skills_grid}>
          {skills.map((skill, i) => {
            const mapped = ICON_MAP[skill.icon] ?? {
              icon: CodeIcon,
              tag: "// module",
            };
            return (
              <div
                key={skill.title}
                className={styles.term_skill_card}
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className={styles.term_skill_topline} />
                <div className={styles.term_skill_card_head}>
                  <div className={styles.term_skill_iconbox}>{mapped.icon}</div>
                  <div>
                    <div className={styles.term_skill_title}>{skill.title}</div>
                    <div className={styles.term_skill_tagline}>{mapped.tag}</div>
                  </div>
                </div>

                <p className={styles.term_skill_desc}>{skill.description}</p>

                <div className={styles.term_skill_tags}>
                  {skill.tags.map((t) => (
                    <span key={t} className={styles.term_skill_tag}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.term_skill_gauge}>
                  <div className={styles.term_skill_gauge_head}>
                    <span>PROFICIENCY</span>
                    <span className={styles.term_skill_pct}>{skill.level}%</span>
                  </div>
                  <div className={styles.term_skill_track}>
                    <div
                      className={styles.term_skill_fill}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.term_skills_endline}>
          <span className={styles.term_arrow}>➜</span>{" "}
          <span className={styles.term_path}>~/portfolio</span>{" "}
          <span className={styles.term_cmd}>_</span>
          <span className={styles.term_blink_cursor} />
        </div>
      </div>
    </section>
  );
}
