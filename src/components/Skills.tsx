"use client";

import { useEffect } from "react";
import { skills } from "@/data/data";

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

            const progressBar = el.querySelector(
              ".skill_progress"
            ) as HTMLElement;
            if (progressBar) {
              const width = progressBar.getAttribute("data-width");
              if (width) {
                setTimeout(() => {
                  progressBar.style.width = width;
                }, 300);
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".skill_card").forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";
      element.style.transition = `opacity 0.5s ease ${
        index * 0.1
      }s, transform 0.5s ease ${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <h2 className="section_title">기술 스택</h2>
      <div className="skills_container">
        {skills.map((skill, index) => (
          <div className="skill_card" key={index}>
            <div className="skill_content">
              <div className="skill_icon">
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill_tags">
                {skill.tags.map((tag, tagIndex) => (
                  <span className="tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill_level">
              <div
                className="skill_progress"
                data-width={`${skill.level}%`}
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
