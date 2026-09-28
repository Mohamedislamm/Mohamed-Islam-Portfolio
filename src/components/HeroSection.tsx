import React, { useState, useEffect } from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { ArrowDown, Terminal, FileText, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleCopyCli = () => {
    navigator.clipboard.writeText('npx mohamed-islamm-showcase');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Subtle cyclic animation for pipeline flow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const pipelineStages = [
    { label: 'Perception', desc: 'Screen / Data Stream' },
    { label: 'Agent Core', desc: 'LLM Reasoning & RAG' },
    { label: 'Sandbox', desc: 'Verified Execution' },
  ];

  return (
    <section id="top" className="section-anchor max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-[1.1fr_.9fr] items-center gap-12 lg:gap-14">
      
      {/* Left Column: Heading, Role, Value Proposition & Action Links */}
      <div className="space-y-8">
        
        {/* Massive Bold Split Display Heading */}
        <div className="hero-copy">
          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.88] m-0 text-[var(--text-primary)]">
            <span className="block">MOHAMED</span>
            <span className="block text-indigo-500">ISLAM KHALED</span>
          </h1>
        </div>

        {/* Role & Concise Value Proposition */}
        <div className="max-w-[500px] space-y-3.5 text-[15px] sm:text-[16px] leading-7 text-[var(--text-secondary)]">
          <strong className="font-mono block text-[11px] sm:text-[12px] uppercase tracking-[.18em] text-[var(--text-primary)]">
            AI / ML ENGINEER & FRONTEND DEVELOPER
          </strong>
          <p>
            Building autonomous AI agents, production RAG pipelines, and high-performance web systems using Python, React, and FastAPI.
          </p>
        </div>

        {/* Action & Social Cluster: Work CTA + GitHub + LinkedIn + Resume */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {/* Work Button */}
          <button
            type="button"
            onClick={() => scrollTo('#projects')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] sm:text-[12px] font-mono font-bold uppercase tracking-[.18em] transition-all cursor-pointer shadow-xs hover:scale-[1.01]"
          >
            <span>View Work</span>
            <ArrowDown className="h-3.5 w-3.5" />
          </button>

          {/* Social Logos & Resume cluster */}
          <div className="flex items-center gap-2 p-1 rounded editorial-border bg-[var(--bg-surface)]">
            {/* GitHub Logo */}
            <a
              href={CANDIDATE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded hover:bg-current/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn Logo */}
            <a
              href={CANDIDATE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded hover:bg-current/10 text-[var(--text-secondary)] hover:text-[#0A66C2] transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </a>

            {/* Resume Button right next to logos */}
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded text-[11px] font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-current/10 transition-colors cursor-pointer"
              title="View & Download Resume"
            >
              <FileText className="h-3.5 w-3.5 text-indigo-500" />
              <span>Resume</span>
            </button>
          </div>
        </div>

      </div>

      {/* Right Column: CLEAN & MINIMAL SYSTEM ARCHITECTURE */}
      <div className="relative">
        <div className="editorial-card p-6 sm:p-7 rounded-xl space-y-6 shadow-sm">
          
          {/* Header & Status Indicator */}
          <div className="flex items-center justify-between pb-4 border-b border-current/10 font-mono text-xs">
            <span className="font-bold tracking-wider text-[var(--text-primary)]">
              SYSTEM ARCHITECTURE
            </span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] text-emerald-500 font-medium">Online</span>
            </div>
          </div>

          {/* Minimal 3-Stage Pipeline Flow */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center font-mono">
              {pipelineStages.map((stage, idx) => (
                <div
                  key={stage.label}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    activeStep === idx
                      ? 'border-indigo-500 bg-indigo-500/10 text-[var(--text-primary)] shadow-xs scale-[1.02]'
                      : 'border-current/10 bg-[var(--bg-main)] text-[var(--text-secondary)] opacity-80'
                  }`}
                >
                  <div className="text-[10px] font-bold text-indigo-400 mb-1">0{idx + 1}</div>
                  <div className="text-xs font-semibold truncate text-[var(--text-primary)]">{stage.label}</div>
                  <div className="text-[10px] opacity-60 truncate mt-0.5">{stage.desc}</div>
                </div>
              ))}
            </div>

            {/* Connecting Flow Indicator */}
            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[var(--text-secondary)] opacity-60 pt-1">
              <span>Perception</span>
              <ArrowRight className="h-3 w-3" />
              <span>Reasoning</span>
              <ArrowRight className="h-3 w-3" />
              <span>Action</span>
            </div>
          </div>

          {/* Clean Metric Baseline */}
          <div className="grid grid-cols-3 gap-3 pt-1 border-t border-current/10 font-mono text-center">
            <div className="p-2 rounded bg-[var(--bg-main)] editorial-border">
              <div className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] opacity-70">Latency</div>
              <div className="text-xs font-bold text-[var(--text-primary)] mt-0.5">~24ms</div>
            </div>
            <div className="p-2 rounded bg-[var(--bg-main)] editorial-border">
              <div className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] opacity-70">Precision</div>
              <div className="text-xs font-bold text-emerald-400 mt-0.5">99.8%</div>
            </div>
            <div className="p-2 rounded bg-[var(--bg-main)] editorial-border">
              <div className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] opacity-70">Sandbox</div>
              <div className="text-xs font-bold text-indigo-400 mt-0.5">Docker</div>
            </div>
          </div>

          {/* Terminal Quick Runner with one-click copy */}
          <div className="pt-1">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-main)] editorial-border text-[11px] font-mono">
              <div className="flex items-center gap-2 text-[var(--text-secondary)] overflow-hidden">
                <Terminal className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                <span className="text-slate-500">$</span>
                <span className="text-[var(--text-primary)] truncate font-medium">npx mohamed-islamm-showcase</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCli}
                className="ml-2 px-2.5 py-1 rounded text-[10px] uppercase font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-current/10 transition-colors cursor-pointer shrink-0"
                title="Copy Command"
              >
                {copiedCmd ? <span className="text-emerald-400 font-bold">Copied</span> : 'Copy'}
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
