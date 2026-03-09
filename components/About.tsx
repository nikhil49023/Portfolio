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
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">Who I am</h2>
        </motion.div>

        <div className="grid items-start gap-6 md:grid-cols-[1fr_1fr]">
          {/* Profile card */}
          <motion.div variants={fadeUp}>
          <Tilt3D className="card rounded-3xl p-7">
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
                <h3 className="display-heading text-xl font-extrabold text-[#0f172a]">Kilani Sai Nikhil</h3>
                <p className="mt-0.5 text-sm font-semibold text-sky-600">Full-Stack Developer and Open-Source Builder</p>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-[#64748b]">
              I am a B.Tech student focused on building robust and scalable software systems. I care about
              shipping useful products — from asynchronous backend orchestration to polished mobile experiences.
            </p>

            <div className="space-y-2.5 text-sm">
              <p className="flex items-center gap-2.5 text-[#64748b]">
                <MapPin size={14} className="text-sky-500" /> Hyderabad, India
              </p>
              <p className="flex items-center gap-2.5 text-[#64748b]">
                <Linkedin size={14} className="text-sky-500" />
                <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-600 hover:underline">
                  linkedin.com/in/kilanisainikhil
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-sky-50 pt-5">
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
                  className="inline-flex items-center gap-1.5 rounded-lg border border-sky-100 bg-sky-50/60 px-3 py-1.5 text-xs font-semibold text-[#64748b] transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
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
              <Tilt3D className="card rounded-3xl p-6">
                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-600">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Education</p>
                    <p className="text-sm font-bold text-[#0f172a]">Nxt Wave Institute of Advanced Technologies</p>
                    <p className="mt-0.5 text-xs text-[#64748b]">B.Tech, 2025-2029, Hyderabad</p>
                  </div>
                </div>
              </Tilt3D>
            </motion.div>

            {/* What I build */}
            <motion.div variants={fadeUp}>
            <Tilt3D className="card rounded-3xl p-6">
              <p className="eyebrow mb-3.5">What I build</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: 'APP', text: 'Flutter mobile apps', color: '#0284c7' },
                  { icon: 'API', text: 'FastAPI services', color: '#0d9488' },
                  { icon: 'OSS', text: 'Open source tools', color: '#f59e0b' },
                  { icon: 'SYS', text: 'Scalable Systems', color: '#075985' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="rounded-xl border px-3 py-2 text-xs font-semibold text-[#64748b] transition-all hover:border-sky-200"
                    style={{ background: 'rgba(2, 132, 199, 0.03)', borderColor: 'rgba(2, 132, 199, 0.08)' }}
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
                  background: 'linear-gradient(145deg, rgba(2, 132, 199, 0.07), rgba(13, 148, 136, 0.06))',
                  backdropFilter: 'blur(16px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                  borderColor: 'rgba(2, 132, 199, 0.18)',
                  boxShadow: '0 2px 12px rgba(2, 132, 199, 0.08)',
                } as React.CSSProperties}
              >
                <div className="flex items-center gap-3.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-100 text-sky-600">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0f172a]">National Finalist</p>
                    <p className="text-xs text-[#64748b]">Top 90 of 70,000+ at OpenAI x NxtWave Buildathon 2026</p>
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
