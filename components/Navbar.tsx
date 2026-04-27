'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
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
      className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 ${
          scrolled ? 'glass border-accent-cyan/20 shadow-2xl shadow-black/50' : 'bg-transparent border-transparent'
        }`}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 sm:gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-accent-cyan/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-xl bg-[#030303] border border-white/10 text-white font-black text-lg">
              S
            </div>
          </div>
          <div className="hidden xs:block leading-none">
            <p className="text-xs sm:text-sm font-black text-white uppercase tracking-tighter">Sai Nikhil</p>
            <p className="text-[9px] sm:text-[10px] font-bold text-accent-cyan uppercase tracking-widest">Systems Engineer</p>
          </div>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((item) => (
            <button key={item.href} onClick={() => go(item.href)} className="rounded-lg px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-accent-cyan transition-colors">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/resume" className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
            Credentials
          </Link>
          <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" className="btn-neon px-6 py-2 text-[10px]">
            Inquire
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="p-2 rounded-xl glass border-white/5 lg:hidden text-white transition-transform active:scale-95">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: -20, scale: 0.95 }} 
            className="mx-auto mt-4 w-full max-w-6xl rounded-2xl border border-white/5 bg-[#030303]/95 backdrop-blur-3xl p-6 lg:hidden shadow-2xl shadow-black"
          >
            <div className="grid gap-6">
              <div className="grid gap-2">
                {LINKS.map((item) => (
                  <button key={item.href} onClick={() => go(item.href)} className="flex items-center justify-between w-full py-3 px-4 rounded-xl hover:bg-white/5 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-accent-cyan transition-all group">
                    {item.label}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
              <div className="h-[1px] w-full bg-white/5" />
              <div className="grid gap-4">
                <Link href="/resume" className="flex items-center justify-center gap-3 py-4 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest text-white hover:bg-white/5 transition-all">
                  <FileText size={16} className="text-accent-cyan" /> View Credentials
                </Link>
                <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" className="btn-neon text-center py-4 text-xs">
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
