import React from 'react';
import { 
  Palette, 
  Type, 
  Ruler, 
  ShieldAlert, 
  Smile, 
  Sparkles, 
  Activity, 
  LayoutGrid, 
  Maximize2,
  Check,
  Code
} from 'lucide-react';
import { DESIGN_SYSTEM_RULES, THEMES } from '../data/profileData';
import { ProfileConfig } from '../types';

interface DesignSystemViewProps {
  config: ProfileConfig;
}

export const DesignSystemView: React.FC<DesignSystemViewProps> = ({ config }) => {
  const currentTheme = THEMES[config.theme] || THEMES.darkSlate;

  const categoryIcons: Record<string, any> = {
    'Color Palette': Palette,
    'Typography': Type,
    'Spacing': Ruler,
    'Badge Rules': ShieldAlert,
    'Icon Rules': Smile,
    'SVG Style': Sparkles,
    'Animation Rules': Activity,
    'Section Layout': LayoutGrid,
    'Widget Placement': LayoutGrid,
    'Responsive Guidelines': Maximize2,
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 lg:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
            <Palette className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-[#f0f6fc]">Brand Design System & Tokens</h2>
            <p className="text-xs text-[#8b949e]">Mathematical spacing, optical typography, WCAG AA color tokens, and badge rules</p>
          </div>
        </div>

        {/* Live Theme Color Chips */}
        <div className="pt-4 border-t border-[#30363d] grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-[#0d1117] p-3 rounded-lg border border-[#30363d] flex items-center gap-3">
            <span className="w-6 h-6 rounded-md shadow-inner" style={{ backgroundColor: currentTheme.bg }} />
            <div>
              <div className="text-[10px] text-[#8b949e]">Canvas Background</div>
              <div className="text-xs font-mono font-bold text-[#f0f6fc]">{currentTheme.bg}</div>
            </div>
          </div>

          <div className="bg-[#0d1117] p-3 rounded-lg border border-[#30363d] flex items-center gap-3">
            <span className="w-6 h-6 rounded-md shadow-inner" style={{ backgroundColor: currentTheme.cardBg }} />
            <div>
              <div className="text-[10px] text-[#8b949e]">Card Surface</div>
              <div className="text-xs font-mono font-bold text-[#f0f6fc]">{currentTheme.cardBg}</div>
            </div>
          </div>

          <div className="bg-[#0d1117] p-3 rounded-lg border border-[#30363d] flex items-center gap-3">
            <span className="w-6 h-6 rounded-md shadow-inner" style={{ backgroundColor: currentTheme.accent }} />
            <div>
              <div className="text-[10px] text-[#8b949e]">Primary Accent</div>
              <div className="text-xs font-mono font-bold text-[#f0f6fc]">{currentTheme.accent}</div>
            </div>
          </div>

          <div className="bg-[#0d1117] p-3 rounded-lg border border-[#30363d] flex items-center gap-3">
            <span className="w-6 h-6 rounded-md shadow-inner" style={{ backgroundColor: currentTheme.cardBorder }} />
            <div>
              <div className="text-[10px] text-[#8b949e]">Border Stroke</div>
              <div className="text-xs font-mono font-bold text-[#f0f6fc]">{currentTheme.cardBorder}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Design Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DESIGN_SYSTEM_RULES.map((rule) => {
          const IconComp = categoryIcons[rule.category] || Sparkles;
          return (
            <div
              key={rule.category}
              className="bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff]/40 rounded-xl p-5 space-y-4 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[#30363d] pb-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#f0f6fc]">{rule.category}</h3>
                  <p className="text-[11px] text-[#8b949e]">{rule.title}</p>
                </div>
              </div>

              <p className="text-xs text-[#8b949e] leading-relaxed">
                {rule.description}
              </p>

              <div className="bg-[#0d1117] rounded-lg p-3 space-y-2 text-xs">
                {rule.specs.map((spec, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-[#30363d]/50 last:border-0 pb-1.5 last:pb-0">
                    <span className="text-[#8b949e] font-medium">{spec.label}:</span>
                    <span className="font-mono text-[#f0f6fc] font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              {rule.exampleCode && (
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#8b949e] flex items-center gap-1">
                    <Code className="w-3 h-3 text-blue-400" /> Badge Syntax Example
                  </div>
                  <pre className="bg-[#0d1117] p-2.5 rounded border border-[#30363d] text-[10px] font-mono text-emerald-400 overflow-x-auto whitespace-pre">
                    {rule.exampleCode}
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
