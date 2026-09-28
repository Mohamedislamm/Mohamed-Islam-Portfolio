import React, { useState } from 'react';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md editorial-border-b bg-[var(--bg-main)]/90 transition-colors duration-200">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Brand name, LinkedIn Logo, GitHub Logo, and Resume Button next to them */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="font-display text-sm font-bold tracking-tight text-[var(--text-primary)] hover:text-indigo-500 transition-colors"
          >
            {CANDIDATE_INFO.name}
          </a>

          {/* Social Logos & Resume cluster */}
          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-current/15 text-[var(--text-secondary)]">
            {/* LinkedIn Logo */}
            <a
              href={CANDIDATE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-current/10 text-[var(--text-secondary)] hover:text-[#0A66C2] transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </a>

            {/* GitHub Logo */}
            <a
              href={CANDIDATE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded hover:bg-current/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* Resume button right next to logos */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-medium editorial-border text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-current/40 transition-colors cursor-pointer ml-1"
              title="View & Download Resume"
            >
              <FileText className="h-3 w-3 text-indigo-500" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Center: Jump Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.href)}
              className="text-[11px] font-mono font-medium uppercase tracking-[.18em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Dynamic Dark Mode Switch */}
        <div className="flex items-center gap-3">
          
          {/* Dynamic Dark Mode Switch (Tactile interactive toggle) */}
          <div className="flex items-center">
            <button
              type="button"
              role="switch"
              aria-checked={darkMode}
              onClick={() => setDarkMode((prev) => !prev)}
              className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                darkMode ? 'bg-indigo-950/80 border border-indigo-500/40' : 'bg-slate-200 border border-slate-300'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <span className="sr-only">Toggle dark mode</span>
              {/* Sliding toggle thumb */}
              <span
                className={`pointer-events-none flex h-5.5 w-5.5 items-center justify-center rounded-full shadow-sm transition-transform duration-200 ease-in-out ${
                  darkMode
                    ? 'translate-x-7 bg-indigo-600 text-amber-300'
                    : 'translate-x-0 bg-white text-indigo-600'
                }`}
              >
                {darkMode ? <Moon className="h-3 w-3 fill-current" /> : <Sun className="h-3 w-3 fill-current" />}
              </span>
            </button>

            <span className="hidden lg:inline-block ml-2 text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] select-none">
              {darkMode ? 'Dark' : 'Light'}
            </span>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden editorial-border-b bg-[var(--bg-main)] px-4 py-4 space-y-4 font-mono text-xs">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="text-left px-3 py-2 rounded editorial-border uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Socials & Resume */}
          <div className="pt-2 border-t border-current/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={CANDIDATE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded editorial-border text-[var(--text-secondary)] hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46V10.9M7.86 6.3a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
              </a>

              <a
                href={CANDIDATE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded editorial-border text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-indigo-600 text-white font-mono uppercase tracking-wider text-[11px] font-bold"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
