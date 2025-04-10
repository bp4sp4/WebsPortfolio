"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { developerInfo } from "@/data/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header id="home">
      <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">SangHun's Portfolio</div>
        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <Link href="#home" className="active">
            홈
          </Link>
          <Link href="#about">소개</Link>
          <Link href="#skills">스킬</Link>
          <Link href="#projects">프로젝트</Link>
          <Link href="#contact">연락처</Link>
        </div>
        <div className="mobile-menu" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? "✕" : "☰"}
        </div>
      </nav>

      <div className="hero">
        <div className="intro-text">
          <div className="title-animation">
            <h1>
              안녕하세요,
              <br />
              저는 <span className="highlight">크리에이티브</span> 개발자입니다.
            </h1>
          </div>
          <p className="subtitle">
            <span className="tag-item">#꿈입없는!</span>
            <span className="tag-item">#노력하는!</span>
            <span className="tag-item">#배움에끝은없다!</span>
          </p>
          <div className="intro-description">
            <p>
              웹과 앱 개발의 경계를 넘나들며 창의적인 디지털 경험을 만듭니다.
            </p>
            <p>최신 기술과 디자인 트렌드를 활용한 웹 경험을 제공합니다.</p>
          </div>
        </div>

        <div className="hero-image">
          <div className="code-animation">
            <pre>
              <code
                id="code-content"
                dangerouslySetInnerHTML={{
                  __html: `<span style="color: #66d9ef;">const</span> developer = <span style="color: #f92672;">{</span>
  <span style="color: #fd971f;">name</span>: <span style="color: #a6e22e;">"${
    developerInfo.name
  }"</span><span style="color: #f92672;">,</span>
  <span style="color: #fd971f;">skills</span>: <span style="color: #f92672;">[</span>${developerInfo.skills
    .map((skill) => `<span style="color: #a6e22e;">"${skill}"</span>`)
    .join(
      '<span style="color: #f92672;">,</span> '
    )}<span style="color: #f92672;">]</span><span style="color: #f92672;">,</span>
  <span style="color: #fd971f;">passion</span>: <span style="color: #a6e22e;">"${
    developerInfo.passion
  }"</span><span style="color: #f92672;">,</span>
  <span style="color: #fd971f;">motto</span>: <span style="color: #a6e22e;">"${
    developerInfo.motto
  }"</span>
<span style="color: #f92672;">}</span><span style="color: #f92672;">;</span>`,
                }}
              />
            </pre>
          </div>
        </div>

        <div className="geometric-shapes">
          <div className="shape shape-1 floating"></div>
          <div
            className="shape shape-2 floating"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="shape shape-3 floating"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="shape shape-4 floating"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="shape shape-5 floating"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down">
          <span>스크롤</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </header>
  );
}
