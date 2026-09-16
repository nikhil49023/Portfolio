'use client';

import React, { useRef } from 'react';
import { BookOpen, Sparkles, Terminal, Cpu, Database, Layers, BarChart3, Navigation, Radio, Compass } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StatisticalBars from '@/components/ui/statistical-bars';
import { TextScramble } from '@/components/ui/text-scramble';
import { hapticAudio } from '@/lib/audio';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillCategory {
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accentColor: string;
  badgeBorder: string;
  badgeBg: string;
  badgeText: string;
  native: {
    skills: string[];
    desc: string;
  };
  augmented: {
    skills: string[];
    desc: string;
  };
}

const matrixData: SkillCategory[] = [
  {
    category: 'Core Languages & Systems',
    icon: Terminal,
    accentColor: '#F59E0B',
    badgeBorder: 'border-amber-500/30',
    badgeBg: 'bg-amber-500/10',
    badgeText: 'text-amber-500 dark:text-amber-400',
    native: {
      skills: ['C++17', 'Python 3.11', 'Linux Syscalls', 'Bash / Zsh', 'POSIX Threads'],
      desc: 'Hand-engineering core algorithms, memory budgets, lock-free ring buffers, file descriptor operations, and real-time POSIX timers on Linux.'
    },
    augmented: {
      skills: ['TypeScript', 'Rust FFI', 'Dart 3.5', 'Bun'],
      desc: 'Rapid scaffolding of interface definitions, type-safe API boundaries, and runtime interop bridges using AI agent loops.'
    }
  },
  {
    category: 'Autonomous Robotics & Swarm GNC',
    icon: Compass,
    accentColor: '#38bdf8',
    badgeBorder: 'border-sky-500/30',
    badgeBg: 'bg-sky-500/10',
    badgeText: 'text-sky-600 dark:text-sky-400',
    native: {
      skills: ['ROS 2 Humble/Jazzy', 'PX4 Autopilot (v1.14+)', 'MicroXRCE-DDS 50Hz', 'Gazebo Sim 8 Harmonic', 'EKF2 Odometry'],
      desc: 'Architecting deterministic guidance, navigation, and control (GNC) node graphs in C++17, lock-free ring buffers for 50Hz offboard setpoints, and multi-vehicle SITL swarm simulations.'
    },
    augmented: {
      skills: ['Deep JSCC Neural Mesh', 'ByteTrack MOT', 'TensorRT YOLOv8 FP16', '3D GIS GCS (Mapbox)'],
      desc: 'Orchestrating robust neural channel coding across RF-jammed channels (-5 dB SNR), real-time aerial target tracking, and 3D geospatial telemetry consoles.'
    }
  },
  {
    category: 'Databases & Relational Modeling',
    icon: Database,
    accentColor: '#06B6D4',
    badgeBorder: 'border-cyan-500/30',
    badgeBg: 'bg-cyan-500/10',
    badgeText: 'text-cyan-600 dark:text-cyan-400',
    native: {
      skills: ['SQL (Postgres / SQLite)', 'B-Tree Indexing', '3NF Schemas', 'AES-256 Vault'],
      desc: 'Designing strict relational schemas, complex joins, indexing strategies, and hardware-encrypted local databases compliant with DPDP Act 2023.'
    },
    augmented: {
      skills: ['Vector MBTiles', 'ChromaDB', 'Prisma ORM', 'Supabase'],
      desc: 'Automating database migrations, synthesizing test seed fixtures, and setting up hybrid relational/vector search layers.'
    }
  },
  {
    category: 'Edge ML & Computer Vision',
    icon: Cpu,
    accentColor: '#10B981',
    badgeBorder: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-500/10',
    badgeText: 'text-emerald-600 dark:text-emerald-400',
    native: {
      skills: ['YOLOv11-Nano', 'SAHI Tiling', 'PyTorch 2.5', 'INT8 TFLite', 'Google Coral TPU'],
      desc: 'Curating aerial vision datasets, architecting SAHI sliding-window inference, and quantizing weights to INT8 for sub-watt micro-TPU execution.'
    },
    augmented: {
      skills: ['LiteRT (Gemma 4)', 'ONNX Runtime', 'Hugging Face Hub'],
      desc: 'Orchestrating system-level on-device language models via LiteRT and packaging automated CI/CD model card pipelines.'
    }
  },
  {
    category: 'Developer Tooling & Infrastructure',
    icon: Layers,
    accentColor: '#8B5CF6',
    badgeBorder: 'border-purple-500/30',
    badgeBg: 'bg-purple-500/10',
    badgeText: 'text-purple-600 dark:text-purple-400',
    native: {
      skills: ['Docker Stacks', 'Local Firecrawl', 'Git Trunk Flow', 'Linux Daemons'],
      desc: 'Deploying self-hosted container stacks, configuring local documentation scrapers, and structuring robust release pipelines.'
    },
    augmented: {
      skills: ['Model Context Protocol (MCP)', 'google-adk', 'vLLM Routing', 'crawl4ai'],
      desc: 'Designing autonomous multi-agent delegation loops, custom MCP servers, and dynamic prompt distillation workflows (SFT / DPO).'
    }
  },
  {
    category: 'Data Science & Statistical Modeling',
    icon: Database,
    accentColor: '#D71920',
    badgeBorder: 'border-[#D71920]/30',
    badgeBg: 'bg-[#D71920]/10',
    badgeText: 'text-[#D71920]',
    native: {
      skills: ['Pandas & NumPy', 'Statistical EDA', 'Feature Engineering', 'Biometric Splits'],
      desc: 'Cleaning multi-dimensional biometric datasets, decomposing compound metrics, imputing missing values, and engineering structured pipelines.'
    },
    augmented: {
      skills: ['Seaborn Heatmaps', 'Matplotlib Figures', 'Kaggle Notebooks', 'Jupyter Lab'],
      desc: 'Generating multi-variable distribution pairplots, correlation matrices, and automated statistical report synthesis.'
    }
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const matrixWrapperRef = useRef<HTMLDivElement>(null);
  const benchmarkWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Header reveal
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
      });
    }

    // Matrix rows staggered reveal
    if (matrixWrapperRef.current) {
      const rows = matrixWrapperRef.current.querySelectorAll('.matrix-row');
      gsap.from(rows, {
        opacity: 0,
        y: 28,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: matrixWrapperRef.current,
          start: 'top 80%',
        },
      });
    }

    // Benchmark section reveal
    if (benchmarkWrapperRef.current) {
      gsap.from(benchmarkWrapperRef.current, {
        opacity: 0,
        y: 35,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: benchmarkWrapperRef.current,
          start: 'top 80%',
        },
      });
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D71920]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span>04 //</span>
              <TextScramble hoverTrigger duration={0.6}>Dual Capability Matrix</TextScramble>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>NATIVE HAND-WRITTEN INTERNALS + 10X AI-AUGMENTED VELOCITY</span>
          </div>
        </div>

        {/* Desktop Matrix (Machined Double-Bezel Table) */}
        <div 
          ref={matrixWrapperRef}
          className="hidden md:block machined-bezel rounded-[24px] shadow-lg overflow-hidden backdrop-blur-xl mb-16"
        >
          <div className="machined-inner rounded-[22px] overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 border-b border-[var(--border-subtle)] bg-[var(--bg-raised)]/70 py-4 px-6 text-[10px] font-mono font-bold tracking-widest text-[var(--ink-muted)] uppercase">
              <div className="col-span-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                <span>System Domain</span>
              </div>
              <div className="col-span-4 flex items-center gap-2 border-l border-[var(--border-subtle)] pl-6">
                <BookOpen size={12} className="text-[#06B6D4]" />
                <span className="text-[var(--ink-primary)]">Native Mastery (Hand-Engineered Logic)</span>
              </div>
              <div className="col-span-5 flex items-center gap-2 border-l border-[var(--border-subtle)] pl-6">
                <Sparkles size={12} className="text-[#D71920]" />
                <span className="text-[#D71920]">AI-Augmented Superpowers (MCP &amp; Agent Loops)</span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-[var(--border-subtle)] bg-[var(--bg-surface)]">
              {matrixData.map((row) => {
                const RowIcon = row.icon;
                return (
                  <div 
                    key={row.category} 
                    className="matrix-row grid grid-cols-12 py-5 px-6 hover:bg-[var(--bg-raised)]/60 transition-colors duration-200 group"
                  >
                    {/* Category name with domain icon */}
                    <div className="col-span-3 pr-4 flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded-[9px] flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] shrink-0 mt-0.5 shadow-sm transition-transform duration-200 group-hover:scale-105"
                        style={{ color: row.accentColor }}
                      >
                        <RowIcon size={15} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-sm text-[var(--ink-primary)] tracking-tight group-hover:text-[#D71920] transition-colors duration-200">
                          {row.category}
                        </h3>
                        <div className="text-[9.5px] font-mono text-[var(--ink-muted)] mt-0.5">
                          SYSTEM_LAYER // 0{matrixData.indexOf(row) + 1}
                        </div>
                      </div>
                    </div>

                    {/* Native column */}
                    <div className="col-span-4 pl-6 pr-4 border-l border-[var(--border-subtle)] space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {row.native.skills.map((s) => (
                          <span 
                            key={s} 
                            onMouseEnter={() => hapticAudio.playTactileClick()}
                            className="font-mono text-[9.5px] px-2.5 py-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-primary)] font-bold shadow-xs hover:border-[var(--border-active)] transition-all cursor-default"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs leading-relaxed text-[var(--ink-secondary)] font-body">
                        {row.native.desc}
                      </p>
                    </div>

                    {/* Augmented column */}
                    <div className="col-span-5 pl-6 border-l border-[var(--border-subtle)] space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        {row.augmented.skills.map((s) => (
                          <span 
                            key={s} 
                            onMouseEnter={() => hapticAudio.playTactileClick()}
                            className={`font-mono text-[9.5px] px-2.5 py-0.5 rounded-full border ${row.badgeBorder} ${row.badgeBg} ${row.badgeText} font-bold shadow-xs transition-all hover:scale-105 cursor-default`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs leading-relaxed text-[var(--ink-secondary)] font-body">
                        {row.augmented.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View (Machined Cards) */}
        <div className="md:hidden space-y-4 mb-14">
          {matrixData.map((row) => {
            const RowIcon = row.icon;
            return (
              <div key={row.category} className="machined-bezel rounded-[20px] overflow-hidden">
                <div className="machined-inner p-5 space-y-4 rounded-[18px] bg-[var(--bg-surface)]">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-8 h-8 rounded-[8px] flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)]"
                      style={{ color: row.accentColor }}
                    >
                      <RowIcon size={15} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-[var(--ink-primary)]">
                        {row.category}
                      </h3>
                      <div className="text-[9px] font-mono text-[var(--ink-muted)]">
                        SYSTEM_LAYER // 0{matrixData.indexOf(row) + 1}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-[var(--border-subtle)] pt-3">
                    <div className="text-[10px] font-mono font-bold text-[var(--ink-primary)] uppercase flex items-center gap-1.5">
                      <BookOpen size={11} className="text-[#06B6D4]" />
                      <span>Native Hand-Crafted</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {row.native.skills.map((s) => (
                        <span key={s} className="font-mono text-[9px] px-2 py-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-primary)] font-bold">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                      {row.native.desc}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-[var(--border-subtle)] pt-3">
                    <div className="text-[10px] font-mono font-bold text-[#D71920] uppercase flex items-center gap-1.5">
                      <Sparkles size={11} />
                      <span>AI-Augmented Velocity</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {row.augmented.skills.map((s) => (
                        <span key={s} className={`font-mono text-[9px] px-2 py-0.5 rounded-full border ${row.badgeBorder} ${row.badgeBg} ${row.badgeText} font-bold`}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                      {row.augmented.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Sub-Section: Production Performance Benchmarks (Integrated StatisticalBars) ── */}
        <div ref={benchmarkWrapperRef} className="pt-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#06B6D4]" />
              <h3 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
                <span>04.1 //</span>
                <span>System Architecture Benchmarks</span>
              </h3>
            </div>
            <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
              <BarChart3 size={11} className="text-[#06B6D4]" />
              <span>PRODUCTION TELEMETRY · 3 DIMENSIONS</span>
            </div>
          </div>

          {/* Machined Bezel Container for Statistical Bars */}
          <div className="machined-bezel rounded-[24px] overflow-hidden shadow-lg">
            <div className="machined-inner p-4 sm:p-8 rounded-[22px] bg-[var(--bg-surface)]/80 backdrop-blur-xl">
              <StatisticalBars />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
