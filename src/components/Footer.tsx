"use client";

import { footerInfo } from "@/data/data";
import styles from "@/styles/main.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_copyright}>{footerInfo.copyright}</div>
        <div className={styles.footer_credit}>{footerInfo.credit}</div>
      </div>
    </footer>
  );
}
