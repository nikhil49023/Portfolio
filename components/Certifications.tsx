'use client';

import { motion } from 'framer-motion';
import { Sparkles, Trophy, Award, Globe, ExternalLink, Cpu } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Certifications() {
  return (
    <section id="certifications" className="section relative">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-16">
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="eyebrow">Milestones & Validation</p>
          <h2 className="display-heading text-4xl sm:text-6xl mb-8 uppercase">
            RECOGNIZED <span className="gradient-text">EXCELLENCE</span>
          </h2>
          <p className="text-xl text-zinc-400">
            A selection of industry recognitions and academic achievements that validate my technical expertise and commitment to innovation.
          </p>
        </motion.div>

        <div className="bento-grid">
          {/* Main Award */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 card overflow-hidden group">
            <div className="bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 p-8 border-b border-white/5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#030303] flex items-center justify-center border border-white/10 shadow-2xl">
                    <Trophy size={28} className="text-accent-cyan" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent-cyan">Top 0.1% National Rank</span>
                    <h3 className="text-2xl font-black text-white mt-1 uppercase tracking-tighter">OpenAI × NxtWave Buildathon</h3>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="text-xs font-black text-white">FEB 2026</p>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">NATIONAL FINALIST</p>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-zinc-400 leading-relaxed font-medium">
                Ranked among the top 90 participants out of 70,000+ across India. Recognized for excellence in architecting production-ready AI applications during an intensive national competition.
              </p>
              <a href="https://openai-buildathon.nxtwave.tech/" target="_blank" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent-cyan hover:text-white transition-colors">
                Verify Achievement <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* Certificate */}
          <motion.div variants={fadeUp} className="col-span-1 card group overflow-hidden">
            <div className="aspect-[4/5] relative bg-[#030303]">
              <div className="absolute inset-0 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <img src="/certificates/amd-cover.jpg" alt="AMD AI Academy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[10px] font-black text-accent-purple uppercase tracking-widest mb-1">AMD AI Academy</p>
                  <h4 className="text-lg font-black text-white uppercase tracking-tighter leading-none">AI Agents 101</h4>
                </div>
              </div>
              <iframe 
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7453371520891932673?collapsed=1" 
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                frameBorder="0"
                title="LinkedIn Embed"
              />
            </div>
          </motion.div>

          {/* PyPI */}
          <motion.div variants={fadeUp} className="col-span-1 card p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-accent-lime/10 flex items-center justify-center">
                <Cpu size={24} className="text-accent-lime" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">Package Publisher</h3>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">saara-ai (PyPI)</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Published and maintaining an open-source Python library for automated layout-aware parsing and dataset generation.
                </p>
              </div>
            </div>
            <a href="https://pypi.org/project/saara-ai/" target="_blank" className="mt-8 text-[10px] font-black uppercase tracking-widest text-accent-lime hover:text-white transition-colors flex items-center gap-2">
              View Repository <ExternalLink size={10} />
            </a>
          </motion.div>

          {/* Google Badges */}
          <motion.div variants={fadeUp} className="col-span-1 lg:col-span-2 card p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center">
                <Globe size={24} className="text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">Technical Specializations</h3>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Google Cloud & AI Frameworks</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Generative AI Fundamentals", sub: "Google Cloud Skills Boost", color: "cyan" },
                { title: "Introduction to LLMs", sub: "Architectural Foundations", color: "purple" }
              ].map((badge) => (
                <div key={badge.title} className="p-4 rounded-xl glass border-white/5 flex items-center gap-4 group/badge hover:border-accent-cyan/30 transition-colors">
                  <div className={`w-10 h-10 rounded-lg bg-accent-${badge.color}/10 flex items-center justify-center text-accent-${badge.color}`}>
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">{badge.title}</h4>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">{badge.sub}</p>
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
