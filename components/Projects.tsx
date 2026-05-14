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
    <div className="w-full h-full flex items-center justify-center bg-[#050505] p-12">
      <div className="w-full max-w-sm font-mono relative">
        <div className="absolute inset-0 bg-accent-cyan/5 blur-3xl rounded-full animate-pulse" />
        <div className="relative glass-cyan p-6 rounded-2xl border-white/5 space-y-4">
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
             <span className="text-[9px] font-black text-accent-cyan uppercase tracking-[0.2em]">Data Exhibit</span>
             <div className="h-1 w-8 bg-accent-cyan/20 rounded-full" />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-tighter">
              ❯ Executing simulation...<br/>
              ❯ Parameters: Optimized<br/>
              ❯ State: <span className="text-accent-cyan">Production</span>
            </p>
          </div>
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
      <motion.div 
        variants={containerVariants}
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.1 }} 
        className="space-y-32"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="eyebrow">Project Exhibits</p>
            <h2 className="display-heading text-[4rem] sm:text-[6rem] lg:text-[9rem] uppercase">SELECTED <span className="gradient-text">WORKS</span></h2>
          </motion.div>

          <motion.div variants={fadeUp} className="relative w-full lg:w-96">
            <div className="relative glass-cyan rounded-full border-white/5 flex items-center px-6 py-4">
              <Search size={16} className="text-white/20" />
              <input 
                type="text" 
                placeholder="Query Database..." 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                className="w-full bg-transparent border-none focus:ring-0 text-[10px] font-bold text-white placeholder:text-white/20 ml-4 uppercase tracking-[0.2em]" 
              />
              {query && <button onClick={() => setQuery('')} className="text-white/20 hover:text-white transition-colors"><X size={14} /></button>}
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)} 
              className={`px-8 py-2.5 rounded-full text-[9px] font-black uppercase tracking-[0.25em] transition-all duration-700 ${
                activeCategory === cat 
                  ? 'bg-accent-cyan text-black' 
                  : 'glass border-white/5 text-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden"
          >
            {filtered.map((p, index) => (
              <motion.div 
                key={p.slug} 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="bg-[#050505] p-10 lg:p-14 group relative"
              >
                <Link href={`/projects/${p.slug}`} className="block h-full space-y-12">
                  <div className="aspect-[16/9] relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#080808]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                      <div className="glass px-8 py-3 rounded-full text-white text-[9px] font-black uppercase tracking-[0.3em] border-white/10">
                        View Artifact <ArrowUpRight size={14} className="inline ml-2 text-accent-cyan" />
                      </div>
                    </div>
                    
                    <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000">
                      {p.slug === 'aerial-eye' ? <AerialEyeVisualization /> : p.media === 'images' && p.images ? <ImageCarousel images={p.images} accent={p.accent} heightClass="h-full" interval={3500} /> : <MiniTerminal />}
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] font-black text-accent-cyan uppercase tracking-[0.3em] mb-3">{p.tagline}</p>
                        <h3 className="text-4xl font-black text-white uppercase tracking-tighter font-display">{p.name}</h3>
                      </div>
                      <span className="text-[9px] font-bold text-white/10 uppercase tracking-widest mt-2">{p.date}</span>
                    </div>
                    
                    <p className="text-white/40 text-lg leading-relaxed font-display italic">"{p.shortDesc}"</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="text-[8px] font-bold px-4 py-1.5 rounded-full border border-white/5 text-white/20 uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
