import React from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 hairline-b bg-[#FAF8F5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="hairline-b pb-4">
          <div className="text-xs font-mono font-semibold text-slate-500 mb-1">
            APPROACH & PROFILE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Engineering Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="panel-minimal p-6 space-y-2">
            <div className="text-xs font-mono font-bold text-blue-600">01</div>
            <h3 className="text-sm font-bold text-slate-900">Agentic Precision & Isolation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Autonomous agents require rigorous perception-to-action coordinate mapping and sandbox containment (Docker) to guarantee predictable desktop execution with zero destructive side effects.
            </p>
          </div>

          <div className="panel-minimal p-6 space-y-2">
            <div className="text-xs font-mono font-bold text-slate-900">02</div>
            <h3 className="text-sm font-bold text-slate-900">Vector Grounding & Latency</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Vector retrieval pipelines (RAG) must prioritize low query latency and high semantic fidelity. Combining spatial clustering (DBSCAN) with embedding similarity eliminates noisy duplicates.
            </p>
          </div>

          <div className="panel-minimal p-6 space-y-2">
            <div className="text-xs font-mono font-bold text-rose-600">03</div>
            <h3 className="text-sm font-bold text-slate-900">Decoupled Full-Stack Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Decoupling responsive React interfaces from asynchronous Python services (FastAPI/Flask) yields maintainable codebases that power web apps and terminal CLIs alike from unified models.
            </p>
          </div>
        </div>

        {/* Candidate Facts Ledger */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-lg bg-white border border-[#E8E3DC] text-xs font-mono">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Languages</span>
            <span className="font-semibold text-slate-900">Arabic (Native), English (Fluent)</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Military Status</span>
            <span className="font-semibold text-emerald-700">Exempt from Service</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Location & Timezone</span>
            <span className="font-semibold text-slate-900">Giza, Egypt (UTC+2)</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Availability</span>
            <span className="font-semibold text-slate-900">Immediate Full-Time</span>
          </div>
        </div>

      </div>
    </section>
  );
};
