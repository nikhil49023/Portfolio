'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Compass,
  Cpu,
  Brain,
  Shield,
  Zap,
  BookOpen,
  GitBranch,
  Target,
  Sparkles,
  Terminal,
  Layers,
  ArrowRight,
  Quote,
  Navigation,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { TextScramble } from '@/components/ui/text-scramble';
import { hapticAudio } from '@/lib/audio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type PhilosophyTab = 'engineering' | 'learning' | 'ideas';

export function Philosophies() {
  const [activeTab, setActiveTab] = useState<PhilosophyTab>('engineering');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);

  const engineeringAxioms = [
    {
      num: '01',
      title: 'First-Principles Beat Vibe-Coding',
      tagline: 'Understand the Silicon. Then Build at 10x Velocity.',
      icon: Cpu,
      accent: '#D71920',
      badgeClass: 'text-[#D71920] bg-[#D71920]/10 border-[#D71920]/20',
      desc: 'Anyone can prompt an LLM. Very few understand memory layouts, lock-free ring buffers, or race conditions. I master low-level systems first — then use AI agents to build 10x faster with zero guesswork.',
      quote: 'AI magnifies architectural taste; it does not replace understanding of memory layouts.',
    },
    {
      num: '02',
      title: 'Physics Doesn\'t Lie: 50Hz or Crash',
      tagline: 'Zero-Jitter Flight Loops Over Hope.',
      icon: Navigation,
      accent: '#06B6D4',
      badgeClass: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      desc: 'When an aerial swarm flies into a collapsed tunnel, there is no cell signal and no GPS. Jitter means kinetic impact. Control loops must execute deterministically every 20ms or the mission fails.',
      quote: 'Autonomous flight cannot be vibe-coded: either the loop converges or the vehicle crashes.',
    },
    {
      num: '03',
      title: 'Your Data Never Leaves the Chip',
      tagline: 'Local Silicon Beats Cloud Subscriptions.',
      icon: Shield,
      accent: '#10B981',
      badgeClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      desc: 'Sending private data to cloud APIs is a security nightmare and an ongoing tax. I deploy models (LiteRT, Gemma 4, Jetson TensorRT) directly on offline silicon with local AES-256 encrypted vaults. Private by physics.',
      quote: 'Privacy is not a policy checkbox; it is a physical hardware boundary.',
    },
    {
      num: '04',
      title: 'Clean Data is the True Moat',
      tagline: 'High-Entropy Curation Beats Giant Random Corpora.',
      icon: Layers,
      accent: '#F59E0B',
      badgeClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      desc: 'Model weights are commodities. High-quality domain datasets are the real moat. I built saara-ai (38 releases, 2,600+ users) to transform raw documentation into mathematical training corpora automatically.',
      quote: 'The moat isn\'t the model. The moat is deterministic data distillation.',
    },
  ];

  const learningPedagogy = [
    {
      num: '01',
      title: 'Build It to Understand It',
      tagline: 'Hands-On Experimentation Beats Passive Reading.',
      icon: BookOpen,
      accent: '#06B6D4',
      desc: 'I do not just read papers or tutorials — I implement their primitives from scratch in C++ and Python to internalize their mechanical limits.',
      principle: 'You do not understand a system until you build it.',
    },
    {
      num: '02',
      title: 'Relentless Execution',
      tagline: 'Obsession With Craftsmanship.',
      icon: Target,
      accent: '#D71920',
      desc: 'Zero vanity metrics. Complete ownership of every commit. Focus entirely on the rigor of the work and passing test gates.',
      principle: 'Master the process; let results take care of themselves.',
    },
    {
      num: '03',
      title: 'Deep Focus Ultradian Blocks',
      tagline: 'Zero-Distraction Systems Engineering.',
      icon: Brain,
      accent: '#10B981',
      desc: 'Tackling hard engineering problems in unbroken 90-minute deep work blocks. Pure terminal workflows, zero noise, maximum mental clarity.',
      principle: 'Deep focus produces asymmetric breakthroughs.',
    },
  ];

  const researchIdeas = [
    {
      num: '01',
      title: 'Local SLMs on Sub-10W Silicon',
      tagline: '1B-3B Models on Mobile NPUs.',
      icon: Cpu,
      accent: '#F59E0B',
      desc: 'Distilling domain-specialized language models to run on mobile NPUs at zero latency and zero cloud egress.',
    },
    {
      num: '02',
      title: 'Real-Time Thermal Aerial Vision',
      tagline: 'Dynamic SAHI Tiling on Drone Hardware.',
      icon: Zap,
      accent: '#06B6D4',
      desc: 'Real-time survivor localization in GPS-denied disaster zones using multi-spectral thermal cameras and TensorRT.',
    },
    {
      num: '03',
      title: 'Deterministic Multi-Agent Loops',
      tagline: 'Bounded Maker/Checker Systems.',
      icon: GitBranch,
      accent: '#8B5CF6',
      desc: 'Architecting self-healing autonomous developer loops with mathematical verification gates and zero infinite regressions.',
    },
  ];

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Header reveal
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

    // Tab buttons slide in
    gsap.fromTo(
      tabsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: tabsRef.current,
          start: 'top 85%',
        },
      }
    );

    // Cards staggered entrance
    if (deckRef.current) {
      const cards = deckRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 45, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: deckRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  const handleTabSelect = (tab: PhilosophyTab) => {
    if (tab !== activeTab) {
      hapticAudio.playTactileClick();
      setActiveTab(tab);
    }
  };

  return (
    <section
      id="proving-grounds"
      ref={sectionRef}
      className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] relative overflow-hidden select-none py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8 pb-4 border-b border-[var(--border-subtle)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D71920] shadow-[0_0_8px_#D71920]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span className="text-[#D71920]">AXIOMS //</span>
              <TextScramble hoverTrigger duration={0.6}>Engineering Mindset &amp; Pedagogy</TextScramble>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            <span>EDITORIAL ENGINEERING PHILOSOPHIES &amp; DEEP WORK</span>
          </div>
        </div>

        {/* Tab Controls (Styled like hardware synth channels) */}
        <div ref={tabsRef} className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {(
            [
              { id: 'engineering', label: 'CH-01 // Engineering Axioms', icon: Cpu, accent: '#D71920' },
              { id: 'learning', label: 'CH-02 // Experiential Pedagogy', icon: BookOpen, accent: '#06B6D4' },
              { id: 'ideas', label: 'CH-03 // Research Frontiers', icon: Zap, accent: '#F59E0B' },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-full border transition-all cursor-pointer whitespace-nowrap active:scale-95',
                  isActive
                    ? 'border-[#D71920] bg-[var(--bg-surface)] text-[var(--ink-primary)] font-bold shadow-sm'
                    : 'border-[var(--border-subtle)] text-[var(--ink-muted)] hover:text-[var(--ink-primary)] bg-[var(--bg-surface)]/50'
                )}
              >
                <span
                  className={cn('w-1.5 h-1.5 rounded-full', isActive ? 'animate-ping' : 'bg-zinc-600')}
                  style={{ backgroundColor: isActive ? tab.accent : undefined }}
                />
                <Icon size={12} style={{ color: isActive ? tab.accent : undefined }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          {activeTab === 'engineering' && (
            <motion.div
              key="engineering"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <div ref={deckRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {engineeringAxioms.map((axiom) => {
                  const Icon = axiom.icon;
                  return (
                    <div
                      key={axiom.num}
                      className="machined-bezel group hover:-translate-y-1 transition-transform duration-300"
                    >
                      <div className="machined-inner p-6 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-xs font-bold text-[#D71920]">
                              // AXIOM {axiom.num}
                            </span>
                            <div
                              className="w-8 h-8 rounded-full border border-[var(--border-subtle)] dark:border-white/10 bg-[var(--bg-void)] flex items-center justify-center transition-transform group-hover:scale-110"
                              style={{ color: axiom.accent }}
                            >
                              <Icon size={14} />
                            </div>
                          </div>

                          <h4 className="font-display font-bold text-base sm:text-lg text-[var(--ink-primary)] mb-1 group-hover:text-[#D71920] transition-colors">
                            {axiom.title}
                          </h4>
                          <div className="text-[11px] font-mono text-[var(--ink-muted)] mb-3">
                            {axiom.tagline}
                          </div>
                          <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body mb-4">
                            {axiom.desc}
                          </p>
                        </div>

                        <div className="p-3 border border-[var(--border-subtle)] dark:border-white/5 bg-[var(--bg-void)] rounded-[14px] flex items-start gap-2 mt-4">
                          <Quote size={12} style={{ color: axiom.accent }} className="shrink-0 mt-0.5" />
                          <span className="text-[11px] font-mono text-[var(--ink-muted)] italic leading-snug">
                            &ldquo;{axiom.quote}&rdquo;
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'learning' && (
            <motion.div
              key="learning"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {learningPedagogy.map((pedagogy) => {
                const Icon = pedagogy.icon;
                return (
                  <div
                    key={pedagogy.num}
                    className="machined-bezel group hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="machined-inner p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-bold text-[#D71920]">
                            // PEDAGOGY {pedagogy.num}
                          </span>
                          <div
                            className="w-8 h-8 rounded-full border border-[var(--border-subtle)] dark:border-white/10 bg-[var(--bg-void)] flex items-center justify-center transition-transform group-hover:scale-110"
                            style={{ color: pedagogy.accent }}
                          >
                            <Icon size={14} />
                          </div>
                        </div>

                        <h4 className="font-display font-bold text-base text-[var(--ink-primary)] mb-1 group-hover:text-[#D71920] transition-colors">
                          {pedagogy.title}
                        </h4>
                        <div className="text-[11px] font-mono text-[var(--ink-muted)] mb-3">
                          {pedagogy.tagline}
                        </div>
                        <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body mb-4">
                          {pedagogy.desc}
                        </p>
                      </div>

                      <div className="p-3 border border-[var(--border-subtle)] dark:border-white/5 bg-[var(--bg-void)] rounded-[14px] text-center font-mono text-[10px] text-[var(--ink-muted)] mt-4">
                        {pedagogy.principle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'ideas' && (
            <motion.div
              key="ideas"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {researchIdeas.map((idea) => {
                const Icon = idea.icon;
                return (
                  <div
                    key={idea.num}
                    className="machined-bezel group hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="machined-inner p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-bold text-[#D71920]">
                            // FRONTIER {idea.num}
                          </span>
                          <div
                            className="w-8 h-8 rounded-full border border-[var(--border-subtle)] dark:border-white/10 bg-[var(--bg-void)] flex items-center justify-center transition-transform group-hover:scale-110"
                            style={{ color: idea.accent }}
                          >
                            <Icon size={14} />
                          </div>
                        </div>

                        <h4 className="font-display font-bold text-base text-[var(--ink-primary)] mb-1 group-hover:text-[#D71920] transition-colors">
                          {idea.title}
                        </h4>
                        <div className="text-[11px] font-mono text-[var(--ink-muted)] mb-3">
                          {idea.tagline}
                        </div>
                        <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body">
                          {idea.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-[var(--border-subtle)] dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-[var(--ink-muted)]">
                        <span className="text-[#D71920] font-bold">ACTIVE RESEARCH</span>
                        <span>2026 ROADMAP</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default Philosophies;
