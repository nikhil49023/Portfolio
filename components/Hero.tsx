'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Package, ArrowRight, MapPin, Download, Sparkles, Code2, Cpu, Globe } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
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
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} id="hero" className="section relative overflow-hidden pt-32 pb-20 lg:pt-56 lg:pb-40">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-30" />
      <motion.div 
        style={{ y: springY1, opacity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-radial from-accent-cyan/20 to-transparent -z-10 blur-[120px]" 
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        {/* Floating Badge */}
        <motion.div variants={fadeUp} className="mb-12 flex items-center justify-center lg:justify-start gap-4">
          <div className="glass px-5 py-2 rounded-lg border-accent-cyan/20 flex items-center gap-3 shadow-2xl shadow-accent-cyan/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan shadow-[0_0_10px_rgba(0,216,255,0.8)]"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-accent-cyan/90">Available for Selected Work</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg border border-white/5">
            <MapPin size={12} className="text-zinc-600" /> Hyderabad, India
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto lg:mx-0 text-center lg:text-left">
          <motion.div variants={fadeUp} className="mb-10">
            <h1 className="display-heading text-[3.5rem] xs:text-[4.5rem] sm:text-[7rem] lg:text-[10rem] leading-[0.82]">
              <span className="text-white">Luxury</span><br />
              <span className="gradient-text italic">Intelligent</span><br />
              <span className="text-white/35 font-medium">Systems</span>
            </h1>
          </motion.div>

          {/* Dynamic Role Tags */}
          <motion.div variants={fadeUp} className="mb-12 flex flex-wrap justify-center lg:justify-start gap-4">
            {ROLES.map(({ icon: Icon, label }) => (
              <motion.div 
                key={label} 
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-accent-cyan/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative glass px-6 py-3 rounded-lg flex items-center gap-3 border-white/5 group-hover:border-accent-cyan/40 transition-all duration-500">
                  <Icon size={16} className="text-accent-cyan group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-xs font-black text-zinc-400 group-hover:text-white uppercase tracking-widest transition-colors">{label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Narrative Bio */}
          <motion.p variants={fadeUp} className="mb-14 max-w-2xl mx-auto lg:mx-0 text-lg lg:text-2xl text-zinc-400 leading-relaxed font-medium">
            Engineering refined digital products where <span className="text-accent-cyan font-bold">premium interfaces</span> meet <span className="text-accent-purple font-bold">autonomous AI intelligence</span>. 
            I build systems that feel composed, fast, and deeply capable.
          </motion.p>

          {/* Action Controls */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="#projects" className="btn-neon flex items-center gap-4 group">
                System Artifacts 
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </motion.div>
            
            <Link href="/resume" className="btn-outline flex items-center gap-4 hover:bg-white/5">
              <Download size={20} /> Dossier
            </Link>

            <div className="flex items-center gap-3 ml-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={label}
                  whileHover={{ y: -5, backgroundColor: 'rgba(216, 183, 110, 0.1)', borderColor: 'rgba(216, 183, 110, 0.4)' }}
                  className="w-14 h-14 rounded-lg glass flex items-center justify-center text-zinc-500 hover:text-white border-white/5 transition-all duration-500"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div 
        style={{ y: springY2 }}
        className="hidden lg:block absolute right-[-10%] top-1/4 w-[700px] h-[700px] border border-accent-cyan/5 rounded-full -z-10 animate-spin-slow opacity-50" 
      />
      <motion.div 
        style={{ y: springY1, animationDirection: 'reverse' }}
        className="hidden lg:block absolute right-[0%] top-1/3 w-[500px] h-[500px] border border-accent-purple/5 rounded-full -z-10 animate-spin-slow opacity-50" 
      />
      
      {/* Floating Status UI */}
      <motion.div 
        initial={{ opacity: 0, x: 100, rotate: 15 }} 
        animate={{ opacity: 1, x: 0, rotate: -8 }} 
        transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotate: 0, scale: 1.05, transition: { duration: 0.5 } }}
        className="hidden xl:block absolute right-24 top-64 w-80 glass p-10 rounded-lg border-accent-cyan/20 shadow-2xl shadow-accent-cyan/5 backdrop-blur-3xl group cursor-default"
      >
        <div className="flex items-center gap-5 mb-8">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent-cyan via-accent-purple to-accent-pink p-[1px] group-hover:rotate-12 transition-transform duration-700">
            <div className="w-full h-full rounded-lg bg-[#050407] flex items-center justify-center">
              <Sparkles size={28} className="text-accent-cyan animate-pulse" />
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black text-accent-cyan uppercase tracking-[0.2em] mb-1">Status Report</p>
            <p className="text-base font-black text-white uppercase tracking-tighter">Luxury Systems</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
              <span>Optimization</span>
              <span className="text-accent-cyan">98%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: '98%' }} 
                transition={{ delay: 1.5, duration: 2, ease: "easeOut" }} 
                className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple" 
              />
            </div>
          </div>
          <p className="text-[11px] font-medium text-zinc-500 leading-relaxed italic">
            "Recognized for architecting highly scalable RAG systems and autonomous multi-agent environments."
          </p>
        </div>
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-[2.5rem]">
          <div className="absolute top-0 right-0 w-8 h-8 bg-accent-cyan/10 rotate-45 translate-x-4 -translate-y-4" />
        </div>
      </motion.div>

    </section>
  );
}
