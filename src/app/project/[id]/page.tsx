"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projectDetails, projectIds, footerInfo } from "@/data/data";
import { useParams } from "next/navigation";
import Image from "next/image";

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

    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const fadeElements = document.querySelectorAll(
      ".project_overview, .project_role, .project_key_features, .project_goals, .project_technologies, .project_challenges, .project_outcome, .more_projects"
    );

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade_in");
          fadeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      (el as HTMLElement).style.transition =
        "opacity 0.6s ease, transform 0.6s ease";
      fadeObserver.observe(el);
    });

    // 페이지 로드 시 히어로 섹션 애니메이션
    const projectHero = document.querySelector(".project_hero");
    if (projectHero) {
      (projectHero as HTMLElement).style.opacity = "0";
      (projectHero as HTMLElement).style.transform = "translateY(30px)";
      (projectHero as HTMLElement).style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

      setTimeout(() => {
        (projectHero as HTMLElement).style.opacity = "1";
        (projectHero as HTMLElement).style.transform = "translateY(0)";
      }, 300);
    }

    // 네비게이션 스크롤 이벤트 처리
    const handleScroll = () => {
      const nav = document.querySelector(".nav_container");
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

    // 클린업 함수
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationId);
      fadeObserver.disconnect();
    };
  }, [params.id]);

  // 프로젝트 데이터가 없는 경우 로딩 표시
  if (!projectData) {
    return <div className="loading">프로젝트 정보를 불러오는 중...</div>;
  }

  return (
    <>
      <header className="detail_header">
        <nav className="nav_container">
          <Link href="/#projects" className="back_btn">
            <i className="fas fa-arrow-left"></i>
            <span>돌아가기</span>
          </Link>
          <div className="logo">SangHun&apos;s Portfolio</div>
        </nav>
      </header>

      <main className="project_detail">
        <div className="project_hero">
          <div className="project_title_container">
            <h1 className="project_title">{projectData.title}</h1>
            <div className="project_period">{projectData.period}</div>
          </div>
          <div className="project_tags">
            {projectData.tags.map((tag: string, index: number) => (
              <span className="project_tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="project_overview">
          <div className="overview_gallery">
            <div
              className="overview_image"
              style={{ position: "relative", width: "100%", height: "400px" }}
            >
              <Image
                src={projectData.images[currentImageIndex] || projectData.mainImage}
                alt={`${projectData.title} 프로젝트 이미지 ${currentImageIndex + 1}`}
                className="main_project_image"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {projectData.images.length > 1 && (
              <div className="gallery_thumbnails">
                {projectData.images.map((img, index) => (
                  <button
                    key={index}
                    className={`gallery_thumb ${index === currentImageIndex ? "active" : ""}`}
                    onClick={() => setCurrentImageIndex(index)}
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
          <div className="overview_content">
            <h2 className="section_heading">Overview</h2>
            {projectData.overview.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="project_links">
              <a
                href={projectData.links.github}
                target="_blank"
                className="btn"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href={projectData.links.demo} target="_blank" className="btn">
                <i className="fas fa-external-link-alt"></i> 데모 사이트
              </a>
              {projectData.links && projectData.links.figma && (
                <a
                  href={projectData.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <i className="fab fa-figma"></i> Figma 디자인
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="project_role">
          <h2 className="section_heading">나의 역할</h2>
          <div className="role_container">
            <div className="role_type">
              <i className="fas fa-user-tag"></i>
              <span>{projectData.role.type}</span>
            </div>
            <div className="role_parts">
              {projectData.role.parts.map((part, index: number) => (
                <div className="role_part_item" key={index}>
                  <i className="fas fa-check"></i>
                  <span>{part}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {projectData.keyFeatures && projectData.keyFeatures.length > 0 && (
          <div className="project_key_features">
            <h2 className="section_heading">핵심 기능</h2>
            <div className="key_features_container">
              {projectData.keyFeatures.map((feature, index: number) => (
                <div className="key_feature_item" key={index}>
                  <div className="key_feature_number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {feature.gif && (
                    <div className="key_feature_gif">
                      <Image
                        src={feature.gif}
                        alt={`${feature.title} 시연`}
                        width={600}
                        height={340}
                        style={{ objectFit: "cover", width: "100%", height: "auto" }}
                      />
                    </div>
                  )}
                  <div className="key_feature_icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="project_goals">
          <h2 className="section_heading">프로젝트 목표</h2>
          <div className="goals_container">
            {projectData.goals.map((goal, index: number) => (
              <div className="goal_item" key={index}>
                <div className="goal_icon">
                  <i className={goal.icon}></i>
                </div>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="project_technologies">
          <h2 className="section_heading">사용 기술</h2>
          <div className="technologies_container">
            {projectData.technologies.map((tech, index: number) => (
              <div className="tech_category" key={index}>
                <h3>{tech.category}</h3>
                <ul className="tech_list">
                  {tech.items.map((item, itemIndex: number) => (
                    <li key={itemIndex}>
                      <span className="tech_name">{item.name}</span> -{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="project_challenges">
          <h2 className="section_heading">도전 과제 및 해결책</h2>
          <div className="challenges_container">
            {projectData.challenges.map((challenge, index: number) => (
              <div className="challenge_item" key={index}>
                <h3>{challenge.title}</h3>
                <p>
                  <strong>도전:</strong> {challenge.challenge}
                </p>
                <p>
                  <strong>해결책:</strong> {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="project_outcome">
          <h2 className="section_heading">결과 및 성과</h2>
          <div className="outcome_content">
            {projectData.outcome.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="more_projects">
          <h2 className="section_heading">다른 프로젝트</h2>
          <div className="projects_navigation">
            <div className="project_nav prev_project">
              <Link href={`/project/${prevProject.id}`}>
                <i className="fas fa-arrow-left"></i>
                <div className="nav_project_info">
                  <span className="nav_label">이전 프로젝트</span>
                  <span className="nav_title">{prevProject.title}</span>
                </div>
              </Link>
            </div>
            <div className="project_nav next_project">
              <Link href={`/project/${nextProject.id}`}>
                <div className="nav_project_info">
                  <span className="nav_label">다음 프로젝트</span>
                  <span className="nav_title">{nextProject.title}</span>
                </div>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer_bottom">
          <div className="footer_copyright">{footerInfo.copyright}</div>
          <div className="footer_credit">{footerInfo.credit}</div>
        </div>
      </footer>
    </>
  );
}
