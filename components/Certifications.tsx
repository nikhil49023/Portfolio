'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Award, FileBadge, BadgeCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-10">
          <p className="eyebrow mb-2">Recognition</p>
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Awards and certifications
          </h2>
        </motion.div>

        {/* Certificate Mockup - AMD AI Academy */}
        <motion.div
          variants={fadeUp}
          className="mb-8"
        >
          <div className="card rounded-3xl p-2 liquid-glass">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Certificate Image */}
              <div className="relative aspect-[1.4/1] md:aspect-[1.7/1]">
                <img
                  src="/certificates/amd-ai-agents-101.jpg"
                  alt="AMD AI Academy AI Agents 101 Certificate"
                  className="w-full h-full object-contain"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, y: 20 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4"
              >
                <div className="flex items-center gap-2 rounded-full border border-white/90 bg-white/95 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 shadow-xl">
                  <BadgeCheck size={14} className="text-violet-600 md:text-amber-500" />
                  <span className="text-[10px] md:text-xs font-bold text-gray-800">Verified</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certificate Details */}
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{ borderColor: 'rgba(124, 58, 237, 0.25)', color: '#7c3aed', background: 'rgba(124, 58, 237, 0.1)' }}
                >
                  Certificate
                </span>
                <span className="text-xs text-gray-500">2025</span>
              </div>
              <h3 className="display-heading text-xl md:text-2xl font-extrabold text-gray-900">
                AMD AI Academy — AI Agents 101
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Mastered fundamentals of AI agent architectures, tool-use patterns, and multi-agent systems with AMD AI technology.
              </p>
            </div>
            <a
              href="https://www.credly.com/badges/your-badge-id"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 px-4 py-2.5 text-sm shrink-0"
            >
              <Award size={14} />
              View Badge
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.div>

        {/* OpenAI Buildathon - Main Award */}
        <motion.div
          variants={fadeUp}
          className="mb-5 overflow-hidden rounded-3xl border shadow-[0_4px_24px_rgba(124,58,237,0.12)]"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255, 0.98) 0%, rgba(255,255,255, 0.95) 100%)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderColor: 'rgba(124, 58, 237, 0.2)',
          }}
        >
          <div
            className="relative overflow-hidden px-7 py-6"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #0891b2 50%, #ec4899 100%)' }}
          >
            <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-white/15 blur-xl" />

            <div className="relative flex flex-wrap items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                <FileBadge size={20} />
              </div>
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    National Finalist
                  </span>
                  <span className="text-xs font-semibold text-white/70">17 Feb 2026</span>
                </div>
                <h3 className="display-heading text-xl font-extrabold text-white sm:text-2xl">
                  OpenAI x NxtWave Buildathon 2026
                </h3>
                <p className="mt-1 text-xs font-medium text-white/75">
                  Organized by Nxt Wave Institute and powered by OpenAI Academy
                </p>
              </div>
            </div>
          </div>

          <div className="px-7 py-5">
            <div className="flex items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-700">
                <Award size={15} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Top 90 of 70,000+</p>
                <p className="mt-0.5 text-xs leading-relaxed text-gray-600">
                  Selected as a national finalist across India in the production application track.
                </p>
              </div>
            </div>
          </div>

          <div className="px-7 pb-5">
            <a
              href="https://openai-buildathon.nxtwave.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-800"
            >
              <ExternalLink size={13} />
              View Buildathon
            </a>
          </div>
        </motion.div>

        {/* PyPI Publisher - Mini card */}
        <motion.div variants={fadeUp} className="card rounded-2xl p-4 max-w-xs">
          <div
            className="mb-2 grid h-8 w-8 place-items-center rounded-lg text-[10px] font-black tracking-wide"
            style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b' }}
          >
            PY
          </div>
          <p className="text-sm font-bold text-gray-900">PyPI Publisher</p>
          <p className="mt-1 text-xs text-gray-600">saara-ai open source package</p>
        </motion.div>
      </motion.div>
    </section>
  );
}