'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Brain, Bot, Eye, Network, ArrowRight, CheckCircle2, Linkedin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28, rotateX: 6 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

function Tilt3D({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotX = useSpring(rx, { damping: 35, stiffness: 220 });
  const rotY = useSpring(ry, { damping: 35, stiffness: 220 });
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        rx.set(-((e.clientY - r.top - r.height / 2) / r.height) * 10);
        ry.set(((e.clientX - r.left - r.width / 2) / r.width) * 10);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900, transformStyle: 'preserve-3d', ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SERVICES = [
  {
    icon: Brain,
    title: 'LLM & RAG Systems',
    tagline: 'Retrieval, reasoning, and generation',
    description:
      'Design and build production-ready LLM applications with reliable retrieval, evaluation, and system design.',
    tags: ['LLMs', 'RAG', 'System Architecture', 'Hugging Face', 'Docker'],
    accent: '#7c3aed',
  },
  {
    icon: Bot,
    title: 'Agentic Workflows',
    tagline: 'Tool-using AI automation',
    description:
      'Structured agent workflows that chain tools, memory, and policies to automate complex tasks.',
    tags: ['Agentic Workflows', 'Google ADK', 'AutoGen', 'Multi-Agent'],
    accent: '#0891b2',
  },
  {
    icon: Eye,
    title: 'Computer Vision Pipelines',
    tagline: 'From data to deployment',
    description:
      'Vision systems built with PyTorch and OpenCV, including data pipelines and inference services.',
    tags: ['PyTorch', 'OpenCV', 'Computer Vision', 'Data Pipelines'],
    accent: '#06b6d4',
  },
  {
    icon: Network,
    title: 'AI System Architecture',
    tagline: 'Scalable and production-ready',
    description:
      'System architecture design for AI products with emphasis on observability and iteration speed.',
    tags: ['System Architecture', 'Docker', 'Git', 'Open Env'],
    accent: '#ec4899',
  },
] as const;

export function Services() {
  return (
    <section id="services" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-10">
          <p className="eyebrow mb-2">Services</p>
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            AI Engineering Services
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600">
            I build production-ready agentic applications with Google ADK, AutoGen, and LLM frameworks.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr] mb-5">
          {/* Featured card */}
          <motion.div variants={fadeUp}>
            <Tilt3D
              className="relative h-full overflow-hidden rounded-3xl border p-7 liquid-glass"
              style={{
                background: 'linear-gradient(145deg, rgba(124, 58, 237, 0.1), rgba(124, 58, 237, 0.03))',
                borderColor: 'rgba(124, 58, 237, 0.15)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                boxShadow: '0 0 0 1px rgba(124, 58, 237, 0.06), 0 10px 34px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.5), transparent)' }} />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: 'rgba(124, 58, 237, 0.12)', color: '#7c3aed' }}>
                    <Brain size={22} />
                  </div>
                  <span className="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider" style={{ borderColor: 'rgba(124, 58, 237, 0.25)', color: '#7c3aed', background: 'rgba(124, 58, 237, 0.08)' }}>
                    Top Tier Service
                  </span>
                </div>
                <h3 className="display-heading mb-1 text-2xl font-extrabold text-gray-900">Agentic App Development</h3>
                <p className="mb-4 text-sm font-semibold text-violet-600">Building AI that thinks, acts & delivers</p>
                <p className="mb-6 text-sm leading-relaxed text-gray-600">
                  Build production-ready agentic applications with Google ADK, AutoGen, and multi-agent orchestration.
                </p>
                <div className="mb-6 grid grid-cols-2 gap-2">
                  {['ADK agents', 'Multi-agent systems', 'Tool integration', 'RAG pipeline'].map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-gray-800">
                      <CheckCircle2 size={13} className="shrink-0 text-violet-600" /> {d}
                    </div>
                  ))}
                </div>
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {['Google ADK', 'AutoGen', 'LangChain', 'RAG', 'Docker'].map((t) => (
                    <span key={t} className="rounded-md border px-2.5 py-1 text-[11px] font-semibold" style={{ color: '#7c3aed', background: 'rgba(124, 58, 237, 0.1)', borderColor: 'rgba(124, 58, 237, 0.2)' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #7c3aed, #0891b2)', boxShadow: '0 6px 20px rgba(124, 58, 237, 0.3)' }}>
                  <Linkedin size={14} /> Start a project <ArrowRight size={14} />
                </a>
              </div>
            </Tilt3D>
          </motion.div>

          {/* Secondary card */}
          <motion.div variants={fadeUp}>
            <Tilt3D
              className="relative h-full overflow-hidden rounded-3xl border p-6 liquid-glass"
              style={{
                background: 'linear-gradient(145deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.025))',
                borderColor: 'rgba(6, 182, 212, 0.15)',
                backdropFilter: 'blur(20px) saturate(160%)',
                boxShadow: '0 0 0 1px rgba(6, 182, 212, 0.06), 0 8px 32px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5), transparent)' }} />
              <div className="relative">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl" style={{ background: 'rgba(6, 182, 212, 0.12)', color: '#0891b2' }}>
                  <Eye size={20} />
                </div>
                <h3 className="display-heading mb-1 text-xl font-extrabold text-gray-900">Computer Vision Pipelines</h3>
                <p className="mb-3 text-sm font-semibold text-cyan-600">From data to deployment</p>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  Vision systems built with PyTorch and OpenCV, including data pipelines and inference services.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['PyTorch', 'OpenCV', 'Computer Vision', 'Data Pipelines'].map((t) => (
                    <span key={t} className="rounded-md border px-2.5 py-1 text-[11px] font-semibold" style={{ color: '#0891b2', background: 'rgba(6, 182, 212, 0.1)', borderColor: 'rgba(6, 182, 212, 0.15)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt3D>
          </motion.div>
        </div>

        {/* Bottom cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICES.slice(2).map((svc) => (
            <motion.div key={svc.title} variants={fadeUp}>
              <Tilt3D className="relative h-full overflow-hidden rounded-3xl border p-6 liquid-glass" style={{ background: `linear-gradient(145deg, ${svc.accent}08, ${svc.accent}02)`, borderColor: `${svc.accent}20`, boxShadow: `0 0 0 1px ${svc.accent}06, 0 6px 24px rgba(0,0,0,0.05)` }}>
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl" style={{ background: `${svc.accent}12`, color: svc.accent }}>
                  <svc.icon size={18} />
                </div>
                <h3 className="display-heading mb-0.5 text-base font-extrabold text-gray-900">{svc.title}</h3>
                <p className="mb-3 text-xs font-semibold" style={{ color: svc.accent }}>{svc.tagline}</p>
                <p className="mb-4 text-xs leading-relaxed text-gray-600">{svc.description}</p>
                <div className="flex flex-wrap gap-1">
                  {svc.tags.map((t) => (
                    <span key={t} className="rounded-md border px-2 py-0.5 text-[10px] font-semibold" style={{ color: svc.accent, background: `${svc.accent}08`, borderColor: `${svc.accent}18` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border px-6 py-5 sm:flex-row" style={{ background: 'rgba(124, 58, 237, 0.06)', borderColor: 'rgba(124, 58, 237, 0.15)' }}>
          <div>
            <p className="text-sm font-bold text-gray-900">Have a project in mind?</p>
            <p className="mt-0.5 text-xs text-gray-600">Open to internships, research collaborations, and AI product work.</p>
          </div>
          <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex shrink-0 items-center gap-2 px-5 py-2.5 text-sm">
            <Linkedin size={14} /> Let&apos;s talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}