import React, { useState } from 'react';
import { 
  Github, 
  Terminal, 
  ExternalLink, 
  Star, 
  GitFork, 
  Sparkles, 
  Copy, 
  Check, 
  Code2, 
  Globe, 
  Linkedin, 
  Twitter, 
  Mail,
  Flame,
  BarChart3,
  BookOpen
} from 'lucide-react';
import { ProfileConfig } from '../types';
import { THEMES, TECH_STACK } from '../data/profileData';
import { generateMainReadme } from '../data/markdownTemplates';
import { SVG_ASSETS } from '../data/svgAssets';

interface LiveReadmePreviewProps {
  config: ProfileConfig;
  onCopyReadme: () => void;
  copiedReadme: boolean;
}

export const LiveReadmePreview: React.FC<LiveReadmePreviewProps> = ({ config, onCopyReadme, copiedReadme }) => {
  const [viewMode, setViewMode] = useState<'rendered' | 'raw'>('rendered');
  const theme = THEMES[config.theme] || THEMES.darkSlate;
  const rawReadmeMarkdown = generateMainReadme(config);

  const bannerSvgInfo = SVG_ASSETS.find(s => s.id === 'banner');
  const bannerSvgCode = bannerSvgInfo ? bannerSvgInfo.generateSvg(config) : '';

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Top Preview Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#161b22] border border-[#30363d] rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-[#f0f6fc]">GitHub Profile README Render Mode</h2>
            <p className="text-xs text-[#8b949e]">Target Repository: github.com/{config.username}/{config.username}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Rendered vs Raw Toggle */}
          <div className="flex items-center bg-[#0d1117] border border-[#30363d] rounded-lg p-1">
            <button
              onClick={() => setViewMode('rendered')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                viewMode === 'rendered'
                  ? 'bg-[#1f242d] text-[#58a6ff] border border-[#58a6ff]/30'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              Visual Preview
            </button>
            <button
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                viewMode === 'raw'
                  ? 'bg-[#1f242d] text-[#58a6ff] border border-[#58a6ff]/30'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              Raw Markdown
            </button>
          </div>

          <button
            onClick={onCopyReadme}
            className={`flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all ${
              copiedReadme ? 'bg-emerald-600 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'
            }`}
          >
            {copiedReadme ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedReadme ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      </div>

      {viewMode === 'raw' ? (
        <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-5 font-mono text-xs text-[#8b949e] overflow-x-auto whitespace-pre-wrap leading-relaxed select-all">
          {rawReadmeMarkdown}
        </div>
      ) : (
        /* GitHub Profile Wrapper Container */
        <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl">
          {/* GitHub Header Simulation */}
          <div className="bg-[#161b22] border-b border-[#30363d] px-6 py-3 flex items-center justify-between text-xs text-[#8b949e]">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="font-semibold text-[#f0f6fc]">{config.username}</span>
              <span>/</span>
              <span className="font-semibold text-[#f0f6fc]">{config.username}</span>
              <span className="px-2 py-0.5 rounded-full bg-[#21262d] text-[#8b949e] text-[10px] font-mono border border-[#30363d]">Public README.md</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-xs text-amber-400 font-semibold"><Star className="w-3.5 h-3.5 fill-amber-400" /> 1.2k</span>
              <span className="flex items-center gap-1 text-xs text-[#8b949e]"><GitFork className="w-3.5 h-3.5" /> 240</span>
            </div>
          </div>

          <div className="p-6 lg:p-10 space-y-8">
            {/* 1. Hero SVG Banner */}
            <div 
              className="w-full rounded-xl overflow-hidden border border-[#30363d] shadow-lg"
              dangerouslySetInnerHTML={{ __html: bannerSvgCode }}
            />

            {/* Title & Tagline */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl lg:text-3xl font-extrabold text-[#f0f6fc] tracking-tight">
                👋 Welcome to my GitHub Engineering Hub!
              </h1>
              <p className="text-sm italic text-[#8b949e] max-w-2xl mx-auto">
                "{config.tagline}"
              </p>

              {/* Social Contact Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
                <a href={config.website} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1f242d] hover:bg-[#30363d] text-blue-400 text-xs font-semibold border border-blue-500/30 transition-all">
                  <Globe className="w-3.5 h-3.5" /> Website
                </a>
                <a href={`https://linkedin.com/in/${config.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1f242d] hover:bg-[#30363d] text-blue-400 text-xs font-semibold border border-blue-500/30 transition-all">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a href={`https://x.com/${config.twitter}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1f242d] hover:bg-[#30363d] text-blue-400 text-xs font-semibold border border-blue-500/30 transition-all">
                  <Twitter className="w-3.5 h-3.5" /> X / Twitter
                </a>
                <a href={`mailto:${config.email}`} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1f242d] hover:bg-[#30363d] text-rose-400 text-xs font-semibold border border-rose-500/30 transition-all">
                  <Mail className="w-3.5 h-3.5" /> Email
                </a>
              </div>
            </div>

            <hr className="border-[#30363d]" />

            {/* 2. CLI Terminal Bio */}
            {config.showTerminalBio && (
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden font-mono text-xs">
                <div className="bg-[#0d1117] border-b border-[#30363d] px-4 py-2 flex items-center justify-between text-[#8b949e]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-bold text-[#f0f6fc]">ashish@dev-workstation:~</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                </div>

                <div className="p-4 space-y-3 text-[#f0f6fc]">
                  <div>
                    <span className="text-blue-400">$ ashish --version</span>
                    <div className="text-[#8b949e] mt-1 pl-3 border-l-2 border-blue-500/30">
                      Ashish Kashyap v3.6.0 (Systems & AI Architecture Edition)
                    </div>
                  </div>

                  <div>
                    <span className="text-blue-400">$ ashish --get-bio</span>
                    <div className="text-[#8b949e] mt-1 pl-3 border-l-2 border-blue-500/30 space-y-1">
                      <p>&gt; {config.bio}</p>
                      <p>&gt; Location: <span className="text-[#f0f6fc]">{config.location}</span></p>
                      <p>&gt; Current Role: <span className="text-[#f0f6fc]">{config.company}</span></p>
                    </div>
                  </div>

                  <div>
                    <span className="text-blue-400">$ ashish --list-passions</span>
                    <div className="text-emerald-400 mt-1 pl-3 border-l-2 border-emerald-500/30 space-y-1">
                      <p>[✓] High-throughput Distributed Systems</p>
                      <p>[✓] Cloud Native Platform & Kubernetes Control Planes</p>
                      <p>[✓] Autonomous AI Agent Workflows & LLM RAG Engines</p>
                      <p>[✓] Developer Experience & Clean Architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Tech Stack Shields Grid */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#f0f6fc]">
                <Code2 className="w-4 h-4 text-blue-400" />
                🛠️ Technology Stack & Ecosystem
              </div>

              <div className="flex flex-wrap gap-2">
                {config.selectedTechStack.map((tech) => {
                  const badge = TECH_STACK.find(t => t.name.toLowerCase() === tech.toLowerCase()) || {
                    name: tech,
                    logoColor: '3178C6',
                    category: 'Tools'
                  };
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-2 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#f0f6fc] transition-all"
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: `#${badge.logoColor}` }} />
                      <span>{badge.name}</span>
                      <span className="text-[10px] text-[#8b949e] font-normal">({badge.category})</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Featured Repositories */}
            {config.showFeaturedRepos && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#f0f6fc]">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    🚀 Featured Open Source Repositories
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {config.repositories.map((repo) => (
                    <div key={repo.name} className="bg-[#161b22] border border-[#30363d] hover:border-blue-500/50 rounded-xl p-4 space-y-3 transition-all group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-blue-400" />
                          <a href={repo.url} target="_blank" rel="noreferrer" className="text-xs font-bold text-[#58a6ff] hover:underline flex items-center gap-1">
                            {repo.name}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </div>
                        {repo.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {repo.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#8b949e] line-clamp-2 leading-relaxed">
                        {repo.description}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-[#30363d]/50 text-xs text-[#8b949e]">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: repo.languageColor }} />
                          <span className="font-mono text-[#f0f6fc]">{repo.language}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {repo.stars}</span>
                          <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. GitHub Live Stats & Streak Mockup Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#f0f6fc]">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
                📊 Live Developer Metrics & Contribution Activity
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Stats Card Simulation */}
                {config.showStatsCard && (
                  <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-[#58a6ff]">
                      <span>GitHub Stats for @{config.username}</span>
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-[#0d1117] p-2.5 rounded-lg border border-[#30363d]">
                        <div className="text-[#8b949e]">Total Commits</div>
                        <div className="text-lg font-mono font-bold text-[#f0f6fc] mt-0.5">1,482</div>
                      </div>
                      <div className="bg-[#0d1117] p-2.5 rounded-lg border border-[#30363d]">
                        <div className="text-[#8b949e]">Total PRs</div>
                        <div className="text-lg font-mono font-bold text-[#f0f6fc] mt-0.5">342</div>
                      </div>
                      <div className="bg-[#0d1117] p-2.5 rounded-lg border border-[#30363d]">
                        <div className="text-[#8b949e]">Contributed To</div>
                        <div className="text-lg font-mono font-bold text-[#f0f6fc] mt-0.5">48 Repos</div>
                      </div>
                      <div className="bg-[#0d1117] p-2.5 rounded-lg border border-[#30363d]">
                        <div className="text-[#8b949e]">Global Rank</div>
                        <div className="text-lg font-mono font-bold text-amber-400 mt-0.5">Top 1%</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Streak Card Simulation */}
                {config.showStreakCard && (
                  <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-[#58a6ff]">
                      <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-orange-500" /> Commit Streak Stats</span>
                      <span className="text-[10px] font-mono text-emerald-400">ACTIVE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-[#0d1117] p-2.5 rounded-lg border border-[#30363d]">
                        <div className="text-[#8b949e]">Current</div>
                        <div className="text-base font-mono font-bold text-[#f0f6fc] mt-0.5">24 Days</div>
                      </div>
                      <div className="bg-[#0d1117] p-2.5 rounded-lg border border-[#30363d]">
                        <div className="text-[#8b949e]">Longest</div>
                        <div className="text-base font-mono font-bold text-[#f0f6fc] mt-0.5">112 Days</div>
                      </div>
                      <div className="bg-[#0d1117] p-2.5 rounded-lg border border-[#30363d]">
                        <div className="text-[#8b949e]">2026 Total</div>
                        <div className="text-base font-mono font-bold text-emerald-400 mt-0.5">890</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 6. Eat-the-Grid Snake Animation Mockup */}
            {config.showSnakeAnimation && (
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-[#f0f6fc] flex items-center gap-2">
                    <span>🐍 Automated Contribution Grid Snake</span>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">Daily Actions Cron</span>
                  </div>
                </div>

                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 overflow-hidden relative">
                  <div className="grid grid-cols-24 gap-1.5 h-20 items-center justify-items-center opacity-80">
                    {Array.from({ length: 96 }).map((_, i) => {
                      const active = (i * 7) % 5 === 0;
                      const superActive = (i * 13) % 9 === 0;
                      return (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 rounded-sm transition-all ${
                            superActive
                              ? 'bg-emerald-400 shadow-sm shadow-emerald-400'
                              : active
                              ? 'bg-emerald-600'
                              : 'bg-[#21262d]'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
