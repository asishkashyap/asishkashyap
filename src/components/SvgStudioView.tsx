import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Copy, 
  Check, 
  Code, 
  Eye, 
  Download,
  Sparkles
} from 'lucide-react';
import { SVG_ASSETS, SvgAssetInfo } from '../data/svgAssets';
import { ProfileConfig } from '../types';

interface SvgStudioViewProps {
  config: ProfileConfig;
}

export const SvgStudioView: React.FC<SvgStudioViewProps> = ({ config }) => {
  const [selectedSvgId, setSelectedSvgId] = useState<string>('banner');
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState<boolean>(false);

  const activeAsset = SVG_ASSETS.find((s) => s.id === selectedSvgId) || SVG_ASSETS[0];
  const activeSvgCode = activeAsset.generateSvg(config);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSvgCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([activeSvgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeAsset.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#f0f6fc]">SVG Vector Asset Studio (7 Assets)</h2>
            <p className="text-xs text-[#8b949e]">Production-ready vector graphics tailored for GitHub dark mode rendering</p>
          </div>
        </div>
      </div>

      {/* Asset Grid Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {SVG_ASSETS.map((asset) => {
          const isSelected = selectedSvgId === asset.id;
          return (
            <button
              key={asset.id}
              onClick={() => setSelectedSvgId(asset.id)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-20 ${
                isSelected
                  ? 'bg-blue-600/20 border-[#58a6ff] text-[#58a6ff] shadow-md shadow-blue-500/10'
                  : 'bg-[#161b22] border-[#30363d] text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#30363d]/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono uppercase">SVG</span>
              </div>
              <div>
                <div className="text-xs font-bold text-[#f0f6fc] truncate">{asset.filename}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active SVG Display Area */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden space-y-0">
        <div className="bg-[#0d1117] border-b border-[#30363d] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#f0f6fc] flex items-center gap-2">
              <span>{activeAsset.title}</span>
              <span className="text-xs font-mono text-blue-400 font-normal">assets/{activeAsset.filename}</span>
            </h3>
            <p className="text-xs text-[#8b949e] mt-0.5">{activeAsset.description}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#161b22] border border-[#30363d] rounded-lg p-1 text-xs">
              <button
                onClick={() => setViewMode('preview')}
                className={`px-3 py-1 rounded-md font-semibold transition-all ${
                  viewMode === 'preview' ? 'bg-[#1f242d] text-[#58a6ff]' : 'text-[#8b949e]'
                }`}
              >
                Visual Preview
              </button>
              <button
                onClick={() => setViewMode('code')}
                className={`px-3 py-1 rounded-md font-semibold transition-all ${
                  viewMode === 'code' ? 'bg-[#1f242d] text-[#58a6ff]' : 'text-[#8b949e]'
                }`}
              >
                XML Markup
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied XML!' : 'Copy SVG'}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] border border-[#30363d] transition-all"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              Download
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 bg-[#050811]">
          {viewMode === 'preview' ? (
            <div 
              className="w-full rounded-xl overflow-hidden border border-[#30363d] shadow-2xl p-2 bg-[#0d1117]"
              dangerouslySetInnerHTML={{ __html: activeSvgCode }}
            />
          ) : (
            <div className="p-4 bg-[#0d1117] rounded-xl border border-[#30363d] font-mono text-xs text-[#8b949e] overflow-x-auto whitespace-pre leading-relaxed select-all">
              {activeSvgCode}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
