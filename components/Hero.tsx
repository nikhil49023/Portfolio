'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FileText, ArrowDown, Github, Linkedin, Package, Brain, Copy, Check, Volume2, VolumeX, Cpu, Radio, ShieldCheck, Sparkles, Navigation, Layers } from 'lucide-react';
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

const proofMetrics = [
  {
    label: 'Control Loop',
    value: '50 Hz DDS',
    subtext: 'Zero-Jitter PX4 Swarms',
    icon: Radio,
    accentClass: 'text-cyan-500',
  },
  {
    label: 'Edge Vision',
    value: '38.4 FPS',
    subtext: 'TensorRT INT8 on Jetson',
    icon: Cpu,
    accentClass: 'text-emerald-500',
  },
  {
    label: 'CLI Tooling',
    value: '2,600+',
    subtext: 'saara-ai on PyPI',
    icon: Package,
    accentClass: 'text-amber-500',
  },
  {
    label: 'Vision Dataset',
    value: '6,300+',
    subtext: 'Annotated Aerial Frames',
    icon: Brain,
    accentClass: 'text-purple-500',
  },
  {
    label: 'Cloud Egress',
    value: '0 Bytes',
    subtext: '100% Local Silicon Vault',
    icon: ShieldCheck,
    accentClass: 'text-emerald-500',
  },
  {
    label: 'Automated Gates',
    value: '212 / 212',
    subtext: 'Zero-Failure Passing Tests',
    icon: Check,
    accentClass: 'text-[#D71920]',
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
  const proofBarRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const command = 'pip install saara-ai';

  useEffect(() => {
    setIsMuted(hapticAudio.getMuted());
  }, []);

  // ── GSAP Entrance & Scroll-Scrubbed Parallax ──
  useGSAP(() => {
    // 1. Initial Entrance Choreography
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: -24 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.92, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6 },
        '-=0.5'
      )
      .fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { opacity: 0, yPercent: 120, rotateX: 25 },
        {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          duration: 1.1,
          stagger: 0.12,
        },
        '-=0.4'
      )
      .fromTo(
        thesisRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        [actionsRef.current, terminalRef.current, socialsRef.current],
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
        '-=0.5'
      )
      .fromTo(
        rightColRef.current,
        { opacity: 0, x: 40, scale: 0.98 },
        { opacity: 1, x: 0, scale: 1, duration: 1.0 },
        '-=0.8'
      )
      .fromTo(
        proofBarRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      );

    // 2. Parallax Exit
    if (containerRef.current) {
      gsap.to([titleLine1Ref.current, titleLine2Ref.current, thesisRef.current], {
        yPercent: -20,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(rightColRef.current, {
        yPercent: -12,
        opacity: 0.35,
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

  const handleToggleAudio = () => {
    const muted = hapticAudio.toggleMute();
    setIsMuted(muted);
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
        
        {/* Top Operational Header Ribbon */}
        <div
          ref={headerRef}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--border-subtle)]"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse shadow-[0_0_8px_#D71920]" />
            <span className="font-mono text-xs text-[var(--ink-secondary)] uppercase tracking-widest font-medium">
              HYDERABAD, IN [17.3850° N] // PHYSICAL AI &amp; DETERMINISTIC AUTONOMY
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Node Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>50Hz OFFBOARD TELEMETRY ACTIVE</span>
            </div>

            {/* Tactile Audio Micro-Haptic Toggle */}
            <button
              onClick={handleToggleAudio}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-surface)] text-[11px] font-mono text-[var(--ink-secondary)] cursor-pointer transition-all active:scale-[0.96] shadow-sm"
              title={isMuted ? 'Unmute haptic audio feedback' : 'Mute haptic audio feedback'}
            >
              {isMuted ? (
                <VolumeX size={12} className="text-zinc-500" />
              ) : (
                <Volume2 size={12} className="text-[#D71920]" />
              )}
              <span>AUDIO: {isMuted ? 'MUTED' : 'ACTIVE'}</span>
            </button>
          </div>
        </div>

        {/* Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Column - Monumental Typography */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            <div ref={badgeRef} className="mb-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D71920] font-bold px-3 py-1 rounded-full border border-[#D71920]/20 bg-[#D71920]/5 inline-flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#D71920]" />
                DETERMINISTIC AUTONOMY &amp; SOVEREIGN SILICON
              </span>
            </div>

            {/* Authoritative Display Name with Masked Staggered Lines */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--ink-primary)] mb-5 font-display uppercase leading-[0.96]">
              <span className="block overflow-hidden pb-1">
                <span ref={titleLine1Ref} className="inline-block transform-gpu">
                  <TextScramble hoverTrigger duration={0.8}>Autonomous Swarms.</TextScramble>
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span ref={titleLine2Ref} className="inline-block transform-gpu text-[#D71920]">
                  <TextScramble hoverTrigger duration={0.8}>Sovereign Edge AI.</TextScramble>
                </span>
              </span>
            </h1>

            {/* Editorial Thesis */}
            <p
              ref={thesisRef}
              className="text-base sm:text-lg leading-relaxed text-[var(--ink-secondary)] mb-8 max-w-2xl font-body"
            >
              I build drone swarms that fly when GPS dies, and edge AI that runs 100% on local silicon. Zero cloud lag. Zero data leakage. 50Hz control loops, deterministic C++, and 212/212 verified passing tests.
            </p>

            {/* Action Group */}
            <div ref={actionsRef} className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={scrollToProjects}
                className="group relative flex items-center gap-3 px-6 py-3.5 rounded-full bg-[var(--ink-primary)] text-[var(--bg-void)] font-mono text-xs uppercase tracking-wider font-semibold hover:opacity-95 transition-all cursor-pointer active:scale-[0.97] shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <span>Explore Systems</span>
                <span className="w-5 h-5 rounded-full bg-white/20 dark:bg-black/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-y-0.5">
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

            {/* Interactive Pip Package Terminal Capsule */}
            <div
              ref={terminalRef}
              className="flex items-center justify-between border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-4 py-2.5 rounded-full max-w-md w-full font-mono text-xs text-[var(--ink-primary)] mb-8 shadow-sm hover:border-[#D71920]/40 transition-colors"
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
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border-subtle)] hover:border-[#D71920] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-all font-mono text-xs no-underline bg-[var(--bg-surface)] active:scale-[0.96] shadow-sm"
                  >
                    <Icon size={12} className="text-[#D71920]" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right Column - Machined Double-Bezel Specifications Ledger */}
          <div ref={rightColRef} className="lg:col-span-4 w-full">
            <div className="machined-bezel">
              <div className="machined-inner p-6">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] dark:border-white/5 mb-4">
                  <span className="font-mono text-xs font-bold text-[var(--ink-primary)] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                    SYSTEM ARCHITECTURE
                  </span>
                  <span className="text-[10px] font-mono text-cyan-500 font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    50Hz DDS
                  </span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <div className="text-[var(--ink-muted)] uppercase text-[10px] tracking-widest mb-1 flex items-center justify-between">
                      <span>01 // SWARM GNC &amp; AVIONICS</span>
                      <span className="text-cyan-500 text-[9px] font-bold">50Hz DDS</span>
                    </div>
                    <div className="text-[var(--ink-primary)] font-medium">
                      PX4 Autopilot v1.14+, ROS 2 Humble/Jazzy, MicroXRCE-DDS 50Hz Offboard, Gazebo Sim 8 SITL (212 Passing Tests)
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-subtle)] dark:border-white/5">
                    <div className="text-[var(--ink-muted)] uppercase text-[10px] tracking-widest mb-1 flex items-center justify-between">
                      <span>02 // SOVEREIGN EDGE AI</span>
                      <span className="text-emerald-500 text-[9px] font-bold">0 BYTES EGRESS</span>
                    </div>
                    <div className="text-[var(--ink-primary)] font-medium">
                      LiteRT &amp; Gemma 4 on local silicon, AES-256 SQLite vaults, DPDP Act 2023 compliant
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-subtle)] dark:border-white/5">
                    <div className="text-[var(--ink-muted)] uppercase text-[10px] tracking-widest mb-1 flex items-center justify-between">
                      <span>03 // REAL-TIME VISION</span>
                      <span className="text-purple-500 text-[9px] font-bold">38.4 FPS</span>
                    </div>
                    <div className="text-[var(--ink-primary)] font-medium">
                      NVIDIA Jetson Orin Nano, TensorRT INT8, ByteTrack MOT, SAHI dynamic tiling
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-subtle)] dark:border-white/5">
                    <div className="text-[var(--ink-muted)] uppercase text-[10px] tracking-widest mb-1 flex items-center justify-between">
                      <span>04 // DATASET DISTILLATION</span>
                      <span className="text-amber-500 text-[9px] font-bold">2,600+ PYPI</span>
                    </div>
                    <div className="text-[var(--ink-primary)] font-medium">
                      saara-ai CLI (38 releases on PyPI), bounded agent loops, automated Parquet corpora
                    </div>
                  </div>
                </div>

                {/* Micro Telemetry Bar */}
                <div className="mt-5 pt-3 border-t border-[var(--border-subtle)] dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-[var(--ink-muted)]">
                  <span>KERNEL: LINUX x86_64 / ARM64</span>
                  <span className="text-emerald-500 font-bold">212/212 TESTS PASSING</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── 6-NODE HIGH-DENSITY TELEMETRY PROOF BAR ── */}
        <div ref={proofBarRef} className="mt-12 pt-8 border-t border-[var(--border-subtle)]">
          <div className="machined-bezel rounded-[20px] overflow-hidden shadow-lg">
            <div className="machined-inner rounded-[18px] p-4 sm:p-5 bg-[var(--bg-surface)]">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)] dark:border-white/5">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>DETERMINISTIC VERIFICATION LEDGER // LIVE BENCHMARKS</span>
                </div>
                <div className="font-mono text-[10px] text-zinc-500 hidden sm:block">
                  SOURCE: ROS2 / PX4 SITL / TENSORRT / PYPI METRICS
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)] dark:divide-white/5">
                {proofMetrics.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className={cn("flex flex-col justify-center px-2 py-1", idx > 0 && "sm:pl-4")}>
                      <span className="text-[10px] font-mono text-[var(--ink-muted)] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Icon size={11} className={item.accentClass} />
                        {item.label}
                      </span>
                      <span className="font-mono text-lg sm:text-xl font-bold text-[var(--ink-primary)] tracking-tight">
                        {item.value}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--ink-muted)] mt-0.5">
                        {item.subtext}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
