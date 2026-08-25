'use client';

import { use, useRef } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Cpu,
  Layers,
  Globe,
  Star,
  Zap,
  CheckCircle2,
  Terminal as TerminalIcon,
  Database,
  Shield,
  ExternalLink,
  ChevronRight,
  Sparkles,
  GitBranch,
} from 'lucide-react';
import { PROJECTS, ProjectData } from '@/lib/projects';
import { ImageCarousel } from '@/components/projects/ImageCarousel';
import { AerialEyeVisualization } from '@/components/projects/AerialEyeVisualization';

/* ── Interactive Terminal simulation (saara-ai & sleep-health-analytics) ── */
function TerminalMockup({ slug = 'saara-ai' }: { slug?: string }) {
  const isKaggle = slug === 'sleep-health-analytics';

  return (
    <div className="w-full h-full flex items-center justify-center bg-[var(--bg-void)] p-4 sm:p-8 overflow-hidden group/terminal">
      <div className="w-full max-w-3xl select-none">
        {/* Terminal Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] border-b-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[10px] font-mono text-[var(--ink-muted)] flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <TerminalIcon size={12} className="text-[var(--brand-primary)]" />
            {isKaggle ? 'kaggle-notebook // sleep_health_eda.ipynb' : 'saara-ai-cli // dataset_synthesis_v2.0'}
          </span>
          <span className="text-[10px] font-mono text-[var(--brand-primary)] font-bold">PYTHON 3.11</span>
        </div>

        {/* Terminal Window Body */}
        <div className="bg-[var(--bg-void)] px-6 py-6 font-mono text-[11px] sm:text-xs space-y-3.5 border border-[var(--border-subtle)] shadow-sm relative overflow-hidden">
          {isKaggle ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-sky-500 font-bold">❯</span>
                <span className="text-[var(--ink-primary)] font-semibold">python -m analysis.sleep_health_eda --dataset biometric_records.csv</span>
              </div>
              <div className="text-[var(--ink-muted)] text-[10px]">
                Executing Pandas DataFrame feature engineering &amp; Seaborn statistical pipelines...
              </div>
              
              <div className="flex items-center gap-4 py-1">
                <div className="flex gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.03 }}
                      className="w-2.5 h-3.5 bg-sky-500/90"
                    />
                  ))}
                </div>
                <span className="text-sky-600 dark:text-sky-400 font-bold text-[10px]">100% INGESTION &amp; CLEANING</span>
              </div>

              <div className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5 pt-1">
                <Zap size={11} /> KAGGLE CAPSTONE REPRODUCIBLE PIPELINE VERIFIED
              </div>

              <div className="mt-3 text-[var(--ink-primary)] font-semibold">
                <span className="text-sky-500">❯</span> df.groupby(['BMI_Category', 'Sleep_Disorder']).mean()
              </div>

              <div className="space-y-1.5 pt-1 text-[10px] sm:text-[11px]">
                {[
                  { color: '#38bdf8', label: 'BP_DECOMPOSE', text: 'Systolic/Diastolic feature vectors extracted (n=374 samples)' },
                  { color: '#f59e0b', label: 'CORRELATION', text: 'Stress Level vs Sleep Duration: r = -0.81 (p < 0.001 significance)' },
                  { color: '#10b981', label: 'DISORDER_RISK', text: 'Sleep Apnea prevalence in Obese cohort: 84.6% (>135 mmHg systolic)' },
                ].map(({ color, label, text }) => (
                  <div key={label} className="flex items-start gap-2.5">
                    <span style={{ color }} className="font-bold min-w-[95px] shrink-0 font-mono">[{label}]</span>
                    <span className="text-[var(--ink-secondary)]">{text}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <span className="text-rose-500 font-bold">❯</span>
                <span className="text-[var(--ink-primary)] font-semibold">npx saara-ai wizard --distill dpo</span>
              </div>
              <div className="text-[var(--ink-muted)] text-[10px]">
                Initializing local dataset generation wizard (Published on PyPI &amp; NPM: 2,600+ DL)...
              </div>

              <div className="flex items-center gap-4 py-1">
                <div className="flex gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.03 }}
                      className="w-2.5 h-3.5 bg-rose-500/90"
                    />
                  ))}
                </div>
                <span className="text-rose-600 dark:text-rose-400 font-bold text-[10px]">38 RELEASES VERIFIED</span>
              </div>

              <div className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5 pt-1">
                <Zap size={11} /> BOUNDED RESEARCHAGENTS ACTIVE (google-adk + crawl4ai)
              </div>

              <div className="mt-3 text-[var(--ink-primary)] font-semibold">
                <span className="text-rose-500">❯</span> saara generate --topic "Quantum Robotics" --export parquet
              </div>

              <div className="space-y-1.5 pt-1 text-[10px] sm:text-[11px]">
                {[
                  { color: '#f43f5e', label: 'RESEARCH_BOT', text: 'google-adk + crawl4ai web crawl → 1,420 raw validated samples' },
                  { color: '#38bdf8', label: 'LOCAL_ROUTER', text: 'Ollama & vLLM routing → Structured prompt-response distillation' },
                  { color: '#10b981', label: 'TUI_CURATOR', text: 'Interactive confidence validator → Direct export to Hugging Face & Parquet' },
                ].map(({ color, label, text }) => (
                  <div key={label} className="flex items-start gap-2.5">
                    <span style={{ color }} className="font-bold min-w-[95px] shrink-0 font-mono">[{label}]</span>
                    <span className="text-[var(--ink-secondary)]">{text}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="flex items-center gap-2 pt-2 text-[var(--ink-muted)]">
            <span className="text-emerald-500 font-bold">❯</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-3 bg-[var(--brand-primary)] inline-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const SECTION_LINKS = [
  { id: 'media', label: '01 Visuals' },
  { id: 'overview', label: '02 Narrative' },
  { id: 'highlights', label: '03 Highlights' },
  { id: 'architecture', label: '04 Architecture' },
  { id: 'deep-dive', label: '05 Deep Dive' },
  { id: 'stack', label: '06 Arsenal' },
];

const ALL_PROJECT_SLUGS = ['vitt', 'saara-ai', 'aerialeye', 'sleep-health-analytics'];

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = use(params as any) as { slug: string };
  const project = PROJECTS[resolvedParams.slug];
  if (!project) notFound();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Calculate next project slug for seamless footer navigation
  const currentIndex = ALL_PROJECT_SLUGS.indexOf(project.slug);
  const nextSlug = ALL_PROJECT_SLUGS[(currentIndex + 1) % ALL_PROJECT_SLUGS.length];
  const nextProject = PROJECTS[nextSlug];

  const IconComp = project.icon;

  return (
    <div className="min-h-screen bg-[var(--bg-void)] text-[var(--ink-primary)] font-body selection:bg-[var(--border-active)] selection:text-[var(--ink-primary)]">
      
      {/* ── Top Navigation Bar ── */}
      <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/#projects"
              className="flex items-center gap-2 font-mono text-xs text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors py-1 px-2 border border-transparent hover:border-[var(--border-subtle)]"
            >
              <ArrowLeft size={14} />
              <span>Back to Systems</span>
            </Link>
            <span className="text-[var(--border-subtle)]">/</span>
            <span className="font-mono text-xs text-[var(--brand-primary)] font-bold">
              {project.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.badge && (
              <span className="hidden sm:inline-flex text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-muted)]">
                {project.badge}
              </span>
            )}
            <div className="flex items-center gap-1">
              {project.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-void)] hover:bg-[var(--bg-surface)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors"
                    title={link.label}
                  >
                    <LinkIcon size={14} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section
        ref={heroRef}
        className="relative border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/40 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-14 relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* Meta tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--brand-primary)]">
                <IconComp size={16} />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--brand-secondary)] border border-[var(--border-subtle)] bg-[var(--bg-void)] px-2.5 py-1">
                {project.category}
              </span>
              <span className="text-[10px] font-mono text-[var(--ink-muted)] border border-[var(--border-subtle)] bg-[var(--bg-void)] px-2.5 py-1 flex items-center gap-1.5">
                <Calendar size={12} />
                <span>{project.date}</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 border border-[var(--border-subtle)] bg-[var(--bg-void)] px-2.5 py-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{project.status}</span>
              </span>
            </motion.div>

            {/* Title & Tagline */}
            <motion.div variants={fadeUp} className="space-y-4 max-w-4xl">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--ink-primary)] font-display">
                {project.name}
              </h1>
              <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed font-normal">
                {project.tagline}
              </p>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 pt-2">
              {project.links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2.5 px-4 py-2 text-xs font-mono font-semibold transition-all ${
                      link.primary
                        ? 'bg-[var(--ink-primary)] text-[var(--bg-void)] hover:bg-[var(--brand-primary)]'
                        : 'border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-primary)] hover:border-[var(--border-active)]'
                    }`}
                  >
                    <LinkIcon size={14} />
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} />
                  </a>
                );
              })}
            </motion.div>

            {/* 4-Panel Telemetry Grid */}
            {project.stats && (
              <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[var(--border-subtle)]">
                {project.stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-void)]"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--ink-muted)] mb-1">
                      {s.label}
                    </div>
                    <div className="font-display font-bold text-base sm:text-lg text-[var(--ink-primary)]">
                      {s.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Subnav Link Bar ── */}
      <nav className="sticky top-14 z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto">
          <div className="flex items-center gap-1 py-2 text-xs font-mono">
            {SECTION_LINKS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-1.5 text-[var(--ink-muted)] hover:text-[var(--ink-primary)] hover:bg-[var(--bg-void)] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Main Content Container ── */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        {/* ── 01 Visual Architecture / Media ── */}
        <section id="media" className="scroll-mt-28">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">01</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              System Interface &amp; Telemetry Viewport
            </h2>
          </div>

          <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-sm">
            {project.slug === 'aerialeye' ? (
              <AerialEyeVisualization detailed />
            ) : project.media === 'images' && project.images ? (
              <div className="p-4 sm:p-8 bg-[var(--bg-void)]">
                <ImageCarousel images={project.images} accent={project.accent} mockup interval={2800} />
              </div>
            ) : (
              <div className="aspect-[16/10] md:h-[500px]">
                <TerminalMockup slug={project.slug} />
              </div>
            )}
          </div>
        </section>

        {/* ── 02 Narrative & Mission Objectives ── */}
        <section id="overview" className="scroll-mt-28">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">02</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              System Narrative &amp; Problem Statement
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left Column: Full narrative markdown */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed text-[var(--ink-secondary)]">
              {project.longDescription.split('\n\n').map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Right Column: Key implementation takeaways */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
                  <Cpu size={16} className="text-[var(--brand-primary)]" />
                  <h3 className="font-mono text-xs uppercase font-bold tracking-wider text-[var(--ink-primary)]">
                    Engineering Objectives
                  </h3>
                </div>
                <div className="space-y-3 font-mono text-xs text-[var(--ink-secondary)]">
                  {project.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-[var(--brand-primary)] font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 03 Key Highlights & Benchmarks ── */}
        <section id="highlights" className="scroll-mt-28">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">03</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              Key Engineering Highlights &amp; Milestones
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="p-5 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 hover:bg-[var(--bg-surface)] transition-colors flex items-start gap-4"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--brand-primary)] shrink-0 mt-0.5">
                  <Star size={14} />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                    Benchmark 0{i + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-[var(--ink-primary)]">
                    {h}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04 System Architecture ── */}
        <section id="architecture" className="scroll-mt-28">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">04</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              System Architecture &amp; Data Pipeline
            </h2>
          </div>

          <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-8">
            <div className="grid md:grid-cols-3 gap-6 relative">
              {project.architecture.map((layer, li) => (
                <div key={layer.title} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
                    <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[var(--brand-secondary)]">
                      Stage 0{li + 1}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[var(--ink-primary)]">
                      {layer.title}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {layer.nodes.map((node) => (
                      <div
                        key={node.label}
                        className="p-3.5 border border-[var(--border-subtle)] bg-[var(--bg-void)]"
                        style={{ borderLeft: `3px solid ${node.color}` }}
                      >
                        <div className="text-xs font-bold text-[var(--ink-primary)] font-mono">
                          {node.label}
                        </div>
                        {node.sublabel && (
                          <div className="text-[10px] font-mono text-[var(--ink-muted)] mt-1">
                            {node.sublabel}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 Technology Deep Dive ── */}
        <section id="deep-dive" className="scroll-mt-28">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">05</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              Subsystem Technology Deep Dive
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {project.techDetails.map((tech) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="p-6 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-active)] transition-colors flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--brand-primary)]">
                      <TechIcon size={16} />
                    </div>
                    <h3 className="font-display font-bold text-base text-[var(--ink-primary)] tracking-tight">
                      {tech.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 06 Full Arsenal & Stack ── */}
        <section id="stack" className="scroll-mt-28 pb-12">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">06</span>
            <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
              Engineering Arsenal &amp; Technologies
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--ink-primary)] text-xs font-mono font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── Next Project Footer ── */}
        <section className="border-t border-[var(--border-subtle)] pt-12 pb-16">
          <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--ink-muted)]">
                Explore Next System
              </div>
              <h3 className="font-display font-bold text-xl text-[var(--ink-primary)]">
                {nextProject.name}
              </h3>
              <p className="text-xs text-[var(--ink-secondary)] max-w-md">
                {nextProject.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/#projects"
                className="px-4 py-2 border border-[var(--border-subtle)] bg-[var(--bg-void)] text-xs font-mono text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:border-[var(--border-active)] transition-colors"
              >
                All Projects
              </Link>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="px-4 py-2 bg-[var(--ink-primary)] text-[var(--bg-void)] hover:bg-[var(--brand-primary)] text-xs font-mono font-bold transition-colors flex items-center gap-1.5"
              >
                <span>View System</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ── Page Footer ── */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-void)] py-8 text-center text-xs font-mono text-[var(--ink-muted)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>Kilani Sai Nikhil // Verified Production Artifacts</div>
          <div>Hyderabad, India (UTC+5:30)</div>
        </div>
      </footer>

    </div>
  );
}
