"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "@/data/data";
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
      style={{ "--rocket-from": `${width - 40}px` } as React.CSSProperties}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* spine */}
      <line x1={60} y1={SPINE_Y} x2={width - 60} y2={SPINE_Y} stroke="#1c231e" strokeWidth={2} />
      {/* 로켓이 지나가며 그려지는 초록 선 (오른쪽 → 왼쪽) */}
      <line
        className={styles.term_exp_spine_draw}
        x1={width - 60}
        y1={SPINE_Y}
        x2={60}
        y2={SPINE_Y}
        stroke="#38e07b"
        strokeWidth={2}
        opacity={0.45}
        style={{ "--spine-len": `${width - 120}px` } as React.CSSProperties}
      />

      {/* rocket flying along the spine */}
      <g className={styles.term_exp_rocket}>
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
        const stroke = accent ? "#2c6b48" : "#1c231e";
        const nodeStroke = accent ? "#38e07b" : "#2a352c";
        const iconColor = accent ? "#38e07b" : "#7c8a7e";
        const textY = line2 ? [cardY + 30, cardY + 51, cardY + 78] : [cardY + 44, 0, cardY + 72];

        return (
          <g
            key={i}
            className={styles.term_exp_node}
            style={{ "--reveal-order": experiences.length - 1 - i } as React.CSSProperties}
          >
            {/* stem */}
            {above ? (
              <line x1={cx} y1={128} x2={cx} y2={SPINE_Y - 19} stroke={stroke} strokeWidth={2} />
            ) : (
              <line x1={cx} y1={SPINE_Y + 19} x2={cx} y2={272} stroke={stroke} strokeWidth={2} />
            )}

            {/* card */}
            <rect x={cx - 100} y={cardY} width={200} height={94} rx={12} fill="#0b0d0b" stroke={stroke} />
            {accent && (
              <>
                <rect x={cx + 32} y={cardY - 16} width={52} height={22} rx={11} fill="#38e07b" />
                <text x={cx + 58} y={cardY - 1} textAnchor="middle" fontSize={12} fontWeight={700} fill="#070809">
                  현재
                </text>
              </>
            )}
            <text x={cx} y={textY[0]} textAnchor="middle" fontSize={14.5} fontWeight={700} fill="#eafff0">
              {line1}
            </text>
            {line2 && (
              <text x={cx} y={textY[1]} textAnchor="middle" fontSize={14.5} fontWeight={700} fill="#eafff0">
                {line2}
              </text>
            )}
            <text
              x={cx}
              y={textY[2]}
              textAnchor="middle"
              fontSize={11.5}
              fill="#7c8a7e"
              fontFamily="'JetBrains Mono',monospace"
            >
              {exp.date}
            </text>

            {/* node */}
            <circle cx={cx} cy={SPINE_Y} r={19} fill="#0a0c0a" stroke={nodeStroke} strokeWidth={2} />
            <TimelineIcon icon={exp.icon} x={cx - 9} y={SPINE_Y - 9} color={iconColor} />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- about section ---------- */

export default function About() {
  const expRef = useRef<HTMLDivElement>(null);
  const [expVisible, setExpVisible] = useState(false);

  // 타임라인이 화면에 들어오면 리빌 애니메이션 시작
  useEffect(() => {
    const el = expRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setExpVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.term_about}>
      <div className={styles.term_scanlines} />

      <div className={styles.term_about_inner}>
        <div className={styles.term_about_cmdline}>
          <span className={styles.term_arrow}>➜</span>{" "}
          <span className={styles.term_path}>~/portfolio</span>{" "}
          <span className={styles.term_cmd}>cat about.md</span>
        </div>

        {/* intro row */}
        <div className={styles.term_about_intro}>
          {/* profile */}
          <div className={styles.term_about_profile}>
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
          <div>
            <h2 className={styles.term_about_h1}>
              안녕하세요!{" "}
              <span className={styles.term_accent}>배움에 끝이 없는 웹 개발자</span>{" "}
              박상훈입니다.
            </h2>
            <div className={styles.term_about_paras}>
              <p>좋아하는 것이기에 재미있게 항상 웹 개발을 진행하고 있습니다.</p>
              <p>
                어디에서도 잘 보이는 <b className={styles.term_hl}>반응형 웹 접근성</b>과{" "}
                <b className={styles.term_hl}>웹 표준</b>을 고려한 웹 페이지를 만듭니다.
              </p>
              <p>
                항상 개발하면서 <b className={styles.term_hl}>팀워크</b>와 진정한{" "}
                <b className={styles.term_hl}>소통</b>을 중요시하는 개발자입니다.
              </p>
              <p>
                사내 <b className={styles.term_hl}>프론트엔드 개발 표준</b>과{" "}
                <b className={styles.term_hl}>디자인 시스템 가이드</b>를 직접
                구축·운영하고 있습니다.
              </p>
            </div>

          </div>
        </div>

        {/* experience */}
        <div
          ref={expRef}
          className={`${styles.term_exp} ${expVisible ? styles.term_exp_visible : ""}`}
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
              <div
                key={i}
                className={styles.term_exp_mrow}
                style={{ "--reveal-order": i } as React.CSSProperties}
              >
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
                      color={exp.current ? "#38e07b" : "#7c8a7e"}
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
