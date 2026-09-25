import Hero from '@/components/Hero';
import FogRevealShowcase from '@/components/FogRevealShowcase';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Philosophies from '@/components/Philosophies';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-void)] text-[var(--ink-primary)]">
      <Hero />
      <FogRevealShowcase />
      <About />
      <Projects />
      <Philosophies />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
