import React, { useState } from 'react';
import { BarChart3, Activity, Flame, Code, Sparkles, TrendingUp, Grid, RefreshCw } from 'lucide-react';
import { ProfileConfig } from '../types';

interface GitHubStatsSectionProps {
  config: ProfileConfig;
}

export const GitHubStatsSection: React.FC<GitHubStatsSectionProps> = ({ config }) => {
  const [activeGraph, setActiveGraph] = useState<'snake' | 'activity' | 'heatmap'>('snake');
  const [imgKey, setImgKey] = useState(0);

  const primaryStatsUrl = `https://github-readme-stats-one-bice.vercel.app/api?username=${config.username}&show_icons=true&theme=github_dark&hide_border=true&count_private=true&include_all_commits=true`;
  const fallbackStatsUrl = `https://github-readme-stats.vercel.app/api?username=${config.username}&show_icons=true&theme=dark&bg_color=131b28&title_color=38bdf8&text_color=94a3b8&icon_color=38bdf8&border_color=232f45&hide_border=false`;

  const primaryLangsUrl = `https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=${config.username}&layout=compact&theme=github_dark&hide_border=true`;
  const fallbackLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${config.username}&layout=compact&theme=dark&bg_color=131b28&title_color=38bdf8&text_color=94a3b8&border_color=232f45`;

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${config.username}&theme=dark&background=131b28&border=232f45&stroke=232f45&ring=38bdf8&fire=38bdf8&currStreakLabel=38bdf8`;

  const snakeDarkUrl = `https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake-dark.svg`;
  const snakeLightUrl = `https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake.svg`;
  const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${config.username}&theme=github-dark&bg_color=0b0f17&color=38bdf8&line=38bdf8&point=7dd3fc&area=true&hide_border=true`;
  const ghChartUrl = `https://ghchart.rshah.org/38bdf8/${config.username}`;

  return (
    <section id="metrics" className="py-12 border-t border-[#232f45]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4" />
            <span>Developer Activity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f8fafc]">
            GitHub Analytics & Metrics
          </h2>
          <p className="text-sm text-[#94a3b8] mt-1 max-w-2xl">
            Real-time contribution stats, language breakdown, commit streaks, and daily activity metrics for @{config.username}.
          </p>
        </div>

        {/* Stats Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Main Stats Card */}
          {config.showStatsCard && (
            <div className="bg-[#131b28] border border-[#232f45] rounded-2xl p-4 flex flex-col items-center justify-center shadow-md hover:border-sky-500/40 transition-colors">
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#232f45] text-xs font-semibold text-[#f8fafc]">
                <span className="flex items-center gap-1.5 text-sky-400">
                  <Activity className="w-4 h-4" /> Profile Overview
                </span>
                <span className="font-mono text-[10px] text-[#94a3b8]">GitHub API</span>
              </div>
              <img
                key={`stats-${imgKey}`}
                src={primaryStatsUrl}
                alt={`${config.username}'s GitHub Stats`}
                className="w-full max-w-md rounded-xl object-contain min-h-[160px]"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== fallbackStatsUrl) {
                    target.src = fallbackStatsUrl;
                  }
                }}
              />
            </div>
          )}

          {/* Top Languages Card */}
          {config.showTopLangs && (
            <div className="bg-[#131b28] border border-[#232f45] rounded-2xl p-4 flex flex-col items-center justify-center shadow-md hover:border-sky-500/40 transition-colors">
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#232f45] text-xs font-semibold text-[#f8fafc]">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Code className="w-4 h-4" /> Top Languages
                </span>
                <span className="font-mono text-[10px] text-[#94a3b8]">Most Used</span>
              </div>
              <img
                key={`langs-${imgKey}`}
                src={primaryLangsUrl}
                alt={`${config.username}'s Top Languages`}
                className="w-full max-w-md rounded-xl object-contain min-h-[160px]"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== fallbackLangsUrl) {
                    target.src = fallbackLangsUrl;
                  }
                }}
              />
            </div>
          )}

          {/* Streak Stats Card */}
          {config.showStreakCard && (
            <div className="bg-[#131b28] border border-[#232f45] rounded-2xl p-4 flex flex-col items-center justify-center shadow-md hover:border-sky-500/40 transition-colors">
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#232f45] text-xs font-semibold text-[#f8fafc]">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Flame className="w-4 h-4" /> Commit Streak
                </span>
                <span className="font-mono text-[10px] text-[#94a3b8]">Consistency</span>
              </div>
              <img
                key={`streak-${imgKey}`}
                src={streakUrl}
                alt={`${config.username}'s Commit Streak`}
                className="w-full max-w-md rounded-xl object-contain min-h-[160px]"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          )}

        </div>

        {/* Contribution Graph & Snake Animation Card */}
        {config.showSnakeAnimation && (
          <div className="bg-[#131b28] border border-[#232f45] rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#232f45] pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-bold text-[#f8fafc]">
                  Contribution Matrix & Activity Insights
                </h3>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 bg-[#0b0f17] p-1 rounded-xl border border-[#232f45]">
                <button
                  onClick={() => setActiveGraph('snake')}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${
                    activeGraph === 'snake'
                      ? 'bg-sky-600 text-white font-semibold shadow'
                      : 'text-[#94a3b8] hover:text-[#f8fafc]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Snake Animation</span>
                </button>
                <button
                  onClick={() => setActiveGraph('activity')}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${
                    activeGraph === 'activity'
                      ? 'bg-sky-600 text-white font-semibold shadow'
                      : 'text-[#94a3b8] hover:text-[#f8fafc]'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Activity Trend</span>
                </button>
                <button
                  onClick={() => setActiveGraph('heatmap')}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${
                    activeGraph === 'heatmap'
                      ? 'bg-sky-600 text-white font-semibold shadow'
                      : 'text-[#94a3b8] hover:text-[#f8fafc]'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Heatmap</span>
                </button>
              </div>
            </div>

            {/* Display Container */}
            <div className="bg-[#0b0f17] p-4 rounded-xl border border-[#232f45] flex items-center justify-center overflow-x-auto min-h-[180px]">
              {activeGraph === 'snake' && (
                <img
                  key={`snake-${imgKey}`}
                  src={snakeDarkUrl}
                  alt="GitHub Contribution Grid Snake Animation"
                  className="w-full max-w-4xl object-contain min-h-[140px]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src === snakeDarkUrl) {
                      target.src = snakeLightUrl;
                    } else if (target.src === snakeLightUrl) {
                      target.src = ghChartUrl;
                    }
                  }}
                />
              )}

              {activeGraph === 'activity' && (
                <img
                  key={`activity-${imgKey}`}
                  src={activityGraphUrl}
                  alt="GitHub Activity Trend Graph"
                  className="w-full max-w-4xl object-contain min-h-[160px]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = ghChartUrl;
                  }}
                />
              )}

              {activeGraph === 'heatmap' && (
                <div className="w-full flex flex-col items-center gap-2 py-2">
                  <p className="text-xs text-[#94a3b8] font-mono">@{config.username}'s Year-round Contribution Matrix</p>
                  <img
                    key={`heatmap-${imgKey}`}
                    src={ghChartUrl}
                    alt="GitHub Contribution Heatmap"
                    className="w-full max-w-4xl object-contain"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
