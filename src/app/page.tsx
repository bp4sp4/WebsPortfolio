'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // 커스텀 커서 효과
    const cursor = document.querySelector(".cursor");
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        (cursor as HTMLElement).style.left = e.clientX + "px";
        (cursor as HTMLElement).style.top = e.clientY + "px";
      }
    };
    
    const handleMouseDown = () => {
      if (cursor) {
        (cursor as HTMLElement).style.transform = "translate(-50%, -50%) scale(0.7)";
      }
    };
    
    const handleMouseUp = () => {
      if (cursor) {
        (cursor as HTMLElement).style.transform = "translate(-50%, -50%) scale(1)";
      }
    };
    
    // 태그 아이템에 애니메이션 지연 설정
    const tagItems = document.querySelectorAll(".tag-item");
    tagItems.forEach((tag, index) => {
      (tag as HTMLElement).style.setProperty("--i", (index + 1).toString());
    });
    
    // 페이지 로드 효과
    document.body.classList.add("loaded");
    
    // 이벤트 리스너 등록
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    
    // 클린업 함수
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
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
