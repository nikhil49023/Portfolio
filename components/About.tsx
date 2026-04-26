'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MapPin, GraduationCap, Github, Linkedin, Package, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function Tilt3D({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotX = useSpring(rx, { damping: 30, stiffness: 200 });
  const rotY = useSpring(ry, { damping: 30, stiffness: 200 });
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        rx.set(-((e.clientY - r.top - r.height / 2) / r.height) * 8);
        ry.set(((e.clientX - r.left - r.width / 2) / r.width) * 8);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 800 }}
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
        <motion.div variants={fadeUp} className="mb-12">
          <p className="eyebrow mb-2">About</p>
          <h2 className="display-heading text-3xl sm:text-4xl font-bold text-white">Who I Am</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile card */}
          <motion.div variants={fadeUp}>
            <Tilt3D className="card rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-rose-500/30">
                    <img src="https://raw.githubusercontent.com/nikhil49023/Portfolio/main/public/profile.jpeg" alt="Kilani Sai Nikhil" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Kilani Sai Nikhil</h3>
                  <p className="text-sm text-rose-400 font-medium">Agentic App Builder</p>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                I engineer production-ready agentic applications using Google ADK, AutoGen, and LLM frameworks.
                Specializing in tool-using AI, multi-agent orchestration, and reliable RAG-powered systems.
              </p>
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
                <MapPin size={12} className="text-rose-500" /> Hyderabad, India
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
                  { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:border-rose-500/50 hover:text-rose-400">
                    <Icon size={12} /> {label}
                  </a>
                ))}
              </div>
            </Tilt3D>
          </motion.div>

          <div className="space-y-4">
            {/* Education */}
            <motion.div variants={fadeUp}>
              <Tilt3D className="card rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/20 flex items-center justify-center">
                    <GraduationCap size={16} className="text-rose-400" />
                  </div>
                  <div>
                    <p className="eyebrow mb-0.5">Education</p>
                    <p className="font-medium text-white">Nxt Wave Institute (NIAT)</p>
                    <p className="text-xs text-zinc-500">B.Tech CS · 2025-2029</p>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>

            {/* What I build */}
            <motion.div variants={fadeUp}>
              <Tilt3D className="card rounded-2xl p-5">
                <p className="eyebrow mb-4">What I Build</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Agentic Apps', color: '#e11d48' },
                    { label: 'ADK Systems', color: '#f43f5e' },
                    { label: 'RAG Pipelines', color: '#be123c' },
                    { label: 'CV Pipelines', color: '#9f1239' },
                  ].map(({ label, color }) => (
                    <div key={label} className="rounded-lg px-3 py-2 text-xs font-medium" style={{ background: `${color}15`, color }}>
                      {label}
                    </div>
                  ))}
                </div>
              </Tilt3D>
            </motion.div>

            {/* Award */}
            <motion.div variants={fadeUp}>
              <Tilt3D className="card rounded-2xl p-5 border-rose-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/30 flex items-center justify-center">
                    <Sparkles size={16} className="text-rose-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">National Finalist</p>
                    <p className="text-xs text-zinc-500">OpenAI × NxtWave 2026</p>
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