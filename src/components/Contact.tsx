"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { contactInfo, projects } from "@/data/data";
import { developerInfo, experiences, skills } from "@/data/profile";
import styles from "@/styles/main.module.css";

const EMAIL = contactInfo.email;
const GITHUB_USER = "bp4sp4";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

type Line = {
  k: "out" | "err" | "cmd" | "link" | "blank";
  t?: string;
  href?: string;
  /** 보조 텍스트(섹션 헤더 등)는 더 어둡게 */
  dim?: boolean;
  /** 같은 탭에서 여는 내부 링크 */
  internal?: boolean;
};

/** neofetch 스타일 프로필 카드 — 왼쪽 로고 블록 + 오른쪽 정보 */
function neofetchLines(): Line[] {
  const current = experiences.find((e) => e.current);
  const logo = [
    "  ████████  ",
    "  ██    ██  ",
    "  ██ ██ ██  ",
    "  ██    ██  ",
    "  ████████  ",
    "            ",
    "            ",
    "            ",
  ];
  const info = [
    `${developerInfo.name}@portfolio`,
    "─".repeat(28),
    "Role      Web Developer · QA 출신 풀스택",
    `Company   ${current ? current.info : "-"}`,
    // 한 줄이 길면 줄바꿈되어 로고 정렬이 깨진다 → 핵심만 짧게
    "Stack     React · Next.js · TypeScript · Supabase · GSAP",
    `Projects  ${projects.length}개 · 최근: ${projects.slice(0, 2).map((p) => p.title).join(", ")}`,
    "Location  Seoul, KR",
    `Contact   ${EMAIL} · github.com/${GITHUB_USER}`,
  ];
  return logo.map((l, i) => ({ k: "out" as const, t: `${l}  ${info[i] ?? ""}`, dim: i === 1 }));
}

const WELCOME: Line[] = [
  { k: "out", t: "QA로 시작해 풀스택까지, 사용자가 겪을 일을 먼저 겪어보는 웹 개발자 박상훈입니다." },
  { k: "out", t: "명령어를 입력하거나 아래 칩을 눌러보세요. 'help'로 시작." },
  { k: "blank" },
];

