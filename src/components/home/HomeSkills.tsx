"use client";

import { useRef } from "react";
import { projects } from "@/data/data";
import { stack } from "@/data/profile";
import { gsap, useGSAP } from "@/lib/gsap";
import s from "@/styles/home.module.css";
import { reduceMotion, useRevealUp } from "./useHomeMotion";

/** 매번 같은 흩어짐 배치를 만들기 위한 작은 시드 난수 (새로고침해도 모양이 같다) */
function seeded(seed: number) {
  let t = seed;
  return () => {
    t = (t * 9301 + 49297) % 233280;
    return t / 233280;
  };
}

/**
 * 기술 스택 — "흩어진 기술을 모아 하나의 서비스로".
 * 데스크톱: 화면을 고정하고, 처음엔 기술 칩이 화면 곳곳에 흩어져(기울고 흐릿하게) 있다가
 *           스크롤하면 각자 카드 안 제자리로 날아와 모인다. 이어서 카드 배경 · 그룹 제목 · 사용 프로젝트가 켜진다.
 * 모바일:   고정 없이 카드가 차례로 떠오른다.
 */
export default function HomeSkills() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  useRevealUp(rootRef);

  useGSAP(
    () => {
      if (reduceMotion()) return;
      const q = gsap.utils.selector(rootRef);
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px) and (min-height: 700px)", () => {
        const stage = stageRef.current!;
        const chips = q("[data-chip]") as HTMLElement[];
        const rand = seeded(7);
        // 칩마다 흩어질 화면 위치(뷰포트 비율)와 기울기
        const spots = chips.map(() => ({ px: 0.06 + rand() * 0.88, py: 0.34 + rand() * 0.6, rot: (rand() - 0.5) * 50 }));

        // 제자리 기준으로 "흩어진 위치까지의 거리"를 계산 (리사이즈 시 다시 계산).
        // 다시 잴 때는 칩이 이미 옮겨져 있으므로 현재 이동량을 빼서 제자리 중심을 구한다
        // (회전 · 확대는 중심 기준이라 중심 좌표에 영향이 없다)
        const offset = (i: number, axis: "x" | "y") => {
          const sr = stage.getBoundingClientRect();
          const r = chips[i].getBoundingClientRect();
          const moved = Number(gsap.getProperty(chips[i], axis)) || 0;
          return axis === "x"
            ? spots[i].px * sr.width - (r.left - sr.left + r.width / 2 - moved)
            : spots[i].py * sr.height - (r.top - sr.top + r.height / 2 - moved);
        };

        const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "+=420%",
              pin: stage,
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          });
        tl.fromTo(
            chips,
            {
              x: (i) => offset(i, "x"),
              y: (i) => offset(i, "y"),
              rotation: (i) => spots[i].rot,
              scale: 1.25,
              opacity: 0.55,
              filter: "blur(3px)",
            },
            {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              duration: 1,
              ease: "power2.inOut",
              stagger: { each: 0.015, from: "random" },
            },
            0
          )
          .fromTo(q("[data-card]"), { "--card-a": 0 }, { "--card-a": 1, duration: 0.4, stagger: 0.05 }, 0.75)
          .fromTo(q("[data-sk-label]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.05 }, 0.85)
          // ③ 다 모인 카드가 가운데로 접혀 들어가고 → 그 자리에 실제 서비스 화면(브라우저 창)이 커진다
          .to(q("[data-card]"), { scale: 0.6, autoAlpha: 0, duration: 0.5, ease: "power2.in", stagger: { each: 0.04, from: "center" } }, 1.55)
          .fromTo(q("[data-product]"), { scale: 0.55, autoAlpha: 0, y: 60 }, { scale: 1, autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 1.85)
          .fromTo(q("[data-pcap]"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 2.2);

        // ④ 스크롤을 이어가면 창 안의 화면과 이름이 서비스별로 바뀐다
        const shots = q("[data-pshot]");
        const names = q("[data-pname]");
        shots.forEach((_, i) => {
          if (i === 0) return;
          // 서비스마다 0.75씩 머문다. 새 화면은 섞이지 않고 아래에서 쓸어 올라오며 덮는다
          const at = 2.7 + (i - 1) * 0.75;
          tl.fromTo(
            shots[i],
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 0.3, ease: "power2.inOut" },
            at
          )
            .fromTo(names[i - 1], { autoAlpha: 1, yPercent: 0 }, { autoAlpha: 0, yPercent: -100, duration: 0.2 }, at)
            .fromTo(names[i], { autoAlpha: 0, yPercent: 100 }, { autoAlpha: 1, yPercent: 0, duration: 0.2 }, at + 0.1);
        });
        tl.to({}, { duration: 0.8 }); // 마지막 서비스도 충분히 보이고 끝나게
      });
    },
    { scope: rootRef }
  );

  return (
    <section id="skills" ref={rootRef} className={s.skills}>
      <div ref={stageRef} className={s.sk_stage}>
        <div data-up className={s.head}>
          <div className={s.eyebrow}>Skills</div>
          <h2 className={s.title}>
            흩어진 기술을 모아
            <br />
            하나의 서비스로 만듭니다
          </h2>
        </div>

        <div className={s.sk_area}>
        <div className={s.sk_grid}>
          {stack.map((g, i) => (
            <div key={g.group} data-card className={`${s.sk_card} ${i === 0 ? s.sk_card_main : ""}`}>
              <h3 data-sk-label className={s.sk_group}>
                {g.group}
              </h3>
              <ul className={s.sk_items}>
                {g.items.map((item) => (
                  <li key={item} data-chip>
                    {item}
                  </li>
                ))}
              </ul>
              <p data-sk-label className={s.sk_where}>
                {g.where}
              </p>
            </div>
          ))}
        </div>

        {/* 카드가 접힌 뒤 나타나는 결과물: 이 기술로 만든 실제 서비스 화면 (데스크톱 전용) */}
        <div className={s.sk_product} aria-hidden="true">
          <div data-product className={s.sk_window}>
            <div className={s.sk_bar}>
              <i />
              <i />
              <i />
            </div>
            <div className={s.sk_view}>
              {projects.map((p, i) => (
                <img key={p.id} data-pshot src={p.story?.web ?? p.cover} alt="" style={i === 0 ? undefined : { clipPath: "inset(100% 0% 0% 0%)" }} />
              ))}
            </div>
          </div>
          <p data-pcap className={s.sk_pcap}>
            이 기술로 만든 서비스 ·{" "}
            <span className={s.sk_names}>
              {projects.map((p, i) => (
                <b key={p.id} data-pname style={i === 0 ? undefined : { opacity: 0 }}>
                  {p.title}
                </b>
              ))}
            </span>
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
