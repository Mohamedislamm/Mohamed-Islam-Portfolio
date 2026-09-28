import React, { useState, useEffect } from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { ArrowDown, Terminal, Copy, Check, FileText, Activity, Cpu, Database, Network, Play } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [activeArchMode, setActiveArchMode] = useState<'agent' | 'rag' | 'adk'>('agent');
  const [activeNode, setActiveNode] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [pingCount, setPingCount] = useState<number>(24);

  const handleCopyCli = () => {
    navigator.clipboard.writeText('npx mohamed-islamm-showcase');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Automated gentle pulse for architecture node
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev % 4) + 1);
      setPingCount((prev) => 20 + Math.floor(Math.random() * 12));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const triggerSimulation = () => {
    setIsSimulating(true);
    let step = 1;
    setActiveNode(step);
    const simInterval = setInterval(() => {
      step += 1;
      if (step > 4) {
        clearInterval(simInterval);
        setIsSimulating(false);
        setActiveNode(4);
      } else {
        setActiveNode(step);
      }
    }, 450);
  };

  const archModes = [
    { id: 'agent', label: 'Autonomous CUA' },
    { id: 'adk', label: 'Google ADK' },
    { id: 'rag', label: 'Vector RAG' },
  ];

  return (
    <section id="top" className="section-anchor max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-[1.1fr_.9fr] items-center gap-12 lg:gap-14">
      
      {/* Left Column: Name, Role Bio, Work CTA, and Social Logos + Resume cluster */}
      <div className="space-y-8">
        
        {/* Massive Bold Split Display Heading */}
        <div className="hero-copy">
          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.88] m-0 text-[var(--text-primary)]">
            <span className="block">MOHAMED</span>
            <span className="block text-indigo-500">ISLAM KHALED</span>
          </h1>
        </div>

        {/* Role & Editorial Bio */}
        <div className="max-w-[500px] space-y-4 text-[15px] sm:text-[16px] leading-7 text-[var(--text-secondary)]">
          <strong className="font-mono block text-[11px] sm:text-[12px] uppercase tracking-[.18em] text-[var(--text-primary)]">
            AI / ML ENGINEER & FRONTEND DEVELOPER
          </strong>
          <p>
            Building enterprise autonomous AI systems, vector retrieval (RAG) pipelines, and fast responsive web applications using Python, React, FastAPI, and Docker.
          </p>
        </div>

        {/* Action & Social Cluster: Work CTA + GitHub Logo + LinkedIn Logo + Resume Button right next to them */}
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

      {/* Right Column: COOLER SYSTEM ARCHITECTURE CONSOLE */}
      <div className="relative">
        <div className="editorial-card p-5 sm:p-6 rounded-lg space-y-5 shadow-sm">
          
          {/* Header & Status */}
          <div className="flex items-center justify-between pb-3.5 border-b border-current/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-indigo-500" />
              <span className="font-bold tracking-wider text-[var(--text-primary)]">SYSTEM ARCHITECTURE</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">
                {pingCount}ms · Active
              </span>
            </div>
          </div>

          {/* Architecture Pipeline Selector Tabs */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 p-0.5 rounded bg-[var(--bg-main)] editorial-border text-[10px] font-mono">
              {archModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveArchMode(mode.id as any)}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    activeArchMode === mode.id
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            {/* Signal Pulse Trigger */}
            <button
              onClick={triggerSimulation}
              disabled={isSimulating}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded editorial-border text-[10px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer disabled:opacity-50"
              title="Test packet trace"
            >
              <Play className={`h-2.5 w-2.5 ${isSimulating ? 'text-indigo-400 animate-spin' : ''}`} />
              <span>Trace Flow</span>
            </button>
          </div>

          {/* DYNAMIC COOL ARCHITECTURE SCHEMATIC DIAGRAM */}
          <div className="p-3.5 rounded bg-[var(--bg-main)] editorial-border space-y-3 font-mono text-xs">
            
            {/* Visual Node Flow Grid */}
            <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
              
              {/* Node 1: Ingestion / Perception */}
              <div 
                className={`p-2 rounded border transition-all ${
                  activeNode === 1 
                    ? 'border-indigo-500 bg-indigo-500/10 text-[var(--text-primary)] font-bold shadow-xs' 
                    : 'border-current/10 text-[var(--text-secondary)] opacity-75'
                }`}
              >
                <div className="text-indigo-400 font-bold mb-0.5">01</div>
                <div className="truncate">Perception</div>
                <div className="text-[9px] opacity-60 truncate">
                  {activeArchMode === 'agent' ? 'Desktop OCR' : activeArchMode === 'adk' ? 'Session In' : 'Query Embed'}
                </div>
              </div>

              {/* Node 2: Reasoning Core */}
              <div 
                className={`p-2 rounded border transition-all ${
                  activeNode === 2 
                    ? 'border-indigo-500 bg-indigo-500/10 text-[var(--text-primary)] font-bold shadow-xs' 
                    : 'border-current/10 text-[var(--text-secondary)] opacity-75'
                }`}
              >
                <div className="text-indigo-400 font-bold mb-0.5">02</div>
                <div className="truncate">Reasoning</div>
                <div className="text-[9px] opacity-60 truncate">
                  {activeArchMode === 'agent' ? 'Claude 3.5' : activeArchMode === 'adk' ? 'Gemini 2.5' : 'DBSCAN Rerank'}
                </div>
              </div>

              {/* Node 3: Execution / Tool Sandbox */}
              <div 
                className={`p-2 rounded border transition-all ${
                  activeNode === 3 
                    ? 'border-indigo-500 bg-indigo-500/10 text-[var(--text-primary)] font-bold shadow-xs' 
                    : 'border-current/10 text-[var(--text-secondary)] opacity-75'
                }`}
              >
                <div className="text-indigo-400 font-bold mb-0.5">03</div>
                <div className="truncate">Execution</div>
                <div className="text-[9px] opacity-60 truncate">
                  {activeArchMode === 'agent' ? 'Docker CUA' : activeArchMode === 'adk' ? 'Tool Runner' : 'Context Merge'}
                </div>
              </div>

              {/* Node 4: Verification & State */}
              <div 
                className={`p-2 rounded border transition-all ${
                  activeNode === 4 
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold shadow-xs' 
                    : 'border-current/10 text-[var(--text-secondary)] opacity-75'
                }`}
              >
                <div className="text-emerald-400 font-bold mb-0.5">04</div>
                <div className="truncate">Telemetry</div>
                <div className="text-[9px] opacity-60 truncate">State Sync</div>
              </div>

            </div>

            {/* Active Pipeline Telemetry Details */}
            <div className="p-2.5 rounded bg-[var(--bg-surface)] border border-current/10 text-[11px] space-y-1.5">
              <div className="flex justify-between items-center text-[10px] text-[var(--text-secondary)]">
                <span className="uppercase font-semibold tracking-wider text-indigo-400">
                  {activeArchMode === 'agent' && 'Pipeline: Notive Autonomous CUA'}
                  {activeArchMode === 'adk' && 'Pipeline: Google ADK Multi-Turn Engine'}
                  {activeArchMode === 'rag' && 'Pipeline: Dense Vector & Clustering Retrieval'}
                </span>
                <span className="text-emerald-400 font-bold">99.8% Ground Truth</span>
              </div>
              
              <div className="text-[var(--text-secondary)] text-[11px] leading-relaxed">
                {activeArchMode === 'agent' && (
                  <span>
                    Closed-loop screen perception with Claude 3.5 Sonnet executing verified OS keystrokes inside an isolated Docker container.
                  </span>
                )}
                {activeArchMode === 'adk' && (
                  <span>
                    Stateful multi-agent workflows using Google ADK with Gemini 2.5 Flash and in-memory persistent turn orchestration.
                  </span>
                )}
                {activeArchMode === 'rag' && (
                  <span>
                    High-dimensional text embeddings clustered via DBSCAN to eliminate hallucinated context and accelerate nearest-neighbor lookups.
                  </span>
                )}
              </div>
            </div>

            {/* Architecture Spec Attributes */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-[var(--text-secondary)] pt-1">
              <div className="flex justify-between p-1.5 rounded bg-[var(--bg-surface)] border border-current/10">
                <span>RUNTIME:</span>
                <span className="font-bold text-[var(--text-primary)]">Python 3.11 / FastAPI</span>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-[var(--bg-surface)] border border-current/10">
                <span>SANDBOX:</span>
                <span className="font-bold text-[var(--text-primary)]">Docker Alpine Linux</span>
              </div>
            </div>

          </div>

          {/* Terminal Quick Runner with instant copy */}
          <div className="pt-1">
            <div className="flex items-center justify-between p-2.5 rounded bg-[var(--bg-main)] editorial-border text-[11px] font-mono">
              <div className="flex items-center gap-2 text-[var(--text-secondary)] overflow-hidden">
                <Terminal className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                <span className="text-slate-500">$</span>
                <span className="text-[var(--text-primary)] truncate font-semibold">npx mohamed-islamm-showcase</span>
              </div>
              <button
                onClick={handleCopyCli}
                className="ml-2 px-2.5 py-1 rounded text-[10px] uppercase font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-current/10 transition-colors cursor-pointer"
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
