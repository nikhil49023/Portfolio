'use client';

import { BookOpen, Sparkles, Terminal, Cpu, Database, Layers } from 'lucide-react';

const matrixData = [
  {
    category: 'Core Languages & Systems',
    icon: Terminal,
    native: {
      skills: ['Python 3.11', 'C++17', 'Linux Syscalls', 'Bash / Zsh', 'POSIX'],
      desc: 'Hand-engineering core algorithms, memory management, file descriptor operations, multi-threading, and system utilities on Linux.'
    },
    augmented: {
      skills: ['TypeScript', 'Rust FFI', 'Dart 3.5', 'Bun'],
      desc: 'Rapid scaffolding of interface definitions, type-safe API boundaries, and runtime interop bridges using AI agent loops.'
    }
  },
  {
    category: 'Databases & Relational Modeling',
    icon: Database,
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
    native: {
      skills: ['YOLOv11-Nano', 'SAHI Tiling', 'PyTorch 2.5', 'INT8 TFLite', 'Google Coral TPU'],
      desc: 'Curating aerial vision datasets, architecting SAHI sliding-window inference, and quantizing weights to INT8 for sub-watt micro-TPU execution.'
    },
    augmented: {
      skills: ['LiteRT (Gemma 4 E2B)', 'ONNX Runtime', 'Hugging Face Hub'],
      desc: 'Orchestrating system-level on-device language models via LiteRT and packaging automated CI/CD model card pipelines.'
    }
  },
  {
    category: 'Developer Tooling & Environments',
    icon: Layers,
    native: {
      skills: ['Docker Stacks', 'Local Firecrawl', 'Git Trunk Flow', 'Linux Daemons'],
      desc: 'Deploying self-hosted container stacks, configuring local documentation scrapers, and structuring robust CI/CD release pipelines.'
    },
    augmented: {
      skills: ['Model Context Protocol (MCP)', 'google-adk', 'vLLM Routing', 'crawl4ai'],
      desc: 'Designing autonomous multi-agent delegation loops, custom MCP servers, and dynamic prompt distillation workflows (SFT / DPO).'
    }
  },
  {
    category: 'Data Science & Statistical Modeling',
    icon: Database,
    native: {
      skills: ['Pandas & NumPy', 'Statistical EDA', 'Feature Engineering', 'Blood Pressure Splits'],
      desc: 'Cleaning multi-dimensional biometric datasets, decomposing compound metrics, imputing missing values, and engineering structured pipelines.'
    },
    augmented: {
      skills: ['Seaborn Heatmaps', 'Matplotlib Figures', 'Kaggle Notebooks', 'Jupyter Lab'],
      desc: 'Generating multi-variable distribution pairplots, correlation matrices, and automated statistical report synthesis.'
    }
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] relative overflow-hidden select-none">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-[50vw] h-[300px] bg-[radial-gradient(circle_at_top,color-mix(in_oklch,var(--brand-primary)_4%,transparent),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">03</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              Dual Capability Matrix
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)]">
            <span>NATIVE HAND-WRITTEN INTERNALS + 10X AI-AUGMENTED VELOCITY</span>
          </div>
        </div>

        {/* Desktop Matrix (Table-like grid) */}
        <div className="hidden md:block border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] py-4 px-6 text-[10px] font-mono font-bold tracking-widest text-[var(--ink-muted)] uppercase">
            <div className="col-span-3">System Domain</div>
            <div className="col-span-4 flex items-center gap-1.5 border-l border-[var(--border-subtle)] pl-6">
              <BookOpen size={12} className="text-[var(--ink-primary)]" />
              <span className="text-[var(--ink-primary)]">Native Mastery (Hand-Engineered Logic)</span>
            </div>
            <div className="col-span-5 flex items-center gap-1.5 border-l border-[var(--border-subtle)] pl-6">
              <Sparkles size={12} className="text-[var(--brand-primary)]" />
              <span className="text-[var(--brand-primary)]">AI-Augmented Superpowers (MCP &amp; Tooling)</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[var(--border-subtle)]">
            {matrixData.map((row) => {
              const RowIcon = row.icon;
              return (
                <div 
                  key={row.category} 
                  className="grid grid-cols-12 py-5 px-6 hover:bg-[var(--bg-surface)] transition-colors duration-200 group"
                >
                  {/* Category name with domain icon */}
                  <div className="col-span-3 pr-4 flex items-start gap-2.5">
                    <div className="w-6 h-6 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--brand-primary)] shrink-0 mt-0.5">
                      <RowIcon size={12} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-[var(--ink-primary)] tracking-tight group-hover:text-[var(--brand-primary)] transition-colors duration-200">
                        {row.category}
                      </h3>
                    </div>
                  </div>

                  {/* Native column */}
                  <div className="col-span-4 pl-6 pr-4 border-l border-[var(--border-subtle)] space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {row.native.skills.map((s) => (
                        <span 
                          key={s} 
                          className="font-mono text-[9.5px] px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-primary)] font-bold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--ink-secondary)]">
                      {row.native.desc}
                    </p>
                  </div>

                  {/* AI-Augmented column */}
                  <div className="col-span-5 pl-6 border-l border-[var(--border-subtle)] space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {row.augmented.skills.map((s) => (
                        <span 
                          key={s} 
                          className="font-mono text-[9.5px] px-2 py-0.5 border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/5 text-[var(--brand-primary)] font-bold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--ink-secondary)]">
                      {row.augmented.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {matrixData.map((row) => (
            <div 
              key={row.category}
              className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 space-y-4 shadow-sm"
            >
              <h3 className="font-display font-bold text-base text-[var(--ink-primary)] tracking-tight">
                {row.category}
              </h3>

              <div className="space-y-2 p-3 bg-[var(--bg-void)] border border-[var(--border-subtle)]">
                <div className="text-[10px] font-mono font-bold text-[var(--ink-primary)] flex items-center gap-1.5 uppercase">
                  <BookOpen size={12} />
                  <span>Native Mastery</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {row.native.skills.map((s) => (
                    <span key={s} className="font-mono text-[9px] px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--ink-primary)]">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                  {row.native.desc}
                </p>
              </div>

              <div className="space-y-2 p-3 bg-[var(--brand-primary)]/5 border border-[var(--brand-primary)]/20">
                <div className="text-[10px] font-mono font-bold text-[var(--brand-primary)] flex items-center gap-1.5 uppercase">
                  <Sparkles size={12} />
                  <span>AI-Augmented Velocity</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {row.augmented.skills.map((s) => (
                    <span key={s} className="font-mono text-[9px] px-2 py-0.5 border border-[var(--brand-primary)]/30 bg-[var(--bg-surface)] text-[var(--brand-primary)] font-bold">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                  {row.augmented.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
