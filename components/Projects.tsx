'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import {
  Search, X, Calendar, ArrowUpRight,
} from 'lucide-react';
import { PROJECTS } from '@/lib/projects';
import { ImageCarousel } from '@/components/projects/ImageCarousel';
import { AerialEyeVisualization } from '@/components/projects/AerialEyeVisualization';

/* ── Animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };

/* ── Terminal preview (card-sized) ── */
function MiniTerminal() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0f172a] overflow-hidden p-4">
      <div className="w-full max-w-xs select-none">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#1e293b] rounded-t-xl border-b border-[#334155]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
          </div>
          <span className="text-slate-400 text-[10px] font-mono ml-1">saara-ai</span>
        </div>
        <div className="bg-[#0f172a] px-3 py-2.5 font-mono text-[10px] space-y-1 rounded-b-xl border border-[#334155] border-t-0">
          <div><span className="text-sky-400">❯</span> <span className="text-slate-200">pip install saara-ai</span></div>
          <div className="text-emerald-400">✔ package installed successfully</div>
          <div><span className="text-sky-400">❯</span> <span className="text-slate-200">saara run --input data.pdf</span></div>
          {[
            { c: '#38bdf8', t: '⚗  Parsing Engine  → OK' },
            { c: '#2dd4bf', t: '⚙  Data Processor  → 100%' },
            { c: '#fbbf24', t: '📦  Validation     → passed' },
            { c: '#34d399', t: '🚀  Export         → JSON/CSV' },
          ].map(({ c, t }) => <div key={t} style={{ color: c }}>{t}</div>)}
          <div className="text-emerald-400">✓ Done</div>
          <span className="w-1.5 h-3 bg-sky-400/70 animate-pulse rounded-sm inline-block" />
        </div>
      </div>
    </div>
  );
}

/* ── Tilt card ── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotX = useSpring(rx, { damping: 40, stiffness: 260 });
  const rotY = useSpring(ry, { damping: 40, stiffness: 260 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    rx.set(-(e.clientY - r.top - r.height / 2) / 30);
    ry.set((e.clientX - r.left - r.width / 2) / 30);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1200 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

/* ── Main Component ── */
export function Projects() {
  const [query, setQuery] = useState('');
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category.split('·')[0].trim())))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const filtered = PROJECTS.filter((p) => {
    const q = query.toLowerCase();
    const matchesCategory = activeCategory === 'All' || p.category.startsWith(activeCategory);
    const matchesQuery = (
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    );
    return (
      matchesCategory && matchesQuery
    );
  });

  return (
    <section id="projects" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>

        {/* Header */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow mb-2">Projects</p>
            <h2 className="display-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What I&apos;ve built
            </h2>
            <p className="mt-2 text-zinc-500 text-sm">
              {PROJECTS.length} projects &middot; click any card for the full breakdown
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, stack, type…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500/50 transition-all"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 3px rgba(0,0,0,0.2)' }}
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const active = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="rounded-full border px-3 py-1.5 text-xs font-semibold transition-all"
                style={
                  active
                    ? { background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', color: '#fff', borderColor: 'transparent' }
                    : { background: 'rgba(139, 92, 246, 0.08)', color: '#a1a1aa', borderColor: 'rgba(139, 92, 246, 0.2)' }
                }
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-slate-400"
            >
              <Search size={32} className="mx-auto mb-3 opacity-40" />
              <p className="font-medium">
                No projects match &ldquo;{query}&rdquo; in {activeCategory}
              </p>
            </motion.div>
          ) : (
            <div key="grid" className="grid md:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <motion.div key={p.slug} variants={fadeUp} layout className="h-full">
                  <TiltCard>
                    <Link href={`/projects/${p.slug}`} className="block h-full">
                      <div
                        className="card rounded-2xl overflow-hidden group cursor-pointer h-full flex flex-col hover:-translate-y-1 transition-transform duration-300"
                      >
                        {/* Media */}
                        <div
                          className="relative w-full h-56 overflow-hidden shrink-0"
                          style={{ background: `linear-gradient(145deg, ${p.accent}18 0%, ${p.accent}08 100%)` }}
                        >
                          {/* Hover glow */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
                            style={{ background: `radial-gradient(ellipse at 50% 100%, ${p.accent}25 0%, transparent 65%)` }}
                          />

                          {p.slug === 'aerial-eye' ? (
                            <AerialEyeVisualization />
                          ) : (
                            p.media === 'images' && p.images
                              ? <ImageCarousel images={p.images} accent={p.accent} heightClass="h-56" interval={2400} />
                              : <MiniTerminal />
                          )}

                          {/* Category badge */}
                          <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/55 backdrop-blur-sm text-white pointer-events-none">
                            <p.icon size={11} />
                            {p.category}
                          </div>

                          {/* Explore overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                            <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black/60 backdrop-blur-sm text-white text-sm font-semibold">
                              <ArrowUpRight size={15} />
                              Explore Project
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2.5">
                              <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: `${p.accent}18` }}
                              >
                                <p.icon size={17} style={{ color: p.accent }} />
                              </div>
                              <div>
                                <h3 className="display-heading font-extrabold text-slate-800 text-lg leading-tight">{p.name}</h3>
                                <p className="text-[11px] font-semibold mt-0.5 leading-tight" style={{ color: p.accent }}>
                                  {p.tagline}
                                </p>
                              </div>
                            </div>
                            <span className="flex items-center gap-1 text-xs text-slate-400 font-medium whitespace-nowrap mt-0.5 shrink-0">
                              <Calendar size={11} />
                              {p.date}
                            </span>
                          </div>

                          <p className="text-sm text-slate-500 leading-relaxed mt-3 mb-4 line-clamp-2 flex-1">
                            {p.shortDesc}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {p.tags.slice(0, 5).map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded-md text-[11px] font-semibold"
                                style={{ color: p.accent, background: `${p.accent}12` }}
                              >
                                {t}
                              </span>
                            ))}
                            {p.tags.length > 5 && (
                              <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold text-slate-500 bg-slate-100">
                                +{p.tags.length - 5}
                              </span>
                            )}
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                            <div className="flex gap-2">
                              {p.links.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                                  style={
                                    link.primary
                                      ? { background: p.accent, color: '#fff' }
                                      : { border: `1.5px solid ${p.accent}44`, color: p.accent }
                                  }
                                >
                                  <link.icon size={12} />
                                  {link.label}
                                </a>
                              ))}
                            </div>
                            <span
                              className="flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
                              style={{ color: p.accent }}
                            >
                              Full breakdown
                              <ArrowUpRight size={13} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
}
