"use client";

import { Fragment, useRef, useState, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/data";
import { FROM_HOME_KEY } from "@/lib/nav";
import { gsap, useGSAP } from "@/lib/gsap";
import { useMediaQuery } from "@/lib/useMediaQuery";
import s from "@/styles/home.module.css";
import { reduceMotion, useRevealUp } from "./useHomeMotion";

type Project = (typeof projects)[number];

const DESKTOP = "(min-width: 1024px)";
const pad = (n: number) => String(n).padStart(2, "0");
const hostOf = (url: string | undefined) => {
  if (!url || url === "#") return null;
  try {
    const h = new URL(url).hostname.replace(/^www\./, "");
    return h.startsWith("xn--") ? null : h;
  } catch {
    return null;
  }
};
/** "2026. 03. 16 ~ 진행 중" → "2026.03" */
const yearMonth = (date: string) => {
  const m = /(\d{4})\.\s*(\d{1,2})/.exec(date);
  return m ? `${m[1]}.${m[2].padStart(2, "0")}` : date;
};

/** 상세로 이동. 상세의 뒤로가기가 홈 프로젝트 섹션으로 돌아오도록 표시를 남긴다 */
function useOpen() {
  const router = useRouter();
  return (e: MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    try {
      sessionStorage.setItem(FROM_HOME_KEY, "1");
    } catch {}
    router.push(`/project/${id}`);
  };
}

/* ────────────────────────────────────────────────────────────
   대표작 스토리 — 메인 히어로와 같은 "고정 + 단계 전환" 장면
   ① 문제 문장이 단어별로 흐림 → 선명
   ② 문장이 위로 빠지고 브라우저 화면이 아래에서 올라오며 커진다
   ③ 폰이 옆에서 들어오고, 해결 내용 카드가 붙는다
   ──────────────────────────────────────────────────────────── */
function FeatureStory({ p, no, desktop }: { p: Project; no: number; desktop: boolean }) {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const open = useOpen();
  const story = p.story!;
  const host = hostOf(p.demo);

  useGSAP(
    () => {
      if (reduceMotion()) return;
      const q = gsap.utils.selector(rootRef);

      if (!desktop) {
        // 모바일: 고정 없이 문장이 읽는 위치를 따라 켜지고, 화면은 떠오른다
        gsap.fromTo(
          q("[data-sw]"),
          { opacity: 0.12, filter: "blur(6px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: q("[data-problem]")[0], start: "top 80%", end: "bottom 45%", scrub: true },
          }
        );
        return;
      }

      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=380%",
            pin: stageRef.current,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })
        // ① 문제 문장이 선명해진다. 단어 전체가 0.75 안에 다 켜지고, 1.5까지 다 보인 채로 머문다 (빨리 내려도 읽히게)
        .fromTo(
          q("[data-sw]"),
          { opacity: 0.22, filter: "blur(6px)" },
          { opacity: 1, filter: "blur(0px)", duration: 0.3, stagger: { amount: 0.45 } },
          0
        )
        // ② 문제가 위로 흐려지며 빠지고 → "그래서 만들었습니다" → 프로젝트 이름이 크게 밀려 올라온다
        .to(q("[data-ptext]"), { autoAlpha: 0, y: -40, filter: "blur(8px)", duration: 0.4 }, 1.5)
        .fromTo(q("[data-rn1]"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 1.7)
        .fromTo(q("[data-rn2]"), { yPercent: 110 }, { yPercent: 0, duration: 0.5, ease: "power3.out" }, 1.85)
        .fromTo(q("[data-rn3]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 2.1)
        // ③ 이름이 작아지며 사라지고, 문제 문장은 왼쪽 위 제목으로 돌아온다
        .to(q("[data-rname]"), { autoAlpha: 0, scale: 0.9, duration: 0.4 }, 2.75)
        .set(q("[data-pkicker]"), { autoAlpha: 0 }, 2.75)
        .to(
          q("[data-ptext]"),
          {
            // 왼쪽 위(화면 높이의 13% 지점)에 작게, 제목처럼 남는다
            y: () => window.innerHeight * 0.13 - (q("[data-ptext]")[0] as HTMLElement).offsetTop,
            scale: 0.48,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out",
          },
          2.85
        )
        // ④ 화면 · 해결 카드 · 폰
        .fromTo(
          q("[data-visual]"),
          { y: "105vh", scale: 0.72, clipPath: "inset(0% 0% 0% 0% round 48px)" },
          { y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0% round 20px)", duration: 1, ease: "power1.out" },
          2.9
        )
        .fromTo(q("[data-panel]"), { scale: 0.85, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.8, ease: "power1.out" }, 2.9)
        .fromTo(q("[data-answer]"), { y: 80, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, 3.15)
        .fromTo(q("[data-phone]"), { xPercent: 70, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 0.6 }, 3.5)
        .to({}, { duration: 0.5 });
    },
    { scope: rootRef, dependencies: [desktop], revertOnUpdate: true }
  );

  return (
    <section ref={rootRef} className={s.st_story}>
      <div ref={stageRef} className={s.st_stage}>
        <div data-panel className={s.st_panel} style={{ background: p.tint ?? "#f2f4f6" }} aria-hidden="true" />
        {/* 문제 → 해결 사이의 전환점: "그래서 만들었습니다" + 프로젝트 이름 */}
        <div data-rname className={s.st_rname}>
          <p data-rn1 className={s.st_rname_lead}>
            그래서 만들었습니다
          </p>
          <h3 className={s.st_rname_title}>
            <span data-rn2>{p.title}</span>
          </h3>
          {p.headline && (
            <p data-rn3 className={s.st_rname_sub}>
              {p.headline}
            </p>
          )}
        </div>
        <div data-problem className={s.st_problem}>
          <div data-ptext className={s.st_ptext}>
          <div data-pkicker className={s.st_kicker}>
            {pad(no)} · {p.title}
          </div>
          <p className={s.st_line_wrap}>
            {story.problem.map((line, i) => {
              const muted = typeof line !== "string";
              const text = muted ? line.muted : line;
              return (
                <span key={i} className={`${s.st_line} ${muted ? s.st_muted : ""}`}>
                  {text.split(" ").map((w, j) => (
                    <Fragment key={j}>
                      <span data-sw className={s.st_w}>
                        {w}
                      </span>{" "}
                    </Fragment>
                  ))}
                </span>
              );
            })}
          </p>
          </div>
        </div>

        <a
          data-visual
          href={`/project/${p.id}`}
          onClick={(e) => open(e, p.id)}
          className={s.st_visual}
          aria-label={`${p.title} 프로젝트 보기`}
        >
          <div className={s.st_bar}>
            <i />
            <i />
            <i />
            <span>{host ?? `${p.title} · 사내 전용`}</span>
          </div>
          <img src={story.web} alt={`${p.title} 화면`} />
        </a>

        {story.phone && (
          <div data-phone className={s.st_phone} aria-hidden="true">
            <img src={story.phone} alt="" />
          </div>
        )}

        <div data-answer className={s.st_answer}>
          <div className={s.st_kicker}>
            {pad(no)} · {p.badge ?? yearMonth(p.date)}
          </div>
          <h3>{p.title}</h3>
          <p>{story.answer}</p>
          <div className={s.st_meta}>
            {yearMonth(p.date)}
            {p.date.includes("진행") ? " — 진행 중" : ""}
            {host ? ` · ${host}` : " · 사내 전용"}
          </div>
          <a href={`/project/${p.id}`} onClick={(e) => open(e, p.id)} className={s.st_more}>
            프로젝트 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   나머지 프로젝트 — 한 줄 목록
   스크롤하면 줄이 그어지며 나타나고, 마우스를 올리면 화면 미리보기가 커서를 따라온다
   ──────────────────────────────────────────────────────────── */
function ProjectIndex({ list, startNo, desktop }: { list: Project[]; startNo: number; desktop: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);
  const open = useOpen();
  const moveTo = useRef<{ x: (v: number) => void; y: (v: number) => void } | null>(null);

  useGSAP(
    () => {
      if (previewRef.current) {
        moveTo.current = {
          x: gsap.quickTo(previewRef.current, "x", { duration: 0.5, ease: "power3.out" }),
          y: gsap.quickTo(previewRef.current, "y", { duration: 0.5, ease: "power3.out" }),
        };
      }
      if (reduceMotion()) return;
      gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 90%" } });
        tl.from(row.querySelector("[data-rule]"), { scaleX: 0, duration: 0.9, ease: "power3.inOut" }).from(
          row.querySelectorAll("[data-cell]"),
          { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.06, ease: "power3.out" },
          0.25
        );
      });
    },
    { scope: rootRef }
  );

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!desktop || !moveTo.current || !rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo.current.x(e.clientX - r.left);
    moveTo.current.y(e.clientY - r.top);
  };

  return (
    <div ref={rootRef} className={s.ix} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
      <div className={s.ix_head}>
        <span>시기</span>
        <span>프로젝트</span>
        <span>무엇을 했나</span>
        <span>역할 · 링크</span>
      </div>
      {list.map((p, i) => {
        const host = hostOf(p.demo);
        return (
          <a
            key={p.id}
            data-row
            href={`/project/${p.id}`}
            onClick={(e) => open(e, p.id)}
            onMouseEnter={() => setHover(i)}
            className={`${s.ix_row} ${hover === i ? s.ix_on : ""}`}
          >
            <i data-rule className={s.ix_rule} />
            <span data-cell className={s.ix_date}>
              {yearMonth(p.date)}
            </span>
            <span data-cell className={s.ix_name}>
              <em>{pad(startNo + i)}</em>
              {p.title}
            </span>
            <span data-cell className={s.ix_what}>
              {p.headline ?? p.description}
            </span>
            <span data-cell className={s.ix_role}>
              {p.badge}
              {host && <small>{host}</small>}
            </span>
            <span data-cell className={s.ix_arrow}>
              →
            </span>
          </a>
        );
      })}

      {desktop && (
        <div ref={previewRef} className={`${s.ix_preview} ${hover !== null ? s.ix_preview_on : ""}`} aria-hidden="true">
          {list.map((p, i) => (
            <img key={p.id} src={p.cover} alt="" className={hover === i ? s.ix_img_on : ""} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── */
export default function HomeProjects() {
  const rootRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const desktop = useMediaQuery(DESKTOP);
  useRevealUp(rootRef);

  // 섹션 제목: 스크롤에 맞춰 단어가 회색 → 검정으로 하나씩 켜진다
  useGSAP(
    () => {
      if (reduceMotion()) return;
      gsap.fromTo(
        "[data-hw]",
        { color: "#d1d6db" },
        {
          color: "#191f28",
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: headRef.current, start: "top 90%", end: "center 60%", scrub: true },
        }
      );
    },
    { scope: headRef }
  );

  const featured = projects.filter((p) => p.story);
  // 나머지는 최신순 (시작 연월 기준)
  const rest = projects.filter((p) => !p.story).sort((a, b) => yearMonth(b.date).localeCompare(yearMonth(a.date)));

  return (
    <section id="projects" ref={rootRef} className={s.projects}>
      <div ref={headRef} className={s.st_head}>
        <div className={s.eyebrow}>Projects</div>
        <h2 className={s.st_head_title}>
          {["어떤 문제를 풀었는지부터", "말씀드릴게요"].map((line, i) => (
            <span key={i} className={s.st_line}>
              {line.split(" ").map((w, j) => (
                <Fragment key={j}>
                  <span data-hw>{w}</span>{" "}
                </Fragment>
              ))}
            </span>
          ))}
        </h2>
        <p className={s.sub}>대표작 두 개는 문제부터, 나머지는 한 줄로 정리했어요.</p>
      </div>

      {featured.map((p, i) => (
        <FeatureStory key={p.id} p={p} no={i + 1} desktop={desktop} />
      ))}

      <div className={s.ix_wrap}>
        <div data-up className={s.ix_title}>
          <h3>그 밖에 만든 서비스</h3>
          <p>6일 만에 출시한 사이트부터 지금도 운영 중인 LMS까지, 기획 · 디자인과 함께 만들었습니다.</p>
        </div>
        <ProjectIndex list={rest} startNo={featured.length + 1} desktop={desktop} />
      </div>
    </section>
  );
}
