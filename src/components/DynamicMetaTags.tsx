import React, { useEffect } from 'react';
import { Project } from '../types';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface DynamicMetaTagsProps {
  project: Project | null;
}

export const DynamicMetaTags: React.FC<DynamicMetaTagsProps> = ({ project }) => {
  useEffect(() => {
    const defaultTitle = `${CANDIDATE_INFO.name} | AI/ML Engineer & Frontend Developer`;
    const defaultDescription = `${CANDIDATE_INFO.name} — AI graduate from Cairo University specializing in autonomous AI agents (Google ADK & Claude Computer Use), vector retrieval (RAG), and full-stack web applications.`;

    if (project) {
      const projectTitle = `${project.title} — ${CANDIDATE_INFO.name}`;
      const projectDescription = `${project.tagline} Built using ${project.techStack.slice(0, 4).join(', ')}.`;

      document.title = projectTitle;

      // Update meta description
      updateMetaTag('name', 'description', projectDescription);
      updateMetaTag('property', 'og:title', projectTitle);
      updateMetaTag('property', 'og:description', projectDescription);
      updateMetaTag('name', 'twitter:title', projectTitle);
      updateMetaTag('name', 'twitter:description', projectDescription);
    } else {
      document.title = defaultTitle;
      updateMetaTag('name', 'description', defaultDescription);
      updateMetaTag('property', 'og:title', defaultTitle);
      updateMetaTag('property', 'og:description', defaultDescription);
      updateMetaTag('name', 'twitter:title', defaultTitle);
      updateMetaTag('name', 'twitter:description', defaultDescription);
    }
  }, [project]);

  return null;
};

function updateMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}
