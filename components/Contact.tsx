'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Package, Mail, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const LINKS = [
  { icon: Github, label: 'GitHub', sub: 'nikhil49023', href: 'https://github.com/nikhil49023', accent: '#7c3aed' },
  { icon: Linkedin, label: 'LinkedIn', sub: 'kilanisainikhil', href: 'https://linkedin.com/in/kilanisainikhil', accent: '#0891b2' },
  { icon: Package, label: 'PyPI', sub: 'SaiNikhil', href: 'https://pypi.org/user/SaiNikhil/', accent: '#ec4899' },
  { icon: Mail, label: 'Email', sub: 'kilanisainikhil@gmail.com', href: 'mailto:kilanisainikhil@gmail.com', accent: '#a78bfa' },
];

export function Contact() {
  return (
    <section id="contact" className="section pb-24">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        <motion.div variants={fadeUp} className="mb-10">
          <p className="eyebrow mb-2">Contact</p>
          <h2 className="display-heading text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Let&apos;s build something intelligent
          </h2>
        </motion.div>

        <div className="grid items-start gap-6 md:grid-cols-[1fr_1.2fr]">
          {/* LinkedIn card */}
          <motion.div variants={fadeUp} className="card rounded-3xl p-7 liquid-glass">
            <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-violet-600">
              <Linkedin size={18} />
            </div>
            <h3 className="display-heading mb-2 text-2xl font-extrabold text-gray-900">Connect with me</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Open to AI internships, research collaborations, and agentic app projects.
              LinkedIn is the best way to reach me for professional inquiries.
            </p>
            <a href="https://linkedin.com/in/kilanisainikhil" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm">
              <Linkedin size={14} /> Connect on LinkedIn <ArrowRight size={13} />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={stagger} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {LINKS.map(({ icon: Icon, label, sub, href, accent }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" variants={fadeUp} className="rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-1 bg-white liquid-glass" style={{ borderColor: `${accent}18`, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg" style={{ background: `${accent}10`, color: accent }}>
                  <Icon size={16} />
                </div>
                <p className="text-sm font-bold text-gray-900">{label}</p>
                <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">{sub}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div variants={fadeUp} className="mt-16 flex flex-col items-center justify-between gap-2 border-t pt-6 text-xs text-gray-500 sm:flex-row" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
          <span>&copy; 2026 Kilani Sai Nikhil</span>
          <span>Built with Next.js, Framer Motion, and Tailwind CSS</span>
        </motion.div>
      </motion.div>
    </section>
  );
}