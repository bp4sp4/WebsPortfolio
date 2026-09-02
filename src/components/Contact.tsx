"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { contactInfo } from "@/data/data";
import styles from "@/styles/main.module.css";

const EMAIL = contactInfo.email;
const GITHUB_USER = "bp4sp4";
const GITHUB_URL = `https://github.com/${GITHUB_USER}`;

type Line = {
  k: "out" | "err" | "cmd" | "link" | "blank";
  t?: string;
  href?: string;
  c?: string;
};

const WELCOME: Line[] = [
  { k: "out", t: "프론트엔드·풀스택·사내 ERP까지, 다양한 실무 경험을 쌓아온 개발자 박상훈입니다." },
  { k: "out", t: "명령어를 입력하거나 아래 칩을 눌러보세요. 'help'로 시작." },
  { k: "blank" },
];

export default function Contact() {
  const [history, setHistory] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history]);

  const run = (raw: string) => {
    const c = raw.trim().toLowerCase();
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
          { k: "out", t: "AVAILABLE COMMANDS", c: "#5e5e5e" },
          { k: "out", t: "  whoami   — 한 줄 소개" },
          { k: "out", t: "  email    — 이메일 주소" },
          { k: "out", t: "  github   — 깃허브 링크" },
          { k: "out", t: "  about    — 나에 대해" },
          { k: "out", t: "  hello    — 메일 보내기" },
          { k: "out", t: "  clear    — 화면 지우기" },
        ];
        break;
      case "whoami":
        out = [{ k: "out", t: "박상훈 — Web Developer · QA · Seoul, KR" }];
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

  const chips = useMemo(() => ["help", "whoami", "email", "github", "hello"], []);
  const colorFor = (k: Line["k"]) => (k === "err" ? "#e8734f" : "#a8a8a8");

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
            유능한 웹개발자 · QA를 찾고 계신가요? 아래 터미널에 명령을 입력해보세요.
          </p>
        </div>

        {/* terminal */}
        <div className={styles.term_ct_terminal}>
          <div className={styles.term_ct_bar}>
            <span className={styles.term_mac_dot} style={{ background: "#ff5f56" }} />
            <span className={styles.term_mac_dot} style={{ background: "#ffbd2e" }} />
            <span className={styles.term_mac_dot} style={{ background: "#27c93f" }} />
            <span className={styles.term_ct_bar_title}>contact.sh — zsh — 82×24</span>
          </div>

          <div
            ref={bodyRef}
            className={styles.term_ct_body}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((l, i) => {
              if (l.k === "blank") return <div key={i} style={{ height: 9 }} />;
              if (l.k === "cmd")
                return (
                  <div key={i}>
                    <span className={styles.term_arrow}>➜</span>{" "}
                    <span className={styles.term_path}>~/contact</span>{" "}
                    <span style={{ color: "#f4f4f2" }}>{l.t}</span>
                  </div>
                );
              if (l.k === "link")
                return (
                  <div key={i}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.term_ct_link}
                    >
                      {l.t}
                    </a>
                  </div>
                );
              return (
                <div
                  key={i}
                  className={styles.term_ct_out}
                  style={{ color: l.c || colorFor(l.k) }}
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
              <span style={{ color: "#5e5e5e" }}>$</span> {cmd}
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
