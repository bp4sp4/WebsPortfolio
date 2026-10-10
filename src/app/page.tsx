import HashScroll from '@/components/HashScroll';
import HomeNav from '@/components/home/HomeNav';
import HomeHero from '@/components/home/HomeHero';
import HomeIntro from '@/components/home/HomeIntro';
import HomeProjects from '@/components/home/HomeProjects';
import HomeCareer from '@/components/home/HomeCareer';
import HomeSkills from '@/components/home/HomeSkills';
import HomeProblems from '@/components/home/HomeProblems';
import HomeContact from '@/components/home/HomeContact';
import s from '@/styles/home.module.css';

// 토스(toss.im) 스타일 라이트 테마 홈
export default function Home() {
  return (
    <main className={s.home}>
      <HashScroll />
      <HomeNav />
      <HomeHero />
      <HomeIntro />
      <HomeProjects />
      <HomeProblems />
      <HomeCareer />
      <HomeSkills />
      <HomeContact />
    </main>
  );
}
