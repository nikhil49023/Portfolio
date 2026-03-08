'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

type Props = {
  images: string[];
  accent: string;
  /** Height class, e.g. "h-64" or "h-[480px]". Ignored when mockup=true */
  heightClass?: string;
  interval?: number;
  /** Wrap images in a phone mockup frame */
  mockup?: boolean;
};

export function ImageCarousel({ images, accent, heightClass = 'h-80', interval = 2400, mockup = false }: Props) {
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-sm h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current]}
              alt={`Screenshot ${current + 1}`}
              fill
              className="object-contain"
              unoptimized
            />
            <button
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all"
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

  /* ── Phone mockup mode ── */
  if (mockup) {
    return (
      <>
        <div className="flex flex-col items-center justify-center py-14 px-6 bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50 min-h-[700px]">
          {/* Phone shell */}
          <div
            className="relative"
            style={{ width: 288, height: 606 }}
          >
            {/* Side buttons */}
            <div className="absolute -right-[5px] top-[110px] w-[5px] h-16 rounded-r-full bg-slate-600" />
            <div className="absolute -left-[5px] top-[96px] w-[5px] h-10 rounded-l-full bg-slate-600" />
            <div className="absolute -left-[5px] top-[118px] w-[5px] h-14 rounded-l-full bg-slate-600" />  {/* vol up */}
            <div className="absolute -left-[5px] top-[142px] w-[5px] h-14 rounded-l-full bg-slate-600" />  {/* vol dn */}

            {/* Phone body */}
            <div
              className="absolute inset-0 rounded-[48px]"
              style={{
                background: 'linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 60%, #111 100%)',
                boxShadow: '0 60px 120px rgba(0,0,0,0.55), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.12)',
              }}
            />

            {/* Screen area (with rounded corners matching the bezel) */}
            <div className="absolute inset-[8px] rounded-[41px] bg-black overflow-hidden group/carousel">

              {/* Dynamic Island */}
              <div
                className="absolute top-3.5 left-1/2 -translate-x-1/2 z-30 rounded-full bg-black"
                style={{ width: 112, height: 32, boxShadow: '0 0 0 2px #1c1c1e' }}
              />

              {/* Slide image */}
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[current]}
                    alt={`Screenshot ${current + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                    priority={current === 0}
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom gradient scrim for controls visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none z-10" />

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/75 z-20"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); go(1); }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/75 z-20"
              >
                <ChevronRight size={18} />
              </button>

              {/* Expand */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(true); }}
                className="absolute top-12 right-2.5 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/75 z-20"
              >
                <Expand size={14} />
              </button>

              {/* Counter badge */}
              <div className="absolute bottom-5 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-black/55 backdrop-blur-sm z-20 tabular-nums">
                {current + 1} / {images.length}
              </div>

              {/* Dots — show only up to 8, skip if more */}
              {images.length <= 10 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setAutoplay(false); setCurrent(i); }}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? 16 : 5,
                        height: 5,
                        background: i === current ? accent : 'rgba(255,255,255,0.45)',
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Glass glare */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none z-10" />
            </div>

            {/* Outer phone glare */}
            <div className="absolute inset-0 rounded-[48px] bg-gradient-to-tl from-transparent via-transparent to-white/[0.08] pointer-events-none" />
          </div>

          {/* Navigation hint below phone */}
          <div className="mt-8 flex items-center gap-5">
            <button
              onClick={() => go(-1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm hover:shadow-md hover:bg-slate-50 transition-all"
            >
              <ChevronLeft size={16} />
              Prev
            </button>
            <span className="text-slate-400 text-sm font-medium tabular-nums">
              {current + 1} / {images.length}
            </span>
            <button
              onClick={() => go(1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium shadow-sm hover:shadow-md hover:bg-slate-50 transition-all"
            >
              Next
              <ChevronRight size={16} />
            </button>
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`Screenshot ${current + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={current === 0}
              unoptimized
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        <button
          onClick={(e) => { e.stopPropagation(); go(-1); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/75 hover:scale-110 z-20"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); go(1); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/75 hover:scale-110 z-20"
        >
          <ChevronRight size={18} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); setLightbox(true); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/75 z-20"
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
