'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-12">
          <p className="eyebrow mb-2">Recognition</p>
          <h2 className="display-heading text-3xl sm:text-4xl font-bold text-white">Awards & Certifications</h2>
        </motion.div>

        {/* Bento grid */}
        <div className="bento-grid">
          {/* Main award - large */}
          <motion.div variants={fadeUp} className="col-span-2 card rounded-2xl overflow-hidden">
            <div className="accent-gradient px-6 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <div>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">National Finalist</span>
                    <h3 className="text-xl font-bold text-white mt-1">OpenAI × NxtWave Buildathon 2026</h3>
                  </div>
                </div>
                <span className="text-white/70 text-sm">Feb 2026</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-zinc-400">Top 90 of 70,000+ participants across India in the Production Application Track.</p>
              <a href="https://openai-buildathon.nxtwave.tech/" target="_blank" className="inline-flex items-center gap-1 mt-3 text-sm text-rose-400 hover:underline">
                View details →
              </a>
            </div>
          </motion.div>

          {/* Certificate - medium */}
          <motion.div variants={fadeUp} className="card rounded-2xl overflow-hidden">
            <div className="aspect-[1.4/1] relative">
              <img src="/certificates/amd-ai-agents-101.jpg" alt="AMD AI Academy Certificate" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Certificate</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white">AMD AI Academy — AI Agents 101</h3>
              <p className="text-xs text-zinc-500 mt-1">AI agent architectures & multi-agent systems</p>
            </div>
          </motion.div>

          {/* PyPI - small */}
          <motion.div variants={fadeUp} className="card rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <span className="text-amber-500 font-bold text-sm">PY</span>
              </div>
              <div>
                <h3 className="font-bold text-white">PyPI Publisher</h3>
                <p className="text-xs text-zinc-500">saara-ai package</p>
              </div>
            </div>
            <p className="text-xs text-zinc-500">Open-source Python library for PDF to dataset pipelines</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

import { Sparkles } from 'lucide-react';