import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import Stats from '@/components/Stats';
import Marquee from '@/components/Marquee';
import Pillars from '@/components/Pillars';
import Work from '@/components/Work';
import Writing from '@/components/Writing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Stats />
        <Marquee text="Law &middot; Innovation &middot; Impact" variant="outlined" />
        <Pillars />
        <Work />
        <Marquee text="Selected writing &middot; Selected work" speed="slow" />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
