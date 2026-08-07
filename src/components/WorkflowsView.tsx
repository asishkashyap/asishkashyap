import React, { useState } from 'react';
import { 
  Workflow, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck, 
  Play,
  Github
} from 'lucide-react';
import { 
  generateSnakeWorkflow, 
  generateMetricsWorkflow, 
  generateValidateWorkflow 
} from '../data/markdownTemplates';

export const WorkflowsView: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<'snake' | 'metrics' | 'validate'>('snake');
  const [copied, setCopied] = useState<boolean>(false);

  const workflows = [
    {
      id: 'snake',
      filename: 'snake.yml',
      title: 'Contribution Grid Snake Animation',
      schedule: '0 0 * * * (Daily at Midnight)',
      description: 'Fetches contribution matrix and builds eat-the-grid snake SVG published to output branch.',
      getContent: generateSnakeWorkflow,
    },
    {
      id: 'metrics',
      filename: 'metrics.yml',
      title: 'Deep Profile Metrics Generator',
      schedule: '0 0 * * 0 (Weekly Sunday Midnight)',
      description: 'Queries GitHub GraphQL API for language stats, commit history, and activity streaks.',
      getContent: generateMetricsWorkflow,
    },
    {
      id: 'validate',
      filename: 'validate.yml',
      title: 'SVG Asset & Markdown Linter',
      schedule: 'On push to main & PRs',
      description: 'Validates raw SVG assets for valid closure tags and lints README link references.',
      getContent: generateValidateWorkflow,
    },
  ];

  const activeWorkflow = workflows.find((w) => w.id === selectedWorkflow) || workflows[0];
  const activeContent = activeWorkflow.getContent();

  const handleCopy = () => {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
            <Workflow className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#f0f6fc]">GitHub Actions Automated CI/CD Workflows (3 Workflows)</h2>
            <p className="text-xs text-[#8b949e]">Automated GitHub Actions running on cron triggers and repository push events</p>
          </div>
        </div>
      </div>

      {/* Workflow Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {workflows.map((wf) => {
          const isSelected = selectedWorkflow === wf.id;
          return (
            <button
              key={wf.id}
              onClick={() => setSelectedWorkflow(wf.id as any)}
              className={`p-4 rounded-xl border text-left transition-all space-y-2 ${
                isSelected
                  ? 'bg-indigo-600/20 border-indigo-500 text-[#f0f6fc] shadow-lg shadow-indigo-500/10'
                  : 'bg-[#161b22] border-[#30363d] text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#30363d]/80'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-indigo-400">.github/workflows/{wf.filename}</span>
                <Play className="w-3.5 h-3.5" />
              </div>
              <div className="text-sm font-bold text-[#f0f6fc]">{wf.title}</div>
              <p className="text-xs text-[#8b949e] line-clamp-2">{wf.description}</p>
            </button>
          );
        })}
      </div>

      {/* Code Inspector */}
      <div className="bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden">
        <div className="bg-[#0d1117] border-b border-[#30363d] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#f0f6fc]">
              <span>.github/workflows/{activeWorkflow.filename}</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {activeWorkflow.schedule}
              </span>
            </div>
            <p className="text-xs text-[#8b949e] mt-1">{activeWorkflow.description}</p>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied Workflow!' : 'Copy Workflow YAML'}
          </button>
        </div>

        <div className="p-5 bg-[#0d1117] font-mono text-xs text-[#8b949e] overflow-x-auto whitespace-pre leading-relaxed select-all">
          {activeContent}
        </div>
      </div>
    </div>
  );
};
