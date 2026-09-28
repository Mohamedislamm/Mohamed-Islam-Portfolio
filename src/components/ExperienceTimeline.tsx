import React from 'react';
import { EXPERIENCES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';
import { Award, GraduationCap, Briefcase } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="section-anchor editorial-border-t py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div>
          <h2 className="section-headline">
            The record<br />
            <span>I’m building.</span>
          </h2>
          <p className="mt-4 max-w-[480px] text-sm leading-6 text-[var(--text-secondary)]">
            The engineering milestones, production internships, and rigorous academic foundation at Cairo University.
          </p>
        </div>

        {/* Experience Subheading */}
        <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[var(--text-secondary)] opacity-80 flex items-center gap-2">
          <Briefcase className="h-3 w-3 text-indigo-400" />
          <span>Experience & Education</span>
        </div>

        {/* Chronological Divided Rows */}
        <div className="divide-y divide-current/15 border-y border-current/15">
          
          {/* Cairo University AI */}
          <div className="grid gap-2 py-6 sm:grid-cols-[.28fr_.72fr]">
            <div className="font-mono text-[11px] font-medium uppercase leading-5 tracking-[.13em] text-[var(--text-secondary)]">
              {EDUCATION.period}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-indigo-400" />
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                  {EDUCATION.degree}
                </h3>
              </div>
              <p className="mt-1.5 max-w-[540px] text-sm leading-6 text-[var(--text-secondary)]">
                {EDUCATION.institution} — {EDUCATION.faculty}. Enrolled on an advanced artificial intelligence track with coursework in Machine Learning, Deep Learning, NLP, and Information Retrieval.
              </p>
            </div>
          </div>

          {/* Internships & Roles */}
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="grid gap-2 py-6 sm:grid-cols-[.28fr_.72fr]">
              <div className="font-mono text-[11px] font-medium uppercase leading-5 tracking-[.13em] text-[var(--text-secondary)]">
                {exp.period}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                  {exp.role} — <span className="text-indigo-400">{exp.company}</span>
                </h3>
                <p className="mt-1.5 max-w-[540px] text-sm leading-6 text-[var(--text-secondary)]">
                  {exp.highlights.join(' ')}
                </p>
                <div className="mt-2 text-[11px] font-mono text-[var(--text-secondary)] opacity-75">
                  Stack: {exp.skills.join(', ')}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Verified Achievements & Certifications (Full Grid, Clean & Authoritative) */}
        <div className="space-y-4 pt-4">
          <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[var(--text-secondary)] opacity-80 flex items-center gap-2">
            <Award className="h-3.5 w-3.5 text-indigo-400" />
            <span>Verified Credentials & Certifications</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div 
                key={cert.id} 
                className="p-5 rounded-lg bg-[var(--bg-surface)] editorial-border space-y-2 hover:border-indigo-400/40 transition-colors"
              >
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                    {cert.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[var(--text-secondary)] shrink-0">
                    {cert.period}
                  </span>
                </div>
                <div className="text-xs text-indigo-400 font-mono font-medium">
                  {cert.issuer}
                </div>
                <p className="text-xs leading-5 text-[var(--text-secondary)]">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
