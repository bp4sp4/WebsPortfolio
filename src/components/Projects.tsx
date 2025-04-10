"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/data";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animated class and make element visible
          entry.target.classList.add("animated");

          // Explicitly set styles when visible
          const element = entry.target as HTMLElement;
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".project-card").forEach((el) => {
      // Type assertion to HTMLElement
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(50px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img
                src={
                  hoveredProject === index ? project.gifImage : project.image
                }
                alt={`${project.title} 프로젝트`}
                className="gif-preview"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <span className="tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Demo Site <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
                <Link
                  href={`/project/${project.id}`}
                  className="project-link detail-link"
                >
                  자세히 보기 <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animated {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
