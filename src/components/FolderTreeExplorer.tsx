import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  FileText, 
  ChevronRight, 
  ChevronDown, 
  Copy, 
  Check, 
  FileCode,
  Image as ImageIcon,
  Workflow
} from 'lucide-react';
import { FolderNode, ProfileConfig } from '../types';
import { REPO_FOLDER_TREE } from '../data/profileData';
import { 
  generateMainReadme, 
  generateBrandingGuideDoc, 
  generateCustomizationDoc, 
  generateRoadmapDoc, 
  generateSnakeWorkflow, 
  generateMetricsWorkflow, 
  generateValidateWorkflow, 
  generateLicense 
} from '../data/markdownTemplates';
import { SVG_ASSETS } from '../data/svgAssets';

interface FolderTreeExplorerProps {
  config: ProfileConfig;
}

export const FolderTreeExplorer: React.FC<FolderTreeExplorerProps> = ({ config }) => {
  const [expandedPaths, setExpandedPaths] = useState<Record<string, boolean>>({
    '/': true,
    '/.github': true,
    '/.github/workflows': true,
    '/assets': true,
    '/docs': true,
    '/scripts': true,
  });
  const [selectedFile, setSelectedFile] = useState<string>('/README.md');
  const [copied, setCopied] = useState<boolean>(false);

  const toggleExpand = (path: string) => {
    setExpandedPaths((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  // Get dynamic file content for selected file
  const getFileContent = (path: string): string => {
    if (path === '/README.md') return generateMainReadme(config);
    if (path === '/docs/branding-guide.md') return generateBrandingGuideDoc();
    if (path === '/docs/customization.md') return generateCustomizationDoc();
    if (path === '/docs/roadmap.md') return generateRoadmapDoc();
    if (path === '/.github/workflows/snake.yml') return generateSnakeWorkflow();
    if (path === '/.github/workflows/metrics.yml') return generateMetricsWorkflow();
    if (path === '/.github/workflows/validate.yml') return generateValidateWorkflow();
    if (path === '/LICENSE') return generateLicense();

    // SVGs
    if (path.startsWith('/assets/')) {
      const filename = path.replace('/assets/', '');
      const asset = SVG_ASSETS.find((a) => a.filename === filename);
      if (asset) return asset.generateSvg(config);
    }

    if (path === '/scripts/generate-svgs.js') {
      return `// Node.js script to dynamically generate themed SVG assets\nconst fs = require('fs');\nconsole.log("Generating SVG assets for @${config.username}...");`;
    }

    if (path === '/scripts/update-readme.js') {
      return `// Node.js script to auto-update latest blog posts & GitHub stats\nconsole.log("Syncing README stats...");`;
    }

    return `// File content for ${path}`;
  };

  const handleCopyContent = () => {
    const content = getFileContent(selectedFile);
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderTree = (node: FolderNode) => {
    const isExpanded = expandedPaths[node.path];

    if (node.type === 'folder') {
      return (
        <div key={node.path} className="select-none">
          <div
            onClick={() => toggleExpand(node.path)}
            className="flex items-center gap-2 py-1 px-2 hover:bg-[#21262d] rounded cursor-pointer text-xs text-[#f0f6fc] font-medium transition-all"
          >
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-[#8b949e]" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-[#8b949e]" />
            )}
            {isExpanded ? (
              <FolderOpen className="w-4 h-4 text-amber-400" />
            ) : (
              <Folder className="w-4 h-4 text-amber-400" />
            )}
            <span>{node.name}</span>
          </div>

          {isExpanded && node.children && (
            <div className="pl-4 border-l border-[#30363d]/60 ml-2 space-y-0.5 mt-0.5">
              {node.children.map((child) => renderTree(child))}
            </div>
          )}
        </div>
      );
    }

    // File
    const isSelected = selectedFile === node.path;
    const isSvg = node.name.endsWith('.svg');
    const isYml = node.name.endsWith('.yml');

    return (
      <div
        key={node.path}
        onClick={() => setSelectedFile(node.path)}
        className={`flex items-center justify-between py-1 px-2 rounded cursor-pointer text-xs transition-all ${
          isSelected
            ? 'bg-blue-600/20 text-[#58a6ff] font-semibold border border-blue-500/30'
            : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#161b22]'
        }`}
      >
        <div className="flex items-center gap-2 overflow-hidden truncate">
          {isSvg ? (
            <ImageIcon className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          ) : isYml ? (
            <Workflow className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
          ) : (
            <FileCode className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          )}
          <span className="truncate">{node.name}</span>
        </div>
      </div>
    );
  };

  const activeContent = getFileContent(selectedFile);
  const isSvgFile = selectedFile.endsWith('.svg');

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Directory Explorer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Tree Navigation Sidebar */}
        <div className="lg:col-span-4 bg-[#161b22] border border-[#30363d] rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between border-b border-[#30363d] pb-3 text-xs text-[#8b949e]">
            <span className="font-bold text-[#f0f6fc] flex items-center gap-2">
              <Folder className="w-4 h-4 text-amber-400" />
              Repository File Tree
            </span>
            <span className="font-mono text-[10px]">@{config.username}</span>
          </div>

          <div className="space-y-1 overflow-y-auto max-h-[600px] pr-1">
            {renderTree(REPO_FOLDER_TREE)}
          </div>
        </div>

        {/* Right File Content Inspector */}
        <div className="lg:col-span-8 bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden space-y-0">
          <div className="bg-[#0d1117] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#f0f6fc]">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>{selectedFile}</span>
            </div>

            <button
              onClick={handleCopyContent}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] border border-[#30363d] transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
              {copied ? 'Copied File!' : 'Copy File Content'}
            </button>
          </div>

          {/* SVG Live Graphic Preview if SVG file selected */}
          {isSvgFile && (
            <div className="p-4 bg-[#0d1117] border-b border-[#30363d]">
              <div className="text-[11px] font-mono text-[#8b949e] mb-2">Live Rendered Vector SVG:</div>
              <div 
                className="rounded-lg overflow-hidden border border-[#30363d] bg-[#050811] p-2"
                dangerouslySetInnerHTML={{ __html: activeContent }}
              />
            </div>
          )}

          {/* File Raw Code View */}
          <div className="p-4 bg-[#0d1117] font-mono text-xs text-[#8b949e] max-h-[500px] overflow-auto whitespace-pre leading-relaxed select-all">
            {activeContent}
          </div>
        </div>
      </div>
    </div>
  );
};
