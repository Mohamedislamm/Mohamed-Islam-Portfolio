import React, { useState } from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { Copy, Check, Send, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 400);
  };

  return (
    <section id="contact" className="section-anchor contact-section editorial-border-t py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Matching Reference Site) */}
        <div className="max-w-[540px]">
          <h2 className="section-headline">
            Let’s build<br />
            <span>something useful</span>
          </h2>
          <p className="mt-4 max-w-[460px] text-sm leading-6 text-[var(--text-secondary)]">
            Have an engineering challenge, an autonomous agent pipeline to build, or an AI role to discuss? I’m always open to new collaborations and conversations.
          </p>
        </div>

        {/* Two-Column Grid: Direct Info / Socials (Left) + Contact Form (Right) */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          
          {/* Left Column: Direct Email & Elsewhere Channels */}
          <div className="space-y-8">
            
            {/* Direct Section */}
            <div className="border-t border-current/20 pt-5">
              <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[var(--text-secondary)] opacity-70">
                Direct
              </div>

              <div className="mt-4 grid gap-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[var(--text-secondary)] opacity-70">
                    Email
                  </div>
                  <div className="mt-1.5 flex items-center gap-3">
                    <a
                      className="text-sm font-mono font-bold text-[var(--text-primary)] hover:underline hover:text-indigo-400"
                      href={`mailto:${CANDIDATE_INFO.email}`}
                    >
                      {CANDIDATE_INFO.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-2 py-0.5 rounded text-[10px] font-mono editorial-border text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                    >
                      {copiedEmail ? <span className="text-emerald-400 font-bold">Copied</span> : 'Copy'}
                    </button>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[var(--text-secondary)] opacity-70">
                    Availability
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    Available immediately for full-time roles, remote positions, and AI engineering opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Elsewhere Channels with Logos & Resume */}
            <nav className="border-t border-current/20 pt-5" aria-label="Contact channels">
              <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[var(--text-secondary)] opacity-70">
                Elsewhere & Profiles
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                {/* LinkedIn with Logo */}
                <a
                  href={CANDIDATE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3 py-2 rounded bg-[var(--bg-surface)] editorial-border text-xs text-[var(--text-primary)] hover:border-[#0A66C2]/60 transition-colors"
                >
                  <svg className="h-4 w-4 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                  <span className="font-medium group-hover:underline">LinkedIn</span>
                </a>

                {/* GitHub with Logo */}
                <a
                  href={CANDIDATE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3 py-2 rounded bg-[var(--bg-surface)] editorial-border text-xs text-[var(--text-primary)] hover:border-indigo-400/60 transition-colors"
                >
                  <svg className="h-4 w-4 text-[var(--text-primary)]" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="font-medium group-hover:underline">GitHub</span>
                </a>

                {/* Resume next to them */}
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="group inline-flex items-center gap-2 px-3 py-2 rounded bg-[var(--bg-surface)] editorial-border text-xs text-[var(--text-primary)] hover:border-indigo-400/60 transition-colors cursor-pointer"
                >
                  <span className="text-indigo-400 font-bold">PDF</span>
                  <span className="font-medium group-hover:underline">Resume / CV</span>
                </button>
              </div>
            </nav>

          </div>

          {/* Right Column: Clean Inline Contact Form */}
          <div className="border-t border-current/20 pt-5">
            <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[var(--text-secondary)] opacity-70 mb-4">
              Send Message
            </div>

            {sent ? (
              <div className="p-6 rounded bg-[var(--bg-surface)] editorial-border text-center space-y-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                  ✓
                </div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">Message Sent</h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Thank you. Mohamed will review your message and reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Smith"
                      className="w-full rounded bg-[var(--bg-surface)] editorial-border px-3.5 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full rounded bg-[var(--bg-surface)] editorial-border px-3.5 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Project requirements, role discussion, or general inquiry..."
                    className="w-full rounded bg-[var(--bg-surface)] editorial-border p-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 font-mono resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded bg-indigo-600 hover:bg-indigo-700 px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white transition-colors disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
