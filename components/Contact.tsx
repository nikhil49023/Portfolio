'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Brain, Package, ArrowUpRight, Terminal, User } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    label: 'Direct Email',
    value: 'kilanisainikhil@gmail.com',
    href: 'mailto:kilanisainikhil@gmail.com',
    color: 'var(--brand-primary)',
  },
  {
    icon: Github,
    label: 'GitHub Registry',
    value: 'github.com/nikhil49023',
    href: 'https://github.com/nikhil49023',
    color: 'var(--ink-secondary)',
  },
  {
    icon: Brain,
    label: 'Hugging Face Hub',
    value: 'huggingface.co/kilanisainikhil',
    href: 'https://huggingface.co/kilanisainikhil',
    color: 'var(--brand-secondary)',
  },
  {
    icon: Package,
    label: 'PyPI Registry',
    value: 'pypi.org/project/saara-ai/',
    href: 'https://pypi.org/project/saara-ai/',
    color: 'var(--brand-primary)',
  },
  {
    icon: Package,
    label: 'NPM Registry',
    value: 'npmjs.com/package/saara-ai',
    href: 'https://www.npmjs.com/package/saara-ai',
    color: 'var(--brand-secondary)',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kilanisainikhil',
    href: 'https://linkedin.com/in/kilanisainikhil',
    color: 'var(--brand-primary)',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [activeTab, setActiveTab] = useState<'ui' | 'curl'>('ui');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:kilanisainikhil@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const curlSnippet = `curl -X POST "https://api.kilanisainikhil.dev/v1/messages" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sender": "${formState.name || 'Anonymous'}",
    "email": "${formState.email || 'sender@example.com'}",
    "payload": "${formState.message ? formState.message.replace(/"/g, '\\"') : 'Requesting collaboration...'}"
  }'`;

  return (
    <section id="contact" className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)] reveal-on-scroll">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">05</span>
          <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block - Text & Links */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl md:text-3xl font-black text-[var(--ink-primary)] uppercase mb-5 tracking-tighter">
              Let&apos;s build something real.
            </h3>

            <p className="text-sm md:text-base leading-relaxed mb-8 text-[var(--ink-muted)]">
              I&apos;m always excited to collaborate on open-source packages, machine learning systems, or full-stack software development. 
              Drop me a line using the form or reach out through my socials.
            </p>

            <div className="flex items-center gap-2 mb-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] px-4 py-2 w-max">
              <MapPin size={14} className="text-[var(--brand-secondary)]" />
              <span className="text-[10px] font-mono text-[var(--ink-primary)] font-bold tracking-wider">
                HYDERABAD, INDIA (IST)
              </span>
            </div>

            {/* Social Cards */}
            <div className="space-y-3">
              {contacts.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex items-center justify-between p-3.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/60 group transition-all duration-200 no-underline"
                  whileHover={{ y: -3, borderColor: "var(--border-active)", backgroundColor: "var(--bg-surface)" }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-secondary)] group-hover:text-[var(--brand-primary)] transition-colors"
                    >
                      <c.icon size={15} />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-[var(--ink-muted)] tracking-widest uppercase mb-0.5">{c.label}</div>
                      <div className="text-[var(--ink-primary)] text-xs font-semibold">
                        {c.value}
                      </div>
                    </div>
                  </div>
                  <span className="w-5 h-5 border border-[var(--border-subtle)] bg-[var(--bg-void)] flex items-center justify-center transition-all duration-200 group-hover:border-[var(--border-active)] text-[var(--ink-muted)] group-hover:text-[var(--ink-primary)]">
                    <ArrowUpRight size={10} />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Block - API Client Style Form */}
          <div className="lg:col-span-7">
            <div className="w-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col shadow-sm">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3 bg-[var(--bg-surface)]/60">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold bg-[var(--brand-primary)] text-[var(--bg-void)] px-1.5 py-0.5">POST</span>
                  <span className="text-[10px] font-mono text-[var(--ink-secondary)]">/api/v1/contact</span>
                </div>
                <div className="flex border border-[var(--border-subtle)] bg-[var(--bg-void)] p-0.5 text-[9px] font-mono relative">
                  <button
                    onClick={() => setActiveTab('ui')}
                    className={`relative px-3 py-1 cursor-pointer border-0 rounded-none transition-all z-10 ${
                      activeTab === 'ui'
                        ? 'text-[var(--bg-void)] font-bold'
                        : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] bg-transparent'
                    }`}
                  >
                    <span className="z-10">UI CLIENT</span>
                    {activeTab === 'ui' && (
                      <motion.div
                        layoutId="activeContactTab"
                        className="absolute inset-0 bg-[var(--brand-primary)] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('curl')}
                    className={`relative px-3 py-1 cursor-pointer border-0 rounded-none transition-all z-10 ${
                      activeTab === 'curl'
                        ? 'text-[var(--bg-void)] font-bold'
                        : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] bg-transparent'
                    }`}
                  >
                    <span className="z-10">cURL CMD</span>
                    {activeTab === 'curl' && (
                      <motion.div
                        layoutId="activeContactTab"
                        className="absolute inset-0 bg-[var(--brand-primary)] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 md:p-8 bg-[var(--bg-surface)] min-h-[360px]">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="text-center py-16"
                    >
                      <div
                        className="w-14 h-14 flex items-center justify-center mx-auto mb-4 border border-[var(--border-subtle)] bg-[var(--bg-void)]"
                      >
                        <Send size={18} className="text-[var(--brand-primary)]" />
                      </div>
                      <h4 className="font-bold text-base text-[var(--ink-primary)] mb-2 uppercase tracking-wider">
                        Response: 200 OK
                      </h4>
                      <p className="text-xs text-[var(--ink-muted)] max-w-sm mx-auto">
                        Your local email client has been triggered to dispatch your message. Looking forward to establishing contact!
                      </p>
                    </motion.div>
                  ) : activeTab === 'ui' ? (
                    <motion.form
                      key="ui-form"
                      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {[
                        { id: 'name', label: 'sender_name', type: 'text', placeholder: 'Sai Nikhil' },
                        { id: 'email', label: 'reply_to', type: 'email', placeholder: 'nikhil@example.com' },
                      ].map((field) => (
                        <div key={field.id}>
                          <label className="text-[10px] font-mono text-[var(--brand-secondary)] tracking-widest block mb-2 font-bold uppercase">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            required
                            placeholder={field.placeholder}
                            value={formState[field.id as 'name' | 'email']}
                            onChange={(e) => setFormState((s) => ({ ...s, [field.id]: e.target.value }))}
                            className="w-full bg-[var(--bg-void)] border border-[var(--border-subtle)] focus:border-[var(--border-active)] rounded-none px-4 py-3 text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]/50 focus:outline-none transition-all duration-200"
                          />
                        </div>
                      ))}

                      <div>
                        <label className="text-[10px] font-mono text-[var(--brand-secondary)] tracking-widest block mb-2 font-bold uppercase">
                          payload_message
                        </label>
                        <textarea
                          required
                          rows={5}
                          placeholder="What would you like to build together?"
                          value={formState.message}
                          onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                          className="w-full bg-[var(--bg-void)] border border-[var(--border-subtle)] focus:border-[var(--border-active)] rounded-none px-4 py-3 text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)]/50 focus:outline-none transition-all duration-200 resize-none font-sans"
                        />
                      </div>

                      <motion.button 
                        type="submit" 
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ borderColor: "var(--border-active)", backgroundColor: "var(--bg-surface)" }}
                        className="w-full py-3 rounded-none border border-[var(--border-subtle)] text-[var(--ink-primary)] flex items-center justify-center gap-2 bg-[var(--bg-void)] font-bold tracking-widest text-xs cursor-pointer transition-all duration-200"
                      >
                        <span>Send Message</span>
                        <Send size={12} className="text-[var(--brand-primary)]" />
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="curl-snippet"
                      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="space-y-6"
                    >
                      <div className="relative border border-[var(--border-subtle)] bg-[var(--bg-void)] p-4 font-mono text-xs md:text-sm text-[var(--ink-secondary)] leading-relaxed select-text overflow-x-auto max-h-[300px]">
                        <code className="text-emerald-600 dark:text-emerald-400 whitespace-pre">{curlSnippet}</code>
                      </div>
                      <p className="text-[11px] font-mono text-[var(--ink-muted)] leading-relaxed">
                        Fill in the fields on the UI tab to update this request body in real-time, simulating a local REST invocation.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
