'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Users, Sparkles } from 'lucide-react';

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
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#1e1b4b] sm:text-4xl">
            Awards and certifications
          </h2>
        </motion.div>

        {/* Main award card */}
        <motion.div
          variants={fadeUp}
          className="mb-5 overflow-hidden rounded-3xl border shadow-[0_4px_24px_rgba(124,58,237,0.1)]"
          style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderColor: 'rgba(124,58,237,0.14)',
          }}
        >
          {/* Gradient header */}
          <div
            className="relative overflow-hidden px-7 py-6"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 45%, #a855f7 100%)' }}
          >
            <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-white/15 blur-xl" />

            <div className="relative flex flex-wrap items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/20 text-white">
                <Sparkles size={20} />
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

          {/* Details */}
          <div className="px-7 py-5">
            <div className="flex items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-600">
                <Users size={15} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1e1b4b]">Top 90 of 70,000+</p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#6b6894]">
                  Selected as a national finalist across India in the AI application track.
                </p>
              </div>
            </div>
          </div>

          <div className="px-7 pb-5">
            <a
              href="https://openai-buildathon.nxtwave.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 transition-colors hover:text-violet-700"
            >
              <ExternalLink size={13} />
              View Buildathon
            </a>
          </div>
        </motion.div>

        {/* Mini card */}
        <motion.div variants={fadeUp} className="card rounded-2xl p-4 max-w-xs">
          <div
            className="mb-2 grid h-8 w-8 place-items-center rounded-lg text-[10px] font-black tracking-wide"
            style={{ background: '#a855f710', color: '#a855f7' }}
          >
            PY
          </div>
          <p className="text-sm font-bold text-[#1e1b4b]">PyPI Publisher</p>
          <p className="mt-1 text-xs text-[#9896ac]">saara-ai open source package</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
