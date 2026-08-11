import React from 'react';
import { BarChart3, Activity, Flame, Code, Sparkles } from 'lucide-react';
import { ProfileConfig } from '../types';

interface GitHubStatsSectionProps {
  config: ProfileConfig;
}

export const GitHubStatsSection: React.FC<GitHubStatsSectionProps> = ({ config }) => {
  return (
    <section id="metrics" className="py-12 border-t border-[#30363d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4" />
            <span>Developer Activity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f6fc]">
            GitHub Analytics & Metrics
          </h2>
          <p className="text-sm text-[#8b949e] mt-1 max-w-2xl">
            Real-time contribution stats, language breakdown, commit streaks, and daily activity metrics for @{config.username}.
          </p>
        </div>

        {/* Stats Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Main Stats Card */}
          {config.showStatsCard && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:border-blue-500/40 transition-colors">
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#30363d]/60 text-xs font-semibold text-[#f0f6fc]">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <Activity className="w-4 h-4" /> Profile Overview
                </span>
                <span className="font-mono text-[10px] text-[#8b949e]">GitHub API</span>
              </div>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${config.username}&show_icons=true&theme=dark&bg_color=0d1117&title_color=58a6ff&text_color=8b949e&icon_color=58a6ff&border_color=30363d&hide_border=false`}
                alt={`${config.username}'s GitHub Stats`}
                className="w-full max-w-md rounded-xl object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Top Languages Card */}
          {config.showTopLangs && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:border-blue-500/40 transition-colors">
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#30363d]/60 text-xs font-semibold text-[#f0f6fc]">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Code className="w-4 h-4" /> Top Languages
                </span>
                <span className="font-mono text-[10px] text-[#8b949e]">Most Used</span>
              </div>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${config.username}&layout=compact&theme=dark&bg_color=0d1117&title_color=58a6ff&text_color=8b949e&border_color=30363d`}
                alt={`${config.username}'s Top Languages`}
                className="w-full max-w-md rounded-xl object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Streak Stats Card */}
          {config.showStreakCard && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:border-blue-500/40 transition-colors">
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#30363d]/60 text-xs font-semibold text-[#f0f6fc]">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Flame className="w-4 h-4" /> Commit Streak
                </span>
                <span className="font-mono text-[10px] text-[#8b949e]">Consistency</span>
              </div>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${config.username}&theme=dark&background=0d1117&border=30363d&stroke=30363d&ring=58a6ff&fire=f08c36&currStreakLabel=58a6ff`}
                alt={`${config.username}'s Commit Streak`}
                className="w-full max-w-md rounded-xl object-contain"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}

        </div>

        {/* Snake Animation Preview */}
        {config.showSnakeAnimation && (
          <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center justify-between border-b border-[#30363d]/60 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-[#f0f6fc]">
                  Contribution Grid & Snake Game Animation
                </h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Automated Daily Action
              </span>
            </div>

            <div className="bg-[#0d1117] p-4 rounded-xl border border-[#30363d]/60 flex items-center justify-center overflow-x-auto">
              <img
                src={`https://raw.githubusercontent.com/${config.username}/${config.username}/main/github-metrics.svg`}
                alt="GitHub Contribution Graph Animation"
                className="w-full max-w-4xl object-contain"
                onError={(e) => {
                  // Fallback contribution graph if svg isn't built on github yet
                  (e.target as HTMLImageElement).src = `https://ghchart.rshah.org/58a6ff/${config.username}`;
                }}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
