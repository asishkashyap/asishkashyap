import React from 'react';
import { 
  Settings, 
  User, 
  Sparkles, 
  Code2, 
  Check, 
  Plus, 
  Trash2,
  Sliders,
  Eye
} from 'lucide-react';
import { ProfileConfig, ThemePreset } from '../types';
import { TECH_STACK, THEMES } from '../data/profileData';

interface ProfileCustomizerProps {
  config: ProfileConfig;
  setConfig: React.Dispatch<React.SetStateAction<ProfileConfig>>;
  onNavigateToPreview: () => void;
}

export const ProfileCustomizer: React.FC<ProfileCustomizerProps> = ({ config, setConfig, onNavigateToPreview }) => {
  const themeKeys = Object.keys(THEMES) as ThemePreset[];

  const handleTechToggle = (techName: string) => {
    if (config.selectedTechStack.includes(techName)) {
      setConfig({
        ...config,
        selectedTechStack: config.selectedTechStack.filter((t) => t !== techName),
      });
    } else {
      setConfig({
        ...config,
        selectedTechStack: [...config.selectedTechStack, techName],
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
            <Sliders className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#f0f6fc]">Profile Brand Customizer</h2>
            <p className="text-xs text-[#8b949e]">Tune your developer parameters and see live updates instantly</p>
          </div>
        </div>

        <button
          onClick={onNavigateToPreview}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all"
        >
          <Eye className="w-4 h-4" />
          Preview Live Profile
        </button>
      </div>

      {/* Form Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Identity */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#f0f6fc] border-b border-[#30363d] pb-3">
            <User className="w-4 h-4 text-blue-400" />
            Developer Identity
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-[#8b949e] font-semibold mb-1">GitHub Username</label>
              <input
                type="text"
                value={config.username}
                onChange={(e) => setConfig({ ...config, username: e.target.value })}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-[#f0f6fc] font-mono focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#8b949e] font-semibold mb-1">Full Name</label>
              <input
                type="text"
                value={config.fullName}
                onChange={(e) => setConfig({ ...config, fullName: e.target.value })}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-[#f0f6fc] focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#8b949e] font-semibold mb-1">Professional Title</label>
              <input
                type="text"
                value={config.title}
                onChange={(e) => setConfig({ ...config, title: e.target.value })}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-[#f0f6fc] focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#8b949e] font-semibold mb-1">Tagline</label>
              <input
                type="text"
                value={config.tagline}
                onChange={(e) => setConfig({ ...config, tagline: e.target.value })}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-[#f0f6fc] focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#8b949e] font-semibold mb-1">LinkedIn Handle or URL</label>
              <input
                type="text"
                value={config.linkedin}
                onChange={(e) => setConfig({ ...config, linkedin: e.target.value })}
                placeholder="https://www.linkedin.com/in/asish-k-23631115/ or asish-k-23631115"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-[#f0f6fc] font-mono focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#8b949e] font-semibold mb-1">Email Address</label>
              <input
                type="text"
                value={config.email}
                onChange={(e) => setConfig({ ...config, email: e.target.value })}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-[#f0f6fc] font-mono focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-[#8b949e] font-semibold mb-1">Bio</label>
              <textarea
                rows={3}
                value={config.bio}
                onChange={(e) => setConfig({ ...config, bio: e.target.value })}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-2 text-[#f0f6fc] focus:border-blue-500 outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Theme & Display Toggles */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-[#f0f6fc] border-b border-[#30363d] pb-3">
            <Sparkles className="w-4 h-4 text-purple-400" />
            Theme Preset & Visual Modules
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-[#8b949e] font-semibold mb-2">Color Theme Preset</label>
              <div className="grid grid-cols-2 gap-2">
                {themeKeys.map((key) => {
                  const isSelected = config.theme === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setConfig({ ...config, theme: key })}
                      className={`p-2.5 rounded-lg border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-blue-600/20 border-blue-500 text-[#f0f6fc]'
                          : 'bg-[#0d1117] border-[#30363d] text-[#8b949e] hover:text-[#f0f6fc]'
                      }`}
                    >
                      <span className="font-semibold">{THEMES[key].name}</span>
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: THEMES[key].accent }} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-[#30363d] space-y-2">
              <label className="block text-[#8b949e] font-semibold mb-2">Display Modules</label>
              
              <label className="flex items-center justify-between p-2 rounded bg-[#0d1117] border border-[#30363d] cursor-pointer">
                <span>Show CLI Terminal Bio</span>
                <input
                  type="checkbox"
                  checked={config.showTerminalBio}
                  onChange={(e) => setConfig({ ...config, showTerminalBio: e.target.checked })}
                  className="accent-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-2 rounded bg-[#0d1117] border border-[#30363d] cursor-pointer">
                <span>Show GitHub Stats Card</span>
                <input
                  type="checkbox"
                  checked={config.showStatsCard}
                  onChange={(e) => setConfig({ ...config, showStatsCard: e.target.checked })}
                  className="accent-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-2 rounded bg-[#0d1117] border border-[#30363d] cursor-pointer">
                <span>Show Commit Streak Card</span>
                <input
                  type="checkbox"
                  checked={config.showStreakCard}
                  onChange={(e) => setConfig({ ...config, showStreakCard: e.target.checked })}
                  className="accent-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-2 rounded bg-[#0d1117] border border-[#30363d] cursor-pointer">
                <span>Show Snake Contribution Grid</span>
                <input
                  type="checkbox"
                  checked={config.showSnakeAnimation}
                  onChange={(e) => setConfig({ ...config, showSnakeAnimation: e.target.checked })}
                  className="accent-blue-500"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Selector */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-[#f0f6fc] border-b border-[#30363d] pb-3">
          <Code2 className="w-4 h-4 text-emerald-400" />
          Tech Stack Shields Selection ({config.selectedTechStack.length} Selected)
        </div>

        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((badge) => {
            const isSelected = config.selectedTechStack.includes(badge.name);
            return (
              <button
                key={badge.name}
                onClick={() => handleTechToggle(badge.name)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 text-blue-400 shadow-sm'
                    : 'bg-[#0d1117] border-[#30363d] text-[#8b949e] hover:text-[#f0f6fc]'
                }`}
              >
                {isSelected ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Plus className="w-3.5 h-3.5 text-[#8b949e]" />}
                <span>{badge.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
