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
  Radio,
  Navigation,
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
      title: 'Zero-Cloud Egress & Sovereign Privacy',
      tagline: '100% On-Device Neural Execution',
      icon: Shield,
      accentColor: '#10B981', // Emerald
      badgeClass: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      desc: 'Architecting local-first intelligence where sensitive data never leaves physical silicon. Powered by LiteRT, Gemma 4, and AES-256 SQLite vaults compliant with the DPDP Act 2023.',
      badge: 'LiteRT / Gemma 4',
    },
    {
      num: '02',
      title: 'Real-Time Deterministic Autonomy',
      tagline: '50 Hz Control Loops Over Jitter',
      icon: Navigation,
      accentColor: '#06B6D4', // Cyan
      badgeClass: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
      desc: 'Engineering multi-UAV autonomous swarm flight stacks using ROS 2, MicroXRCE-DDS, and PX4 Autopilot. Offboard trajectory setpoints stream at 50 Hz with 212/212 unit, integration, and SITL tests passing deterministically.',
      badge: '50 Hz / 212 Tests',
    },
    {
      num: '03',
      title: 'Deterministic Dataset Distillation',
      tagline: 'High-Entropy Synthesis Beats Ephemeral Prompts',
      icon: Layers,
      accentColor: '#F59E0B', // Amber
      badgeClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      desc: 'Transforming unstructured technical documentation into structured Parquet and Hugging Face corpora via bounded autonomous research agent loops (saara-ai CLI, 38 releases on PyPI).',
      badge: '38 Releases / 2.6k+ DL',
    },
  ];

  const hardwareSpecs = [
    { category: 'Host Kernel', value: 'Linux (Ubuntu 24.04 LTS x86_64 / ARM64)', meta: 'POSIX syscalls, real-time timers, lock-free queues' },
    { category: 'Autonomous Avionics', value: 'PX4 Autopilot v1.14+ & ROS 2 Humble/Jazzy', meta: '50Hz MicroXRCE-DDS, Gazebo Sim 8 Harmonic SITL' },
    { category: 'Edge Accelerators', value: 'NVIDIA Jetson Orin Nano + Coral Edge TPU', meta: 'TensorRT INT8 quantization (38.4 FPS), CUDA Graphs' },
    { category: 'Primary Languages', value: 'C++17, Python 3.11, Rust FFI, Dart 3.5, SQL', meta: 'Memory-safe layouts, zero-copy buffers, SIMD' },
    { category: 'Local ML Runtimes', value: 'LiteRT, TensorRT, vLLM, PyTorch 2.5, ONNX', meta: '100% offline execution with zero telemetry' },
    { category: 'Agent Scaffolding', value: 'Model Context Protocol (MCP), google-adk', meta: 'Deterministic Maker/Checker test gates' },
  ];

  const milestones = [
    {
      date: '2026',
      title: 'Project SUTRA: Autonomous Swarm Monorepo',
      desc: 'Architected 6 production subsystems for multi-UAV disaster SAR: 50Hz DDS offboard control, Deep JSCC mesh, and 212/212 passing SITL tests.',
    },
    {
      date: '2026',
      title: 'saara-ai v2.0 Distributed CLI',
      desc: 'Shipped 38 stable package releases on PyPI and NPM. Reached 2,600+ PyPI downloads for automated dataset synthesis.',
    },
    {
      date: '2026',
      title: 'National Finalist: Vitt (OpenAI Academy x IndiaAI)',
      desc: 'Engineered 100% on-device AI financial tracking app with local Android notification listeners and zero cloud dependency.',
    },
    {
      date: '2025',
      title: 'AerialEye Disaster CV & Dataset Launch',
      desc: 'Curated 6,327 aerial images and fine-tuned YOLOv11-Nano with SAHI slicing on Hugging Face (1,900+ downloads).',
    },
    {
      date: '2025',
      title: 'Computer Science & Systems Engineering @ NxtWave',
      desc: 'Class of 2029 (Hyderabad). Focused on systems programming, operating systems, compiler ASTs, and edge AI.',
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

    // Left manifesto & right terminal stagger
    gsap.fromTo(
      [leftColRef.current, rightColRef.current],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
        },
      }
    );

    // Tenets staggered entrance
    if (tenetsRef.current) {
      const cards = tenetsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
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
        
        {/* ── TOP TELEMETRY RIBBON ── */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-[var(--border-subtle)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D71920] shadow-[0_0_8px_#D71920]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span className="text-[#D71920]">01 //</span>
              <span>Architectural Identity &amp; Mission</span>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>HYDERABAD, IN [17.3850° N] · NXTWAVE (CLASS OF 2029)</span>
          </div>
        </div>

        {/* ── EDITORIAL LEAD-IN & DOSSIER GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Authoritative Editorial Manifesto */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D71920] border border-[#D71920]/20 bg-[#D71920]/5 px-3 py-1 rounded-full inline-block">
                SYSTEMS ARCHITECT &amp; AUTONOMY ENGINEER
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--ink-primary)] leading-tight">
                Deterministic Autonomy on Bare Silicon.
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-[var(--ink-secondary)] font-body">
              Autonomy is binary: at 50 Hz, either the flight controller calculates the correct trajectory setpoint or the vehicle drops. No cloud API can rescue a failing control loop with 200 milliseconds of network latency.
            </p>

            <p className="text-sm leading-relaxed text-[var(--ink-secondary)] font-body">
              I bridge low-level systems programming (POSIX syscalls, memory budgets, lock-free ring buffers, C++17) with cutting-edge physical AI and multi-agent systems. I engineer sovereign software stacks where models execute <strong className="text-[var(--ink-primary)] font-bold">directly on physical silicon</strong>—eliminating API taxes, guaranteeing zero cloud egress, and surviving in communications-denied environments.
            </p>

            {/* Micro-Telemetry Badge */}
            <div className="machined-bezel">
              <div className="machined-inner p-4 space-y-2.5 font-mono">
                <div className="flex justify-between items-center text-[10px] border-b border-[var(--border-subtle)] dark:border-white/5 pb-2">
                  <span className="text-[var(--ink-muted)] uppercase tracking-wider font-bold">runtime_status</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    NODE // ONLINE
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px] text-[var(--ink-primary)]">
                  <div className="flex justify-between">
                    <span className="text-[var(--ink-muted)]">Active Systems:</span>
                    <span className="font-bold text-[#D71920]">Project SUTRA + saara-ai</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--ink-muted)]">Autonomous Stack:</span>
                    <span className="font-bold text-cyan-400">50Hz DDS + Gazebo 8 SITL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--ink-muted)]">Edge Accelerators:</span>
                    <span className="font-bold">Jetson Orin + Coral TPU</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--ink-muted)]">Verification Gates:</span>
                    <span className="font-bold text-emerald-500">212/212 Passing Tests</span>
                  </div>
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
            <div className="machined-bezel">
              <div className="machined-inner overflow-hidden shadow-sm backdrop-blur-xl">
                
                {/* Tab Navigation Header */}
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] dark:border-white/5 px-4 py-2.5 bg-[var(--bg-raised)]/40 dark:bg-white/[0.02]">
                  <div className="flex gap-1.5 overflow-x-auto">
                    {(
                      [
                        { id: 'boot', label: '01 // System Boot', icon: TerminalIcon },
                        { id: 'narrative', label: '02 // Focus & Mission', icon: Compass },
                        { id: 'stack', label: '03 // Hardware Matrix', icon: HardDrive },
                        { id: 'milestones', label: '04 // Timeline', icon: GitCommit },
                      ] as const
                    ).map((tab) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => handleTabChange(tab.id)}
                          className={cn(
                            'flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono transition-all rounded-full cursor-pointer whitespace-nowrap active:scale-95',
                            isActive
                              ? 'bg-[var(--ink-primary)] text-[var(--bg-void)] font-bold shadow-sm'
                              : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)] hover:bg-[var(--bg-raised)]'
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
                    <span>DOSSIER_v2.6</span>
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
                            $ nikhil --boot --mode=autonomous-systems --silicon=bare-metal
                          </TypingAnimation>

                          <AnimatedSpan delay={250} className="text-zinc-400">
                            <span>✔ Host: Linux 6.8.0-generic (Ubuntu 24.04 LTS x86_64 / ARM64)</span>
                          </AnimatedSpan>

                          <AnimatedSpan delay={500} className="text-zinc-400">
                            <span>✔ Avionics: PX4 Autopilot v1.14+ streaming 50Hz setpoints via MicroXRCE-DDS</span>
                          </AnimatedSpan>

                          <AnimatedSpan delay={750} className="text-zinc-400">
                            <span>✔ Physics SITL: Gazebo Sim 8 (Harmonic) // 212/212 tests passing deterministically</span>
                          </AnimatedSpan>

                          <AnimatedSpan delay={1000} className="text-zinc-400">
                            <span>✔ Edge Vision: TensorRT INT8 YOLOv8 (38.4 FPS on Jetson Orin) + ByteTrack MOT</span>
                          </AnimatedSpan>

                          <AnimatedSpan delay={1250} className="text-zinc-400">
                            <span>✔ Tooling: saara-ai v2.0 (38 releases / 2,600+ PyPI downloads)</span>
                          </AnimatedSpan>

                          <AnimatedSpan delay={1500} className="text-zinc-400">
                            <span>✔ Local Vault: Vitt (LiteRT + Gemma 4 / DPDP Act 2023 zero-egress)</span>
                          </AnimatedSpan>

                          <AnimatedSpan delay={1750} className="text-emerald-400 font-bold">
                            <span>[VERIFIED] All systems executing locally on silicon. Zero cloud dependencies.</span>
                          </AnimatedSpan>
                        </Terminal>
                      </motion.div>
                    )}

                    {/* TAB 2: Narrative */}
                    {activeTab === 'narrative' && (
                      <motion.div
                        key="narrative"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4 font-body text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed"
                      >
                        <p>
                          High-level abstractions are only as reliable as the low-level systems underneath them. My technical methodology bridges classical operating systems fundamentals (POSIX syscalls, lock-free ring buffers, real-time timers) with real-time autonomous robotics and on-device neural acceleration.
                        </p>
                        <p>
                          Rather than treating AI as a cloud API wrapper, I design complete sovereign execution stacks: real-time 50 Hz offboard flight guidance with <strong className="text-[var(--ink-primary)]">PX4 &amp; ROS 2</strong>, curating dataset distillation pipelines with <strong className="text-[var(--ink-primary)]">saara-ai</strong>, quantizing vision models for <strong className="text-[var(--ink-primary)]">Jetson Orin TensorRT</strong>, and running offline language models with <strong className="text-[var(--ink-primary)]">LiteRT &amp; Gemma 4</strong>.
                        </p>
                      </motion.div>
                    )}

                    {/* TAB 3: Hardware Matrix */}
                    {activeTab === 'stack' && (
                      <motion.div
                        key="stack"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        {hardwareSpecs.map((spec) => (
                          <div
                            key={spec.category}
                            className="p-3 border border-[var(--border-subtle)] dark:border-white/5 bg-[var(--bg-void)] rounded-[14px] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
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
                        className="space-y-4"
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

        </div>

        {/* ── 3 CORE ARCHITECTURAL TENETS (MACHINED DOUBLE-BEZEL) ── */}
        <div ref={tenetsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tenets.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.num}
                className="machined-bezel group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="machined-inner p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#D71920]">
                        // {t.num}
                      </span>
                      <span className={cn('text-[9px] font-mono px-2.5 py-0.5 rounded-full border', t.badgeClass)}>
                        {t.badge}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-base text-[var(--ink-primary)] mb-1 group-hover:text-[#D71920] transition-colors">
                      {t.title}
                    </h4>
                    <div className="text-[11px] font-mono text-[#D71920] mb-3">
                      {t.tagline}
                    </div>
                    <p className="text-xs text-[var(--ink-secondary)] leading-relaxed font-body">
                      {t.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[var(--border-subtle)] dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-[var(--ink-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Icon size={12} style={{ color: t.accentColor }} />
                      <span className="font-semibold">SYSTEM_VERIFIED</span>
                    </span>
                    <span className="text-emerald-500 font-bold">100% LOCAL</span>
                  </div>
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
