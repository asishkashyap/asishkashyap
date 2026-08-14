import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Terminal, 
  ArrowUpRight,
  Sparkles,
  Check,
  Flame,
  Layers,
  Zap
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

  const floatingBadges = [
    { label: '☸️ Kubernetes IDP', delay: 0, xOffset: 0, duration: 4.2 },
    { label: '⚡ Azure OIDC Zero-Trust', delay: 0.8, xOffset: 5, duration: 4.8 },
    { label: '🤖 AI Autonomous SRE', delay: 1.4, xOffset: -5, duration: 4.5 },
    { label: '📦 Terraform IaC Monorepo', delay: 2.1, xOffset: 3, duration: 5.1 },
  ];

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
    <motion.section
      id="about"
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Header with Staggered Entrance */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <motion.h2
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-2xl sm:text-3xl font-bold text-[var(--theme-text-primary)] vcard-title-heading"
          >
            About Me
          </motion.h2>

          {/* Animated Status Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Available for SRE & DevSecOps</span>
          </motion.div>
        </div>
        
        {/* Bio Text Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 space-y-4 text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed font-normal"
        >
          <p>
            I am a <strong className="text-[var(--theme-accent)] font-semibold">Senior DevSecOps & AI Engineer</strong> with over 6 years of experience building scalable, secure, and self-healing cloud infrastructure platforms. My expertise spans Kubernetes container orchestration, automated Azure IaC pipelines, and cutting-edge AI SRE integrations.
          </p>
          <p>
            My mission is to eliminate operational toil and elevate software delivery speed by blending robust <strong className="text-[var(--theme-text-primary)]">DevSecOps practices</strong> with <strong className="text-[var(--theme-accent)]">Autonomous LLM Agents</strong>. Whether designing zero-trust OIDC pipelines or engineering open-source developer tooling, I focus on performance, security, and developer joy.
          </p>
        </motion.div>

        {/* Floating Interactive Skill Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-2.5 pt-4"
        >
          {floatingBadges.map((badge, idx) => (
            <motion.div
              key={badge.label}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: badge.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: badge.delay,
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="px-3 py-1.5 rounded-xl bg-[var(--theme-badge-bg)]/90 border border-[var(--theme-card-border)] hover:border-[var(--theme-accent)]/60 text-xs font-mono text-[var(--theme-text-primary)] shadow-md flex items-center gap-1.5 cursor-default transition-colors"
            >
              <span>{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* What I'm Doing / Specialization Cards with Staggered Scroll Motion */}
      <div className="space-y-4">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-[var(--theme-text-primary)]"
        >
          What I'm Doing
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[var(--theme-badge-bg)]/60 border border-[var(--theme-card-border)] hover:border-[var(--theme-accent)]/50 rounded-2xl p-5 shadow-lg group flex gap-4 items-start transition-colors relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center text-[var(--theme-accent)] shrink-0 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform">
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
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Quick Links & CTA Bar with Micro-interactions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="pt-2 flex flex-wrap items-center gap-3"
      >
        <motion.a
          href={`https://github.com/${config.username}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 text-[#121212] font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg transition-shadow hover:shadow-[0_8px_20px_-4px_rgba(255,219,112,0.4)]"
          style={{ backgroundColor: 'var(--theme-accent)' }}
        >
          <Github className="w-4 h-4" />
          <span>GitHub Profile (@{config.username})</span>
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>

        <motion.a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-[var(--theme-badge-bg)] hover:bg-[var(--theme-card-border)] text-[var(--theme-text-primary)] border border-[var(--theme-card-border)] hover:border-[var(--theme-accent)]/50 font-semibold text-xs px-5 py-2.5 rounded-xl transition-all"
        >
          <Linkedin className="w-4 h-4 text-[var(--theme-accent)]" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#9f9f9f]" />
        </motion.a>

        <motion.button
          onClick={handleCopyEmail}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-[var(--theme-badge-bg)] hover:bg-[var(--theme-card-border)] text-[var(--theme-text-primary)] border border-[var(--theme-card-border)] hover:border-[var(--theme-accent)]/50 font-semibold text-xs px-4 py-2.5 rounded-xl transition-all"
        >
          {emailCopied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Mail className="w-4 h-4 text-[var(--theme-accent)]" />
          )}
          <span>{emailCopied ? 'Email Copied!' : config.email}</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

