"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projectDetails, projectIds } from "@/data/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./projectDetail.module.css";

interface ProjectData {
  title: string;
  period: string;
  tags: string[];
  mainImage: string;
  images: string[];
  overview: string[];
  role: { type: string; parts: string[] };
  links: { github: string; demo: string; figma?: string };
  goals: { icon: string; title: string; description: string }[];
  keyFeatures?: {
    icon: string;
    title: string;
    description: string;
    gif?: string;
    link?: string;
    category?: string;
  }[];
  metrics?: { value: string; label: string; icon: string }[];
  technologies: {
    category: string;
    items: { name: string; description: string }[];
  }[];
  challenges: { title: string; challenge: string; solution: string }[];
  outcome: string[];
}

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();

  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [prevProject, setPrevProject] = useState<{ id: string; title: string; image: string }>({ id: "", title: "", image: "" });
  const [nextProject, setNextProject] = useState<{ id: string; title: string; image: string }>({ id: "", title: "", image: "" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const progressRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // ── Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width = `${(scrolled / total) * 100}%`;
      }
      setScrolled(scrolled > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Scroll-reveal animations
  const setupReveal = useCallback(() => {
    const els = document.querySelectorAll(`.${styles.reveal}`);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add(styles.revealed);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return obs;
  }, []);

  // ── Animated metric counters
  const animateCounters = useCallback(() => {
    const counters = document.querySelectorAll<HTMLElement>(`.${styles.metric_value_num}`);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const raw = el.dataset.target || "0";
          // Strip thousand-separator commas before parsing (e.g. "6,608만원" → 6608)
          const numeric = raw.replace(/,/g, "");
          const target = parseFloat(numeric);

          // Skip animation if value is non-numeric (e.g. "첫 구축", "실서비스")
          if (Number.isNaN(target)) {
            el.textContent = raw;
            obs.unobserve(el);
            return;
          }

          // Suffix = anything after the leading number (Korean unit, etc.)
          const match = numeric.match(/^[0-9.]+(.*)$/);
          const suffix = match ? match[1] : "";
          // Detect if original had thousand-separator formatting
          const hasCommas = /\d,\d/.test(raw);
          const formatNum = (n: number) =>
            hasCommas ? n.toLocaleString("en-US") : String(n);

          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = formatNum(Math.round(target * ease)) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((c) => obs.observe(c));
    return obs;
  }, []);

  // ── ESC lightbox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxImage(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxImage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxImage]);

  // ── Load project data
  useEffect(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    if (!id || !projectDetails[id]) return;

    setProjectData(projectDetails[id]);
    setCurrentImageIndex(0);

    const idx = projectIds.indexOf(id);
    const prevId = projectIds[idx > 0 ? idx - 1 : projectIds.length - 1];
    const nextId = projectIds[idx < projectIds.length - 1 ? idx + 1 : 0];

    setPrevProject({
      id: prevId,
      title: projectDetails[prevId].title,
      image: projectDetails[prevId].mainImage,
    });
    setNextProject({
      id: nextId,
      title: projectDetails[nextId].title,
      image: projectDetails[nextId].mainImage,
    });
  }, [params.id]);

  // ── Scroll-reveal & counters: projectData가 렌더된 뒤에 실행
  useEffect(() => {
    if (!projectData) return;
    const revealObs = setupReveal();
    const counterObs = animateCounters();
    return () => {
      revealObs.disconnect();
      counterObs.disconnect();
    };
  }, [projectData, setupReveal, animateCounters]);

  if (!projectData) {
    return (
      <div className={styles.loading}>
        <div className={styles.loading_spinner}></div>
        <span>Loading...</span>
      </div>
    );
  }

  const SECTION_NUMS = ["01", "02", "03", "04", "05", "06", "07"];
  let sectionIdx = 0;

  const hasCategories = (projectData.keyFeatures ?? []).some((f) => f.category);
  const categories = hasCategories
    ? Array.from(new Set((projectData.keyFeatures ?? []).map((f) => f.category).filter(Boolean))) as string[]
    : [];
  const currentTab = activeTab || categories[0] || "";
  const displayedFeatures = hasCategories
    ? (projectData.keyFeatures ?? []).filter((f) => f.category === currentTab)
    : (projectData.keyFeatures ?? []);

  return (
    <>
      {/* ── Progress track */}
      <div className={styles.progress_track}>
        <div className={styles.progress_bar} ref={progressRef} />
      </div>

      {/* ── Sticky nav */}
      <header
        className={`${styles.detail_header} ${scrolled ? styles.header_scrolled : ""}`}
        ref={navRef}
      >
        <nav className={styles.nav_container}>
          <Link href="/#projects" className={styles.back_btn}>
            <i className="fas fa-arrow-left"></i>
            <span>프로젝트</span>
          </Link>
          <span className={styles.logo}>SangHun&apos;s WebPortfolio</span>
        </nav>
      </header>

      <main className={styles.project_detail}>

        {/* ════════════════════════════════════
            CINEMATIC HERO
        ════════════════════════════════════ */}
        <section
          className={styles.hero_cinematic}
          style={{ backgroundImage: `url(${projectData.mainImage})` }}
        >
          <div className={styles.hero_cin_overlay} />

          <div className={styles.hero_cin_content}>
            {/* Tags float above title */}
            <div className={styles.hero_tag_row}>
              {projectData.tags.map((tag, i) => (
                <span key={i} className={styles.hero_tag_pill}>{tag}</span>
              ))}
            </div>

            {/* Massive title */}
            <h1 className={styles.hero_cin_title}>{projectData.title}</h1>

            {/* Period + action links */}
            <div className={styles.hero_cin_bottom}>
              <span className={styles.hero_cin_period}>
                <i className="fas fa-calendar-alt"></i>
                {projectData.period}
              </span>
              <div className={styles.hero_action_row}>
                {projectData.links.github && projectData.links.github !== "#" && (
                  <a
                    href={projectData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.hero_btn_ghost}
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
                {projectData.links.demo && projectData.links.demo !== "#" && (
                  <a
                    href={projectData.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.hero_btn_solid}
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
                {projectData.links.figma && (
                  <a
                    href={projectData.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.hero_btn_ghost}
                  >
                    <i className="fab fa-figma"></i> Figma
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className={styles.hero_scroll_hint}>
            <span>Scroll</span>
            <i className="fas fa-long-arrow-alt-down"></i>
          </div>
        </section>

        {/* ════════════════════════════════════
            01 OVERVIEW
        ════════════════════════════════════ */}
        <section className={`${styles.detail_section} ${styles.reveal}`}>
          <div className={styles.section_num_deco}>{SECTION_NUMS[sectionIdx++]}</div>
          <div className={styles.section_inner}>
            <h2 className={styles.section_heading}>Overview</h2>
            <div className={styles.overview_body}>
              {projectData.overview.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            FULL-WIDTH IMAGE GALLERY
        ════════════════════════════════════ */}
        {projectData.images.length > 0 && (
          <section className={`${styles.gallery_section} ${styles.reveal}`}>
            {/* Main image */}
            <div
              className={styles.gallery_main_wrap}
              onClick={() => setLightboxImage(projectData.images[currentImageIndex])}
            >
              <div className={styles.gallery_main_img_box}>
                <Image
                  src={projectData.images[currentImageIndex]}
                  alt={`${projectData.title} 이미지 ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.gallery_main_img}
                />
                <div className={styles.gallery_zoom_hint}>
                  <i className="fas fa-expand"></i>
                  <span>클릭하여 확대</span>
                </div>
              </div>

              {/* Prev/Next arrows */}
              {projectData.images.length > 1 && (
                <>
                  <button
                    className={`${styles.gal_arrow} ${styles.gal_arrow_left}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((p) => p === 0 ? projectData.images.length - 1 : p - 1);
                    }}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    className={`${styles.gal_arrow} ${styles.gal_arrow_right}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((p) => p === projectData.images.length - 1 ? 0 : p + 1);
                    }}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  <div className={styles.gal_counter}>
                    {currentImageIndex + 1} <span>/</span> {projectData.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {projectData.images.length > 1 && (
              <div className={styles.gallery_strip}>
                {projectData.images.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.gal_thumb} ${i === currentImageIndex ? styles.gal_thumb_active : ""}`}
                    onClick={() => setCurrentImageIndex(i)}
                    style={{ position: "relative" }}
                  >
                    <Image src={img} alt={`썸네일 ${i + 1}`} fill style={{ objectFit: "cover" }} />
                    {i === currentImageIndex && <div className={styles.gal_thumb_indicator} />}
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ════════════════════════════════════
            02 나의 역할
        ════════════════════════════════════ */}
        <section className={`${styles.detail_section} ${styles.reveal}`}>
          <div className={styles.section_num_deco}>{SECTION_NUMS[sectionIdx++]}</div>
          <div className={styles.section_inner}>
            <h2 className={styles.section_heading}>나의 역할</h2>
            <div className={styles.role_layout}>
              <div className={styles.role_badge}>
                <i className="fas fa-user-cog"></i>
                <span>{projectData.role.type}</span>
              </div>
              <div className={styles.role_parts_grid}>
                {projectData.role.parts.map((part, i) => (
                  <div key={i} className={styles.role_chip}>
                    <span className={styles.role_chip_check}>✓</span>
                    {part}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            03 핵심 기능 (optional)
        ════════════════════════════════════ */}
        {projectData.keyFeatures && projectData.keyFeatures.length > 0 && (
          <section className={`${styles.detail_section} ${styles.reveal}`}>
            <div className={styles.section_num_deco}>{SECTION_NUMS[sectionIdx++]}</div>
            <div className={styles.section_inner}>
              <h2 className={styles.section_heading}>핵심 기능</h2>

              {hasCategories && (
                <div className={styles.tab_group}>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`${styles.tab_btn} ${currentTab === cat ? styles.tab_btn_active : ""}`}
                      onClick={() => setActiveTab(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              <div className={styles.features_grid}>
                {displayedFeatures.map((feat, i) => (
                  <div key={i} className={styles.feat_card}>
                    <div className={styles.feat_bg_num}>{String(i + 1).padStart(2, "0")}</div>

                    {feat.gif && (
                      <div className={styles.feat_gif_wrap}>
                        <Image
                          src={feat.gif}
                          alt={feat.title}
                          width={600}
                          height={340}
                          style={{ objectFit: "cover", width: "100%", height: "auto" }}
                        />
                      </div>
                    )}

                    <div className={styles.feat_icon_wrap}>
                      <i className={feat.icon}></i>
                    </div>
                    <h3 className={styles.feat_title}>{feat.title}</h3>
                    <p className={styles.feat_desc}>{feat.description}</p>

                    {feat.link && (
                      <a
                        href={feat.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.feat_link}
                        onClick={(e) => e.stopPropagation()}
                      >
                        사이트 방문 <i className="fas fa-arrow-right"></i>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════════════════════════════
            사용 기술
        ════════════════════════════════════ */}
        <section className={`${styles.detail_section} ${styles.reveal}`}>
          <div className={styles.section_num_deco}>{SECTION_NUMS[sectionIdx++]}</div>
          <div className={styles.section_inner}>
            <h2 className={styles.section_heading}>사용 기술</h2>
            <div className={styles.tech_layout}>
              {projectData.technologies.map((tech, i) => (
                <div key={i} className={styles.tech_group}>
                  <span className={styles.tech_cat_label}>{tech.category}</span>
                  <div className={styles.tech_pills}>
                    {tech.items.map((item, j) => (
                      <div key={j} className={styles.tech_pill} title={item.description}>
                        <span className={styles.tech_name}>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            도전 과제 & 해결책
        ════════════════════════════════════ */}
        <section className={`${styles.detail_section} ${styles.reveal}`}>
          <div className={styles.section_num_deco}>{SECTION_NUMS[sectionIdx++]}</div>
          <div className={styles.section_inner}>
            <h2 className={styles.section_heading}>도전 과제 & 해결책</h2>
            <div className={styles.challenges_list}>
              {projectData.challenges.map((c, i) => (
                <div key={i} className={styles.challenge_item}>
                  <div className={styles.challenge_num}>{String(i + 1).padStart(2, "0")}</div>
                  <div className={styles.challenge_body}>
                    <h3 className={styles.challenge_title}>{c.title}</h3>
                    <div className={styles.challenge_row}>
                      <div className={styles.challenge_block}>
                        <span className={styles.challenge_label}>
                          <i className="fas fa-exclamation-circle"></i> 문제
                        </span>
                        <p>{c.challenge}</p>
                      </div>
                      <div className={styles.solution_block}>
                        <span className={styles.solution_label}>
                          <i className="fas fa-lightbulb"></i> 해결
                        </span>
                        <p>{c.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            METRICS (full-width banner, optional)
        ════════════════════════════════════ */}
        {projectData.metrics && projectData.metrics.length > 0 && (
          <section className={`${styles.metrics_banner} ${styles.reveal}`}>
            <div className={styles.metrics_grid}>
              {projectData.metrics.map((m, i) => (
                <div key={i} className={styles.metric_item}>
                  <div className={styles.metric_icon_wrap}>
                    <i className={m.icon}></i>
                  </div>
                  <div
                    className={styles.metric_value_num}
                    data-target={m.value}
                  >
                    {m.value}
                  </div>
                  <div className={styles.metric_label}>{m.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ════════════════════════════════════
            결과 & 성과
        ════════════════════════════════════ */}
        <section className={`${styles.detail_section} ${styles.reveal}`}>
          <div className={styles.section_num_deco}>{SECTION_NUMS[sectionIdx++]}</div>
          <div className={styles.section_inner}>
            <h2 className={styles.section_heading}>결과 & 성과</h2>
            <div className={styles.outcome_body}>
              {projectData.outcome.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            PREV / NEXT PROJECT (cinematic cards)
        ════════════════════════════════════ */}
        <section className={`${styles.nav_projects_section} ${styles.reveal}`}>
          <p className={styles.nav_projects_label}>More Projects</p>
          <div className={styles.nav_projects_grid}>
            {/* Prev */}
            <div
              className={`${styles.nav_proj_card} ${styles.nav_proj_prev}`}
              onClick={() => router.push(`/project/${prevProject.id}`)}
              style={prevProject.image ? { backgroundImage: `url(${prevProject.image})` } : {}}
            >
              <div className={styles.nav_proj_overlay} />
              <div className={styles.nav_proj_content}>
                <span className={styles.nav_proj_hint}>
                  <i className="fas fa-arrow-left"></i> 이전
                </span>
                <h3 className={styles.nav_proj_title}>{prevProject.title}</h3>
              </div>
            </div>

            {/* Next */}
            <div
              className={`${styles.nav_proj_card} ${styles.nav_proj_next}`}
              onClick={() => router.push(`/project/${nextProject.id}`)}
              style={nextProject.image ? { backgroundImage: `url(${nextProject.image})` } : {}}
            >
              <div className={styles.nav_proj_overlay} />
              <div className={styles.nav_proj_content}>
                <span className={styles.nav_proj_hint}>
                  다음 <i className="fas fa-arrow-right"></i>
                </span>
                <h3 className={styles.nav_proj_title}>{nextProject.title}</h3>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Detail footer */}
      <footer className={styles.detail_footer}>
        <span>© 2026 박상훈 · Portfolio</span>
      </footer>

      {/* ════════════════════════════════════
          LIGHTBOX
      ════════════════════════════════════ */}
      {lightboxImage && (
        <div className={styles.lightbox_overlay} onClick={() => setLightboxImage(null)}>
          <button className={styles.lightbox_close} onClick={() => setLightboxImage(null)}>
            <i className="fas fa-times"></i>
          </button>

          {projectData.images.length > 1 && (
            <>
              <button
                className={`${styles.lightbox_arrow} ${styles.lightbox_arrow_left}`}
                onClick={(e) => {
                  e.stopPropagation();
                  const ni = currentImageIndex === 0 ? projectData.images.length - 1 : currentImageIndex - 1;
                  setCurrentImageIndex(ni);
                  setLightboxImage(projectData.images[ni]);
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className={`${styles.lightbox_arrow} ${styles.lightbox_arrow_right}`}
                onClick={(e) => {
                  e.stopPropagation();
                  const ni = currentImageIndex === projectData.images.length - 1 ? 0 : currentImageIndex + 1;
                  setCurrentImageIndex(ni);
                  setLightboxImage(projectData.images[ni]);
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}

          <div className={styles.lightbox_img_wrap} onClick={(e) => e.stopPropagation()}>
            <Image src={lightboxImage} alt="확대" fill style={{ objectFit: "contain" }} />
          </div>

          {projectData.images.length > 1 && (
            <div className={styles.lightbox_counter}>
              {currentImageIndex + 1} / {projectData.images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
