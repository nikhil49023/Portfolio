'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Terminal as TerminalIcon,
  Cpu,
  Shield,
  Layers,
  Sparkles,
  GitCommit,
  HardDrive,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Terminal, AnimatedSpan, TypingAnimation } from '@/registry/magicui/terminal';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { hapticAudio } from '@/lib/audio';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type DossierTab = 'boot' | 'narrative' | 'stack' | 'milestones';

export function About() {
  const [activeTab, setActiveTab] = useState<DossierTab>('boot');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const tenetsRef = useRef<HTMLDivElement>(null);

  const tenets = [
    {
      num: '01',
      title: 'AI-Augmented Velocity',
      tagline: 'High-Agency Agent Orchestration.',
      icon: Sparkles,
      accentColor: '#D71920',
      badgeClass: 'text-[#D71920] bg-[#D71920]/10 border-[#D71920]/20',
      desc: 'I orchestrate autonomous AI agent workflows (Antigravity SDK, Codex swarms, Model Context Protocol) and iterative verification loops to design, test, and ship production systems at 10x velocity without vibe-coding.',
      badge: 'Agentic Velocity',
    },
    {
      num: '02',
      title: 'Sovereign On-Device Intelligence',
      tagline: 'Zero Cloud Egress. 100% Private.',
      icon: Shield,
      accentColor: '#10B981',
      badgeClass: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
      desc: 'Sending user data to cloud APIs introduces ongoing latency and security risks. I deploy local models on edge silicon with encrypted AES-256 SQLite vaults. Fast, offline-first, and DPDP Act 2023 compliant.',
      badge: 'Zero-Egress Silicon',
    },
    {
      num: '03',
      title: 'Architectural Rigor & Test Gates',
      tagline: 'First-Principles Beat Vibe-Coding.',
      icon: Layers,
      accentColor: '#0284C7',
      badgeClass: 'text-sky-600 bg-sky-500/10 border-sky-500/20',
      desc: 'AI generates code quickly; architectural discipline ensures it lasts. I anchor every system in strict type contracts, modular domain boundaries, and deterministic automated test gates that guarantee reliability.',
      badge: 'Deterministic Quality',
    },
  ];

  const engineeringStack = [
    { category: 'AI & Agentic Flow', value: 'Antigravity CLI, Codex Flow, Model Context Protocol (MCP)', meta: 'Autonomous loops, tool use & verification' },
    { category: 'Frontend & Fullstack', value: 'Next.js 16 (Turbopack), React 19, TypeScript, Tailwind CSS', meta: 'Server components, fluid GSAP physics' },
    { category: 'Mobile & On-Device AI', value: 'Flutter, Android Native, LiteRT, SQLite AES-256 Vaults', meta: '100% local execution & DPDP compliance' },
    { category: 'Backend & Systems', value: 'Python 3.11, FastAPI, POSIX Linux, Docker, PostgreSQL', meta: 'High-throughput pipelines & services' },
    { category: 'Simulation & Robotics', value: 'ROS 2 Humble, Gazebo Sim 8, MicroXRCE-DDS SITL', meta: 'Multi-agent simulation & testing' },
    { category: 'Quality & Verification', value: 'Playwright, Automated CI Test Gates, ESLint, TypeScript', meta: 'Deterministic test passes before shipping' },
  ];

  const milestones = [
    {
      date: '2026',
      title: 'National Finalist: Vitt (OpenAI Academy x IndiaAI)',
      desc: 'Engineered sovereign on-device AI personal finance companion with Flutter, local SQLite AES-256 vaults, and zero cloud data leakage.',
    },
    {
      date: '2026',
      title: 'saara-ai v2.0 Distributed CLI',
      desc: 'Shipped 38 stable package releases on PyPI. Reached 2,600+ PyPI downloads for automated documentation distillation into Parquet corpora.',
    },
    {
      date: '2026',
      title: 'Prithvi Lifeline Architecture',
      desc: 'Architected edge AI disaster response triage mesh proposal for the iQOO National Hackathon with off-grid fallback protocols.',
    },
    {
      date: '2026',
      title: 'Project SUTRA Swarm Simulation',
      desc: 'Multi-UAV autonomous search and rescue simulation in ROS 2 Humble and Gazebo Sim 8 Harmonic with verified automated test suites.',
    },
    {
      date: '2025',
      title: 'Google Cloud Gen AI Master Certification',
      desc: 'Verified enterprise credential covering Vertex AI Studio, production agent architecture, and scalable RAG systems.',
    },
  ];

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      [leftColRef.current, rightColRef.current],
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
        },
      }
    );

    if (tenetsRef.current) {
      const cards = tenetsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: tenetsRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  const handleTabChange = (tab: DossierTab) => {
    hapticAudio.playTactileClick();
    setActiveTab(tab);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] relative overflow-hidden select-none py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header Ribbon */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-[var(--border-subtle)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D71920] shadow-[0_0_8px_#D71920]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span className="text-[#D71920]">01 //</span>
              <span>Engineering Dossier &amp; Architecture</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>HYDERABAD, IN [17.3850° N] · HIGH-AGENCY SYSTEMS</span>
          </div>
        </div>

        {/* Editorial Lead-in & Dossier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Authoritative Editorial Manifesto */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D71920] border border-[#D71920]/20 bg-[#D71920]/5 px-3 py-1 rounded-full inline-block">
                HIGH-AGENCY SYSTEMS BUILDER
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--ink-primary)] leading-tight">
                AI-Augmented Engineering at Escape Velocity.
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-[var(--ink-secondary)] font-body">
              Modern software development is undergoing a fundamental transformation. The highest-leverage engineers don’t spend hours writing boilerplate — they orchestrate autonomous AI agent workflows with first-principles systems thinking, surgical prompt architecture, and rigorous automated verification.
            </p>

            <p className="text-sm leading-relaxed text-[var(--ink-secondary)] font-body">
              I combine full-stack system architecture (Next.js, TypeScript, Flutter, Python) with agentic flow (Antigravity SDK, Model Context Protocol) and local-first AI models to design, iterate, and deploy high-impact software at 10x engineering velocity.
            </p>

            {/* Architecture Ledger */}
            <div className="p-4 rounded-2xl bg-white border border-[var(--border-medium)] shadow-xs font-mono space-y-2.5">
              <div className="flex justify-between items-center text-[10px] border-b border-[var(--border-subtle)] pb-2">
                <span className="text-[var(--ink-muted)] uppercase tracking-wider font-bold">CORE_METHODOLOGY</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  HIGH-VELOCITY DEV
                </span>
              </div>
              <div className="space-y-1.5 text-[11px] text-[var(--ink-primary)]">
                <div className="flex justify-between">
                  <span className="text-[var(--ink-muted)]">Primary Focus:</span>
                  <span className="font-bold text-[#D71920]">Fullstack, Mobile &amp; Local AI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--ink-muted)]">Agent Scaffolding:</span>
                  <span className="font-bold text-sky-600">Antigravity + MCP Swarms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--ink-muted)]">Verified Output:</span>
                  <span className="font-bold">2,600+ PyPI Downloads</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--ink-muted)]">Data Sovereignty:</span>
                  <span className="font-bold text-emerald-600">Zero Cloud Egress · DPDP</span>
                </div>
              </div>
            </div>

            <div>
              <Link href="/resume" className="no-underline inline-block">
                <InteractiveHoverButton text="Executive Resume Dossier" className="w-64 h-11" />
              </Link>
            </div>
          </div>

          {/* Right Column: Tabbed Technical Terminal Dossier */}
          <div ref={rightColRef} className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[var(--border-medium)] shadow-[0_10px_35px_rgba(15,23,42,0.06),0_4px_12px_rgba(15,23,42,0.03)] overflow-hidden">
              
              {/* Tab Navigation Header */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-2.5 bg-slate-50/60">
                <div className="flex gap-1.5 overflow-x-auto">
                  {(
                    [
                      { id: 'boot', label: '01 // Workflow Boot', icon: TerminalIcon },
                      { id: 'narrative', label: '02 // Methodology', icon: Compass },
                      { id: 'stack', label: '03 // Tech Matrix', icon: HardDrive },
                      { id: 'milestones', label: '04 // Timeline', icon: GitCommit },
                    ] as const
                  ).map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => handleTabChange(tab.id)}
                        className={cn(
                          'flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono transition-all rounded-full cursor-pointer whitespace-nowrap active:scale-95',
                          isActive
                            ? 'bg-[var(--ink-primary)] text-white font-bold shadow-xs'
                            : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)] hover:bg-slate-200/50'
                        )}
                      >
                        <Icon size={11} className={isActive ? 'text-[#D71920]' : ''} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[9px] font-mono text-[var(--ink-muted)] shrink-0 pl-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                  <span>DOSSIER_v2.7</span>
                </div>
              </div>

              {/* Tab Content Panel */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {/* TAB 1: System Boot (Live Terminal) */}
                  {activeTab === 'boot' && (
                    <motion.div
                      key="boot"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <Terminal className="bg-[#0A0A0C] text-zinc-300 font-mono text-xs border border-zinc-800 rounded-[18px]">
                        <TypingAnimation className="text-[#D71920] font-bold">
                          $ nikhil --workflow=ai-augmented --stack=fullstack-systems
                        </TypingAnimation>

                        <AnimatedSpan delay={200} className="text-zinc-400">
                          <span>✔ Host: Linux (Ubuntu 24.04 LTS x86_64 / ARM64)</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={400} className="text-zinc-400">
                          <span>✔ AI Engine: Antigravity CLI + Codex + Model Context Protocol (MCP)</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={600} className="text-zinc-400">
                          <span>✔ Fullstack Web: Next.js 16 (Turbopack), React 19, TypeScript, Tailwind</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={800} className="text-zinc-400">
                          <span>✔ Mobile App: Flutter &amp; Android with local SQLite AES-256 cipher vaults</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={1000} className="text-zinc-400">
                          <span>✔ Tooling: saara-ai on PyPI (38 releases / 2,600+ verified downloads)</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={1200} className="text-zinc-400">
                          <span>✔ Recognition: National Finalist @ OpenAI Academy x IndiaAI (Vitt Mobile)</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={1400} className="text-emerald-400 font-bold">
                          <span>[READY] High-agency workflow active. Ready to build and ship at 10x speed.</span>
                        </AnimatedSpan>
                      </Terminal>
                    </motion.div>
                  )}

                  {/* TAB 2: Methodology */}
                  {activeTab === 'narrative' && (
                    <motion.div
                      key="narrative"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 font-body text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed text-left"
                    >
                      <p>
                        High-level AI tools are only as powerful as the engineer directing them. My workflow treats AI agents not as autocomplete, but as a coordinated squad of specialized builders operating under strict architectural guidelines.
                      </p>
                      <p>
                        By combining first-principles systems understanding with <strong className="text-[var(--ink-primary)]">autonomous agent loops</strong>, <strong className="text-[var(--ink-primary)]">Model Context Protocol (MCP)</strong> tooling, and <strong className="text-[var(--ink-primary)]">deterministic test gates</strong>, I compress multi-month product lifecycles into days — while maintaining clean codebases and airtight data sovereignty.
                      </p>
                    </motion.div>
                  )}

                  {/* TAB 3: Tech Matrix */}
                  {activeTab === 'stack' && (
                    <motion.div
                      key="stack"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      {engineeringStack.map((spec) => (
                        <div
                          key={spec.category}
                          className="p-3 border border-[var(--border-subtle)] bg-[var(--bg-void)] rounded-[14px] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left"
                        >
                          <div>
                            <div className="text-[10px] font-mono text-[#D71920] font-bold uppercase tracking-wider">
                              {spec.category}
                            </div>
                            <div className="font-mono text-xs font-bold text-[var(--ink-primary)]">
                              {spec.value}
                            </div>
                          </div>
                          <div className="text-[10px] font-mono text-[var(--ink-muted)] sm:text-right">
                            {spec.meta}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* TAB 4: Timeline */}
                  {activeTab === 'milestones' && (
                    <motion.div
                      key="milestones"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4 text-left"
                    >
                      {milestones.map((m) => (
                        <div key={m.title} className="border-l-2 border-[#D71920] pl-4 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold text-[#D71920]">
                              [{m.date}]
                            </span>
                            <span className="font-mono text-xs font-bold text-[var(--ink-primary)]">
                              {m.title}
                            </span>
                          </div>
                          <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body">
                            {m.desc}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Core Architectural Tenets */}
        <div ref={tenetsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {tenets.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.num}
                className="bg-white rounded-3xl border border-[var(--border-medium)] p-6 shadow-xs hover:shadow-md hover:border-[var(--ink-primary)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D71920]">
                      // {t.num}
                    </span>
                    <span className={cn('text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border', t.badgeClass)}>
                      {t.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-display text-[var(--ink-primary)] tracking-tight mb-1">
                    {t.title}
                  </h4>
                  <div className="text-[11px] font-mono text-[var(--ink-muted)] mb-3">
                    {t.tagline}
                  </div>

                  <p className="text-xs text-[var(--ink-secondary)] font-body leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default About;

