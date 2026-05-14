'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Package, ArrowRight, Download, Sparkles, Code2, Cpu, Globe } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const SOCIALS = [
  { icon: Github, href: 'https://github.com/nikhil49023', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/kilanisainikhil', label: 'LinkedIn' },
  { icon: Package, href: 'https://pypi.org/user/SaiNikhil/', label: 'PyPI' },
];

const ROLES = [
  { icon: Code2, label: 'Frontend Architect' },
  { icon: Cpu, label: 'AI Agent Engineer' },
  { icon: Globe, label: 'Full Stack Developer' },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} id="hero" className="section relative pt-32 pb-20 lg:pt-64 lg:pb-40">
      
      {/* Refined Background Gradient */}
      <motion.div 
        style={{ y: springY1, opacity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-radial from-accent-cyan/5 to-transparent -z-10 blur-[140px]" 
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Main Content */}
        <div className="lg:col-span-8 text-center lg:text-left">
          <motion.div variants={fadeUp} className="mb-8">
            <span className="eyebrow inline-flex lg:justify-start justify-center">Strategic Intelligence</span>
            <h1 className="display-heading text-[4rem] sm:text-[6rem] lg:text-[9rem] xl:text-[11rem] leading-[0.8]">
              <span className="text-white">LUXURY</span><br />
              <span className="gradient-text">INTELLIGENT</span><br />
              <span className="text-white opacity-20">SYSTEMS</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-12 flex flex-wrap justify-center lg:justify-start gap-4">
            {ROLES.map(({ icon: Icon, label }) => (
              <div key={label} className="glass px-5 py-2.5 rounded-full flex items-center gap-3 border-white/5">
                <Icon size={14} className="text-accent-cyan" />
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="mb-14 max-w-2xl mx-auto lg:mx-0 text-xl lg:text-2xl text-white/50 leading-relaxed font-medium font-display italic">
            "Bridging high-end aesthetic precision with the raw power of autonomous agentic architectures."
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-8 items-center">
            <Link href="#projects" className="btn-neon group flex items-center gap-4">
              Explore Artifacts 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/resume" className="btn-outline flex items-center gap-4">
              <Download size={18} /> Dossier
            </Link>

            <div className="flex items-center gap-4">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, color: '#f7e7ce' }}
                  className="text-white/30 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Command Pallet Artifact */}
        <motion.div 
          variants={fadeUp}
          className="hidden lg:block lg:col-span-4"
        >
          <div className="glass p-8 rounded-3xl border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
                  <Sparkles size={24} className="text-accent-cyan" />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-accent-cyan uppercase tracking-[0.2em]">Core v4.2</p>
                  <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Active State</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Optimization</span>
                    <span className="text-sm font-display italic text-accent-cyan">98.4%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: '98.4%' }} 
                      transition={{ delay: 1, duration: 2 }}
                      className="h-full bg-accent-cyan shadow-[0_0_10px_rgba(247,231,206,0.5)]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Latency', val: '12ms' },
                    { label: 'Sync', val: 'Verified' },
                    { label: 'Nodes', val: 'Active' },
                    { label: 'Security', val: 'AES-256' }
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className="text-[10px] font-black text-white/70 uppercase tracking-tighter">{stat.val}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] leading-relaxed text-white/30 italic font-display border-l border-accent-cyan/20 pl-4">
                  Architecting multi-agent environments with unprecedented fidelity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
