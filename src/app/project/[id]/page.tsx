"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projectDetails, projectIds, projects } from "@/data/data";
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

const pad2 = (n: number) => String(n).padStart(2, "0");

const hostOf = (url: string | undefined, fallback: string) => {
  if (!url || url === "#") return fallback;
  try {
    return new URL(url).hostname;
  } catch {
    return fallback;
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();

  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [prevProject, setPrevProject] = useState<{ id: string; title: string; num: string }>({ id: "", title: "", num: "" });
  const [nextProject, setNextProject] = useState<{ id: string; title: string; num: string }>({ id: "", title: "", num: "" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const progressRef = useRef<HTMLDivElement>(null);

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const listIndex = id ? projectIds.indexOf(id) : -1;
  const num = listIndex >= 0 ? pad2(listIndex + 1) : "00";
  const projMeta = projects.find((p) => p.id === id);

  // ── Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const scrolledY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width = `${(scrolledY / total) * 100}%`;
      }
      setScrolled(scrolledY > 60);
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
    if (!id || !projectDetails[id]) return;

    setProjectData(projectDetails[id]);
    setCurrentImageIndex(0);

    const idx = projectIds.indexOf(id);
    const prevIdx = idx > 0 ? idx - 1 : projectIds.length - 1;
    const nextIdx = idx < projectIds.length - 1 ? idx + 1 : 0;
    const prevId = projectIds[prevIdx];
    const nextId = projectIds[nextIdx];

    setPrevProject({ id: prevId, title: projectDetails[prevId].title, num: pad2(prevIdx + 1) });
    setNextProject({ id: nextId, title: projectDetails[nextId].title, num: pad2(nextIdx + 1) });
  }, [id]);

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

  const typeLabel = projMeta?.type === "personal" ? "개인" : "회사";
  const stackValue = projectData.technologies[0]?.items
    .slice(0, 3)
    .map((it) => it.name)
    .join(" · ");

  const SectionHead = ({ title }: { title: string }) => (
    <div className={styles.det_sec_head}>
      <span className={styles.det_sec_num}>{SECTION_NUMS[sectionIdx++]}</span>
      <div>
        <h2 className={styles.det_sec_title}>{title}</h2>
        <div className={styles.det_sec_rule} />
      </div>
    </div>
  );

  return (
    <div className={styles.det_root}>
      <div className={styles.det_scanlines} />
      <div className={styles.det_topglow} />

      {/* ── Progress track */}
      <div className={styles.progress_track}>
        <div className={styles.progress_bar} ref={progressRef} />
      </div>

      {/* ── Sticky terminal top bar */}
      <header
        className={`${styles.det_topbar} ${scrolled ? styles.det_topbar_scrolled : ""}`}
      >
        <div className={styles.det_topbar_left}>
          <span className={styles.det_mac_dot} style={{ background: "#ff5f56" }} />
          <span className={styles.det_mac_dot} style={{ background: "#ffbd2e" }} />
          <span className={styles.det_mac_dot} style={{ background: "#27c93f" }} />
          <span className={styles.det_topbar_title}>
            sanghun@portfolio — ~/projects/{projectData.title}
          </span>
        </div>
        <Link href="/#projects" className={styles.det_topbar_back}>
          <i className="fas fa-arrow-left"></i> 뒤로가기
        </Link>
      </header>

      <main className={styles.det_main}>
        {/* ════════════════════════════════════
            HERO
        ════════════════════════════════════ */}
        <section className={`${styles.det_section} ${styles.det_hero}`}>
          <button onClick={() => router.back()} className={styles.det_back}>
            <i className="fas fa-arrow-left"></i> 프로젝트 목록으로
          </button>

          <div className={styles.det_hero_meta}>
            <span className={styles.det_hero_num}>{num}</span>
            <span className={styles.det_hero_sep} />
            <span className={`${styles.det_pill} ${styles.det_pill_green}`}>
              {typeLabel}
            </span>
            {projectData.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className={styles.det_pill}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className={styles.det_h1}>{projectData.title}</h1>
          {projMeta?.description && (
            <p className={styles.det_lede}>{projMeta.description}</p>
          )}

          <div className={styles.det_btn_row}>
            {projectData.links.demo && projectData.links.demo !== "#" && (
              <a
                href={projectData.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.det_btn_primary}
              >
                <i className="fas fa-external-link-alt"></i> 사이트 방문
              </a>
            )}
            {projectData.links.github && projectData.links.github !== "#" && (
              <a
                href={projectData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.det_btn_ghost}
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {projectData.links.figma && (
              <a
                href={projectData.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.det_btn_ghost}
              >
                <i className="fab fa-figma"></i> Figma
              </a>
            )}
          </div>

          <div className={styles.det_meta_strip}>
            <div className={styles.det_meta}>
              <div className={styles.det_meta_label}>ROLE</div>
              <div className={styles.det_meta_value}>{projectData.role.type}</div>
            </div>
            <div className={styles.det_meta}>
              <div className={styles.det_meta_label}>PERIOD</div>
              <div className={styles.det_meta_value}>{projectData.period}</div>
            </div>
            <div className={styles.det_meta}>
              <div className={styles.det_meta_label}>TYPE</div>
              <div className={styles.det_meta_value}>{typeLabel} 프로젝트</div>
            </div>
            {stackValue && (
              <div className={styles.det_meta}>
                <div className={styles.det_meta_label}>STACK</div>
                <div className={styles.det_meta_value}>{stackValue}</div>
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════
            01 OVERVIEW
        ════════════════════════════════════ */}
        <section className={`${styles.det_section} ${styles.reveal}`}>
          <SectionHead title="Overview" />
          <div className={styles.det_prose}>
            {projectData.overview.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════
            BROWSER-FRAMED GALLERY
        ════════════════════════════════════ */}
        {projectData.images.length > 0 && (
          <section className={`${styles.det_section} ${styles.reveal}`}>
            <div className={styles.det_browser}>
              <div className={styles.det_browser_bar}>
                <span className={styles.det_mac_dot} style={{ background: "#ff5f56" }} />
                <span className={styles.det_mac_dot} style={{ background: "#ffbd2e" }} />
                <span className={styles.det_mac_dot} style={{ background: "#27c93f" }} />
                <span className={styles.det_browser_url}>
                  {hostOf(projectData.links.demo, projectData.title)}
                </span>
                {projectData.images.length > 1 && (
                  <span className={styles.det_gal_counter}>
                    {currentImageIndex + 1} / {projectData.images.length}
                  </span>
                )}
              </div>
              <div
                className={styles.det_shot}
                onClick={() => setLightboxImage(projectData.images[currentImageIndex])}
              >
                <Image
                  src={projectData.images[currentImageIndex]}
                  alt={`${projectData.title} 이미지 ${currentImageIndex + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.det_zoom_hint}>
                  <i className="fas fa-expand"></i> 클릭하여 확대
                </div>

                {projectData.images.length > 1 && (
                  <>
                    <button
                      className={`${styles.det_gal_arrow} ${styles.det_gal_arrow_left}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((p) => p === 0 ? projectData.images.length - 1 : p - 1);
                      }}
                      aria-label="이전 이미지"
                    >
                      ‹
                    </button>
                    <button
                      className={`${styles.det_gal_arrow} ${styles.det_gal_arrow_right}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((p) => p === projectData.images.length - 1 ? 0 : p + 1);
                      }}
                      aria-label="다음 이미지"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail strip */}
            {projectData.images.length > 1 && (
              <div className={styles.det_gal_strip}>
                {projectData.images.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.det_gal_thumb} ${
                      i === currentImageIndex ? styles.det_gal_thumb_active : ""
                    }`}
                    onClick={() => setCurrentImageIndex(i)}
                  >
                    <Image src={img} alt={`썸네일 ${i + 1}`} fill style={{ objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ════════════════════════════════════
            02 나의 역할
        ════════════════════════════════════ */}
        <section className={`${styles.det_section} ${styles.reveal}`}>
          <SectionHead title="나의 역할" />
          <div className={styles.det_role_badge}>
            <span className={styles.det_role_dot} />
            {projectData.role.type}
          </div>
          <div className={styles.det_role_grid}>
            {projectData.role.parts.map((part, i) => (
              <div key={i} className={styles.det_role_item}>
                <span className={styles.det_role_arrow}>▹</span>
                <span>{part}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════
            03 핵심 기능 (optional)
        ════════════════════════════════════ */}
        {projectData.keyFeatures && projectData.keyFeatures.length > 0 && (
          <section className={`${styles.det_section} ${styles.reveal}`}>
            <SectionHead title="핵심 기능" />

            {hasCategories && (
              <div className={styles.det_tab_group}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`${styles.det_tab} ${currentTab === cat ? styles.det_tab_on : ""}`}
                    onClick={() => setActiveTab(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            <div className={styles.det_feats_grid}>
              {displayedFeatures.map((feat, i) => (
                <div key={i} className={styles.det_feat}>
                  <span className={styles.det_feat_bgnum}>{pad2(i + 1)}</span>

                  {feat.gif && (
                    <div className={styles.det_feat_gif}>
                      <Image
                        src={feat.gif}
                        alt={feat.title}
                        width={600}
                        height={340}
                        style={{ objectFit: "cover", width: "100%", height: "auto" }}
                      />
                    </div>
                  )}

                  <div className={styles.det_feat_icon}>
                    <i className={feat.icon}></i>
                  </div>
                  <h3 className={styles.det_feat_title}>{feat.title}</h3>
                  <p className={styles.det_feat_desc}>{feat.description}</p>

                  {feat.link && (
                    <a
                      href={feat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.det_feat_link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      사이트 방문 <i className="fas fa-arrow-right"></i>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ════════════════════════════════════
            사용 기술
        ════════════════════════════════════ */}
        <section className={`${styles.det_section} ${styles.reveal}`}>
          <SectionHead title="사용 기술" />
          <div className={styles.det_tech_table}>
            {projectData.technologies.map((tech, i) => (
              <div key={i} className={styles.det_tech_row}>
                <span className={styles.det_tech_label}>{tech.category}</span>
                <div className={styles.det_tech_tags}>
                  {tech.items.map((item, j) => (
                    <span key={j} className={styles.det_tech_tag} title={item.description}>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════
            도전 과제 & 해결책
        ════════════════════════════════════ */}
        <section className={`${styles.det_section} ${styles.reveal}`}>
          <SectionHead title="도전 과제 & 해결책" />
          <div className={styles.det_chal_list}>
            {projectData.challenges.map((c, i) => (
              <div key={i} className={styles.det_chal}>
                <div className={styles.det_chal_head}>
                  <span className={styles.det_chal_tag}>C-{pad2(i + 1)}</span>
                  <span className={styles.det_chal_title}>{c.title}</span>
                </div>
                <div className={styles.det_chal_grid}>
                  <div className={styles.det_chal_problem}>
                    <div className={styles.det_chal_label_p}>
                      <span className={styles.det_chal_dot_p} />
                      문제
                    </div>
                    <p>{c.challenge}</p>
                  </div>
                  <div className={styles.det_chal_solution}>
                    <div className={styles.det_chal_label_s}>
                      <span className={styles.det_chal_dot_s} />
                      해결
                    </div>
                    <p>{c.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════
            METRICS (stats band, optional)
        ════════════════════════════════════ */}
        {projectData.metrics && projectData.metrics.length > 0 && (
          <section className={`${styles.det_section} ${styles.reveal}`}>
            <div className={styles.det_stats_band}>
              {projectData.metrics.map((m, i) => (
                <div key={i} className={styles.det_stat}>
                  <div
                    className={`${styles.det_stat_value} ${styles.metric_value_num}`}
                    data-target={m.value}
                  >
                    {m.value}
                  </div>
                  <div className={styles.det_stat_label}>{m.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ════════════════════════════════════
            결과 & 성과
        ════════════════════════════════════ */}
        <section className={`${styles.det_section} ${styles.reveal}`}>
          <SectionHead title="결과 & 성과" />
          <div className={styles.det_prose}>
            {projectData.outcome.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════
            PREV / NEXT PROJECT
        ════════════════════════════════════ */}
        <section className={`${styles.det_section} ${styles.reveal}`}>
          <div className={styles.det_next_grid}>
            <button
              className={styles.det_nextcard}
              onClick={() => router.push(`/project/${prevProject.id}`)}
            >
              <div className={styles.det_nextcard_body}>
                <div className={styles.det_next_label}>← PREV PROJECT</div>
                <div className={styles.det_next_titlerow}>
                  <span className={styles.det_next_num}>{prevProject.num}</span>
                  <span className={styles.det_next_title}>{prevProject.title}</span>
                </div>
              </div>
              <span className={`${styles.det_next_arrow} ${styles.det_next_arrow_left}`}>←</span>
            </button>

            <button
              className={styles.det_nextcard}
              onClick={() => router.push(`/project/${nextProject.id}`)}
            >
              <div className={styles.det_nextcard_body}>
                <div className={styles.det_next_label}>NEXT PROJECT →</div>
                <div className={styles.det_next_titlerow}>
                  <span className={styles.det_next_num}>{nextProject.num}</span>
                  <span className={styles.det_next_title}>{nextProject.title}</span>
                </div>
              </div>
              <span className={styles.det_next_arrow}>→</span>
            </button>
          </div>

          <div className={styles.det_endline}>
            <span className={styles.det_accent}>➜</span>{" "}
            <span className={styles.det_path}>~/projects/{projectData.title}</span>{" "}
            <span className={styles.det_cmd}>_</span>
            <span className={styles.det_cursor} />
          </div>
        </section>
      </main>

      {/* ── Detail footer */}
      <footer className={styles.det_footer}>
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
    </div>
  );
}
