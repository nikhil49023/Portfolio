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
      'Design and build production-ready LLM applications with reliable retrieval, evaluation, and system design. Focused on RAG pipelines, model routing, and measurable quality.',
    tags: ['LLMs', 'RAG', 'System Architecture', 'Hugging Face', 'Docker'],
    deliverables: ['RAG pipeline', 'Inference API', 'Evaluation harness', 'Deployable artifacts'],
    accent: '#2f9e93',
    featured: true,
  },
  {
    icon: Eye,
    title: 'Computer Vision Pipelines',
    tagline: 'From data to deployment',
    description:
      'Vision systems built with PyTorch and OpenCV, including data pipelines, model training, and inference services designed for reliability.',
    tags: ['PyTorch', 'OpenCV', 'Computer Vision', 'Data Pipelines'],
    accent: '#3a86ff',
    featured: false,
  },
  {
    icon: Bot,
    title: 'Agentic Workflows',
    tagline: 'Tool-using LLM automation',
    description:
      'Structured agent workflows that chain tools, memory, and policies to automate complex tasks while keeping guardrails in place.',
    tags: ['Agentic Workflows', 'LLMs', 'RAG', 'System Design'],
    accent: '#f07f5a',
    featured: false,
  },
  {
    icon: Network,
    title: 'AI System Architecture',
    tagline: 'Scalable and production-ready',
    description:
      'System architecture design for AI products, with emphasis on observability, iteration speed, and reproducible environments.',
    tags: ['System Architecture Design', 'Docker', 'Git & GitHub', 'Open Env'],
    accent: '#f2b84b',
    featured: false,
  },
] as const;

