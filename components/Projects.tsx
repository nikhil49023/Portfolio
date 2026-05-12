'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/projects';
import { ImageCarousel } from '@/components/projects/ImageCarousel';
import { AerialEyeVisualization } from '@/components/projects/AerialEyeVisualization';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

function MiniTerminal() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#050505] overflow-hidden p-8 group-hover:bg-[#080808] transition-colors duration-700">
      <div className="w-full max-w-xs select-none font-mono">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-t-2xl border border-white/10 border-b-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-pink/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent-gold/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent-lime/40" />
          </div>
          <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] ml-2">Kernel Core v4.2</span>
        </div>
        <div className="bg-black/60 px-5 py-6 font-mono text-[10px] space-y-2 rounded-b-2xl border border-white/10 backdrop-blur-3xl shadow-2xl">
          <div className="flex gap-2"><span className="text-accent-cyan animate-pulse">❯</span> <span className="text-zinc-400">initializing_artifact...</span></div>
          <div className="text-accent-lime font-black tracking-tight">STATUS: DEPLOYED SUCCESSFUL</div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {['ENCR: AES-256', 'LAT: 12ms', 'NOD: ACTIVE', 'SYNC: 100%'].map((t) => (
              <div key={t} className="text-[8px] font-bold text-zinc-600 border border-white/5 px-2 py-1 rounded bg-white/5 uppercase tracking-tighter">{t}</div>
            ))}
          </div>
          <motion.div 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-4 bg-accent-cyan/60 rounded-sm inline-block mt-4" 
          />
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
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-cyan/5 blur-[180px] -z-10" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.1 }} 
        className="space-y-20"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="eyebrow">Project Artifacts</p>
            <h2 className="display-heading text-[3rem] sm:text-[5rem] lg:text-[7rem] uppercase mb-8">SELECTED <span className="gradient-text">WORKS</span></h2>
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-20 bg-gradient-to-r from-accent-cyan to-transparent" />
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">{PROJECTS.length} Specialized Systems</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative w-full lg:w-96 group">
            <div className="absolute inset-0 bg-accent-cyan/15 blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />
            <div className="relative glass rounded-2xl border-white/10 flex items-center px-6 py-4 group-focus-within:border-accent-cyan/40 transition-all duration-500 shadow-2xl">
              <Search size={18} className="text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search Database..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                className="w-full bg-transparent border-none focus:ring-0 text-sm font-black text-white placeholder:text-zinc-600 ml-4 uppercase tracking-widest" 
              />
              {query && <button onClick={() => setQuery('')} className="text-zinc-500 hover:text-white transition-colors"><X size={16} /></button>}
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)} 
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                activeCategory === cat 
                  ? 'bg-accent-cyan text-black shadow-[0_10px_30px_rgba(0,216,255,0.3)]' 
                  : 'glass text-zinc-500 hover:text-white border-white/5 hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-40 glass rounded-[3rem] border-dashed border-white/10"
            >
              <p className="text-zinc-500 font-black uppercase tracking-[0.3em] text-xs">No matching artifacts found in the high-fidelity database.</p>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {filtered.map((p, index) => (
                <motion.div 
                  key={p.slug} 
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                >
                  <Link href={`/projects/${p.slug}`} className="block card group overflow-hidden border-white/10 hover:border-accent-cyan/40 transition-all duration-700 shadow-2xl rounded-[2.5rem]">
                    <div className="aspect-[16/10] relative overflow-hidden bg-[#080808]">
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700 z-10" />
                      <div className="absolute inset-0 flex items-center justify-center translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) z-20">
                        <div className="glass px-8 py-4 rounded-2xl flex items-center gap-4 text-white text-xs font-black uppercase tracking-[0.2em] border-accent-cyan/40 shadow-2xl">
                          Access Core <ArrowUpRight size={18} className="text-accent-cyan" />
                        </div>
                      </div>
                      
                      {/* Visualization/Media */}
                      <div className="w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out">
                        {p.slug === 'aerial-eye' ? <AerialEyeVisualization /> : p.media === 'images' && p.images ? <ImageCarousel images={p.images} accent={p.accent} heightClass="h-full" interval={2800} /> : <MiniTerminal />}
                      </div>

                      {/* Floating Category Tag */}
                      <div className="absolute top-8 left-8 z-20 px-4 py-2 rounded-xl glass border-white/10 text-[10px] font-black text-white uppercase tracking-[0.25em] shadow-xl group-hover:border-accent-cyan/40 transition-colors">
                        {p.category}
                      </div>
                    </div>
                    
                    <div className="p-10">
                      <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center glass border-white/10 group-hover:border-accent-cyan/30 transition-all duration-500 shadow-xl group-hover:rotate-6">
                            <p.icon size={28} style={{ color: p.accent }} className="group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-accent-cyan transition-colors duration-500">{p.name}</h3>
                            <p className="text-[11px] font-black text-accent-cyan uppercase tracking-[0.2em] mt-1">{p.tagline}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                           <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{p.date}</span>
                           <div className="w-12 h-[1px] bg-white/5" />
                        </div>
                      </div>
                      <p className="text-zinc-400 text-base leading-relaxed line-clamp-2 mb-10 font-medium italic opacity-80 group-hover:opacity-100 transition-opacity">"{p.shortDesc}"</p>
                      <div className="flex flex-wrap gap-2.5">
                        {p.tags.map((t) => (
                          <span key={t} className="text-[10px] font-black px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-zinc-500 group-hover:text-zinc-200 group-hover:border-white/10 transition-all duration-500 uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
