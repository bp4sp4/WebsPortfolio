"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import { projectDetails, projectIds, projects } from "@/data/data";
import { FROM_HOME_KEY } from "@/lib/nav";
import type { ProjectDetailType } from "@/data/types";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";
import s from "./detail.module.css";

/* ────────────────────────────────────────────────────────────
   helpers
   ──────────────────────────────────────────────────────────── */
const pad2 = (n: number) => String(n).padStart(2, "0");
const isLink = (u?: string): u is string => !!u && u !== "#";
const hostOf = (u?: string) => {
  if (!isLink(u)) return null;
  try {
    const host = new URL(u).hostname.replace(/^www\./, "");
    // 한글 도메인은 퓨니코드(xn--…)로 나와 읽기 어려우므로 프로젝트 이름을 대신 쓴다
    return host.startsWith("xn--") ? null : host;
  } catch {
    return null;
  }
};
/** "…입니다. 나머지" → ["…입니다.", "나머지"] */
const splitFirstSentence = (text: string): [string, string] => {
  const m = /^([\s\S]*?(?:다\.|\.))\s+([\s\S]+)$/.exec(text.trim());
  return m ? [m[1], m[2]] : [text, ""];
};
/** 갤러리 이미지를 섹션 수만큼 앞에서부터 고르게 나눈다 */
const distribute = <T,>(items: T[], buckets: number): T[][] => {
  const out: T[][] = Array.from({ length: buckets }, () => []);
  if (!buckets) return out;
  const base = Math.floor(items.length / buckets);
  let rest = items.length - base * buckets;
  let cursor = 0;
  for (let b = 0; b < buckets; b++) {
    const take = base + (rest > 0 ? 1 : 0);
    if (rest > 0) rest--;
    out[b] = items.slice(cursor, cursor + take);
    cursor += take;
  }
  return out;
};

function MacBar({ label, tag }: { label: string; tag?: string }) {
  return (
    <div className={s.macbar}>
      <span className={`${s.dot} ${s.dot_r}`} />
      <span className={`${s.dot} ${s.dot_y}`} />
      <span className={`${s.dot} ${s.dot_g}`} />
      <span className={s.macbar_label}>{label}</span>
      {tag && <span className={s.macbar_tag}>{tag}</span>}
    </div>
  );
}

/** 코드/프롬프트 스니펫: 기본은 접힌 상태, 버튼으로 전체 보기 */
function Snippet({ title, code, note }: { title: string; code: string; note?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <figure className={s.snip} data-reveal>
      <div className={`${s.snip_frame} ${open ? s.snip_open : ""}`}>
        <MacBar label={title} />
        <pre className={s.snip_pre}>
          <code>{code}</code>
        </pre>
        {!open && <div className={s.snip_fade} aria-hidden />}
        <button type="button" className={s.snip_toggle} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? "접기 ↑" : "전체 보기 ↓"}
        </button>
      </div>
      {note && <figcaption className={s.snip_note}>{note}</figcaption>}
    </figure>
  );
}

/** 섹션 머리: 작은 라벨 → 헤드라인 → 문단 */
/** "**텍스트**" 를 강조 <b> 로 렌더링 (diff after 문구용) */
function Emph({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((p, i) => (i % 2 === 1 ? <b key={i}>{p}</b> : p))}
    </>
  );
}

function SecHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className={s.sec_head}>
      <p className={s.eyebrow} data-reveal>
        {eyebrow}
      </p>
      <h2 className={s.h2} data-title>
        {title}
      </h2>
      {children}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   page
   ──────────────────────────────────────────────────────────── */
