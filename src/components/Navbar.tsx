import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Terminal, 
  Code2, 
  FolderGit2, 
  BarChart3, 
  Send, 
  FileText,
  Menu,
  X
} from 'lucide-react';
import { ProfileConfig, ThemePreset } from '../types';
import { THEMES } from '../data/profileData';
import { formatLinkedInUrl } from '../utils/urlUtils';

interface NavbarProps {
  config: ProfileConfig;
  setConfig: React.Dispatch<React.SetStateAction<ProfileConfig>>;
  onOpenStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  setConfig,
  onOpenStudio,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeKeys = Object.keys(THEMES) as ThemePreset[];
  const linkedinUrl = formatLinkedInUrl(config.linkedin);

  const navLinks = [
    { name: 'About', href: '#about', icon: Terminal },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Metrics', href: '#metrics', icon: BarChart3 },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f17]/90 backdrop-blur-md border-b border-[#232f45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-lg shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            AK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#f8fafc] text-base group-hover:text-sky-400 transition-colors">
                {config.fullName}
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 font-mono">
                Senior DevSecOps & AI
              </span>
            </div>
            <p className="text-xs text-[#94a3b8]">@{config.username}</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 text-xs font-medium text-[#94a3b8] hover:text-[#f8fafc] px-3 py-2 rounded-lg hover:bg-[#131b28] transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-sky-400" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Selector */}
          <div className="hidden sm:flex items-center gap-1.5 bg-[#131b28] border border-[#232f45] rounded-lg px-2.5 py-1.5 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <select
              value={config.theme}
              onChange={(e) => setConfig({ ...config, theme: e.target.value as ThemePreset })}
              className="bg-transparent text-[#f8fafc] font-medium outline-none cursor-pointer pr-1 text-xs"
              aria-label="Select Theme"
            >
              {themeKeys.map((key) => (
                <option key={key} value={key} className="bg-[#131b28] text-[#f8fafc]">
                  {THEMES[key].name}
                </option>
              ))}
            </select>
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-1.5 border-l border-[#232f45] pl-2">
            <a
              href={`https://github.com/${config.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#94a3b8] hover:text-white hover:bg-[#131b28] rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#94a3b8] hover:text-sky-400 hover:bg-[#131b28] rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${config.email}`}
              className="p-2 text-[#94a3b8] hover:text-emerald-400 hover:bg-[#131b28] rounded-lg transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* README Studio / Export Tool Modal Trigger */}
          <button
            onClick={onOpenStudio}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#161b22] hover:bg-[#21262d] text-[#f0f6fc] border border-[#30363d] transition-colors shadow-sm"
            title="Open Profile Studio & README Exporter"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Profile Tools</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#8b949e] hover:text-[#f0f6fc] bg-[#161b22] border border-[#30363d] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161b22] border-b border-[#30363d] px-4 py-3 space-y-2 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-[#f0f6fc] p-2 rounded-lg hover:bg-[#21262d]"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#30363d] flex items-center justify-between">
            <span className="text-xs text-[#8b949e]">Theme:</span>
            <select
              value={config.theme}
              onChange={(e) => setConfig({ ...config, theme: e.target.value as ThemePreset })}
              className="bg-[#0d1117] text-[#f0f6fc] text-xs p-1.5 rounded border border-[#30363d]"
            >
              {themeKeys.map((key) => (
                <option key={key} value={key}>
                  {THEMES[key].name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </header>
  );
};
