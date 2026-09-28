import React, { useState, useEffect } from 'react';
import { CANDIDATE_INFO, FALLBACK_GITHUB_STATS } from '../data/portfolioData';
import { GitHubStatsData, GitHubRepoStat } from '../types';
import { TechLogo } from './TechLogos';
import { Github, Star, GitFork, RefreshCw, ExternalLink } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  // Real-time GitHub Stats
  const [githubStats, setGithubStats] = useState<GitHubStatsData>(FALLBACK_GITHUB_STATS);
  const [isLoadingGithub, setIsLoadingGithub] = useState<boolean>(false);

  const fetchLiveGitHubStats = async () => {
    setIsLoadingGithub(true);

    try {
      const res = await fetch(`https://api.github.com/users/${CANDIDATE_INFO.githubUsername}/repos?per_page=100&sort=pushed`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const repos = await res.json();
      if (!Array.isArray(repos)) throw new Error('Invalid format');

      let stars = 0;
      let forks = 0;
      const langCount: Record<string, number> = {};

      const recent: GitHubRepoStat[] = repos.slice(0, 4).map((r: any) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count || 0,
        forks: r.forks_count || 0,
        url: r.html_url,
        updatedAt: r.pushed_at ? r.pushed_at.split('T')[0] : '',
      }));

      repos.forEach((r: any) => {
        stars += (r.stargazers_count || 0);
        forks += (r.forks_count || 0);
        if (r.language) {
          langCount[r.language] = (langCount[r.language] || 0) + 1;
        }
      });

      const totalLangs = Object.values(langCount).reduce((a, b) => a + b, 0);
      const topLanguages = Object.entries(langCount)
        .map(([name, count]) => ({
          name,
          count,
          percentage: totalLangs > 0 ? Math.round((count / totalLangs) * 100) : 0,
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setGithubStats({
        username: CANDIDATE_INFO.githubUsername,
        publicRepos: repos.length,
        totalStars: stars,
        totalForks: forks,
        topLanguages,
        recentRepos: recent,
        lastFetched: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isLive: true,
      });
    } catch {
      setGithubStats((prev) => ({
        ...FALLBACK_GITHUB_STATS,
        lastFetched: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        isLive: false,
      }));
    } finally {
      setIsLoadingGithub(false);
    }
  };

  useEffect(() => {
    fetchLiveGitHubStats();
  }, []);

  const skillGroups = [
    {
      category: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C / C++', 'Java'],
    },
    {
      category: 'AI & Agents',
      items: ['Google ADK', 'Claude 3.5 Sonnet', 'LangChain', 'PyTorch', 'Vector RAG', 'DBSCAN'],
    },
    {
      category: 'Backend & Web',
      items: ['FastAPI', 'React', 'Django', 'Flask', 'SQLite', 'REST API'],
    },
    {
      category: 'DevOps & Tools',
      items: ['Docker', 'Linux', 'Git & GitHub', 'Vercel', 'Vite', 'Postman'],
    },
  ];

  return (
    <section id="skills" className="section-anchor editorial-border-t py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div>
          <h2 className="section-headline">
            Tech stack<br />
            <span>I work with.</span>
          </h2>
          <p className="mt-3 max-w-[460px] text-sm text-[var(--text-secondary)]">
            Core technologies, libraries, and frameworks powering production deployments.
          </p>
        </div>

        {/* Divided Rows with authentic tech stack logos */}
        <div className="divide-y divide-current/10 border-t border-b border-current/10">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 py-6 sm:grid-cols-[160px_1fr] sm:gap-8 items-center"
            >
              <div className="font-mono flex items-center gap-2 text-[11px] font-semibold uppercase leading-5 tracking-[.15em] text-[var(--text-primary)]">
                <span>{group.category}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[var(--bg-surface)] editorial-border text-xs font-mono text-[var(--text-primary)] hover:border-indigo-500/50 hover:bg-current/5 transition-all shadow-2xs group"
                  >
                    <TechLogo name={item} className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
                    <span className="whitespace-nowrap font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Real-Time GitHub Activity Section */}
        <div className="editorial-card p-6 sm:p-7 rounded-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-current/10">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-indigo-400 shrink-0" />
              <div>
                <span className="text-sm font-bold text-[var(--text-primary)]">
                  Live GitHub Activity
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)] ml-2">
                  @{githubStats.username} · {githubStats.isLive ? 'Real-time API' : 'Cached snapshot'} ({githubStats.lastFetched})
                </span>
              </div>
            </div>

            <button
              onClick={fetchLiveGitHubStats}
              disabled={isLoadingGithub}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded editorial-border text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`h-3 w-3 ${isLoadingGithub ? 'animate-spin text-indigo-400' : ''}`} />
              <span>{isLoadingGithub ? 'Syncing...' : 'Sync Activity'}</span>
            </button>
          </div>

          {/* Metric Figures */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded bg-[var(--bg-main)] editorial-border">
              <div className="text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1">Public Repos</div>
              <div className="text-xl font-bold text-[var(--text-primary)] tabular-nums">{githubStats.publicRepos}</div>
            </div>

            <div className="p-3.5 rounded bg-[var(--bg-main)] editorial-border">
              <div className="text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1">Earned Stars</div>
              <div className="text-xl font-bold text-[var(--text-primary)] tabular-nums">{githubStats.totalStars}</div>
            </div>

            <div className="p-3.5 rounded bg-[var(--bg-main)] editorial-border">
              <div className="text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1">Forks</div>
              <div className="text-xl font-bold text-[var(--text-primary)] tabular-nums">{githubStats.totalForks}</div>
            </div>

            <div className="p-3.5 rounded bg-[var(--bg-main)] editorial-border">
              <div className="text-[var(--text-secondary)] text-[10px] uppercase font-semibold mb-1">Top Language</div>
              <div className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                <TechLogo name={githubStats.topLanguages[0]?.name || 'Python'} className="h-4 w-4" />
                <span>{githubStats.topLanguages[0]?.name || 'Python'}</span>
              </div>
            </div>
          </div>

          {/* Language distribution bar */}
          {githubStats.topLanguages.length > 0 && (
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-[var(--text-secondary)] text-[11px]">
                <span>Repository Language Distribution</span>
                <span>Calculated via public repos</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-current/10 flex overflow-hidden">
                {githubStats.topLanguages.map((l) => (
                  <div
                    key={l.name}
                    style={{ width: `${l.percentage}%` }}
                    className="bg-indigo-500 first:bg-indigo-600 last:bg-indigo-400"
                    title={`${l.name}: ${l.percentage}%`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-[11px] text-[var(--text-secondary)] pt-1">
                {githubStats.topLanguages.map((l) => (
                  <span key={l.name} className="inline-flex items-center gap-1.5">
                    <TechLogo name={l.name} className="h-3 w-3" />
                    <span>{l.name}</span>
                    <span className="opacity-60 tabular-nums">({l.percentage}%)</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Recent Repos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {githubStats.recentRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded bg-[var(--bg-main)] editorial-border hover:border-indigo-400/50 transition-colors group block"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-[var(--text-primary)] group-hover:text-indigo-400 truncate">
                    {repo.name}
                  </span>
                  <ExternalLink className="h-3 w-3 text-[var(--text-secondary)] group-hover:text-indigo-400 shrink-0 ml-1" />
                </div>
                {repo.description && (
                  <p className="text-[11px] text-[var(--text-secondary)] mt-1 line-clamp-2 leading-relaxed">
                    {repo.description}
                  </p>
                )}
                <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--text-secondary)] mt-2">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <TechLogo name={repo.language} className="h-3 w-3" />
                      <span>{repo.language}</span>
                    </span>
                  )}
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-0.5">
                      <Star className="h-2.5 w-2.5 text-amber-400" />
                      <span>{repo.stars}</span>
                    </span>
                  )}
                  {repo.updatedAt && <span>{repo.updatedAt}</span>}
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