export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const lenis = useLenis();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const data: ProjectDetailType | undefined = id ? projectDetails[id] : undefined;
  const meta = projects.find((p) => p.id === id);
  const idx = id ? projectIds.indexOf(id) : -1;
  const total = projectIds.length;
  const next = idx >= 0 ? projects.find((p) => p.id === projectIds[(idx + 1) % total]) : undefined;

  const rootRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [tab, setTab] = useState("");

  // 프로젝트가 바뀌면 맨 위로 + 상태 초기화
  useEffect(() => {
    setLightbox(null);
    setTab("");
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [id, lenis]);

  // 라이트박스: 스크롤 잠금 + ESC
  useEffect(() => {
    if (!lightbox) return;
    lenis?.stop();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, lenis]);

  /* 홈(Showcase)에서 들어왔으면 history.back()으로 슬라이드 위치까지 복원,
     링크로 바로 진입했으면 외부 사이트로 빠지지 않도록 홈 프로젝트 섹션으로 이동 */
  const goBack = () => {
    let fromHome = false;
    try {
      fromHome = sessionStorage.getItem(FROM_HOME_KEY) === "1";
    } catch {}
    if (fromHome && window.history.length > 1) router.back();
    else router.push("/#projects");
  };

  /* ── GSAP ─────────────────────────────────── */
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || !data) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const prog = root.querySelector("[data-progress]");
      if (prog) {
        gsap.set(prog, { scaleX: 0 });
        ScrollTrigger.create({ start: 0, end: "max", onUpdate: (self) => gsap.set(prog, { scaleX: self.progress }) });
      }

      if (reduce) {
        gsap.set("[data-reveal], [data-title]", { autoAlpha: 1 });
        return;
      }

      // 제목·헤드라인: 줄 단위 마스크 리빌
      const splits: SplitText[] = [];
      root.querySelectorAll<HTMLElement>("[data-title]").forEach((el) => {
        const sp = new SplitText(el, { type: "lines", mask: "lines" });
        splits.push(sp);
        gsap.from(sp.lines, {
          yPercent: 110,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // 일반 요소 리빌
      gsap.set("[data-reveal]", { autoAlpha: 0, y: 26 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.08, overwrite: true }),
      });

      // 히어로 메인 화면: 살짝 떠오르며 지나감
      const hero = root.querySelector("[data-hero]");
      if (hero) {
        gsap.fromTo(
          "[data-mock]",
          { y: 80 },
          { y: -40, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } }
        );
      }

      // 숫자 카운트업
      root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const raw = el.dataset.count || "";
        const m = /^([0-9.]+)(.*)$/.exec(raw.replace(/,/g, ""));
        if (!m) return;
        const target = parseFloat(m[1]);
        const suffix = m[2];
        const decimals = (m[1].split(".")[1] || "").length;
        const hasCommas = /\d,\d/.test(raw);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            const v = decimals ? obj.v.toFixed(decimals) : String(Math.round(obj.v));
            el.textContent = (hasCommas ? Number(v).toLocaleString("en-US") : v) + suffix;
          },
        });
      });

      return () => splits.forEach((sp) => sp.revert());
    },
    { scope: rootRef, dependencies: [id], revertOnUpdate: true }
  );

  /* ── not found ────────────────────────────── */
  if (!data) {
    return (
      <div className={s.notfound}>
        <p className={s.eyebrow}>404</p>
        <h1>프로젝트를 찾을 수 없습니다.</h1>
        <Link href="/#projects" className={s.pill}>
          ← 프로젝트 목록으로
        </Link>
      </div>
    );
  }

  /* ── 데이터 가공 ──────────────────────────── */
  const demo = data.links.demo;
  const host = hostOf(demo);
  const label = host ?? data.title;
  const eyebrow = (host ?? id ?? "").toUpperCase();
  const typeLabel = meta?.type === "personal" ? "개인" : "회사";
  const stack = data.technologies[0]?.items.slice(0, 3).map((it) => it.name).join(" · ");
  const [firstSentence, restDesc] = splitFirstSentence(meta?.description ?? data.title);
  // OVERVIEW 제목: 짧은 headline 이 있으면 그것, 없으면 설명문 첫 문장
  const headline = meta?.headline ?? firstSentence;
  const heroSub = restDesc || data.tags.slice(0, 4).join(" · ");

  const notices = data.overview.filter((p) => p.startsWith("⚠️")).map((p) => p.replace(/^⚠️\s*/, ""));
  const overviewParas = data.overview.filter((p) => !p.startsWith("⚠️"));

  const gallery = data.images.filter((img) => img !== data.mainImage);
  const sections = data.goals;
  // 섹션에 명시된 화면(shots)은 그 자리에 고정하고, 나머지 화면만 비어 있는 섹션에 분배
  const pinned = new Map<string, string | undefined>();
  const captions = new Map<string, string>();
  const collect = (sh: { src: string; tag?: string; caption?: string }) => {
    pinned.set(sh.src, sh.tag);
    if (sh.caption) captions.set(sh.src, sh.caption);
  };
  sections.forEach((g) => {
    g.shots?.forEach(collect);
    g.groups?.forEach((grp) => grp.shots.forEach(collect));
  });
  const freeGallery = gallery.filter((img) => !pinned.has(img));
  const freeIdx = sections.map((g, i) => (g.shots?.length || g.groups?.length ? -1 : i)).filter((i) => i >= 0);
  const distributed = distribute(freeGallery, freeIdx.length);
  const shotsPerSection: string[][] = sections.map((g) => g.shots?.map((sh) => sh.src) ?? []);
  freeIdx.forEach((si, k) => (shotsPerSection[si] = distributed[k]));
  const tagOf = (img: string) => pinned.get(img);
  const captionOf = (img: string) => captions.get(img);
  const allShots = [data.mainImage, ...gallery];
  const shotNo = (img: string) => pad2(allShots.indexOf(img) + 1);

  const features = data.keyFeatures ?? [];
  const categories = Array.from(new Set(features.map((f) => f.category).filter(Boolean))) as string[];
  const currentTab = tab || categories[0] || "";
  const shownFeatures = categories.length ? features.filter((f) => f.category === currentTab) : features;

  let secNo = sections.length;

  /* 웹 화면 한 장 (맥바 프레임 + 캡션) */
  const renderShot = (img: string) => (
    <figure key={img} className={s.shot} data-reveal onClick={() => setLightbox(img)}>
      <div className={s.shot_frame}>
        <MacBar label={`${label} · ${shotNo(img)}`} tag={tagOf(img)} />
        <img src={img} alt={`${data.title} 화면 ${shotNo(img)}`} className={s.shot_pic} loading="lazy" />
      </div>
      <figcaption className={`${s.caption} ${captionOf(img) ? s.caption_custom : ""}`}>
        {captionOf(img) ? (
          <>
            <span className={s.caption_no}>{shotNo(img)}</span>
            {captionOf(img)}
          </>
        ) : (
          <>
            {data.title} — 화면 {shotNo(img)} / {pad2(allShots.length)}
          </>
        )}
        {tagOf(img) && <span className={s.caption_tag}>{tagOf(img)}</span>}
      </figcaption>
    </figure>
  );

  /* 모바일 화면 한 장 (폰 프레임) */
  const renderPhone = (img: string) => (
    <figure key={img} className={s.phone} data-reveal onClick={() => setLightbox(img)}>
      <div className={s.phone_frame}>
        <img src={img} alt={`${data.title} 모바일 화면 ${shotNo(img)}`} className={s.phone_pic} loading="lazy" />
      </div>
      <figcaption className={`${s.phone_cap} ${captionOf(img) ? s.caption_custom : ""}`}>
        {captionOf(img) ? (
          <>
            <span className={s.caption_no}>{shotNo(img)}</span>
            {captionOf(img)}
          </>
        ) : (
          shotNo(img)
        )}
        {tagOf(img) && <span className={s.caption_tag}>{tagOf(img)}</span>}
      </figcaption>
    </figure>
  );

  return (
    <div ref={rootRef} className={s.root}>
      <div className={s.progress}>
        <div data-progress className={s.progress_fill} />
      </div>

      {/* 참고 사이트의 우상단 플로팅 버튼: 닫기(목록으로) */}
      <button type="button" className={s.close} onClick={goBack} aria-label="프로젝트 목록으로 돌아가기">
        <span className={s.close_x}>✕</span>
      </button>

      <main>
        {/* ── 비주얼 ── */}
        <section data-hero className={s.visual}>
          <div className={s.visual_inner}>
            <p className={s.eyebrow} data-reveal>
              {eyebrow}
            </p>
            <h1 className={s.title} data-title>
              {data.title}
            </h1>
            <p className={s.sub} data-reveal>
              {heroSub}
            </p>
            <div className={s.visual_links} data-reveal>
              {isLink(demo) && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className={s.pill}>
                  사이트 방문 ↗
                </a>
              )}
              {isLink(data.links.github) && (
                <a href={data.links.github} target="_blank" rel="noopener noreferrer" className={`${s.pill} ${s.pill_ghost}`}>
                  GitHub ↗
                </a>
              )}
              {data.links.figma && (
                <a href={data.links.figma} target="_blank" rel="noopener noreferrer" className={`${s.pill} ${s.pill_ghost}`}>
                  Figma ↗
                </a>
              )}
            </div>
          </div>
          <figure data-mock className={s.visual_img} onClick={() => setLightbox(data.mainImage)}>
            <MacBar label={label} />
            <img src={data.mainImage} alt={`${data.title} 메인 화면`} className={s.visual_pic} />
          </figure>
        </section>

        {/* ── OVERVIEW ── */}
        <section className={`${s.sec} ${s.sec_overview}`}>
          <div className={s.inner}>
            <SecHead eyebrow="OVERVIEW" title={headline}>
              {overviewParas.map((p, i) => (
                <p key={i} className={s.desc} data-reveal>
                  {p}
                </p>
              ))}
            </SecHead>
            <dl className={s.meta} data-reveal>
              <div>
                <dt>PERIOD</dt>
                <dd>{data.period}</dd>
              </div>
              <div>
                <dt>TYPE</dt>
                <dd>{typeLabel} 프로젝트</dd>
              </div>
              <div>
                <dt>ROLE</dt>
                <dd>{data.role.type}</dd>
              </div>
              {stack && (
                <div>
                  <dt>STACK</dt>
                  <dd>{stack}</dd>
                </div>
              )}
            </dl>
            {notices.map((t, i) => (
              <p key={i} className={s.notice} data-reveal>
                {t}
              </p>
            ))}
          </div>
        </section>

        {/* ── 번호 섹션: 목표 + 화면 ── */}
        {sections.map((g, i) => {
          const shots = shotsPerSection[i];
          return (
            <section key={i} className={`${s.sec} ${i % 2 === 0 ? s.sec_alt : ""}`}>
              <div className={s.inner}>
                <SecHead eyebrow={`${pad2(i + 1)} / ${pad2(sections.length)}`} title={g.title}>
                  <p className={s.desc} data-reveal>
                    {g.description}
                  </p>
                </SecHead>
                {g.snippet && <Snippet title={g.snippet.title} code={g.snippet.code} note={g.snippet.note} />}
              </div>
              {shots.length > 0 && <div className={`${s.inner} ${s.shots}`}>{shots.map(renderShot)}</div>}
              {g.groups?.map((grp) => (
                <div key={grp.title} className={`${s.inner} ${s.group}`}>
                  <div className={s.group_head} data-reveal>
                    <span className={s.group_title}>{grp.title}</span>
                    <span className={s.group_count}>{pad2(grp.shots.length)} screens</span>
                  </div>
                  {grp.layout === "mobile" ? (
                    <div className={s.mgrid}>{grp.shots.map((sh) => renderPhone(sh.src))}</div>
                  ) : (
                    <div className={s.shots}>{grp.shots.map((sh) => renderShot(sh.src))}</div>
                  )}
                </div>
              ))}
            </section>
          );
        })}

        {/* ── 핵심 기능 ── */}
        {features.length > 0 && (
          <section className={`${s.sec} ${++secNo % 2 === 1 ? s.sec_alt : ""}`}>
            <div className={s.inner}>
              <SecHead eyebrow="FEATURES" title="핵심 기능">
                <p className={s.desc} data-reveal>
                  사용자와 운영자가 실제로 매일 쓰는 기능들입니다.
                </p>
                {categories.length > 0 && (
                  <div className={s.tabs} data-reveal>
                    {categories.map((c) => (
                      <button key={c} type="button" className={`${s.tab} ${currentTab === c ? s.tab_on : ""}`} onClick={() => setTab(c)}>
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </SecHead>
              <div className={s.feats}>
                {shownFeatures.map((f, i) => (
                  <article key={f.title} className={s.feat} data-reveal>
                    <span className={s.num}>{pad2(i + 1)}</span>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                    {f.link && (
                      <a href={f.link} target="_blank" rel="noopener noreferrer" className={s.textlink}>
                        사이트 보기 ↗
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 문제와 해결 ── */}
        {data.challenges.length > 0 && (
          <section className={`${s.sec} ${++secNo % 2 === 1 ? s.sec_alt : ""}`}>
            <div className={s.inner}>
              <SecHead eyebrow="CHALLENGES" title="문제와 해결" />
              <div className={s.chals}>
                {data.challenges.map((c, i) => (
                  <div key={i} className={s.chal} data-reveal>
                    <span className={s.chal_num}>{pad2(i + 1)}</span>
                    <div className={s.chal_body}>
                      <h3>{c.title}</h3>
                      <div className={s.chal_cols}>
                        <div>
                          <span className={s.tag}>Problem</span>
                          <p>{c.challenge}</p>
                        </div>
                        <div>
                          <span className={`${s.tag} ${s.tag_on}`}>Solution</span>
                          <p>{c.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 역할과 기술 ── */}
        <section className={`${s.sec} ${++secNo % 2 === 1 ? s.sec_alt : ""}`}>
          <div className={s.inner}>
            <SecHead eyebrow="ROLE & STACK" title={data.role.type}>
              {data.role.team && (
                <p className={s.role_team} data-reveal>
                  {data.role.team}
                </p>
              )}
            </SecHead>
            <div className={s.role_grid}>
              <ul className={s.role_list}>
                {data.role.parts.map((p, i) => (
                  <li key={i} data-reveal>
                    <span className={s.num}>{pad2(i + 1)}</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className={s.tech}>
                {data.technologies.map((t) => (
                  <div key={t.category} className={s.tech_row} data-reveal>
                    <span className={s.tech_cat}>{t.category}</span>
                    <div className={s.tech_tags}>
                      {t.items.map((it) => (
                        <span key={it.name} className={s.tech_tag} title={it.description}>
                          {it.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 결과 ── */}
        {(data.outcome.length > 0 || (data.metrics && data.metrics.length > 0)) && (
          <section className={`${s.sec} ${++secNo % 2 === 1 ? s.sec_alt : ""}`}>
            <div className={s.inner}>
              <SecHead eyebrow="RESULT" title="결과와 성과">
                {data.outcome.map((p, i) => (
                  <p key={i} className={s.desc} data-reveal>
                    {p}
                  </p>
                ))}
              </SecHead>
              {/* Before → After 비교표 (changes 가 있는 프로젝트) */}
              {data.changes && data.changes.length > 0 && (
                <div className={s.cmp}>
                  <div className={s.cmp_head} data-reveal>
                    <span>Before</span>
                    <span>After</span>
                  </div>
                  {data.changes.map((c, i) => (
                    <div key={i} className={s.cmp_row} data-reveal>
                      <div className={s.cmp_before}>
                        <span className={s.cmp_key}>{c.key}</span>
                        {c.before}
                      </div>
                      <div className={s.cmp_after}>
                        <span className={s.cmp_key}>{c.key}</span>
                        <Emph text={c.after} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 숫자 타일: changes 가 없는 프로젝트만 */}
              {!(data.changes && data.changes.length > 0) && data.metrics && data.metrics.length > 0 && (
                <div className={s.stats}>
                  {data.metrics.map((m, i) => (
                    <div key={i} className={s.stat} data-reveal>
                      <div className={s.stat_value} data-count={m.value}>
                        {m.value}
                      </div>
                      <div className={s.stat_label}>{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── NEXT PROJECT ── */}
        <section className={s.next}>
          {next && (
            <Link href={`/project/${next.id}`} className={s.next_link}>
              <span className={s.next_label}>NEXT PROJECT</span>
              <span className={s.next_arrow} aria-hidden>
                ↓
              </span>
              <span className={s.next_title}>{next.title}</span>
            </Link>
          )}
          <div className={`${s.inner} ${s.next_foot}`}>
            <span className={s.crumb}>
              <span className={s.arrow}>➜</span> <span className={s.path}>~/projects</span>/{id}
              <span className={s.blink} />
            </span>
            <Link href="/#projects" className={s.pill}>
              목록으로
            </Link>
          </div>
        </section>
      </main>

      {/* ── 라이트박스 ── */}
      {lightbox && (
        <div className={s.lb} onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button type="button" className={s.lb_close} onClick={() => setLightbox(null)} aria-label="닫기">
            ✕
          </button>
          <img
            src={lightbox}
            alt={`${data.title} 확대 화면`}
            className={s.lb_pic}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
