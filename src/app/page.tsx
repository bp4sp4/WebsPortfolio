import Loader from '@/components/Loader';
import HashScroll from '@/components/HashScroll';
import Header from '@/components/Header';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Showcase from '@/components/Showcase';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Loader />
      <HashScroll />
      <Header />
      <Marquee />
      <About />
      <Stack />
      <Showcase />
      <Marquee reverse />
      <Cta />
      <Footer />
    </main>
  );
}
