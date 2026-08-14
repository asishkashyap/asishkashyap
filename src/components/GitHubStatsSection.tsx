import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, Activity, Code, Flame, Sparkles, TrendingUp, Grid, GitCommit, FolderGit2, CheckCircle2 } from 'lucide-react';
import { ProfileConfig } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

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

  const summaryStats = [
    { label: 'Total Contributions', count: 1850, suffix: '+', icon: GitCommit, color: 'text-[#ffdb70]' },
    { label: 'Public Repositories', count: 24, suffix: '', icon: FolderGit2, color: 'text-sky-400' },
    { label: 'Max Commit Streak', count: 48, suffix: ' Days', icon: Flame, color: 'text-amber-400' },
    { label: 'Uptime & Reliability', count: 99, suffix: '.9%', icon: CheckCircle2, color: 'text-emerald-400' },
  ];

  return (
    <motion.section
      id="metrics"
      className="space-y-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Section Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#fafafa] vcard-title-heading">
          GitHub Analytics & Metrics
        </h2>
        <p className="text-xs sm:text-sm text-[#9f9f9f] mt-3 leading-relaxed">
          Real-time contribution stats, language breakdown, commit streaks, and activity matrix for @{config.username}.
        </p>
      </div>

      {/* Animated Counter Summary Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {summaryStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] hover:border-[#ffdb70]/50 rounded-2xl p-3.5 flex flex-col justify-between shadow-md transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#9f9f9f] font-mono">{stat.label}</span>
                <Icon className={`w-3.5 h-3.5 ${stat.color}`} />
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-[#fafafa] mt-2 font-mono">
                <AnimatedCounter value={stat.count} suffix={stat.suffix} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Metrics Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Main Stats Card */}
        {config.showStatsCard && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:border-[#ffdb70]/60 transition-colors"
          >
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
          </motion.div>
        )}

        {/* Top Languages Card */}
        {config.showTopLangs && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:border-[#ffdb70]/60 transition-colors"
          >
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
          </motion.div>
        )}

        {/* Streak Stats Card */}
        {config.showStreakCard && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.19 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg hover:border-[#ffdb70]/60 transition-colors"
          >
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
          </motion.div>
        )}

      </div>

      {/* Contribution Graph & Snake Animation Card */}
      {config.showSnakeAnimation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-5 shadow-xl space-y-4"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#383838] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffdb70]" />
              <h3 className="text-sm font-bold text-[#fafafa]">
                Contribution Matrix & Activity Graph
              </h3>
            </div>

            {/* View Switcher Tabs with Animated Sliding Pill */}
            <div className="flex items-center gap-1 bg-[#2b2b2c] p-1 rounded-xl border border-[#383838] relative">
              {[
                { id: 'snake', label: 'Snake Grid', icon: Sparkles },
                { id: 'activity', label: '3D Trend', icon: TrendingUp },
                { id: 'heatmap', label: 'Contribution Heatmap', icon: Grid },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeGraph === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGraph(tab.id as any)}
                    className={`relative flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors ${
                      isSelected
                        ? 'text-[#121212] font-bold'
                        : 'text-[#9f9f9f] hover:text-[#fafafa]'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeGraphTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#ffdb70] to-[#e2b714] rounded-lg shadow-sm -z-10"
                        transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                      />
                    )}
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
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
        </motion.div>
      )}
    </motion.section>
  );
};

