'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, Github, Linkedin, Package, Brain, Copy, Check, Terminal } from 'lucide-react';

const stats = [
  { value: '2,600+', label: 'PYPI DOWNLOADS', sub: '38 Package Releases' },
  { value: '1,900+', label: 'HF TRANSFERS', sub: 'AerialEye Weights & Dataset' },
  { value: '6,327', label: 'AERIAL DATASET', sub: '89.4% mAP@0.5 YOLOv11' },
  { value: '100%', label: 'ON-DEVICE PRIVACY', sub: 'Vitt Play Store Ready (Gemma 4)' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/nikhil49023' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kilanisainikhil' },
  { icon: Brain, label: 'HuggingFace', href: 'https://huggingface.co/kilanisainikhil' },
  { icon: Package, label: 'PyPI', href: 'https://pypi.org/project/saara-ai/' },
  { icon: Package, label: 'NPM', href: 'https://www.npmjs.com/package/saara-ai' },
];

const commands = [
  { label: 'PyPI SDK', cmd: 'pip install saara-ai' },
  { label: 'NPM Wizard', cmd: 'npx saara-ai wizard' },
  { label: 'HF Model', cmd: 'huggingface-cli download kilanisainikhil/AerialEye' },
];

export default function Hero() {
  const [activeCmdIdx, setActiveCmdIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCmd = commands[activeCmdIdx].cmd;

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(activeCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="relative pt-20 pb-12 bg-[var(--bg-void)] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand-primary)_8%,transparent),transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent-emerald)_6%,transparent),transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* System Status Pill */}
            <div className="flex items-center gap-3 mb-4">
              <div className="border border-[var(--border-subtle)] px-3 py-1 flex items-center gap-2 bg-[var(--bg-surface)] text-[10px] font-mono font-bold tracking-widest text-[var(--brand-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>ON-DEVICE AI · EDGE ML · DEEP TECH SYSTEMS</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--ink-primary)] mb-2 font-display uppercase">
              Kilani Sai Nikhil
            </h1>

            {/* Subtitle / Role */}
            <div className="text-base md:text-lg font-mono font-semibold text-[var(--brand-primary)] mb-4 flex items-center gap-2">
              <span>AI-Augmented Systems &amp; Deep Tech Engineer</span>
            </div>

            {/* Bio Narrative */}
            <p className="text-sm md:text-base leading-relaxed text-[var(--ink-secondary)] mb-5 max-w-2xl">
              Computer Science student at NxtWave (Class of 2029) engineering local-first on-device AI architectures (<strong className="text-[var(--ink-primary)] font-semibold">Vitt</strong>), dataset distillation engines (<strong className="text-[var(--ink-primary)] font-semibold">saara-ai</strong>), quantized aerial vision models (<strong className="text-[var(--ink-primary)] font-semibold">AerialEye</strong>), and biometric data pipelines (<strong className="text-[var(--ink-primary)] font-semibold">Sleep Health Analytics</strong>).
            </p>

            {/* Interactive Multi-Command Snippet Switcher */}
            <div className="mb-6 border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 max-w-xl w-full shadow-sm">
              {/* Command Tabs */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 mb-2">
                <div className="flex gap-1">
                  {commands.map((c, idx) => (
                    <button
                      key={c.label}
                      onClick={() => { setActiveCmdIdx(idx); setCopied(false); }}
                      className={`text-[9.5px] font-mono px-2.5 py-0.5 transition-colors border cursor-pointer ${
                        activeCmdIdx === idx
                          ? 'border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] font-bold'
                          : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink-primary)] bg-transparent'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <div className="text-[9px] font-mono text-[var(--ink-muted)] flex items-center gap-1">
                  <Terminal size={10} />
                  <span>terminal</span>
                </div>
              </div>

              {/* Command line */}
              <div className="flex items-center justify-between font-mono text-xs text-[var(--ink-primary)] px-1">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <span className="text-[var(--brand-secondary)] font-bold">$</span>
                  <span className="select-all whitespace-nowrap font-mono">{activeCmd}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1 text-[var(--ink-muted)] hover:text-[var(--ink-primary)] transition-colors shrink-0 ml-2 cursor-pointer"
                  title="Copy command"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Link
                href="#projects"
                className="btn-primary flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase no-underline shadow-sm hover:opacity-90 transition-opacity"
              >
                <span>Inspect Systems</span>
                <ArrowRight size={14} />
              </Link>
              
              <Link
                href="/resume"
                className="btn-ghost flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold tracking-wider uppercase no-underline border border-[var(--border-medium)] hover:border-[var(--ink-primary)] transition-colors"
              >
                <FileText size={14} />
                <span>Verified Dossier</span>
              </Link>
            </div>

            {/* Verified Public Package Badges & Links */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-[var(--ink-muted)] mr-1 uppercase tracking-wider">
                registries //
              </span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 border border-[var(--border-subtle)] hover:border-[var(--border-active)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-all font-mono text-xs no-underline bg-[var(--bg-surface)]/80"
                  >
                    <Icon size={12} className="text-[var(--brand-primary)]" />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Sleek Portrait & Node Telemetry Card */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 select-none shadow-lg group">
              {/* Corner tech ticks */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--brand-primary)]" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--brand-primary)]" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--brand-primary)]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--brand-primary)]" />

              <div className="relative w-full h-full overflow-hidden bg-[var(--bg-void)]">
                {/* Profile Image */}
                <Image
                  src="/A_sleek,_professional_portrait_of_202606121456.jpeg"
                  alt="Kilani Sai Nikhil - ML Systems Architect"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                  className="object-cover transition-all duration-500 group-hover:scale-105 filter grayscale contrast-105 group-hover:grayscale-0"
                />
                
                {/* HUD Overlay tag */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-[var(--bg-surface)]/90 backdrop-blur-md border border-[var(--border-subtle)] flex items-center justify-between text-[9px] font-mono">
                  <div className="flex items-center gap-1.5 text-[var(--ink-primary)] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>HYDERABAD, IN</span>
                  </div>
                  <span className="text-[var(--brand-secondary)] font-bold">NODE // ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Verified Benchmarks / Stats row */}
        <div className="w-full mt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 border-t border-[var(--border-subtle)] pt-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-active)] transition-colors duration-300 shadow-sm"
              >
                <div className="font-bold text-xl md:text-2xl text-[var(--ink-primary)] mb-0.5 font-display tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[9.5px] font-mono tracking-widest text-[var(--brand-secondary)] font-bold mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[var(--ink-muted)] truncate">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
