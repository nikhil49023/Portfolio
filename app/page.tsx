'use client';

import { useState, useEffect } from 'react';
import BootSequence from '@/components/BootSequence';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem('hasBooted');
    if (hasBooted) {
      setBooting(false);
    }
  }, []);

  const handleComplete = () => {
    setBooting(false);
    sessionStorage.setItem('hasBooted', 'true');
  };

  if (booting) {
    return <BootSequence onComplete={handleComplete} />;
  }

  return (
    <main className="animate-fade-in">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
