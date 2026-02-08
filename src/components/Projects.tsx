"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data/data";
import styles from "@/styles/main.module.css";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const router = useRouter();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    cardsRef.current.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={`${styles.section} ${styles.projects}`}>
      <h2 className={styles.section_title}>Projects</h2>
      <div className={styles.projects_grid}>
        {projects.map((project, index) => (
          <div
            className={styles.projects_card}
            key={index}
            ref={(el) => { cardsRef.current[index] = el; }}
            onClick={() => router.push(`/project/${project.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.projects_img}>
              <img
                src={hoveredProject === index ? project.gifImage : project.image}
                alt={`${project.title} 프로젝트`}
                className={styles.projects_gif}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              />
            </div>
            <div className={styles.projects_body}>
              <div className={styles.projects_header}>
                <h3>{project.title}</h3>
                <span className={styles.projects_date}>{project.date}</span>
              </div>
              <p>{project.description}</p>
              <div className={styles.projects_tags}>
                {project.tags.map((tag, tagIndex) => (
                  <span className={styles.tag} key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.projects_links}>
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projects_link}
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
                    className={styles.projects_link}
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
                    className={styles.projects_link}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-figma"></i> Figma
                  </a>
                )}
                <Link
                  href={`/project/${project.id}`}
                  className={`${styles.projects_link} ${styles.projects_link_detail}`}
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
