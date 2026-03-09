'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Package, Cpu, ArrowRight, MapPin, Download } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, rotateX: 8 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

const SOCIALS = [
  { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
  { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
];

const STATS = [
  { value: 'Top 90', sub: 'of 70,000+ applicants', icon: 'Trophy', accent: '#0284c7' },
  { value: 'Flutter', sub: 'Cross-platform apps', icon: 'Mobile', accent: '#0d9488' },
  { value: 'FastAPI', sub: 'Scalable backends', icon: 'Server', accent: '#f59e0b' },
  { value: 'B.Tech', sub: 'NIAT 2025-2029', icon: 'Degree', accent: '#075985' },
];

/* ── Floating tech badge ── */
function FloatingBadge({
  label, x, y, delay, color,
}: { label: string; x: string; y: string; delay: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="absolute hidden xl:block pointer-events-none select-none"
      style={{ left: x, top: y }}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
        className="px-3 py-1.5 rounded-xl text-xs font-bold border shadow-lg backdrop-blur-sm"
        style={{
          background: `${color}14`,
          borderColor: `${color}35`,
          color,
          boxShadow: `0 4px 20px ${color}20`,
          transformStyle: 'preserve-3d',
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

/* ── Stats card with 3D tilt ── */
function TiltStatsCard() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotX = useSpring(rx, { damping: 30, stiffness: 200 });
  const rotY = useSpring(ry, { damping: 30, stiffness: 200 });
  const glareX = useTransform(ry, [-12, 12], ['0%', '100%']);
  const glareY = useTransform(rotX, [-12, 12], ['0%', '100%']);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        rx.set(-((e.clientY - r.top - r.height / 2) / r.height) * 14);
        ry.set(((e.clientX - r.left - r.width / 2) / r.width) * 14);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
      className="card rounded-3xl p-6 relative overflow-hidden"
    >
      {/* Glare overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18) 0%, transparent 60%)`,
        }}
      />

      {/* Profile picture */}
      <div className="mb-5 flex flex-col items-center" style={{ transform: 'translateZ(20px)' }}>
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-1 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #0284c7, #0d9488, #f59e0b, #0284c7)',
              padding: '2px',
              zIndex: 0,
            }}
          />
          <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://raw.githubusercontent.com/nikhil49023/Portfolio/main/public/profile.jpeg"
              alt="Kilani Sai Nikhil"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <p className="mt-2.5 text-sm font-extrabold text-[#0f172a]">Kilani Sai Nikhil</p>
        <p className="text-[11px] text-[#64748b]">Full-Stack Developer · Hyderabad</p>
      </div>

      <div className="mb-4 flex items-center justify-between border-b border-sky-50 pb-3" style={{ transform: 'translateZ(12px)' }}>
        <p className="text-xs font-bold tracking-[0.14em] text-[#64748b]">AT A GLANCE</p>
        <span className="h-2 w-2 rounded-full bg-sky-500" />
      </div>

      <div className="space-y-2.5" style={{ transform: 'translateZ(8px)' }}>
        {STATS.map((item) => (
          <div
            key={item.value}
            className="rounded-2xl border px-4 py-3 transition-all hover:scale-[1.02]"
            style={{ background: 'rgba(2, 132, 199, 0.03)', borderColor: 'rgba(2, 132, 199, 0.08)' }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: item.accent }}>{item.icon}</p>
            <p className="mt-1 text-base font-extrabold text-[#0f172a]">{item.value}</p>
            <p className="text-xs text-[#64748b]">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-sky-50 pt-4" style={{ transform: 'translateZ(8px)' }}>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#64748b]">Core Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {['Flutter', 'FastAPI', 'Python', 'PostgreSQL', 'SQLite'].map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="section pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36 lg:pb-24 relative overflow-hidden">

      {/* ── 3D floating tech badges ── */}
      <FloatingBadge label="Full-Stack" x="-2%" y="18%" delay={0.6} color="#0284c7" />
      <FloatingBadge label="Scalable Systems" x="-3%" y="55%" delay={0.9} color="#0d9488" />
      <FloatingBadge label="Flutter" x="calc(100% - 110px)" y="22%" delay={0.75} color="#0284c7" />
      <FloatingBadge label="FastAPI" x="calc(100% - 100px)" y="58%" delay={1.0} color="#0d9488" />
      <FloatingBadge label="PostgreSQL" x="calc(100% - 80px)" y="78%" delay={1.15} color="#f59e0b" />

      {/* ── Ambient 3D orbs ── */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(2, 132, 199, 0.25), transparent)' }}
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute top-1/2 -right-10 w-56 h-56 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(13, 148, 136, 0.2), transparent)' }}
      />

      <div className="grid items-start gap-8 lg:gap-12 lg:grid-cols-[1fr_360px]">
        <div style={{ perspective: '1200px' }}>

          {/* Profile avatar (mobile only) */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-5 lg:hidden">
            <div className="relative w-16 h-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-0.5 rounded-full"
                style={{ background: 'conic-gradient(from 0deg, #0284c7, #0d9488, #f59e0b, #0284c7)' }}
              />
              <div className="relative z-10 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://raw.githubusercontent.com/nikhil49023/Portfolio/main/public/profile.jpeg"
                  alt="Kilani Sai Nikhil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-8 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold"
              style={{ borderColor: 'rgba(2, 132, 199, 0.3)', background: 'rgba(2, 132, 199, 0.07)', color: '#0284c7' }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-500" />
              Available for opportunities
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#64748b]">
              <MapPin size={12} /> Hyderabad
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
            <h1 className="display-heading mb-5 leading-[0.95] text-[2.1rem] font-black tracking-tight text-[#0f172a] sm:text-[3.2rem] lg:text-[4.8rem]">
              <span className="block">Designing and Shipping</span>
              <span className="block gradient-text">Production Apps End-to-End</span>
            </h1>
          </motion.div>

          {/* Role pills */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mb-5 flex flex-wrap items-center gap-2">
            {[
              { label: 'Full-Stack Developer', bg: 'rgba(2, 132, 199, 0.08)', color: '#0284c7', border: 'rgba(2, 132, 199, 0.2)' },
              { label: 'Flutter Specialist', bg: 'rgba(13, 148, 136, 0.08)', color: '#0d9488', border: 'rgba(13, 148, 136, 0.2)' },
              { label: 'Backend Architect', bg: 'rgba(245, 158, 11, 0.08)', color: '#d97706', border: 'rgba(245, 158, 11, 0.2)' },
              { label: 'Open Source', bg: 'rgba(15, 23, 42, 0.05)', color: '#64748b', border: 'rgba(15, 23, 42, 0.1)' },
            ].map(({ label, bg, color, border }) => (
              <motion.span
                key={label}
                whileHover={{ scale: 1.05, y: -1 }}
                className="rounded-full border px-3 py-1 text-xs font-semibold cursor-default"
                style={{ background: bg, color, borderColor: border }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp(0.14)}
            initial="hidden"
            animate="show"
            className="mb-9 max-w-xl text-sm sm:text-base leading-relaxed text-[#64748b]"
          >
            I build high-performance applications across mobile and backend stacks — from polished Flutter interfaces to scalable 
            Python systems. National finalist at the OpenAI x NxtWave Buildathon 2026.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp(0.18)} initial="hidden" animate="show" className="mb-8 flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              View Projects
              <ArrowRight size={15} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href="https://linkedin.com/in/kilanisainikhil"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              <Linkedin size={14} /> Connect
            </motion.a>
            <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-xl border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-sky-600 shadow-sm hover:bg-sky-50 hover:border-sky-300 transition-all"
              >
                <Download size={14} />
                Download Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeUp(0.22)} initial="hidden" animate="show" className="flex flex-wrap items-center gap-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                whileHover={{ scale: 1.12, y: -2, rotateZ: -4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-100 bg-white text-[#64748b] transition-colors duration-200 hover:border-sky-300 hover:text-sky-600 hover:shadow-sm hover:shadow-sky-100"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden"
        >
          <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {STATS.map((item) => (
              <div key={item.value} className="card shrink-0 rounded-2xl px-4 py-3 min-w-[130px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#64748b]">{item.icon}</p>
                <p className="mt-1 text-sm font-extrabold text-[#0f172a]">{item.value}</p>
                <p className="text-[11px] text-[#64748b] leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Desktop stats card — 3D tilt */}
        <motion.div
          initial={{ opacity: 0, x: 24, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
          style={{ perspective: '1200px' }}
        >
          <TiltStatsCard />
        </motion.div>
      </div>
    </section>
  );
}
