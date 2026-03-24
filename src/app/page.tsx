import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';

export default function Home() {
  return (
    <main>
      <Header />
      <Marquee />
      <About />
      <Marquee />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
