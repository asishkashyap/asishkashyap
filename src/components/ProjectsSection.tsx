import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FolderGit2, Star, GitFork, ExternalLink, Search, Tag } from 'lucide-react';
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
    <motion.section
      id="projects"
      className="space-y-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#fafafa] vcard-title-heading">
            Featured Projects & Repositories
          </h2>
          <p className="text-xs sm:text-sm text-[#9f9f9f] mt-3 leading-relaxed">
            Production frameworks, security pipelines, Terraform monorepos, and containerized tools by @{config.username}.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-[#9f9f9f] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl pl-9 pr-4 py-2 text-xs text-[#fafafa] placeholder-[#9f9f9f] outline-none focus:border-[#ffdb70] transition-colors shadow-inner"
          />
        </div>
      </div>

      {/* Topic Tag Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        <span className="text-xs text-[#9f9f9f] font-mono mr-1 shrink-0 flex items-center gap-1">
          <Tag className="w-3 h-3 text-[#ffdb70]" /> Filter:
        </span>
        <button
          onClick={() => setSelectedTopic('All')}
          className={`text-xs px-3 py-1 rounded-xl transition-all shrink-0 ${
            selectedTopic === 'All'
              ? 'bg-gradient-to-r from-[#ffdb70] to-[#e2b714] text-[#121212] font-bold shadow-md'
              : 'bg-[#2b2b2c] text-[#d6d6d6] hover:text-[#ffdb70] border border-[#383838]'
          }`}
        >
          All Projects
        </button>
        {allTopics.slice(0, 10).map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`text-xs px-2.5 py-1 rounded-xl transition-all shrink-0 font-mono ${
              selectedTopic === topic
                ? 'bg-gradient-to-r from-[#ffdb70] to-[#e2b714] text-[#121212] font-bold shadow-md'
                : 'bg-[#2b2b2c] text-[#d6d6d6] hover:text-[#ffdb70] border border-[#383838]'
            }`}
          >
            #{topic}
          </button>
        ))}
      </div>

      {/* Repositories Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRepos.map((repo, idx) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: Math.min(idx * 0.08, 0.35) }}
            className="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] hover:border-[#ffdb70]/60 rounded-2xl p-5 flex flex-col justify-between gap-4 transition-all hover:-translate-y-0.5 shadow-lg group relative overflow-hidden"
          >
            {/* Badge Overlay */}
            {repo.badge && (
              <div className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-xl bg-[#1e1e1f] text-[#ffdb70] border border-[#383838] self-start shadow-sm">
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
                  className="text-base font-bold text-[#fafafa] group-hover:text-[#ffdb70] transition-colors flex items-center gap-1.5"
                >
                  <FolderGit2 className="w-4 h-4 text-[#ffdb70] shrink-0" />
                  <span className="truncate">{repo.name}</span>
                </a>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-[#9f9f9f] hover:text-[#fafafa] bg-[#1e1e1f] rounded-xl border border-[#383838] shrink-0"
                  title="View Repo"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs text-[#9f9f9f] line-clamp-3 leading-relaxed">
                {repo.description}
              </p>
            </div>

            {/* Topics Tags */}
            <div className="flex flex-wrap gap-1">
              {repo.topics.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-[#1e1e1f] text-[#d6d6d6] border border-[#383838]"
                >
                  #{t}
                </span>
              ))}
            </div>

            {/* Footer Meta (Language, Stars, Forks) */}
            <div className="flex items-center justify-between pt-3 border-t border-[#383838] text-xs text-[#9f9f9f]">
              <div className="flex items-center gap-1.5 font-medium">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: repo.languageColor || '#ffdb70' }}
                />
                <span className="text-[#fafafa] font-mono text-[11px]">{repo.language}</span>
              </div>

              <div className="flex items-center gap-3 font-mono">
                <span className="flex items-center gap-1 text-[#ffdb70] font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#ffdb70]" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1 text-[#d6d6d6]">
                  <GitFork className="w-3.5 h-3.5" />
                  {repo.forks}
                </span>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* View All Repos Button */}
      <div className="pt-2 text-center">
        <a
          href={`https://github.com/${config.username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2b2b2c] hover:bg-[#383838] text-[#fafafa] border border-[#383838] text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-md"
        >
          <span>Explore All Repositories on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#ffdb70]" />
        </a>
      </div>
    </motion.section>
  );
};
