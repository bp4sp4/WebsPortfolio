"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/data/data";
import styles from "@/styles/main.module.css";

export default function Skills() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

            const progressBar = el.querySelector(
              `.${styles.skills_progress}`
            ) as HTMLElement;
            if (progressBar) {
              const width = progressBar.getAttribute("data-width");
              if (width) {
                setTimeout(() => {
                  progressBar.style.width = width;
                }, 300);
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`${styles.section} ${styles.skills}`}>
      <h2 className={styles.section_title}>기술 스택</h2>
      <div className={styles.skills_grid}>
        {skills.map((skill, index) => (
          <div
            className={styles.skills_card}
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
          >
            <div className={styles.skills_content}>
              <div className={styles.skills_icon}>
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className={styles.skills_tags}>
                {skill.tags.map((tag, tagIndex) => (
                  <span className={styles.tag} key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.skills_level}>
              <div
                className={styles.skills_progress}
                data-width={`${skill.level}%`}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.level}
                style={{ width: "0%" }}
              ></div>
              <span className={styles.skills_pct}>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
