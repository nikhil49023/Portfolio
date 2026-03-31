'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Package, ArrowRight, MapPin, Download } from 'lucide-react';

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
  { value: 'RAG', sub: 'Retrieval pipelines', icon: 'RAG', accent: '#0f766e' },
  { value: 'LLMs', sub: 'Reasoning & evals', icon: 'LLM', accent: '#2f2a72' },
  { value: 'CV', sub: 'Vision systems', icon: 'CV', accent: '#df6c2b' },
  { value: 'Systems', sub: 'Architecture design', icon: 'SYS', accent: '#c2871f' },
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
      className="card rounded-3xl p-6 relative overflow-hidden liquid-glass"
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
              background: 'conic-gradient(from 0deg, #df6c2b, #2f2a72, #0f766e, #df6c2b)',
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
        <p className="mt-2.5 text-sm font-extrabold text-[#111827]">Kilani Sai Nikhil</p>
        <p className="text-[11px] text-[#5b6673]">Machine Learning Engineer · Hyderabad</p>
      </div>

      <div className="mb-4 flex items-center justify-between border-b border-orange-50 pb-3" style={{ transform: 'translateZ(12px)' }}>
        <p className="text-xs font-bold tracking-[0.14em] text-[#5b6673]">AT A GLANCE</p>
        <span className="h-2 w-2 rounded-full bg-orange-500" />
      </div>

      <div className="space-y-2.5" style={{ transform: 'translateZ(8px)' }}>
        {STATS.map((item) => (
          <div
            key={item.value}
            className="rounded-2xl border px-4 py-3 transition-all hover:scale-[1.02]"
            style={{ background: 'rgba(223, 108, 43, 0.08)', borderColor: 'rgba(47, 42, 114, 0.16)' }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: item.accent }}>{item.icon}</p>
            <p className="mt-1 text-base font-extrabold text-[#111827]">{item.value}</p>
            <p className="text-xs text-[#5b6673]">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 border-t border-orange-50 pt-4" style={{ transform: 'translateZ(8px)' }}>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#5b6673]">Core Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {['PyTorch', 'Hugging Face', 'NumPy', 'Pandas', 'Docker', 'GitHub'].map((tech) => (
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
      <FloatingBadge label="LLM Systems" x="-2%" y="18%" delay={0.6} color="#2f2a72" />
      <FloatingBadge label="Agentic Workflows" x="-3%" y="55%" delay={0.9} color="#0f766e" />
      <FloatingBadge label="PyTorch" x="calc(100% - 110px)" y="22%" delay={0.75} color="#df6c2b" />
      <FloatingBadge label="Hugging Face" x="calc(100% - 120px)" y="58%" delay={1.0} color="#2f2a72" />
      <FloatingBadge label="Computer Vision" x="calc(100% - 140px)" y="78%" delay={1.15} color="#c2871f" />

      {/* ── Heritage geometric ornaments ── */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-10 -left-10 w-72 h-52 heritage-kite opacity-90"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="pointer-events-none absolute top-1/3 -right-10 w-64 h-44 heritage-kite cool opacity-90"
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-7 w-44 h-16 heritage-band opacity-80"
        style={{ left: 'calc(50% - 88px)' }}
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
                style={{ background: 'conic-gradient(from 0deg, #df6c2b, #2f2a72, #0f766e, #df6c2b)' }}
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
              style={{ borderColor: 'rgba(223, 108, 43, 0.35)', background: 'rgba(223, 108, 43, 0.12)', color: '#9a4a1d' }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
              Available for ML roles
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#5b6673]">
              <MapPin size={12} /> Hyderabad
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
            <h1 className="display-heading mb-5 leading-[0.95] text-[2.1rem] font-black tracking-tight text-[#111827] sm:text-[3.2rem] lg:text-[4.6rem]">
              <span className="block">Building Intelligent Systems</span>
              <span className="block gradient-text">That See, Retrieve, and Reason</span>
            </h1>
          </motion.div>

          {/* Role pills */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mb-5 flex flex-wrap items-center gap-2">
            {[
              { label: 'Machine Learning Engineer', bg: 'rgba(223, 108, 43, 0.12)', color: '#9a4a1d', border: 'rgba(223, 108, 43, 0.28)' },
              { label: 'LLM & RAG Systems', bg: 'rgba(47, 42, 114, 0.12)', color: '#2f2a72', border: 'rgba(47, 42, 114, 0.28)' },
              { label: 'Computer Vision', bg: 'rgba(15, 118, 110, 0.12)', color: '#0f766e', border: 'rgba(15, 118, 110, 0.25)' },
              { label: 'Agentic Workflows', bg: 'rgba(244, 181, 63, 0.14)', color: '#a6721a', border: 'rgba(244, 181, 63, 0.28)' },
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
            className="mb-9 max-w-xl text-sm sm:text-base leading-relaxed text-[#5b6673]"
          >
            I build ML systems across the stack — LLM apps, RAG pipelines, and computer vision workflows — with a strong focus on
            data quality, evaluation, and system architecture. National finalist at the OpenAI x NxtWave Buildathon 2026.
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
                className="inline-flex items-center gap-2 rounded-xl border border-orange-200 bg-white px-5 py-2.5 text-sm font-semibold text-orange-700 shadow-sm hover:bg-orange-50 hover:border-orange-300 transition-all"
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-white text-[#5b6673] transition-colors duration-200 hover:border-orange-300 hover:text-[#2f2a72] hover:shadow-sm hover:shadow-orange-100"
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
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#5b6673]">{item.icon}</p>
                <p className="mt-1 text-sm font-extrabold text-[#0f172a]">{item.value}</p>
                <p className="text-[11px] text-[#5b6673] leading-snug">{item.sub}</p>
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
