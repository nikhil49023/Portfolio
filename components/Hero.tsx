'use client';

import React, { useState, useRef } from 'react';
import { FileText, ArrowDown, Github, Linkedin, Package, Brain, Copy, Check, Sparkles, Layers, Cpu, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Spotlight } from '@/components/ui/spotlight';
import { MachinedButton } from '@/components/ui/machined-button';
import { TextScramble } from '@/components/ui/text-scramble';
import { hapticAudio } from '@/lib/audio';
import { cn } from '@/lib/utils';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/nikhil49023' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kilanisainikhil' },
  { icon: Brain, label: 'HuggingFace', href: 'https://huggingface.co/kilanisainikhil' },
  { icon: Package, label: 'PyPI', href: 'https://pypi.org/project/saara-ai/' },
];

const workflowPillars = [
  {
    num: '01',
    label: 'AI-Augmented Velocity',
    desc: 'Autonomous agent swarms, MCP servers, and iterative verification to ship production software 10x faster.',
    tag: 'Agentic Flow',
    tagClass: 'text-[#D71920] bg-[#D71920]/10 border-[#D71920]/20',
  },
  {
    num: '02',
    label: 'Fullstack & Mobile Apps',
    desc: 'Modern web & mobile applications built with Next.js 16, React 19, TypeScript, and native Flutter.',
    tag: 'Fullstack Systems',
    tagClass: 'text-sky-600 bg-sky-500/10 border-sky-500/20',
  },
  {
    num: '03',
    label: 'Local-First & Sovereign AI',
    desc: 'On-device intelligence with local AES-256 SQLite vaults and zero cloud data leakage. Private by default.',
    tag: 'Sovereign Privacy',
    tagClass: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    num: '04',
    label: 'Deterministic Quality',
    desc: 'Type-safe architectures, strict automated test gates, and audited open-source releases with 2,600+ users.',
    tag: '2,600+ Downloads',
    tagClass: 'text-amber-600 bg-amber-500/10 border-amber-500/20',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const thesisRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);
  const command = 'pip install saara-ai';

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.7 }
    )
      .fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.94, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5 },
        '-=0.4'
      )
      .fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { opacity: 0, yPercent: 120, rotateX: 20 },
        {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          duration: 1.0,
          stagger: 0.1,
        },
        '-=0.3'
      )
      .fromTo(
        thesisRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        [actionsRef.current, terminalRef.current, socialsRef.current],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
        '-=0.4'
      )
      .fromTo(
        rightColRef.current,
        { opacity: 0, x: 30, scale: 0.98 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9 },
        '-=0.6'
      );

    if (containerRef.current) {
      gsap.to([titleLine1Ref.current, titleLine2Ref.current, thesisRef.current], {
        yPercent: -15,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(rightColRef.current, {
        yPercent: -10,
        opacity: 0.45,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, { scope: containerRef });

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(command);
      hapticAudio.playTactileClick();
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const scrollToProjects = () => {
    hapticAudio.playTactileClick();
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative pt-10 md:pt-16 pb-16 bg-[var(--bg-void)] overflow-hidden select-none border-b border-[var(--border-subtle)]"
    >
      {/* Ambient Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#FAFAFA"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 relative">
        
        {/* Top Header Ribbon */}
        <div
          ref={headerRef}
          className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[var(--border-subtle)]"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D71920] shadow-[0_0_8px_#D71920]" />
            <span className="font-mono text-xs text-[var(--ink-secondary)] uppercase tracking-widest font-medium">
              HYDERABAD, IN [17.3850° N] // AI-AUGMENTED SYSTEMS &amp; SOVEREIGN SOFTWARE
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-[11px] font-mono font-medium text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>AVAILABLE FOR HIGH-IMPACT ROLES &amp; INTERNSHIPS</span>
          </div>
        </div>

        {/* Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <div ref={badgeRef} className="mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D71920] font-bold px-3 py-1 rounded-full border border-[#D71920]/20 bg-[#D71920]/5 inline-flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#D71920]" />
                HIGH-AGENCY AUTONOMOUS WORKFLOWS
              </span>
            </div>

            {/* Display Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[var(--ink-primary)] mb-5 font-display uppercase leading-[0.96]">
              <span className="block overflow-hidden pb-1">
                <span ref={titleLine1Ref} className="inline-block transform-gpu">
                  <TextScramble hoverTrigger duration={0.8}>High-Agency Systems.</TextScramble>
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span ref={titleLine2Ref} className="inline-block transform-gpu text-[#D71920]">
                  <TextScramble hoverTrigger duration={0.8}>AI-Augmented Speed.</TextScramble>
                </span>
              </span>
            </h1>

            {/* Editorial Thesis */}
            <p
              ref={thesisRef}
              className="text-base sm:text-lg leading-relaxed text-[var(--ink-secondary)] mb-8 max-w-2xl font-body"
            >
              I orchestrate autonomous AI agent workflows to architect, build, and ship production-grade fullstack web applications, mobile products, and local-first software at 10x engineering velocity. Grounded in first-principles architecture, clean codebases, and verified test gates.
            </p>

            {/* Action Group */}
            <div ref={actionsRef} className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={scrollToProjects}
                className="group relative flex items-center gap-3 px-6 py-3.5 rounded-full bg-[var(--ink-primary)] text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#D71920] transition-colors cursor-pointer active:scale-[0.97] shadow-lg overflow-hidden"
              >
                <span>Explore Systems</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-y-0.5">
                  <ArrowDown size={12} className="animate-bounce" />
                </span>
              </button>

              <MachinedButton
                href="/resume"
                variant="secondary"
                icon={<FileText size={14} className="text-[#D71920]" />}
              >
                Resume Dossier
              </MachinedButton>
            </div>

            {/* Interactive CLI Terminal Capsule */}
            <div
              ref={terminalRef}
              className="flex items-center justify-between border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2.5 rounded-full max-w-md w-full font-mono text-xs text-[var(--ink-primary)] mb-8 shadow-xs hover:border-[#D71920]/40 transition-colors"
            >
              <div className="flex items-center gap-2 overflow-x-auto">
                <span className="text-[#D71920] font-bold">$</span>
                <span className="select-all whitespace-nowrap">{command}</span>
              </div>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-md hover:bg-[var(--bg-raised)] text-[var(--ink-muted)] hover:text-[var(--ink-primary)] transition-all shrink-0 ml-3 cursor-pointer active:scale-[0.92]"
                title="Copy command to clipboard"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Verified Public Registries */}
            <div ref={socialsRef} className="flex flex-wrap items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => hapticAudio.playTactileClick()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] hover:border-[#D71920] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-all font-mono text-xs no-underline bg-[var(--bg-surface)] active:scale-[0.96] shadow-xs"
                  >
                    <Icon size={12} className="text-[#D71920]" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right Column - Grounded AI-Augmented Workflow Stack */}
          <div ref={rightColRef} className="lg:col-span-5 w-full">
            <div className="bg-white rounded-3xl border border-[var(--border-medium)] p-6 sm:p-7 shadow-[0_10px_35px_rgba(15,23,42,0.06),0_4px_12px_rgba(15,23,42,0.03)] text-left">
              <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border-subtle)] mb-5">
                <span className="font-mono text-xs font-bold text-[var(--ink-primary)] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                  AI-AUGMENTED WORKFLOW
                </span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  PRODUCTION TESTED
                </span>
              </div>

              <div className="space-y-4">
                {workflowPillars.map((pillar) => (
                  <div key={pillar.num} className="p-3.5 rounded-2xl bg-[var(--bg-void)] border border-[var(--border-subtle)] hover:border-[var(--ink-primary)] transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[11px] font-bold text-[var(--ink-primary)] flex items-center gap-1.5">
                        <span className="text-[#D71920]">{pillar.num} //</span>
                        <span>{pillar.label}</span>
                      </span>
                      <span className={cn('text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border', pillar.tagClass)}>
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--ink-secondary)] font-body leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--ink-muted)]">
                <span>STACK: TYPESCRIPT · FLUTTER · PYTHON · AGENTS</span>
                <span className="text-emerald-600 font-bold">100% LIGHT THEME</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