export function Services() {
  return (
    <section id="services" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        {/* Header */}
        <motion.div variants={fadeUp} className="mb-10">
          <p className="eyebrow mb-2">Services</p>
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
            AI Engineering Services
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5b6673]">
            I build production ML systems with reliable data pipelines, evaluation-first development, and scalable architecture.
          </p>
        </motion.div>

        {/* Featured Card + Secondary Card */}
        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr] mb-5">
          {/* Featured card */}
          <motion.div variants={fadeUp}>
            <Tilt3D
              className="relative h-full overflow-hidden rounded-3xl border p-7 liquid-glass"
              style={{
                background: 'linear-gradient(145deg, rgba(47, 158, 147, 0.12), rgba(47, 158, 147, 0.04))',
                borderColor: 'rgba(47, 158, 147, 0.22)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                boxShadow: '0 0 0 1px rgba(47, 158, 147, 0.08), 0 10px 34px rgba(20, 20, 31, 0.12)',
              }}
            >
              <div
                className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-25 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(47, 158, 147, 0.6), transparent)' }}
              />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl"
                    style={{ background: 'rgba(47, 158, 147, 0.16)', color: '#1f6f69' }}
                  >
                    <Brain size={22} />
                  </div>
                  <span
                    className="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ borderColor: 'rgba(47, 158, 147, 0.3)', color: '#1f6f69', background: 'rgba(47, 158, 147, 0.1)' }}
                  >
                    Top Tier Service
                  </span>
                </div>

                <h3 className="display-heading mb-1 text-2xl font-extrabold text-[#0f172a]">LLM &amp; RAG Systems</h3>
                <p className="mb-4 text-sm font-semibold text-emerald-700">Retrieval, reasoning, and generation</p>
                <p className="mb-6 text-sm leading-relaxed text-[#5b6673]">
                  Build trustworthy AI systems with evaluation-first development, robust retrieval, and production-grade architecture.
                </p>

                <div className="mb-6 grid grid-cols-2 gap-2">
                  {['RAG pipeline', 'Inference API', 'Evaluation harness', 'Deployable artifacts'].map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-[#0f172a]">
                      <CheckCircle2 size={13} className="shrink-0 text-emerald-500" />
                      {d}
                    </div>
                  ))}
                </div>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {['LLMs', 'RAG', 'Hugging Face', 'PyTorch', 'Docker'].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                      style={{ color: '#1f6f69', background: 'rgba(47, 158, 147, 0.12)', borderColor: 'rgba(47, 158, 147, 0.24)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="https://linkedin.com/in/kilanisainikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #2f9e93, #3a86ff)',
                    boxShadow: '0 6px 20px rgba(58, 134, 255, 0.3)',
                  }}
                >
                  <Linkedin size={14} />
                  Start a project
                  <ArrowRight size={14} />
                </a>
              </div>
            </Tilt3D>
          </motion.div>

          {/* Secondary card */}
          <motion.div variants={fadeUp}>
            <Tilt3D
              className="relative h-full overflow-hidden rounded-3xl border p-6 liquid-glass"
              style={{
                background: 'linear-gradient(145deg, rgba(58, 134, 255, 0.12), rgba(58, 134, 255, 0.03))',
                borderColor: 'rgba(58, 134, 255, 0.2)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                boxShadow: '0 0 0 1px rgba(58, 134, 255, 0.08), 0 8px 32px rgba(20, 20, 31, 0.1)',
              }}
            >
              <div
                className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(58, 134, 255, 0.6), transparent)' }}
              />
              <div className="relative">
                <div
                  className="mb-4 grid h-11 w-11 place-items-center rounded-2xl"
                  style={{ background: 'rgba(58, 134, 255, 0.16)', color: '#2d63c8' }}
                >
                  <Eye size={20} />
                </div>
                <h3 className="display-heading mb-1 text-xl font-extrabold text-[#1f2a44]">Computer Vision Pipelines</h3>
                <p className="mb-3 text-sm font-semibold text-blue-600">From data to deployment</p>
                <p className="mb-5 text-sm leading-relaxed text-[#415a77]">
                  Vision systems built with PyTorch and OpenCV, including data pipelines, model training, and inference services.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['PyTorch', 'OpenCV', 'Computer Vision', 'Data Pipelines'].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                      style={{ color: '#2d63c8', background: 'rgba(58, 134, 255, 0.12)', borderColor: 'rgba(58, 134, 255, 0.2)' }}
                    >
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
              <Tilt3D
                className="relative h-full overflow-hidden rounded-3xl border p-6 liquid-glass"
                style={{
                  background: `linear-gradient(145deg, ${svc.accent}08, ${svc.accent}02)`,
                  borderColor: `${svc.accent}20`,
                  backdropFilter: 'blur(20px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                  boxShadow: `0 0 0 1px ${svc.accent}06, 0 6px 24px rgba(0,0,0,0.05)`,
                }}
              >
                <div
                  className="mb-4 grid h-10 w-10 place-items-center rounded-xl"
                  style={{ background: `${svc.accent}12`, color: svc.accent }}
                >
                  <svc.icon size={18} />
                </div>
                <h3 className="display-heading mb-0.5 text-base font-extrabold text-[#0f172a]">{svc.title}</h3>
                <p className="mb-3 text-xs font-semibold" style={{ color: svc.accent }}>{svc.tagline}</p>
                <p className="mb-4 text-xs leading-relaxed text-[#5b6673]">{svc.description}</p>
                <div className="flex flex-wrap gap-1">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2 py-0.5 text-[10px] font-semibold"
                      style={{ color: svc.accent, background: `${svc.accent}08`, borderColor: `${svc.accent}18` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
            </Tilt3D>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border px-6 py-5 sm:flex-row"
          style={{
            background: 'rgba(47, 158, 147, 0.08)',
            borderColor: 'rgba(47, 158, 147, 0.2)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <div>
            <p className="text-sm font-bold text-[#0f172a]">Have a project in mind?</p>
            <p className="mt-0.5 text-xs text-[#5b6673]">Open to internships, research collaborations, and high-impact ML product work.</p>
          </div>
          <a
            href="https://linkedin.com/in/kilanisainikhil"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex shrink-0 items-center gap-2 px-5 py-2.5 text-sm"
          >
            <Linkedin size={14} />
            Let&apos;s talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
