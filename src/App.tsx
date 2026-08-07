import React, { useState } from 'react';
import { Header } from './components/Header';
import { ArchitecturePlanView } from './components/ArchitecturePlanView';
import { LiveReadmePreview } from './components/LiveReadmePreview';
import { DesignSystemView } from './components/DesignSystemView';
import { FolderTreeExplorer } from './components/FolderTreeExplorer';
import { SvgStudioView } from './components/SvgStudioView';
import { WorkflowsView } from './components/WorkflowsView';
import { ProfileCustomizer } from './components/ProfileCustomizer';
import { DEFAULT_PROFILE } from './data/profileData';
import { generateMainReadme } from './data/markdownTemplates';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('plan');
  const [config, setConfig] = useState(DEFAULT_PROFILE);
  const [copiedReadme, setCopiedReadme] = useState<boolean>(false);

  const handleCopyReadme = () => {
    const markdown = generateMainReadme(config);
    navigator.clipboard.writeText(markdown);
    setCopiedReadme(true);
    setTimeout(() => setCopiedReadme(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        config={config}
        setConfig={setConfig}
        onCopyReadme={handleCopyReadme}
        copiedReadme={copiedReadme}
      />

      <main className="px-4 lg:px-8 py-6">
        {activeTab === 'plan' && (
          <ArchitecturePlanView config={config} onNavigateToTab={setActiveTab} />
        )}
        {activeTab === 'preview' && (
          <LiveReadmePreview
            config={config}
            onCopyReadme={handleCopyReadme}
            copiedReadme={copiedReadme}
          />
        )}
        {activeTab === 'design' && <DesignSystemView config={config} />}
        {activeTab === 'files' && <FolderTreeExplorer config={config} />}
        {activeTab === 'svgs' && <SvgStudioView config={config} />}
        {activeTab === 'workflows' && <WorkflowsView />}
        {activeTab === 'customize' && (
          <ProfileCustomizer
            config={config}
            setConfig={setConfig}
            onNavigateToPreview={() => setActiveTab('preview')}
          />
        )}
      </main>
    </div>
  );
}
