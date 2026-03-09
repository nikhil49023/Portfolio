'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recognition', href: '#certifications' },
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
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(250,248,255,0.96)' : 'rgba(250,248,255,0.72)',
          backdropFilter: 'blur(24px) saturate(200%)',
          WebkitBackdropFilter: 'blur(24px) saturate(200%)',
          border: scrolled ? '1px solid rgba(124,58,237,0.14)' : '1px solid rgba(124,58,237,0.08)',
          boxShadow: scrolled
            ? '0 4px 20px rgba(109,40,217,0.1), inset 0 1px 0 rgba(255,255,255,0.9)'
            : '0 2px 12px rgba(109,40,217,0.05), inset 0 1px 0 rgba(255,255,255,0.7)',
        }}
      >
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-3">
          <div
            className="grid h-9 w-9 place-items-center rounded-xl text-sm font-black text-white"
            style={{ background: 'linear-gradient(145deg, #7c3aed, #6d28d9)' }}
          >
            N
          </div>
          <div className="leading-none">
            <p className="display-heading text-sm font-extrabold text-[#1e1b4b]">Kilani Sai Nikhil</p>
            <p className="text-[11px] font-semibold tracking-wide text-[#9896ac]">AI systems · product engineering</p>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {LINKS.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-[#6b6894] transition-all hover:text-[#1e1b4b] hover:bg-violet-50"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 rounded-xl border border-violet-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-violet-600 hover:bg-violet-50 transition-all"
          >
            <FileText size={13} />
            Resume
          </Link>
          <a
            href="mailto:kilanisainikhil@gmail.com"
            className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 text-sm"
          >
            Hire me
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-violet-100 bg-violet-50 md:hidden"
          aria-label="Toggle navigation menu"
        >
          <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="h-[2px] w-5 rounded bg-violet-600" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-[2px] w-5 rounded bg-violet-600" />
          <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="h-[2px] w-5 rounded bg-violet-600" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 w-full max-w-5xl rounded-2xl border border-violet-100 p-2.5 shadow-xl md:hidden"
            style={{ background: 'rgba(250,248,255,0.98)', backdropFilter: 'blur(24px)' }}
          >
            {LINKS.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="block w-full rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold text-[#6b6894] transition-colors hover:bg-violet-50 hover:text-[#1e1b4b]"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/resume"
              className="mt-1 block rounded-xl border border-violet-200 bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-violet-600"
            >
              📄 Resume
            </Link>
            <a
              href="mailto:kilanisainikhil@gmail.com"
              className="btn-primary mt-1 block rounded-xl px-3.5 py-2.5 text-center text-sm"
            >
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
