import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CaseStudy from '@/components/sections/CaseStudy';
import Technology from '@/components/sections/Technology';
import Benefits from '@/components/sections/Benefits';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0E27]">
      <Hero />
      <Services />
      <CaseStudy />
      <Technology />
      <Benefits />
      <Contact />
    </main>
  );
}
