'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Brain, Package, ArrowUpRight, Terminal, User } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    label: 'Direct Email',
    value: 'kilanisainikhil@gmail.com',
    href: 'mailto:kilanisainikhil@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub Registry',
    value: 'github.com/nikhil49023',
    href: 'https://github.com/nikhil49023',
  },
  {
    icon: Brain,
    label: 'Hugging Face Hub',
    value: 'huggingface.co/kilanisainikhil',
    href: 'https://huggingface.co/kilanisainikhil',
  },
  {
    icon: Package,
    label: 'PyPI Registry',
    value: 'pypi.org/project/saara-ai/',
    href: 'https://pypi.org/project/saara-ai/',
  },
  {
    icon: Package,
    label: 'NPM Registry',
    value: 'npmjs.com/package/saara-ai',
    href: 'https://www.npmjs.com/package/saara-ai',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kilanisainikhil',
    href: 'https://linkedin.com/in/kilanisainikhil',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [activeTab, setActiveTab] = useState<'ui' | 'curl'>('ui');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
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
    <section id="contact" className="section-premium border-t border-[var(--border-subtle)] bg-[var(--bg-void)]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-sm text-[var(--brand-primary)] font-bold">05</span>
          <h2 className="text-sm font-mono tracking-widest uppercase text-[var(--brand-secondary)] font-bold">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block - Text & Links */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl md:text-3xl font-black text-[var(--ink-primary)] uppercase mb-4 tracking-tight font-display">
              Let&apos;s build something real.
            </h3>

            <p className="text-sm leading-relaxed mb-6 text-[var(--ink-secondary)]">
              I am always open to collaborate on open-source packages, on-device machine learning architectures, and edge systems engineering. Drop me a line directly or connect on registries.
            </p>

            <div className="flex items-center gap-2 mb-6 bg-[var(--bg-surface)] border border-[var(--border-subtle)] px-3.5 py-2 w-max">
              <MapPin size={14} className="text-[var(--brand-primary)]" />
              <span className="text-[10px] font-mono text-[var(--ink-primary)] font-bold tracking-wider">
                HYDERABAD, INDIA (IST UTC+5:30)
              </span>
            </div>

            {/* Social Cards */}
            <div className="space-y-2.5">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-active)] group transition-all duration-200 no-underline shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-void)] text-[var(--ink-secondary)] group-hover:text-[var(--brand-primary)] transition-colors">
                      <c.icon size={14} />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-[var(--ink-muted)] tracking-widest uppercase mb-0.5">{c.label}</div>
                      <div className="text-[var(--ink-primary)] text-xs font-semibold">
                        {c.value}
                      </div>
                    </div>
                  </div>
                  <span className="w-5 h-5 border border-[var(--border-subtle)] bg-[var(--bg-void)] flex items-center justify-center transition-all duration-200 group-hover:border-[var(--border-active)] text-[var(--ink-muted)] group-hover:text-[var(--ink-primary)]">
                    <ArrowUpRight size={11} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Block - API Client Style Form */}
          <div className="lg:col-span-7">
            <div className="w-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col shadow-sm">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-4 py-3 bg-[var(--bg-surface)]/80">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold bg-[var(--brand-primary)] text-[var(--bg-void)] px-1.5 py-0.5">POST</span>
                  <span className="text-[10px] font-mono text-[var(--ink-secondary)]">/api/v1/contact</span>
                </div>
                <div className="flex border border-[var(--border-subtle)] bg-[var(--bg-void)] p-0.5 text-[9px] font-mono">
                  <button
                    onClick={() => setActiveTab('ui')}
                    className={`px-3 py-1 cursor-pointer border-0 transition-all ${
                      activeTab === 'ui'
                        ? 'bg-[var(--brand-primary)] text-[var(--bg-void)] font-bold'
                        : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] bg-transparent'
                    }`}
                  >
                    UI CLIENT
                  </button>
                  <button
                    onClick={() => setActiveTab('curl')}
                    className={`px-3 py-1 cursor-pointer border-0 transition-all ${
                      activeTab === 'curl'
                        ? 'bg-[var(--brand-primary)] text-[var(--bg-void)] font-bold'
                        : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] bg-transparent'
                    }`}
                  >
                    cURL CMD
                  </button>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-6 md:p-8 bg-[var(--bg-surface)] min-h-[340px]">
                {sent ? (
                  <div className="text-center py-12 space-y-3">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 border border-[var(--border-subtle)] bg-[var(--bg-void)]">
                      <Send size={18} className="text-[var(--brand-primary)]" />
                    </div>
                    <h4 className="font-bold text-base text-[var(--ink-primary)] uppercase tracking-wider font-display">
                      Response: 200 OK
                    </h4>
                    <p className="text-xs text-[var(--ink-muted)] max-w-sm mx-auto">
                      Your local email client has been opened to dispatch your message. Looking forward to connecting!
                    </p>
                  </div>
                ) : activeTab === 'ui' ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { id: 'name', label: 'sender_name', type: 'text', placeholder: 'Sai Nikhil' },
                      { id: 'email', label: 'reply_to', type: 'email', placeholder: 'nikhil@example.com' },
                    ].map((field) => (
                      <div key={field.id}>
                        <label className="text-[10px] font-mono text-[var(--brand-secondary)] tracking-widest block mb-1.5 font-bold uppercase">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required
                          placeholder={field.placeholder}
                          value={formState[field.id as 'name' | 'email']}
                          onChange={(e) => setFormState((s) => ({ ...s, [field.id]: e.target.value }))}
                          className="w-full bg-[var(--bg-void)] border border-[var(--border-subtle)] focus:border-[var(--border-active)] rounded-none px-3.5 py-2.5 text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:outline-none transition-all duration-200 font-mono"
                        />
                      </div>
                    ))}

                    <div>
                      <label className="text-[10px] font-mono text-[var(--brand-secondary)] tracking-widest block mb-1.5 font-bold uppercase">
                        payload_message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="What would you like to engineer together?"
                        value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        className="w-full bg-[var(--bg-void)] border border-[var(--border-subtle)] focus:border-[var(--border-active)] rounded-none px-3.5 py-2.5 text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:outline-none transition-all duration-200 resize-none font-sans"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-2.5 rounded-none border border-[var(--border-medium)] hover:border-[var(--ink-primary)] text-[var(--ink-primary)] flex items-center justify-center gap-2 bg-[var(--bg-void)] font-bold tracking-widest text-xs cursor-pointer transition-all duration-200 font-mono uppercase"
                    >
                      <span>Dispatch Message</span>
                      <Send size={12} className="text-[var(--brand-primary)]" />
                    </button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="border border-[var(--border-subtle)] bg-[var(--bg-void)] p-4 font-mono text-xs text-[var(--ink-secondary)] leading-relaxed select-text overflow-x-auto max-h-[260px]">
                      <code className="text-emerald-600 dark:text-emerald-400 whitespace-pre">{curlSnippet}</code>
                    </div>
                    <p className="text-[10px] font-mono text-[var(--ink-muted)] leading-relaxed">
                      Edit the UI client fields to update this payload in real time.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
