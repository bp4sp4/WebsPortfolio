"use client";

import { useRef, useState } from "react";
import { FROM_HOME_KEY } from "@/lib/nav";
import { useRouter } from "next/navigation";
import { projects } from "@/data/data";
import { gsap, useGSAP } from "@/lib/gsap";
import { useMediaQuery } from "@/lib/useMediaQuery";
import s from "@/styles/motion.module.css";

const DESKTOP = "(min-width: 900px)";
const pad = (n: number) => String(n).padStart(2, "0");

const hostOf = (url: string | undefined, fallback: string) => {
  if (!url) return fallback;
  try {
    return new URL(url).hostname;
  } catch {
    return fallback;
  }
};

/**
 * 프로젝트 쇼케이스.
 * 데스크톱: 스테이지를 화면에 고정(pin)하고, 스크롤 진행도에 따라
 *           이전 프로젝트가 뒤로 물러나며 다음 프로젝트가 아래에서 올라온다.
 * 모바일:   세로 카드 목록 + 진입 페이드.
 */
export default function Showcase() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const isDesktop = useMediaQuery(DESKTOP);
  const n = projects.length;

  /* 상세로 이동. 홈에서 출발했다는 표시를 남겨 상세의 뒤로가기가 외부 사이트로 빠지지 않게 한다 */
  const go = (id: string) => {
    try {
      sessionStorage.setItem(FROM_HOME_KEY, "1");
    } catch {}
    router.push(`/project/${id}`);
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!isDesktop) {
        gsap.utils.toArray<HTMLElement>("[data-mcard]").forEach((card) => {
          gsap.from(card, {
            y: 40,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          });
        });
        return;
      }

      const slides = gsap.utils.toArray<HTMLElement>("[data-slide]");
      const metas = gsap.utils.toArray<HTMLElement>("[data-meta]");
      const fill = section.querySelector<HTMLElement>("[data-fill]");
      if (slides.length < 2) return;

      // filter는 숫자로 시작해야 부드럽게 보간된다 ("none" → brightness 는 0에서 튄다)
      gsap.set(slides, { filter: "brightness(1)", scale: 1, yPercent: 0 });
      gsap.set(slides.slice(1), { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(metas.slice(1), { autoAlpha: 0, y: 28 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${(n - 1) * window.innerHeight}`,
          pin: pinRef.current,
          pinSpacing: true,
          scrub: reduce ? false : 0.8,
          // 스크롤이 멈추면 가장 가까운 프로젝트로 정렬. inertia를 끄지 않으면
          // 빠른 플릭 한 번에 관성 예측으로 끝까지 튀어버린다.
          snap: reduce
            ? undefined
            : {
                snapTo: 1 / (n - 1),
                duration: { min: 0.2, max: 0.6 },
                delay: 0.08,
                ease: "power1.inOut",
                inertia: false,
              },
          onUpdate: (self) => {
            setActive(Math.round(self.progress * (n - 1)));
            if (fill) gsap.set(fill, { scaleX: self.progress });
          },
        },
      });

      for (let i = 1; i < n; i++) {
        const at = i - 1;
        tl.to(slides[i - 1], { scale: 0.94, yPercent: -4, filter: "brightness(0.45)", duration: 1 }, at)
          .to(slides[i], { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }, at)
          .to(metas[i - 1], { autoAlpha: 0, y: -28, duration: 0.4 }, at)
          .to(metas[i], { autoAlpha: 1, y: 0, duration: 0.6 }, at + 0.4);
      }
    },
    { scope: sectionRef, dependencies: [isDesktop, n], revertOnUpdate: true }
  );

  if (!isDesktop) {
    return (
      <section id="projects" ref={sectionRef} className={s.sc}>
        <div className={s.sc_mhead}>
          <div className={s.sc_label}>WORKS</div>
          <h2 className={s.sc_h1}>Projects</h2>
        </div>
        <div className={s.sc_mlist}>
          {projects.map((p, i) => (
            <a
              key={p.id}
              data-mcard
              href={`/project/${p.id}`}
              className={s.sc_mcard}
              onClick={(e) => {
                e.preventDefault();
                go(p.id);
              }}
            >
              <img src={p.image} alt={p.title} loading="lazy" className={s.sc_mimg} />
              <div className={s.sc_mmeta}>
                <span className={s.sc_meta_index}>{pad(i + 1)}</span>
                <div className={s.sc_mtitle}>{p.title}</div>
                <div className={s.sc_meta_date}>{p.date}</div>
                <p className={s.sc_meta_desc}>{p.description}</p>
                <div className={s.sc_tags}>
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t} className={s.sc_tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" ref={sectionRef} className={s.sc}>
      <div ref={pinRef} className={s.sc_pin}>
        <div className={s.sc_head}>
          <div>
            <div className={s.sc_label}>WORKS</div>
            <h2 className={s.sc_h1}>Projects</h2>
          </div>
          <div className={s.sc_hint}>scroll to explore</div>
        </div>

        <div className={s.sc_grid}>
          {/* left: stacked slides */}
          <div className={s.sc_stage}>
            {projects.map((p, i) => (
              <div
                key={p.id}
                data-slide
               
               
                className={s.sc_slide}
                onClick={() => go(p.id)}
                role="link"
                tabIndex={-1}
              >
                <div className={s.sc_bar_top}>
                  <span className={`${s.sc_dot} ${s.sc_dot_red}`} />
                  <span className={`${s.sc_dot} ${s.sc_dot_yellow}`} />
                  <span className={`${s.sc_dot} ${s.sc_dot_green}`} />
                  <span className={s.sc_url}>{hostOf(p.demo, p.title)}</span>
                </div>
                <img
                  src={p.image}
                  alt={p.title}
                  className={s.sc_img}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <span className={s.sc_num}>{pad(i + 1)}</span>
              </div>
            ))}
          </div>

          {/* right: counter + meta */}
          <div className={s.sc_left}>
            <div className={s.sc_counter}>
              <span className={s.sc_counter_now}>{pad(active + 1)}</span>
              <div className={s.sc_bar}>
                <div data-fill className={s.sc_bar_fill} />
              </div>
              <span>{pad(n)}</span>
            </div>

            <div className={s.sc_metas}>
              {projects.map((p) => (
                <div key={p.id} data-meta className={s.sc_meta}>
                  <div className={s.sc_meta_title}>{p.title}</div>
                  <div className={s.sc_meta_date}>{p.date}</div>
                  <p className={s.sc_meta_desc}>{p.description}</p>
                  <div className={s.sc_tags}>
                    {p.tags.slice(0, 5).map((t) => (
                      <span key={t} className={s.sc_tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/project/${p.id}`}
                    className={s.sc_link}
                    onClick={(e) => {
                      e.preventDefault();
                      go(p.id);
                    }}
                  >
                    View project <span aria-hidden>→</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
