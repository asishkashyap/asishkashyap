import React from 'react';
import { Github, Linkedin, ArrowUp, Heart, FileCode, Shield } from 'lucide-react';
import { ProfileConfig } from '../types';
import { formatLinkedInUrl } from '../utils/urlUtils';

interface FooterProps {
  config: ProfileConfig;
  onOpenStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenStudio }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkedinUrl = formatLinkedInUrl(config.linkedin);

  return (
    <footer className="bg-[#0b0f17] border-t border-[#232f45] text-[#94a3b8] text-xs py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center font-mono font-bold text-xs">
            AK
          </div>
          <div>
            <p className="text-[#f8fafc] font-semibold">
              {config.fullName} &copy; {new Date().getFullYear()}
            </p>
            <p className="text-[11px] text-[#94a3b8]">
              Senior DevSecOps & AI Engineer &bull; Greater Noida, India
            </p>
          </div>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenStudio}
            className="flex items-center gap-1.5 text-[#94a3b8] hover:text-sky-400 transition-colors"
          >
            <FileCode className="w-3.5 h-3.5 text-sky-400" />
            <span>Profile Studio & Exporter</span>
          </button>
          <span className="text-[#232f45]">&bull;</span>
          <a
            href={`https://github.com/${config.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-[#232f45]">&bull;</span>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Right Scroll Top */}
        <button
          onClick={scrollToTop}
          className="p-2 bg-[#131b28] hover:bg-[#1a2436] border border-[#232f45] text-[#f8fafc] rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
          title="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-[11px]">Back to top</span>
        </button>

      </div>
    </footer>
  );
};
