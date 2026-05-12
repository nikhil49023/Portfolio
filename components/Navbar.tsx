'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FileText, Linkedin, Github, Menu, X, ArrowRight } from 'lucide-react';

const LINKS = [
  { label: 'Foundations', href: '#about' },
  { label: 'Arsenal', href: '#skills' },
  { label: 'Solutions', href: '#services' },
  { label: 'Artifacts', href: '#projects' },
  { label: 'Recognition', href: '#certifications' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 sm:px-8 pt-4 sm:pt-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink origin-left z-[60]"
        style={{ scaleX }}
      />

      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-[2rem] px-6 sm:px-10 py-3 sm:py-4 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          scrolled ? 'glass border-white/10 shadow-2xl shadow-black/80' : 'bg-transparent border-transparent'
        }`}
      >
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-4 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent-cyan/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative h-11 w-11 grid place-items-center rounded-2xl bg-[#050505] border border-white/10 text-white font-black text-xl shadow-lg"
            >
              <span className="group-hover:scale-110 transition-transform">S</span>
            </motion.div>
          </div>
          <div className="hidden xs:block leading-none text-left">
            <p className="text-sm font-black text-white uppercase tracking-tighter group-hover:text-accent-cyan transition-colors">Sai Nikhil</p>
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mt-1">Systems Engineer</p>
          </div>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {LINKS.map((item) => (
            <button 
              key={item.href} 
              onClick={() => go(item.href)} 
              className="relative group rounded-xl px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-all overflow-hidden"
            >
              <span className="relative z-10">{item.label}</span>
              <motion.div 
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" 
                layoutId="nav-hover"
              />
              <div className="absolute bottom-1 left-4 right-4 h-[1px] bg-accent-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/resume" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-all hover:translate-x-1 flex items-center gap-2">
            Dossier <ArrowRight size={12} className="text-accent-cyan" />
          </Link>
          <motion.a 
            href="https://linkedin.com/in/kilanisainikhil" 
            target="_blank" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-neon px-8 py-3 text-[10px]"
          >
            Inquire
          </motion.a>
        </div>

        <button 
          onClick={() => setOpen(!open)} 
          className="p-3 rounded-2xl glass border-white/10 lg:hidden text-white transition-all active:scale-90 hover:bg-white/5"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(10px)' }} 
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }} 
            exit={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(10px)' }} 
            className="mx-auto mt-6 w-full max-w-7xl rounded-[2.5rem] border border-white/10 bg-[#050505]/98 backdrop-blur-3xl p-8 lg:hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
            <div className="grid gap-8">
              <div className="grid gap-3">
                {LINKS.map((item, idx) => (
                  <motion.button 
                    key={item.href} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => go(item.href)} 
                    className="flex items-center justify-between w-full py-4 px-6 rounded-2xl hover:bg-white/5 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-accent-cyan transition-all group border border-transparent hover:border-white/5"
                  >
                    {item.label}
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </motion.button>
                ))}
              </div>
              <div className="h-[1px] w-full bg-white/5" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/resume" className="flex items-center justify-center gap-3 py-5 rounded-2xl border border-white/10 text-xs font-black uppercase tracking-widest text-white hover:bg-white/5 transition-all">
                  <FileText size={18} className="text-accent-cyan" /> Dossier
                </Link>
                <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" className="btn-neon text-center py-5 text-xs">
                  Inquire Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
