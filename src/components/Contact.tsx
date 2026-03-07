"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { contactInfo } from "@/data/data";
import styles from "@/styles/main.module.css";

export default function Contact() {
  const animateRefs = useRef<(HTMLDivElement | HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    animateRefs.current.forEach((el, index) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = `opacity 0.6s ease ${
          index * 0.15
        }s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact_glow} />

      <div
        className={styles.contact_header}
        ref={(el) => { animateRefs.current[0] = el; }}
      >
        <span className={styles.contact_label}>Contact</span>
        <h2 className={styles.contact_title}>
          Let&apos;s Work<br />
          <span className={styles.contact_title_gradient}>Together</span>
        </h2>
        <p className={styles.contact_subtitle}>{contactInfo.tagline}</p>
      </div>

      <div className={styles.contact_grid}>
        <a
          href={`mailto:${contactInfo.email}`}
          className={styles.contact_card}
          ref={(el) => { animateRefs.current[1] = el as HTMLAnchorElement; }}
        >
          <div className={styles.contact_card_icon}>
            <i className="fas fa-envelope" />
          </div>
          <div className={styles.contact_card_content}>
            <span className={styles.contact_card_label}>Email</span>
            <span className={styles.contact_card_value}>{contactInfo.email}</span>
          </div>
          <i className="fas fa-arrow-right" />
        </a>

        <Link
          href="https://github.com/bp4sp4"
          target="_blank"
          className={styles.contact_card}
          ref={(el) => { animateRefs.current[2] = el; }}
        >
          <div className={styles.contact_card_icon}>
            <i className="fab fa-github" />
          </div>
          <div className={styles.contact_card_content}>
            <span className={styles.contact_card_label}>GitHub</span>
            <span className={styles.contact_card_value}>bp4sp4</span>
          </div>
          <i className="fas fa-arrow-right" />
        </Link>
      </div>

      <div
        className={styles.contact_message}
        ref={(el) => { animateRefs.current[3] = el; }}
      >
        {contactInfo.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div
        className={styles.contact_cta}
        ref={(el) => { animateRefs.current[4] = el; }}
      >
        <a
          href={`mailto:${contactInfo.email}`}
          className={styles.contact_cta_btn}
        >
          <span>Say Hello</span>
          <div className={styles.contact_cta_arrow}>
            <i className="fas fa-paper-plane" />
          </div>
        </a>
      </div>
    </section>
  );
}
