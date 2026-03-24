"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/main.module.css";

const ROTATING_WORDS = ["프론트엔드", "UI · UX", "인터랙션", "퍼블리싱", "React"];
const WORD_HOLD_MS = 2200;
const LETTER_STAGGER_MS = 55;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Cycle through rotating words
  useEffect(() => {
    const word = ROTATING_WORDS[wordIndex];
    const enterDuration = word.length * LETTER_STAGGER_MS + 600;

    const holdTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setIsExiting(false);
      }, 380);
    }, enterDuration + WORD_HOLD_MS);

    return () => clearTimeout(holdTimer);
  }, [wordIndex]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active nav tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(`.${styles.nav_links} a`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.remove(styles.nav_link_active);
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add(styles.nav_link_active);
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const word = ROTATING_WORDS[wordIndex];

  return (
    <header id="home" className={styles.header}>
      <nav
        className={`${styles.nav_container} ${
          scrolled ? styles.nav_container_scrolled : ""
        }`}
      >
        <div className={styles.nav_logo}>SangHun</div>
        <div
          className={`${styles.nav_links} ${
            mobileMenuOpen ? styles.nav_links_active : ""
          }`}
        >
          <Link href="#home" className={styles.nav_link_active}>
            홈
          </Link>
          <Link href="#about">소개</Link>
          <Link href="#skills">기술</Link>
          <Link href="#projects">프로젝트</Link>
          <Link href="#contact">연락처</Link>
        </div>
        <div
          className={styles.mobile_menu}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.hero_content}>
          <p className={styles.hero_greeting}>안녕하세요, 저는</p>

          {/* Massive rotating word with letter stagger */}
          <div className={styles.hero_main_line}>
            <div className={styles.hero_word_overflow}>
              {word.split("").map((letter, i) => (
                <span
                  key={`${wordIndex}-${i}`}
                  className={`${styles.hero_letter} ${
                    isExiting ? styles.hero_letter_exit : ""
                  }`}
                  style={
                    {
                      "--letter-delay": `${i * LETTER_STAGGER_MS}ms`,
                    } as React.CSSProperties
                  }
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          </div>

          <p className={styles.hero_suffix}>
            하는{" "}
            <span className={styles.hero_name_accent}>개발자</span>입니다.
          </p>

          <div className={styles.hero_tags}>
            {[
              "# 프론트엔드",
              "# 퍼블리싱",
              "# UI/UX",
              "# 인터랙션",
              "# QA",
            ].map((tag, i) => (
              <span
                key={i}
                className={styles.hero_tag}
                style={{ "--i": i + 1 } as React.CSSProperties}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.hero_cta_group}>
            <Link href="#projects" className={styles.hero_cta_primary}>
              프로젝트 보기
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link href="#contact" className={styles.hero_cta_secondary}>
              연락하기
            </Link>
          </div>
        </div>

        {/* Word counter decoration */}
        <div className={styles.hero_number_deco}>
          <span>0{wordIndex + 1}</span>
          <div className={styles.hero_number_line}></div>
          <span>0{ROTATING_WORDS.length}</span>
        </div>

        {/* Background shapes */}
        <div className={styles.hero_shapes}>
          <div
            className={`${styles.shape} ${styles.shape_1} ${styles.floating}`}
          ></div>
          <div
            className={`${styles.shape} ${styles.shape_2} ${styles.floating}`}
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className={`${styles.shape} ${styles.shape_3} ${styles.floating}`}
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className={styles.scroll_indicator}>
        <div className={styles.scroll_mouse}>
          <div className={styles.scroll_wheel}></div>
        </div>
        <div className={styles.scroll_arrow}>
          <span>스크롤</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </header>
  );
}
