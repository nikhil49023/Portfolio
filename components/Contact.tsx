'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Package, Mail, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const LINKS = [
  { icon: Github, label: 'GitHub', sub: 'nikhil49023', href: 'https://github.com/nikhil49023' },
  { icon: Linkedin, label: 'LinkedIn', sub: 'kilanisainikhil', href: 'https://linkedin.com/in/kilanisainikhil' },
  { icon: Package, label: 'PyPI', sub: 'SaiNikhil', href: 'https://pypi.org/user/SaiNikhil/' },
  { icon: Mail, label: 'Email', sub: 'kilanisainikhil@gmail.com', href: 'mailto:kilanisainikhil@gmail.com' },
];

export function Contact() {
  return (
    <section id="contact" className="section pb-20">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-12">
          <p className="eyebrow mb-2">Contact</p>
          <h2 className="display-heading text-3xl sm:text-4xl font-bold text-white">Let's Build Together</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <motion.div variants={fadeUp} className="card rounded-2xl p-6">
            <div className="w-11 h-11 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4">
              <Linkedin size={18} className="text-rose-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Connect With Me</h3>
            <p className="text-sm text-zinc-400 mb-5">
              Open to AI internships, research collaborations, and agentic app projects. LinkedIn is the best way to reach me.
            </p>
            <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" className="btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm">
              <Linkedin size={14} /> Connect on LinkedIn <ArrowRight size={12} />
            </a>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-3">
            {LINKS.map(({ icon: Icon, label, sub, href }) => (
              <motion.a key={label} href={href} target="_blank" variants={fadeUp} className="card rounded-xl p-4 hover:border-rose-500/30 transition-all">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                  <Icon size={14} className="text-zinc-400" />
                </div>
                <p className="text-sm font-medium text-white">{label}</p>
                <p className="text-xs text-zinc-500 truncate">{sub}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-zinc-600">
          <span>© 2026 Kilani Sai Nikhil</span>
          <span className="mx-2">·</span>
          <span>Built with Next.js, Framer Motion, Tailwind CSS</span>
        </motion.div>
      </motion.div>
    </section>
  );
}