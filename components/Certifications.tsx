'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Globe, ExternalLink, Cpu } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

export function Certifications() {
  return (
    <section id="certifications" className="section relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-cyan/5 blur-[150px] -z-10" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }} 
        className="space-y-24"
      >
        <motion.div variants={fadeUp} className="max-w-4xl">
          <p className="eyebrow">Milestones & Validation</p>
          <h2 className="display-heading text-[3rem] sm:text-[5rem] lg:text-[6.5rem] mb-10 uppercase tracking-tighter leading-[0.85]">
            RECOGNIZED <span className="gradient-text">EXCELLENCE</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 font-medium leading-relaxed max-w-3xl">
            A selection of industry recognitions and academic achievements that validate my technical expertise and commitment to <span className="text-white font-bold">innovation</span>.
          </p>
        </motion.div>

        <div className="bento-grid">
          {/* Main Award */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 card overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 bg-gradient-to-r from-accent-cyan/15 to-accent-purple/15 p-10 border-b border-white/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[2rem] bg-[#050505] flex items-center justify-center border-2 border-accent-cyan/20 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                    <Trophy size={40} className="text-accent-cyan" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20">Top 0.1% National Rank</span>
                    </div>
                    <h3 className="text-3xl font-black text-white mt-4 uppercase tracking-tighter">OpenAI × NxtWave Buildathon</h3>
                  </div>
                </div>
                <div className="text-left sm:text-right space-y-1">
                  <p className="text-sm font-black text-white uppercase tracking-widest">FEB 2026</p>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">NATIONAL FINALIST</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 p-10 space-y-8">
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">
                Ranked among the top 90 participants out of 70,000+ across India. Recognized for excellence in architecting production-ready AI applications during an intensive national competition.
              </p>
              <motion.a 
                href="https://openai-buildathon.nxtwave.tech/" 
                target="_blank" 
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-accent-cyan hover:text-white transition-all group"
              >
                Verify Achievement <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Certificate Card */}
          <motion.div variants={fadeUp} className="col-span-1 card group overflow-hidden relative">
            <div className="aspect-[3/4] relative bg-[#080808]">
              <div className="absolute inset-0 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700">
                <img src="/certificates/amd-cover.jpg" alt="AMD AI Academy" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-[10px] font-black text-accent-purple uppercase tracking-[0.3em] mb-3">AMD AI Academy</p>
                  <h4 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">AI Agents 101</h4>
                </div>
              </div>
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7453371520891932673?collapsed=1" 
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" 
                frameBorder="0"
                title="LinkedIn Embed"
              />
            </div>
          </motion.div>

          {/* Package Publisher */}
          <motion.div variants={fadeUp} whileHover={{ y: -10 }} className="col-span-1 card p-10 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 space-y-8">
              <div className="w-16 h-16 rounded-[1.5rem] bg-accent-lime/10 flex items-center justify-center border border-accent-lime/20 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                <Cpu size={32} className="text-accent-lime" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Package Publisher</h3>
                <p className="text-[10px] font-black text-accent-lime uppercase tracking-[0.2em] mb-6 px-3 py-1 bg-accent-lime/10 w-fit rounded-lg border border-accent-lime/20">saara-ai (PyPI)</p>
                <p className="text-base text-zinc-400 leading-relaxed font-medium">
                  Published and maintaining an open-source Python library for automated layout-aware parsing and dataset generation.
                </p>
              </div>
            </div>
            <motion.a 
              href="https://pypi.org/project/saara-ai/" 
              target="_blank" 
              whileHover={{ x: 5 }}
              className="relative z-10 mt-12 text-[10px] font-black uppercase tracking-[0.25em] text-accent-lime hover:text-white transition-all flex items-center gap-3 group"
            >
              System Repository <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Technical Specializations */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 card p-10 group overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
              <div className="w-16 h-16 rounded-[1.5rem] bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <Globe size={32} className="text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Technical Specializations</h3>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mt-1">Google Cloud & AI Frameworks</p>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Generative AI Fundamentals", sub: "Google Cloud Skills Boost", color: "cyan" },
                { title: "Introduction to LLMs", sub: "Architectural Foundations", color: "purple" }
              ].map((badge) => (
                <div key={badge.title} className="p-6 rounded-2xl glass border-white/5 flex items-center gap-6 group/badge hover:border-accent-cyan/40 transition-all duration-500 hover:bg-white/[0.04]">
                  <div className={`w-14 h-14 rounded-2xl bg-accent-${badge.color}/10 flex items-center justify-center text-accent-${badge.color} border border-accent-${badge.color}/20 group-hover/badge:rotate-12 transition-all shadow-xl`}>
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white leading-tight uppercase tracking-tight">{badge.title}</h4>
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] mt-2">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
