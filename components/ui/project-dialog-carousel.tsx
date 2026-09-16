"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Shield,
  Activity,
  Check,
  Copy,
  Sparkles,
} from "lucide-react";
import { ProjectData } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectDialogCarouselProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDialogCarousel({
  project,
  isOpen,
  onClose,
}: ProjectDialogCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentSlide(0);
    setCopied(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentSlide]);

  if (!project) return null;

  const slides = [
    { id: "overview", label: "01: Overview" },
    { id: "architecture", label: "02: Architecture" },
    { id: "benchmarks", label: "03: Benchmarks" },
    { id: "quickstart", label: "04: Quickstart" },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCopyCode = (text: string) => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const Icon = project.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Dialog Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[24px] shadow-2xl overflow-hidden flex flex-col z-10 font-body"
          >
            {/* ── DIALOG TOP BAR ── */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-void)]/60 font-mono">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[#D71920]">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[var(--ink-primary)]">
                      {project.name}
                    </span>
                    {project.badge && (
                      <span className="text-[9px] px-2 py-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[#D71920] font-bold">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-[var(--ink-muted)]">
                    {project.type} · {project.date}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--ink-primary)] hover:text-[#D71920] transition-colors no-underline"
                >
                  <span>Full Dossier</span>
                  <ExternalLink size={12} />
                </Link>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--ink-primary)] transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* ── CAROUSEL NAVIGATION TABS ── */}
            <div className="px-6 py-2.5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between overflow-x-auto font-mono text-xs">
              <div className="flex items-center gap-1.5">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-[11px] transition-all cursor-pointer",
                      currentSlide === idx
                        ? "bg-[#D71920] text-white font-bold shadow-sm"
                        : "text-[var(--ink-muted)] hover:text-[var(--ink-primary)] hover:bg-[var(--bg-void)]"
                    )}
                  >
                    {slide.label}
                  </button>
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-[var(--ink-muted)]">
                <span>{currentSlide + 1} / {slides.length}</span>
                <button
                  onClick={handlePrev}
                  className="p-1 rounded-full hover:bg-[var(--bg-void)] hover:text-[var(--ink-primary)] transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1 rounded-full hover:bg-[var(--bg-void)] hover:text-[var(--ink-primary)] transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* ── CAROUSEL VIEWPORT CONTAINER ── */}
            <div
              ref={carouselRef}
              className="p-6 md:p-8 overflow-y-auto flex-1 relative min-h-[320px] sm:min-h-[360px]"
            >
              <AnimatePresence mode="wait">
                {/* ── SLIDE 1: OVERVIEW ── */}
                {currentSlide === 0 && (
                  <motion.div
                    key="slide-overview"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold font-display text-[var(--ink-primary)] mb-2">
                        {project.tagline}
                      </h4>
                      <p className="text-sm text-[var(--ink-secondary)] leading-relaxed font-body max-w-2xl">
                        {project.longDescription || project.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2.5">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#D71920]">
                        Key Architectural Innovations //
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="p-3.5 rounded-[16px] border border-[var(--border-subtle)] bg-[var(--bg-void)] flex items-start gap-2.5 text-xs text-[var(--ink-secondary)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D71920] mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stack Badges */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[10px] font-mono text-[var(--ink-muted)] uppercase tracking-widest">
                        Technology Stack //
                      </div>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[10.5px]">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-primary)]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── SLIDE 2: ARCHITECTURE ── */}
                {currentSlide === 1 && (
                  <motion.div
                    key="slide-arch"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xl font-bold font-display text-[var(--ink-primary)] mb-2">
                        Hardware &amp; Execution Topology
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--ink-secondary)] font-body">
                        Deterministic pipeline stages designed for sub-watt local inference and zero cloud telemetry.
                      </p>
                    </div>

                    {/* Architecture Node Grid */}
                    <div className="space-y-4">
                      {project.architecture.map((arch, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-[18px] border border-[var(--border-subtle)] bg-[var(--bg-void)] space-y-3"
                        >
                          <div className="text-xs font-mono font-bold text-[var(--ink-primary)] flex items-center gap-2">
                            <Layers size={14} className="text-[#D71920]" />
                            <span>{arch.title}</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 font-mono text-[10.5px]">
                            {arch.nodes.map((node, nIdx) => (
                              <div
                                key={nIdx}
                                className="p-2.5 rounded-[12px] bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
                              >
                                <div className="font-bold text-[var(--ink-primary)]">
                                  {node.label}
                                </div>
                                {node.sublabel && (
                                  <div className="text-[9.5px] text-[var(--ink-muted)] mt-0.5">
                                    {node.sublabel}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ── SLIDE 3: BENCHMARKS ── */}
                {currentSlide === 2 && (
                  <motion.div
                    key="slide-bench"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xl font-bold font-display text-[var(--ink-primary)] mb-2">
                        Quantized Performance Benchmarks
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--ink-secondary)] font-body">
                        Empirical measurements comparing standard baselines against fine-tuned on-device models.
                      </p>
                    </div>

                    {/* Benchmarks Table */}
                    <div className="border border-[var(--border-subtle)] rounded-[18px] bg-[var(--bg-void)] overflow-hidden font-mono text-xs">
                      <div className="grid grid-cols-4 p-3 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] text-[10px] font-bold text-[var(--ink-muted)] uppercase tracking-wider">
                        <span>Metric</span>
                        <span>Baseline</span>
                        <span>Optimized</span>
                        <span className="text-[#D71920]">Efficiency Gain</span>
                      </div>
                      <div className="divide-y divide-[var(--border-subtle)]">
                        {project.benchmarks.map((b, bIdx) => (
                          <div key={bIdx} className="grid grid-cols-4 p-3 items-center text-xs">
                            <span className="font-bold text-[var(--ink-primary)]">{b.metric}</span>
                            <span className="text-[var(--ink-muted)]">{b.baseline}</span>
                            <span className="text-[var(--ink-secondary)] font-bold">{b.optimized}</span>
                            <span className="text-[#D71920] font-bold">{b.gain}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── SLIDE 4: QUICKSTART ── */}
                {currentSlide === 3 && (
                  <motion.div
                    key="slide-quickstart"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-xl font-bold font-display text-[var(--ink-primary)] mb-2">
                        Execution &amp; Verification
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--ink-secondary)] font-body">
                        Deploy and verify the system using public CLI commands and SDK integrations.
                      </p>
                    </div>

                    {/* Snippet box */}
                    {project.snippets.length > 0 && (
                      <div className="border border-[var(--border-subtle)] bg-[var(--bg-void)] rounded-[18px] p-4 font-mono">
                        <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2 mb-3 text-xs text-[var(--ink-muted)]">
                          <span className="font-bold text-[var(--ink-primary)]">
                            {project.snippets[0].filename}
                          </span>
                          <button
                            onClick={() => handleCopyCode(project.snippets[0].code)}
                            className="flex items-center gap-1 text-[10px] text-[#D71920] hover:underline cursor-pointer"
                          >
                            {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                            <span>{copied ? "Copied" : "Copy Code"}</span>
                          </button>
                        </div>
                        <pre className="text-xs text-[var(--ink-secondary)] overflow-x-auto whitespace-pre leading-relaxed">
                          {project.snippets[0].code}
                        </pre>
                      </div>
                    )}

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--ink-primary)] hover:bg-[#D71920] text-[var(--bg-void)] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all no-underline shadow-sm"
                      >
                        <span>Open Full Dossier</span>
                        <ArrowRight size={14} />
                      </Link>

                      {project.links.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-active)] bg-[var(--bg-surface)] font-mono text-xs text-[var(--ink-primary)] no-underline transition-colors"
                          >
                            <LinkIcon size={14} className="text-[#D71920]" />
                            <span>{link.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── DIALOG FOOTER ── */}
            <div className="px-6 py-3 border-t border-[var(--border-subtle)] bg-[var(--bg-void)]/80 flex items-center justify-between text-xs font-mono text-[var(--ink-muted)]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                <span className="hidden sm:inline">Use Left / Right arrow keys to navigate slides</span>
                <span className="sm:hidden">Swipe or tap tabs to navigate</span>
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="text-[#D71920] font-bold hover:underline flex items-center gap-1 no-underline"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ProjectDialogCarousel;
