"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "@/styles/main.module.css";

interface FlipWordsProps {
  words: string[];
  interval?: number;
}

export default function FlipWords({ words, interval = 3000 }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  const next = useCallback(() => {
    setPhase("out");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setPhase("in");
    }, 600);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  const word = words[currentIndex];
  const chars = word.split("");

  return (
    <span className={styles.flip_words_wrapper}>
      <span className={phase === "out" ? styles.flip_word_exit : styles.flip_word_enter}>
        {chars.map((char, i) => (
          <span
            key={`${currentIndex}-${i}`}
            className={phase === "in" ? styles.flip_char_in : ""}
            style={{ "--char-index": i } as React.CSSProperties}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}
