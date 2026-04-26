'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Package, ArrowRight, MapPin, Download, Sparkles, Code2, Brain, Zap } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

const SOCIALS = [
  { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
  { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
];

const ROLES = [
  { icon: Brain, label: 'Agentic App Builder' },
  { icon: Zap, label: 'Google ADK Expert' },
  { icon: Code2, label: 'LLM & RAG Systems' },
];

export function Hero() {
  return (
    <section id="hero" className="section pt-20 pb-12 lg:pt-28 lg:pb-16">
      
      {/* Floating badge */}
      <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-8 flex items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
          Available for AI Projects
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
          <MapPin size={12} /> Hyderabad, India
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mb-6">
        <h1 className="display-heading text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem] font-bold tracking-tight text-white">
          <span className="block">Building AI</span>
          <span className="block gradient-text">That Architects</span>
          <span className="block">The Future</span>
        </h1>
      </motion.div>

      {/* Role pills */}
      <motion.div variants={fadeUp(0.15)} initial="hidden" animate="show" className="mb-6 flex flex-wrap gap-2">
        {ROLES.map(({ icon: Icon, label }) => (
          <span key={label} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400">
            <Icon size={12} className="text-rose-500" />
            {label}
          </span>
        ))}
      </motion.div>

      {/* Bio */}
      <motion.p variants={fadeUp(0.2)} initial="hidden" animate="show" className="mb-8 max-w-xl text-base text-zinc-400 leading-relaxed">
        I engineer production-ready <span className="text-rose-400">agentic applications</span> using Google ADK, AutoGen, and LLM frameworks.
        Specializing in tool-using AI, multi-agent orchestration, and RAG pipelines.
        National finalist at the <span className="text-white">OpenAI × NxtWave Buildathon 2026</span>.
      </motion.p>

      {/* CTA buttons */}
      <motion.div variants={fadeUp(0.25)} initial="hidden" animate="show" className="mb-10 flex flex-wrap gap-3">
        <Link href="#projects" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm">
          View Projects <ArrowRight size={15} />
        </Link>
        <Link href="https://linkedin.com/in/kilanisainikhil" target="_blank" className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm">
          <Linkedin size={14} /> Connect
        </Link>
        <Link href="/resume" className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm">
          <Download size={14} /> Resume
        </Link>
      </motion.div>

      {/* Social icons */}
      <motion.div variants={fadeUp(0.3)} initial="hidden" animate="show" className="flex flex-wrap gap-2">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-500 transition-all hover:border-rose-500/50 hover:text-rose-400 hover:bg-white/10">
            <Icon size={16} />
          </a>
        ))}
      </motion.div>

      {/* Stats bar - mobile */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="lg:hidden mt-10">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {['ADK', 'AutoGen', 'RAG', 'Multi-Agent'].map((stat) => (
            <div key={stat} className="card rounded-xl px-4 py-3 shrink-0 min-w-[100px]">
              <p className="text-xs text-zinc-500">{stat}</p>
              <p className="text-lg font-bold text-white">{stat}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats card - desktop */}
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="hidden lg:block absolute right-8 top-32 w-72">
        <div className="card rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center">
              <Sparkles size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">At a Glance</p>
              <p className="text-sm font-semibold text-white">Agentic App Builder</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['ADK', 'RAG', 'Multi-Agent', 'CV'].map((s) => (
              <div key={s} className="rounded-lg bg-white/5 px-3 py-2 text-center">
                <p className="text-xs font-medium text-rose-400">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}