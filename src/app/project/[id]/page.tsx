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
  overview: string[];
  links: {
    github: string;
    demo: string;
  };
  goals: {
    icon: string;
    title: string;
    description: string;
  }[];
  screenshots: string[];
  technologies: {
    category: string;
    items: {
      name: string;
      description: string;
    }[];
  }[];
  challenges: {
    title: string;
    challenge: string;
    solution: string;
  }[];
  outcome: string[];
}

// 링크 정보 인터페이스
interface LinkInfo {
  url: string;
  icon: string;
  text: string;
}

export default function ProjectDetail() {
  const params = useParams();
  const [projectId, setProjectId] = useState<string>("");
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [prevProject, setPrevProject] = useState<{ id: string; title: string }>(
    { id: "", title: "" }
  );
  const [nextProject, setNextProject] = useState<{ id: string; title: string }>(
    { id: "", title: "" }
  );

  useEffect(() => {
    // 현재 프로젝트 ID 가져오기
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    setProjectId(id as string);

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

    // 커스텀 커서 효과
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        (cursor as HTMLElement).style.left = e.clientX + "px";
        (cursor as HTMLElement).style.top = e.clientY + "px";
      }
    };

    const handleMouseDown = () => {
      if (cursor) {
        (cursor as HTMLElement).style.transform =
          "translate(-50%, -50%) scale(0.7)";
      }
    };

    const handleMouseUp = () => {
      if (cursor) {
        (cursor as HTMLElement).style.transform =
          "translate(-50%, -50%) scale(1)";
      }
    };

    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const fadeElements = document.querySelectorAll(
      ".project-overview, .project-goals, .project-screenshots, .project-technologies, .project-challenges, .project-outcome, .more-projects"
    );

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
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
    const projectHero = document.querySelector(".project-hero");
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

    // 스크린샷 이미지 확대 모달 기능
    const setupScreenshotModal = () => {
      const screenshots = document.querySelectorAll(".screenshot img");
      const body = document.body;

      screenshots.forEach((img) => {
        img.addEventListener("click", () => {
          // 모달 생성
          const modal = document.createElement("div");
          modal.className = "image-modal";

          // 닫기 버튼
          const closeBtn = document.createElement("span");
          closeBtn.className = "close-modal";
          closeBtn.innerHTML = "&times;";

          // 확대된 이미지
          const modalImg = document.createElement("img");
          modalImg.src = (img as HTMLImageElement).src;

          // 모달에 요소 추가
          modal.appendChild(closeBtn);
          modal.appendChild(modalImg);
          body.appendChild(modal);

          // 모달 스타일 추가
          const style = document.createElement("style");
          style.textContent = `
            .image-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            .image-modal.show {
                opacity: 1;
            }
            .image-modal img {
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            .close-modal {
                position: absolute;
                top: 20px;
                right: 30px;
                color: white;
                font-size: 40px;
                font-weight: bold;
                cursor: pointer;
                transition: color 0.3s ease;
            }
            .close-modal:hover {
                color: var(--primary);
            }
          `;
          document.head.appendChild(style);

          // 모달 표시 애니메이션
          setTimeout(() => {
            modal.classList.add("show");
          }, 10);

          // 닫기 버튼 이벤트
          closeBtn.addEventListener("click", () => {
            modal.classList.remove("show");
            setTimeout(() => {
              body.removeChild(modal);
              document.head.removeChild(style);
            }, 300);
          });

          // 모달 영역 클릭 시 닫기
          modal.addEventListener("click", (e) => {
            if (e.target === modal) {
              modal.classList.remove("show");
              setTimeout(() => {
                body.removeChild(modal);
                document.head.removeChild(style);
              }, 300);
            }
          });

          // ESC 키 누를 때 닫기
          const closeOnEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
              modal.classList.remove("show");
              setTimeout(() => {
                body.removeChild(modal);
                document.head.removeChild(style);
                document.removeEventListener("keydown", closeOnEsc);
              }, 300);
            }
          };

          document.addEventListener("keydown", closeOnEsc);
        });
      });
    };

    // 스크린샷 모달 설정
    setTimeout(setupScreenshotModal, 1000);

    // 네비게이션 스크롤 이벤트 처리
    const handleScroll = () => {
      const nav = document.querySelector(".nav-container");
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
      fadeObserver.disconnect();
    };
  }, [params]);

  // 프로젝트 데이터가 없는 경우 로딩 표시
  if (!projectData) {
    return <div className="loading">프로젝트 정보를 불러오는 중...</div>;
  }

  return (
    <>
      <header className="detail-header">
        <nav className="nav-container">
          <Link href="/#projects" className="back-btn">
            <i className="fas fa-arrow-left"></i>
            <span>돌아가기</span>
          </Link>
          <div className="logo">SangHun&apos;s Portfolio</div>
        </nav>
      </header>

      <main className="project-detail">
        <div className="project-hero">
          <div className="project-title-container">
            <h1 className="project-title">{projectData.title}</h1>
            <div className="project-period">{projectData.period}</div>
          </div>
          <div className="project-tags">
            {projectData.tags.map((tag: string, index: number) => (
              <span className="project-tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="project-overview">
          <div className="overview-image">
            <Image
              src={projectData.mainImage}
              alt={`${projectData.title} 프로젝트 이미지`}
              className="main-project-image"
            />
          </div>
          <div className="overview-content">
            <h2 className="section-heading">Overview</h2>
            {projectData.overview.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="project-links">
              <a
                href={projectData.links.github}
                target="_blank"
                className="btn"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href={projectData.links.demo} className="btn">
                <i className="fas fa-external-link-alt"></i> 데모 사이트
              </a>
            </div>
          </div>
        </div>

        <div className="project-goals">
          <h2 className="section-heading">프로젝트 목표</h2>
          <div className="goals-container">
            {projectData.goals.map((goal, index: number) => (
              <div className="goal-item" key={index}>
                <div className="goal-icon">
                  <i className={goal.icon}></i>
                </div>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-screenshots">
          <h2 className="section-heading">스크린샷</h2>
          <div className="screenshots-container">
            {projectData.screenshots.map(
              (screenshot: string, index: number) => (
                <div className="screenshot" key={index}>
                  <Image
                    src={screenshot}
                    alt={`${projectData.title} 스크린샷 ${index + 1}`}
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="project-technologies">
          <h2 className="section-heading">사용 기술</h2>
          <div className="technologies-container">
            {projectData.technologies.map((tech, index: number) => (
              <div className="tech-category" key={index}>
                <h3>{tech.category}</h3>
                <ul className="tech-list">
                  {tech.items.map((item, itemIndex: number) => (
                    <li key={itemIndex}>
                      <span className="tech-name">{item.name}</span> -{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="project-challenges">
          <h2 className="section-heading">도전 과제 및 해결책</h2>
          <div className="challenges-container">
            {projectData.challenges.map((challenge, index: number) => (
              <div className="challenge-item" key={index}>
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

        <div className="project-outcome">
          <h2 className="section-heading">결과 및 성과</h2>
          <div className="outcome-content">
            {projectData.outcome.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="more-projects">
          <h2 className="section-heading">다른 프로젝트</h2>
          <div className="projects-navigation">
            <div className="project-nav prev-project">
              <Link href={`/project/${prevProject.id}`}>
                <i className="fas fa-arrow-left"></i>
                <div className="nav-project-info">
                  <span className="nav-label">이전 프로젝트</span>
                  <span className="nav-title">{prevProject.title}</span>
                </div>
              </Link>
            </div>
            <div className="project-nav next-project">
              <Link href={`/project/${nextProject.id}`}>
                <div className="nav-project-info">
                  <span className="nav-label">다음 프로젝트</span>
                  <span className="nav-title">{nextProject.title}</span>
                </div>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-question">{footerInfo.question}</div>
        <div className="footer-email">{footerInfo.email}</div>

        <div className="footer-brand">
          <h2 className="footer-title">
            {footerInfo.brand}
            <span className="footer-comma">,</span>
          </h2>
        </div>

        <div className="footer-links">
          {footerInfo.links.map((link: LinkInfo, index: number) => (
            <a
              href={link.url}
              target="_blank"
              className="footer-link"
              key={index}
            >
              <i className={link.icon}></i>
              <span>{link.text}</span>
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">{footerInfo.copyright}</div>
          <div className="footer-credit">{footerInfo.credit}</div>
        </div>
      </footer>
    </>
  );
}
