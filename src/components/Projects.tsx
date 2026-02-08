"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data/data";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll(".project_card").forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";
      element.style.transition = `opacity 0.6s ease ${
        index * 0.1
      }s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="section_title">Projects</h2>
      <div className="projects_grid">
        {projects.map((project, index) => (
          <div className="project_card" key={index} onClick={() => router.push(`/project/${project.id}`)} style={{ cursor: 'pointer' }}>
            <div className="project_img">
              <img
                src={
                  hoveredProject === index ? project.gifImage : project.image
                }
                alt={`${project.title} 프로젝트`}
                className="gif_preview"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              />
            </div>
            <div className="project_content">
              <div className="project_header">
                <h3>{project.title}</h3>
                <span className="project_date">{project.date}</span>
              </div>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <span className="tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project_links">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                )}
                {project.figma && project.figma !== "#" && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-figma"></i> Figma
                  </a>
                )}
                <Link
                  href={`/project/${project.id}`}
                  className="project_link detail_link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
