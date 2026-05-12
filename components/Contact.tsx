'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Package, Mail, ArrowRight, MessageSquare } from 'lucide-react';

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

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const LINKS = [
  { icon: Github, label: 'GitHub', sub: 'nikhil49023', href: 'https://github.com/nikhil49023', color: 'cyan' },
  { icon: Linkedin, label: 'LinkedIn', sub: 'kilanisainikhil', href: 'https://linkedin.com/in/kilanisainikhil', color: 'purple' },
  { icon: Package, label: 'PyPI', sub: 'SaiNikhil', href: 'https://pypi.org/user/SaiNikhil/', color: 'lime' },
  { icon: Mail, label: 'Email', sub: 'kilanisainikhil@gmail.com', href: 'mailto:kilanisainikhil@gmail.com', color: 'pink' },
];

export function Contact() {
  return (
    <section id="contact" className="section pb-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-purple/5 blur-[200px] -z-10" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: 0.2 }} 
        className="space-y-24"
      >
        <motion.div variants={fadeUp} className="max-w-4xl">
          <p className="eyebrow">Engagement</p>
          <h2 className="display-heading text-[3rem] sm:text-[5rem] lg:text-[6.5rem] mb-10 uppercase tracking-tighter leading-[0.85]">
            INITIATE <span className="gradient-text">COLLABORATION</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 font-medium leading-relaxed max-w-3xl">
            Open for <span className="text-white font-bold">strategic engineering roles</span>, AI research partnerships, and high-impact digital products.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* Main Channel */}
          <motion.div variants={fadeUp} className="card p-12 flex flex-col justify-between border-accent-cyan/20 bg-accent-cyan/[0.03] group relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className="relative z-10 space-y-10">
              <div className="w-20 h-20 rounded-[2rem] bg-[#050505] flex items-center justify-center border-2 border-accent-cyan/20 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <MessageSquare size={40} className="text-accent-cyan animate-pulse" />
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter">Direct Channel</h3>
                <p className="text-lg text-zinc-400 font-medium leading-relaxed">
                  The most efficient way to discuss technical opportunities or research projects is through LinkedIn.
                </p>
              </div>
            </div>

            <motion.a 
              href="https://linkedin.com/in/kilanisainikhil" 
              target="_blank" 
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="btn-neon mt-14 inline-flex items-center justify-center gap-4 text-sm group/btn"
            >
              Establish Connection 
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Social Grid */}
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {LINKS.map(({ icon: Icon, label, sub, href, color }) => (
              <motion.a 
                key={label} 
                href={href} 
                target="_blank" 
                variants={fadeUp} 
                whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.04)' }}
                className="card p-8 group border-white/5 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-accent-${color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-accent-${color}/10 flex items-center justify-center mb-8 border border-accent-${color}/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  <Icon size={24} className={`text-accent-${color}`} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">{label}</p>
                  <p className="text-lg font-black text-white group-hover:text-accent-cyan transition-colors truncate tracking-tight">{sub}</p>
                </div>
                
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <ArrowRight size={16} className={`text-accent-${color}`} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div variants={fadeUp} className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <div className="relative group">
               <div className="absolute inset-0 bg-accent-cyan/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center font-black text-xl border border-white/10 group-hover:border-accent-cyan/40 transition-colors">S</div>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">© 2026 KILANI SAI NIKHIL</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">All Systems Operational • v4.2.0</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3">
              ENGINEERED WITH <span className="text-white px-2 py-1 bg-white/5 rounded-lg border border-white/10">NEXT.JS 14</span>
            </p>
            <div className="w-1 h-1 rounded-full bg-zinc-800" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-3">
              AUGMENTED BY <span className="text-white px-2 py-1 bg-white/5 rounded-lg border border-white/10">ANTHROPIC</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
