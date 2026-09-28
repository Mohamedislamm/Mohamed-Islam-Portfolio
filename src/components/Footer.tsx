import React from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-border-t py-12 bg-[var(--bg-main)] font-mono text-xs text-[var(--text-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-display font-bold text-sm text-[var(--text-primary)]">
              {CANDIDATE_INFO.name}
            </span>
            <div className="text-[11px] opacity-70">
              AI / ML Engineer & Frontend Developer · Cairo University '26
            </div>
          </div>

          {/* Social logos + Resume right next to them + Back to top */}
          <div className="flex items-center gap-4 text-xs">
            {/* LinkedIn Logo */}
            <a
              href={CANDIDATE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors"
              title="LinkedIn Profile"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* GitHub Logo */}
            <a
              href={CANDIDATE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors"
              title="GitHub Profile"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            {/* Resume button right next to them */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              <FileText className="h-3 w-3 text-indigo-400" />
              <span>Resume</span>
            </button>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-1.5 rounded editorial-border text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-current/40 transition-colors cursor-pointer ml-1"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] opacity-60">
          <div>© {new Date().getFullYear()} Mohamed Islam Khaled. All rights reserved.</div>
          <div>Built with React, TypeScript & Tailwind CSS</div>
        </div>

      </div>
    </footer>
  );
};
