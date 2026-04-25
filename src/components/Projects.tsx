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

const SLIDE_DURATION = 5000; // 5s

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const isPaused = useRef(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const filtered = projects.filter(
    (p) => activeTab === "all" || p.type === activeTab
  );

  const countOf = (tab: TabType) =>
    tab === "all"
      ? projects.length
      : projects.filter((p) => p.type === tab).length;

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));

  // 자동 슬라이드 + 진행 막대 (60fps tick)
  useEffect(() => {
    setProgress(0);
    let frameId: number;
    let lastTick = performance.now();

    const tick = (now: number) => {
      const dt = now - lastTick;
      lastTick = now;
      if (!isPaused.current) {
        setProgress((p) => {
          const next = p + (dt / SLIDE_DURATION) * 100;
          if (next >= 100) {
            setCurrentIndex((i) =>
              i === filtered.length - 1 ? 0 : i + 1
            );
            return 0;
          }
          return next;
        });
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [filtered.length, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filtered.length]);

  // Auto-scroll active thumbnail into view (horizontal only, never affects page scroll)
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const active = container.querySelector<HTMLElement>(`[data-active="true"]`);
    if (!active) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const targetScrollLeft =
      container.scrollLeft +
      (activeRect.left - containerRect.left) -
      containerRect.width / 2 +
      activeRect.width / 2;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: "smooth",
    });
  }, [currentIndex, activeTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const formatNumber = (n: number) => String(n).padStart(2, "0");
  const current = filtered[currentIndex];

  return (
    <section id="projects" className={`${styles.section} ${styles.projects}`}>
      {/* Decorative background */}
      <div className={styles.projects_bg_glow_1}></div>
      <div className={styles.projects_bg_glow_2}></div>

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
              <span className={styles.projects_tab_count}>
                {countOf(tab.key)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className={styles.projects_counter}>
        <span className={styles.projects_counter_current}>
          {formatNumber(currentIndex + 1)}
        </span>
        <span className={styles.projects_counter_divider}></span>
        <span className={styles.projects_counter_total}>
          {formatNumber(filtered.length)}
        </span>
      </div>

      {/* Single Card Stage */}
      <div
        className={styles.stage_outer}
        onMouseEnter={() => {
          isPaused.current = true;
        }}
        onMouseLeave={() => {
          isPaused.current = false;
        }}
      >
        <button
          className={`${styles.stage_arrow} ${styles.stage_arrow_left}`}
          onClick={prev}
          aria-label="이전 프로젝트"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div
          className={styles.stage_card}
          key={`${activeTab}-${current.id}`}
          onClick={() => router.push(`/project/${current.id}`)}
        >
          <div className={styles.stage_img_wrap}>
            <span
              className={`${styles.carousel_type_badge} ${
                current.type === "company"
                  ? styles.carousel_type_company
                  : styles.carousel_type_personal
              }`}
            >
              <i
                className={
                  current.type === "company"
                    ? "fas fa-building"
                    : "fas fa-user"
                }
              ></i>
              {current.type === "company" ? "회사" : "개인"}
            </span>
            <img
              src={current.image}
              alt={current.title}
              className={styles.stage_img}
            />
            <div className={styles.stage_overlay}>
              <div className={styles.stage_overlay_inner}>
                <div className={styles.carousel_tags}>
                  {current.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className={styles.carousel_tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={styles.stage_desc}>{current.description}</p>
                <span className={styles.carousel_cta}>
                  자세히 보기 <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className={styles.stage_progress}>
              <div
                className={styles.stage_progress_fill}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className={styles.stage_info}>
            <h3 className={styles.stage_title}>{current.title}</h3>
            <span className={styles.stage_date}>{current.date}</span>
          </div>
        </div>

        <button
          className={`${styles.stage_arrow} ${styles.stage_arrow_right}`}
          onClick={next}
          aria-label="다음 프로젝트"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className={styles.thumbs_wrap} ref={thumbsRef}>
        {filtered.map((project, i) => (
          <button
            key={`${activeTab}-thumb-${project.id}`}
            className={`${styles.thumb} ${
              i === currentIndex ? styles.thumb_active : ""
            }`}
            data-active={i === currentIndex}
            onClick={() => setCurrentIndex(i)}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.thumb_img}
            />
            <div className={styles.thumb_label}>
              <span className={styles.thumb_num}>
                {formatNumber(i + 1)}
              </span>
              <span className={styles.thumb_title}>{project.title}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
