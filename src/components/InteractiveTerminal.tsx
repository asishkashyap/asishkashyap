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
        <div className="space-y-1 text-xs sm:text-sm text-[#fafafa]">
          <p className="text-[#ffdb70] font-bold">👤 {config.fullName} - {config.title}</p>
          <p className="text-[#9f9f9f]">📍 Location: {config.location}</p>
          <p className="text-[#9f9f9f]">⚡ Bio: {config.bio}</p>
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
          <div className="space-y-1 text-xs sm:text-sm text-[#fafafa]">
            <p className="text-[#ffdb70] font-bold">👤 {config.fullName} - {config.title}</p>
            <p className="text-[#9f9f9f]">📍 Location: {config.location}</p>
            <p className="text-[#9f9f9f]">⚡ Bio: {config.bio}</p>
            <p className="text-emerald-400">🛡️ Focus: Zero-Trust CI/CD | Kubernetes IDP | Autonomous AI SRE Agents</p>
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-2 text-xs sm:text-sm text-[#fafafa]">
            <p className="text-[#ffdb70] font-semibold">☁️ Cloud & Containers:</p>
            <p className="text-[#9f9f9f] pl-4">Azure Cloud, Kubernetes (AKS, K8s Admin), Docker, Helm, Crossplane</p>
            <p className="text-sky-400 font-semibold">🏗️ Infrastructure as Code (IaC):</p>
            <p className="text-[#9f9f9f] pl-4">Terraform, ARM Templates, PowerShell, Bash, Python</p>
            <p className="text-emerald-400 font-semibold">⚡ CI/CD & Automation:</p>
            <p className="text-[#9f9f9f] pl-4">Azure DevOps, GitHub Actions, ArgoCD</p>
            <p className="text-purple-400 font-semibold">🤖 SRE & AI:</p>
            <p className="text-[#9f9f9f] pl-4">AI-Driven Auto SRE, Telemetry Analysis, Copilot LLM Integration</p>
            <p className="text-rose-400 font-semibold">🔐 DevSecOps:</p>
            <p className="text-[#9f9f9f] pl-4">SonarQube, Trivy, TFSec, Role-Based Access Control (RBAC)</p>
          </div>
        );
        break;

      case 'projects':
      case 'repos':
        resultNode = (
          <div className="space-y-2 text-xs sm:text-sm text-[#fafafa]">
            <p className="text-[#ffdb70] font-bold">📦 Featured Repositories on GitHub (@{config.username}):</p>
            <ul className="list-disc pl-5 space-y-1 text-[#9f9f9f]">
              <li><strong className="text-[#fafafa]">asishkashyap</strong>: Personal Profile Studio & Portfolio Hub</li>
              <li><strong className="text-[#fafafa]">dockerVolumeDocApp</strong>: Docker Persistent Volume Driver Mounts</li>
              <li><strong className="text-[#fafafa]">github-actions-devsecops-suite</strong>: Reusable CI/CD Workflows & OIDC</li>
              <li><strong className="text-[#fafafa]">terraform-azure-enterprise</strong>: Azure IaC Monorepo with Checkov</li>
              <li><strong className="text-[#fafafa]">kubernetes-secure-approach</strong>: Hardened Zero-Trust K8s Security</li>
            </ul>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-1 text-xs sm:text-sm text-[#fafafa]">
            <p className="text-emerald-400 font-bold">✉️ Get in Touch:</p>
            <p className="text-[#9f9f9f]">Email: <a href={`mailto:${config.email}`} className="text-[#ffdb70] underline">{config.email}</a></p>
            <p className="text-[#9f9f9f]">LinkedIn: <a href={`https://linkedin.com/in/${config.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-[#ffdb70] underline">linkedin.com/in/{config.linkedin}</a></p>
            <p className="text-[#9f9f9f]">GitHub: <a href={`https://github.com/${config.username}`} target="_blank" rel="noopener noreferrer" className="text-[#ffdb70] underline">github.com/{config.username}</a></p>
          </div>
        );
        break;

      case 'help':
        resultNode = (
          <div className="text-xs sm:text-sm text-[#9f9f9f] space-y-1">
            <p className="text-[#fafafa] font-semibold">Available Commands:</p>
            <p><span className="text-[#ffdb70] font-mono">whoami</span> - Display developer bio and title</p>
            <p><span className="text-[#ffdb70] font-mono">skills</span> - List technical expertise and toolstack</p>
            <p><span className="text-[#ffdb70] font-mono">projects</span> - View open-source repositories</p>
            <p><span className="text-[#ffdb70] font-mono">contact</span> - Get direct email and social links</p>
            <p><span className="text-[#ffdb70] font-mono">clear</span> - Clear terminal screen</p>
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
            Command not recognized: "{cmd}". Type <span className="text-[#ffdb70] font-bold">help</span> or click preset buttons below.
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
    <section id="terminal" className="space-y-4">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#fafafa] vcard-title-heading">
          Interactive Terminal Shell
        </h2>
        <p className="text-xs sm:text-sm text-[#9f9f9f] mt-3 leading-relaxed">
          Explore profile details, architecture specs, and skills via interactive CLI commands.
        </p>
      </div>

      <div className="bg-[#121212] border border-[#383838] rounded-2xl overflow-hidden shadow-2xl font-mono">
        
        {/* Terminal Header Bar */}
        <div className="bg-[#2b2b2c] px-4 py-3 border-b border-[#383838] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs text-[#fafafa] font-semibold flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#ffdb70]" />
              {config.username}@devsecops-terminal: ~
            </span>
          </div>

          <button
            onClick={() => setHistory([])}
            className="text-[11px] text-[#9f9f9f] hover:text-[#fafafa] flex items-center gap-1 hover:bg-[#383838] px-2 py-1 rounded-xl transition-colors"
            title="Clear Terminal"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear</span>
          </button>
        </div>

        {/* Quick Command Buttons */}
        <div className="px-4 py-2 bg-[#1e1e1f] border-b border-[#383838] flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <span className="text-[#9f9f9f] text-[11px] shrink-0 font-sans font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#ffdb70]" /> Quick CLI:
          </span>
          {['whoami', 'skills', 'projects', 'contact', 'help'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-xl bg-[#2b2b2c] hover:bg-[#383838] text-[#ffdb70] border border-[#383838] text-[11px] transition-colors shrink-0 flex items-center gap-1 font-semibold"
            >
              <Play className="w-2.5 h-2.5 text-[#ffdb70]" />
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Screen Body */}
        <div className="p-4 sm:p-6 min-h-[200px] max-h-[360px] overflow-y-auto space-y-4">
          {history.map((item, index) => (
            <div key={index} className="space-y-1.5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#ffdb70]">
                <span>{config.username}@platform:~$</span>
                <span className="text-[#fafafa] font-bold">{item.command}</span>
              </div>
              <div className="pl-4 border-l-2 border-[#ffdb70]/40 py-0.5">
                {item.output}
              </div>
            </div>
          ))}

          {/* Prompt Input Form */}
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-xs sm:text-sm text-[#ffdb70] shrink-0">
              {config.username}@platform:~$
            </span>
            <input
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              placeholder="type 'help', 'skills', or 'projects'..."
              className="w-full bg-transparent text-xs sm:text-sm text-[#fafafa] outline-none font-mono focus:ring-0 placeholder-[#9f9f9f]"
            />
            <button type="submit" className="text-[#9f9f9f] hover:text-[#fafafa]">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
