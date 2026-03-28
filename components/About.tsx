'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MapPin, GraduationCap, Github, Linkedin, Package, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24, rotateX: 6 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

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

export function About() {
  return (
    <section id="about" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-10">
          <p className="eyebrow mb-2">About</p>
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">Who I am</h2>
        </motion.div>

        <div className="grid items-start gap-6 md:grid-cols-[1fr_1fr]">
          {/* Profile card */}
          <motion.div variants={fadeUp}>
          <Tilt3D className="card rounded-3xl p-7 liquid-glass">
            <div className="mb-5 flex items-start gap-4">
              <div className="relative shrink-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-0.5 rounded-full"
                  style={{ background: 'conic-gradient(from 0deg, #0284c7, #0d9488, #f59e0b, #0284c7)' }}
                />
                <div className="relative z-10 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://raw.githubusercontent.com/nikhil49023/Portfolio/main/public/profile.jpeg"
                    alt="Kilani Sai Nikhil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="display-heading text-xl font-extrabold text-[#111827]">Kilani Sai Nikhil</h3>
                <p className="mt-0.5 text-sm font-semibold text-emerald-700">Machine Learning Engineer · LLM &amp; CV Systems</p>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-[#5b6673]">
              I am a B.Tech student focused on building reliable ML systems. I care about data quality,
              model evaluation, and the architecture that powers LLM apps, RAG pipelines, and vision workflows.
            </p>

            <div className="space-y-2.5 text-sm">
              <p className="flex items-center gap-2.5 text-[#5b6673]">
                <MapPin size={14} className="text-emerald-500" /> Hyderabad, India
              </p>
              <p className="flex items-center gap-2.5 text-[#5b6673]">
                <Linkedin size={14} className="text-emerald-500" />
                <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:underline">
                  linkedin.com/in/kilanisainikhil
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-emerald-50 pt-5">
              {[
                { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
                { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-100 bg-emerald-50/60 px-3 py-1.5 text-xs font-semibold text-[#5b6673] transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <Icon size={12} />
                  {label}
                </a>
              ))}
            </div>
          </Tilt3D>
          </motion.div>

          <div className="space-y-4">
            {/* Education */}
            <motion.div variants={fadeUp}>
              <Tilt3D className="card rounded-3xl p-6 liquid-glass">
                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Education</p>
                    <p className="text-sm font-bold text-[#111827]">Nxt Wave Institute of Advanced Technologies</p>
                    <p className="mt-0.5 text-xs text-[#5b6673]">B.Tech, 2025-2029, Hyderabad</p>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>

            {/* What I build */}
            <motion.div variants={fadeUp}>
            <Tilt3D className="card rounded-3xl p-6 liquid-glass">
              <p className="eyebrow mb-3.5">What I build</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: 'RAG', text: 'RAG + LLM apps', color: '#2f9e93' },
                  { icon: 'AGT', text: 'Agentic workflows', color: '#3a86ff' },
                  { icon: 'CV', text: 'Computer vision pipelines', color: '#f07f5a' },
                  { icon: 'SYS', text: 'AI system architecture', color: '#f2b84b' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="rounded-xl border px-3 py-2 text-xs font-semibold text-[#5b6673] transition-all hover:border-emerald-200"
                    style={{ background: 'rgba(47, 158, 147, 0.08)', borderColor: 'rgba(47, 158, 147, 0.18)' }}
                  >
                    <p className="text-[10px] font-extrabold tracking-wide" style={{ color: item.color }}>{item.icon}</p>
                    <p className="mt-0.5 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </Tilt3D>
            </motion.div>

            {/* National Finalist */}
            <motion.div variants={fadeUp}>
              <Tilt3D
                className="rounded-3xl border p-5"
                style={{
                  background: 'linear-gradient(145deg, rgba(47, 158, 147, 0.12), rgba(58, 134, 255, 0.1))',
                  backdropFilter: 'blur(16px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                  borderColor: 'rgba(47, 158, 147, 0.22)',
                  boxShadow: '0 2px 12px rgba(20, 20, 31, 0.08)',
                } as React.CSSProperties}
              >
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111827]">National Finalist</p>
                    <p className="text-xs text-[#5b6673]">Top 90 of 70,000+ at OpenAI x NxtWave Buildathon 2026</p>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
