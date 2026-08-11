import React, { useState } from 'react';
import { Cpu, Cloud, Shield, Server, Terminal, Sparkles, Filter } from 'lucide-react';
import { TECH_STACK } from '../data/profileData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Cloud Native & DevOps',
    'AI Systems & Backend',
    'Security, Databases & Tooling',
  ];

  const filteredTech = selectedCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="py-12 border-t border-[#30363d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider mb-1">
              <Cpu className="w-4 h-4" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f6fc]">
              Cloud Native, AI & DevSecOps Stack
            </h2>
            <p className="text-sm text-[#8b949e] mt-1 max-w-2xl">
              Production-proven technologies engineered across high-security cloud environments, zero-trust Kubernetes clusters, and AI LLM integrations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-[#161b22] p-1.5 rounded-xl border border-[#30363d] self-start md:self-auto">
            <Filter className="w-3.5 h-3.5 text-[#8b949e] ml-1.5 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-semibold'
                    : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded-xl p-3.5 flex flex-col items-center justify-center gap-2 transition-all hover:scale-[1.03] hover:border-blue-500/40 group shadow-md"
            >
              <img
                src={`https://img.shields.io/badge/${encodeURIComponent(tech.name)}-${tech.bgColor}?style=flat-square&logo=${tech.logo}&logoColor=${tech.logoColor}`}
                alt={tech.name}
                className="h-6 object-contain"
                onError={(e) => {
                  // If shield badge fails, display fallback text
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xs font-semibold text-[#f0f6fc] group-hover:text-blue-400 transition-colors text-center">
                {tech.name}
              </span>
              <span className="text-[10px] text-[#8b949e] font-mono text-center">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Engineering Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-[#161b22]/70 border border-[#30363d] p-5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#f0f6fc]">Cloud Native Platforms</h3>
            <p className="text-xs text-[#8b949e] leading-relaxed">
              Provisioning immutable Terraform infrastructure on Azure & AWS with automated drift detection, Helm charts, and GitOps deployments.
            </p>
          </div>

          <div className="bg-[#161b22]/70 border border-[#30363d] p-5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#f0f6fc]">Zero-Trust DevSecOps</h3>
            <p className="text-xs text-[#8b949e] leading-relaxed">
              Embedding Checkov policy-as-code, passwordless Azure OIDC authentication, image scanning, and Kyverno policy enforcement into CI/CD.
            </p>
          </div>

          <div className="bg-[#161b22]/70 border border-[#30363d] p-5 rounded-2xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#f0f6fc]">Autonomous AI Agents</h3>
            <p className="text-xs text-[#8b949e] leading-relaxed">
              Designing intelligent Python SRE agents using OpenAI & PyTorch to monitor Kubernetes health logs and automate incident resolution.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
