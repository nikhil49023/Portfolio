'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Moon,
  User,
  Folder,
  Code,
  Award,
  Mail,
  FileText,
  ArrowLeft,
  Printer,
  Download,
  ExternalLink,
  ChevronRight,
  Terminal,
} from 'lucide-react';
import { PROJECTS } from '@/lib/projects';

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
  const [activeSection, setActiveSection] = useState<string>('about');
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const isHome = pathname === '/';
  const isResume = pathname.startsWith('/resume');
  const isProjectDetail = pathname.startsWith('/projects/');

  // Extract current project if on /projects/[slug]
  const projectSlug = isProjectDetail ? pathname.replace('/projects/', '') : null;
  const currentProject = projectSlug ? PROJECTS[projectSlug] : null;

  // Initialize theme from DOM classList / localStorage
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <>
      {/* ── TOP GLOBAL NAVBAR (Optimized across all routes) ── */}
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
                <span className="hidden sm:inline">Systems Archive</span>
                <span className="sm:hidden">Back</span>
              </Link>
              <span className="text-[var(--border-subtle)]">/</span>
              <span className="font-bold text-[var(--brand-primary)] truncate max-w-[140px] sm:max-w-none">
                {currentProject ? currentProject.name : projectSlug}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 font-mono text-xs">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors py-1 px-1.5"
              >
                <ArrowLeft size={13} />
                <span>Portfolio</span>
              </Link>
              <span className="text-[var(--border-subtle)]">/</span>
              <span className="font-bold text-[var(--brand-primary)]">
                Dossier &amp; Resume
              </span>
            </div>
          )}

          {/* Center Block: Desktop Section Navigation (Home page only) */}
          {isHome && (
            <nav className="hidden md:flex items-center gap-1">
              {homeNavLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.id)}
                    onMouseLeave={() => setHoveredPath(null)}
                    className={`relative px-3.5 py-1.5 text-xs font-mono transition-colors ${
                      isActive
                        ? 'text-[var(--ink-primary)] font-bold'
                        : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)]'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>
          )}

          {/* Right Block: Actions (Theme switcher, PDF print, Resume button) */}
          <div className="flex items-center gap-2.5">
            {isResume ? (
              <>
                <button
                  onClick={handlePrint}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[var(--ink-primary)] text-[var(--bg-void)] hover:bg-[var(--brand-primary)] text-xs font-mono font-bold transition-colors cursor-pointer border-0"
                >
                  <Printer size={12} />
                  <span>Print ATS</span>
                </button>
              </>
            ) : isProjectDetail ? (
              <>
                {currentProject?.links[0] && (
                  <a
                    href={currentProject.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1 px-2.5 py-1 border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-surface)] text-[var(--ink-primary)] text-xs font-mono transition-colors"
                  >
                    <span>Source</span>
                    <ExternalLink size={11} />
                  </a>
                )}
                <Link
                  href="/resume"
                  className="hidden sm:flex items-center gap-1 px-3 py-1 bg-[var(--ink-primary)] text-[var(--bg-void)] hover:bg-[var(--brand-primary)] text-xs font-mono font-bold transition-colors"
                >
                  <span>Resume</span>
                </Link>
              </>
            ) : (
              <Link
                href="/resume"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-subtle)] hover:border-[var(--ink-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface)] text-[var(--ink-primary)] text-xs font-mono font-semibold transition-all"
              >
                <FileText size={12} />
                <span>Resume</span>
              </Link>
            )}

            {/* Global Theme Toggle Button */}
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
