'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sun, Moon, User, Folder, Code, Award, Mail, FileText } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about', icon: User },
  { label: 'Projects', href: '#projects', icon: Folder },
  { label: 'Skills', href: '#skills', icon: Code },
  { label: 'Certs', href: '#certifications', icon: Award },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <>
      {/* ── DESKTOP NAVBAR (Hidden on mobile, visible on medium screens and up) ── */}
      <header 
        className={`fixed left-0 right-0 z-50 hidden md:block transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? 'top-4 mx-auto w-[92%] max-w-5xl rounded-full bg-[var(--navbar-bg)] backdrop-blur-xl border border-[var(--glass-border)] py-3.5 px-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]' 
            : 'top-0 w-full py-6 px-8 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-bold text-sm tracking-tight text-[var(--ink-primary)] no-underline font-mono">
            SAI_NIKHIL
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-2 relative">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className="relative text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors text-xs font-semibold no-underline px-4 py-2 z-10 font-mono tracking-wide"
              >
                {link.label}
                {hoveredPath === link.href && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.92, rotate: 180 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-9 h-9 border border-[var(--border-subtle)] hover:border-[var(--border-active)] hover:bg-[var(--bg-surface)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors duration-200 bg-transparent cursor-pointer flex items-center justify-center rounded-full"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
            </motion.button>

            <Link
              href="/resume"
              className="border border-[var(--border-subtle)] hover:border-[var(--ink-primary)] text-[var(--ink-primary)] px-4 py-2 text-xs font-semibold no-underline transition-all rounded-full uppercase tracking-wider font-mono"
            >
              Resume
            </Link>
          </div>
        </div>
      </header>

      {/* ── MOBILE TOP BAR (Logo + Theme Toggle + Resume Link) ── */}
      <div className="fixed top-0 left-0 right-0 z-40 md:hidden flex justify-between items-center px-6 py-4 bg-[var(--navbar-bg-mobile)] backdrop-blur-md border-b border-[var(--border-subtle)] no-print">
        <Link href="/" className="font-bold text-xs tracking-wider text-[var(--ink-primary)] font-mono">
          SAI_NIKHIL
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/resume"
            className="w-8 h-8 border border-[var(--border-subtle)] hover:bg-[var(--bg-surface)] text-[var(--ink-secondary)] flex items-center justify-center rounded-full active:scale-95 bg-transparent cursor-pointer"
            aria-label="View Resume"
          >
            <FileText size={13} strokeWidth={1.8} />
          </Link>
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.92, rotate: 180 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-8 h-8 border border-[var(--border-subtle)] hover:bg-[var(--bg-surface)] text-[var(--ink-secondary)] flex items-center justify-center rounded-full bg-transparent cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={13} strokeWidth={1.8} /> : <Moon size={13} strokeWidth={1.8} />}
          </motion.button>
        </div>
      </div>

      {/* ── MOBILE BOTTOM NAVBAR (App-style navigation floating pill) ── */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-sm z-50 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)]/80 backdrop-blur-xl py-2 px-3 flex justify-around items-center shadow-lg md:hidden no-print">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              className="flex flex-col items-center justify-center gap-1.5 text-[8px] font-mono font-bold tracking-widest text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors no-underline py-1 px-3"
            >
              <Icon size={16} strokeWidth={1.8} />
              <span>{link.label.toUpperCase()}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