export default function Contact() {
  const [history, setHistory] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  // 입력한 명령 기록 (history 명령용)
  const [cmdLog, setCmdLog] = useState<string[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const run = (raw: string) => {
    const c = raw.trim().toLowerCase().replace(/\s+/g, " ");
    if (c) setCmdLog((log) => [...log, raw.trim()]);
    if (c === "clear") {
      setHistory(WELCOME);
      setInput("");
      return;
    }
    const echo: Line = { k: "cmd", t: raw };
    let out: Line[];
    switch (c) {
      case "":
        out = [];
        break;
      case "help":
      case "ls":
        out = [
          { k: "out", t: "AVAILABLE COMMANDS", dim: true },
          { k: "out", t: "  whoami   — 한 줄 소개" },
          { k: "out", t: "  email    — 이메일 주소" },
          { k: "out", t: "  github   — 깃허브 링크" },
          { k: "out", t: "  about    — 나에 대해" },
          { k: "out", t: "  projects — 프로젝트 목록" },
          { k: "out", t: "  stack    — 기술 스택 요약" },
          { k: "out", t: "  neofetch — 프로필 카드" },
          { k: "out", t: "  history  — 입력한 명령 기록" },
          { k: "out", t: "  hello    — 메일 보내기" },
          { k: "out", t: "  clear    — 화면 지우기" },
          { k: "out", t: "  (숨은 명령이 하나 더 있어요. sudo 로 시작합니다.)", dim: true },
        ];
        break;
      case "projects":
        out = [
          { k: "out", t: `PROJECTS (${projects.length})`, dim: true },
          ...projects.flatMap((p, i) => [
            {
              k: "link" as const,
              t: `  ${String(i + 1).padStart(2, "0")}  ${p.title}`,
              href: `/project/${p.id}`,
              internal: true,
            },
            { k: "out" as const, t: `      ${p.date} · ${p.tags.slice(0, 3).join(" · ")}`, dim: true },
          ]),
        ];
        break;
      case "stack":
        out = [
          { k: "out", t: "TECH STACK", dim: true },
          // 한글은 모노스페이스에서 폭이 달라 padEnd 정렬이 어긋난다 → 제목 줄 / 태그 줄로 분리
          ...skills.flatMap((sk) => [
            { k: "out" as const, t: `  # ${sk.title}`, dim: true },
            { k: "out" as const, t: `    ${sk.tags.join(" · ")}` },
          ]),
        ];
        break;
      case "neofetch":
        out = neofetchLines();
        break;
      case "history":
        out = cmdLog.length
          ? cmdLog.map((h, i) => ({ k: "out" as const, t: `  ${String(i + 1).padStart(3, " ")}  ${h}` }))
          : [{ k: "out", t: "  (아직 입력한 명령이 없어요)", dim: true }];
        break;
      case "sudo":
      case "sudo hire":
      case "sudo hire sanghun":
      case "sudo hire 박상훈":
        out = [
          { k: "out", t: "[sudo] password for recruiter: ••••••••", dim: true },
          { k: "out", t: "권한 확인 완료. 채용 프로세스를 시작합니다…" },
          { k: "out", t: "  ✔ 포트폴리오 검토" },
          { k: "out", t: "  ✔ 기술 스택 확인" },
          { k: "out", t: "  ➜ 다음 단계: 커피챗 또는 면접 일정 잡기" },
          {
            k: "link",
            t: `→ ${EMAIL} 으로 면접 제안 보내기`,
            href: `mailto:${EMAIL}?subject=[면접 제안] 박상훈님께`,
          },
        ];
        break;
      case "rm -rf /":
      case "rm -rf":
        out = [{ k: "err", t: "permission denied: 이 포트폴리오는 지울 수 없습니다 😅" }];
        break;
      case "whoami":
        out = [{ k: "out", t: "박상훈 — Web Developer · QA 출신 풀스택 · Seoul, KR" }];
        break;
      case "email":
        out = [{ k: "link", t: EMAIL, href: `mailto:${EMAIL}` }];
        break;
      case "github":
        out = [{ k: "link", t: `github.com/${GITHUB_USER}`, href: GITHUB_URL }];
        break;
      case "about":
        out = contactInfo.description.map((t) => ({ k: "out" as const, t }));
        break;
      case "hello":
        out = [
          { k: "out", t: "메일 작성 화면을 엽니다…" },
          {
            k: "link",
            t: `→ ${EMAIL} 으로 메일 보내기`,
            href: `mailto:${EMAIL}?subject=안녕하세요 박상훈님`,
          },
        ];
        break;
      default:
        out = [{ k: "err", t: `command not found: ${c}  —  'help' 를 입력해보세요.` }];
    }
    setHistory((h) => [...h, echo, ...out, { k: "blank" }]);
    setInput("");
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") run(input);
  };

  const chips = useMemo(() => ["help", "whoami", "projects", "stack", "neofetch", "hello"], []);

  return (
    <section id="contact" className={styles.term_contact}>
      <div className={styles.term_scanlines} />

      <div className={styles.term_ct_inner}>
        {/* heading */}
        <div className={styles.term_ct_head}>
          <div className={styles.term_ct_label}>CONTACT</div>
          <h2 className={styles.term_ct_h1}>
            함께 <span className={styles.term_accent}>일해요</span>
          </h2>
          <p className={styles.term_ct_sub}>
            사용자 입장에서 먼저 테스트하는 개발자를 찾으신다면, 아래 터미널에 명령을 입력해보세요.
          </p>
        </div>

        {/* terminal */}
        <div className={styles.term_ct_terminal}>
          <div className={styles.term_ct_bar}>
            <span className={`${styles.term_mac_dot} ${styles.term_mac_dot_red}`} />
            <span className={`${styles.term_mac_dot} ${styles.term_mac_dot_yellow}`} />
            <span className={`${styles.term_mac_dot} ${styles.term_mac_dot_green}`} />
            <span className={styles.term_ct_bar_title}>contact.sh — zsh — 82×24</span>
          </div>

          <div
            ref={bodyRef}
            className={styles.term_ct_body}
            data-lenis-prevent
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((l, i) => {
              if (l.k === "blank") return <div key={i} className={styles.term_ct_blank} />;
              if (l.k === "cmd")
                return (
                  <div key={i}>
                    <span className={styles.term_arrow}>➜</span>{" "}
                    <span className={styles.term_path}>~/contact</span>{" "}
                    <span className={styles.term_ct_cmd_text}>{l.t}</span>
                  </div>
                );
              if (l.k === "link")
                return (
                  <div key={i}>
                    <a
                      href={l.href}
                      target={l.internal ? undefined : "_blank"}
                      rel={l.internal ? undefined : "noreferrer"}
                      className={styles.term_ct_link}
                    >
                      {l.t}
                    </a>
                  </div>
                );
              return (
                <div
                  key={i}
                  className={`${styles.term_ct_out} ${
                    l.k === "err"
                      ? styles.term_ct_out_err
                      : l.dim
                        ? styles.term_ct_out_dim
                        : styles.term_ct_out_std
                  }`}
                >
                  {l.t}
                </div>
              );
            })}

            {/* live prompt */}
            <div className={styles.term_ct_prompt}>
              <span className={styles.term_arrow}>➜</span>
              <span className={styles.term_path}>~/contact</span>
              <input
                id="contact-cmd"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="type a command… (help)"
                autoComplete="off"
                spellCheck={false}
                className={styles.term_ct_input}
              />
            </div>
          </div>
        </div>

        {/* quick command chips */}
        <div className={styles.term_ct_chips}>
          {chips.map((cmd) => (
            <button key={cmd} onClick={() => run(cmd)} className={styles.term_ct_chip}>
              <span className={styles.term_ct_chip_dollar}>$</span> {cmd}
            </button>
          ))}
        </div>

        {/* contact cards */}
        <div className={styles.term_ct_cards}>
          <a href={`mailto:${EMAIL}`} className={styles.term_ct_card}>
            <span className={styles.term_ct_card_icon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span className={styles.term_ct_card_body}>
              <span className={styles.term_ct_card_label}>EMAIL</span>
              <span className={styles.term_ct_card_value}>{EMAIL}</span>
            </span>
            <span className={styles.term_ct_card_arrow}>→</span>
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className={styles.term_ct_card}
          >
            <span className={styles.term_ct_card_icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 2.5-.34c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
              </svg>
            </span>
            <span className={styles.term_ct_card_body}>
              <span className={styles.term_ct_card_label}>GITHUB</span>
              <span className={styles.term_ct_card_value}>
                github.com/{GITHUB_USER}
              </span>
            </span>
            <span className={styles.term_ct_card_arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
