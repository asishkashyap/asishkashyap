import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Building2, 
  Github, 
  Linkedin, 
  Twitter, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Sparkles,
  Calendar,
  Briefcase
} from 'lucide-react';
import { ProfileConfig } from '../types';
import { formatLinkedInUrl } from '../utils/urlUtils';

interface VCardSidebarProps {
  config: ProfileConfig;
}

export const VCardSidebar: React.FC<VCardSidebarProps> = ({ config }) => {
  const [showContacts, setShowContacts] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(config.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const linkedinUrl = formatLinkedInUrl(config.linkedin);

  return (
    <aside className="bg-[var(--theme-card-bg)] border border-[var(--theme-card-border)] rounded-3xl p-6 shadow-2xl relative w-full lg:w-[320px] shrink-0 transition-all">
      {/* Mobile Show Contacts Button Toggle */}
      <button
        onClick={() => setShowContacts(!showContacts)}
        className="lg:hidden absolute top-6 right-6 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-[var(--theme-badge-bg)] text-[var(--theme-accent)] border border-[var(--theme-card-border)] shadow-md hover:bg-[var(--theme-card-border)] transition-colors"
      >
        <span>{showContacts ? 'Hide Details' : 'Show Contacts'}</span>
        {showContacts ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {/* Profile Avatar & Header */}
      <div className="flex lg:flex-col items-center gap-5 text-center">
        <div className="relative group shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-3xl bg-[var(--theme-badge-bg)] p-1.5 border border-[var(--theme-card-border)] shadow-xl overflow-hidden group-hover:border-[var(--theme-accent)]/60 transition-all">
            <img
              src={`https://github.com/${config.username}.png`}
              alt={config.fullName}
              className="w-full h-full object-cover rounded-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/github/explore/main/topics/devops/devops.png';
              }}
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--theme-accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[var(--theme-accent)] border-2 border-[var(--theme-card-bg)]"></span>
          </span>
        </div>

        <div className="text-left lg:text-center space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-[var(--theme-text-primary)] tracking-tight">
            {config.fullName}
          </h1>
          <div className="inline-block px-3 py-1 rounded-xl bg-[var(--theme-badge-bg)] text-[var(--theme-accent)] border border-[var(--theme-card-border)] text-xs font-mono font-semibold shadow-inner">
            {config.title}
          </div>
          <p className="text-xs text-[#9f9f9f] font-mono">@{config.username}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-[var(--theme-card-border)]" />

      {/* Contacts List (Collapsible on Mobile, always visible on Desktop) */}
      <div className={`space-y-4 ${showContacts ? 'block' : 'hidden lg:block'}`}>
        
        {/* Email */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center text-[var(--theme-accent)] shadow-md shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] uppercase font-mono text-[#9f9f9f] tracking-wider">Email</p>
            <button
              onClick={handleCopyEmail}
              className="text-xs font-semibold text-[var(--theme-text-primary)] hover:text-[var(--theme-accent)] truncate text-left block w-full transition-colors font-mono"
              title="Click to copy email"
            >
              {emailCopied ? <span className="text-emerald-400">Copied!</span> : config.email}
            </button>
          </div>
        </div>

        {/* Role / Experience */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center text-[var(--theme-accent)] shadow-md shrink-0">
            <Briefcase className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase font-mono text-[#9f9f9f] tracking-wider">Experience</p>
            <p className="text-xs font-semibold text-[var(--theme-text-primary)] truncate">Senior DevSecOps Lead (6+ Yrs)</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center text-[var(--theme-accent)] shadow-md shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase font-mono text-[#9f9f9f] tracking-wider">Location</p>
            <p className="text-xs font-semibold text-[var(--theme-text-primary)] truncate">{config.location}</p>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center text-[var(--theme-accent)] shadow-md shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase font-mono text-[#9f9f9f] tracking-wider">Availability</p>
            <p className="text-xs font-semibold text-emerald-400">Open for Cloud & AI SRE Roles</p>
          </div>
        </div>

        {/* Social Icons Footer */}
        <div className="pt-4 border-t border-[var(--theme-card-border)] flex items-center justify-center gap-3 text-[var(--theme-text-secondary)]">
          <a
            href={`https://github.com/${config.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)]/50 transition-colors shadow-sm"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)]/50 transition-colors shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`https://twitter.com/${config.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-[var(--theme-badge-bg)] border border-[var(--theme-card-border)] flex items-center justify-center hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)]/50 transition-colors shadow-sm"
            title="Twitter / X"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

      </div>
    </aside>
  );
};
