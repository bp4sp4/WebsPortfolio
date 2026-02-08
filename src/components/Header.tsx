"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { developerInfo } from "@/data/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const typingDone = useRef(false);

  const fullText = `const developer = {
  name: "${developerInfo.name}",
  skills: [${developerInfo.skills.map((s) => `"${s}"`).join(", ")}],
  passion: "${developerInfo.passion}",
  motto: "${developerInfo.motto}"
};`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typingDone.current) return;
    typingDone.current = true;

    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [fullText]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header id="home">
      <nav className={`nav_container ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">SangHun.</div>
        <div className={`nav_links ${mobileMenuOpen ? "active" : ""}`}>
          <Link href="#home" className="active">
            홈
          </Link>
          <Link href="#about">소개</Link>
          <Link href="#skills">기술</Link>
          <Link href="#projects">프로젝트</Link>
          <Link href="#contact">연락처</Link>
        </div>
        <div className="mobile_menu" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? "\u2715" : "\u2630"}
        </div>
      </nav>

      <div className="hero">
        <div className="intro_text">
          <div className="title_animation">
            <h1>
              안녕하세요,
              <br />
              <span className="highlight">경험을 디자인</span>하는
              <br />
              개발자입니다.
            </h1>
          </div>
          <p className="subtitle">
            <span className="tag_item" style={{ "--i": 1 } as React.CSSProperties}>
              # 프론트엔드
            </span>
            <span className="tag_item" style={{ "--i": 2 } as React.CSSProperties}>
              # 퍼블리싱
            </span>
            <span className="tag_item" style={{ "--i": 3 } as React.CSSProperties}>
              # UI/UX
            </span>
            <span className="tag_item" style={{ "--i": 4 } as React.CSSProperties}>
              # 인터랙션
            </span>
          </p>
          <div className="intro_description">
            <p>
              사용자 경험을 중심으로 창의적인 디지털 경험을 만들어갑니다.
            </p>
            <p>
              최신 기술과 트렌드를 활용한 인터랙티브 웹을 구현합니다.
            </p>
          </div>
        </div>

        <div className="hero_image">
          <div className="code_animation">
            <pre>
              <code>
                {typedText}
                <span
                  style={{
                    opacity: showCursor ? 1 : 0,
                    color: "#6c5ce7",
                    fontWeight: "bold",
                  }}
                >
                  |
                </span>
              </code>
            </pre>
          </div>
        </div>

        <div className="geometric_shapes">
          <div className="shape shape_1 floating"></div>
          <div
            className="shape shape_2 floating"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="shape shape_3 floating"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="shape shape_4 floating"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="shape shape_5 floating"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>

      <div className="scroll_indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow_down">
          <span>스크롤</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </header>
  );
}
