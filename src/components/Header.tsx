"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useLenis } from "lenis/react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { intro } from "@/lib/intro";
import styles from "@/styles/main.module.css";
import m from "@/styles/motion.module.css";

const ROTATING_WORDS = ["사용자 경험을", "UI·UX를", "화면을", "흐름을", "퍼블리싱을", "웹을"];
const ROTATE_MS = 2200;

const NAV_ITEMS = [
  { href: "#home", label: "~/home" },
  { href: "#about", label: "~/about" },
  { href: "#skills", label: "~/skills" },
  { href: "#projects", label: "~/projects" },
  { href: "#contact", label: "~/contact" },
];

export default function Header() {
  const rootRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const lenis = useLenis();

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active nav tracking — 화면 가운데 띠를 지나는 섹션을 활성화 (pin 된 긴 섹션도 잡힌다)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(`.${styles.term_nav} a`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              styles.term_nav_active,
              link.getAttribute("href") === `#${id}`
            );
          });
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // 인트로 등장 + 스크롤 패럴랙스
  useGSAP(
    () => {
      const root = rootRef.current;
      const main = mainRef.current;
      const subline = sublineRef.current;
      if (!root || !main || !subline) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const items = gsap.utils.toArray<HTMLElement>("[data-intro]", main);
      const split = new SplitText(subline, { type: "chars" });

      if (reduce) {
        gsap.set(items, { autoAlpha: 1 });
      } else {
        gsap.set(items, { autoAlpha: 0, y: 24 });
        gsap.set(split.chars, { yPercent: 115 });

        const play = () => {
          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(items, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.11 }, 0.1)
            .to(split.chars, { yPercent: 0, duration: 0.8, stagger: 0.018, ease: "power4.out" }, 0.55);
        };
        const off = intro.onDone(play);

        // 히어로가 빠져나갈 때 본문은 위로 밀리며 사라진다
        gsap.to(main, {
          yPercent: -18,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to("[data-scrollhint]", {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top top", end: "25% top", scrub: true },
        });

        return () => {
          off();
          split.revert();
        };
      }
    },
    { scope: rootRef }
  );

  const goTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    if (lenis) lenis.scrollTo(target, { duration: 1.3 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  const word = ROTATING_WORDS[wordIndex];

  return (
    <header id="home" ref={rootRef} className={styles.term_root}>
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
          <span className={`${styles.term_mac_dot} ${styles.term_mac_dot_red}`} />
          <span className={`${styles.term_mac_dot} ${styles.term_mac_dot_yellow}`} />
          <span className={`${styles.term_mac_dot} ${styles.term_mac_dot_green}`} />
          <span className={styles.term_topbar_title}>sanghun@portfolio — zsh</span>
        </div>
        <div
          className={`${styles.term_nav} ${
            mobileMenuOpen ? styles.term_nav_open : ""
          }`}
        >
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={i === 0 ? styles.term_nav_active : ""}
              onClick={(e) => goTo(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div
          className={styles.term_mobile_toggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </div>
      </nav>

      <div ref={mainRef} className={styles.term_main}>
        <div data-intro className={styles.term_cmdblock}>
          <div>
            <span className={styles.term_arrow}>➜</span>{" "}
            <span className={styles.term_path}>~/portfolio</span>{" "}
            <span className={styles.term_cmd}>whoami</span>
          </div>
          <div className={styles.term_comment}>
            # 안녕하세요, QA로 시작해 풀스택까지 온 웹 개발자 박상훈입니다.
          </div>
          <div className={styles.term_cmdblock_gap}>
            <span className={styles.term_arrow}>➜</span>{" "}
            <span className={styles.term_path}>~/portfolio</span>{" "}
            <span className={styles.term_cmd}>cat role.txt</span>
          </div>
        </div>

        <div data-intro className={styles.term_wordline}>
          <span className={styles.term_prompt}>&gt;_</span>
          <span className={styles.term_word_clip}>
            <span key={word} className={styles.term_word}>
              {word}
            </span>
          </span>
          <span className={styles.term_cursor} />
        </div>

        <div data-intro className={m.hero_clip}>
          <div ref={sublineRef} className={styles.term_subline}>
            완성도 있게 구현합니다<span className={styles.term_accent}>_</span>
          </div>
        </div>

        <div data-intro className={styles.term_tags}>
          {["#프론트엔드", "#퍼블리싱", "#UI/UX", "#인터랙션", "#QA"].map((t) => (
            <span key={t} className={styles.term_tag}>
              {t}
            </span>
          ))}
        </div>

        <div data-intro className={styles.term_run_row}>
          <span>
            <span className={styles.term_arrow}>➜</span>{" "}
            <span className={styles.term_path}>~/portfolio</span>
          </span>
          <a href="#projects" className={styles.term_btn_primary} onClick={(e) => goTo(e, "#projects")}>
            프로젝트 보기 →
          </a>
          <a href="#contact" className={styles.term_btn_ghost} onClick={(e) => goTo(e, "#contact")}>
            연락하기 →
          </a>
        </div>
      </div>

      <a
        href="#about"
        data-scrollhint
        className={styles.term_scrollhint}
        onClick={(e) => goTo(e, "#about")}
      >
        <span className={styles.term_scrollhint_label}>scroll</span>
        <span className={styles.term_scrollhint_line} />
        <span className={styles.term_scrollhint_dot} />
      </a>
    </header>
  );
}
