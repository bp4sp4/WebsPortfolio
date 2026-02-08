'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLDivElement;
    cursorRef.current = cursor;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth cursor follow
    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      if (cursor) {
        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
      }
      requestAnimationFrame(animate);
    };

    const handleMouseDown = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(0.6)";
        cursor.style.borderColor = "#fd79a8";
      }
    };

    const handleMouseUp = () => {
      if (cursor) {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.borderColor = "#6c5ce7";
      }
    };

    // Hover effect on interactive elements
    const handleLinkEnter = () => {
      if (cursor) {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.borderColor = "#00cec9";
        cursor.style.backgroundColor = "rgba(0, 206, 201, 0.1)";
      }
    };

    const handleLinkLeave = () => {
      if (cursor) {
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.borderColor = "#6c5ce7";
        cursor.style.backgroundColor = "transparent";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    animate();

    // Add hover effects to links and buttons
    const interactiveElements = document.querySelectorAll(
      "a, button, .project_card, .skill_card, .tag_item, .tag"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkEnter);
      el.addEventListener("mouseleave", handleLinkLeave);
    });

    // Active nav link tracking
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav_links a");

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => navObserver.observe(section));

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkEnter);
        el.removeEventListener("mouseleave", handleLinkLeave);
      });
      navObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
