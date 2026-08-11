import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Terminal, 
  ArrowUpRight,
  CheckCircle2,
  Download,
  Copy,
  Check
} from 'lucide-react';
import { ProfileConfig } from '../types';
import { formatLinkedInUrl } from '../utils/urlUtils';

interface HeroSectionProps {
  config: ProfileConfig;
  onNavigateToProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onNavigateToProjects }) => {
  const [emailCopied, setEmailCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(config.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const linkedinUrl = formatLinkedInUrl(config.linkedin);

  return (
    <section id="about" className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Subtle Soothing Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Info Box */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open for DevSecOps & AI Engineering Leadership</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f8fafc] tracking-tight">
                {config.fullName}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-300">
                {config.title}
              </p>
            </div>

            {/* Tagline & Bio */}
            <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
              {config.bio}
            </p>

            {/* Badges / Key Info Grid */}
            <div className="flex flex-wrap gap-y-2.5 gap-x-3 text-xs sm:text-sm text-[#94a3b8]">
              <div className="flex items-center gap-2 bg-[#131b28] px-3.5 py-2 rounded-xl border border-[#232f45] shadow-sm">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{config.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#131b28] px-3.5 py-2 rounded-xl border border-[#232f45] shadow-sm">
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>Senior DevSecOps Lead (6+ Yrs)</span>
              </div>
              <div className="flex items-center gap-2 bg-[#131b28] px-3.5 py-2 rounded-xl border border-[#232f45] shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero-Trust K8s & OIDC</span>
              </div>
              <div className="flex items-center gap-2 bg-[#131b28] px-3.5 py-2 rounded-xl border border-[#232f45] shadow-sm">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Autonomous AI SRE Agents</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://github.com/${config.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-sky-600/20 transition-all hover:scale-[1.02]"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#131b28] hover:bg-[#1a2436] text-[#f8fafc] border border-[#232f45] font-medium text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-[1.02] shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#94a3b8]" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 bg-[#131b28] hover:bg-[#1a2436] text-[#f8fafc] border border-[#232f45] font-medium text-sm px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                title="Copy Email Address"
              >
                {emailCopied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Mail className="w-4 h-4 text-emerald-400" />
                )}
                <span>{emailCopied ? 'Email Copied!' : config.email}</span>
              </button>
            </div>
          </div>

          {/* Right Profile Identity Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#131b28] border border-[#232f45] rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full pointer-events-none" />
              
              {/* Profile Avatar & Header */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={`https://github.com/${config.username}.png`}
                    alt={config.fullName}
                    className="w-20 h-20 rounded-2xl ring-2 ring-blue-500/30 object-cover shadow-lg"
                    onError={(e) => {
                      // Fallback avatar if GitHub image fails
                      (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/github/explore/main/topics/devops/devops.png';
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#161b22] flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#f0f6fc]">{config.fullName}</h2>
                  <p className="text-xs text-blue-400 font-mono">@{config.username}</p>
                  <p className="text-xs text-[#8b949e] mt-0.5">Senior DevSecOps & AI Engineer</p>
                </div>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-[#30363d]/80 text-center">
                <div className="bg-[#0d1117] p-2.5 rounded-xl border border-[#30363d]/50">
                  <div className="text-lg font-bold text-[#f0f6fc]">6+</div>
                  <div className="text-[10px] text-[#8b949e] uppercase font-mono">Yrs Exp</div>
                </div>
                <div className="bg-[#0d1117] p-2.5 rounded-xl border border-[#30363d]/50">
                  <div className="text-lg font-bold text-blue-400">12+</div>
                  <div className="text-[10px] text-[#8b949e] uppercase font-mono">Repositories</div>
                </div>
                <div className="bg-[#0d1117] p-2.5 rounded-xl border border-[#30363d]/50">
                  <div className="text-lg font-bold text-emerald-400">100%</div>
                  <div className="text-[10px] text-[#8b949e] uppercase font-mono">CI Automation</div>
                </div>
              </div>

              {/* Key Competencies List */}
              <div className="mt-5 space-y-2">
                <div className="text-xs font-semibold text-[#8b949e] uppercase font-mono tracking-wider">
                  Core Specializations
                </div>
                <div className="space-y-1.5 text-xs text-[#f0f6fc]">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0d1117]/60 border border-[#30363d]/40">
                    <span className="flex items-center gap-2">
                      <Cloud className="w-3.5 h-3.5 text-sky-400" />
                      Kubernetes & Azure IaC
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Expert</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0d1117]/60 border border-[#30363d]/40">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                      DevSecOps & OIDC Security
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Expert</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#0d1117]/60 border border-[#30363d]/40">
                    <span className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-amber-400" />
                      LLM Agents & Python SRE
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Advanced</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
