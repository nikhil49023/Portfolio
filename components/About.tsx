'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Github, Linkedin, Package, Sparkles, Terminal, Rocket, Cpu } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-purple/10 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-cyan/10 blur-[120px] -z-10" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }} 
        className="space-y-24"
      >
        <motion.div variants={fadeUp} className="max-w-4xl">
          <p className="eyebrow">Philosophies & Foundations</p>
          <h2 className="display-heading text-[3rem] sm:text-[5rem] lg:text-[6.5rem] mb-10 uppercase tracking-tighter">
            DECODING THE <span className="gradient-text">DIGITAL</span><br />
            <span className="text-white">FRONTIER</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 leading-relaxed font-medium">
            I am a specialized engineer focused on the intersection of human-centric design and autonomous intelligence. 
            My work revolves around creating systems that aren't just functional, but inherently <span className="text-white">"aware"</span> and highly performant.
          </p>
        </motion.div>

        <div className="bento-grid">
          {/* Identity Card */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 row-span-1 card p-10 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex items-center gap-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-2 border-accent-cyan/20 group-hover:border-accent-cyan/40 transition-colors duration-500">
                  <img src="https://raw.githubusercontent.com/nikhil49023/Portfolio/main/public/profile.jpeg" alt="Kilani Sai Nikhil" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-accent-cyan flex items-center justify-center border-4 border-[#050505] shadow-xl group-hover:rotate-12 transition-transform">
                  <Terminal size={18} className="text-[#050505]" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Sai Nikhil</h3>
                <p className="text-accent-cyan font-black tracking-[0.2em] text-[10px] uppercase mt-1">Strategic Systems Architect</p>
              </div>
            </div>
            <div className="relative z-10 mt-12 space-y-6">
              <div className="flex items-center gap-4 text-xs font-bold text-zinc-500 uppercase tracking-widest bg-white/5 w-fit px-5 py-2.5 rounded-2xl border border-white/5">
                <MapPin size={14} className="text-accent-cyan" /> Hyderabad, India
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
                  { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a 
                    key={label} 
                    href={href} 
                    target="_blank" 
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-4 rounded-2xl glass border-white/5 hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-500 shadow-xl"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={fadeUp} className="col-span-1 card p-10 flex flex-col justify-center gap-6 group">
            <div className="w-16 h-16 rounded-[1.5rem] bg-accent-purple/10 flex items-center justify-center border border-accent-purple/20 group-hover:scale-110 transition-transform duration-500">
              <GraduationCap size={32} className="text-accent-purple" />
            </div>
            <div>
              <p className="text-[10px] font-black text-accent-purple uppercase tracking-[0.3em] mb-2">Academic Core</p>
              <h4 className="text-xl font-black text-white uppercase tracking-tight">NxtWave Institute</h4>
              <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-1">B.Tech CS</p>
              <div className="mt-4 px-4 py-1.5 bg-accent-purple/10 w-fit rounded-lg border border-accent-purple/20">
                <p className="text-[10px] font-black text-accent-purple uppercase tracking-widest">Class of 2029</p>
              </div>
            </div>
          </motion.div>

          {/* Expertise Pillars */}
          <motion.div variants={fadeUp} className="col-span-1 card p-10 flex flex-col justify-between group">
            <div className="flex items-center gap-4 mb-8">
              <Rocket size={24} className="text-accent-lime group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">Pillars</h4>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Next.js 14', color: 'cyan', value: '100%' },
                { label: 'Agentic Flow', color: 'purple', value: '95%' },
                { label: 'RAG Systems', color: 'pink', value: '90%' },
                { label: 'Cloud Infra', color: 'lime', value: '85%' },
              ].map(({ label, color, value }) => (
                <div key={label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{label}</span>
                    <span className={`text-[9px] font-black text-accent-${color}`}>{value}</span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: value }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full bg-accent-${color} shadow-[0_0_8px_rgba(var(--accent-${color}),0.5)]`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Innovation Card */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 card p-10 overflow-hidden relative group">
            <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] group-hover:bg-accent-cyan/20 transition-colors duration-1000" />
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start">
              <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-700 shadow-2xl">
                <Cpu size={40} className="text-accent-cyan" />
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-black text-white uppercase tracking-tight">The Hybrid Strategy</h4>
                <p className="text-base text-zinc-400 leading-relaxed max-w-xl font-medium">
                  My approach combines <span className="text-accent-cyan font-bold">pixel-perfect frontend engineering</span> with 
                  <span className="text-accent-purple font-bold"> deep algorithmic intelligence</span>. 
                  I build intelligent bridges between complex data and intuitive user interaction.
                </p>
                <div className="flex gap-8">
                  <div className="space-y-1">
                    <p className="text-3xl font-black text-white">90%</p>
                    <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">Efficiency Gain</p>
                  </div>
                  <div className="w-[1px] h-12 bg-white/10" />
                  <div className="space-y-1">
                    <p className="text-3xl font-black text-white">0.1%</p>
                    <p className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">National Rank</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Award/Highlight */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 card p-10 bg-gradient-to-br from-accent-purple/5 to-transparent border-accent-purple/20 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-1000">
               <Sparkles size={120} className="text-accent-purple" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-purple/20 flex items-center justify-center shadow-2xl border border-accent-purple/30">
                  <Sparkles size={28} className="text-accent-purple animate-pulse" />
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-tight">Pioneering AI Research</h4>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed font-medium">
                Authored <span className="text-white font-black italic tracking-tight">saara-ai</span>, a published Python engine that automates dataset curation from unstructured documents. 
                This project exemplifies my commitment to building tools that solve complex data challenges through <span className="text-accent-purple font-bold">elegant automation</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
