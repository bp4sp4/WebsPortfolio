"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/styles/main.module.css";

const ROTATING_WORDS = ["UI·UX", "프론트엔드", "인터랙션", "퍼블리싱", "WEB"];
const ROTATE_MS = 2200;

const NAV_ITEMS = [
  { href: "#home", label: "~/home" },
  { href: "#about", label: "~/about" },
  { href: "#skills", label: "~/skills" },
  { href: "#projects", label: "~/projects" },
  { href: "#contact", label: "~/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // Cycle through rotating words
  useEffect(() => {
    const t = setInterval(
      () => setWordIndex((v) => (v + 1) % ROTATING_WORDS.length),
      ROTATE_MS
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active nav tracking
  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(`.${styles.term_nav} a`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.remove(styles.term_nav_active);
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add(styles.term_nav_active);
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
    <header id="home" className={styles.term_root}>
      {/* scanlines + sweep + glow */}
      <div className={styles.term_scanlines} />
      <div className={styles.term_sweep} />
      <div className={styles.term_topglow} />

      {/* top bar */}
      <nav
        className={`${styles.term_topbar} ${
          scrolled ? styles.term_topbar_scrolled : ""
        }`}
      >
        <div className={styles.term_topbar_left}>
          <span
            className={styles.term_mac_dot}
            style={{ background: "#ff5f56" }}
          />
          <span
            className={styles.term_mac_dot}
            style={{ background: "#ffbd2e" }}
          />
          <span
            className={styles.term_mac_dot}
            style={{ background: "#27c93f" }}
          />
          <span className={styles.term_topbar_title}>
            sanghun@portfolio — zsh
          </span>
        </div>
        <div
          className={`${styles.term_nav} ${
            mobileMenuOpen ? styles.term_nav_open : ""
          }`}
        >
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={i === 0 ? styles.term_nav_active : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div
          className={styles.term_mobile_toggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </div>
      </nav>

      <div className={styles.term_main}>
        <div className={styles.term_status_row}>
          <span className={styles.term_status_pill}>
            <span className={styles.term_status_dot} />
            Available for work
          </span>
          <span>📍 Seoul, KR</span>
        </div>

        <div className={styles.term_cmdblock}>
          <div>
            <span className={styles.term_arrow}>➜</span>{" "}
            <span className={styles.term_path}>~/portfolio</span>{" "}
            <span className={styles.term_cmd}>whoami</span>
          </div>
          <div className={styles.term_comment}>
            # 안녕하세요, 저는 SangHun — Frontend Developer 입니다.
          </div>
          <div style={{ marginTop: 8 }}>
            <span className={styles.term_arrow}>➜</span>{" "}
            <span className={styles.term_path}>~/portfolio</span>{" "}
            <span className={styles.term_cmd}>cat role.txt</span>
          </div>
        </div>

        <div className={styles.term_wordline}>
          <span className={styles.term_prompt}>&gt;_</span>
          <span className={styles.term_word_clip}>
            <span key={word} className={styles.term_word}>
              {word}
            </span>
          </span>
          <span className={styles.term_cursor} />
        </div>
        <div className={styles.term_subline}>
          하는 개발자입니다<span className={styles.term_accent}>_</span>
        </div>

        <div className={styles.term_tags}>
          {["#프론트엔드", "#퍼블리싱", "#UI/UX", "#인터랙션", "#QA"].map(
            (t) => (
              <span key={t} className={styles.term_tag}>
                {t}
              </span>
            )
          )}
        </div>

        <div className={styles.term_run_row}>
          <span>
            <span className={styles.term_arrow}>➜</span>{" "}
            <span className={styles.term_path}>~/portfolio</span>{" "}
            <span className={styles.term_cmd}>./view --projects</span>
          </span>
          <Link href="#projects" className={styles.term_btn_primary}>
            실행 ▸
          </Link>
          <Link href="#contact" className={styles.term_btn_ghost}>
            연락하기
          </Link>
        </div>

      </div>

      <div className={styles.term_scrollhint}>
        <span>scroll</span>
        <span className={styles.term_scrollhint_arrow}>▾</span>
      </div>
    </header>
  );
}
