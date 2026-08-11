import React, { useState } from 'react';
import { BarChart3, Activity, Code, Flame, Sparkles, TrendingUp, Grid } from 'lucide-react';
import { ProfileConfig } from '../types';

interface GitHubStatsSectionProps {
  config: ProfileConfig;
}

export const GitHubStatsSection: React.FC<GitHubStatsSectionProps> = ({ config }) => {
  const [activeGraph, setActiveGraph] = useState<'snake' | 'activity' | 'heatmap'>('snake');
  const [imgKey, setImgKey] = useState(0);

  // Dark Gold themed GitHub stats URLs
  const primaryStatsUrl = `https://github-readme-stats-one-bice.vercel.app/api?username=${config.username}&show_icons=true&theme=dark&bg_color=1e1e1f&title_color=ffdb70&text_color=d6d6d6&icon_color=ffdb70&border_color=383838&hide_border=false&count_private=true&include_all_commits=true`;
  const fallbackStatsUrl = `https://github-readme-stats.vercel.app/api?username=${config.username}&show_icons=true&theme=dark&bg_color=1e1e1f&title_color=ffdb70&text_color=d6d6d6&icon_color=ffdb70&border_color=383838&hide_border=false`;

  const primaryLangsUrl = `https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=${config.username}&layout=compact&theme=dark&bg_color=1e1e1f&title_color=ffdb70&text_color=d6d6d6&border_color=383838&hide_border=false`;
  const fallbackLangsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${config.username}&layout=compact&theme=dark&bg_color=1e1e1f&title_color=ffdb70&text_color=d6d6d6&border_color=383838`;

  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${config.username}&theme=dark&background=1e1e1f&border=383838&stroke=383838&ring=ffdb70&fire=ffdb70&currStreakLabel=ffdb70`;

  const snakeDarkUrl = `https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake-dark.svg`;
  const snakeLightUrl = `https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake.svg`;
  const activityGraphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${config.username}&theme=github-dark&bg_color=1e1e1f&color=ffdb70&line=ffdb70&point=e2b714&area=true&hide_border=true`;
  const ghChartUrl = `https://ghchart.rshah.org/ffdb70/${config.username}`;

  return (
    <section id="metrics" className="space-y-6">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#fafafa] vcard-title-heading">
          GitHub Analytics & Metrics
        </h2>
        <p className="text-xs sm:text-sm text-[#9f9f9f] mt-3 leading-relaxed">
          Real-time contribution stats, language breakdown, commit streaks, and activity matrix for @{config.username}.
        </p>
      </div>

      {/* Metrics Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Main Stats Card */}
        {config.showStatsCard && (
          <div className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:border-[#ffdb70]/50 transition-colors">
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#383838] text-xs font-bold text-[#fafafa]">
              <span className="flex items-center gap-1.5 text-[#ffdb70]">
                <Activity className="w-4 h-4" /> Profile Overview
              </span>
              <span className="font-mono text-[10px] text-[#9f9f9f]">GitHub API</span>
            </div>
            <img
              key={`stats-${imgKey}`}
              src={primaryStatsUrl}
              alt="GitHub Profile Overview Statistics"
              className="w-full h-auto max-h-[175px] object-contain rounded-xl"
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
          <div className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:border-[#ffdb70]/50 transition-colors">
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#383838] text-xs font-bold text-[#fafafa]">
              <span className="flex items-center gap-1.5 text-[#ffdb70]">
                <Code className="w-4 h-4" /> Top Languages
              </span>
              <span className="font-mono text-[10px] text-[#9f9f9f]">Most Used</span>
            </div>
            <img
              key={`langs-${imgKey}`}
              src={primaryLangsUrl}
              alt="Most Used Programming Languages"
              className="w-full h-auto max-h-[175px] object-contain rounded-xl"
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
          <div className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:border-[#ffdb70]/50 transition-colors">
            <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#383838] text-xs font-bold text-[#fafafa]">
              <span className="flex items-center gap-1.5 text-[#ffdb70]">
                <Flame className="w-4 h-4 text-[#ffdb70]" /> Commit Streak
              </span>
              <span className="font-mono text-[10px] text-[#9f9f9f]">Consistency</span>
            </div>
            <img
              key={`streak-${imgKey}`}
              src={streakUrl}
              alt="GitHub Commit Streak Statistics"
              className="w-full h-auto max-h-[175px] object-contain rounded-xl"
              loading="lazy"
            />
          </div>
        )}

      </div>

      {/* Contribution Graph & Snake Animation Card */}
      {config.showSnakeAnimation && (
        <div className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#383838] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffdb70]" />
              <h3 className="text-sm font-bold text-[#fafafa]">
                Contribution Matrix & Activity Graph
              </h3>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1 bg-[#2b2b2c] p-1 rounded-xl border border-[#383838]">
              <button
                onClick={() => setActiveGraph('snake')}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${
                  activeGraph === 'snake'
                    ? 'bg-gradient-to-r from-[#ffdb70] to-[#e2b714] text-[#121212] font-bold shadow-sm'
                    : 'text-[#9f9f9f] hover:text-[#fafafa]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Snake Grid</span>
              </button>
              <button
                onClick={() => setActiveGraph('activity')}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${
                  activeGraph === 'activity'
                    ? 'bg-gradient-to-r from-[#ffdb70] to-[#e2b714] text-[#121212] font-bold shadow-sm'
                    : 'text-[#9f9f9f] hover:text-[#fafafa]'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>3D Trend</span>
              </button>
              <button
                onClick={() => setActiveGraph('heatmap')}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${
                  activeGraph === 'heatmap'
                    ? 'bg-gradient-to-r from-[#ffdb70] to-[#e2b714] text-[#121212] font-bold shadow-sm'
                    : 'text-[#9f9f9f] hover:text-[#fafafa]'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Contribution Heatmap</span>
              </button>
            </div>
          </div>

          {/* Display Container */}
          <div className="bg-[#121212] p-4 rounded-xl border border-[#383838] flex items-center justify-center overflow-x-auto min-h-[180px]">
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
                alt="GitHub 3D Activity Graph"
                className="w-full max-w-4xl object-contain min-h-[180px]"
                loading="lazy"
              />
            )}

            {activeGraph === 'heatmap' && (
              <div className="w-full flex flex-col items-center gap-2 py-2">
                <p className="text-xs text-[#9f9f9f] font-mono">@{config.username}'s Year-round Contribution Matrix</p>
                <img
                  key={`heatmap-${imgKey}`}
                  src={ghChartUrl}
                  alt="GitHub Contribution Matrix"
                  className="w-full max-w-4xl object-contain"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
