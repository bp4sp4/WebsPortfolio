"use client";

import { useEffect } from "react";
import Link from "next/link";
import { contactInfo } from "@/data/data";

export default function Contact() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animated class and make element visible
          entry.target.classList.add("animated");

          // Explicitly set styles when visible
          const element = entry.target as HTMLElement;
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".contact-container").forEach((el) => {
      // Type assertion to HTMLElement
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(50px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact-header contact-container">
        <h2 className="section-title">CONTACT</h2>
        <p className="contact-tagline">{contactInfo.tagline}</p>
      </div>

      <div className="contact-email-container contact-container">
        <h3 className="contact-email">{contactInfo.email}</h3>
      </div>

      <div className="contact-description contact-container">
        {contactInfo.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <Link
        href="https://github.com/bp4sp4"
        target="_blank"
        className="contact-more-btn contact-container"
      >
        <span>자세히보기</span>
        <i className="fas fa-arrow-right"></i>
      </Link>

      <style jsx>{`
        .animated {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
