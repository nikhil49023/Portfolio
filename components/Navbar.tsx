'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Linkedin, Github } from 'lucide-react';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
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
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(20, 20, 20, 0.9)' : 'rgba(20, 20, 20, 0.5)',
          backdropFilter: 'blur(24px)',
          border: scrolled ? '1px solid rgba(225, 29, 72, 0.3)' : '1px solid rgba(255, 255, 255, 0.06)',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.2)',
        }}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 text-white font-bold text-sm">N</div>
          <div className="hidden sm:block leading-none">
            <p className="text-sm font-bold text-white">Kilani Sai Nikhil</p>
            <p className="text-[10px] text-zinc-500">Agentic App Builder</p>
          </div>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((item) => (
            <button key={item.href} onClick={() => go(item.href)} className="rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/resume" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition-all">
            <FileText size={12} /> Resume
          </Link>
          <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" className="btn-primary inline-flex items-center gap-1.5 px-3 py-1.5 text-xs">
            <Linkedin size={12} /> Hire me
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 md:hidden">
          <motion.span animate={open ? { rotate: 45, y: 6 } : {}} className="h-[2px] w-5 rounded bg-white" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-[2px] w-5 rounded bg-white" />
          <motion.span animate={open ? { rotate: -45, y: -6 } : {}} className="h-[2px] w-5 rounded bg-white" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-auto mt-2 w-full max-w-5xl rounded-2xl border border-white/10 bg-[#1a1a1a] p-2.5 md:hidden">
            {LINKS.map((item) => (
              <button key={item.href} onClick={() => go(item.href)} className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                {item.label}
              </button>
            ))}
            <Link href="/resume" className="mt-2 block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-medium text-white">
              Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}