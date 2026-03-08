'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Mail, Github, Linkedin, Package, Cpu, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export function About() {
  return (
    <section id="about" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-10">
          <p className="eyebrow mb-2">About</p>
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-[#1e1b4b] sm:text-4xl">Who I am</h2>
        </motion.div>

        <div className="grid items-start gap-6 md:grid-cols-[1fr_1fr]">
          {/* Profile card */}
          <motion.div variants={fadeUp} className="card rounded-3xl p-7">
            <div className="mb-5 flex items-start gap-4">
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl text-2xl font-black text-white shadow-md"
                style={{ background: 'linear-gradient(145deg, #7c3aed, #6d28d9)' }}
              >
                N
              </div>
              <div>
                <h3 className="display-heading text-xl font-extrabold text-[#1e1b4b]">Kilani Sai Nikhil</h3>
                <p className="mt-0.5 text-sm font-semibold text-violet-600">AI Developer and Open-Source Builder</p>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-[#6b6894]">
              I am a B.Tech student focused on large language models, agentic architectures, and robust software systems. I care about
              shipping useful products — from backend AI orchestration to polished mobile experiences.
            </p>

            <div className="space-y-2.5 text-sm">
              <p className="flex items-center gap-2.5 text-[#6b6894]">
                <MapPin size={14} className="text-violet-500" /> Hyderabad, India
              </p>
              <p className="flex items-center gap-2.5 text-[#6b6894]">
                <Mail size={14} className="text-violet-500" />
                <a href="mailto:kilanisainikhil@gmail.com" className="font-semibold text-violet-600 hover:underline">
                  kilanisainikhil@gmail.com
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-violet-50 pt-5">
              {[
                { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
                { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
                { icon: Cpu, href: 'https://huggingface.co/kilanisainikhil', label: 'HuggingFace' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-violet-100 bg-violet-50/60 px-3 py-1.5 text-xs font-semibold text-[#6b6894] transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                >
                  <Icon size={12} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {/* Education */}
            <motion.div variants={fadeUp} className="card rounded-3xl p-6">
              <div className="flex items-start gap-3.5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="eyebrow mb-1">Education</p>
                  <p className="text-sm font-bold text-[#1e1b4b]">Nxt Wave Institute of Advanced Technologies</p>
                  <p className="mt-0.5 text-xs text-[#9896ac]">B.Tech, 2025-2029, Hyderabad</p>
                </div>
              </div>
            </motion.div>

            {/* What I build */}
            <motion.div variants={fadeUp} className="card rounded-3xl p-6">
              <p className="eyebrow mb-3.5">What I build</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: 'AI', text: 'Agentic LLM systems', color: '#7c3aed' },
                  { icon: 'APP', text: 'Flutter mobile apps', color: '#0891b2' },
                  { icon: 'API', text: 'FastAPI services', color: '#a855f7' },
                  { icon: 'ML', text: 'Model pipelines', color: '#059669' },
                  { icon: 'OSS', text: 'Open source tools', color: '#d97706' },
                  { icon: 'IND', text: 'Indic AI workflows', color: '#ec4899' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="rounded-xl border px-3 py-2 text-xs font-semibold text-[#4b4776] transition-all hover:border-violet-200"
                    style={{ background: 'rgba(124,58,237,0.03)', borderColor: 'rgba(124,58,237,0.08)' }}
                  >
                    <p className="text-[10px] font-extrabold tracking-wide" style={{ color: item.color }}>{item.icon}</p>
                    <p className="mt-0.5 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* National Finalist */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border p-5"
              style={{
                background: 'linear-gradient(145deg, rgba(124,58,237,0.07), rgba(168,85,247,0.06))',
                backdropFilter: 'blur(16px) saturate(160%)',
                WebkitBackdropFilter: 'blur(16px) saturate(160%)',
                borderColor: 'rgba(124,58,237,0.18)',
                boxShadow: '0 2px 12px rgba(124,58,237,0.08)',
              }}
            >
              <div className="flex items-center gap-3.5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-violet-600">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1e1b4b]">National Finalist</p>
                  <p className="text-xs text-[#6b6894]">Top 90 of 70,000+ at OpenAI x NxtWave Buildathon 2026</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
