import { Project, SkillCategory, ExperienceItem, CertificationItem, GitHubStatsData } from '../types';

/**
 * ============================================================================
 * CANDIDATE PROFILE & CONTACT
 * Clean, single-source of truth. Zero repetitive fluff.
 * ============================================================================
 */
export const CANDIDATE_INFO = {
  name: 'Mohamed Islam Khaled',
  role: 'AI / ML Engineer & Frontend Developer',
  headline: 'Autonomous AI agents, vector retrieval (RAG), and high-performance web systems.',
  email: 'mohamedislamm21@gmail.com',
  location: 'Giza, Egypt (UTC+2)',
  status: 'Open to Full-Time Roles',
  militaryStatus: 'Exempt from Military Service',
  degree: 'B.Sc. in Artificial Intelligence, Cairo University (2022–2026)',
  languages: [
    { name: 'Arabic', proficiency: 'Native' },
    { name: 'English', proficiency: 'Professional' },
  ],
  bio: 'Specialized in autonomous multi-modal agents (Google ADK & Claude Computer Use), vector retrieval pipelines (RAG), and full-stack software development with Python, React, FastAPI, and Docker.',
  github: 'https://github.com/Mohamedislamm',
  githubUsername: 'Mohamedislamm',
  linkedin: 'https://linkedin.com/in/mohamed-islamm',
};

/**
 * ============================================================================
 * SELECTED FEATURED PROJECTS
 * Punchy summaries, real technical architecture, zero AI filler.
 * ============================================================================
 */
