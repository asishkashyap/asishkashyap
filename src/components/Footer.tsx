import React from 'react';
import { Github, Linkedin, ArrowUp, Heart, FileCode, Shield } from 'lucide-react';
import { ProfileConfig } from '../types';

interface FooterProps {
  config: ProfileConfig;
  onOpenStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenStudio }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090d13] border-t border-[#30363d] text-[#8b949e] text-xs py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-xs">
            AK
          </div>
          <div>
            <p className="text-[#f0f6fc] font-semibold">
              {config.fullName} &copy; {new Date().getFullYear()}
            </p>
            <p className="text-[11px] text-[#8b949e]">
              Senior DevSecOps & AI Engineer &bull; Greater Noida, India
            </p>
          </div>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenStudio}
            className="flex items-center gap-1.5 text-[#8b949e] hover:text-blue-400 transition-colors"
          >
            <FileCode className="w-3.5 h-3.5 text-blue-400" />
            <span>Profile Studio & Exporter</span>
          </button>
          <span className="text-[#30363d]">&bull;</span>
          <a
            href={`https://github.com/${config.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-[#30363d]">&bull;</span>
          <a
            href={`https://linkedin.com/in/${config.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Right Scroll Top */}
        <button
          onClick={scrollToTop}
          className="p-2 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-[#f0f6fc] rounded-lg transition-colors flex items-center gap-1"
          title="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px]">Back to top</span>
        </button>

      </div>
    </footer>
  );
};
