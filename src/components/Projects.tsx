"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data/data";
import styles from "@/styles/main.module.css";

type TabType = "all" | "company" | "personal";

const TABS: { key: TabType; label: string }[] = [
  { key: "all",      label: "전체" },
  { key: "company",  label: "회사" },
  { key: "personal", label: "개인" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const router = useRouter();

  const filtered = projects.filter(
    (p) => activeTab === "all" || p.type === activeTab
  );

  const countOf = (tab: TabType) =>
    tab === "all" ? projects.length : projects.filter((p) => p.type === tab).length;

  return (
    <section id="projects" className={`${styles.section} ${styles.projects}`}>
      {/* 헤더 + 탭 */}
      <div className={styles.projects_header_row}>
        <h2 className={styles.section_title}>Projects</h2>

        <div className={styles.projects_tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`${styles.projects_tab} ${activeTab === tab.key ? styles.projects_tab_active : ""}`}
              onClick={() => setActiveTab(tab.key)}
              data-interactive
            >
              {tab.label}
              <span className={styles.projects_tab_count}>{countOf(tab.key)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 카드 그리드 */}
      <div className={styles.projects_grid}>
        {filtered.map((project, index) => (
          <div
            className={`${styles.projects_card} ${styles.projects_card_visible}`}
            key={`${activeTab}-${project.id}-${index}`}
            style={{ animationDelay: `${index * 0.06}s` }}
            onClick={() => router.push(`/project/${project.id}`)}
          >
            <div className={styles.projects_img}>
              <img
                src={hoveredProject === project.id ? project.gifImage : project.image}
                alt={`${project.title} 프로젝트`}
                className={styles.projects_gif}
                onMouseEnter={() => setHoveredProject(project.id)}
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
