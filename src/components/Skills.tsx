"use client";

import { useEffect } from "react";
import { skills } from "@/data/data";

export default function Skills() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");

          const element = entry.target as HTMLElement;
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".skill-card").forEach((el) => {
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
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-content">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-tags">
                {skill.tags.map((tag, tagIndex) => (
                  <span className="tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-level">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Add inline styles to ensure animation works */}
      <style jsx>{`
        .animated {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .skill-content {
          flex: 1;
        }

        .skill-level {
          margin-top: auto;
        }
      `}</style>
    </section>
  );
}