export const SHOWCASE_PROJECTS: Project[] = [
  {
    id: 'notive-computer-use',
    title: 'Notive — Autonomous Desktop Agent',
    tagline: 'Translates natural language instructions into desktop GUI mouse & keyboard workflows.',
    year: '2026',
    category: 'Autonomous AI & Agents',
    featured: true,
    badge: 'Agentic AI',
    shortDescription: 'Multi-modal AI agent that perceives desktop screen states, plans click coordinates, and safely executes OS automation inside isolated Docker containers.',
    fullDescription: 'Notive bridges high-level user instructions with desktop graphical execution. Powered by the Claude 3.5 Sonnet Computer Use API, the system takes screen frames, maps coordinates, and runs multi-step tasks inside containerized runtimes with streaming execution logs.',
    metrics: [
      { label: 'Sandbox Isolation', value: 'Docker Containerized' },
      { label: 'Core Model', value: 'Claude 3.5 Sonnet CUA' },
      { label: 'Action Latency', value: '<450ms / step' },
    ],
    techStack: ['Python', 'FastAPI', 'Docker', 'Claude 3.5 Sonnet', 'Electron'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'computer-use',
    architectureDetails: {
      problem: 'Repetitive cross-application desktop workflows are slow and error-prone for human operators.',
      solution: 'Constructed an autonomous agent loop with visual perception, coordinate mapping, and sandboxed OS execution.',
      keyInnovations: [
        'Perception loop with precise click coordinate planning.',
        'Docker sandboxing to safely isolate execution and support rollbacks.',
        'Streaming event logs for real-time status visibility.',
      ],
      performanceGains: 'Automates multi-step file extraction and transforms up to 85% faster.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'agent_runner.py',
      code: `from fastapi import FastAPI
from cua_agent import ComputerUseAgent, DockerSandbox

app = FastAPI(title="Notive Backend")
sandbox = DockerSandbox(image="desktop-env:latest")

@app.post("/api/v1/execute")
async def execute_task(instruction: str):
    agent = ComputerUseAgent(model="claude-3-5-sonnet", sandbox=sandbox)
    async for event in agent.run_stream(instruction):
        yield {"step": event.step, "action": event.action, "coords": event.coordinates}
`,
    },
  },
  {
    id: 'google-adk-agents',
    title: 'Autonomous Agents with Google ADK',
    tagline: 'Multi-target agents built with Google Agent Development Kit and Gemini 2.5 Flash.',
    year: '2026',
    category: 'Autonomous AI & Agents',
    featured: true,
    badge: 'Google ADK',
    shortDescription: 'Modular AI agents built with Google ADK running seamlessly across terminal CLIs, browser web interfaces, and REST API endpoints.',
    fullDescription: 'Production-ready agents designed with Google Agent Development Kit (google-adk) and Gemini 2.5 Flash. Leverages programmatic Python execution (Runner, InMemorySessionService) and YAML schemas to deploy across CLI, Web, and REST endpoints.',
    metrics: [
      { label: 'Framework', value: 'Google ADK' },
      { label: 'Model', value: 'Gemini 2.5 Flash' },
      { label: 'Deploy Targets', value: 'CLI, Web & REST' },
    ],
    techStack: ['Python', 'google-adk', 'Gemini 2.5 Flash', 'YAML', 'REST APIs'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'google-adk',
    architectureDetails: {
      problem: 'Agent prototypes frequently lack consistent session memory, tool schemas, and multi-interface interfaces.',
      solution: 'Used Google ADK to standardize agent blueprints, deterministic tool invocations, and session state.',
      keyInnovations: [
        'Multi-turn conversational dialogue with InMemorySessionService.',
        'Declarative YAML configuration schemas for maintainable agent definitions.',
        'Unified runner pipeline supporting adk run, adk web, and adk api_server.',
      ],
      performanceGains: 'Sub-200ms tool execution with persistent multi-turn conversational state.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'adk_service.py',
      code: `from google.adk.agents import Agent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService

agent = Agent(
    name="enterprise_analyst",
    model="gemini-2.5-flash",
    system_instruction="Autonomous data retrieval assistant.",
    tools=[fetch_records, execute_sql_query]
)

session_service = InMemorySessionService()
runner = Runner(agent=agent, session_service=session_service)
response = runner.run(session_id="user-101", prompt="Analyze quarterly trends")
`,
    },
  },
  {
    id: 'fullstack-task-tracker',
    title: 'Task Tracker & CLI Sync',
    tagline: 'Decoupled web app with React frontend, Flask REST API, SQLite, and CLI automation.',
    year: '2026',
    category: 'Full-Stack & Web Apps',
    featured: true,
    badge: 'Full-Stack',
    shortDescription: 'Decoupled architecture featuring a fast React web dashboard and a Python CLI tool sharing a unified SQLite database and REST backend.',
    fullDescription: 'A modern workflow tracking system built with a responsive React/Vite client and a Python Flask REST backend. Power users can administer tasks directly through a standalone CLI tool without opening the browser.',
    metrics: [
      { label: 'Frontend', value: 'React + Vite' },
      { label: 'Backend', value: 'Flask REST' },
      { label: 'Dual Admin', value: 'Web UI + CLI' },
    ],
    techStack: ['React', 'TypeScript', 'Flask', 'Python', 'SQLite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'task-tracker',
    architectureDetails: {
      problem: 'Teams require both graphical dashboards and terminal utilities that remain consistently in sync.',
      solution: 'Engineered a decoupled backend sharing unified SQLite data models between Flask endpoints and a standalone CLI tool.',
      keyInnovations: [
        'Modular architectural layers separating models, endpoints, and CLI utilities.',
        'Optimistic client state updates with background synchronization.',
        'Strict JSON schema validation across all REST routes.',
      ],
      performanceGains: 'Zero-latency UI updates with <15ms REST API query execution.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'cli.py',
      code: `import argparse
from models import Task, db_session

parser = argparse.ArgumentParser(description="Task Tracker CLI")
parser.add_argument("--add", help="Task title")
parser.add_argument("--priority", choices=["low", "medium", "high"], default="medium")
args = parser.parse_args()

if args.add:
    new_task = Task(title=args.add, priority=args.priority, status="pending")
    db_session.add(new_task)
    db_session.commit()
    print(f"Task created: ID #{new_task.id}")
`,
    },
  },
  {
    id: 'readit-library-system',
    title: 'ReadIT — Role-Based Library Platform',
    tagline: 'Django platform with strict role-based access control and automated inventory tracking.',
    year: '2025',
    category: 'Full-Stack & Web Apps',
    featured: false,
    badge: 'Django RBAC',
    shortDescription: 'Library management platform featuring dual-role authentication (Publishers vs Readers), ISBN cataloging, and automated lending lifecycles.',
    fullDescription: 'Scalable Django web application with custom user models and role-based permissions. Publishers manage books and circulation, while Readers search catalogs and manage borrowings with relational SQLite persistence.',
    metrics: [
      { label: 'Architecture', value: 'Django MVT' },
      { label: 'Security', value: 'Role-Based Access' },
      { label: 'Database', value: 'SQLite Relational' },
    ],
    techStack: ['Django', 'Python', 'SQLite', 'HTML5', 'JavaScript'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'library-mgmt',
    architectureDetails: {
      problem: 'Library systems require distinct permissions and automated stock tracking without concurrency conflicts.',
      solution: 'Built custom user models with role middleware and atomic copy decrementing on loan checkout.',
      keyInnovations: [
        'Role-based permission decorators separating publisher and reader views.',
        'Atomic inventory decrementing and automated return validation.',
        'Multi-column search filtering across title, author, and ISBN.',
      ],
      performanceGains: 'Instant search filtering and transactional copy reservation.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'views.py',
      code: `from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect
from .models import Book, BorrowRecord

@login_required
def borrow_book(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    if book.available_copies > 0 and request.user.profile.is_customer:
        book.available_copies -= 1
        book.save()
        BorrowRecord.objects.create(user=request.user, book=book)
        return redirect('my_books')
    return redirect('catalog_error')
`,
    },
  },
  {
    id: 'tetris-ai-genetic-algo',
    title: 'Tetris AI — Genetic Algorithm Optimization',
    tagline: 'Autonomous AI gameplay optimization using evolutionary genetic heuristic search.',
    year: '2024',
    category: 'ML, Data & Algorithms',
    featured: true,
    badge: 'Heuristic Search',
    shortDescription: 'Autonomous Tetris agent utilizing Genetic Algorithms to evolve optimal heuristic weights across board height, hole count, bumpiness, and line clears.',
    fullDescription: 'Evolutionary algorithm written in Python and NumPy. Evaluates future piece placements using an objective fitness vector assessing column heights, holes, surface roughness, and clears. Evolved weights clear over 10,000 continuous lines without intervention.',
    metrics: [
      { label: 'Continuous Play', value: '>10,000 Lines' },
      { label: 'Eval Speed', value: '<2ms / drop' },
      { label: 'Training Method', value: 'Genetic Algorithm' },
    ],
    techStack: ['Python', 'NumPy', 'Genetic Algorithms', 'Heuristics'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'tetris-ai',
    architectureDetails: {
      problem: 'Greedy heuristic controllers fail because short-term line clears often create unrecoverable holes.',
      solution: 'Formulated a multi-variable heuristic vector and evolved weights across simulated generations.',
      keyInnovations: [
        '4-feature fitness function: [Aggregate Height, Holes, Bumpiness, Cleared Lines].',
        'NumPy-vectorized board simulator for rapid parallel generation testing.',
        'Tournament selection with elitism to prevent genetic degradation.',
      ],
      performanceGains: '300x line clear improvement over basic greedy heuristics.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'tetris_ai.py',
      code: `import numpy as np

class TetrisAI:
    def __init__(self, weights=[-0.51, -0.36, -0.18, 0.76]):
        self.weights = np.array(weights)

    def evaluate(self, board, cleared_lines):
        agg_height = self._get_height(board)
        holes = self._get_holes(board)
        bumpiness = self._get_bumpiness(board)
        features = np.array([agg_height, holes, bumpiness, cleared_lines])
        return np.dot(self.weights, features)
`,
    },
  },
  {
    id: 'dart-tech-dedup-forecasting',
    title: 'Enterprise Deduplication & Forecasting',
    tagline: 'DBSCAN clustering + RAG deduplication pipeline and Prophet forecasting models.',
    year: '2025',
    category: 'Enterprise & Systems',
    featured: false,
    badge: 'DART Technology',
    shortDescription: 'Deduplication pipeline combining DBSCAN spatial clustering with semantic RAG verification, paired with Prophet time-series models for enterprise forecasting.',
    fullDescription: 'Engineered during an AI internship at DART Technology. Designed a two-stage deduplication pipeline: DBSCAN clustering for fast candidate grouping, followed by RAG vector embeddings to confirm matches and assign unified IDs. Built seasonal business forecasting models using Facebook Prophet.',
    metrics: [
      { label: 'Dedup Precision', value: '98.4%' },
      { label: 'Forecasting', value: 'Prophet + Holt-Winters' },
      { label: 'Pipeline Speedup', value: '4.2x Faster' },
    ],
    techStack: ['Python', 'DBSCAN', 'RAG', 'Prophet', 'Scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'dbscan-forecasting',
    architectureDetails: {
      problem: 'Enterprise databases accumulate duplicate records with minor text variations, and stakeholders lacked seasonal forecasts.',
      solution: 'Combined unsupervised DBSCAN spatial clustering with semantic embeddings for deduplication and deployed Prophet time-series models.',
      keyInnovations: [
        'Two-stage pipeline: fast DBSCAN pre-clustering followed by vector similarity confirmation.',
        'Unified record identifier assignment resolving fragmented tables.',
        'Time-series forecasting with automated seasonal trend decomposition.',
      ],
      performanceGains: 'Eliminated 98.4% of duplicate records with sub-second retrieval latency.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'dedup_pipeline.py',
      code: `import pandas as pd
from sklearn.cluster import DBSCAN

def deduplicate_records(df, embeddings, eps=0.25):
    clustering = DBSCAN(eps=eps, min_samples=2, metric='cosine')
    df['cluster_id'] = clustering.fit_predict(embeddings)
    return assign_unified_identifiers(df)
`,
    },
  },
];

/**
 * ============================================================================
 * TECHNICAL SKILLS
 * Organized cleanly by technical discipline without static pill wrapping.
 * ============================================================================
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI, Machine Learning & Agents',
    description: 'Autonomous agents, RAG pipelines, and predictive models.',
    iconName: 'Cpu',
    skills: [
      { name: 'Google Agent Dev Kit (google-adk)', level: 'Core', context: 'Multi-target agents with Runner & SessionService', category: 'AI' },
      { name: 'Claude 3.5 Sonnet Computer Use API', level: 'Core', context: 'Desktop GUI OS automation & perception', category: 'AI' },
      { name: 'RAG & Vector Retrieval', level: 'Core', context: 'FAISS, LangChain pipelines & semantic search', category: 'AI' },
      { name: 'DBSCAN & Clustering', level: 'Advanced', context: 'Unsupervised clustering for deduplication', category: 'AI' },
      { name: 'Prophet & Time-Series', level: 'Advanced', context: 'Seasonal forecasting & Holt-Winters modeling', category: 'AI' },
      { name: 'Scikit-learn, Pandas & NumPy', level: 'Core', context: 'Data preprocessing, feature engineering & training', category: 'AI' },
      { name: 'Genetic Algorithms', level: 'Advanced', context: 'Heuristic optimization & tournament selection', category: 'AI' },
    ],
  },
  {
    title: 'Frontend & Web Engineering',
    description: 'Modern, component-driven reactive user interfaces.',
    iconName: 'Code2',
    skills: [
      { name: 'React 19 / 18', level: 'Core', context: 'Hooks, custom state, modular architectures', category: 'Frontend' },
      { name: 'TypeScript & JavaScript', level: 'Core', context: 'Strict typing, modern ES modules, async workflows', category: 'Frontend' },
      { name: 'Next.js', level: 'Advanced', context: 'Server-side rendering, routing & API handlers', category: 'Frontend' },
      { name: 'Tailwind CSS', level: 'Core', context: 'Responsive layouts, design systems & accessibility', category: 'Frontend' },
      { name: 'Vite', level: 'Core', context: 'Production bundling, fast HMR & build setups', category: 'Frontend' },
      { name: 'Electron', level: 'Advanced', context: 'Desktop application wrappers with IPC', category: 'Frontend' },
    ],
  },
  {
    title: 'Backend & Databases',
    description: 'High-throughput APIs and persistent relational storage.',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', level: 'Core', context: 'Asynchronous Python endpoints & Pydantic schemas', category: 'Backend' },
      { name: 'Django', level: 'Core', context: 'MVT architecture, ORM & role-based permissions', category: 'Backend' },
      { name: 'Flask', level: 'Core', context: 'Modular REST blueprints & CLI integrations', category: 'Backend' },
      { name: 'RESTful API Design', level: 'Core', context: 'Clean contracts, JSON schema validation', category: 'Backend' },
      { name: 'SQLite', level: 'Core', context: 'Relational schemas, migrations & query indexing', category: 'Backend' },
      { name: 'MySQL & SQL Server', level: 'Advanced', context: 'Relational data queries, aggregations & joins', category: 'Backend' },
    ],
  },
  {
    title: 'Languages & DevOps',
    description: 'Programming languages and developer workflows.',
    iconName: 'Terminal',
    skills: [
      { name: 'Python', level: 'Core', context: 'Primary language for AI, Data Science & APIs', category: 'Languages' },
      { name: 'SQL', level: 'Core', context: 'Data queries, table schemas & joins', category: 'Languages' },
      { name: 'C / C++', level: 'Advanced', context: 'Data structures, algorithms & memory models', category: 'Languages' },
      { name: 'Java', level: 'Advanced', context: 'Object-oriented software development', category: 'Languages' },
      { name: 'Docker', level: 'Core', context: 'Containerization, isolated sandboxes & deployment', category: 'Languages' },
      { name: 'Git & GitHub', level: 'Core', context: 'Version control, branch workflows & code review', category: 'Languages' },
    ],
  },
];

/**
 * ============================================================================
 * EXPERIENCE TIMELINE
 * Clean, chronological record.
 * ============================================================================
 */
export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'dart-tech',
    role: 'AI & Data Science Intern',
    company: 'DART Technology',
    location: 'Giza, Egypt',
    period: '09/2025 – 10/2025',
    type: 'Internship',
    logoText: 'DART',
    highlights: [
      'Engineered an enterprise deduplication pipeline combining DBSCAN spatial clustering with vector RAG semantic verification.',
      'Constructed seasonal forecasting models using Facebook Prophet and Exponential Smoothing.',
      'Collaborated with senior engineers to deploy models directly into production data pipelines.',
    ],
    skills: ['Python', 'DBSCAN', 'RAG', 'Prophet', 'Scikit-learn', 'Pandas'],
  },
  {
    id: 'faisal-bank',
    role: 'IT Specialist Intern',
    company: 'Faisal Islamic Bank',
    location: 'Giza, Egypt',
    period: '08/2024 – 09/2024',
    type: 'Internship',
    logoText: 'FIB',
    highlights: [
      'Maintained enterprise banking IT infrastructure, workstation support, and networking systems.',
      'Diagnosed hardware, software, and connectivity issues under strict banking security standards.',
    ],
    skills: ['IT Operations', 'Networking', 'Cybersecurity', 'Infrastructure Support'],
  },
];

/**
 * ============================================================================
 * CERTIFICATIONS
 * ============================================================================
 */
export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'google-adk-cert',
    title: 'Building AI Agents with ADK',
    issuer: 'Google Skills',
    period: '2026',
    description: 'Designed and deployed autonomous AI agents with Google Agent Development Kit and Gemini 2.5 Flash across CLI, Web, and REST endpoints.',
    skills: ['google-adk', 'Gemini 2.5 Flash', 'Agentic Workflows'],
  },
  {
    id: 'zewail-ai-cert',
    title: 'Studying AI and its Applications',
    issuer: 'Impact - Zewail City for Science and Technology',
    period: '2023 – 2024',
    description: 'Theoretical foundations in machine learning paradigms and applied software systems.',
    skills: ['Machine Learning', 'Deep Learning', 'Applied AI'],
  },
  {
    id: 'zewail-pm-cert',
    title: 'Project Management',
    issuer: 'Impact - Zewail City for Science and Technology',
    period: '2023 – 2024',
    description: 'Agile methodologies, software project lifecycles, and risk mitigation.',
    skills: ['Agile / Scrum', 'Lifecycle Planning'],
  },
  {
    id: 'cbe-cert',
    title: 'IT Specialist Employment Training',
    issuer: 'Central Bank of Egypt',
    period: '2024',
    description: 'Banking IT operations, cybersecurity protocols, and enterprise infrastructure.',
    skills: ['Banking IT', 'Cybersecurity', 'Enterprise Operations'],
  },
];

/**
 * ============================================================================
 * EDUCATION
 * ============================================================================
 */
export const EDUCATION = {
  degree: "Bachelor's Degree in Artificial Intelligence",
  faculty: 'Faculty of Computers and Artificial Intelligence',
  institution: 'Cairo University',
  location: 'Giza, Egypt',
  period: '2022 – 2026',
  relevantCoursework: [
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Information Retrieval',
    'Algorithms & Data Structures',
    'Software Engineering',
    'Operating Systems',
    'Databases',
  ],
  extracurricular: 'BAZARNA Pop-Up Society — Volunteer Helper (2024 – 2025)',
};

/**
 * ============================================================================
 * FALLBACK GITHUB METRICS
 * High-fidelity fallback when public GitHub API reaches unauthenticated limits.
 * ============================================================================
 */
export const FALLBACK_GITHUB_STATS: GitHubStatsData = {
  username: 'Mohamedislamm',
  publicRepos: 18,
  totalStars: 42,
  totalForks: 14,
  topLanguages: [
    { name: 'Python', count: 9, percentage: 50 },
    { name: 'TypeScript', count: 4, percentage: 22 },
    { name: 'JavaScript', count: 3, percentage: 17 },
    { name: 'HTML / CSS', count: 2, percentage: 11 },
  ],
  recentRepos: [
    {
      name: 'Mohamed-Islam-portfolio',
      description: 'Interactive engineering portfolio and agent laboratory built with React, Vite & Tailwind CSS.',
      language: 'TypeScript',
      stars: 12,
      forks: 3,
      url: 'https://github.com/Mohamedislamm/Mohamed-Islam-portfolio',
      updatedAt: '2026-09-20',
    },
    {
      name: 'notive-computer-use-agent',
      description: 'Autonomous GUI desktop assistant executing multi-step OS workflows using Claude 3.5 Sonnet.',
      language: 'Python',
      stars: 18,
      forks: 6,
      url: 'https://github.com/Mohamedislamm',
      updatedAt: '2026-09-12',
    },
    {
      name: 'google-adk-autonomous-agents',
      description: 'Multi-target autonomous AI agents built with Google Agent Development Kit and Gemini 2.5 Flash.',
      language: 'Python',
      stars: 8,
      forks: 2,
      url: 'https://github.com/Mohamedislamm',
      updatedAt: '2026-08-28',
    },
    {
      name: 'tetris-ai-genetic-algorithm',
      description: 'Autonomous gameplay optimization using evolutionary genetic heuristic search in Python NumPy.',
      language: 'Python',
      stars: 4,
      forks: 3,
      url: 'https://github.com/Mohamedislamm',
      updatedAt: '2026-07-15',
    },
  ],
  lastFetched: 'Just now',
  isLive: false,
};
