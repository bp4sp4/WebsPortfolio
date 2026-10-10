"use client";

import { useEffect, useState } from "react";
import s from "@/styles/home.module.css";
import { useGoTo } from "./useHomeMotion";

const LINKS = [
  { href: "#projects", label: "프로젝트" },
  { href: "#career", label: "경력" },
  { href: "#skills", label: "스킬" },
];

/** 상단 고정 내비. 스크롤하면 반투명 흰 배경 + 블러가 깔린다 */
export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  // 마지막 CTA 카드가 화면 전체로 펼쳐진 뒤(섹션 위가 화면 위에 닿은 뒤)에는 어두운 내비로
  const [dark, setDark] = useState(false);
  const goTo = useGoTo();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const c = document.getElementById("contact")?.getBoundingClientRect();
      setDark(!!c && c.top <= 10 && c.bottom > 64);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${s.nav} ${scrolled ? s.nav_on : ""} ${dark ? s.nav_dark : ""}`}>
      <a href="#top" className={s.nav_logo} onClick={(e) => goTo(e, "#top")}>
        박상훈<span>Frontend Developer</span>
      </a>
      <div className={s.nav_links}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => goTo(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className={s.nav_cta} onClick={(e) => goTo(e, "#contact")}>
          연락하기
        </a>
      </div>
    </nav>
  );
}
