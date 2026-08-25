'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, Smartphone, Eye } from 'lucide-react';

type Props = {
  images: string[];
  accent: string;
  /** Height class, e.g. "h-64" or "h-[480px]". Ignored when mockup=true */
  heightClass?: string;
  interval?: number;
  /** Wrap images in a phone mockup frame */
  mockup?: boolean;
};

const SCREEN_TITLES = [
  'Dashboard & Total Cashflow',
  'On-Device Transaction Parser',
  'Real-Time Expense Category Split',
  'Interactive Legal Consent Dialog',
  'Encrypted Local SQLite Vault',
  'SEBI Advisory Compliance Guard',
  'Gemma 4 LiteRT Inference Monitor',
  'Offline Analytics & Runway Trends',
  'Notification Listener Service',
];

export function ImageCarousel({ images, accent, heightClass = 'h-80', interval = 2800, mockup = false }: Props) {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [autoplay, images.length, interval]);

  const go = useCallback(
    (dir: number) => {
      setAutoplay(false);
      setCurrent((p) => (p + dir + images.length) % images.length);
    },
    [images.length],
  );

  /* ── Lightbox ── */
  const lightboxEl = (
    <AnimatePresence>
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full max-w-sm h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[current]}
              alt={`Screenshot ${current + 1}`}
              className="absolute inset-0 w-full h-full object-contain"
            />
            <button
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
              {current + 1} / {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  /* ── Phone mockup mode with side-by-side screen explorer on desktop ── */
  if (mockup) {
    return (
      <>
        <div className="p-6 md:p-8 bg-[var(--bg-void)] border border-[var(--border-subtle)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Center: Phone Frame */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div
                className="relative shadow-2xl"
                style={{ width: 280, height: 580 }}
              >
                {/* Side buttons */}
                <div className="absolute -right-[4px] top-[110px] w-[4px] h-14 rounded-r-full bg-neutral-600" />
                <div className="absolute -left-[4px] top-[96px] w-[4px] h-8 rounded-l-full bg-neutral-600" />
                <div className="absolute -left-[4px] top-[118px] w-[4px] h-12 rounded-l-full bg-neutral-600" />
                <div className="absolute -left-[4px] top-[142px] w-[4px] h-12 rounded-l-full bg-neutral-600" />

                {/* Phone body */}
                <div
                  className="absolute inset-0 rounded-[44px] border border-neutral-700/80"
                  style={{
                    background: 'linear-gradient(160deg, #2a2a2c 0%, #161618 60%, #0a0a0c 100%)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.15)',
                  }}
                />

                {/* Screen area */}
                <div className="absolute inset-[6px] rounded-[38px] bg-black overflow-hidden group/carousel">
                  {/* Dynamic Island */}
                  <div
                    className="absolute top-3 left-1/2 -translate-x-1/2 z-30 rounded-full bg-black border border-neutral-800"
                    style={{ width: 100, height: 26 }}
                  />

                  {/* Slide image */}
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
                      className="absolute inset-0"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={images[current]}
                        alt={`Screenshot ${current + 1}`}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Prev / Next controls */}
                  <button
                    onClick={(e) => { e.stopPropagation(); go(-1); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/90 z-20 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    onClick={(e) => { e.stopPropagation(); go(1); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/90 z-20 cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>

                  <button
                    onClick={(e) => { e.stopPropagation(); setLightbox(true); }}
                    className="absolute top-10 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all z-20 cursor-pointer"
                    title="Fullscreen zoom"
                  >
                    <Expand size={12} />
                  </button>

                  {/* Counter badge */}
                  <div className="absolute bottom-4 right-3 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold text-white bg-black/60 backdrop-blur-sm z-20">
                    {current + 1} / {images.length}
                  </div>
                </div>
              </div>

              {/* Quick Prev / Next Buttons */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={() => go(-1)}
                  className="flex items-center gap-1 px-3 py-1.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--ink-primary)] text-[var(--ink-primary)] text-xs font-mono transition-colors cursor-pointer"
                >
                  <ChevronLeft size={12} />
                  <span>Prev</span>
                </button>
                <span className="text-[var(--ink-muted)] text-xs font-mono tabular-nums">
                  {current + 1} / {images.length}
                </span>
                <button
                  onClick={() => go(1)}
                  className="flex items-center gap-1 px-3 py-1.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--ink-primary)] text-[var(--ink-primary)] text-xs font-mono transition-colors cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>

            {/* Right: Screen Navigator & Telemetry Detail */}
            <div className="lg:col-span-6 space-y-4">
              <div className="border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4">
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <Smartphone size={14} className="text-[var(--brand-primary)]" />
                    <span className="text-xs font-mono font-bold text-[var(--ink-primary)] uppercase tracking-wider">
                      Screen Explorer
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--brand-secondary)] font-bold">
                    SELECT TO INSPECT
                  </span>
                </div>

                <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                  {images.map((_, idx) => {
                    const isSelected = current === idx;
                    const title = SCREEN_TITLES[idx] || `Application Interface View 0${idx + 1}`;
                    return (
                      <button
                        key={idx}
                        onClick={() => { setAutoplay(false); setCurrent(idx); }}
                        className={`w-full flex items-center justify-between p-2.5 text-xs font-mono transition-all text-left border cursor-pointer ${
                          isSelected
                            ? 'border-[var(--brand-primary)] bg-[var(--bg-void)] text-[var(--ink-primary)] font-bold shadow-xs'
                            : 'border-transparent text-[var(--ink-secondary)] hover:bg-[var(--bg-void)] hover:text-[var(--ink-primary)]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span className={`text-[10px] ${isSelected ? 'text-[var(--brand-primary)] font-bold' : 'text-[var(--ink-muted)]'}`}>
                            0{idx + 1}
                          </span>
                          <span className="truncate">{title}</span>
                        </div>
                        {isSelected && <Eye size={12} className="text-[var(--brand-primary)] shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--ink-secondary)] flex items-center justify-between">
                <span>Viewport: 1080x2400 AMOLED</span>
                <span className="text-[var(--brand-primary)] font-bold">100% On-Device UI</span>
              </div>
            </div>

          </div>
        </div>

        {lightboxEl}
      </>
    );
  }

  /* ── Default flat carousel ── */
  return (
    <>
      <div className={`relative w-full ${heightClass} group/carousel overflow-hidden`}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[current]}
              alt={`Screenshot ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        <button
          onClick={(e) => { e.stopPropagation(); go(-1); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/75 hover:scale-110 z-20 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); go(1); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/75 hover:scale-110 z-20 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); setLightbox(true); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/75 z-20 cursor-pointer"
        >
          <Expand size={14} />
        </button>

        <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-full text-[11px] font-semibold text-white bg-black/50 backdrop-blur-sm z-20">
          {current + 1} / {images.length}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setAutoplay(false); setCurrent(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                background: i === current ? accent : 'rgba(255,255,255,0.5)',
              }}
            />
          ))}
        </div>
      </div>

      {lightboxEl}
    </>
  );
}
