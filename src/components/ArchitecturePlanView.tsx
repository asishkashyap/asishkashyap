import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  FolderTree, 
  Workflow, 
  Image as ImageIcon,
  Rocket,
  Target,
  FileText
} from 'lucide-react';
import { ProfileConfig } from '../types';

interface ArchitecturePlanViewProps {
  config: ProfileConfig;
  onNavigateToTab: (tab: string) => void;
}

export const ArchitecturePlanView: React.FC<ArchitecturePlanViewProps> = ({ config, onNavigateToTab }) => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Strategic Header Hero */}
      <div className="bg-gradient-to-r from-[#161b22] via-[#0d1117] to-[#161b22] border border-[#30363d] rounded-2xl p-6 lg:p-8 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
          <Sparkles className="w-4 h-4 text-blue-400" />
          MASTER ARCHITECTURE & BRANDING ROADMAP
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-[#f0f6fc] tracking-tight">
          GitHub Profile Redesign Strategy for @{config.username}
        </h2>
        <p className="text-sm text-[#8b949e] mt-2 max-w-3xl leading-relaxed">
          Comprehensive blueprint transforming a standard developer profile into a high-authority engineering brand with custom vector graphics, automated metrics workflows, and clean responsive hierarchy.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={() => onNavigateToTab('preview')}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all"
          >
            <Rocket className="w-4 h-4" />
            Inspect Live README Preview
          </button>
          <button
            onClick={() => onNavigateToTab('files')}
            className="flex items-center gap-2 bg-[#21262d] hover:bg-[#30363d] text-[#f0f6fc] text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#30363d] transition-all"
          >
            <FolderTree className="w-4 h-4 text-blue-400" />
            Explore Directory Tree
          </button>
        </div>
      </div>

      {/* 1. Profile Audit & Analysis */}
      <section className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 space-y-6">
        <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#f0f6fc]">1. Profile & Repository Audit</h3>
            <p className="text-xs text-[#8b949e]">Comprehensive evaluation of current assets and brand positioning</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="bg-[#0d1117] border border-emerald-500/20 rounded-lg p-5 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
              <CheckCircle2 className="w-4 h-4" />
              Identified Core Strengths
            </div>
            <ul className="text-xs text-[#8b949e] space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>High-Impact Technical Focus:</strong> Strong domain footprint in Distributed Systems, Kubernetes, Go, TypeScript, and AI Agent frameworks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Rich Project Portfolio:</strong> Active repositories covering vector databases, service meshes, and UI component libraries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>Consistent Commit History:</strong> Active GitHub contribution activity suitable for automated streak and snake visualizers.</span>
              </li>
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="bg-[#0d1117] border border-amber-500/20 rounded-lg p-5 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
              <AlertTriangle className="w-4 h-4" />
              Areas for Brand Enhancement
            </div>
            <ul className="text-xs text-[#8b949e] space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Unstructured Profile Header:</strong> Missing a cohesive vector hero banner and clear value proposition.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Badge Inconsistency:</strong> Mismatched tech stack shield styles creating visual clutter on mobile viewports.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Missing CI/CD Automation:</strong> Lack of automated GitHub Actions for daily contribution snake updates and dynamic stat metrics.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Information Architecture & Visual Hierarchy */}
      <section className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 space-y-6">
        <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#f0f6fc]">2. Information Architecture & Visual Hierarchy</h3>
            <p className="text-xs text-[#8b949e]">Top-down narrative structure designed to maximize engagement</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg space-y-2">
            <div className="font-mono text-blue-400 font-bold text-sm">Zone 1: Hero Banner</div>
            <p className="text-[#8b949e]">
              Animated SVG header banner featuring custom typography, title, tagline, and instant social contact badges.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg space-y-2">
            <div className="font-mono text-indigo-400 font-bold text-sm">Zone 2: CLI Terminal Bio</div>
            <p className="text-[#8b949e]">
              Interactive code terminal displaying core developer bio, current location, role, and architectural philosophy.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg space-y-2">
            <div className="font-mono text-purple-400 font-bold text-sm">Zone 3: Categorized Matrix</div>
            <p className="text-[#8b949e]">
              Unified tech stack shields organized into Frontend, Backend, Cloud Native, AI & ML, Databases, and Developer Tools.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg space-y-2">
            <div className="font-mono text-pink-400 font-bold text-sm">Zone 4: Featured Projects</div>
            <p className="text-[#8b949e]">
              Curated repository cards with star/fork counters, language badges, and direct links to high-value repos.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg space-y-2">
            <div className="font-mono text-emerald-400 font-bold text-sm">Zone 5: Developer Metrics</div>
            <p className="text-[#8b949e]">
              Symmetrical 2-column dashboard featuring GitHub Stats, Commit Streak, and Top Languages card visualizers.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg space-y-2">
            <div className="font-mono text-amber-400 font-bold text-sm">Zone 6: Contribution Snake</div>
            <p className="text-[#8b949e]">
              Full-width automated eat-the-grid contribution snake animation rendered via GitHub Actions daily cron.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Folder Structure & Required Assets */}
      <section className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 space-y-6">
        <div className="flex items-center gap-3 border-b border-[#30363d] pb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <FolderTree className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#f0f6fc]">3. Repository Folder Structure & Deliverables</h3>
            <p className="text-xs text-[#8b949e]">Standardized repository layout matching requested folder specification</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 font-mono text-xs text-[#8b949e] space-y-1">
            <div className="text-blue-400 font-bold">kashyapashish29/ (Root Repository)</div>
            <div>├── .github/</div>
            <div>│   └── workflows/</div>
            <div>│       ├── snake.yml        <span className="text-emerald-400"># Contribution Snake CI</span></div>
            <div>│       ├── metrics.yml      <span className="text-emerald-400"># Profile Metrics Generator</span></div>
            <div>│       └── validate.yml     <span className="text-emerald-400"># Asset Linting Workflow</span></div>
            <div>├── assets/</div>
            <div>│   ├── banner.svg       <span className="text-blue-400"># Hero Header SVG</span></div>
            <div>│   ├── wave.svg         <span className="text-blue-400"># Section Divider Wave</span></div>
            <div>│   ├── hero.svg         <span className="text-blue-400"># Brand Summary Card</span></div>
            <div>│   ├── platform.svg     <span className="text-blue-400"># Cloud Native Badge</span></div>
            <div>│   ├── ai.svg           <span className="text-blue-400"># AI & ML Systems Graphic</span></div>
            <div>│   ├── kubernetes.svg   <span className="text-blue-400"># Kubernetes Topology</span></div>
            <div>│   └── background.svg   <span className="text-blue-400"># Grid Background Pattern</span></div>
            <div>├── docs/</div>
            <div>│   ├── branding-guide.md</div>
            <div>│   ├── customization.md</div>
            <div>│   └── roadmap.md</div>
            <div>├── scripts/</div>
            <div>├── README.md</div>
            <div>└── LICENSE</div>
          </div>

          <div className="space-y-4 text-xs text-[#8b949e]">
            <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-[#f0f6fc] font-bold">
                <ImageIcon className="w-4 h-4 text-purple-400" />
                SVG Vector Assets (7 Files)
              </div>
              <p>
                Self-contained vector graphics featuring embedded CSS keyframe animations, dark slate fills, and crisp gradient accents.
              </p>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-[#f0f6fc] font-bold">
                <Workflow className="w-4 h-4 text-indigo-400" />
                GitHub Actions Workflows (3 Workflows)
              </div>
              <p>
                Scheduled GitHub Actions automatically updating contribution snake SVGs, language distributions, and verifying markdown assets.
              </p>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] p-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2 text-[#f0f6fc] font-bold">
                <FileText className="w-4 h-4 text-blue-400" />
                Brand Documentation
              </div>
              <p>
                Comprehensive guides in <code className="text-blue-400">/docs</code> detailing color tokens, badge rules, and customization steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Milestones, Risks & Acceptance Criteria */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Milestones */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-[#f0f6fc] font-bold text-sm">
            <Rocket className="w-4 h-4 text-blue-400" />
            Milestones
          </div>
          <ul className="text-xs text-[#8b949e] space-y-2">
            <li><strong className="text-blue-400">M1:</strong> Brand identity & color tokens specification</li>
            <li><strong className="text-blue-400">M2:</strong> Vector SVG asset creation in <code className="text-[#f0f6fc]">/assets</code></li>
            <li><strong className="text-blue-400">M3:</strong> CI/CD workflows setup in <code className="text-[#f0f6fc]">.github/workflows</code></li>
            <li><strong className="text-blue-400">M4:</strong> Production <code className="text-[#f0f6fc]">README.md</code> assembly & push</li>
          </ul>
        </div>

        {/* Technical Risks */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-[#f0f6fc] font-bold text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Technical Risks & Mitigations
          </div>
          <ul className="text-xs text-[#8b949e] space-y-2">
            <li><strong className="text-amber-400">Risk:</strong> GitHub SVG caching delays updates.</li>
            <li><strong className="text-emerald-400">Mitigation:</strong> Append raw GitHub user-content URLs with output branch paths.</li>
            <li><strong className="text-amber-400">Risk:</strong> External stat API rate limiting.</li>
            <li><strong className="text-emerald-400">Mitigation:</strong> Implement fallback static cards and official GitHub metrics.</li>
          </ul>
        </div>

        {/* Acceptance Criteria */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-[#f0f6fc] font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Acceptance Criteria
          </div>
          <ul className="text-xs text-[#8b949e] space-y-2">
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 100% responsive markdown on mobile & desktop</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> All 7 SVGs render without broken paths</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Snake CI workflow runs cleanly on daily schedule</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Color scheme complies with WCAG AA contrast</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
