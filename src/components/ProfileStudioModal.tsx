import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Eye, Palette, FolderTree, Image as ImageIcon, Workflow, Settings } from 'lucide-react';
import { ProfileConfig, ThemePreset } from '../types';
import { ArchitecturePlanView } from './ArchitecturePlanView';
import { LiveReadmePreview } from './LiveReadmePreview';
import { DesignSystemView } from './DesignSystemView';
import { FolderTreeExplorer } from './FolderTreeExplorer';
import { SvgStudioView } from './SvgStudioView';
import { WorkflowsView } from './WorkflowsView';
import { ProfileCustomizer } from './ProfileCustomizer';
import { generateMainReadme } from '../data/markdownTemplates';

interface ProfileStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProfileConfig;
  setConfig: React.Dispatch<React.SetStateAction<ProfileConfig>>;
}

export const ProfileStudioModal: React.FC<ProfileStudioModalProps> = ({
  isOpen,
  onClose,
  config,
  setConfig,
}) => {
  const [activeTab, setActiveTab] = useState<string>('preview');
  const [copiedReadme, setCopiedReadme] = useState(false);

  if (!isOpen) return null;

  const handleCopyReadme = () => {
    const markdown = generateMainReadme(config);
    navigator.clipboard.writeText(markdown);
    setCopiedReadme(true);
    setTimeout(() => setCopiedReadme(false), 2000);
  };

  const tabs = [
    { id: 'preview', label: 'Live README.md', icon: Eye },
    { id: 'customize', label: 'Edit Profile Data', icon: Settings },
    { id: 'plan', label: 'Architecture & Plan', icon: FileCode },
    { id: 'design', label: 'Design System', icon: Palette },
    { id: 'files', label: 'Folder Tree', icon: FolderTree },
    { id: 'svgs', label: 'SVG Assets', icon: ImageIcon },
    { id: 'workflows', label: 'GitHub Workflows', icon: Workflow },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl w-full max-w-6xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Modal Header */}
        <div className="bg-[#161b22] px-6 py-4 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-sm">
              AK
            </div>
            <div>
              <h3 className="text-base font-bold text-[#f0f6fc]">Developer Profile Studio & Tools</h3>
              <p className="text-xs text-[#8b949e]">Generate README markdown, export SVG assets & edit configuration</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyReadme}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow-sm ${
                copiedReadme
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              {copiedReadme ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedReadme ? 'Copied README!' : 'Copy README.md'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] rounded-lg border border-[#30363d] transition-colors"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Studio Sub-Navigation Tabs */}
        <div className="bg-[#161b22]/50 border-b border-[#30363d] px-6 py-2 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Main Content Container */}
        <div className="p-6 overflow-y-auto flex-1 text-[#f0f6fc]">
          {activeTab === 'preview' && (
            <LiveReadmePreview
              config={config}
              onCopyReadme={handleCopyReadme}
              copiedReadme={copiedReadme}
            />
          )}
          {activeTab === 'customize' && (
            <ProfileCustomizer
              config={config}
              setConfig={setConfig}
              onNavigateToPreview={() => setActiveTab('preview')}
            />
          )}
          {activeTab === 'plan' && (
            <ArchitecturePlanView config={config} onNavigateToTab={setActiveTab} />
          )}
          {activeTab === 'design' && <DesignSystemView config={config} />}
          {activeTab === 'files' && <FolderTreeExplorer config={config} />}
          {activeTab === 'svgs' && <SvgStudioView config={config} />}
          {activeTab === 'workflows' && <WorkflowsView />}
        </div>

      </div>
    </div>
  );
};
