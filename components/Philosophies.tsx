'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Brain,
  Cpu,
  Shield,
  Sparkles,
  BookOpen,
  Target,
  GitBranch,
  Zap,
  Layers,
  Activity,
  Lock,
  ChevronRight,
  Terminal,
  Flame,
  ArrowRight,
  Quote,
  HeartHandshake,
  Dumbbell,
  Compass,
  Sunrise,
  Clock,
  CheckCircle2,
  Code2,
  Workflow
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { TextScramble } from '@/components/ui/text-scramble';
import { hapticAudio } from '@/lib/audio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type PhilosophyTab = 'discipline' | 'first_principles' | 'devotion';

export function Philosophies() {
  const [activeTab, setActiveTab] = useState<PhilosophyTab>('discipline');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 28 },
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
    }

    if (tabsRef.current) {
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
    }

    if (panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panelRef.current,
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
      className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] relative overflow-hidden select-none py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8 pb-4 border-b border-[var(--border-subtle)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D71920] shadow-[0_0_8px_#D71920]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span className="text-[#D71920]">03 //</span>
              <TextScramble hoverTrigger duration={0.6}>Cognitive Architecture &amp; Mindset</TextScramble>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPERATING SYSTEM: BIOLOGICAL RIGOR · FIRST-PRINCIPLES MATH · AI MULTIPLIER</span>
          </div>
        </div>

        {/* Global Architecture Telemetry Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="p-3.5 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-red-50 text-[#D71920] flex items-center justify-center shrink-0">
              <Sunrise size={15} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[var(--ink-muted)]">MILITARY DAWN BLOCK</div>
              <div className="text-xs font-mono font-bold text-[var(--ink-primary)]">05:00 AM Sharp (DSA)</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
              <Brain size={15} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[var(--ink-muted)]">NEURAL TRANSDUCTION</div>
              <div className="text-xs font-mono font-bold text-[var(--ink-primary)]">Friction = Synaptic Tag</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock size={15} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[var(--ink-muted)]">FLOW CADENCE</div>
              <div className="text-xs font-mono font-bold text-[var(--ink-primary)]">90m Ultradian Cycles</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-[var(--border-subtle)] shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Sparkles size={15} />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[var(--ink-muted)]">AI VELOCITY</div>
              <div className="text-xs font-mono font-bold text-[var(--ink-primary)]">10x Output · 0% Vibe</div>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div ref={tabsRef} className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {(
            [
              { id: 'discipline', label: 'CH-01 // Biological Operating Engine', icon: Brain, accent: '#D71920' },
              { id: 'first_principles', label: 'CH-02 // First-Principles Epistemology', icon: Cpu, accent: '#06B6D4' },
              { id: 'devotion', label: 'CH-03 // Nishkama Karma & Craftsmanship', icon: HeartHandshake, accent: '#10B981' },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabSelect(tab.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 text-xs font-mono rounded-xl border transition-all cursor-pointer whitespace-nowrap active:scale-95',
                  isActive
                    ? 'border-[#D71920] bg-white text-[var(--ink-primary)] font-bold shadow-sm'
                    : 'border-[var(--border-subtle)] text-[var(--ink-muted)] hover:text-[var(--ink-primary)] bg-white/60 hover:bg-white'
                )}
              >
                <span
                  className={cn('w-1.5 h-1.5 rounded-full', isActive ? 'animate-ping' : 'bg-zinc-400')}
                  style={{ backgroundColor: isActive ? tab.accent : undefined }}
                />
                <Icon size={13} style={{ color: isActive ? tab.accent : undefined }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Console Panel */}
        <div ref={panelRef}>
          <AnimatePresence mode="wait">
            
            {/* ── TAB 1: BIOLOGICAL DISCIPLINE & COGNITIVE OS ── */}
            {activeTab === 'discipline' && (
              <motion.div
                key="discipline"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Visual Pipeline: Cognitive Friction Transmutation */}
                <div className="machined-bezel rounded-3xl overflow-hidden shadow-sm">
                  <div className="machined-inner p-6 sm:p-8 bg-white space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#D71920] font-bold uppercase inline-block mb-1">
                          NEUROBIOLOGICAL ARCHITECTURE // GATEWAY 01
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold font-display text-[var(--ink-primary)] tracking-tight">
                          The Cognitive Friction Transmutation Loop
                        </h3>
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 font-bold">
                        Zero Dopamine Drain Protocol
                      </span>
                    </div>

                    {/* 4-Step Synaptic Transmutation Flow */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#D71920]">01 // RESISTANCE</span>
                          <Flame size={14} className="text-[#D71920]" />
                        </div>
                        <h4 className="text-xs font-bold font-display text-[var(--ink-primary)]">High Cognitive Friction</h4>
                        <p className="text-[11px] text-[var(--ink-secondary)] leading-relaxed font-body">
                          Hard math (MML) or memory debugging triggers low baseline dopamine; limbic brain seeks instant escape.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-600">02 // TRANSMUTATION</span>
                          <Dumbbell size={14} className="text-cyan-600" />
                        </div>
                        <h4 className="text-xs font-bold font-display text-[var(--ink-primary)]">Instant Somatic Break</h4>
                        <p className="text-[11px] text-[var(--ink-secondary)] leading-relaxed font-body">
                          Stand up immediately upon impulse. 20 pushups, 500ml cold hydration. Absolute bedroom and bed exclusion.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-purple-600">03 // BIO-GATING</span>
                          <Activity size={14} className="text-purple-600" />
                        </div>
                        <h4 className="text-xs font-bold font-display text-[var(--ink-primary)]">Synaptic Tagging</h4>
                        <p className="text-[11px] text-[var(--ink-secondary)] leading-relaxed font-body">
                          Friction is the exact biological release of acetylcholine &amp; norepinephrine tagging synapses for neuroplastic growth.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-2 relative">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-emerald-600">04 // RECOVERY</span>
                          <CheckCircle2 size={14} className="text-emerald-600" />
                        </div>
                        <h4 className="text-xs font-bold font-display text-[var(--ink-primary)]">Unbroken Ultradian Flow</h4>
                        <p className="text-[11px] text-[var(--ink-secondary)] leading-relaxed font-body">
                          90-minute immersion blocks followed by 6.5 hours of synaptic consolidation sleep.
                        </p>
                      </div>
                    </div>

                    {/* Operational Rhythm Protocol */}
                    <div className="border-t border-[var(--border-subtle)] pt-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-[#D71920]" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--ink-primary)]">
                          Non-Negotiable Daily Cadence (Military Discipline Protocol)
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#D71920] mb-1">
                            <span>05:00 AM – 07:00 AM</span>
                            <span>2.0 HRS</span>
                          </div>
                          <div className="text-xs font-bold text-[var(--ink-primary)] mb-0.5">Military Morning DSA</div>
                          <p className="text-[11px] text-[var(--ink-secondary)]">
                            Native C++ and Python problem solving. Single-take independent solving with zero AI code generation.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-cyan-600 mb-1">
                            <span>09:00 AM – 04:00 PM</span>
                            <span>DEEP WORK</span>
                          </div>
                          <div className="text-xs font-bold text-[var(--ink-primary)] mb-0.5">Systems Architecture</div>
                          <p className="text-[11px] text-[var(--ink-secondary)]">
                            Deep tech systems, robotics simulations, and compiler-checked software in 90-minute ultradian blocks.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-amber-600 mb-1">
                            <span>04:00 PM – 05:30 PM</span>
                            <span>PHYSICAL</span>
                          </div>
                          <div className="text-xs font-bold text-[var(--ink-primary)] mb-0.5">Physical Conditioning &amp; Resilience</div>
                          <p className="text-[11px] text-[var(--ink-secondary)]">
                            Heavy compound lifts to reinforce bone density, somatic resilience, and androgen receptor signaling.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-purple-600 mb-1">
                            <span>05:30 PM – 08:00 PM</span>
                            <span>2.5 HRS</span>
                          </div>
                          <div className="text-xs font-bold text-[var(--ink-primary)] mb-0.5">Math for ML &amp; Neural Nets</div>
                          <p className="text-[11px] text-[var(--ink-secondary)]">
                            Matrix calculus, analytic geometry, and deriving Goodfellow deep learning architectures from scratch.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-emerald-600 mb-1">
                            <span>08:45 PM – 10:30 PM</span>
                            <span>SYNTHESIS</span>
                          </div>
                          <div className="text-xs font-bold text-[var(--ink-primary)] mb-0.5">Active Recall &amp; Git Sync</div>
                          <p className="text-[11px] text-[var(--ink-secondary)]">
                            Flashcard review, conceptual doubt resolution, and staging verified clean commits to GitHub.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60">
                          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-zinc-500 mb-1">
                            <span>10:30 PM – 04:30 AM</span>
                            <span>6.0 HRS</span>
                          </div>
                          <div className="text-xs font-bold text-[var(--ink-primary)] mb-0.5">Synaptic Consolidation</div>
                          <p className="text-[11px] text-[var(--ink-secondary)]">
                            Unbroken deep sleep for biological memory replay, cellular restoration, and synaptic pruning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── TAB 2: FIRST-PRINCIPLES EPISTEMOLOGY ── */}
            {activeTab === 'first_principles' && (
              <motion.div
                key="first_principles"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* 4 Sovereign Engineering Axioms */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Axiom 1: Math Derivation */}
                  <div className="machined-bezel rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all">
                    <div className="machined-inner p-6 sm:p-7 bg-white flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-[#D71920] px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200">
                            AXIOM 01 // FIRST-PRINCIPLES MATH
                          </span>
                          <Code2 size={16} className="text-[#D71920]" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold font-display text-[var(--ink-primary)] mb-1">
                          Build It to Own It (No Black Boxes)
                        </h4>
                        <div className="text-xs font-mono text-[var(--ink-muted)] mb-3">
                          Analytical Matrix Calculus Beats Blind .backward()
                        </div>
                        <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body mb-4">
                          You do not understand deep learning until you derive analytical backpropagation by hand and implement forward/backward computational graphs in raw NumPy and C++. When complex systems destabilize in production, mathematical grounding is the only compass.
                        </p>

                        {/* Visual Formula Card */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-[var(--border-subtle)] font-mono text-xs text-[var(--ink-primary)] space-y-1">
                          <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Verified Implementation:</div>
                          <div className="font-bold text-[#D71920]">github.com/nikhil49023/MLP</div>
                          <div className="text-[11px] text-zinc-500">dZ^[l] = dA^[l] * g&apos;(Z^[l])  ·  dW^[l] = (1/m) dZ^[l] (A^[l-1])^T</div>
                        </div>
                      </div>

                      <div className="p-3 border border-[var(--border-subtle)] bg-[var(--bg-void)] rounded-xl flex items-start gap-2">
                        <Quote size={12} className="text-[#D71920] shrink-0 mt-0.5" />
                        <span className="text-[11px] font-mono text-[var(--ink-muted)] italic leading-snug">
                          &ldquo;AI magnifies architectural taste; it does not replace understanding of memory layouts.&rdquo;
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Axiom 2: Sovereign Silicon */}
                  <div className="machined-bezel rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all">
                    <div className="machined-inner p-6 sm:p-7 bg-white flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                            AXIOM 02 // HARDWARE SOVEREIGNTY
                          </span>
                          <Shield size={16} className="text-emerald-600" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold font-display text-[var(--ink-primary)] mb-1">
                          Private by Physics, Not Policy
                        </h4>
                        <div className="text-xs font-mono text-[var(--ink-muted)] mb-3">
                          Local Silicon Beats Cloud Subscription Egress
                        </div>
                        <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body mb-4">
                          Routing sensitive user data to cloud APIs introduces compounding egress fees, latency bottlenecks, and telemetry leaks. In Vitt, financial intelligence executes on offline mobile silicon with local AES-256 SQLite vaults. Zero bytes leave the chip.
                        </p>

                        {/* Visual Spec Card */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-[var(--border-subtle)] font-mono text-xs text-[var(--ink-primary)] space-y-1">
                          <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Verified Implementation:</div>
                          <div className="font-bold text-emerald-600">github.com/nikhil49023/VITT</div>
                          <div className="text-[11px] text-zinc-500">100% On-Device LiteRT · AES-256 Vault · 0 B Cloud Egress</div>
                        </div>
                      </div>

                      <div className="p-3 border border-[var(--border-subtle)] bg-[var(--bg-void)] rounded-xl flex items-start gap-2">
                        <Quote size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] font-mono text-[var(--ink-muted)] italic leading-snug">
                          &ldquo;Privacy is not a legal disclaimer; it is an impenetrable hardware boundary.&rdquo;
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Axiom 3: Clean Data Moats */}
                  <div className="machined-bezel rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all">
                    <div className="machined-inner p-6 sm:p-7 bg-white flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-amber-700 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                            AXIOM 03 // DATA CURATION
                          </span>
                          <Layers size={16} className="text-amber-600" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold font-display text-[var(--ink-primary)] mb-1">
                          High-Entropy Curation is the True Moat
                        </h4>
                        <div className="text-xs font-mono text-[var(--ink-muted)] mb-3">
                          Deterministic Distillation Beats Random Web Corpora
                        </div>
                        <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body mb-4">
                          Model weights are commodity artifacts regenerated on demand. High-entropy, curated domain knowledge is the lasting competitive advantage. Built saara-ai (2,600+ PyPI downloads, 38 releases) to transform raw engineering documentation into clean Parquet knowledge bases.
                        </p>

                        {/* Visual Spec Card */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-[var(--border-subtle)] font-mono text-xs text-[var(--ink-primary)] space-y-1">
                          <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Verified Implementation:</div>
                          <div className="font-bold text-amber-600">github.com/nikhil49023/Saara · PyPI: saara-ai</div>
                          <div className="text-[11px] text-zinc-500">AST Documentation Crawler · 2,600+ PyPI Installs</div>
                        </div>
                      </div>

                      <div className="p-3 border border-[var(--border-subtle)] bg-[var(--bg-void)] rounded-xl flex items-start gap-2">
                        <Quote size={12} className="text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] font-mono text-[var(--ink-muted)] italic leading-snug">
                          &ldquo;The moat is never the model weights. The moat is deterministic data distillation.&rdquo;
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Axiom 4: AI Leveraged by Architecture */}
                  <div className="machined-bezel rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all">
                    <div className="machined-inner p-6 sm:p-7 bg-white flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-cyan-700 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200">
                            AXIOM 04 // AGENTIC VELOCITY
                          </span>
                          <Workflow size={16} className="text-cyan-600" />
                        </div>
                        <h4 className="text-base sm:text-lg font-bold font-display text-[var(--ink-primary)] mb-1">
                          Architecture Governs Speed
                        </h4>
                        <div className="text-xs font-mono text-[var(--ink-muted)] mb-3">
                          Autonomous Swarms with Deterministic Compile Gates
                        </div>
                        <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body mb-4">
                          Unstructured prompting yields fragile vibe-code. High-agency engineering orchestrates autonomous agent swarms across strict domain boundaries, typed interfaces, and automated test gates to ship production software at 10x velocity.
                        </p>

                        {/* Visual Spec Card */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-[var(--border-subtle)] font-mono text-xs text-[var(--ink-primary)] space-y-1">
                          <div className="text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Verified Implementation:</div>
                          <div className="font-bold text-cyan-600">github.com/nikhil49023/SUTRA</div>
                          <div className="text-[11px] text-zinc-500">ROS 2 Humble · 50Hz PX4 DDS · Gazebo Harmonic SITL</div>
                        </div>
                      </div>

                      <div className="p-3 border border-[var(--border-subtle)] bg-[var(--bg-void)] rounded-xl flex items-start gap-2">
                        <Quote size={12} className="text-cyan-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] font-mono text-[var(--ink-muted)] italic leading-snug">
                          &ldquo;AI accelerates the execution loop. Architectural taste governs the destination.&rdquo;
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* ── TAB 3: NISHKAMA KARMA & DEVOTION ── */}
            {activeTab === 'devotion' && (
              <motion.div
                key="devotion"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Pillar 1: Nishkama Karma */}
                  <div className="machined-bezel rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all">
                    <div className="machined-inner p-6 sm:p-7 bg-white flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-[#D71920] px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200">
                            PILLAR 01 // NISHKAMA KARMA
                          </span>
                          <Target size={16} className="text-[#D71920]" />
                        </div>
                        <h4 className="text-base font-bold font-display text-[var(--ink-primary)] mb-1">
                          Craftsmanship Over Vanity
                        </h4>
                        <div className="text-xs font-mono text-[var(--ink-muted)] mb-3">
                          Relentless Action, Zero Anxiety for Clout
                        </div>
                        <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body">
                          Total devotion to the mathematical rigor of the system, memory boundaries, and production uptime. Zero mental energy wasted on superficial social media clout, vanity metrics, or hype cycles.
                        </p>
                      </div>

                      <div className="p-3 border border-[var(--border-subtle)] bg-[var(--bg-void)] rounded-xl text-center font-mono text-[10px] text-[var(--ink-muted)]">
                        &ldquo;You have a right to your actions, never to their fruits alone.&rdquo;
                      </div>
                    </div>
                  </div>

                  {/* Pillar 2: Radical Humility & Team Equality */}
                  <div className="machined-bezel rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all">
                    <div className="machined-inner p-6 sm:p-7 bg-white flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-cyan-700 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-cyan-200">
                            PILLAR 02 // TEAM EQUALITY
                          </span>
                          <HeartHandshake size={16} className="text-cyan-600" />
                        </div>
                        <h4 className="text-base font-bold font-display text-[var(--ink-primary)] mb-1">
                          Radical Humility &amp; Shared Glory
                        </h4>
                        <div className="text-xs font-mono text-[var(--ink-muted)] mb-3">
                          Absolute Equality Over Individual Glorification
                        </div>
                        <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body">
                          True systems engineering is an egalitarian, collaborative endeavor. Zero self-glorification tags in codebases or slides. Work is attributed to the collective team and sovereign engineering principles.
                        </p>
                      </div>

                      <div className="p-3 border border-[var(--border-subtle)] bg-[var(--bg-void)] rounded-xl text-center font-mono text-[10px] text-[var(--ink-muted)]">
                        &ldquo;The code that runs on bare silicon is the only validation required.&rdquo;
                      </div>
                    </div>
                  </div>

                  {/* Pillar 3: Experiential Dewey Loop */}
                  <div className="machined-bezel rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all">
                    <div className="machined-inner p-6 sm:p-7 bg-white flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                            PILLAR 03 // DEWEY PEDAGOGY
                          </span>
                          <BookOpen size={16} className="text-emerald-600" />
                        </div>
                        <h4 className="text-base font-bold font-display text-[var(--ink-primary)] mb-1">
                          Experiential Reflection
                        </h4>
                        <div className="text-xs font-mono text-[var(--ink-muted)] mb-3">
                          Construction · Failure Boundary · Synthesis
                        </div>
                        <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body">
                          True understanding emerges only through mechanical encounter with failure boundaries. We construct from scratch, hit compiler and runtime limits, reflect on first principles, and distill durable mental models.
                        </p>
                      </div>

                      <div className="p-3 border border-[var(--border-subtle)] bg-[var(--bg-void)] rounded-xl text-center font-mono text-[10px] text-[var(--ink-muted)]">
                        &ldquo;Education is not preparation for life; education is the process of living.&rdquo;
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default Philosophies;
