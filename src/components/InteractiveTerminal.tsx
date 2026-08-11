import React, { useState } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, Play, Sparkles } from 'lucide-react';
import { ProfileConfig } from '../types';

interface InteractiveTerminalProps {
  config: ProfileConfig;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ config }) => {
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'whoami',
      output: (
        <div className="space-y-1 text-xs sm:text-sm text-[#f0f6fc]">
          <p className="text-blue-400 font-bold">👤 {config.fullName} - {config.title}</p>
          <p className="text-[#8b949e]">📍 Location: {config.location}</p>
          <p className="text-[#8b949e]">⚡ Bio: {config.bio}</p>
          <p className="text-emerald-400">🛡️ Focus: Zero-Trust CI/CD | Kubernetes IDP | Autonomous AI SRE Agents</p>
        </div>
      ),
    },
  ]);
  const [inputCommand, setInputCommand] = useState('');

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let resultNode: React.ReactNode = null;

    switch (trimmed) {
      case 'whoami':
        resultNode = (
          <div className="space-y-1 text-xs sm:text-sm text-[#f0f6fc]">
            <p className="text-blue-400 font-bold">👤 {config.fullName} - {config.title}</p>
            <p className="text-[#8b949e]">📍 Location: {config.location}</p>
            <p className="text-[#8b949e]">⚡ Bio: {config.bio}</p>
            <p className="text-emerald-400">🛡️ Focus: Zero-Trust CI/CD | Kubernetes IDP | Autonomous AI SRE Agents</p>
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-2 text-xs sm:text-sm text-[#f0f6fc]">
            <p className="text-blue-400 font-semibold">☁️ Cloud Native & DevOps:</p>
            <p className="text-[#8b949e] pl-4">Kubernetes, Docker, Terraform, GitHub Actions, Azure Cloud, AWS, Helm, ArgoCD</p>
            <p className="text-purple-400 font-semibold">🤖 AI Systems & Languages:</p>
            <p className="text-[#8b949e] pl-4">Python, TypeScript, Go, Node.js, OpenAI API, PyTorch, LangChain, Agents</p>
            <p className="text-emerald-400 font-semibold">🔐 Security & Infrastructure:</p>
            <p className="text-[#8b949e] pl-4">DevSecOps, Checkov, OIDC Auth, Kyverno, Vault, PostgreSQL, Redis, Linux, Git</p>
          </div>
        );
        break;

      case 'projects':
      case 'repos':
        resultNode = (
          <div className="space-y-2 text-xs sm:text-sm text-[#f0f6fc]">
            <p className="text-amber-400 font-bold">📦 Featured Repositories on GitHub (@{config.username}):</p>
            <ul className="list-disc pl-5 space-y-1 text-[#8b949e]">
              <li><strong className="text-[#f0f6fc]">asishkashyap</strong>: Personal Profile Studio & Portfolio Hub</li>
              <li><strong className="text-[#f0f6fc]">dockerVolumeDocApp</strong>: Docker Persistent Volume Driver Mounts</li>
              <li><strong className="text-[#f0f6fc]">github-actions-devsecops-suite</strong>: Reusable CI/CD Workflows & OIDC</li>
              <li><strong className="text-[#f0f6fc]">terraform-azure-enterprise</strong>: Azure IaC Monorepo with Checkov</li>
              <li><strong className="text-[#f0f6fc]">kubernetes-secure-approach</strong>: Hardened Zero-Trust K8s Security</li>
            </ul>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-1 text-xs sm:text-sm text-[#f0f6fc]">
            <p className="text-emerald-400 font-bold">✉️ Get in Touch:</p>
            <p className="text-[#8b949e]">Email: <a href={`mailto:${config.email}`} className="text-blue-400 underline">{config.email}</a></p>
            <p className="text-[#8b949e]">LinkedIn: <a href={`https://linkedin.com/in/${config.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">linkedin.com/in/{config.linkedin}</a></p>
            <p className="text-[#8b949e]">GitHub: <a href={`https://github.com/${config.username}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">github.com/{config.username}</a></p>
          </div>
        );
        break;

      case 'help':
        resultNode = (
          <div className="text-xs sm:text-sm text-[#8b949e] space-y-1">
            <p className="text-[#f0f6fc] font-semibold">Available Commands:</p>
            <p><span className="text-blue-400 font-mono">whoami</span> - Display developer bio and title</p>
            <p><span className="text-blue-400 font-mono">skills</span> - List technical expertise and toolstack</p>
            <p><span className="text-blue-400 font-mono">projects</span> - View open-source repositories</p>
            <p><span className="text-blue-400 font-mono">contact</span> - Get direct email and social links</p>
            <p><span className="text-blue-400 font-mono">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputCommand('');
        return;

      default:
        resultNode = (
          <p className="text-rose-400 text-xs sm:text-sm font-mono">
            Command not recognized: "{cmd}". Type <span className="text-blue-400 font-bold">help</span> or click preset buttons below.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: resultNode }]);
    setInputCommand('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCommand.trim()) return;
    executeCommand(inputCommand);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-[#090d13] border border-[#30363d] rounded-2xl overflow-hidden shadow-2xl font-mono">
        
        {/* Terminal Header Bar */}
        <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-[#8b949e] font-semibold flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
              {config.username}@devsecops-ai-terminal: ~
            </span>
          </div>

          <button
            onClick={() => setHistory([])}
            className="text-[11px] text-[#8b949e] hover:text-[#f0f6fc] flex items-center gap-1 hover:bg-[#21262d] px-2 py-1 rounded transition-colors"
            title="Clear Terminal"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear</span>
          </button>
        </div>

        {/* Quick Command Buttons */}
        <div className="px-4 py-2 bg-[#0d1117] border-b border-[#30363d]/60 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <span className="text-[#8b949e] text-[11px] shrink-0 font-sans font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> Quick CLI:
          </span>
          {['whoami', 'skills', 'projects', 'contact', 'help'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded bg-[#161b22] hover:bg-[#21262d] text-blue-400 border border-[#30363d] text-[11px] transition-colors shrink-0 flex items-center gap-1"
            >
              <Play className="w-2.5 h-2.5" />
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Screen Body */}
        <div className="p-4 sm:p-6 min-h-[220px] max-h-[400px] overflow-y-auto space-y-4">
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400">
                <span>{config.username}@platform:~$</span>
                <span className="text-[#f0f6fc] font-bold">{item.command}</span>
              </div>
              <div className="pl-4 border-l-2 border-blue-500/30 py-0.5">
                {item.output}
              </div>
            </div>
          ))}

          {/* Prompt Input Form */}
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-xs sm:text-sm text-emerald-400 shrink-0">
              {config.username}@platform:~$
            </span>
            <input
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              placeholder="type 'help', 'skills', or 'projects'..."
              className="w-full bg-transparent text-xs sm:text-sm text-[#f0f6fc] outline-none font-mono focus:ring-0 placeholder-[#484f58]"
            />
            <button type="submit" className="text-[#8b949e] hover:text-[#f0f6fc]">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
