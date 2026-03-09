'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Rocket, Brain, Zap, Smartphone, Package, Sparkles, ArrowRight, CheckCircle2, Linkedin } from 'lucide-react';

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
    icon: Rocket,
    title: 'MVP Development',
    tagline: 'Ship in weeks, not months',
    description:
      'Full-stack AI-powered products built end-to-end. Flutter mobile frontend + FastAPI backend + integrated LLM brain. From zero to deployed with clean architecture and handoff-ready code.',
    tags: ['Flutter', 'FastAPI', 'LLMs', 'SQLite', 'Deploy'],
    deliverables: ['Working mobile app', 'AI-powered backend API', 'Deployed and live', 'Full source handoff'],
    accent: '#7c3aed',
    featured: true,
  },
  {
    icon: Brain,
    title: 'Agentic AI Systems',
    tagline: 'Autonomous AI that acts',
    description:
      'Multi-agent workflows, RAG pipelines, and LangGraph architectures that reason, plan, and execute complex tasks with minimal human intervention.',
    tags: ['LangGraph', 'RAG', 'GPT-4o', 'Groq', 'Agents'],
    accent: '#0891b2',
    featured: false,
  },
  {
    icon: Zap,
    title: 'LLM Integration',
    tagline: 'Add AI to what you already have',
    description:
      'Integrate GPT-4o, Groq, Sarvam AI, or local Ollama models into your existing product — streaming responses, function calling, structured outputs, and cost optimization.',
    tags: ['OpenAI', 'Groq', 'Sarvam', 'Ollama', 'Streaming'],
    accent: '#a855f7',
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Flutter Mobile Apps',
    tagline: 'Cross-platform and polished',
    description:
      'iOS and Android apps with Flutter — pixel-perfect UI, offline-first SQLite, and seamless integration with any AI or REST backend.',
    tags: ['Flutter', 'Dart', 'iOS', 'Android', 'SQLite'],
    accent: '#059669',
    featured: false,
  },
  {
    icon: Package,
    title: 'Open Source Tooling',
    tagline: 'Production Python packages',
    description:
      'CLI tools and PyPI packages that automate complex workflows — from data labeling and fine-tuning pipelines to HuggingFace Hub deployment scripts.',
    tags: ['Python', 'PyPI', 'CLI', 'HuggingFace', 'QLoRA'],
    accent: '#d97706',
    featured: false,
  },
  {
    icon: Sparkles,
    title: 'AI Consulting',
    tagline: 'Strategy and architecture',
    description:
      'Stack selection, LLMops setup, model evaluation strategy, and fine-tuning roadmaps for teams building AI products and needing expert direction.',
    tags: ['Architecture', 'LLMops', 'Fine-tuning', 'Vision LLMs', 'Strategy'],
    accent: '#ec4899',
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
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#1e1b4b] sm:text-4xl">
            What I can build for you
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#6b6894]">
            End-to-end AI product engineering — from idea to shipped. Every engagement comes with clean code, real deployment, and a focus on what actually moves the needle.
          </p>
        </motion.div>

        {/* Featured MVP card + Agentic AI */}
        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr] mb-5">
          {/* Featured card */}
          <motion.div variants={fadeUp}>
            <Tilt3D
              className="relative h-full overflow-hidden rounded-3xl border p-7"
              style={{
                background: 'linear-gradient(145deg, rgba(124,58,237,0.07), rgba(124,58,237,0.02))',
                borderColor: 'rgba(124,58,237,0.2)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                boxShadow: '0 0 0 1px rgba(124,58,237,0.06), 0 8px 32px rgba(124,58,237,0.1)',
              }}
            >
              <div
                className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-25 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #c4b5fd, transparent)' }}
              />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl"
                    style={{ background: 'rgba(124,58,237,0.1)', color: '#7c3aed' }}
                  >
                    <Rocket size={22} />
                  </div>
                  <span
                    className="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ borderColor: 'rgba(124,58,237,0.25)', color: '#7c3aed', background: 'rgba(124,58,237,0.07)' }}
                  >
                    Most Popular
                  </span>
                </div>

                <h3 className="display-heading mb-1 text-2xl font-extrabold text-[#1e1b4b]">MVP Development</h3>
                <p className="mb-4 text-sm font-semibold text-violet-600">Ship in weeks, not months</p>
                <p className="mb-6 text-sm leading-relaxed text-[#6b6894]">
                  Full-stack AI-powered products built end-to-end. Flutter mobile frontend + FastAPI backend + integrated LLM brain.
                  From zero to deployed with clean architecture and handoff-ready code.
                </p>

                <div className="mb-6 grid grid-cols-2 gap-2">
                  {['Working mobile app', 'AI-powered backend', 'Deployed and live', 'Full source handoff'].map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-[#4b4776]">
                      <CheckCircle2 size={13} className="shrink-0 text-violet-500" />
                      {d}
                    </div>
                  ))}
                </div>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {['Flutter', 'FastAPI', 'LLMs', 'SQLite', 'Deploy'].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                      style={{ color: '#7c3aed', background: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.2)' }}
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
                    background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                    boxShadow: '0 6px 20px rgba(124,58,237,0.3)',
                  }}
                >
                  <Linkedin size={14} />
                  Start a project
                  <ArrowRight size={14} />
                </a>
              </div>
            </Tilt3D>
          </motion.div>

          {/* Agentic AI */}
          <motion.div variants={fadeUp}>
            <Tilt3D
              className="relative h-full overflow-hidden rounded-3xl border p-6"
              style={{
                background: 'linear-gradient(145deg, rgba(8,145,178,0.07), rgba(8,145,178,0.02))',
                borderColor: 'rgba(8,145,178,0.18)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                boxShadow: '0 0 0 1px rgba(8,145,178,0.06), 0 8px 32px rgba(8,145,178,0.08)',
              }}
            >
              <div
                className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #67e8f9, transparent)' }}
              />
              <div className="relative">
                <div
                  className="mb-4 grid h-11 w-11 place-items-center rounded-2xl"
                  style={{ background: 'rgba(8,145,178,0.1)', color: '#0891b2' }}
                >
                  <Brain size={20} />
                </div>
                <h3 className="display-heading mb-1 text-xl font-extrabold text-[#1e1b4b]">Agentic AI Systems</h3>
                <p className="mb-3 text-sm font-semibold text-cyan-600">Autonomous AI that acts</p>
                <p className="mb-5 text-sm leading-relaxed text-[#6b6894]">
                  Multi-agent workflows, RAG pipelines, and LangGraph architectures that reason, plan, and execute complex tasks with minimal human intervention.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['LangGraph', 'RAG', 'GPT-4o', 'Groq', 'Agents'].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                      style={{ color: '#0891b2', background: 'rgba(8,145,178,0.08)', borderColor: 'rgba(8,145,178,0.18)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt3D>
          </motion.div>
        </div>

        {/* Bottom 4 cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(2).map((svc) => (
            <motion.div key={svc.title} variants={fadeUp}>
              <Tilt3D
                className="relative h-full overflow-hidden rounded-3xl border p-5"
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
                <h3 className="display-heading mb-0.5 text-base font-extrabold text-[#1e1b4b]">{svc.title}</h3>
                <p className="mb-3 text-xs font-semibold" style={{ color: svc.accent }}>{svc.tagline}</p>
                <p className="mb-4 text-xs leading-relaxed text-[#6b6894]">{svc.description}</p>
                <div className="flex flex-wrap gap-1">
                  {svc.tags.slice(0, 3).map((t) => (
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
            background: 'rgba(124,58,237,0.03)',
            borderColor: 'rgba(124,58,237,0.12)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <div>
            <p className="text-sm font-bold text-[#1e1b4b]">Have a project in mind?</p>
            <p className="mt-0.5 text-xs text-[#6b6894]">Open to internships, freelance collaborations, and high-impact AI product work.</p>
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
