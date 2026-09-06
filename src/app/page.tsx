import Loader from '@/components/Loader';
import HashScroll from '@/components/HashScroll';
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Manifesto from '@/components/Manifesto';
import Showcase from '@/components/Showcase';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Loader />
      <HashScroll />
      <Header />
      <Marquee />
      <About />
      <Skills />
      <Manifesto />
      <Showcase />
      <Marquee reverse />
      <Cta />
      <Contact />
      <Footer />
    </main>
  );
}
