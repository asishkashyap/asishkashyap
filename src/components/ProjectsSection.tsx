import React, { useState } from 'react';
import { FolderGit2, Star, GitFork, ExternalLink, Search, Tag, Sparkles } from 'lucide-react';
import { ProfileConfig } from '../types';

interface ProjectsSectionProps {
  config: ProfileConfig;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ config }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('All');

  // Extract all unique topics across repos
  const allTopics = Array.from(
    new Set(config.repositories.flatMap((repo) => repo.topics))
  );

  const filteredRepos = config.repositories.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTopic =
      selectedTopic === 'All' || repo.topics.includes(selectedTopic);

    return matchesSearch && matchesTopic;
  });

  return (
    <section id="projects" className="py-12 border-t border-[#30363d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider mb-1">
              <FolderGit2 className="w-4 h-4" />
              <span>Open Source & Repositories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f6fc]">
              Featured GitHub Projects
            </h2>
            <p className="text-sm text-[#8b949e] mt-1 max-w-2xl">
              Production frameworks, security suites, Terraform monorepos, and containerized architectures built by @{config.username}.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8b949e] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search repos or tags..."
              className="w-full bg-[#161b22] border border-[#30363d] rounded-xl pl-9 pr-4 py-2 text-xs text-[#f0f6fc] placeholder-[#8b949e] outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Topic Tag Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mb-6 pb-2">
          <span className="text-xs text-[#8b949e] font-mono mr-1 shrink-0 flex items-center gap-1">
            <Tag className="w-3 h-3 text-blue-400" /> Filter:
          </span>
          <button
            onClick={() => setSelectedTopic('All')}
            className={`text-xs px-3 py-1 rounded-full transition-all shrink-0 ${
              selectedTopic === 'All'
                ? 'bg-blue-600 text-white font-semibold'
                : 'bg-[#161b22] text-[#8b949e] hover:text-[#f0f6fc] border border-[#30363d]'
            }`}
          >
            All Repositories
          </button>
          {allTopics.slice(0, 10).map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`text-xs px-2.5 py-1 rounded-full transition-all shrink-0 font-mono ${
                selectedTopic === topic
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-[#161b22] text-[#8b949e] hover:text-[#f0f6fc] border border-[#30363d]'
              }`}
            >
              #{topic}
            </button>
          ))}
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => (
            <div
              key={repo.name}
              className="bg-[#161b22] border border-[#30363d] hover:border-blue-500/50 rounded-2xl p-5 flex flex-col justify-between gap-4 transition-all hover:-translate-y-1 shadow-lg group relative overflow-hidden"
            >
              {/* Badge Overlay */}
              {repo.badge && (
                <div className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 self-start">
                  {repo.badge}
                </div>
              )}

              {/* Repo Title & Description */}
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#f0f6fc] group-hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <FolderGit2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </a>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-[#8b949e] hover:text-white bg-[#0d1117] rounded-lg border border-[#30363d] shrink-0"
                    title="View Repo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-[#8b949e] line-clamp-3 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              {/* Topics Tags */}
              <div className="flex flex-wrap gap-1">
                {repo.topics.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0d1117] text-[#8b949e] border border-[#30363d]/60"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Footer Meta (Language, Stars, Forks) */}
              <div className="flex items-center justify-between pt-3 border-t border-[#30363d]/60 text-xs text-[#8b949e]">
                <div className="flex items-center gap-1.5 font-medium">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor || '#3178c6' }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3 font-mono">
                  <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <GitFork className="w-3.5 h-3.5 text-blue-400" />
                    {repo.forks}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Repos Button */}
        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${config.username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#161b22] hover:bg-[#21262d] text-[#f0f6fc] border border-[#30363d] text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            <span>Explore All Repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
