import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = 'h-4 w-4', size = 16 }) => {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M11.91 2C6.98 2 7.28 4.14 7.28 4.14L7.3 6.35H12V7.02H5.16S2 6.67 2 11.66C2 16.65 4.76 16.38 4.76 16.38H6.4V14.1C6.4 14.1 6.31 11.36 9.07 11.36H13.78S16.4 11.45 16.4 8.84V4.28S16.82 2 11.91 2ZM9.4 3.73C9.9 3.73 10.3 4.13 10.3 4.63C10.3 5.13 9.9 5.53 9.4 5.53C8.9 5.53 8.5 5.13 8.5 4.63C8.5 4.13 8.9 3.73 9.4 3.73Z"
          fill="#3776AB"
        />
        <path
          d="M12.09 22C17.02 22 16.72 19.86 16.72 19.86L16.7 17.65H12V16.98H18.84S22 17.33 22 12.34C22 7.35 19.24 7.62 19.24 7.62H17.6V9.9C17.6 9.9 17.69 12.64 14.93 12.64H10.22S7.6 12.55 7.6 15.16V19.72S7.18 22 12.09 22ZM14.6 20.27C14.1 20.27 13.7 19.87 13.7 19.37C13.7 18.87 14.1 18.47 14.6 18.47C15.1 18.47 15.5 18.87 15.5 19.37C15.5 19.87 15.1 20.27 14.6 20.27Z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5.5 10H11.5M8.5 10V18" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M13.5 16.5C14.2 17.5 15.5 18 16.8 17.8C18.2 17.5 18.8 16.3 18.6 15.2C18.3 13.7 16.5 13.2 15.2 12.7C13.9 12.2 13.5 11.5 13.7 10.5C13.9 9.3 15 8.6 16.5 8.7C17.7 8.8 18.5 9.4 19 10.2" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M8 11.5V17C8 17.8 7.5 18 6.5 17.8M13 16.5C13.8 17.4 15 17.8 16.2 17.5C17.4 17.2 18 16.2 17.8 15.2C17.5 13.8 15.8 13.3 14.5 12.8C13.3 12.3 12.9 11.7 13.1 10.8C13.3 9.7 14.3 9 15.6 9.1C16.6 9.2 17.4 9.7 18 10.5" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  // React
  if (normalized.includes('react')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  // Google ADK / Gemini / AI Agent
  if (normalized.includes('google') || normalized.includes('adk')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
          fill="url(#gemini-grad)"
        />
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4285F4" />
            <stop offset="0.5" stopColor="#9B72CB" />
            <stop offset="1" stopColor="#D96570" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Claude / Anthropic
  if (normalized.includes('claude') || normalized.includes('sonnet') || normalized.includes('anthropic')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#CC785C" />
        <path d="M12 5V19M5 12H19M7 7L17 17M7 17L17 7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  // LangChain
  if (normalized.includes('langchain')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00A67E" />
        <path d="M7 12L12 7L17 12L12 17L7 12Z" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
      </svg>
    );
  }

  // PyTorch
  if (normalized.includes('pytorch')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M13.5 3L11.5 5.5C14.2 6.5 16 9 16 12C16 15.9 12.9 19 9 19C7.2 19 5.5 18.3 4.2 17.1L2.8 18.5C4.5 20.1 6.6 21 9 21C14 21 18 17 18 12C18 8.2 15.8 5 13.5 3Z"
          fill="#EE4C2C"
        />
        <circle cx="15.5" cy="5.5" r="1.5" fill="#EE4C2C" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes('docker')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 13.5C3.8 17.5 7.5 20.5 12 20.5C17.5 20.5 22 16.5 22 12C20.5 12 19.5 11 19 9.5C18.5 8 16 7.5 14.5 8.5C14 7 12 7 11 8.5C8 8.5 7 10.5 6 12C5 12 3.5 12.5 3 13.5Z"
          fill="#2496ED"
        />
        <rect x="5" y="8" width="2" height="2" fill="#2496ED" />
        <rect x="8" y="8" width="2" height="2" fill="#2496ED" />
        <rect x="11" y="8" width="2" height="2" fill="#2496ED" />
        <rect x="8" y="5" width="2" height="2" fill="#2496ED" />
        <rect x="11" y="5" width="2" height="2" fill="#2496ED" />
      </svg>
    );
  }

  // FastAPI
  if (normalized.includes('fastapi')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#009688" />
        <path d="M13 4L6 14H12L11 20L18 10H12L13 4Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Django
  if (normalized.includes('django')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#092E20" />
        <text x="5" y="17" fill="#44B78B" fontSize="14" fontWeight="bold" fontFamily="sans-serif">dj</text>
      </svg>
    );
  }

  // Flask
  if (normalized.includes('flask')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 2v5.5a4 4 0 0 0-1.5 3.5l-4.5 7A2 2 0 0 0 5.7 21h12.6a2 2 0 0 0 1.7-3l-4.5-7A4 4 0 0 0 14 7.5V2" />
        <path d="M8.5 2h7" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
      </svg>
    );
  }

  // SQL / PostgreSQL / Database
  if (normalized.includes('sql') || normalized.includes('postgres') || normalized.includes('sqlite')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  // Git / GitHub
  if (normalized.includes('git')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#F05032" />
        <path d="M15 9l-3-3-6 6 3 3 1.5-1.5v-3.5l2 2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="8" r="1.5" fill="#FFFFFF" />
        <circle cx="14" cy="15" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Linux
  if (normalized.includes('linux')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M7 8l4 4-4 4M13 16h4" />
      </svg>
    );
  }

  // C / C++
  if (normalized.includes('c /') || normalized.includes('c++')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00599C" />
        <text x="4" y="16.5" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif">C++</text>
      </svg>
    );
  }

  // Java
  if (normalized.includes('java')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#E76F00" />
        <text x="3.5" y="16.5" fill="#FFFFFF" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif">JAVA</text>
      </svg>
    );
  }

  // Vercel / Vite
  if (normalized.includes('vercel')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L24 22H0L12 2Z" />
      </svg>
    );
  }

  if (normalized.includes('vite')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M20.5 4.5L12.5 22L4 4.5L12 8.5L20.5 4.5Z" fill="#646CFF" />
        <path d="M12.5 2.5L11 8.5L14 9.5L11.5 15L16.5 8L13 7.5L14.5 2.5H12.5Z" fill="#FFD62E" />
      </svg>
    );
  }

  // Vector RAG / DBSCAN / Prophet / Algorithms
  if (normalized.includes('rag') || normalized.includes('dbscan') || normalized.includes('vector') || normalized.includes('prophet')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <path d="M8.5 7.5l7 0M7.5 8.5l3 7M16.5 8.5l-3 7" strokeDasharray="2 2" />
      </svg>
    );
  }

  // REST API / Postman / Default
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" />
    </svg>
  );
};
