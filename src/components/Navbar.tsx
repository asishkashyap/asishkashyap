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
    <header className="sticky top-0 z-50 bg-[var(--theme-bg)]/95 backdrop-blur-md border-b border-[var(--theme-card-border)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center text-[var(--theme-accent)] font-mono font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            AK
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--theme-text-primary)] text-base group-hover:text-[var(--theme-accent)] transition-colors">
                {config.fullName}
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--theme-badge-bg)] text-[var(--theme-accent)] border border-[var(--theme-card-border)] font-mono font-medium">
                Senior DevSecOps & AI
              </span>
            </div>
            <p className="text-xs text-[#9f9f9f]">@{config.username}</p>
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
                className="flex items-center gap-1.5 text-xs font-semibold text-[var(--theme-text-secondary)] hover:text-[var(--theme-accent)] px-3 py-2 rounded-xl hover:bg-[var(--theme-badge-bg)] transition-all"
              >
                <Icon className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Selector */}
          <div className="hidden sm:flex items-center gap-1.5 bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] rounded-xl px-2.5 py-1.5 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[var(--theme-accent)]" />
            <select
              value={config.theme}
              onChange={(e) => setConfig({ ...config, theme: e.target.value as ThemePreset })}
              className="bg-transparent text-[var(--theme-text-primary)] font-medium outline-none cursor-pointer pr-1 text-xs"
              aria-label="Select Theme"
            >
              {themeKeys.map((key) => (
                <option key={key} value={key} className="bg-[var(--theme-card-bg)] text-[var(--theme-text-primary)]">
                  {THEMES[key].name}
                </option>
              ))}
            </select>
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex items-center gap-1.5 border-l border-[var(--theme-card-border)] pl-2">
            <a
              href={`https://github.com/${config.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-accent)] hover:bg-[var(--theme-badge-bg)] rounded-xl transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-accent)] hover:bg-[var(--theme-badge-bg)] rounded-xl transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${config.email}`}
              className="p-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-accent)] hover:bg-[var(--theme-badge-bg)] rounded-xl transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* README Studio / Export Tool Modal Trigger */}
          <button
            onClick={onOpenStudio}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl text-[#121212] transition-all shadow-md hover:scale-[1.02]"
            style={{ backgroundColor: THEMES[config.theme]?.accent || '#ffdb70' }}
            title="Open Profile Studio & README Exporter"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-bold">Profile Studio</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-accent)] bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] rounded-xl"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1e1e1f] border-b border-[#383838] px-4 py-3 space-y-2 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium text-[#fafafa] p-2 rounded-xl hover:bg-[#2b2b2c]"
                >
                  <Icon className="w-4 h-4 text-[#ffdb70]" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#383838] flex items-center justify-between">
            <span className="text-xs text-[#9f9f9f]">Theme:</span>
            <select
              value={config.theme}
              onChange={(e) => setConfig({ ...config, theme: e.target.value as ThemePreset })}
              className="bg-[#2b2b2c] text-[#fafafa] text-xs p-1.5 rounded-xl border border-[#383838]"
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
