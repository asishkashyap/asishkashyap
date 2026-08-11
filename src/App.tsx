import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { VCardSidebar } from './components/VCardSidebar';
import { HeroSection } from './components/HeroSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GitHubStatsSection } from './components/GitHubStatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProfileStudioModal } from './components/ProfileStudioModal';
import { DEFAULT_PROFILE, THEMES } from './data/profileData';
import { Terminal, Code2, FolderGit2, BarChart3, Send, User } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState(DEFAULT_PROFILE);
  const [studioModalOpen, setStudioModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'about' | 'terminal' | 'skills' | 'projects' | 'metrics' | 'contact'>('about');

  useEffect(() => {
    const currentTheme = THEMES[config.theme] || THEMES.darkSlate;
    const root = document.documentElement;
    root.style.setProperty('--theme-bg', currentTheme.bg);
    root.style.setProperty('--theme-card-bg', currentTheme.cardBg);
    root.style.setProperty('--theme-card-border', currentTheme.cardBorder);
    root.style.setProperty('--theme-text-primary', currentTheme.textPrimary);
    root.style.setProperty('--theme-text-secondary', currentTheme.textSecondary);
    root.style.setProperty('--theme-accent', currentTheme.accent);
    root.style.setProperty('--theme-accent-glow', currentTheme.accentGlow || 'rgba(255, 219, 112, 0.15)');
    root.style.setProperty('--theme-badge-bg', currentTheme.badgeBg);
    root.style.setProperty('--theme-badge-text', currentTheme.badgeText);
  }, [config.theme]);

  const handleNavigateToProjects = () => {
    setActiveTab('projects');
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navTabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'metrics', label: 'Metrics', icon: BarChart3 },
    { id: 'contact', label: 'Contact', icon: Send },
  ] as const;

  const scrollToSection = (id: typeof activeTab) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text-secondary)] font-sans selection:bg-[var(--theme-accent)]/20 selection:text-[var(--theme-accent)] transition-colors duration-300">
      {/* Top Header Navigation */}
      <Navbar
        config={config}
        setConfig={setConfig}
        onOpenStudio={() => setStudioModalOpen(true)}
      />

      {/* Main Page Layout Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-col lg:flex-row items-start gap-8 relative">
        
        {/* Left Sticky/Collapsible vCard Sidebar */}
        <VCardSidebar config={config} />

        {/* Right Main Content vCard Card */}
        <main className="bg-[var(--theme-card-bg)] border border-[var(--theme-card-border)] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative flex-1 min-w-0 w-full space-y-14 transition-colors duration-300">
          
          {/* Top Embedded Navbar inside Main Card */}
          <div className="flex items-center justify-between border-b border-[var(--theme-card-border)] pb-4 mb-6 overflow-x-auto no-scrollbar">
            <nav className="flex items-center gap-1 sm:gap-2">
              {navTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all shrink-0 ${
                      isActive
                        ? 'text-[var(--theme-accent)] bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] shadow-md font-bold'
                        : 'text-[#9f9f9f] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-badge-bg)]/60'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[var(--theme-accent)]' : 'text-[#9f9f9f]'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* About / Hero Section */}
          <HeroSection
            config={config}
            onNavigateToProjects={handleNavigateToProjects}
          />

          {/* Interactive Terminal */}
          <InteractiveTerminal config={config} />

          {/* Skills Section */}
          <SkillsSection />

          {/* Projects Section */}
          <ProjectsSection config={config} />

          {/* Metrics Section */}
          <GitHubStatsSection config={config} />

          {/* Contact Section */}
          <ContactSection config={config} />

        </main>

      </div>

      {/* Footer */}
      <Footer
        config={config}
        onOpenStudio={() => setStudioModalOpen(true)}
      />

      {/* Profile Studio Modal */}
      <ProfileStudioModal
        isOpen={studioModalOpen}
        onClose={() => setStudioModalOpen(false)}
        config={config}
        setConfig={setConfig}
      />
    </div>
  );
}
