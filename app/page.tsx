import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Menu from '@/components/Menu';
import SignatureDishes from '@/components/SignatureDishes';
import Experience from '@/components/Experience';
import Space from '@/components/Space';
import Chef from '@/components/Chef';
import Philosophy from '@/components/Philosophy';
import Reservation from '@/components/Reservation';
import Location from '@/components/Location';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import SectionIndicator from '@/components/SectionIndicator';

export default function Home() {
  return (
    <>
      <Header />
      <SectionIndicator />
      <main>
        <Hero />
        <Intro />
        <Menu />
        <SignatureDishes />
        <Experience />
        <Space />
        <Chef />
        <Philosophy />
        <Reservation />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
