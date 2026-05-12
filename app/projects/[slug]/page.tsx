'use client';

import { useRef } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowLeft, ArrowUpRight, Calendar, Tag, Zap,
  Star, Layers, Code2, ExternalLink, Cpu, Globe, Terminal as TerminalIcon
} from 'lucide-react';
import { PROJECTS } from '@/lib/projects';
import { ImageCarousel } from '@/components/projects/ImageCarousel';
import { AerialEyeVisualization } from '@/components/projects/AerialEyeVisualization';

/* ── Terminal mockup (SAARA) ── */
function TerminalMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#050505] p-8 overflow-hidden group/terminal">
      <div className="w-full max-w-xl select-none">
        <div className="flex items-center gap-2 px-6 py-4 bg-white/[0.03] rounded-t-[1.5rem] border border-white/10 border-b-0 backdrop-blur-xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-pink/40" />
            <div className="w-3 h-3 rounded-full bg-accent-gold/40" />
            <div className="w-3 h-3 rounded-full bg-accent-lime/40" />
          </div>
          <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] ml-4 flex items-center gap-2">
            <TerminalIcon size={12} className="text-accent-cyan" /> saara-ai — core_v4.2
          </span>
        </div>
        <div className="bg-black/60 px-6 py-8 font-mono text-[11px] space-y-3 rounded-b-[1.5rem] border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.02] to-transparent pointer-events-none" />
          <div className="relative z-10"><span className="text-accent-cyan">❯</span> <span className="text-zinc-300 font-bold uppercase tracking-tight">pip install saara-ai</span></div>
          <div className="relative z-10 text-zinc-500 font-medium">Collecting resources from high-fidelity mirrors...</div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="flex gap-1">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: i < 17 ? 1 : 0.2 }}
                  transition={{ delay: i * 0.05 }}
                  className={`w-2.5 h-4 rounded-sm ${i < 17 ? 'bg-accent-cyan' : 'bg-white/5'}`} 
                />
              ))}
            </div>
            <span className="text-accent-cyan font-black">85%</span>
          </div>
          <div className="relative z-10 text-accent-lime font-black uppercase tracking-widest text-[9px] flex items-center gap-2">
            <Zap size={10} /> SYSTEM INJECTED SUCCESSFULLY
          </div>
          <div className="mt-4 relative z-10"><span className="text-accent-cyan">❯</span> <span className="text-zinc-300 uppercase tracking-tighter">saara compute --artifact data.v4</span></div>
          {[
            { color: 'var(--accent-cyan)', label: 'PHASE_01', text: 'Structure Decomposition → 100% COMPLETE' },
            { color: 'var(--accent-purple)', label: 'PHASE_02', text: 'Semantic Mapping → VECTOR_SYNC_ACTIVE' },
            { color: 'var(--accent-pink)', label: 'PHASE_03', text: 'Validation Loop → COHERENCE: 0.992' },
          ].map(({ color, label, text }) => (
            <div key={label} className="flex gap-4 relative z-10">
              <span style={{ color }} className="font-black text-[9px] min-w-[60px]">{label}</span>
              <span className="text-zinc-400 font-medium">{text}</span>
            </div>
          ))}
          <div className="relative z-10 flex items-center gap-2 pt-2">
            <span className="text-accent-cyan">❯</span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="w-2 h-4 bg-accent-cyan/60 rounded-sm inline-block" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SECTION_LINKS = [
  { id: 'media', label: 'Visualization' },
  { id: 'overview', label: 'Narrative' },
  { id: 'highlights', label: 'Core Intel' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'deep-dive', label: 'Technology' },
  { id: 'stack', label: 'Arsenal' },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const springHeroY = useSpring(heroY, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-[#050505]">
      <section ref={heroRef} className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: `linear-gradient(160deg, ${project.accentDark}20 0%, ${project.accent}15 50%, #050505 100%)` }} />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-20 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{ background: project.accent }}
        />
        <motion.div
          animate={{ scale: [1, 0.8, 1], rotate: [0, -10, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: 1 }}
          className="absolute bottom-20 -left-40 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: 'var(--accent-purple)' }}
        />
        <div className="absolute inset-0 opacity-[0.04] z-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`, backgroundSize: '60px 60px', maskImage: 'linear-gradient(to bottom, black, transparent)' }} />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="absolute top-10 left-10 z-20">
          <Link href="/#projects" className="group glass px-6 py-3 rounded-2xl border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all flex items-center gap-4 hover:border-white/20">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Project Archive
          </Link>
        </motion.div>
        <motion.div style={{ y: springHeroY, opacity: heroOpacity }} className="relative z-10 px-8 pt-32 pb-24 max-w-7xl mx-auto w-full">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.08] backdrop-blur-3xl flex items-center justify-center border border-white/10 shadow-2xl">
                <project.icon size={32} style={{ color: project.accent }} />
              </div>
              <div className="space-y-1">
                <p className="text-accent-cyan text-[10px] font-black tracking-[0.4em] uppercase">{project.category}</p>
                <div className="flex items-center gap-3">
                  <Calendar size={14} className="text-zinc-600" /><span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{project.date}</span>
                </div>
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} className="display-heading text-[3.5rem] sm:text-[5.5rem] lg:text-[8rem] font-black text-white tracking-tighter leading-[0.85] uppercase mb-8">
              {project.name.split(' ').map((word, i) => (<span key={i} className={i % 2 === 1 ? 'gradient-text' : ''}>{word}{' '}</span>))}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-zinc-400 font-medium max-w-3xl leading-relaxed mb-12">{project.tagline}</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] transition-all shadow-2xl ${link.primary ? 'bg-white text-black' : 'glass border-white/10 text-white hover:bg-white/5'}`}>
                  <link.icon size={16} />{link.label}<ArrowUpRight size={14} className="text-accent-cyan" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-16 space-y-32">
        <motion.nav initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="sticky top-10 z-[100]">
          <div className="overflow-x-auto rounded-3xl border border-white/5 bg-[#050505]/60 px-3 py-3 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-3xl mx-auto w-fit max-w-full">
            <div className="flex items-center gap-2">
              {SECTION_LINKS.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="rounded-2xl px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 transition-all hover:bg-white/5 hover:text-white whitespace-nowrap">{item.label}</a>
              ))}
            </div>
          </div>
        </motion.nav>

        <motion.section id="media" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="scroll-mt-32">
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <p className="eyebrow">Visual Architecture</p>
              <h2 className="display-heading text-[2.5rem] sm:text-[4.5rem] uppercase tracking-tighter">{project.slug === 'aerial-eye' ? 'SYSTEM' : project.media === 'images' ? 'INTERFACE' : 'TERMINAL'}{' '}<span className="gradient-text">INSIGHTS</span></h2>
            </div>
            <div className="flex items-center gap-4 text-zinc-600">
               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><Layers size={20} style={{ color: project.accent }} /></div>
               <span className="text-[10px] font-black uppercase tracking-[0.3em]">H-Fidelity Visualization</span>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="card overflow-hidden border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.9)] group">
            {project.slug === 'aerial-eye' ? (<AerialEyeVisualization detailed />) : project.media === 'images' && project.images ? (<ImageCarousel images={project.images} accent={project.accent} mockup interval={2800} />) : (<div className="aspect-[16/10] md:h-[600px]"><TerminalMockup /></div>)}
          </motion.div>
        </motion.section>

        <motion.section id="overview" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="scroll-mt-32">
          <motion.div variants={fadeUp} className="mb-16">
             <p className="eyebrow">Project Narrative</p>
             <h2 className="display-heading text-[2.5rem] sm:text-[4.5rem] uppercase tracking-tighter">MISSION <span className="gradient-text">OBJECTIVES</span></h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeUp} className="space-y-8">
              {project.details.slice(0, Math.ceil(project.details.length / 2)).map((para, i) => (<p key={i} className="text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium">{para}</p>))}
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-8">
              {project.details.slice(Math.ceil(project.details.length / 2)).map((para, i) => (<p key={i} className="text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium">{para}</p>))}
              <div className="p-8 rounded-[2rem] glass border-white/5 bg-gradient-to-br from-accent-cyan/5 to-transparent">
                 <div className="flex items-center gap-4 mb-4"><Zap size={24} className="text-accent-cyan" /><h4 className="text-sm font-black text-white uppercase tracking-widest">Key Strategy</h4></div>
                 <p className="text-sm text-zinc-500 leading-relaxed italic">"Focusing on system-wide efficiency and autonomous reasoning capabilities to solve enterprise-level data orchestration challenges."</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section id="highlights" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="scroll-mt-32">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="eyebrow">Technical Benchmarks</p>
            <h2 className="display-heading text-[2.5rem] sm:text-[4.5rem] uppercase tracking-tighter">KEY <span className="gradient-text">HIGHLIGHTS</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.highlights.map((h, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="flex flex-col gap-6 p-10 rounded-[2.5rem] glass border-white/5 hover:border-accent-cyan/30 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 bg-white/[0.03] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl"><Star size={24} style={{ color: project.accent }} /></div>
                <p className="text-base text-zinc-400 leading-relaxed font-bold uppercase tracking-tight group-hover:text-white transition-colors">{h}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="architecture" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="scroll-mt-32">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="eyebrow">Blueprints & Logic</p>
            <h2 className="display-heading text-[2.5rem] sm:text-[4.5rem] uppercase tracking-tighter leading-none">SYSTEM <span className="gradient-text">ARCHITECTURE</span></h2>
          </motion.div>
          <motion.div variants={fadeUp} className="card p-12 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.03] to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
              {project.architecture.map((layer, li) => (
                <div key={layer.title} className="flex-1 space-y-6">
                  <div className="text-[10px] font-black tracking-[0.4em] text-zinc-600 uppercase mb-8 border-b border-white/5 pb-4">{layer.title}</div>
                  <div className="space-y-4">
                    {layer.nodes.map((node, ni) => (
                      <motion.div key={node.label} whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.05)' }} className="rounded-2xl p-6 border border-white/5 glass transition-all duration-500 shadow-xl" style={{ borderLeft: `4px solid ${node.color}` }}>
                        <p className="text-white text-sm font-black uppercase tracking-tight">{node.label}</p>
                        {node.sublabel && (<p className="text-zinc-500 text-[10px] font-bold mt-2 uppercase tracking-widest">{node.sublabel}</p>)}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:flex justify-around items-center mt-12 px-12">
               {project.architecture.slice(0, -1).map((_, i) => (
                 <motion.div key={i} animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} className="flex items-center gap-4 text-zinc-800">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" /><ArrowUpRight size={20} className="rotate-45" />
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section id="deep-dive" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="scroll-mt-32">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="eyebrow">Engine Specs</p>
            <h2 className="display-heading text-[2.5rem] sm:text-[4.5rem] uppercase tracking-tighter">TECHNOLOGY <span className="gradient-text">DEEP DIVE</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-8">
            {project.techDetails.map((tech, i) => (
              <motion.div key={tech.name} variants={fadeUp} whileHover={{ y: -8, borderLeftColor: project.accent }} className="flex items-start gap-8 p-10 rounded-[2.5rem] glass border-white/5 border-l-0 transition-all duration-500 hover:bg-white/[0.03] shadow-2xl" style={{ borderLeft: `1px solid rgba(255,255,255,0.05)` }}>
                <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-3xl shrink-0 glass border-white/10 shadow-2xl transition-transform group-hover:scale-110" style={{ background: `${project.accent}10` }}>{tech.icon}</div>
                <div className="space-y-3">
                  <p className="text-xl font-black text-white uppercase tracking-tight">{tech.name}</p>
                  <p className="text-base text-zinc-500 leading-relaxed font-medium italic opacity-80">"{tech.desc}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="stack" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="scroll-mt-32 pb-20">
          <motion.div variants={fadeUp} className="mb-16">
            <p className="eyebrow">Arsenal Inventory</p>
            <h2 className="display-heading text-[2.5rem] sm:text-[4.5rem] uppercase tracking-tighter">FULL <span className="gradient-text">STACK</span></h2>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <motion.span key={tag} whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255,255,255,0.05)' }} className="px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] border border-white/5 glass transition-all duration-300 hover:text-white" style={{ color: project.accent, borderLeft: `3px solid ${project.accent}88` }}>{tag}</motion.span>
            ))}
          </motion.div>
        </motion.section>

        <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="rounded-[3.5rem] p-12 sm:p-24 text-center relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.9)]" style={{ background: `linear-gradient(135deg, ${project.accentDark}40 0%, ${project.accent}20 100%)` }}>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none" style={{ background: project.accent }} />
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-4 glass px-6 py-2 rounded-full border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-accent-cyan shadow-xl"><Cpu size={14} className="animate-pulse" /> Final Verification</div>
            <h2 className="display-heading text-[3.5rem] sm:text-[6rem] font-black text-white tracking-tighter leading-[0.85] uppercase max-w-4xl mx-auto">INITIATE <span className="gradient-text">PROJECT</span><br />DEEP DIVE</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">"{project.shortDesc}"</p>
            <div className="flex flex-wrap gap-6 justify-center">
              {project.links.map((link) => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className={`inline-flex items-center gap-5 px-10 py-5 rounded-[2rem] text-xs font-black uppercase tracking-[0.3em] transition-all shadow-2xl ${link.primary ? 'bg-white text-black' : 'glass border-white/10 text-white hover:bg-white/10'}`}>
                  <link.icon size={18} />{link.label}<ArrowUpRight size={16} className="text-accent-cyan" />
                </motion.a>
              ))}
              <motion.div whileHover={{ scale: 1.05, y: -5 }}>
                <Link href="/#projects" className="inline-flex items-center gap-5 px-10 py-5 rounded-[2rem] text-xs font-black uppercase tracking-[0.3em] bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10 hover:text-white transition-all shadow-2xl"><ArrowLeft size={18} /> Archives</Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="max-w-7xl mx-auto px-8 pb-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 opacity-40 hover:opacity-100 transition-opacity duration-700">
         <div className="flex items-center gap-6"><Globe size={18} className="text-zinc-600" /><p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Node Location: Hyderabad, IN</p></div>
         <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">Kilani Sai Nikhil © 2026 • Verified Artifact Integrity</p>
      </footer>
    </div>
  );
}
