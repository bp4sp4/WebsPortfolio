"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "@/styles/main.module.css";

interface FlipWordsProps {
  words: string[];
  interval?: number;
}

export default function FlipWords({ words, interval = 3000 }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsAnimating(false);
    }, 400);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return (
    <span className={styles.flip_words_wrapper}>
      <span
        className={`${styles.flip_word} ${isAnimating ? styles.flip_word_out : styles.flip_word_in}`}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}
