'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Github, Linkedin, Package, Sparkles, Terminal, Rocket, Layers, Cpu } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-purple/5 blur-[120px] -z-10" />
      
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-16">
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="eyebrow">Philosophies & Foundations</p>
          <h2 className="display-heading text-4xl sm:text-6xl mb-8">
            DECODING THE <span className="gradient-text">DIGITAL FRONTIER</span>
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            I am a specialized engineer focused on the intersection of human-centric design and autonomous intelligence. 
            My work revolves around creating systems that aren't just functional, but inherently "aware" and highly performant.
          </p>
        </motion.div>

        <div className="bento-grid">
          {/* Identity Card */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 row-span-1 card p-8 flex flex-col justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-accent-cyan/20">
                  <img src="https://raw.githubusercontent.com/nikhil49023/Portfolio/main/public/profile.jpeg" alt="Kilani Sai Nikhil" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent-cyan flex items-center justify-center border-4 border-[#030303]">
                  <Terminal size={14} className="text-[#030303]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Kilani Sai Nikhil</h3>
                <p className="text-accent-cyan font-bold tracking-widest text-xs uppercase">Strategic Systems Architect</p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <MapPin size={14} className="text-accent-cyan" /> Based in Hyderabad, India
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
                  { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" className="p-3 rounded-xl glass border-white/5 hover:border-accent-cyan/50 hover:text-accent-cyan transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={fadeUp} className="col-span-1 card p-8 flex flex-col justify-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center mb-2">
              <GraduationCap size={24} className="text-accent-purple" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-accent-purple uppercase tracking-widest mb-1">Academic Core</p>
              <h4 className="text-lg font-bold text-white">NxtWave Institute (NIAT)</h4>
              <p className="text-sm text-zinc-500">B.Tech in Computer Science</p>
              <p className="text-xs text-zinc-600 mt-2">Class of 2029</p>
            </div>
          </motion.div>

          {/* Expertise Pillars */}
          <motion.div variants={fadeUp} className="col-span-1 card p-8 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-6">
              <Rocket size={20} className="text-accent-lime" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Expertise Pillars</h4>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Next.js 14 / React', color: 'cyan' },
                { label: 'Agentic Workflows', color: 'purple' },
                { label: 'RAG Architecture', color: 'pink' },
                { label: 'System Scalability', color: 'lime' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-400">{label}</span>
                  <div className={`h-1.5 w-12 rounded-full bg-accent-${color}/20 overflow-hidden`}>
                    <div className={`h-full w-full bg-accent-${color}`} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Innovation Card */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 card p-8 overflow-hidden relative group">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-accent-cyan/10 rounded-full blur-[80px] group-hover:bg-accent-cyan/20 transition-colors" />
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                <Cpu size={32} className="text-accent-cyan" />
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">The Hybrid Strategy</h4>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                  My approach combines <span className="text-accent-cyan font-semibold">pixel-perfect frontend engineering</span> with 
                  <span className="text-accent-purple font-semibold"> deep algorithmic intelligence</span>. 
                  I don't just build interfaces; I build intelligent bridges between complex data and intuitive user interaction.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">90%</p>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold">Automation Efficiency</p>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="text-center">
                    <p className="text-2xl font-black text-white">0.1%</p>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold">National Finalist Rank</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Award/Highlight */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 card p-8 bg-gradient-to-br from-accent-purple/5 to-transparent border-accent-purple/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/20 flex items-center justify-center">
                <Sparkles size={20} className="text-accent-purple" />
              </div>
              <h4 className="text-lg font-bold text-white">Pioneering AI Research</h4>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Authored <span className="text-white font-bold italic">saara-ai</span>, a published Python engine that automates dataset curation from unstructured documents. 
              This project exemplifies my commitment to building tools that solve complex data challenges through elegant automation.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
