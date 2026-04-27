'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Package, ArrowRight, MapPin, Download, Sparkles, Code2, Cpu, Globe } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] } },
});

const SOCIALS = [
  { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
  { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
];

const ROLES = [
  { icon: Code2, label: 'Frontend Architect' },
  { icon: Cpu, label: 'AI Agent Engineer' },
  { icon: Globe, label: 'Full Stack Developer' },
];

export function Hero() {
  return (
    <section id="hero" className="section relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-accent-cyan/10 to-transparent -z-10" />

      {/* Floating Badge */}
      <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="mb-10 flex items-center justify-center lg:justify-start gap-3">
        <div className="glass px-4 py-1.5 rounded-full border-accent-cyan/20 flex items-center gap-2 shadow-2xl shadow-accent-cyan/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-accent-cyan/80">Open for Strategic Partnerships</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
          <MapPin size={10} className="text-zinc-600" /> Hyderabad, IN
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
        <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mb-8">
          <h1 className="display-heading text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] leading-[0.85] font-black">
            <span className="text-white">ENGINEERING</span><br />
            <span className="gradient-text">INTELLIGENT</span><br />
            <span className="text-white/40">EXPERIENCES</span>
          </h1>
        </motion.div>

        {/* Dynamic Role Tags */}
        <motion.div variants={fadeUp(0.2)} initial="hidden" animate="show" className="mb-10 flex flex-wrap justify-center lg:justify-start gap-3">
          {ROLES.map(({ icon: Icon, label }) => (
            <div key={label} className="group relative">
              <div className="absolute inset-0 bg-accent-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative glass px-4 py-2 rounded-xl flex items-center gap-2 border-white/5 hover:border-accent-cyan/30 transition-colors">
                <Icon size={14} className="text-accent-cyan" />
                <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">{label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Narrative Bio */}
        <motion.p variants={fadeUp(0.3)} initial="hidden" animate="show" className="mb-12 max-w-2xl mx-auto lg:mx-0 text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium">
          I bridge the gap between <span className="text-accent-cyan">sophisticated frontend architecture</span> and <span className="text-accent-purple">autonomous AI agents</span>. 
          Specializing in crafting high-performance, visually stunning applications that leverage the power of tool-using LLMs and multi-agent orchestration.
        </motion.p>

        {/* Action Controls */}
        <motion.div variants={fadeUp(0.4)} initial="hidden" animate="show" className="flex flex-wrap justify-center lg:justify-start gap-4">
          <Link href="#projects" className="btn-neon flex items-center gap-3">
            Exploration <ArrowRight size={18} />
          </Link>
          <Link href="/resume" className="btn-outline flex items-center gap-3">
            <Download size={18} /> Credentials
          </Link>
          <div className="flex items-center gap-2 ml-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-500 hover:text-accent-cyan hover:border-accent-cyan/50 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent-cyan/10 rounded-full -z-10 animate-spin-slow" />
      <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-accent-purple/10 rounded-full -z-10 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      
      {/* Floating Card UI */}
      <motion.div 
        initial={{ opacity: 0, x: 100, rotate: 10 }} 
        animate={{ opacity: 1, x: 0, rotate: -5 }} 
        transition={{ delay: 0.6, duration: 1 }}
        className="hidden xl:block absolute right-20 top-40 w-80 glass p-8 rounded-[2rem] border-accent-cyan/20 shadow-2xl shadow-accent-cyan/5 backdrop-blur-3xl"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple p-[1px]">
            <div className="w-full h-full rounded-2xl bg-[#030303] flex items-center justify-center">
              <Sparkles size={24} className="text-accent-cyan" />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold text-accent-cyan uppercase tracking-tighter">Recognition</p>
            <p className="text-sm font-black text-white">National Finalist</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: '92%' }} 
              transition={{ delay: 1, duration: 1.5 }} 
              className="h-full bg-accent-cyan" 
            />
          </div>
          <p className="text-[10px] font-medium text-zinc-500">
            Ranked in the top 0.1% at the OpenAI × NxtWave Buildathon 2026. 
            Selected for excellence in AI application architecture.
          </p>
        </div>
      </motion.div>

    </section>
  );
}
