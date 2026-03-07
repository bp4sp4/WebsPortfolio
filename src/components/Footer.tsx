"use client";

import { footerInfo } from "@/data/data";
import styles from "@/styles/main.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_brand}>
          <span className={styles.footer_logo}>{footerInfo.brand}</span>
          <p className={styles.footer_question}>{footerInfo.question}</p>
        </div>
        <div className={styles.footer_links}>
          <a href={`mailto:${footerInfo.email}`} className={styles.footer_link}>
            <i className="fas fa-envelope" />
            <span>{footerInfo.email}</span>
          </a>
          <a
            href="https://github.com/bp4sp4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer_link}
          >
            <i className="fab fa-github" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className={styles.footer_divider} />

      <div className={styles.footer_bottom}>
        <div className={styles.footer_copyright}>{footerInfo.copyright}</div>
        <button
          className={styles.footer_scrolltop}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up" />
        </button>
        <div className={styles.footer_credit}>{footerInfo.credit}</div>
      </div>
    </footer>
  );
}
