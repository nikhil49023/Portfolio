'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  Palette,
  User,
  Folder,
  Code,
  Award,
  Mail,
  FileText,
  ArrowLeft,
  Printer,
  ExternalLink,
  ChevronRight,
  Check,
} from 'lucide-react';
import { PROJECTS } from '@/lib/projects';

const palettes = [
  { id: 'cyber-emerald', label: 'Cyber Emerald', color: '#00F29D', desc: 'Obsidian & Electric Emerald' },
  { id: 'electric-blue', label: 'Electric Blue', color: '#3B82F6', desc: 'Titanium & Azure Blue' },
  { id: 'amber-terminal', label: 'Solar Amber', color: '#F59E0B', desc: 'Onyx & High-Tech Amber' },
  { id: 'violet-monolith', label: 'Violet Nebula', color: '#A855F7', desc: 'Space & Deep Ultraviolet' },
];

const homeNavLinks = [
  { id: 'about', label: 'About', href: '/#about', icon: User },
  { id: 'projects', label: 'Projects', href: '/#projects', icon: Folder },
  { id: 'skills', label: 'Skills', href: '/#skills', icon: Code },
  { id: 'certifications', label: 'Certifications', href: '/#certifications', icon: Award },
  { id: 'contact', label: 'Contact', href: '/#contact', icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activePalette, setActivePalette] = useState<string>('cyber-emerald');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('about');
  const paletteRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === '/';
  const isResume = pathname.startsWith('/resume');
  const isProjectDetail = pathname.startsWith('/projects/');

  const projectSlug = isProjectDetail ? pathname.replace('/projects/', '') : null;
  const currentProject = projectSlug ? PROJECTS[projectSlug] : null;

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    const savedPalette = localStorage.getItem('palette') || 'cyber-emerald';
    setActivePalette(savedPalette);
    document.documentElement.setAttribute('data-palette', savedPalette);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setPaletteOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Set up ScrollSpy IntersectionObserver for home page sections
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ['about', 'projects', 'skills', 'certifications', 'contact'];
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(handleIntersect, {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        });
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isHome]);

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

  const selectPalette = (paletteId: string) => {
    setActivePalette(paletteId);
    localStorage.setItem('palette', paletteId);
    document.documentElement.setAttribute('data-palette', paletteId);
    setPaletteOpen(false);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <>
      {/* ── TOP GLOBAL NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
          scrolled
            ? 'bg-[var(--bg-surface)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
            : 'bg-[var(--bg-void)]/60 backdrop-blur-sm border-b border-[var(--border-subtle)]/50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          
          {/* Left Block: Contextual Brand / Back Breadcrumb */}
          {isHome ? (
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="font-mono font-bold text-xs tracking-wider text-[var(--ink-primary)] hover:text-[var(--brand-primary)] transition-colors flex items-center gap-2"
              >
                <span>KILANI_SAI_NIKHIL</span>
              </Link>
              <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[9px] text-[var(--ink-muted)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-2 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE // HYD_IN</span>
              </span>
            </div>
          ) : isProjectDetail ? (
            <div className="flex items-center gap-2 font-mono text-xs">
              <Link
                href="/#projects"
                className="flex items-center gap-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors py-1 px-1.5"
              >
                <ArrowLeft size={13} />
                <span>Systems Archive</span>
              </Link>
              <span className="text-[var(--border-medium)]">/</span>
              <span className="text-[var(--brand-primary)] font-bold truncate max-w-[200px]">
                {currentProject?.name || projectSlug}
              </span>
            </div>
          ) : isResume ? (
            <div className="flex items-center gap-2 font-mono text-xs">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors py-1 px-1.5"
              >
                <ArrowLeft size={13} />
                <span>Portfolio</span>
              </Link>
              <span className="text-[var(--border-medium)]">/</span>
              <span className="text-[var(--brand-primary)] font-bold">
                Dossier &amp; Resume
              </span>
            </div>
          ) : (
            <Link
              href="/"
              className="font-mono font-bold text-xs tracking-wider text-[var(--ink-primary)] hover:text-[var(--brand-primary)] transition-colors"
            >
              KILANI_SAI_NIKHIL
            </Link>
          )}

          {/* Center Navigation Links (Desktop Home only) */}
          {isHome && (
            <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
              {homeNavLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3 py-1.5 transition-colors no-underline ${
                      isActive
                        ? 'text-[var(--ink-primary)] font-bold'
                        : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--brand-primary)]" />
                    )}
                  </a>
                );
              })}
            </nav>
          )}

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            
            {/* Color Palette Switcher Dropdown */}
            <div className="relative" ref={paletteRef}>
              <button
                onClick={() => setPaletteOpen(!paletteOpen)}
                className="w-8 h-8 flex items-center justify-center border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-surface)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors cursor-pointer"
                aria-label="Select Color Palette"
                title="Switch Color Palette"
              >
                <Palette size={14} className="text-[var(--brand-primary)]" />
              </button>

              <AnimatePresence>
                {paletteOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-52 p-1.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xl z-50 font-mono text-xs space-y-1"
                  >
                    <div className="px-2 py-1 text-[9px] text-[var(--ink-muted)] uppercase tracking-wider font-bold border-b border-[var(--border-subtle)] pb-1 mb-1">
                      Color Palettes
                    </div>
                    {palettes.map((p) => {
                      const isSelected = activePalette === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => selectPalette(p.id)}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 transition-colors cursor-pointer text-left ${
                            isSelected
                              ? 'bg-[var(--bg-void)] text-[var(--ink-primary)] font-bold'
                              : 'text-[var(--ink-secondary)] hover:bg-[var(--bg-void)] hover:text-[var(--ink-primary)]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full border border-black/20 shrink-0"
                              style={{ backgroundColor: p.color }}
                            />
                            <span>{p.label}</span>
                          </div>
                          {isSelected && <Check size={12} className="text-[var(--brand-primary)]" />}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contextual Action Buttons */}
            {isResume ? (
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-subtle)] hover:border-[var(--ink-primary)] bg-[var(--bg-surface)] text-[var(--ink-primary)] text-xs font-mono font-semibold transition-all cursor-pointer"
                title="Print clean ATS resume"
              >
                <Printer size={12} />
                <span>Print ATS</span>
              </button>
            ) : isProjectDetail ? (
              <div className="flex items-center gap-2">
                {currentProject?.links?.repo && (
                  <a
                    href={currentProject.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 border border-[var(--border-subtle)] hover:border-[var(--ink-primary)] bg-[var(--bg-surface)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] text-xs font-mono transition-all no-underline"
                  >
                    <span>Source</span>
                    <ExternalLink size={10} />
                  </a>
                )}
                <Link
                  href="/resume"
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-subtle)] hover:border-[var(--ink-primary)] bg-[var(--bg-surface)] text-[var(--ink-primary)] text-xs font-mono font-semibold transition-all no-underline"
                >
                  <FileText size={12} />
                  <span>Resume</span>
                </Link>
              </div>
            ) : (
              <Link
                href="/resume"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-subtle)] hover:border-[var(--ink-primary)] bg-[var(--bg-surface)] text-[var(--ink-primary)] text-xs font-mono font-semibold transition-all no-underline"
              >
                <FileText size={12} />
                <span>Resume</span>
              </Link>
            )}

            {/* Global Theme (Dark/Light) Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-surface)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors cursor-pointer"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun size={14} className="text-amber-400" />
              ) : (
                <Moon size={14} className="text-blue-500" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE BOTTOM FLOATING DOCK (Home page only) ── */}
      {isHome && (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-sm z-50 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/95 backdrop-blur-lg py-2 px-3 flex justify-around items-center shadow-lg md:hidden no-print">
          {homeNavLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 text-[9px] font-mono transition-colors py-1 px-2.5 ${
                  isActive
                    ? 'text-[var(--brand-primary)] font-bold'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)]'
                }`}
              >
                <Icon size={15} />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      )}
    </>
  );
}
