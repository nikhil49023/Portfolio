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
      title: 'Dual Competence & First-Principles CS',
      tagline: 'Native Foundations × 10x AI-Augmented Velocity',
      icon: Cpu,
      accent: '#D71920',
      badgeClass: 'text-[#D71920] bg-[#D71920]/10 border-[#D71920]/20',
      desc: 'True engineering velocity cannot exist without bedrock computer science foundations. I believe in mastering POSIX systems programming, memory layout, C++, deterministic SQL query plans, and concurrency primitives—then supercharging execution using multi-agent loops, Model Context Protocol (MCP), and semantic code graphs.',
      quote: 'AI magnifies architectural taste; it does not replace the need for first-principles comprehension.',
    },
    {
      num: '02',
      title: 'Zero-Cloud Egress & Sovereign Intelligence',
      tagline: 'Sub-Watt Edge Inference Over Recurring API Tax',
      icon: Shield,
      accent: '#10B981',
      badgeClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      desc: 'The centralization of intelligence inside walled cloud APIs creates privacy vulnerabilities, latency overhead, and recurring subscription liabilities. My architectures champion 100% on-device neural execution (LiteRT, Gemma 4, Coral Edge TPUs) and local AES-256 encrypted vaults where user data never leaves the silicon.',
      quote: 'Privacy is not a feature toggled by policy; it is an architectural guarantee enforced by offline hardware.',
    },
    {
      num: '03',
      title: 'Deterministic Dataset Distillation',
      tagline: 'High-Entropy Synthesis Beats Mindless Prompting',
      icon: Layers,
      accent: '#F59E0B',
      badgeClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      desc: 'Prompt engineering is ephemeral; domain-curated dataset distillation is enduring. Systems like saara-ai utilize bounded autonomous research agents to transform unformatted documentation into structured Parquet corpora, powering efficient small model fine-tuning with verifiable mathematical bounds.',
      quote: 'The moat is no longer model weights; the moat is deterministic data distillation.',
    },
    {
      num: '04',
      title: 'Bounded Loops & Maker-Checker Verification',
      tagline: 'Determinism Over Hallucinatory Autonomy',
      icon: GitBranch,
      accent: '#8B5CF6',
      badgeClass: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      desc: 'Unchecked agentic autonomy produces subtle drift. I architect systems with strict Maker/Checker separation: autonomous generation agents produce artifacts while deterministic verification gates (AST parsers, compiler lints, unit suites) enforce invariants before state mutation.',
      quote: 'Trust in autonomous systems is earned through deterministic verification gates, not stochastic confidence scores.',
    },
  ];

  const learningPedagogy = [
    {
      num: '01',
      title: "Dewey's Experiential Construction",
      tagline: 'Reflective Inquiry Over Passive Consumption',
      icon: BookOpen,
      accent: '#06B6D4',
      desc: "Knowledge is actively forged through concrete experimentation, reflective observation, abstract conceptualization, and active testing. I do not 'read' systems—I implement their primitives from scratch to internalize their mechanical realities.",
      principle: 'Learning is doing with reflective feedback.',
    },
    {
      num: '02',
      title: 'Nishkama Karma Execution',
      tagline: 'Process Rigor Over Outcome Attachment',
      icon: Target,
      accent: '#D71920',
      desc: 'Rooted in timeless philosophical traditions: relentless, disciplined execution focused entirely on the craftsmanship of the work, detachment from vanity metrics, and total ownership over every line of code committed.',
      principle: 'Master the process; let results follow.',
    },
    {
      num: '03',
      title: 'Neurochemical Gating & Deep Focus',
      tagline: 'Cognitive Optimization for Hard Problems',
      icon: Brain,
      accent: '#10B981',
      desc: 'High-leverage engineering requires structured 90-minute ultradian deep-work blocks, zero-distraction terminal workflows, and active dopamine regulation to maintain extreme focus during complex systems debugging.',
      principle: 'Deep work produces asymmetric returns.',
    },
  ];

  const researchIdeas = [
    {
      num: '01',
      title: 'Local Small Language Models (SLMs)',
      tagline: 'Sub-3B Parameter Specialized Runtimes',
      icon: Cpu,
      accent: '#F59E0B',
      desc: 'Investigating dataset distillation and dynamic activation pruning to run specialized 1B-3B models on mobile NPUs at <10W power envelope with zero latency penalties.',
    },
    {
      num: '02',
      title: 'Edge Computer Vision with Dynamic Slicing',
      tagline: 'SAHI Inference on Tiny TPU Silicon',
      icon: Zap,
      accent: '#06B6D4',
      desc: 'Scaling SAHI dynamic tiling to multi-spectral drone thermal video streams, executing real-time survivor localization in GPS-denied disaster environments.',
    },
    {
      num: '03',
      title: 'Self-Healing Deterministic Agentic Loops',
      tagline: 'Bounded Maker/Checker Systems',
      icon: GitBranch,
      accent: '#8B5CF6',
      desc: 'Formalizing state-machine transitions and verifiable verification gates for autonomous code refactoring and dataset distillation pipelines.',
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
