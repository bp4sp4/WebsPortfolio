"use client";

import { useEffect } from "react";

export default function CursorFollower() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLDivElement;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.6)";
      cursor.style.borderColor = "#fd79a8";
    };

    const handleMouseUp = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.borderColor = "#6c5ce7";
    };

    const handleLinkEnter = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.borderColor = "#00cec9";
      cursor.style.backgroundColor = "rgba(0, 206, 201, 0.1)";
    };

    const handleLinkLeave = () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.borderColor = "#6c5ce7";
      cursor.style.backgroundColor = "transparent";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    rafId = requestAnimationFrame(animate);

    const bindInteractive = () => {
      document.querySelectorAll("a, button, [data-interactive]").forEach((el) => {
        el.addEventListener("mouseenter", handleLinkEnter);
        el.addEventListener("mouseleave", handleLinkLeave);
      });
    };

    bindInteractive();

    // 라우트 이동 후 새 요소에도 재바인딩
    const observer = new MutationObserver(bindInteractive);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return null;
}
