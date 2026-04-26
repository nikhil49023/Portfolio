'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Calendar, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/projects';
import { ImageCarousel } from '@/components/projects/ImageCarousel';
import { AerialEyeVisualization } from '@/components/projects/AerialEyeVisualization';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

function MiniTerminal() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0c0c0c] overflow-hidden p-4">
      <div className="w-full max-w-xs select-none font-mono text-[10px]">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] rounded-t-lg border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <span className="text-zinc-500 ml-2">saara-ai</span>
        </div>
        <div className="bg-[#0c0c0c] px-3 py-2 font-mono text-[9px] space-y-0.5 rounded-b-lg border border-white/10 border-t-0">
          <div><span className="text-cyan-400">❯</span> <span className="text-zinc-300">pip install saara-ai</span></div>
          <div className="text-green-500">✔ installed successfully</div>
          {['Parsing → OK', 'Processing → 100%', 'Export → JSON'].map((t) => (
            <div key={t} style={{ color: t.includes('OK') ? '#22d3d4' : t.includes('100') ? '#fbbf24' : '#4ade80' }}>{t}</div>
          ))}
          <span className="w-1 h-3 bg-cyan-400/70 animate-pulse rounded-sm inline-block" />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [query, setQuery] = useState('');
  const categories = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category.split('·')[0].trim())))], []);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filtered = PROJECTS.filter((p) => {
    const q = query.toLowerCase();
    return (activeCategory === 'All' || p.category.startsWith(activeCategory)) &&
      (p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q)));
  });

  return (
    <section id="projects" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-2">Projects</p>
            <h2 className="display-heading text-3xl sm:text-4xl font-bold text-white">What I've Built</h2>
            <p className="mt-2 text-zinc-500 text-sm">{PROJECTS.length} projects</p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full pl-9 pr-8 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-rose-500/50" />
            {query && <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"><X size={12} /></button>}
          </div>
        </motion.div>

        {/* Category pills */}
        <motion.div variants={fadeUp} className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className="rounded-full border px-3 py-1 text-xs font-medium transition-all" style={activeCategory === cat ? { background: '#e11d48', color: '#fff', borderColor: '#e11d48' } : { borderColor: 'rgba(255,255,255,0.1)', color: '#a3a3a3' }}>
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 text-zinc-500">No projects match "{query}"</motion.div>
          ) : (
            <div key="grid" className="grid md:grid-cols-2 gap-4">
              {filtered.map((p) => (
                <motion.div key={p.slug} variants={fadeUp} layout>
                  <Link href={`/projects/${p.slug}`} className="block card rounded-2xl overflow-hidden group">
                    {/* Media */}
                    <div className="relative h-48" style={{ background: `linear-gradient(145deg, ${p.accent}20 0%, ${p.accent}05 100%)` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur text-white text-sm font-medium">
                          <ArrowUpRight size={14} /> Explore
                        </div>
                      </div>
                      {p.slug === 'aerial-eye' ? <AerialEyeVisualization /> : p.media === 'images' && p.images ? <ImageCarousel images={p.images} accent={p.accent} heightClass="h-48" interval={2400} /> : <MiniTerminal />}
                      <span className="absolute top-3 left-3 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 text-white text-[10px] font-medium">{p.category}</span>
                    </div>
                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${p.accent}20` }}><p.icon size={14} style={{ color: p.accent }} /></div>
                          <div>
                            <h3 className="font-bold text-white">{p.name}</h3>
                            <p className="text-[10px]" style={{ color: p.accent }}>{p.tagline}</p>
                          </div>
                        </div>
                        <span className="text-[10px] text-zinc-500">{p.date}</span>
                      </div>
                      <p className="text-xs text-zinc-500 line-clamp-2 mb-3">{p.shortDesc}</p>
                      <div className="flex flex-wrap gap-1">
                        {p.tags.slice(0, 4).map((t) => <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">{t}</span>)}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}