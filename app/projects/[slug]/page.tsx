'use client';

import { useRef } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeft, ArrowUpRight, Calendar, Tag, Zap,
  Star, Layers, Code2, ExternalLink,
} from 'lucide-react';
import { PROJECTS } from '@/lib/projects';
import { ImageCarousel } from '@/components/projects/ImageCarousel';
import { AerialEyeVisualization } from '@/components/projects/AerialEyeVisualization';

/* ── Terminal mockup (SAARA) ── */
function TerminalMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0f172a] p-8 overflow-hidden">
      <div className="w-full max-w-xl select-none">
        <div className="flex items-center gap-2 px-5 py-3 bg-[#1e293b] rounded-t-2xl border-b border-[#334155]">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#f87171]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#fbbf24]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#34d399]" />
          </div>
          <span className="text-slate-400 text-sm font-mono ml-2">saara-ai — terminal</span>
        </div>
        <div className="bg-[#0f172a] px-5 py-4 font-mono text-sm space-y-2 rounded-b-2xl border border-[#334155] border-t-0">
          <div><span className="text-sky-400">❯</span> <span className="text-slate-200">pip install saara-ai</span></div>
          <div className="text-slate-500">Collecting saara-ai...</div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className={`w-2 h-3 rounded-sm ${i < 20 ? 'bg-sky-500' : 'bg-slate-800'}`} />
              ))}
            </div>
            <span className="text-slate-500">85%</span>
          </div>
          <div className="text-emerald-400">✔ Successfully installed saara-ai</div>
          <div className="mt-2"><span className="text-sky-400">❯</span> <span className="text-slate-200">saara run --input data.pdf</span></div>
          {[
            { color: '#38bdf8', text: '⚗  Parsing Engine    PDF → 847 structural blocks extracted' },
            { color: '#2dd4bf', text: '⚙  Data Processor    2,341 validated pairs generated' },
            { color: '#fbbf24', text: '📦  Quality Loop      Coherence 94.2% · running validation...' },
            { color: '#34d399', text: '🚀  Export Layer      JSON / CSV / HuggingFace Dataset' },
          ].map(({ color, text }) => (
            <div key={text} style={{ color }}>{text}</div>
          ))}
          <div className="text-emerald-400 mt-2">✓ Complete</div>
          <div className="flex items-center gap-1.5">
            <span className="text-sky-400">❯</span>
            <span className="w-2.5 h-4 bg-sky-400/70 animate-pulse rounded-sm inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeIn = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } };
