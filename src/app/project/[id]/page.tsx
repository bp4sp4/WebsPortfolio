"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { projectDetails, projectIds, footerInfo } from "@/data/data";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./projectDetail.module.css";

// 프로젝트 데이터 인터페이스 정의
interface ProjectData {
  title: string;
  period: string;
  tags: string[];
  mainImage: string;
  images: string[];
  overview: string[];
  role: {
    type: string;
    parts: string[];
  };
  links: {
    github: string;
    demo: string;
    figma?: string;
  };
  goals: {
    icon: string;
    title: string;
    description: string;
  }[];
  technologies: {
    category: string;
    items: {
      name: string;
      description: string;
    }[];
  }[];
  keyFeatures?: {
    icon: string;
    title: string;
    description: string;
    gif?: string;
    link?: string;
    category?: string;
  }[];
  metrics?: {
    value: string;
    label: string;
    icon: string;
  }[];
  challenges: {
    title: string;
    challenge: string;
    solution: string;
  }[];
  outcome: string[];
}

export default function ProjectDetail() {
  const params = useParams();
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [prevProject, setPrevProject] = useState<{ id: string; title: string }>(
    { id: "", title: "" }
  );
  const [nextProject, setNextProject] = useState<{ id: string; title: string }>(
    { id: "", title: "" }
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showGalleryArrows, setShowGalleryArrows] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const keyFeaturesRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const goalsRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const challengesRef = useRef<HTMLDivElement>(null);
  const outcomeRef = useRef<HTMLDivElement>(null);
  const moreProjectsRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);

  const setupAnimations = useCallback(() => {
    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const fadeElements = [
      overviewRef.current,
      roleRef.current,
      keyFeaturesRef.current,
      metricsRef.current,
      goalsRef.current,
      technologiesRef.current,
      challengesRef.current,
      outcomeRef.current,
      moreProjectsRef.current,
    ].filter(Boolean) as HTMLElement[];

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fade_in);
          fadeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      fadeObserver.observe(el);
    });

    // 페이지 로드 시 히어로 섹션 애니메이션
    const projectHero = heroRef.current;
    if (projectHero) {
      projectHero.style.opacity = "0";
      projectHero.style.transform = "translateY(30px)";
      projectHero.style.transition = "opacity 0.8s ease, transform 0.8s ease";

      setTimeout(() => {
        projectHero.style.opacity = "1";
        projectHero.style.transform = "translateY(0)";
      }, 300);
    }

    return fadeObserver;
  }, []);

  useEffect(() => {
    if (!params.id) return;

    // 현재 프로젝트 ID 가져오기
    const id = Array.isArray(params.id) ? params.id[0] : params.id;

    // 현재 프로젝트 데이터 설정
    if (id && projectDetails[id as string]) {
      setProjectData(projectDetails[id as string]);

      // 이전/다음 프로젝트 설정
      const currentIndex = projectIds.indexOf(id as string);

      // 이전 프로젝트 (첫 번째 프로젝트인 경우 마지막 프로젝트로)
      const prevIndex =
        currentIndex > 0 ? currentIndex - 1 : projectIds.length - 1;
      const prevId = projectIds[prevIndex];
      setPrevProject({
        id: prevId,
        title: projectDetails[prevId].title,
      });

      // 다음 프로젝트 (마지막 프로젝트인 경우 첫 번째 프로젝트로)
      const nextIndex =
        currentIndex < projectIds.length - 1 ? currentIndex + 1 : 0;
      const nextId = projectIds[nextIndex];
      setNextProject({
        id: nextId,
        title: projectDetails[nextId].title,
      });
    }

    // 커스텀 커서 효과 (smooth follow)
    const cursor = document.querySelector(".cursor") as HTMLElement;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      if (cursor) {
        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseDown = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(0.7)";
        cursor.style.borderColor = "#fd79a8";
      }
    };

    const handleMouseUp = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.borderColor = "#6c5ce7";
      }
    };

    const fadeObserver = setupAnimations();

    // 네비게이션 스크롤 이벤트 처리
    const handleScroll = () => {
      const nav = navContainerRef.current;
      if (window.scrollY > 50 && nav) {
        nav.classList.add("scrolled");
      } else if (nav) {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // ESC 키로 라이트박스 닫기
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // 클린업 함수
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(animationId);
      fadeObserver.disconnect();
    };
  }, [params.id, setupAnimations]);

  // 라이트박스 열릴 때 스크롤 방지
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

  // 프로젝트 데이터가 없는 경우 로딩 표시
  if (!projectData) {
    return <div className={styles.loading}>프로젝트 정보를 불러오는 중...</div>;
  }

  return (
    <>
      <header className={styles.detail_header}>
        <nav className={styles.nav_container} ref={navContainerRef}>
          <Link href="/#projects" className={styles.back_btn}>
            <i className="fas fa-arrow-left"></i>
            <span>돌아가기</span>
          </Link>
          <div className={styles.logo}>SangHun&apos;s Portfolio</div>
        </nav>
      </header>

      <main className={styles.project_detail}>
        <div className={styles.project_hero} ref={heroRef}>
          <div className={styles.project_title_container}>
            <h1 className={styles.project_title}>{projectData.title}</h1>
            <div className={styles.project_period}>{projectData.period}</div>
          </div>
          <div className={styles.project_tags}>
            {projectData.tags.map((tag: string, index: number) => (
              <span className={styles.project_tag} key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.project_overview} ref={overviewRef}>
          {projectData.mainImage && (
            <div className={styles.overview_gallery}>
              <div
                className={`${styles.overview_image} ${showGalleryArrows ? styles.overview_image_active : ""}`}
                style={{ position: "relative", width: "100%", height: "400px", cursor: "pointer" }}
                onClick={() => {
                  if (projectData.images.length > 1 && !showGalleryArrows) {
                    setShowGalleryArrows(true);
                  } else {
                    setShowGalleryArrows(false);
                    setLightboxImage(projectData.images[currentImageIndex] || projectData.mainImage);
                  }
                }}
              >
                <Image
                  src={projectData.images[currentImageIndex] || projectData.mainImage}
                  alt={`${projectData.title} 프로젝트 이미지 ${currentImageIndex + 1}`}
                  className={styles.main_project_image}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.image_hover_overlay}>
                  <i className="fas fa-search-plus"></i>
                </div>
                {projectData.images.length > 1 && showGalleryArrows && (
                  <>
                    <button
                      className={`${styles.gallery_arrow} ${styles.gallery_arrow_left}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? projectData.images.length - 1 : prev - 1
                        );
                      }}
                      aria-label="이전 이미지"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                      className={`${styles.gallery_arrow} ${styles.gallery_arrow_right}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) =>
                          prev === projectData.images.length - 1 ? 0 : prev + 1
                        );
                      }}
                      aria-label="다음 이미지"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    <div className={styles.gallery_counter}>
                      {currentImageIndex + 1} / {projectData.images.length}
                    </div>
                  </>
                )}
              </div>
              {projectData.images.length > 1 && (
                <div className={styles.gallery_thumbnails}>
                  {projectData.images.map((img, index) => (
                    <button
                      key={index}
                      className={`${styles.gallery_thumb} ${index === currentImageIndex ? styles.gallery_thumb_active : ""}`}
                      onClick={() => setCurrentImageIndex(index)}
                      onDoubleClick={() => setLightboxImage(img)}
                      style={{ position: "relative", width: "100%", height: "80px" }}
                    >
                      <Image
                        src={img}
                        alt={`썸네일 ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          <div className={styles.overview_content}>
            <h2 className={styles.section_heading}>Overview</h2>
            {projectData.overview.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className={styles.project_links}>
              {projectData.links.github && projectData.links.github !== "#" && (
                <a
                  href={projectData.links.github}
                  target="_blank"
                  className={`${styles.btn} ${styles.btn_github}`}
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              )}
              {projectData.links.demo && projectData.links.demo !== "#" && (
                <a
                  href={projectData.links.demo}
                  target="_blank"
                  className={`${styles.btn} ${styles.btn_demo}`}
                >
                  <i className="fas fa-external-link-alt"></i> 데모 사이트
                </a>
              )}
              {projectData.links && projectData.links.figma && (
                <a
                  href={projectData.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${styles.btn_figma}`}
                >
                  <i className="fab fa-figma"></i> Figma 디자인
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={styles.project_role} ref={roleRef}>
          <h2 className={styles.section_heading}>나의 역할</h2>
          <div className={styles.role_container}>
            <div className={styles.role_type}>
              <i className="fas fa-user-tag"></i>
              <span>{projectData.role.type}</span>
            </div>
            <div className={styles.role_parts}>
              {projectData.role.parts.map((part, index: number) => (
                <div className={styles.role_part_item} key={index}>
                  <i className="fas fa-check"></i>
                  <span>{part}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {projectData.keyFeatures && projectData.keyFeatures.length > 0 && (() => {
          const hasCategories = projectData.keyFeatures!.some((f) => f.category);
          const categories = hasCategories
            ? Array.from(new Set(projectData.keyFeatures!.map((f) => f.category).filter(Boolean))) as string[]
            : [];
          const currentTab = activeTab || categories[0] || "";
          const displayedFeatures = hasCategories
            ? projectData.keyFeatures!.filter((f) => f.category === currentTab)
            : projectData.keyFeatures!;

          return (
            <div className={styles.project_key_features} ref={keyFeaturesRef}>
              <h2 className={styles.section_heading}>핵심 기능</h2>
              {hasCategories && (
                <div className={styles.tab_group}>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`${styles.tab_button} ${currentTab === cat ? styles.tab_button_active : ""}`}
                      onClick={() => setActiveTab(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
              <div className={styles.key_features_container}>
                {displayedFeatures.map((feature, index: number) => (
                  <div className={styles.key_feature_item} key={index}>
                    <div className={styles.key_feature_number}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    {feature.gif && (
                      <div className={styles.key_feature_gif}>
                        <Image
                          src={feature.gif}
                          alt={`${feature.title} 시연`}
                          width={600}
                          height={340}
                          style={{ objectFit: "cover", width: "100%", height: "auto" }}
                        />
                      </div>
                    )}
                    <div className={styles.key_feature_icon}>
                      <i className={feature.icon}></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    {feature.link && (
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.key_feature_link}
                        onClick={(e) => e.stopPropagation()}
                      >
                        사이트 방문 <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        {projectData.metrics && projectData.metrics.length > 0 && (
          <div className={styles.project_metrics} ref={metricsRef}>
            <h2 className={styles.section_heading}>숫자로 보는 성과</h2>
            <div className={styles.metrics_container}>
              {projectData.metrics.map((metric, index: number) => (
                <div className={styles.metric_item} key={index}>
                  <div className={styles.metric_icon}>
                    <i className={metric.icon}></i>
                  </div>
                  <div className={styles.metric_value}>{metric.value}</div>
                  <div className={styles.metric_label}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.project_goals} ref={goalsRef}>
          <h2 className={styles.section_heading}>프로젝트 목표</h2>
          <div className={styles.goals_container}>
            {projectData.goals.map((goal, index: number) => (
              <div className={styles.goal_item} key={index}>
                <div className={styles.goal_icon}>
                  <i className={goal.icon}></i>
                </div>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.project_technologies} ref={technologiesRef}>
          <h2 className={styles.section_heading}>사용 기술</h2>
          <div className={styles.technologies_container}>
            {projectData.technologies.map((tech, index: number) => (
              <div className={styles.tech_category} key={index}>
                <h3>{tech.category}</h3>
                <ul className={styles.tech_list}>
                  {tech.items.map((item, itemIndex: number) => (
                    <li key={itemIndex}>
                      <span className={styles.tech_name}>{item.name}</span> -{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.project_challenges} ref={challengesRef}>
          <h2 className={styles.section_heading}>도전 과제 및 해결책</h2>
          <div className={styles.challenges_container}>
            {projectData.challenges.map((challenge, index: number) => (
              <div className={styles.challenge_item} key={index}>
                <h3>{challenge.title}</h3>
                <p>
                  <strong>도전 : </strong> {challenge.challenge}
                </p>
                <p>
                  <strong>해결책 : </strong> {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.project_outcome} ref={outcomeRef}>
          <h2 className={styles.section_heading}>결과 및 성과</h2>
          <div className={styles.outcome_content}>
            {projectData.outcome.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.more_projects} ref={moreProjectsRef}>
          <h2 className={styles.section_heading}>다른 프로젝트</h2>
          <div className={styles.projects_navigation}>
            <div className={`${styles.project_nav} ${styles.prev_project}`}>
              <Link href={`/project/${prevProject.id}`}>
                <i className="fas fa-arrow-left"></i>
                <div className={styles.nav_project_info}>
                  <span className={styles.nav_label}>이전 프로젝트</span>
                  <span className={styles.nav_title}>{prevProject.title}</span>
                </div>
              </Link>
            </div>
            <div className={`${styles.project_nav} ${styles.next_project}`}>
              <Link href={`/project/${nextProject.id}`}>
                <div className={styles.nav_project_info}>
                  <span className={styles.nav_label}>다음 프로젝트</span>
                  <span className={styles.nav_title}>{nextProject.title}</span>
                </div>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer_bottom}>
          <div className={styles.footer_copyright}>{footerInfo.copyright}</div>
          <div className={styles.footer_credit}>{footerInfo.credit}</div>
        </div>
      </footer>

      {lightboxImage && (
        <div
          className={styles.lightbox_overlay}
          onClick={() => setLightboxImage(null)}
        >
          <button
            className={styles.lightbox_close}
            onClick={() => setLightboxImage(null)}
          >
            <i className="fas fa-times"></i>
          </button>
          {projectData.images.length > 1 && (
            <>
              <button
                className={`${styles.lightbox_arrow} ${styles.lightbox_arrow_left}`}
                onClick={(e) => {
                  e.stopPropagation();
                  const newIndex = currentImageIndex === 0 ? projectData.images.length - 1 : currentImageIndex - 1;
                  setCurrentImageIndex(newIndex);
                  setLightboxImage(projectData.images[newIndex]);
                }}
                aria-label="이전 이미지"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className={`${styles.lightbox_arrow} ${styles.lightbox_arrow_right}`}
                onClick={(e) => {
                  e.stopPropagation();
                  const newIndex = currentImageIndex === projectData.images.length - 1 ? 0 : currentImageIndex + 1;
                  setCurrentImageIndex(newIndex);
                  setLightboxImage(projectData.images[newIndex]);
                }}
                aria-label="다음 이미지"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
          <div
            className={styles.lightbox_content}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="확대 이미지"
              fill
              style={{ objectFit: "contain" }}
            />
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
