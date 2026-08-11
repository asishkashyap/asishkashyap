import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Terminal, 
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { ProfileConfig } from '../types';
import { formatLinkedInUrl } from '../utils/urlUtils';

interface HeroSectionProps {
  config: ProfileConfig;
  onNavigateToProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, onNavigateToProjects }) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(config.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const linkedinUrl = formatLinkedInUrl(config.linkedin);

  const services = [
    {
      title: 'DevSecOps & Platform Engineering',
      icon: Cloud,
      desc: 'Architecting zero-trust Kubernetes IDPs, GitHub Actions reusable workflows, Terraform Azure IaC monorepos, and Checkov security scanners.',
      badge: 'Cloud Native',
    },
    {
      title: 'Autonomous AI & SRE Agents',
      icon: Cpu,
      desc: 'Building intelligent incident triage agents, LLM-powered observability tools, Python SRE pipelines, and automated healing workflows.',
      badge: 'AI Systems',
    },
    {
      title: 'Zero-Trust Infrastructure Security',
      icon: ShieldCheck,
      desc: 'Implementing Azure OIDC auth, Kyverno policy enforcement, HashiCorp Vault secrets management, and container vulnerability scanning.',
      badge: 'Security First',
    },
    {
      title: 'Developer Experience & Automation',
      icon: Terminal,
      desc: 'Creating developer portal CLI tooling, automated contribution matrix graphics, dynamic profile README studios, and CI/CD pipelines.',
      badge: 'DevEx & Tooling',
    },
  ];

  return (
    <section id="about" className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--theme-text-primary)] vcard-title-heading">
          About Me
        </h2>
        
        {/* Bio Text Paragraphs */}
        <div className="mt-6 space-y-4 text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed font-normal">
          <p>
            I am a <strong className="text-[var(--theme-accent)] font-semibold">Senior DevSecOps & AI Engineer</strong> with over 6 years of experience building scalable, secure, and self-healing cloud infrastructure platforms. My expertise spans Kubernetes container orchestration, automated Azure IaC pipelines, and cutting-edge AI SRE integrations.
          </p>
          <p>
            My mission is to eliminate operational toil and elevate software delivery speed by blending robust <strong className="text-[var(--theme-text-primary)]">DevSecOps practices</strong> with <strong className="text-[var(--theme-accent)]">Autonomous LLM Agents</strong>. Whether designing zero-trust OIDC pipelines or engineering open-source developer tooling, I focus on performance, security, and developer joy.
          </p>
        </div>
      </div>

      {/* What I'm Doing / Specialization Cards */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-[var(--theme-text-primary)]">
          What I'm Doing
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-[var(--theme-badge-bg)]/60 border border-[var(--theme-card-border)] rounded-2xl p-5 shadow-lg hover:border-[var(--theme-accent)]/50 transition-all group flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center text-[var(--theme-accent)] shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-[var(--theme-text-primary)] group-hover:text-[var(--theme-accent)] transition-colors truncate">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#9f9f9f] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Links & CTA Bar */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        <a
          href={`https://github.com/${config.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#121212] font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg hover:scale-[1.02] transition-all"
          style={{ backgroundColor: 'var(--theme-accent)' }}
        >
          <Github className="w-4 h-4" />
          <span>GitHub Profile (@{config.username})</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[var(--theme-badge-bg)] hover:bg-[var(--theme-card-border)] text-[var(--theme-text-primary)] border border-[var(--theme-card-border)] font-semibold text-xs px-5 py-2.5 rounded-xl transition-all hover:scale-[1.02]"
        >
          <Linkedin className="w-4 h-4 text-[var(--theme-accent)]" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#9f9f9f]" />
        </a>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 bg-[var(--theme-badge-bg)] hover:bg-[var(--theme-card-border)] text-[var(--theme-text-primary)] border border-[var(--theme-card-border)] font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors"
        >
          {emailCopied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Mail className="w-4 h-4 text-[var(--theme-accent)]" />
          )}
          <span>{emailCopied ? 'Email Copied!' : config.email}</span>
        </button>
      </div>
    </section>
  );
};
