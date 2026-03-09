'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Rocket, Smartphone, Zap, Layout, ArrowRight, CheckCircle2, Linkedin, Code2 } from 'lucide-react';

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
    title: 'Full-Stack App Development',
    tagline: 'From concept to production',
    description:
      'End-to-end application development. I build high-performance mobile frontends with Flutter and robust backends with FastAPI, ensuring a seamless user experience and scalable architecture.',
    tags: ['Flutter', 'FastAPI', 'Full-Stack', 'PostgreSQL', 'Deployment'],
    deliverables: ['Production-ready mobile app', 'Scalable backend API', 'Cloud deployment', 'Full source handoff'],
    accent: '#0284c7',
    featured: true,
  },
  {
    icon: Smartphone,
    title: 'Flutter Mobile Specialist',
    tagline: 'Cross-platform and pixel-perfect',
    description:
      'High-performance iOS and Android apps using Flutter. I focus on smooth animations, offline-first architecture with SQLite, and clean UI/UX implementation.',
    tags: ['Flutter', 'Dart', 'iOS', 'Android', 'State Mgmt'],
    accent: '#0d9488',
    featured: false,
  },
  {
    icon: Zap,
    title: 'Backend Architecture',
    tagline: 'Fast, reliable, and scalable',
    description:
      'I design and build high-performance APIs using FastAPI and Python. My focus is on asynchronous processing, robust security, and clear documentation.',
    tags: ['FastAPI', 'Python', 'Redis', 'PostgreSQL', 'Docker'],
    accent: '#0284c7',
    featured: false,
  },
  {
    icon: Layout,
    title: 'UI/UX to Code',
    tagline: 'Design-driven engineering',
    description:
      'I bridge the gap between design and development by converting complex UI mockups into high-fidelity, interactive, and responsive applications.',
    tags: ['Figma to Code', 'Animations', 'Interactive UI', 'Responsive'],
    accent: '#f59e0b',
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
            Practical Engineering Solutions
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#64748b]">
            I build high-quality, scalable, and maintainable applications. My focus is on creating functional software that solves real-world business problems.
          </p>
        </motion.div>

        {/* Featured Card + Secondary Card */}
        <div className="grid gap-5 lg:grid-cols-[1.55fr_1fr] mb-5">
          {/* Featured card */}
          <motion.div variants={fadeUp}>
            <Tilt3D
              className="relative h-full overflow-hidden rounded-3xl border p-7"
              style={{
                background: 'linear-gradient(145deg, rgba(2, 132, 199, 0.07), rgba(2, 132, 199, 0.02))',
                borderColor: 'rgba(2, 132, 199, 0.2)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                boxShadow: '0 0 0 1px rgba(2, 132, 199, 0.06), 0 8px 32px rgba(2, 132, 199, 0.1)',
              }}
            >
              <div
                className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-25 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #7dd3fc, transparent)' }}
              />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl"
                    style={{ background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7' }}
                  >
                    <Rocket size={22} />
                  </div>
                  <span
                    className="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ borderColor: 'rgba(2, 132, 199, 0.25)', color: '#0284c7', background: 'rgba(2, 132, 199, 0.07)' }}
                  >
                    Top Tier Service
                  </span>
                </div>

                <h3 className="display-heading mb-1 text-2xl font-extrabold text-[#0f172a]">Full-Stack App Development</h3>
                <p className="mb-4 text-sm font-semibold text-sky-600">From concept to production</p>
                <p className="mb-6 text-sm leading-relaxed text-[#64748b]">
                  Complete development lifecycle for modern products. I engineer polished mobile frontends with Flutter and high-performance, asynchronous backends with FastAPI.
                </p>

                <div className="mb-6 grid grid-cols-2 gap-2">
                  {['Production-ready mobile app', 'Scalable backend API', 'Cloud deployment', 'Full source handoff'].map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-[#0f172a]">
                      <CheckCircle2 size={13} className="shrink-0 text-sky-500" />
                      {d}
                    </div>
                  ))}
                </div>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {['Flutter', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                      style={{ color: '#0284c7', background: 'rgba(2, 132, 199, 0.08)', borderColor: 'rgba(2, 132, 199, 0.2)' }}
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
                    background: 'linear-gradient(135deg, #0284c7, #075985)',
                    boxShadow: '0 6px 20px rgba(2, 132, 199, 0.3)',
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
              className="relative h-full overflow-hidden rounded-3xl border p-6"
              style={{
                background: 'linear-gradient(145deg, rgba(13, 148, 136, 0.07), rgba(13, 148, 136, 0.02))',
                borderColor: 'rgba(13, 148, 136, 0.18)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                boxShadow: '0 0 0 1px rgba(13, 148, 136, 0.06), 0 8px 32px rgba(13, 148, 136, 0.08)',
              }}
            >
              <div
                className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #5eead4, transparent)' }}
              />
              <div className="relative">
                <div
                  className="mb-4 grid h-11 w-11 place-items-center rounded-2xl"
                  style={{ background: 'rgba(13, 148, 136, 0.1)', color: '#0d9488' }}
                >
                  <Smartphone size={20} />
                </div>
                <h3 className="display-heading mb-1 text-xl font-extrabold text-[#134e4a]">Flutter Specialist</h3>
                <p className="mb-3 text-sm font-semibold text-teal-600">Cross-platform and pixel-perfect</p>
                <p className="mb-5 text-sm leading-relaxed text-[#115e59]">
                  High-performance iOS and Android apps using Flutter. I focus on smooth animations, offline-first architecture, and clean UI/UX implementation.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Flutter', 'Dart', 'iOS', 'Android', 'SQLite'].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border px-2.5 py-1 text-[11px] font-semibold"
                      style={{ color: '#0d9488', background: 'rgba(13, 148, 136, 0.08)', borderColor: 'rgba(13, 148, 136, 0.18)' }}
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
                className="relative h-full overflow-hidden rounded-3xl border p-6"
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
                <p className="mb-4 text-xs leading-relaxed text-[#64748b]">{svc.description}</p>
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
            background: 'rgba(2, 132, 199, 0.03)',
            borderColor: 'rgba(2, 132, 199, 0.12)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          <div>
            <p className="text-sm font-bold text-[#0f172a]">Have a project in mind?</p>
            <p className="mt-0.5 text-xs text-[#64748b]">Open to internships, freelance collaborations, and high-impact product work.</p>
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
