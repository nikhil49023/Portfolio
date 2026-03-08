'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Package, Cpu, Mail, ArrowRight, MapPin } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay } },
});

const SOCIALS = [
  { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
  { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
  { icon: Cpu, href: 'https://huggingface.co/kilanisainikhil', label: 'HuggingFace' },
];

const STATS = [
  { value: 'Top 90', sub: 'of 70,000+ applicants', icon: 'Trophy', accent: '#7c3aed' },
  { value: 'saara-ai', sub: 'Published on PyPI', icon: 'Release', accent: '#0891b2' },
  { value: '2026', sub: 'OpenAI Buildathon finalist', icon: 'Finalist', accent: '#a855f7' },
  { value: 'B.Tech', sub: 'NIAT 2025-2029', icon: 'Degree', accent: '#059669' },
];

export function Hero() {
  return (
    <section id="hero" className="section pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36 lg:pb-24">
      <div className="grid items-start gap-8 lg:gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          {/* Status badge */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-8 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold"
              style={{ borderColor: 'rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.07)', color: '#7c3aed' }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
              Available for opportunities
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#9896ac]">
              <MapPin size={12} /> Hyderabad
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
            <h1 className="display-heading mb-5 leading-[0.95] text-[2.4rem] font-black tracking-tight text-[#1e1b4b] sm:text-[3.6rem] lg:text-[5.2rem]">
              <span className="block">Designing and Shipping</span>
              <span className="block gradient-text">AI Products End-to-End</span>
            </h1>
          </motion.div>

          {/* Role pills */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="show"
            className="mb-5 flex flex-wrap items-center gap-2"
          >
            {[
              { label: 'AI Developer', bg: 'rgba(124,58,237,0.08)', color: '#7c3aed', border: 'rgba(124,58,237,0.2)' },
              { label: 'LLM Engineer', bg: 'rgba(8,145,178,0.08)', color: '#0891b2', border: 'rgba(8,145,178,0.2)' },
              { label: 'Flutter Builder', bg: 'rgba(30,27,75,0.05)', color: '#6b6894', border: 'rgba(30,27,75,0.1)' },
              { label: 'Open Source', bg: 'rgba(30,27,75,0.05)', color: '#6b6894', border: 'rgba(30,27,75,0.1)' },
            ].map(({ label, bg, color, border }) => (
              <span
                key={label}
                className="rounded-full border px-3 py-1 text-xs font-semibold"
                style={{ background: bg, color, borderColor: border }}
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp(0.14)}
            initial="hidden"
            animate="show"
            className="mb-9 max-w-xl text-base leading-relaxed text-[#6b6894]"
          >
            I build production AI systems across mobile and backend stacks — from agentic workflows and RAG pipelines to polished
            user-facing products. National finalist at the OpenAI x NxtWave Buildathon 2026.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp(0.18)} initial="hidden" animate="show" className="mb-8 flex flex-wrap gap-3">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              View Projects
              <ArrowRight size={15} />
            </button>
            <a href="mailto:kilanisainikhil@gmail.com" className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm">
              <Mail size={14} /> Get in touch
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeUp(0.22)} initial="hidden" animate="show" className="flex flex-wrap items-center gap-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-violet-100 bg-white text-[#9896ac] transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-600 hover:shadow-sm hover:shadow-violet-100"
              >
                <Icon size={16} />
              </a>
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
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9896ac]">{item.icon}</p>
                <p className="mt-1 text-sm font-extrabold text-[#1e1b4b]">{item.value}</p>
                <p className="text-[11px] text-[#9896ac] leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Desktop stats card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="card rounded-3xl p-6">
            <div className="mb-4 flex items-center justify-between border-b border-violet-50 pb-3">
              <p className="text-xs font-bold tracking-[0.14em] text-[#9896ac]">AT A GLANCE</p>
              <span className="h-2 w-2 rounded-full bg-violet-500" />
            </div>

            <div className="space-y-2.5">
              {STATS.map((item) => (
                <div
                  key={item.value}
                  className="rounded-2xl border px-4 py-3"
                  style={{ background: 'rgba(124,58,237,0.03)', borderColor: 'rgba(124,58,237,0.08)' }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: item.accent }}>{item.icon}</p>
                  <p className="mt-1 text-base font-extrabold text-[#1e1b4b]">{item.value}</p>
                  <p className="text-xs text-[#9896ac]">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-violet-50 pt-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#9896ac]">Core Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'Flutter', 'FastAPI', 'LLMs', 'RAG'].map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
