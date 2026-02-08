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
      <div
        className={styles.contact_header}
        ref={(el) => { animateRefs.current[0] = el; }}
      >
        <h2 className={styles.section_title}>Get In Touch</h2>
        <p className={styles.contact_tagline}>{contactInfo.tagline}</p>
      </div>

      <div
        className={styles.contact_email_wrap}
        ref={(el) => { animateRefs.current[1] = el; }}
      >
        <h3 className={styles.contact_email}>{contactInfo.email}</h3>
      </div>

      <div
        className={styles.contact_desc}
        ref={(el) => { animateRefs.current[2] = el; }}
      >
        {contactInfo.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <Link
        href="https://github.com/bp4sp4"
        target="_blank"
        className={styles.contact_btn}
        ref={(el) => { animateRefs.current[3] = el; }}
      >
        <i className="fab fa-github"></i>
        <span>GitHub Profile</span>
        <i className="fas fa-arrow-right"></i>
      </Link>
    </section>
  );
}
