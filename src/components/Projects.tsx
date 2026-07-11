"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/data";
import styles from "@/styles/main.module.css";

const SLIDE_DURATION = 5000; // 5s

const formatNumber = (n: number) => String(n).padStart(2, "0");

const slugOf = (url: string | undefined, fallback: string) => {
  if (!url) return fallback;
  try {
    return new URL(url).hostname;
  } catch {
    return fallback;
  }
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const isPaused = useRef(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  // 자동 슬라이드 + 진행 막대 (60fps tick)
  useEffect(() => {
    setProgress(0);
    let frameId: number;
    let lastTick = performance.now();
    let acc = 0;

    const tick = (now: number) => {
      const dt = now - lastTick;
      lastTick = now;
      if (!isPaused.current) {
        acc += (dt / SLIDE_DURATION) * 100;
        if (acc >= 100) {
          acc = 0;
          setProgress(0);
          setCurrentIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
        } else {
          setProgress(acc);
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
  }, [currentIndex]);

  const current = projects[currentIndex];
  if (!current) return null;

  return (
    <section id="projects" className={styles.term_proj}>
      <div className={styles.term_scanlines} />

      <div className={styles.term_proj_inner}>
        {/* title + filters */}
        <div className={styles.term_proj_head_row}>
          <div>
            <div className={styles.term_proj_label}>WORKS</div>
            <h2 className={styles.term_proj_h1}>Projects</h2>
            <div className={styles.term_proj_meta_row}>
              <div className={styles.term_proj_rule} />
              <span className={styles.term_proj_counter}>
                <span className={styles.term_proj_counter_now}>
                  {formatNumber(currentIndex + 1)}
                </span>{" "}
                / {formatNumber(projects.length)}
              </span>
            </div>
          </div>
        </div>

        {/* featured preview */}
        <div
          className={styles.term_proj_stage}
          onMouseEnter={() => {
            isPaused.current = true;
          }}
          onMouseLeave={() => {
            isPaused.current = false;
          }}
        >
          <div
            key={current.id}
            className={styles.term_proj_featured}
            onClick={() => router.push(`/project/${current.id}`)}
          >
            <div className={styles.term_proj_browserbar}>
              <span className={styles.term_proj_dot} style={{ background: "#ff5f56" }} />
              <span className={styles.term_proj_dot} style={{ background: "#ffbd2e" }} />
              <span className={styles.term_proj_dot} style={{ background: "#27c93f" }} />
              <span className={styles.term_proj_url}>
                {current.demo || current.github || current.title}
              </span>
            </div>
            <div className={styles.term_proj_shot}>
              <img
                src={current.image}
                alt={current.title}
                className={styles.term_proj_shot_img}
              />
              <div className={styles.term_proj_shot_overlay}>
                <span className={styles.term_proj_shot_cta}>
                  자세히 보기 →
                </span>
              </div>
              {/* progress bar */}
              <div className={styles.term_proj_progress}>
                <div
                  className={styles.term_proj_progress_fill}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <button
            aria-label="이전 프로젝트"
            className={`${styles.term_proj_arrow} ${styles.term_proj_arrow_left}`}
            onClick={prev}
          >
            ‹
          </button>
          <button
            aria-label="다음 프로젝트"
            className={`${styles.term_proj_arrow} ${styles.term_proj_arrow_right}`}
            onClick={next}
          >
            ›
          </button>
        </div>

        {/* title + date */}
        <div className={styles.term_proj_title_row}>
          <div className={styles.term_proj_title_left}>
            <span className={styles.term_proj_num}>
              {formatNumber(currentIndex + 1)}
            </span>
            <span className={styles.term_proj_title}>{current.title}</span>
          </div>
          <span className={styles.term_proj_date}>{current.date}</span>
        </div>
        <p className={styles.term_proj_desc}>{current.description}</p>

        {/* thumbnails */}
        <div className={styles.term_proj_thumbs} ref={thumbsRef}>
          {projects.map((p, i) => {
            const on = i === currentIndex;
            return (
              <button
                key={`thumb-${p.id}`}
                className={styles.term_proj_thumb}
                data-active={on}
                onClick={() => setCurrentIndex(i)}
              >
                <div
                  className={`${styles.term_proj_thumb_frame} ${
                    on ? styles.term_proj_thumb_frame_on : ""
                  }`}
                >
                  <div className={styles.term_proj_thumb_bar}>
                    <span className={styles.term_proj_thumb_dot} />
                    <span className={styles.term_proj_thumb_dot} />
                    <span className={styles.term_proj_thumb_dot} />
                  </div>
                  <div className={styles.term_proj_thumb_shot}>
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span
                      className={`${styles.term_proj_thumb_num} ${
                        on ? styles.term_proj_thumb_num_on : ""
                      }`}
                    >
                      {formatNumber(i + 1)}
                    </span>
                  </div>
                </div>
                <div className={styles.term_proj_thumb_label}>
                  <span
                    className={`${styles.term_proj_thumb_title} ${
                      on ? styles.term_proj_thumb_title_on : ""
                    }`}
                  >
                    {p.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className={styles.term_proj_endline}>
          <span className={styles.term_arrow}>➜</span>{" "}
          <span className={styles.term_path}>~/portfolio</span>{" "}
          <span className={styles.term_cmd}>
            open {slugOf(current.demo, current.title)}
          </span>
          <span className={styles.term_blink_cursor} style={{ marginLeft: 6 }} />
        </div>
      </div>
    </section>
  );
}
