"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "@/data/data";
import { gsap, useGSAP } from "@/lib/gsap";
import { useMediaQuery } from "@/lib/useMediaQuery";
import styles from "@/styles/main.module.css";

/* ---------- experience SVG timeline (data-driven) ---------- */

const NODE_GAP = 240;
const NODE_START_X = 120;
const SPINE_Y = 200;

function splitInfo(info: string): [string, string | null] {
  // "|" 기준 우선 분리, 없으면 중간 공백에서 분리
  if (info.includes("|")) {
    const idx = info.indexOf("|");
    return [info.slice(0, idx).trim(), "| " + info.slice(idx + 1).trim()];
  }
  if (info.length > 12) {
    const mid = Math.floor(info.length / 2);
    let split = -1;
    for (let d = 0; d < mid; d++) {
      if (info[mid - d] === " ") { split = mid - d; break; }
      if (info[mid + d] === " ") { split = mid + d; break; }
    }
    if (split > 0) return [info.slice(0, split), info.slice(split + 1)];
  }
  return [info, null];
}

function TimelineIcon({ icon, x, y, color }: { icon: string; x: number; y: number; color: string }) {
  const props = {
    fill: "none",
    stroke: color,
    strokeWidth: 1.6,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
  };
  if (icon.includes("laptop")) {
    return (
      <g transform={`translate(${x},${y})`} {...props}>
        <rect x={3} y={4} width={12} height={8} rx={1} />
        <line x1={1} y1={15} x2={17} y2={15} />
      </g>
    );
  }
  if (icon.includes("graduation")) {
    return (
      <g transform={`translate(${x},${y + 1})`} {...props}>
        <path d="M9 4 L1 8 L9 12 L17 8 Z" />
        <path d="M4 9.5 V13 c0 1.6 10 1.6 10 0 V9.5" />
      </g>
    );
  }
  return (
    <g transform={`translate(${x},${y})`} {...props}>
      <rect x={1} y={6} width={16} height={10} rx={1.5} />
      <path d="M6 6 V4.6 A1.6 1.6 0 0 1 7.6 3 h2.8 A1.6 1.6 0 0 1 12 4.6 V6" />
      <line x1={1} y1={10} x2={17} y2={10} />
    </g>
  );
}

