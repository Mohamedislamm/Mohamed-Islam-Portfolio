import React, { useState, useRef } from 'react';
import { SHOWCASE_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { TechLogo } from './TechLogos';
import { ChevronLeft, ChevronRight, ArrowUpRight, Play, Terminal, Layers } from 'lucide-react';

interface ShowcaseLibraryProps {
  onSelectProject: (project: Project) => void;
}

export const ShowcaseLibrary: React.FC<ShowcaseLibraryProps> = ({ onSelectProject }) => {
  const [viewMode, setViewMode] = useState<'rail' | 'simulators'>('rail');
  const [activeSim, setActiveSim] = useState<string>('notive-computer-use');

  // Rail scroll ref
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: 'left' | 'right') => {
    if (railRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      railRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Interactive Simulator States
  const [notiveTask, setNotiveTask] = useState('Extract table data from desktop PDF and export to structured JSON');
  const [notiveRunning, setNotiveRunning] = useState(false);
  const [notiveSteps, setNotiveSteps] = useState([
    { step: 1, action: 'Perception Loop', target: 'Captured 1920x1080 desktop frame via Claude 3.5 Sonnet' },
    { step: 2, action: 'Coordinate Mapping', target: 'Identified target PDF window coordinates (x: 420, y: 310)' },
    { step: 3, action: 'Docker Emulation', target: 'Dispatched keyboard shortcut [Ctrl+P] in sandbox' },
  ]);

  const [adkTarget, setAdkTarget] = useState<'cli' | 'web' | 'api'>('cli');
  const [adkPrompt, setAdkPrompt] = useState('Analyze monthly revenue metrics and summarize top growth sectors');
  const [adkResult, setAdkResult] = useState<string | null>(null);
  const [adkRunning, setAdkRunning] = useState(false);

  const [tetrisWeights, setTetrisWeights] = useState({ height: -0.51, holes: -0.36, lines: 0.76 });

  const runNotive = () => {
    setNotiveRunning(true);
    setTimeout(() => {
      setNotiveSteps([
        { step: 1, action: 'Perception Scan', target: 'Parsed desktop window hierarchy via Claude 3.5 Sonnet' },
        { step: 2, action: 'Coordinate Mapping', target: 'Target located at (x: 512, y: 280)' },
        { step: 3, action: 'Docker Emulation', target: 'Simulated click dispatched inside container' },
        { step: 4, action: 'Data Extraction', target: 'Extracted 14 invoice rows into structured JSON' },
        { step: 5, action: 'Complete', target: 'Target table synchronized with zero errors' },
      ]);
      setNotiveRunning(false);
    }, 600);
  };

  const runAdk = () => {
    setAdkRunning(true);
    setAdkResult(null);
    setTimeout(() => {
      setAdkRunning(false);
      if (adkTarget === 'cli') {
        setAdkResult(`[adk run] Initialized Runner with Gemini 2.5 Flash
Session ID: session-2026-cairo
> Calling Tool: fetch_enterprise_metrics(year=2026)
> Output: Identified 38.5% YoY revenue expansion in Cloud & AI services.
> InMemorySessionService updated: 4 turns recorded.`);
      } else if (adkTarget === 'web') {
        setAdkResult(`[adk web] UI Session Active on port 8080.
Agent Response: "Based on verified financial records, Cloud & AI services generated $4.2M in Q3 with an operating margin of 31.4%."`);
      } else {
        setAdkResult(`[adk api_server] POST /api/v1/agent/execute - 200 OK (184ms)
{
  "status": "success",
  "model": "gemini-2.5-flash",
  "tool_calls_executed": 1,
  "response": "Identified 38.5% YoY revenue growth in Cloud & AI."
}`);
      }
    }, 450);
  };

  return (
    <section id="projects" className="section-anchor editorial-border-t py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header with Rail Controls */}
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="section-headline">
              A few things<br />
              <span>I’ve made.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 p-1 rounded bg-[var(--bg-surface)] editorial-border text-[11px] font-mono">
              <button
                onClick={() => setViewMode('rail')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  viewMode === 'rail' ? 'bg-indigo-600 text-white font-bold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Project Rail
              </button>
              <button
                onClick={() => setViewMode('simulators')}
                className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                  viewMode === 'simulators' ? 'bg-indigo-600 text-white font-bold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                Simulators
              </button>
            </div>

            {/* Previous / Next Rail Controls */}
            {viewMode === 'rail' && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollRail('left')}
                  className="p-2 rounded editorial-border text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-current/40 transition-colors cursor-pointer"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollRail('right')}
                  className="p-2 rounded editorial-border text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-current/40 transition-colors cursor-pointer"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 1. HORIZONTAL PROJECT RAIL (As in uploaded sharara.me) */}
        {viewMode === 'rail' && (
          <div
            ref={railRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar snap-x snap-mandatory"
            role="region"
            aria-label="Projects, scroll sideways"
            tabIndex={0}
          >
            {SHOWCASE_PROJECTS.map((project) => (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="editorial-card rounded-lg p-5 flex flex-col justify-between shrink-0 w-[320px] sm:w-[380px] snap-start cursor-pointer group"
                tabIndex={0}
                role="button"
                aria-label={`Open ${project.title} project details`}
              >
                <div>
                  {/* Aspect-[2/1] Visual Showcase Container */}
                  <div className="relative aspect-[2/1] w-full overflow-hidden rounded bg-[var(--bg-main)] editorial-border p-4 flex flex-col justify-between font-mono text-[11px] text-[var(--text-secondary)]">
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold text-indigo-400">
                      <span>{project.badge || project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <div className="text-[var(--text-primary)] font-semibold line-clamp-2">
                      {project.metrics[0]?.label}: {project.metrics[0]?.value}
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-secondary)] overflow-hidden">
                      <span className="shrink-0 opacity-70">Stack:</span>
                      <div className="flex items-center gap-2 truncate">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="inline-flex items-center gap-1">
                            <TechLogo name={tech} className="h-3 w-3 shrink-0" />
                            <span className="truncate">{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl mt-4 leading-tight text-[var(--text-primary)] group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="h-[1px] w-full bg-current/10 my-3"></div>

                  <p className="text-[14px] leading-6 text-[var(--text-secondary)] line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Open Project CTA Button (Matching Reference) */}
                <div className="pt-4 mt-6">
                  <span className="font-mono flex items-center justify-center gap-2 editorial-border py-2 text-[10px] uppercase tracking-[.15em] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] group-hover:border-current/40 transition-colors">
                    <span>Open project</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* 2. INTERACTIVE SIMULATORS VIEW */}
        {viewMode === 'simulators' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-current/10">
              {[
                { id: 'notive-computer-use', label: 'Notive AI Agent' },
                { id: 'google-adk-agents', label: 'Google ADK Agent' },
                { id: 'tetris-ai', label: 'Tetris AI Heuristics' },
              ].map((sim) => (
                <button
                  key={sim.id}
                  onClick={() => setActiveSim(sim.id)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer ${
                    activeSim === sim.id
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'editorial-border text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {sim.label}
                </button>
              ))}
            </div>

            {/* Sim 1: Notive CUA */}
            {activeSim === 'notive-computer-use' && (
              <div className="editorial-card p-6 rounded-lg space-y-4 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-current/10">
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] text-sm">Notive — Claude 3.5 Sonnet Computer Use Agent</h3>
                    <p className="text-[var(--text-secondary)] text-[11px] mt-0.5">Executes multi-step desktop workflows safely in Docker sandboxes.</p>
                  </div>
                  <button
                    onClick={runNotive}
                    disabled={notiveRunning}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] uppercase font-bold cursor-pointer disabled:opacity-50"
                  >
                    <Play className="h-3 w-3" />
                    <span>{notiveRunning ? 'Executing...' : 'Run Simulation'}</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-[var(--text-secondary)] block">Instruction</label>
                  <input
                    type="text"
                    value={notiveTask}
                    onChange={(e) => setNotiveTask(e.target.value)}
                    className="w-full rounded bg-[var(--bg-main)] editorial-border px-3 py-2 text-[var(--text-primary)] focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="rounded bg-[var(--bg-main)] p-4 space-y-2 editorial-border">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Execution Logs</div>
                  {notiveSteps.map((st) => (
                    <div key={st.step} className="flex items-start gap-2 text-[11px]">
                      <span className="text-slate-500">[{st.step}]</span>
                      <span className="text-indigo-400 font-semibold">{st.action}:</span>
                      <span className="text-[var(--text-secondary)]">{st.target}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sim 2: Google ADK */}
            {activeSim === 'google-adk-agents' && (
              <div className="editorial-card p-6 rounded-lg space-y-4 font-mono text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-current/10">
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] text-sm">Google Agent Development Kit (google-adk)</h3>
                    <p className="text-[var(--text-secondary)] text-[11px] mt-0.5">Multi-target autonomous AI agents built with Gemini 2.5 Flash.</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {(['cli', 'web', 'api'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setAdkTarget(t)}
                        className={`px-2.5 py-1 rounded uppercase text-[10px] font-bold cursor-pointer ${
                          adkTarget === t ? 'bg-indigo-600 text-white' : 'editorial-border text-[var(--text-secondary)]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={adkPrompt}
                      onChange={(e) => setAdkPrompt(e.target.value)}
                      className="flex-1 rounded bg-[var(--bg-main)] editorial-border px-3 py-2 text-[var(--text-primary)] focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      onClick={runAdk}
                      disabled={adkRunning}
                      className="px-4 py-2 rounded bg-indigo-600 text-white font-bold cursor-pointer disabled:opacity-50"
                    >
                      {adkRunning ? 'Executing...' : 'Run'}
                    </button>
                  </div>

                  {adkResult && (
                    <div className="rounded bg-[var(--bg-main)] p-4 text-[11px] text-[var(--text-primary)] whitespace-pre-wrap leading-relaxed editorial-border">
                      {adkResult}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Sim 3: Tetris AI */}
            {activeSim === 'tetris-ai' && (
              <div className="editorial-card p-6 rounded-lg space-y-4 font-mono text-xs">
                <div className="pb-3 border-b border-current/10">
                  <h3 className="font-bold text-[var(--text-primary)] text-sm">Tetris AI — Genetic Algorithm Heuristics</h3>
                  <p className="text-[var(--text-secondary)] text-[11px] mt-0.5">Tune weights evolved across simulated board states to maximize line clears.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span>Height Weight:</span>
                        <span className="font-bold">{tetrisWeights.height}</span>
                      </div>
                      <input
                        type="range"
                        min="-1"
                        max="0"
                        step="0.01"
                        value={tetrisWeights.height}
                        onChange={(e) => setTetrisWeights({ ...tetrisWeights, height: parseFloat(e.target.value) })}
                        className="w-full accent-indigo-500"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span>Holes Penalty:</span>
                        <span className="font-bold">{tetrisWeights.holes}</span>
                      </div>
                      <input
                        type="range"
                        min="-1"
                        max="0"
                        step="0.01"
                        value={tetrisWeights.holes}
                        onChange={(e) => setTetrisWeights({ ...tetrisWeights, holes: parseFloat(e.target.value) })}
                        className="w-full accent-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="rounded bg-[var(--bg-main)] p-4 space-y-2 editorial-border text-[11px]">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Telemetry</div>
                    <div className="flex justify-between">
                      <span>Convergence:</span>
                      <span className="text-emerald-400 font-bold">Gen 45 (Optimal)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg Cleared Lines:</span>
                      <span className="font-bold">&gt;10,000 Lines</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
