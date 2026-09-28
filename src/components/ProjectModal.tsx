import React, { useState } from 'react';
import { Project } from '../types';
import { TechLogo } from './TechLogos';
import { X, Github, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.sampleCodeSnippet) {
      navigator.clipboard.writeText(project.sampleCodeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-surface)] editorial-border rounded-lg p-6 sm:p-8 space-y-6 text-[var(--text-primary)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-current/15">
          <div className="space-y-1">
            <div className="text-xs font-mono text-[var(--text-secondary)]">
              <span>{project.category}</span>
              <span aria-hidden="true"> · </span>
              <span>{project.year}</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="text-xs text-[var(--text-secondary)] font-mono">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded editorial-border text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded bg-[var(--bg-main)] editorial-border text-xs font-mono">
              <div className="text-[10px] uppercase text-[var(--text-secondary)] font-semibold">{m.label}</div>
              <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Overview Description */}
        <div className="space-y-1">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">Architecture Overview</h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded bg-[var(--bg-main)] editorial-border space-y-1">
            <span className="font-mono text-[10px] uppercase font-bold text-[var(--text-secondary)]">Challenge</span>
            <p className="text-[var(--text-secondary)] leading-relaxed">{project.architectureDetails.problem}</p>
          </div>

          <div className="p-3.5 rounded bg-[var(--bg-main)] editorial-border space-y-1">
            <span className="font-mono text-[10px] uppercase font-bold text-indigo-400">Engineering Solution</span>
            <p className="text-[var(--text-secondary)] leading-relaxed">{project.architectureDetails.solution}</p>
          </div>
        </div>

        {/* Key Engineering Innovations */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">Key Engineering Innovations</h3>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] list-disc list-inside">
            {project.architectureDetails.keyInnovations.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Code Snippet */}
        {project.sampleCodeSnippet && (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
              <span>{project.sampleCodeSnippet.filename}</span>
              <button
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 hover:text-[var(--text-primary)] cursor-pointer text-[11px]"
              >
                {copiedCode ? <span className="text-emerald-400 font-bold">Copied</span> : <span>Copy Code</span>}
              </button>
            </div>
            <pre className="p-3.5 rounded bg-[var(--bg-main)] editorial-border text-[var(--text-primary)] text-xs font-mono overflow-x-auto leading-relaxed">
              <code>{project.sampleCodeSnippet.code}</code>
            </pre>
          </div>
        )}

        {/* Tech Stack with logos */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)]">Technologies & Libraries</span>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {project.techStack.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[var(--bg-main)] editorial-border text-xs font-mono text-[var(--text-primary)]">
                <TechLogo name={tech} className="h-3.5 w-3.5" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-current/15 flex items-center justify-between gap-3 text-xs font-mono">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-indigo-400 font-medium"
          >
            <Github className="h-4 w-4" />
            <span>Inspect on GitHub</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
