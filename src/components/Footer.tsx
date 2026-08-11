import React from 'react';
import { Github, Linkedin, ArrowUp, FileCode } from 'lucide-react';
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
    <footer className="bg-[#121212] border-t border-[#383838] text-[#9f9f9f] text-xs py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#2b2b2c] border border-[#383838] text-[#ffdb70] flex items-center justify-center font-mono font-bold text-xs shadow-md">
            AK
          </div>
          <div>
            <p className="text-[#fafafa] font-semibold">
              {config.fullName} &copy; {new Date().getFullYear()}
            </p>
            <p className="text-[11px] text-[#9f9f9f]">
              Senior DevSecOps & AI Engineer &bull; Greater Noida, India
            </p>
          </div>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenStudio}
            className="flex items-center gap-1.5 text-[#d6d6d6] hover:text-[#ffdb70] transition-colors font-medium"
          >
            <FileCode className="w-3.5 h-3.5 text-[#ffdb70]" />
            <span>Profile Studio</span>
          </button>
          <span className="text-[#383838]">&bull;</span>
          <a
            href={`https://github.com/${config.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d6d6d6] hover:text-[#ffdb70] transition-colors flex items-center gap-1 font-medium"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-[#383838]">&bull;</span>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d6d6d6] hover:text-[#ffdb70] transition-colors flex items-center gap-1 font-medium"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Right Scroll Top */}
        <button
          onClick={scrollToTop}
          className="p-2 bg-[#2b2b2c] hover:bg-[#383838] border border-[#383838] text-[#fafafa] rounded-xl transition-colors flex items-center gap-1.5 shadow-md font-medium"
          title="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#ffdb70]" />
          <span className="text-[11px]">Back to top</span>
        </button>

      </div>
    </footer>
  );
};
