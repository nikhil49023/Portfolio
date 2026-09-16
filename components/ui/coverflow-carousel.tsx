"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export interface CoverflowMeta {
  label: string;
  value: string;
}

export interface CoverflowSlide {
  src?: string;
  alt?: string;
  title: string;
  subtitle?: string;
  meta?: CoverflowMeta[];
  link?: string;
  badge?: string;
  category?: "advanced" | "intermediate" | "beginner" | string;
  levelLabel?: string;
  tags?: string[];
  skillsGained?: string[];
  icon?: React.ReactNode;
  description?: string;
  issuer?: string;
  date?: string;
}

export interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  showCaption?: boolean;
  className?: string;
  initialIndex?: number;
  onSlideChange?: (index: number) => void;
  renderSlide?: (
    slide: CoverflowSlide,
    isActive: boolean,
    index: number
  ) => React.ReactNode;
}

export function CoverflowCarousel({
  slides,
  showCaption = true,
  className,
  initialIndex = 0,
  onSlideChange,
  renderSlide,
}: CoverflowCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef<number>(0);

  // Scroll-linked 3D entry animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const rawRotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.2, 0.8, 1]);

  const smoothScale = useSpring(rawScale, { stiffness: 220, damping: 24 });
  const smoothRotateX = useSpring(rawRotateX, { stiffness: 220, damping: 24 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (initialIndex >= 0 && initialIndex < slides.length) {
      setActiveIndex(initialIndex);
    }
  }, [initialIndex, slides.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      const nextIdx = prev > 0 ? prev - 1 : slides.length - 1;
      onSlideChange?.(nextIdx);
      return nextIdx;
    });
  }, [slides.length, onSlideChange]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      const nextIdx = prev < slides.length - 1 ? prev + 1 : 0;
      onSlideChange?.(nextIdx);
      return nextIdx;
    });
  }, [slides.length, onSlideChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Trackpad / Mouse wheel scroll handler (with debounced threshold)
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 260) return;

    // Detect significant horizontal or vertical delta
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 28) {
      lastWheelTime.current = now;
      if (delta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Drag-to-swipe handling
  const handleDragEnd = (_: any, info: { offset: { x: number }; velocity: { x: number } }) => {
    const swipeThreshold = 50;
    const velocityThreshold = 200;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      handlePrev();
    }
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className={cn(
        "relative w-full flex flex-col items-center py-6 select-none overflow-hidden touch-pan-y",
        className
      )}
    >
      {/* ── 3D COVERFLOW SCROLL-LINKED STAGE ── */}
      <motion.div
        ref={stageRef}
        style={{
          scale: smoothScale,
          rotateX: smoothRotateX,
          opacity: rawOpacity,
          perspective: 1200,
          transformStyle: "preserve-3d",
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={handleDragEnd}
        className="relative w-full max-w-6xl h-[380px] sm:h-[420px] md:h-[460px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {slides.map((slide, index) => {
          const offset = index - activeIndex;
          const isActive = index === activeIndex;
          const absOffset = Math.abs(offset);

          // Only render slides within visible reach
          if (absOffset > 4) return null;

          // 3D transform computation (fanning with clean offset)
          const translateX = offset === 0 ? 0 : offset * 240 + (offset > 0 ? 40 : -40);
          const translateZ = offset === 0 ? 0 : -140 - absOffset * 30;
          const rotateY = offset === 0 ? 0 : offset > 0 ? -45 : 45;
          const scale = offset === 0 ? 1 : Math.max(0.80, 1 - absOffset * 0.1);
          const opacity = offset === 0 ? 1 : Math.max(0.45, 1 - absOffset * 0.2);
          const zIndex = 50 - absOffset;

          return (
            <motion.div
              key={slide.title + index}
              onClick={() => {
                if (!isActive) {
                  setActiveIndex(index);
                  onSlideChange?.(index);
                }
              }}
              animate={{
                x: translateX,
                z: translateZ,
                rotateY,
                scale,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 26,
                mass: 0.8,
              }}
              style={{
                transformStyle: "preserve-3d",
                zIndex,
              }}
              className={cn(
                "absolute w-[260px] sm:w-[320px] md:w-[360px] aspect-square rounded-2xl overflow-hidden shadow-2xl transition-all duration-300",
                isActive
                  ? "border-2 border-[var(--brand-primary)] shadow-[0_12px_45px_color-mix(in_oklch,var(--brand-primary)_35%,transparent)] ring-1 ring-[var(--brand-primary)]/50"
                  : "border border-[var(--border-subtle)] hover:border-[var(--border-active)] cursor-pointer brightness-90 hover:brightness-100"
              )}
            >
              {/* Custom renderer or standard coverflow card */}
              {renderSlide ? (
                renderSlide(slide, isActive, index)
              ) : (
                <div className="relative w-full h-full bg-[var(--bg-surface)] flex flex-col justify-between overflow-hidden">
                  {/* Background Image / Art */}
                  {slide.src ? (
                    <img
                      src={slide.src}
                      alt={slide.alt || slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-surface)] via-[var(--bg-void)] to-[var(--bg-surface)]" />
                  )}

                  {/* Gradient Overlay for Readable Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-void)] via-[var(--bg-void)]/60 to-transparent pointer-events-none" />

                  {/* Top Badge Row */}
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    {slide.badge && (
                      <span className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-md text-[var(--brand-primary)] shadow-sm">
                        {slide.badge}
                      </span>
                    )}
                    {slide.link && (
                      <a
                        href={slide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-md text-[var(--ink-secondary)] hover:text-[var(--brand-primary)] transition-colors shadow-sm"
                        aria-label="Open link"
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  {/* Bottom Content Info */}
                  <div className="relative z-10 p-5 space-y-2">
                    {slide.subtitle && (
                      <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--brand-secondary)]">
                        {slide.subtitle}
                      </div>
                    )}
                    <h4 className="text-base sm:text-lg font-bold font-display text-[var(--ink-primary)] leading-tight tracking-tight">
                      {slide.title}
                    </h4>

                    {slide.meta && slide.meta.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-subtle)]/60">
                        {slide.meta.map((m, i) => (
                          <div key={i} className="text-[9.5px] font-mono text-[var(--ink-muted)]">
                            <span className="opacity-70">{m.label}:</span>{" "}
                            <span className="text-[var(--ink-primary)] font-semibold">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── ACTIVE CAPTION & METADATA BAR ── */}
      {showCaption && activeSlide && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.title + activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-xl text-center px-4 mt-6 space-y-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--brand-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] animate-pulse" />
              <span>{activeSlide.issuer || activeSlide.subtitle || "VERIFIED CREDENTIAL"}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-[var(--ink-primary)] leading-snug">
              {activeSlide.title}
            </h3>

            {activeSlide.description && (
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--ink-secondary)] max-w-lg mx-auto font-body">
                {activeSlide.description}
              </p>
            )}

            {activeSlide.link && (
              <div className="pt-2">
                <a
                  href={activeSlide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded border border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-[var(--bg-void)] transition-all shadow-sm"
                >
                  <span>Verify Live Credential</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* ── CONTROLS & PAGINATION ── */}
      <div className="flex items-center justify-between w-full max-w-sm px-4 mt-8 font-mono text-xs text-[var(--ink-secondary)]">
        <button
          onClick={handlePrev}
          className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors cursor-pointer text-[var(--ink-primary)] shadow-sm"
          title="Previous slide (←)"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Index counter & slide dots */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-[var(--brand-primary)]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="opacity-40">/</span>
          <span className="opacity-60">{String(slides.length).padStart(2, "0")}</span>
        </div>

        <button
          onClick={handleNext}
          className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors cursor-pointer text-[var(--ink-primary)] shadow-sm"
          title="Next slide (→)"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slide Seek Indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveIndex(idx);
              onSlideChange?.(idx);
            }}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
              activeIndex === idx
                ? "w-6 bg-[var(--brand-primary)]"
                : "w-1.5 bg-[var(--border-medium)] hover:bg-[var(--ink-muted)]"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CoverflowCarousel;
