"use client";

import { useEffect } from "react";
import { experiences } from "@/data/data";

export default function About() {
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
      { threshold: 0.1 }
    );

    document.querySelectorAll(".about_animate").forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(40px)";
      element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_content about_animate">
        <div className="profile_img">
          <img src="/main/myimg.jpeg" alt="박상훈 프로필" />
        </div>
        <div className="about_text">
          <p className="intro_highlight">
            안녕하세요!{" "}
            <span className="accent_text">배움에 끝이 없는 웹 개발자</span>{" "}
            박상훈입니다.
          </p>
          <div className="about_description">
            <p>좋아하는 것이기에 재미있게 항상 웹 개발을 진행해왔습니다.</p>
            <p>
              어디에서도 잘 보이는{" "}
              <span className="skill_emphasis">반응형 웹 접근성</span>과{" "}
              <span className="skill_emphasis">웹 표준</span>을 고려한 웹 페이지를
              만듭니다.
            </p>
            <p>
              항상 개발하면서{" "}
              <span className="skill_emphasis">팀워크</span>와 진정한{" "}
              <span className="skill_emphasis">소통</span>을 중요시하는
              개발자입니다.
            </p>
          </div>

          <div className="experience">
            <h3>Experience</h3>
            {experiences.map((exp, index) => (
              <div className="experience_item" key={index}>
                <span className="date">{exp.date}</span>
                <span className="info">{exp.info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
