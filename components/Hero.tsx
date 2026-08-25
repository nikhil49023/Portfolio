'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, Github, Linkedin, Package, Brain, Copy, Check, Terminal, Sparkles, Shield, Cpu } from 'lucide-react';

const stats = [
  { value: '2,600+', label: 'PYPI DOWNLOADS', sub: '38 Package Releases' },
  { value: '1,900+', label: 'HUGGING FACE TRANSFERS', sub: 'AerialEye Weights & Dataset' },
  { value: '6,327', label: 'CURATED AERIAL DATASET', sub: '89.4% mAP@0.5 YOLOv11' },
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: i * 0.05,
    },
  }),
};

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
    <section className="relative min-h-[92dvh] flex flex-col justify-center pt-32 pb-24 bg-[var(--bg-void)] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand-primary)_8%,transparent),transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[radial-gradient(circle,color-mix(in_oklch,var(--accent-emerald)_6%,transparent),transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* System Status Pill */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3 mb-6"
            >
              <div className="border border-[var(--border-subtle)] px-3 py-1 flex items-center gap-2 bg-[var(--bg-surface)] text-[10px] font-mono font-bold tracking-widest text-[var(--brand-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>ON-DEVICE AI · EDGE ML · DEEP TECH SYSTEMS</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--ink-primary)] mb-3 font-display"
            >
              KILANI SAI NIKHIL
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-base md:text-lg font-mono font-semibold text-[var(--brand-primary)] mb-5 flex items-center gap-2"
            >
              <span>AI-Augmented Systems &amp; Deep Tech Engineer</span>
            </motion.div>

            {/* Bio Narrative */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-sm md:text-base leading-relaxed text-[var(--ink-secondary)] mb-6 max-w-xl"
            >
              Computer Science student at NxtWave (Class of 2029) engineering local-first on-device AI architectures (<span className="text-[var(--ink-primary)] font-semibold">Vitt</span>), dataset distillation engines (<span className="text-[var(--ink-primary)] font-semibold">saara-ai</span>), quantized aerial vision models (<span className="text-[var(--ink-primary)] font-semibold">AerialEye</span>), and space-ground wireless mesh protocols (<span className="text-[var(--ink-primary)] font-semibold">PRITHVI-LIFELINE</span>).
            </motion.p>

            {/* Interactive Multi-Command Snippet Switcher */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-8 border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 max-w-lg w-full shadow-sm"
            >
              {/* Command Tabs */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 mb-2.5">
                <div className="flex gap-1">
                  {commands.map((c, idx) => (
                    <button
                      key={c.label}
                      onClick={() => { setActiveCmdIdx(idx); setCopied(false); }}
                      className={`text-[9px] font-mono px-2 py-0.5 transition-colors border cursor-pointer ${
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
                  <span className="select-all whitespace-nowrap">{activeCmd}</span>
                </div>
                <motion.button 
                  onClick={handleCopy}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-[10px] text-[var(--brand-primary)] hover:underline cursor-pointer border-0 bg-transparent font-bold font-mono pl-3 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={11} className="text-emerald-500" />
                      <span className="text-emerald-500">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={11} />
                      <span>COPY</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* CTA Buttons & Social links */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="btn-primary"
                >
                  <span>Explore Systems</span>
                  <ArrowRight size={14} />
                </a>
                <Link 
                  href="/resume" 
                  className="btn-ghost"
                >
                  <span>View ATS Resume</span>
                  <FileText size={14} strokeWidth={2} />
                </Link>
              </div>

              {/* Developer Registry Tags */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[10px] font-mono font-bold text-[var(--ink-muted)] uppercase tracking-wider mr-2">
                  registries //
                </span>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1 border border-[var(--border-subtle)] text-[var(--ink-secondary)] transition-all font-mono text-xs no-underline bg-[var(--bg-surface)]/60"
                      whileHover={{ y: -2, borderColor: "var(--border-active)", color: "var(--ink-primary)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={12} className="text-[var(--brand-primary)]" />
                      <span>{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sleek Portrait Card with Telemetry Coordinates */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6, borderColor: "var(--border-active)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] aspect-[4/5] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-2 select-none cursor-pointer group shadow-lg"
            >
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
                  sizes="(max-w-768px) 100vw, 340px"
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
            </motion.div>
          </div>
          
        </div>
      </div>

      {/* Verified Benchmarks / Stats row */}
      <div className="max-w-6xl mx-auto px-6 w-full mt-20 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-[var(--border-subtle)] pt-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, borderColor: "var(--border-active)" }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: i * 0.04
              }}
              className="p-5 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-sm transition-colors duration-300 cursor-pointer"
            >
              <div className="font-bold text-2xl md:text-3xl text-[var(--ink-primary)] mb-1 font-display tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono tracking-widest text-[var(--brand-secondary)] font-bold mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[var(--ink-muted)]">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

