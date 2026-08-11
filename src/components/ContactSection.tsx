import React, { useState } from 'react';
import { Send, Mail, Linkedin, Twitter, Github, Check, MapPin, Building2, Sparkles, MessageSquare } from 'lucide-react';
import { ProfileConfig } from '../types';
import { formatLinkedInUrl } from '../utils/urlUtils';

interface ContactSectionProps {
  config: ProfileConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const linkedinUrl = formatLinkedInUrl(config.linkedin);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(config.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto fallback
    const mailtoUrl = `mailto:${config.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#fafafa] vcard-title-heading">
          Contact & Collaboration
        </h2>
        <p className="text-xs sm:text-sm text-[#9f9f9f] mt-3 leading-relaxed">
          Whether you have a DevSecOps architecture challenge, Kubernetes platform project, or AI SRE opportunity, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Direct Channels Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#1e1e1f] border border-[#383838] rounded-2xl p-5 space-y-4 shadow-xl">
            <h3 className="text-sm font-bold text-[#fafafa] flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#ffdb70]" /> Direct Contact Information
            </h3>

            <div className="space-y-3 text-xs">
              {/* Email */}
              <div className="bg-[#2b2b2c] p-3 rounded-xl border border-[#383838] flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <p className="text-[10px] text-[#9f9f9f] uppercase font-mono">Email Address</p>
                  <p className="font-semibold text-[#fafafa] font-mono truncate">{config.email}</p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 bg-[#1e1e1f] hover:bg-[#383838] border border-[#383838] text-xs text-[#ffdb70] rounded-xl font-semibold transition-colors shrink-0"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Location */}
              <div className="bg-[#2b2b2c] p-3 rounded-xl border border-[#383838] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#ffdb70] shrink-0" />
                <div>
                  <p className="text-[10px] text-[#9f9f9f] uppercase font-mono">Location</p>
                  <p className="font-semibold text-[#fafafa]">{config.location}</p>
                </div>
              </div>

              {/* Role */}
              <div className="bg-[#2b2b2c] p-3 rounded-xl border border-[#383838] flex items-center gap-3">
                <Building2 className="w-4 h-4 text-[#ffdb70] shrink-0" />
                <div>
                  <p className="text-[10px] text-[#9f9f9f] uppercase font-mono">Current Status</p>
                  <p className="font-semibold text-emerald-400">Open for Sr DevSecOps Roles</p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-2 flex flex-wrap gap-2 border-t border-[#383838]">
              <a
                href={`https://github.com/${config.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2b2b2c] hover:bg-[#383838] border border-[#383838] text-xs font-semibold text-[#d6d6d6] hover:text-[#ffdb70] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2b2b2c] hover:bg-[#383838] border border-[#383838] text-xs font-semibold text-[#d6d6d6] hover:text-[#ffdb70] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`https://twitter.com/${config.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2b2b2c] hover:bg-[#383838] border border-[#383838] text-xs font-semibold text-[#d6d6d6] hover:text-[#ffdb70] transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>Twitter / X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Direct Message Form */}
        <div className="lg:col-span-7 bg-[#1e1e1f] border border-[#383838] rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#383838]">
            <MessageSquare className="w-4 h-4 text-[#ffdb70]" />
            <h3 className="text-base font-bold text-[#fafafa]">Contact Form</h3>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-[#2b2b2c] border border-[#383838] rounded-2xl text-center space-y-2">
              <Check className="w-8 h-8 text-[#ffdb70] mx-auto" />
              <h4 className="text-base font-bold text-[#fafafa]">Opening Email Client...</h4>
              <p className="text-xs text-[#9f9f9f]">
                Thank you! Your email client has been launched with your message prefilled for {config.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitMessage} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d6d6d6] font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-3.5 py-2.5 text-[#fafafa] placeholder-[#9f9f9f] outline-none focus:border-[#ffdb70] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#d6d6d6] font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-3.5 py-2.5 text-[#fafafa] placeholder-[#9f9f9f] outline-none focus:border-[#ffdb70] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#d6d6d6] font-medium mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject"
                  className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-3.5 py-2.5 text-[#fafafa] placeholder-[#9f9f9f] outline-none focus:border-[#ffdb70] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#d6d6d6] font-medium mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message..."
                  className="w-full bg-[#2b2b2c] border border-[#383838] rounded-xl px-3.5 py-2.5 text-[#fafafa] placeholder-[#9f9f9f] outline-none focus:border-[#ffdb70] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ffdb70] to-[#e2b714] text-[#121212] font-bold text-sm py-3 rounded-xl transition-all shadow-md hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
