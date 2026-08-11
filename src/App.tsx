import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GitHubStatsSection } from './components/GitHubStatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProfileStudioModal } from './components/ProfileStudioModal';
import { DEFAULT_PROFILE } from './data/profileData';

export default function App() {
  const [config, setConfig] = useState(DEFAULT_PROFILE);
  const [studioModalOpen, setStudioModalOpen] = useState(false);

  const handleNavigateToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Navbar Header */}
      <Navbar
        config={config}
        setConfig={setConfig}
        onOpenStudio={() => setStudioModalOpen(true)}
      />

      {/* Main Developer Portfolio Content */}
      <main className="space-y-4">
        {/* Hero Section: Displaying Asish Kashyap */}
        <HeroSection
          config={config}
          onNavigateToProjects={handleNavigateToProjects}
        />

        {/* Interactive Developer Terminal */}
        <InteractiveTerminal config={config} />

        {/* Skills & Expertise Grid */}
        <SkillsSection />

        {/* Featured Open Source Repositories */}
        <ProjectsSection config={config} />

        {/* Live GitHub Analytics & Streak Metrics */}
        <GitHubStatsSection config={config} />

        {/* Contact & Message Form */}
        <ContactSection config={config} />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onOpenStudio={() => setStudioModalOpen(true)}
      />

      {/* Profile Studio & Exporter Modal */}
      <ProfileStudioModal
        isOpen={studioModalOpen}
        onClose={() => setStudioModalOpen(false)}
        config={config}
        setConfig={setConfig}
      />
    </div>
  );
}
