'use client';

import { motion } from 'framer-motion';
import { Brain, Eye, Bot, Code2, ArrowRight, Linkedin, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const SERVICES = [
  { icon: Brain, title: 'Agentic App Development', desc: 'Building AI agents with Google ADK, AutoGen, and multi-agent orchestration for production.', tags: ['ADK', 'AutoGen', 'LangChain'], featured: true },
  { icon: Eye, title: 'Computer Vision', desc: 'Vision pipelines with PyTorch and OpenCV for data processing.', tags: ['PyTorch', 'OpenCV'], featured: false },
  { icon: Bot, title: 'LLM & RAG Systems', desc: 'Retrieval-augmented generation for reliable AI responses.', tags: ['RAG', 'Hugging Face'], featured: false },
];

export function Services() {
  return (
    <section id="services" className="section">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-12">
          <p className="eyebrow mb-2">Services</p>
          <h2 className="display-heading text-3xl sm:text-4xl font-bold text-white">AI Engineering</h2>
        </motion.div>

        {/* Featured + secondary */}
        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr] mb-4">
          {/* Featured */}
          <motion.div variants={fadeUp} className="card rounded-2xl p-6 border-rose-500/30">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center">
                <Brain size={20} className="text-rose-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 border border-rose-500/30 rounded-full px-2 py-0.5">Top Service</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Agentic App Development</h3>
            <p className="text-sm text-zinc-400 mb-4">Building production-ready agentic applications with Google ADK and AutoGen frameworks.</p>
            <div className="grid grid-cols-2 gap-2 mb-5">
              {['ADK agents', 'Multi-agent', 'Tool integration', 'RAG pipeline'].map((d) => (
                <div key={d} className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 size={12} className="text-rose-500" /> {d}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {['Google ADK', 'AutoGen', 'LangChain', 'Docker'].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm">
              <Linkedin size={14} /> Start a project <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Secondary */}
          <motion.div variants={fadeUp} className="card rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
              <Eye size={18} className="text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Computer Vision</h3>
            <p className="text-sm text-zinc-400 mb-4">Vision systems built with PyTorch and OpenCV.</p>
            <div className="flex flex-wrap gap-1.5">
              {['PyTorch', 'OpenCV'].map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>
        </div>

        {/* Bottom cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {SERVICES.slice(2).map((svc) => (
            <motion.div key={svc.title} variants={fadeUp} className="card rounded-2xl p-5">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3" style={{ color: svc.title.includes('LLM') ? '#f43f5e' : '#a3a3a3' }}>
                <svc.icon size={16} />
              </div>
              <h3 className="font-semibold text-white mb-1">{svc.title}</h3>
              <p className="text-xs text-zinc-500 mb-3">{svc.desc}</p>
              <div className="flex flex-wrap gap-1">
                {svc.tags.map((t) => <span key={t} className="tag text-[10px]">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}