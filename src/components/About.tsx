"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/data/data";
import styles from "@/styles/main.module.css";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add(styles.about_visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(`.${styles.about_animate}`);
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`${styles.section} ${styles.about}`} ref={sectionRef}>
      <h2 className={styles.section_title}>About Me</h2>

      {/* 상단: 프로필 + 소개 */}
      <div className={`${styles.about_hero} ${styles.about_animate}`}>
        <div className={styles.about_profile}>
          <div className={styles.about_profile_ring}>
            <img src="/main/myimg.jpeg" alt="박상훈 프로필" />
          </div>
          <div className={styles.about_name_card}>
            <span className={styles.about_name}>박상훈</span>
            <span className={styles.about_role}>Web Developer</span>
          </div>
        </div>

        <div className={styles.about_intro_area}>
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

          <div className={styles.about_stats}>
            <div className={styles.about_stat}>
              <span className={styles.about_stat_number}>4+</span>
              <span className={styles.about_stat_label}>Projects</span>
            </div>
            <div className={styles.about_stat}>
              <span className={styles.about_stat_number}>2+</span>
              <span className={styles.about_stat_label}>Years Exp.</span>
            </div>
            <div className={styles.about_stat}>
              <span className={styles.about_stat_number}>10+</span>
              <span className={styles.about_stat_label}>Tech Stack</span>
            </div>
          </div>
        </div>
      </div>

      {/* 하단: 가로 타임라인 (위아래 교차) */}
      <div className={`${styles.about_timeline_section} ${styles.about_animate}`}>
        <h3 className={styles.about_timeline_title}>
          Experience
        </h3>
        <div className={styles.tl}>
          {/* 윗줄 카드 (짝수 인덱스) */}
          <div className={styles.tl_row_top}>
            {experiences.map((exp, index) => (
              <div className={styles.tl_cell} key={index}>
                {index % 2 === 0 && (
                  <div
                    className={`${styles.tl_card} ${styles.tl_reveal} ${exp.current ? styles.tl_card_current : ""}`}
                    style={{ "--reveal-order": experiences.length - 1 - index } as React.CSSProperties}
                  >
                    {exp.current && <span className={styles.tl_badge}>현재</span>}
                    <p className={styles.tl_info}>{exp.info}</p>
                    <span className={styles.tl_date}>{exp.date}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 윗줄 줄기 */}
          <div className={styles.tl_row_stem}>
            {experiences.map((_, index) => (
              <div className={styles.tl_cell} key={index}>
                {index % 2 === 0 && (
                  <div
                    className={`${styles.tl_stem} ${styles.tl_reveal}`}
                    style={{ "--reveal-order": experiences.length - 1 - index } as React.CSSProperties}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* 노드 + 가로선 */}
          <div className={styles.tl_row_nodes}>
            <div className={styles.tl_line}></div>
            <div className={styles.tl_rocket}>
              <i className="fas fa-rocket"></i>
            </div>
            {experiences.map((exp, index) => (
              <div className={styles.tl_cell} key={index}>
                <div
                  className={`${styles.tl_dot} ${styles.tl_reveal} ${exp.current ? styles.tl_dot_current : ""}`}
                  style={{ "--reveal-order": experiences.length - 1 - index } as React.CSSProperties}
                >
                  <i className={exp.icon}></i>
                </div>
              </div>
            ))}
          </div>

          {/* 아랫줄 줄기 */}
          <div className={styles.tl_row_stem}>
            {experiences.map((_, index) => (
              <div className={styles.tl_cell} key={index}>
                {index % 2 !== 0 && (
                  <div
                    className={`${styles.tl_stem} ${styles.tl_reveal}`}
                    style={{ "--reveal-order": experiences.length - 1 - index } as React.CSSProperties}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* 아랫줄 카드 (홀수 인덱스) */}
          <div className={styles.tl_row_bottom}>
            {experiences.map((exp, index) => (
              <div className={styles.tl_cell} key={index}>
                {index % 2 !== 0 && (
                  <div
                    className={`${styles.tl_card} ${styles.tl_reveal} ${exp.current ? styles.tl_card_current : ""}`}
                    style={{ "--reveal-order": experiences.length - 1 - index } as React.CSSProperties}
                  >
                    {exp.current && <span className={styles.tl_badge}>현재</span>}
                    <p className={styles.tl_info}>{exp.info}</p>
                    <span className={styles.tl_date}>{exp.date}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
