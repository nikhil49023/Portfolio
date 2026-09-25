'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Shield, Cpu, Layers, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from '@/components/ui/progressive-carousel';
import { TextScramble } from '@/components/ui/text-scramble';
import { hapticAudio } from '@/lib/audio';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ProjectSlideItem {
  sliderName: string;
  num: string;
  title: string;
  category: string;
  tagline: string;
  desc: string;
  img: string;
  alt: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  primaryLink: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
}

const FEATURED_PROJECTS: ProjectSlideItem[] = [
  {
    sliderName: 'vitt',
    num: '01',
    title: 'Vitt Mobile',
    category: 'Sovereign On-Device FinTech',
    tagline: '100% Local AI Financial Intelligence',
    desc: 'National Finalist at the OpenAI Academy x IndiaAI Buildathon. Engineered as a sovereign edge AI financial companion in Flutter, featuring local AES-256 SQLite vaults, automatic SMS parsing, zero cloud telemetry, and strict DPDP Act 2023 compliance.',
    img: '/projects/vitt/hero-inspected.png',
    alt: 'Vitt mobile sovereign financial intelligence app',
    tags: ['Flutter / Android', 'On-Device AI', 'AES-256 Vault', 'DPDP Compliant'],
    metrics: [
      { label: 'GitHub Monorepo', value: 'nikhil49023/VITT' },
      { label: 'Cloud Egress', value: '0 Bytes' },
      { label: 'Local Security', value: 'AES-256 SQLite' },
    ],
    primaryLink: { label: 'Explore GitHub', href: 'https://github.com/nikhil49023/VITT' },
    secondaryLink: { label: 'Feature Vault', href: '/projects/vitt' },
  },
  {
    sliderName: 'saara',
    num: '02',
    title: 'saara-ai CLI',
    category: 'Autonomous Knowledge Engine',
    tagline: 'Autonomous Documentation Distiller',
    desc: 'High-throughput Python package with 2,600+ PyPI downloads and 38 stable releases. Runs autonomous agentic loops to crawl technical documentation, filter low-entropy noise, and compile high-dimensional Parquet vector knowledge bases for agent retrieval.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    alt: 'saara-ai autonomous knowledge distillation CLI',
    tags: ['Python 3.11', 'PyPI (2,600+)', 'Agent Loops', 'Parquet Embeddings'],
    metrics: [
      { label: 'GitHub Repo', value: 'nikhil49023/Saara' },
      { label: 'PyPI Downloads', value: '2,600+' },
      { label: 'Stable Releases', value: '38 Package Versions' },
    ],
    primaryLink: { label: 'Explore GitHub', href: 'https://github.com/nikhil49023/Saara' },
    secondaryLink: { label: 'PyPI Package', href: 'https://pypi.org/project/saara-ai/' },
  },
  {
    sliderName: 'mlp',
    num: '03',
    title: 'MLP from Scratch',
    category: 'Deep Learning Internals',
    tagline: 'Matrix Calculus & Backpropagation Engine',
    desc: 'Pure mathematical implementation of a Multilayer Perceptron written from first principles without PyTorch or TensorFlow. Features analytical gradient derivation, forward/backward computational graphs, matrix calculus, and a custom AdamW optimizer.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    alt: 'MLP from scratch neural computational graph',
    tags: ['First-Principles ML', 'Matrix Calculus', 'Backpropagation', 'AdamW Optimizer'],
    metrics: [
      { label: 'GitHub Repo', value: 'nikhil49023/MLP' },
      { label: 'Dependencies', value: 'Zero ML Libs' },
      { label: 'Derivation', value: 'Analytical Gradients' },
    ],
    primaryLink: { label: 'Explore GitHub', href: 'https://github.com/nikhil49023/MLP' },
  },
  {
    sliderName: 'sutra',
    num: '04',
    title: 'Project SUTRA',
    category: 'Autonomous Swarm Coordination',
    tagline: 'Multi-UAV Simulation & SITL Architecture',
    desc: 'Autonomous search-and-rescue swarm simulation platform built with ROS 2 Humble and Gazebo Sim 8 Harmonic. Implements 50Hz MicroXRCE-DDS setpoint streaming to PX4 Autopilot, spatial area partitioning, and ByteTrack multi-object tracking.',
    img: '/projects/sutra/sutra_swarm_hero.jpg',
    alt: 'Project SUTRA multi-drone autonomous swarm simulation',
    tags: ['ROS 2 Humble', 'Gazebo Sim 8', 'MicroXRCE-DDS 50Hz', 'PX4 Autopilot'],
    metrics: [
      { label: 'GitHub Monorepo', value: 'nikhil49023/SUTRA' },
      { label: 'Simulation Engine', value: 'Gazebo 8 Harmonic' },
      { label: 'Loop Rate', value: '50 Hz DDS' },
    ],
    primaryLink: { label: 'Explore GitHub', href: 'https://github.com/nikhil49023/SUTRA' },
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

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

    if (sliderContainerRef.current) {
      gsap.fromTo(
        sliderContainerRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sliderContainerRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] relative overflow-hidden select-none py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10 pb-4 border-b border-[var(--border-subtle)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#D71920] shadow-[0_0_8px_#D71920]" />
            <h2 className="text-xs font-mono tracking-widest uppercase text-[var(--ink-primary)] font-bold flex items-center gap-2">
              <span className="text-[#D71920]">02 //</span>
              <TextScramble hoverTrigger duration={0.6}>Production Systems &amp; Software</TextScramble>
            </h2>
          </div>
          <div className="font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>PROGRESSIVE SHOWCASE // 4 PRODUCTION SYSTEMS</span>
          </div>
        </div>

        {/* ── PROGRESS SLIDER (User-Specified Component) ── */}
        <div ref={sliderContainerRef} className="w-full">
          <ProgressSlider
            vertical={false}
            activeSlider="vitt"
            duration={5500}
            fastDuration={350}
            className="flex flex-col gap-6"
          >
            {/* Slide Content Cards */}
            <SliderContent className="w-full">
              {FEATURED_PROJECTS.map((project) => (
                <SliderWrapper key={project.sliderName} value={project.sliderName}>
                  <div className="w-full bg-white rounded-3xl border border-[var(--border-medium)] p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(15,23,42,0.06),0_4px_12px_rgba(15,23,42,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Details Column */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 text-left">
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D71920] px-2.5 py-0.5 rounded-full bg-[#D71920]/10 border border-[#D71920]/20">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-mono text-[var(--ink-muted)]">
                            SYSTEM {project.num}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[var(--ink-primary)] tracking-tight mb-2">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-mono text-[var(--ink-muted)] font-medium mb-4">
                          {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm leading-relaxed text-[var(--ink-secondary)] font-body">
                          {project.desc}
                        </p>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--ink-secondary)] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metrics Ledger */}
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[var(--border-subtle)]">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="flex flex-col">
                            <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--ink-muted)]">
                              {m.label}
                            </span>
                            <span className="text-xs sm:text-sm font-mono font-bold text-[var(--ink-primary)] mt-0.5">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href={project.primaryLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => hapticAudio.playTactileClick()}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[var(--ink-primary)] text-white hover:bg-[#D71920] transition-colors shadow-sm cursor-pointer"
                        >
                          <span>{project.primaryLink.label}</span>
                          <ArrowUpRight size={13} />
                        </a>
                        {project.secondaryLink && (
                          <a
                            href={project.secondaryLink.href}
                            onClick={() => hapticAudio.playTactileClick()}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[var(--bg-surface)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] border border-[var(--border-subtle)] hover:border-[var(--ink-primary)] transition-colors cursor-pointer"
                          >
                            <span>{project.secondaryLink.label}</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Media Preview Column */}
                    <div className="lg:col-span-6 h-[260px] sm:h-[320px] lg:h-[380px] relative rounded-2xl overflow-hidden bg-slate-50 border border-[var(--border-subtle)] shadow-inner">
                      <Image
                        src={project.img}
                        alt={project.alt}
                        fill
                        unoptimized
                        className="object-cover size-full transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                  </div>
                </SliderWrapper>
              ))}
            </SliderContent>

            {/* Slider Bottom Tabs with Real-Time Progress Bar */}
            <SliderBtnGroup className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
              {FEATURED_PROJECTS.map((item) => (
                <SliderBtn
                  key={item.sliderName}
                  value={item.sliderName}
                  className="p-3.5 sm:p-4 text-left rounded-2xl bg-white border border-[var(--border-medium)] shadow-xs transition-all cursor-pointer relative overflow-hidden group"
                  progressBarClass="bg-[#D71920] h-[3px] bottom-0 top-auto rounded-full"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#D71920]">
                      {item.num} //
                    </span>
                    <span className="text-[9px] font-mono text-[var(--ink-muted)] truncate">
                      {item.category.split(' ')[0]}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold font-display text-[var(--ink-primary)] group-hover:text-[#D71920] transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10.5px] font-body text-[var(--ink-muted)] line-clamp-1 mt-0.5">
                    {item.tagline}
                  </p>
                </SliderBtn>
              ))}
            </SliderBtnGroup>
          </ProgressSlider>
        </div>
      </div>
    </section>
  );
}
