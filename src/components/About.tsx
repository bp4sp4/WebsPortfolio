"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/data/data";
import styles from "@/styles/main.module.css";

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      const el = contentRef.current;
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`${styles.section} ${styles.about}`}>
      <h2 className={styles.section_title}>About Me</h2>
      <div className={styles.about_content} ref={contentRef}>
        <div className={styles.about_profile}>
          <img src="/main/myimg.jpeg" alt="박상훈 프로필" />
        </div>
        <div className={styles.about_text}>
          <p className={styles.about_intro}>
            안녕하세요!{" "}
            <span className={styles.about_accent}>배움에 끝이 없는 웹 개발자</span>{" "}
            박상훈입니다.
          </p>
          <div className={styles.about_desc}>
            <p>좋아하는 것이기에 재미있게 항상 웹 개발을 진행하고 있습니다.</p>
            <p>
              어디에서도 잘 보이는{" "}
              <span className={styles.about_emphasis}>반응형 웹 접근성</span>과{" "}
              <span className={styles.about_emphasis}>웹 표준</span>을 고려한 웹 페이지를
              만듭니다.
            </p>
            <p>
              항상 개발하면서{" "}
              <span className={styles.about_emphasis}>팀워크</span>와 진정한{" "}
              <span className={styles.about_emphasis}>소통</span>을 중요시하는
              개발자입니다.
            </p>
          </div>

          <div className={styles.about_experience}>
            <h3>Experience</h3>
            {experiences.map((exp, index) => (
              <div className={styles.about_experience_item} key={index}>
                <span className={styles.about_date}>{exp.date}</span>
                <span className={styles.about_info}>{exp.info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
