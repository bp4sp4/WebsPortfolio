"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/data";
import styles from "@/styles/main.module.css";

type TabType = "all" | "company" | "personal";

const TABS: { key: TabType; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "company", label: "회사" },
  { key: "personal", label: "개인" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const isPaused = useRef(false);

  const filtered = projects.filter(
    (p) => activeTab === "all" || p.type === activeTab
  );

  const countOf = (tab: TabType) =>
    tab === "all"
      ? projects.length
      : projects.filter((p) => p.type === tab).length;

  const prev = () => setCurrentIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));

  // 자동 슬라이드 (3.5초마다, 호버 시 멈춤)
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) {
        setCurrentIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));
      }
    }, 3500);
    return () => clearInterval(id);
  }, [filtered.length]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  // 각 카드의 상대적 위치 계산 (-2 ~ +2)
  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    // 순환 처리
    if (offset > filtered.length / 2) offset -= filtered.length;
    if (offset < -filtered.length / 2) offset += filtered.length;
    return offset;
  };

  return (
    <section id="projects" className={`${styles.section} ${styles.projects}`}>
      {/* Header */}
      <div className={styles.projects_header_row}>
        <div className={styles.projects_title_block}>
          <span className={styles.projects_section_label}>Works</span>
          <h2 className={styles.section_title}>Projects</h2>
        </div>
        <div className={styles.projects_tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.projects_tab} ${
                activeTab === tab.key ? styles.projects_tab_active : ""
              }`}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.label}
              <span className={styles.projects_tab_count}>{countOf(tab.key)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div
        className={styles.carousel_outer}
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
      >
        {/* 왼쪽 화살표 */}
        <button className={`${styles.carousel_arrow} ${styles.carousel_arrow_left}`} onClick={prev}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className={styles.carousel_wrap}>
        {/* 카드 트랙 */}
        <div className={styles.carousel_track}>
          {filtered.map((project, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            return (
              <div
                key={`${activeTab}-${project.id}`}
                className={styles.carousel_card}
                style={{
                  left: `${50 + offset * 57}%`,
                  transform: `translateX(-50%) translateY(-50%) scale(${isCenter ? 1 : 0.82})`,
                  opacity: isCenter ? 1 : 0.45,
                  zIndex: isCenter ? 10 : 5,
                  pointerEvents: isCenter ? "auto" : "none",
                }}
                onClick={() => isCenter && router.push(`/project/${project.id}`)}
              >
                <div className={styles.carousel_img_wrap}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.carousel_img}
                  />
                  {isCenter && (
                    <div className={styles.carousel_overlay}>
                      <div className={styles.carousel_overlay_inner}>
                        <div className={styles.carousel_tags}>
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className={styles.carousel_tag}>{tag}</span>
                          ))}
                        </div>
                        <p className={styles.carousel_desc}>{project.description}</p>
                        <span className={styles.carousel_cta}>
                          자세히 보기 <i className="fas fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.carousel_info}>
                  <h3 className={styles.carousel_title}>{project.title}</h3>
                  <span className={styles.carousel_date}>{project.date}</span>
                </div>
              </div>
            );
          })}
        </div>{/* carousel_track */}
        </div>{/* carousel_wrap */}

        {/* 오른쪽 화살표 */}
        <button className={`${styles.carousel_arrow} ${styles.carousel_arrow_right}`} onClick={next}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>{/* carousel_outer */}

      {/* 인디케이터 dots */}
      <div className={styles.carousel_dots}>
        {filtered.map((_, i) => (
          <button
            key={i}
            className={`${styles.carousel_dot} ${i === currentIndex ? styles.carousel_dot_active : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