function ExperienceTimeline() {
  const width = NODE_START_X * 2 + (experiences.length - 1) * NODE_GAP;

  return (
    <svg
      viewBox={`0 0 ${width} 400`}
      width="100%"
      className={styles.term_exp_svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* spine */}
      <line x1={60} y1={SPINE_Y} x2={width - 60} y2={SPINE_Y} stroke="#1f1f1f" strokeWidth={2} />
      {/* 로켓이 지나가며 그려지는 초록 선 (오른쪽 → 왼쪽) */}
      <line
        data-spine
        className={styles.term_exp_spine_draw}
        x1={width - 60}
        y1={SPINE_Y}
        x2={60}
        y2={SPINE_Y}
        stroke="#f2f2f0"
        strokeWidth={2}
        opacity={0.45}
      />

      {/* rocket flying along the spine */}
      <g data-rocket className={styles.term_exp_rocket}>
        <text textAnchor="middle" dominantBaseline="central" fontSize={20} transform="rotate(225)">
          🚀
        </text>
      </g>

      {experiences.map((exp, i) => {
        const cx = NODE_START_X + i * NODE_GAP;
        const above = i % 2 === 0;
        const cardY = above ? 34 : 272;
        const [line1, line2] = splitInfo(exp.info);
        const accent = exp.current;
        const stroke = accent ? "#4a4a4a" : "#1f1f1f";
        const nodeStroke = accent ? "#f2f2f0" : "#2e2e2e";
        const iconColor = accent ? "#f2f2f0" : "#808080";
        const textY = line2 ? [cardY + 30, cardY + 51, cardY + 78] : [cardY + 44, 0, cardY + 72];

        return (
          <g
            key={i}
            data-node
            className={styles.term_exp_node}
          >
            {/* stem */}
            {above ? (
              <line x1={cx} y1={128} x2={cx} y2={SPINE_Y - 19} stroke={stroke} strokeWidth={2} />
            ) : (
              <line x1={cx} y1={SPINE_Y + 19} x2={cx} y2={272} stroke={stroke} strokeWidth={2} />
            )}

            {/* card */}
            <rect x={cx - 100} y={cardY} width={200} height={94} rx={12} fill="#0b0b0b" stroke={stroke} />
            {accent && (
              <>
                <rect x={cx + 32} y={cardY - 16} width={52} height={22} rx={11} fill="#f2f2f0" />
                <text x={cx + 58} y={cardY - 1} textAnchor="middle" fontSize={12} fontWeight={700} fill="#080808">
                  현재
                </text>
              </>
            )}
            <text x={cx} y={textY[0]} textAnchor="middle" fontSize={14.5} fontWeight={700} fill="#f4f4f2">
              {line1}
            </text>
            {line2 && (
              <text x={cx} y={textY[1]} textAnchor="middle" fontSize={14.5} fontWeight={700} fill="#f4f4f2">
                {line2}
              </text>
            )}
            <text
              x={cx}
              y={textY[2]}
              textAnchor="middle"
              fontSize={11.5}
              fill="#808080"
              fontFamily="'JetBrains Mono',monospace"
            >
              {exp.date}
            </text>

            {/* node */}
            <circle cx={cx} cy={SPINE_Y} r={19} fill="#0a0a0a" stroke={nodeStroke} strokeWidth={2} />
            <TimelineIcon icon={exp.icon} x={cx - 9} y={SPINE_Y - 9} color={iconColor} />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- about section ---------- */

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const [expVisible, setExpVisible] = useState(false);
  const desktop = useMediaQuery("(min-width: 901px)");

  // 소개 문단 리빌 + (데스크톱) 스크롤 진행도에 맞춰 로켓이 날고 선이 그려지고 노드가 켜진다
  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.from("[data-reveal]", {
        y: 28,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-intro]", start: "top 80%" },
      });

      if (!desktop) return;

      const svg = expRef.current?.querySelector<SVGSVGElement>("svg");
      const spine = svg?.querySelector<SVGLineElement>("[data-spine]");
      const rocket = svg?.querySelector<SVGGElement>("[data-rocket]");
      const nodes = svg ? gsap.utils.toArray<SVGGElement>("[data-node]", svg) : [];
      if (!svg || !spine || !rocket || nodes.length === 0) return;

      const width = svg.viewBox.baseVal.width;
      const len = spine.getTotalLength();

      gsap.set(spine, { strokeDasharray: len, strokeDashoffset: len });
      gsap.set(nodes, { opacity: 0, scale: 0.5, transformOrigin: "50% 50%" });
      gsap.set(rocket, { x: width - 40, y: SPINE_Y, opacity: 0 });

      if (reduce) {
        gsap.set(spine, { strokeDashoffset: 0 });
        gsap.set(nodes, { opacity: 1, scale: 1 });
        return;
      }

      // 타임라인이 화면에 들어오면 로켓이 오른쪽(과거) → 왼쪽(현재)으로 2초간 "슝" 날아간다.
      // 위로 스크롤해 벗어나면 리셋되어 다시 내려올 때 한 번 더 재생된다.
      const FLY = 2.2;
      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: expRef.current,
          start: "top 72%",
          toggleActions: "restart none none reset",
        },
      });

      tl.to(rocket, { x: 40, duration: FLY, ease: "power1.inOut" }, 0)
        .to(rocket, { opacity: 1, duration: 0.15 }, 0)
        .to(rocket, { opacity: 0, duration: 0.2 }, FLY - 0.2)
        .to(spine, { strokeDashoffset: 0, duration: FLY, ease: "power1.inOut" }, 0);

      // 로켓이 지나간 자리마다 노드가 켜진다 (오른쪽 → 왼쪽)
      [...nodes].reverse().forEach((node, i) => {
        tl.to(
          node,
          { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2.2)" },
          0.15 + (i * (FLY - 0.4)) / nodes.length
        );
      });
    },
    { scope: sectionRef, dependencies: [desktop], revertOnUpdate: true }
  );

  // 모바일 세로 타임라인: 화면에 보일 때 CSS 리빌
  useEffect(() => {
    const el = expRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setExpVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={styles.term_about}>
      <div className={styles.term_scanlines} />

      <div className={styles.term_about_inner}>
        <div data-reveal className={styles.term_about_cmdline}>
          <span className={styles.term_arrow}>➜</span>{" "}
          <span className={styles.term_path}>~/portfolio</span>{" "}
          <span className={styles.term_cmd}>cat about.md</span>
        </div>

        {/* intro row */}
        <div data-intro className={styles.term_about_intro}>
          {/* profile */}
          <div data-reveal className={styles.term_about_profile}>
            <div className={styles.term_avatar_ring}>
              <div className={styles.term_avatar_inner}>
                <img src="/main/myimg.jpg" alt="박상훈 프로필" />
              </div>
            </div>
            <div className={styles.term_about_name}>박상훈</div>
            <div className={styles.term_about_role}>
              <span className={styles.term_status_dot} />
              Web Developer
            </div>
          </div>

          {/* text */}
          <div data-reveal>
            <h2 className={styles.term_about_h1}>
              <span className={styles.term_accent}>사용자가 겪을 일을 먼저 겪어보는</span>{" "}
              웹 개발자 박상훈입니다.
            </h2>
            <div className={styles.term_about_paras}>
              <p>
                QA 테스터로 처음 서비스를 만났습니다. 버그를 찾던 6개월 동안 배운 건, 사용자는 화면이 아니라{" "}
                <b className={styles.term_hl}>막히는 순간</b>을 기억한다는 것이었습니다.
              </p>
              <p>
                지금은 한평생그룹에서 웹 디자이너와{" "}
                <b className={styles.term_hl}>2인 팀</b>으로 ERP·취업 플랫폼·LMS 등{" "}
                <b className={styles.term_hl}>6개 서비스</b>를 만들고 운영합니다. 개발은 설계부터 배포까지 혼자
                맡고, 사내 <b className={styles.term_hl}>프론트엔드 개발 표준</b>과{" "}
                <b className={styles.term_hl}>디자인 시스템 가이드</b>도 직접 만들었습니다.
              </p>
              <p>
                <b className={styles.term_hl}>반응형·접근성·웹 표준</b>은 옵션이 아니라 기본값으로 둡니다. 어떤
                기기에서 열어도 같은 경험이어야 하니까요.
              </p>
            </div>

          </div>
        </div>

        {/* experience */}
        <div
          ref={expRef}
          className={`${styles.term_exp} ${expVisible && !desktop ? styles.term_exp_visible : ""}`}
        >
          <div className={styles.term_exp_head}>
            <div className={styles.term_exp_title}>Experience</div>
            <div className={styles.term_exp_underline} />
          </div>
          <div className={styles.term_exp_scroll}>
            <ExperienceTimeline />
          </div>

          {/* 모바일 세로 타임라인 */}
          <div className={styles.term_exp_mobile}>
            {experiences.map((exp, i) => (
              <div key={i} className={styles.term_exp_mrow}>
                <div
                  className={`${styles.term_exp_mnode} ${
                    exp.current ? styles.term_exp_mnode_current : ""
                  }`}
                >
                  <svg width={18} height={18} viewBox="0 0 18 18">
                    <TimelineIcon
                      icon={exp.icon}
                      x={0}
                      y={0}
                      color={exp.current ? "#f2f2f0" : "#808080"}
                    />
                  </svg>
                </div>
                <div
                  className={`${styles.term_exp_mcard} ${
                    exp.current ? styles.term_exp_mcard_current : ""
                  }`}
                >
                  {exp.current && (
                    <span className={styles.term_exp_mbadge}>현재</span>
                  )}
                  <div className={styles.term_exp_minfo}>{exp.info}</div>
                  <div className={styles.term_exp_mdate}>{exp.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.term_about_endline}>
          <span className={styles.term_arrow}>➜</span>{" "}
          <span className={styles.term_path}>~/portfolio</span>{" "}
          <span className={styles.term_cmd}>_</span>
          <span className={styles.term_blink_cursor} />
        </div>
      </div>
    </section>
  );
}
