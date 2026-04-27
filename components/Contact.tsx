'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Package, Mail, ArrowRight, MessageSquare } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const LINKS = [
  { icon: Github, label: 'GitHub', sub: 'nikhil49023', href: 'https://github.com/nikhil49023', color: 'cyan' },
  { icon: Linkedin, label: 'LinkedIn', sub: 'kilanisainikhil', href: 'https://linkedin.com/in/kilanisainikhil', color: 'purple' },
  { icon: Package, label: 'PyPI', sub: 'SaiNikhil', href: 'https://pypi.org/user/SaiNikhil/', color: 'lime' },
  { icon: Mail, label: 'Email', sub: 'kilanisainikhil@gmail.com', href: 'mailto:kilanisainikhil@gmail.com', color: 'pink' },
];

export function Contact() {
  return (
    <section id="contact" className="section pb-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-purple/5 blur-[150px] -z-10" />
      
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-16">
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="eyebrow">Engagement</p>
          <h2 className="display-heading text-4xl sm:text-6xl uppercase mb-8">
            INITIATE <span className="gradient-text">COLLABORATION</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Open for strategic engineering roles, AI research partnerships, and high-impact digital products.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <motion.div variants={fadeUp} className="card p-10 flex flex-col justify-between border-accent-cyan/20 bg-accent-cyan/5">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#030303] flex items-center justify-center border border-white/10 shadow-2xl">
                <MessageSquare size={32} className="text-accent-cyan" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Direct Channel</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">
                  The most efficient way to discuss technical opportunities or research projects is through LinkedIn.
                </p>
              </div>
            </div>
            <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" className="btn-neon mt-10 inline-flex items-center justify-center gap-3">
              Establish Connection <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LINKS.map(({ icon: Icon, label, sub, href, color }) => (
              <motion.a 
                key={label} 
                href={href} 
                target="_blank" 
                variants={fadeUp} 
                className="card p-6 group hover:border-white/20 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-accent-${color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className={`text-accent-${color}`} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">{label}</p>
                  <p className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors truncate">{sub}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="pt-16 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-black text-xs">S</div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">© 2026 KILANI SAI NIKHIL</p>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
            ENGINEERED WITH <span className="text-white">NEXT.JS</span> & <span className="text-white">AI</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