const SECTION_LINKS = [
  { id: 'media', label: 'Media' },
  { id: 'overview', label: 'Overview' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'deep-dive', label: 'Deep Dive' },
  { id: 'stack', label: 'Stack' },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${project.accentDark} 0%, ${project.accent} 55%, #0f172a 100%)` }}
      >
        {/* Animated background blobs */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: project.accent }}
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, -6, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full opacity-15 blur-3xl"
          style={{ background: '#fff' }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute top-6 left-6 z-20"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all hover:-translate-x-0.5 group"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
            All Projects
          </Link>
        </motion.div>

        {/* Hero content */}
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 px-6 pt-32 pb-16 max-w-5xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <project.icon size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs font-semibold tracking-widest uppercase">{project.category}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <Calendar size={12} className="text-white/50" />
                  <span className="text-white/50 text-xs font-medium">{project.date}</span>
                </div>
              </div>
            </div>

            <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-3">
              {project.name}
            </h1>
            <p className="text-xl sm:text-2xl text-white/75 font-medium max-w-2xl mb-8">
              {project.tagline}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl"
                  style={
                    link.primary
                      ? { background: 'white', color: project.accent }
                      : { background: 'rgba(255,255,255,0.12)', color: 'white', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)' }
                  }
                >
                  <link.icon size={15} />
                  {link.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Main content ── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="sticky top-4 z-30"
        >
          <div className="overflow-x-auto rounded-2xl border border-white/90 bg-white/80 px-2 py-2 shadow-[0_10px_24px_rgba(3,105,161,0.08)] backdrop-blur-xl">
            <div className="flex w-max min-w-full items-center gap-1.5">
              {SECTION_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-[#e0f2fe] hover:text-[#0369a1]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* ── Images / Media ── */}
        <motion.section
          id="media"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="scroll-mt-24"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${project.accent}18` }}>
              <Layers size={16} style={{ color: project.accent }} />
            </div>
            <h2 className="display-heading text-2xl font-extrabold text-[#0d1d2c]">
              {project.slug === 'aerial-eye'
                ? 'Object Detection Visualization'
                : project.media === 'images'
                  ? 'App Screenshots'
                  : 'Live Demo'}
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-white">
            {project.slug === 'aerial-eye' ? (
              <AerialEyeVisualization detailed />
            ) : project.media === 'images' && project.images ? (
              <ImageCarousel images={project.images} accent={project.accent} mockup interval={2600} />
            ) : (
              <div className="h-[420px]">
                <TerminalMockup />
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* ── Overview ── */}
        <motion.section
          id="overview"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="scroll-mt-24"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${project.accent}18` }}>
              <ExternalLink size={16} style={{ color: project.accent }} />
            </div>
            <h2 className="display-heading text-2xl font-extrabold text-[#0d1d2c]">Overview</h2>
          </motion.div>
          <motion.div variants={fadeUp} className="grid sm:grid-cols-1 gap-4">
            {project.details.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeIn}
                className="text-slate-600 leading-[1.85] text-base bg-white/70 rounded-2xl p-5 border border-slate-100 shadow-sm"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Highlights ── */}
        <motion.section
          id="highlights"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="scroll-mt-24"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${project.accent}18` }}>
              <Star size={16} style={{ color: project.accent }} />
            </div>
            <h2 className="display-heading text-2xl font-extrabold text-[#0d1d2c]">Key Highlights</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-3">
            {project.highlights.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${project.accent}18` }}
                >
                  <Zap size={13} style={{ color: project.accent }} />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{h}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Architecture ── */}
        <motion.section
          id="architecture"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="scroll-mt-24"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${project.accent}18` }}>
              <Layers size={16} style={{ color: project.accent }} />
            </div>
            <h2 className="display-heading text-2xl font-extrabold text-[#0d1d2c]">System Architecture</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl bg-slate-900 p-6 sm:p-8 overflow-x-auto">
            <div className="flex gap-4 min-w-max">
              {project.architecture.map((layer, li) => (
                <div key={layer.title} className="flex flex-col items-center gap-3 min-w-[140px]">
                  {/* Layer label */}
                  <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">
                    {layer.title}
                  </div>
                  {/* Nodes */}
                  {layer.nodes.map((node, ni) => (
                    <motion.div
                      key={node.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: li * 0.1 + ni * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full rounded-xl p-3 border text-center"
                      style={{
                        background: `${node.color}18`,
                        borderColor: `${node.color}44`,
                      }}
                    >
                      <p className="text-white text-xs font-bold">{node.label}</p>
                      {node.sublabel && (
                        <p className="text-white/50 text-[10px] mt-0.5">{node.sublabel}</p>
                      )}
                    </motion.div>
                  ))}
                  {/* Arrow to next */}
                  {li < project.architecture.length - 1 && (
                    <div className="absolute" />
                  )}
                </div>
              ))}
            </div>

            {/* Flow arrows between columns */}
            <div className="flex justify-center items-center gap-4 mt-4 min-w-max">
              {project.architecture.map((layer, li) => (
                <div key={layer.title} className="flex items-center gap-4 min-w-[140px]">
                  {li < project.architecture.length - 1 && (
                    <div className="flex items-center gap-1 text-slate-600 text-xs font-mono">
                      <div className="h-px w-16 bg-slate-700" />
                      <span>→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Flow arrows visual: horizontal diagram with arrows */}
          <motion.div variants={fadeUp} className="mt-4 rounded-2xl bg-slate-900/5 border border-slate-200 p-5 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max mx-auto w-fit">
              {project.architecture.map((layer, li) => (
                <div key={layer.title} className="flex items-center gap-2">
                  <div
                    className="px-4 py-2 rounded-xl text-sm font-semibold border"
                    style={{
                      background: `${layer.nodes[0].color}12`,
                      borderColor: `${layer.nodes[0].color}30`,
                      color: layer.nodes[0].color,
                    }}
                  >
                    {layer.title}
                  </div>
                  {li < project.architecture.length - 1 && (
                    <div className="flex items-center gap-0.5 text-slate-400">
                      <div className="w-6 h-px bg-slate-300" />
                      <ArrowUpRight size={14} className="-rotate-45" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* ── Tech Details ── */}
        <motion.section
          id="deep-dive"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="scroll-mt-24"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${project.accent}18` }}>
              <Code2 size={16} style={{ color: project.accent }} />
            </div>
            <h2 className="display-heading text-2xl font-extrabold text-[#0d1d2c]">Technology Deep Dive</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-3">
            {project.techDetails.map((tech, i) => (
              <motion.div
                key={tech.name}
                variants={fadeUp}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: `${project.accent}10` }}
                >
                  {tech.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0d1d2c] mb-0.5">{tech.name}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Tech Stack tags ── */}
        <motion.section
          id="stack"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="scroll-mt-24"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${project.accent}18` }}>
              <Tag size={16} style={{ color: project.accent }} />
            </div>
            <h2 className="display-heading text-2xl font-extrabold text-[#0d1d2c]">Full Tech Stack</h2>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-sm font-semibold border transition-all hover:scale-105"
                style={{
                  color: project.accent,
                  borderColor: `${project.accent}44`,
                  background: `${project.accent}10`,
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl p-8 sm:p-12 text-center"
          style={{ background: `linear-gradient(135deg, ${project.accentDark} 0%, ${project.accent} 100%)` }}
        >
          <h2 className="display-heading text-3xl sm:text-4xl font-black text-white mb-3">{project.name}</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">{project.shortDesc}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-xl"
                style={
                  link.primary
                    ? { background: 'white', color: project.accent }
                    : { background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }
                }
              >
                <link.icon size={15} />
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-white/10 text-white border border-white/25 hover:bg-white/20 transition-all"
            >
              <ArrowLeft size={15} />
              Back to Projects
            </Link>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
