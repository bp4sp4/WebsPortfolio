"use client";

import { useEffect } from "react";
import Image from "next/image";
import { experiences } from "@/data/data";

export default function About() {
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

    document.querySelectorAll(".about-content").forEach((el) => {
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
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="profile-img">
          <img src="/main/myimg.jpeg" alt="프로필 이미지" />
        </div>
        <div className="about-description">
          <p className="intro-highlight">
            안녕하세요!{" "}
            <span className="accent-text">배움에 끝이 없는 웹 개발자</span>{" "}
            박상훈입니다!
          </p>
          <p>좋아하는것이기에 재미있게 항상 웹 개발을 진행해왔습니다.</p>
          <p>
            어디에서도 잘 보이는{" "}
            <span className="skill-emphasis">반응형 웹 접근성</span>과{" "}
            <span className="skill-emphasis">웹 표준</span>을 고려한 웹 페이지를
            그려냅니다.
          </p>
          <p>
            항상 개발하면서 <span className="skill-emphasis">팀워크</span>와
            단순한 의사전달이 아닌 진정한{" "}
            <span className="skill-emphasis">소통</span>을 중요시하는
            개발자입니다.
          </p>

          <div className="experience">
            <h3>경력 사항</h3>
            {experiences.map((exp, index) => (
              <div className="experience-item" key={index}>
                <span className="date">{exp.date}</span>
                <span className="info">{exp.info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add inline styles to ensure animation works */}
      <style jsx>{`
        .animated {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .intro-highlight {
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 1.5rem;
          line-height: 1.5;
          position: relative;
        }

        .accent-text {
          color: var(--primary);
          position: relative;
          display: inline-block;
        }

        .accent-text::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 30%;
          background-color: rgba(255, 62, 108, 0.15);
          bottom: 2px;
          left: 0;
          z-index: -1;
          border-radius: 2px;
        }

        .skill-emphasis {
          font-weight: 600;
          color: var(--secondary);
          position: relative;
        }

        .about-description p {
          font-size: 1.5rem;
          line-height: 1.7;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
}
