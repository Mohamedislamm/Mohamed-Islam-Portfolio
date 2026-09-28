import React, { useState } from 'react';
import { CANDIDATE_INFO, SHOWCASE_PROJECTS, EXPERIENCES, CERTIFICATIONS, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Download, Printer, Copy, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const resumeText = `# ${CANDIDATE_INFO.name}
**${CANDIDATE_INFO.role}**
- Location: ${CANDIDATE_INFO.location}
- Email: ${CANDIDATE_INFO.email}
- LinkedIn: ${CANDIDATE_INFO.linkedin}
- GitHub: ${CANDIDATE_INFO.github}
- Military Status: ${CANDIDATE_INFO.militaryStatus}

---

## EDUCATION
**${EDUCATION.degree}**
*${EDUCATION.institution} — ${EDUCATION.faculty}* (${EDUCATION.period})
- Coursework: ${EDUCATION.relevantCoursework.join(', ')}

---

## PROFESSIONAL EXPERIENCE
${EXPERIENCES.map((exp) => `### ${exp.role} — ${exp.company}
*${exp.location} | ${exp.period}*
${exp.highlights.map((h) => `- ${h}`).join('\n')}
**Stack:** ${exp.skills.join(', ')}
`).join('\n')}

---

## FEATURED PROJECTS
${SHOWCASE_PROJECTS.map((proj) => `### ${proj.title} (${proj.year})
*${proj.tagline}*
- ${proj.shortDescription}
- **Metrics:** ${proj.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
- **Technologies:** ${proj.techStack.join(', ')}
- **GitHub:** ${proj.githubUrl}
`).join('\n')}

---

## TECHNICAL SKILLS
${SKILL_CATEGORIES.map((cat) => `- **${cat.title}:** ${cat.skills.map((s) => s.name).join(', ')}`).join('\n')}

---

## CERTIFICATIONS
${CERTIFICATIONS.map((cert) => `- **${cert.title}:** ${cert.issuer} (${cert.period})`).join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Mohamed_Islam_Khaled_CV.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyPlainText = () => {
    const plain = `${CANDIDATE_INFO.name} - ${CANDIDATE_INFO.role}
Email: ${CANDIDATE_INFO.email} | Location: ${CANDIDATE_INFO.location}
LinkedIn: ${CANDIDATE_INFO.linkedin} | GitHub: ${CANDIDATE_INFO.github}

Education:
${EDUCATION.degree}, ${EDUCATION.institution} (${EDUCATION.period})

Experience:
${EXPERIENCES.map((e) => `${e.role} at ${e.company} (${e.period}): ${e.highlights.join('; ')}`).join('\n\n')}

Skills:
${SKILL_CATEGORIES.map((c) => `${c.title}: ${c.skills.map((s) => s.name).join(', ')}`).join('\n')}`;

    navigator.clipboard.writeText(plain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[var(--bg-surface)] editorial-border rounded-lg p-6 sm:p-8 space-y-6 text-[var(--text-primary)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Floating Top Bar Controls */}
        <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 bg-[var(--bg-surface)]/95 backdrop-blur-xs pb-3 border-b border-current/15 -mt-2">
          <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
            MOHAMED ISLAM KHALED · TECHNICAL RESUME
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--bg-main)] editorial-border hover:border-current/40 transition-colors cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--bg-main)] editorial-border hover:border-current/40 transition-colors cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Markdown</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div id="printable-resume" className="space-y-6 font-sans text-xs">
          
          {/* Header */}
          <div className="border-b border-current/15 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <h1 className="font-display text-xl font-bold text-[var(--text-primary)]">{CANDIDATE_INFO.name}</h1>
              <p className="text-xs font-medium text-indigo-400">{CANDIDATE_INFO.role}</p>
            </div>
            <div className="font-mono text-[11px] text-[var(--text-secondary)] sm:text-right">
              <div>{CANDIDATE_INFO.email}</div>
              <div>{CANDIDATE_INFO.location}</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h2 className="font-mono text-[11px] uppercase font-bold tracking-wider text-[var(--text-secondary)] opacity-70">Education</h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-[var(--text-primary)]">{EDUCATION.degree} — {EDUCATION.institution}</span>
              <span className="font-mono text-[11px] text-[var(--text-secondary)]">{EDUCATION.period}</span>
            </div>
            <div className="text-[var(--text-secondary)]">{EDUCATION.faculty}, Giza, Egypt</div>
            <div className="text-[var(--text-secondary)] text-[11px]">
              <strong>Coursework:</strong> {EDUCATION.relevantCoursework.join(', ')}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase font-bold tracking-wider text-[var(--text-secondary)] opacity-70">Professional Experience</h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-[var(--text-primary)]">{exp.role} — {exp.company}</span>
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-0.5 leading-relaxed">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="text-[11px] font-mono text-[var(--text-secondary)] opacity-80">
                  Stack: {exp.skills.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="font-mono text-[11px] uppercase font-bold tracking-wider text-[var(--text-secondary)] opacity-70">Selected Projects</h2>
            {SHOWCASE_PROJECTS.slice(0, 4).map((p) => (
              <div key={p.id} className="space-y-0.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-[var(--text-primary)]">{p.title}</span>
                  <span className="font-mono text-[11px] text-[var(--text-secondary)]">{p.year}</span>
                </div>
                <p className="text-[var(--text-secondary)]">{p.shortDescription}</p>
                <div className="text-[11px] font-mono text-[var(--text-secondary)] opacity-80">
                  {p.techStack.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="font-mono text-[11px] uppercase font-bold tracking-wider text-[var(--text-secondary)] opacity-70">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-[var(--text-secondary)]">
              {SKILL_CATEGORIES.map((c) => (
                <div key={c.title}>
                  <strong className="text-[var(--text-primary)]">{c.title}:</strong>{' '}
                  {c.skills.map((s) => s.name).join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="font-mono text-[11px] uppercase font-bold tracking-wider text-[var(--text-secondary)] opacity-70">Certifications</h2>
            <div className="space-y-1 text-[var(--text-secondary)]">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="flex justify-between items-baseline font-mono text-[11px]">
                  <span>{c.title} — {c.issuer}</span>
                  <span className="opacity-70">{c.period}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
