'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight, Code2, Terminal } from 'lucide-react';
import { PROJECTS } from '@/lib/projects';
import { ImageCarousel } from '@/components/projects/ImageCarousel';
import { AerialEyeVisualization } from '@/components/projects/AerialEyeVisualization';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

function MiniTerminal() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#030303] overflow-hidden p-6">
      <div className="w-full max-w-xs select-none font-mono">
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-t-xl border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest ml-2">System Core</span>
        </div>
        <div className="bg-black/40 px-4 py-4 font-mono text-[10px] space-y-1 rounded-b-xl border border-white/5 border-t-0 backdrop-blur-xl">
          <div className="flex gap-2"><span className="text-accent-cyan">❯</span> <span className="text-zinc-400">initializing_artifact...</span></div>
          <div className="text-accent-lime/70">DECODING SUCCESSFUL</div>
          {['AUTH → ACTIVE', 'DATA → 100%', 'LINK → STABLE'].map((t) => (
            <div key={t} className="text-[9px] font-bold text-zinc-500">{t}</div>
          ))}
          <span className="w-1.5 h-4 bg-accent-cyan/50 animate-pulse rounded-sm inline-block mt-2" />
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
    <section id="projects" className="section relative">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/5 blur-[150px] -z-10" />
      
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="eyebrow">Project Artifacts</p>
            <h2 className="display-heading text-4xl sm:text-6xl uppercase mb-6">SELECTED <span className="gradient-text">WORKS</span></h2>
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-accent-cyan" />
              <p className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">{PROJECTS.length} Systems Deployed</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative w-full lg:w-80 group">
            <div className="absolute inset-0 bg-accent-cyan/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative glass rounded-2xl border-white/5 flex items-center px-4 py-3 group-focus-within:border-accent-cyan/30 transition-all">
              <Search size={16} className="text-zinc-500" />
              <input 
                type="text" 
                placeholder="Query System..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold text-white placeholder:text-zinc-600 ml-3" 
              />
              {query && <button onClick={() => setQuery('')} className="text-zinc-500 hover:text-white transition-colors"><X size={14} /></button>}
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)} 
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat ? 'bg-accent-cyan text-black shadow-lg shadow-accent-cyan/20' : 'glass text-zinc-500 hover:text-white border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32 glass rounded-3xl border-dashed border-white/10">
              <p className="text-zinc-500 font-bold uppercase tracking-widest">No matching artifacts found in the database.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((p, index) => (
                <motion.div 
                  key={p.slug} 
                  variants={fadeUp} 
                  layout
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/projects/${p.slug}`} className="block card group overflow-hidden border-white/5 hover:border-accent-cyan/30 transition-all duration-500">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                      <div className="absolute inset-0 flex items-center justify-center translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                        <div className="glass px-6 py-3 rounded-2xl flex items-center gap-3 text-white text-xs font-black uppercase tracking-widest border-accent-cyan/30">
                          Deploy View <ArrowUpRight size={16} />
                        </div>
                      </div>
                      {p.slug === 'aerial-eye' ? <AerialEyeVisualization /> : p.media === 'images' && p.images ? <ImageCarousel images={p.images} accent={p.accent} heightClass="h-full" interval={2400} /> : <MiniTerminal />}
                      <div className="absolute top-6 left-6 z-20 px-3 py-1 rounded-lg glass border-white/10 text-[10px] font-black text-white uppercase tracking-widest">
                        {p.category}
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl flex items-center justify-center glass border-white/5 group-hover:border-accent-cyan/20 transition-colors">
                            <p.icon size={20} style={{ color: p.accent }} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{p.name}</h3>
                            <p className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest">{p.tagline}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-black text-zinc-600 uppercase mt-2">{p.date}</span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-8 font-medium italic">"{p.shortDesc}"</p>
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="text-[9px] font-black px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-zinc-500 group-hover:text-white transition-colors">
                            {t}
                          </span>
                        ))}
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
