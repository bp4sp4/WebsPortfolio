"use client";

import { useEffect } from "react";
import Link from "next/link";
import { contactInfo } from "@/data/data";

export default function Contact() {
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

    document.querySelectorAll(".contact_animate").forEach((el, index) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = `opacity 0.6s ease ${
        index * 0.15
      }s, transform 0.6s ease ${index * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact_header contact_animate">
        <h2 className="section_title">Get In Touch</h2>
        <p className="contact_tagline">{contactInfo.tagline}</p>
      </div>

      <div className="contact_email_container contact_animate">
        <h3 className="contact_email">{contactInfo.email}</h3>
      </div>

      <div className="contact_description contact_animate">
        {contactInfo.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <Link
        href="https://github.com/bp4sp4"
        target="_blank"
        className="contact_more_btn contact_animate"
      >
        <i className="fab fa-github"></i>
        <span>GitHub Profile</span>
        <i className="fas fa-arrow-right"></i>
      </Link>
    </section>
  );
}
