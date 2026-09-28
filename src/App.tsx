/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DynamicMetaTags } from './components/DynamicMetaTags';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ShowcaseLibrary } from './components/ShowcaseLibrary';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Default to dark mode
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Synchronize dark/light class with root html element & persist to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.dataset.theme = 'dark';
      root.style.colorScheme = 'dark';
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.dataset.theme = 'light';
      root.style.colorScheme = 'light';
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-200">
      
      {/* Dynamic SEO Meta Tag Updater */}
      <DynamicMetaTags project={selectedProject} />

      {/* Progress indicator */}
      <ScrollProgress />

      {/* 1. Header Navigation with Logos, Resume Button, and Dynamic Dark Mode Switch */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        {/* 2. Editorial Hero Section with Logos, Resume Button, and Cooler System Architecture */}
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 3. Selected Works / Projects Rail with Tech Logos */}
        <ShowcaseLibrary onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 4. Tech Stack with Official Tech Logos & Real-Time GitHub Activity */}
        <SkillsSection />

        {/* 5. Career Record & Academic Milestones (Curriculum Vitae section removed) */}
        <ExperienceTimeline />

        {/* 6. Contact & Direct Inquiries with Logos & Resume */}
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* 7. Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Project Deep-Dive Modal with Tech Logos */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
