"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { developerInfo } from "@/data/data";
import styles from "@/styles/main.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const typingDone = useRef(false);

  const fullText = `const developer = {
  name: "${developerInfo.name}",
  role: "${developerInfo.role}",
  skills: [${developerInfo.skills.map((s) => `"${s}"`).join(", ")}],
  tools: [${developerInfo.tools.map((t) => `"${t}"`).join(", ")}],
  passion: "${developerInfo.passion}",
  motto: "${developerInfo.motto}",
};`;

  const highlightCode = (text: string) => {
    return text.split("\n").map((line, lineIdx) => {
      const parts: React.ReactNode[] = [];
      let remaining = line;
      let keyIdx = 0;

      while (remaining.length > 0) {
        const boolMatch = remaining.match(/^(true|false)\b/);
        if (boolMatch) {
          parts.push(<span key={`bl-${lineIdx}-${keyIdx++}`} className={styles.code_boolean}>{boolMatch[0]}</span>);
          remaining = remaining.slice(boolMatch[0].length);
          continue;
        }
        const kwMatch = remaining.match(/^(const|let|var|function|return)\b/);
        if (kwMatch) {
          parts.push(<span key={`k-${lineIdx}-${keyIdx++}`} className={styles.code_keyword}>{kwMatch[0]}</span>);
          remaining = remaining.slice(kwMatch[0].length);
          continue;
        }
        const propMatch = remaining.match(/^(\s*\w+)(?=:)/);
        if (propMatch) {
          parts.push(<span key={`p-${lineIdx}-${keyIdx++}`} className={styles.code_property}>{propMatch[0]}</span>);
          remaining = remaining.slice(propMatch[0].length);
          continue;
        }
        const strMatch = remaining.match(/^"[^"]*"/);
        if (strMatch) {
          parts.push(<span key={`s-${lineIdx}-${keyIdx++}`} className={styles.code_string}>{strMatch[0]}</span>);
          remaining = remaining.slice(strMatch[0].length);
          continue;
        }
        const brMatch = remaining.match(/^[[\]{}(),;=]/);
        if (brMatch) {
          parts.push(<span key={`b-${lineIdx}-${keyIdx++}`} className={styles.code_bracket}>{brMatch[0]}</span>);
          remaining = remaining.slice(1);
          continue;
        }
        parts.push(remaining[0]);
        remaining = remaining.slice(1);
      }

      return (
        <span key={`line-${lineIdx}`}>
          <span className={styles.code_line_number}>{lineIdx + 1}</span>
          {parts}
          {lineIdx < text.split("\n").length - 1 ? "\n" : ""}
        </span>
      );
    });
  };

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
    }, developerInfo.typingSpeed ?? 30);

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
    <header id="home" className={styles.header}>
      <nav className={`${styles.nav_container} ${scrolled ? styles.nav_container_scrolled : ""}`}>
        <div className={styles.nav_logo}>SangHun's Web Portfolio</div>
        <div className={`${styles.nav_links} ${mobileMenuOpen ? styles.nav_links_active : ""}`}>
          <Link href="#home" className={styles.nav_link_active}>
            홈
          </Link>
          <Link href="#about">소개</Link>
          <Link href="#skills">기술</Link>
          <Link href="#projects">프로젝트</Link>
          <Link href="#contact">연락처</Link>
        </div>
        <div className={styles.mobile_menu} onClick={toggleMobileMenu}>
          {mobileMenuOpen ? "\u2715" : "\u2630"}
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.hero_intro}>
          <div className={styles.hero_title_wrap}>
            <h1>
              안녕하세요,
              <br />
             
              <span className={styles.hero_highlight}>경험을 디자인</span>하는
              <br />
              개발자입니다.
            </h1>
          </div>
          <p className={styles.hero_subtitle}>
            <span className={styles.hero_tag} style={{ "--i": 1 } as React.CSSProperties}>
              # 프론트엔드
            </span>
            <span className={styles.hero_tag} style={{ "--i": 2 } as React.CSSProperties}>
              # 퍼블리싱
            </span>
            <span className={styles.hero_tag} style={{ "--i": 3 } as React.CSSProperties}>
              # UI/UX
            </span>
            <span className={styles.hero_tag} style={{ "--i": 4 } as React.CSSProperties}>
              # 인터랙션
            </span>
                 <span className={styles.hero_tag} style={{ "--i": 5 } as React.CSSProperties}>
              # QA
            </span>
          </p>
          <div className={styles.hero_desc}>
            <p>
             QA 경험을 바탕으로 예외 케이스까지 치밀하게 고려하며
            </p>
            <p>
              테스트를 중시하는 사용자 경험 중심 개발자 입니다..
            </p>
          </div>
        </div>

        <div className={styles.hero_image}>
          <div className={styles.code_editor}>
            <div className={styles.code_tab_bar}>
              <div className={`${styles.code_tab} ${styles.code_tab_active}`}>
                <i className="fas fa-file-code"></i>
                developer.ts
              </div>
              <div className={styles.code_tab}>
                <i className="fas fa-file-code"></i>
                skills.ts
              </div>
            </div>
            <pre>
              <code>
                {highlightCode(typedText)}
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

        <div className={styles.hero_shapes}>
          <div className={`${styles.shape} ${styles.shape_1} ${styles.floating}`}></div>
          <div className={`${styles.shape} ${styles.shape_2} ${styles.floating}`} style={{ animationDelay: "1s" }}></div>
          <div className={`${styles.shape} ${styles.shape_3} ${styles.floating}`} style={{ animationDelay: "2s" }}></div>
          <div className={`${styles.shape} ${styles.shape_4} ${styles.floating}`} style={{ animationDelay: "1.5s" }}></div>
          <div className={`${styles.shape} ${styles.shape_5} ${styles.floating}`} style={{ animationDelay: "0.5s" }}></div>
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
