import React from 'react';
import { 
  FileCode, 
  Eye, 
  Palette, 
  FolderTree, 
  Image as ImageIcon, 
  Workflow, 
  Settings, 
  Copy, 
  Check, 
  Sparkles,
  Github
} from 'lucide-react';
import { ProfileConfig, ThemePreset } from '../types';
import { THEMES } from '../data/profileData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  config: ProfileConfig;
  setConfig: React.Dispatch<React.SetStateAction<ProfileConfig>>;
  onCopyReadme: () => void;
  copiedReadme: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  config,
  setConfig,
  onCopyReadme,
  copiedReadme,
}) => {
  const tabs = [
    { id: 'plan', label: 'Architecture & Plan', icon: FileCode },
    { id: 'preview', label: 'Live README', icon: Eye },
    { id: 'design', label: 'Design System', icon: Palette },
    { id: 'files', label: 'Folder Tree', icon: FolderTree },
    { id: 'svgs', label: 'SVG Assets', icon: ImageIcon },
    { id: 'workflows', label: 'GitHub Workflows', icon: Workflow },
    { id: 'customize', label: 'Customizer', icon: Settings },
  ];

  const themeKeys = Object.keys(THEMES) as ThemePreset[];

  return (
    <header className="sticky top-0 z-50 bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d] px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-[#f0f6fc] tracking-tight">GitHub Profile Redesign Studio</h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">v3.6 Pro</span>
            </div>
            <p className="text-xs text-[#8b949e]">Architecting a world-class developer brand for @{config.username}</p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Selector */}
          <div className="flex items-center gap-1.5 bg-[#161b22] border border-[#30363d] rounded-lg p-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 ml-1.5" />
            <select
              value={config.theme}
              onChange={(e) => setConfig({ ...config, theme: e.target.value as ThemePreset })}
              className="bg-transparent text-xs text-[#f0f6fc] font-medium outline-none cursor-pointer pr-2"
            >
              {themeKeys.map((key) => (
                <option key={key} value={key} className="bg-[#161b22] text-[#f0f6fc]">
                  {THEMES[key].name}
                </option>
              ))}
            </select>
          </div>

          {/* Copy README Markdown Button */}
          <button
            onClick={onCopyReadme}
            className={`flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all shadow-sm ${
              copiedReadme
                ? 'bg-emerald-600 text-white'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20'
            }`}
          >
            {copiedReadme ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedReadme ? 'Copied README!' : 'Copy README.md'}
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-7xl mx-auto mt-3 overflow-x-auto no-scrollbar border-t border-[#30363d]/50 pt-2">
        <nav className="flex items-center gap-1 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#1f242d] text-[#58a6ff] border border-[#58a6ff]/30 shadow-inner'
                    : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#161b22]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#58a6ff]' : 'text-[#8b949e]'}`} />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
