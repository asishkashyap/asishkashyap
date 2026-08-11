import React, { useState } from 'react';
import { Send, Mail, Linkedin, Twitter, Github, Check, MapPin, Building2, Sparkles, MessageSquare } from 'lucide-react';
import { ProfileConfig } from '../types';

interface ContactSectionProps {
  config: ProfileConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

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
    <section id="contact" className="py-16 border-t border-[#30363d]/60 bg-[#0d1117]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider mb-1">
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#f0f6fc]">
                Let's Collaborate & Connect
              </h2>
              <p className="text-sm text-[#8b949e] mt-2 leading-relaxed">
                Whether you have a DevSecOps architecture challenge, Kubernetes platform project, or AI SRE opportunity, feel free to reach out directly.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-4 flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8b949e]">Direct Email</p>
                    <p className="text-sm font-semibold text-[#f0f6fc] font-mono">{config.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-[#0d1117] hover:bg-[#21262d] border border-[#30363d] text-xs font-medium text-[#f0f6fc] rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Location & Role */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-3.5 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-[#8b949e] uppercase font-mono">Location</p>
                    <p className="text-xs font-bold text-[#f0f6fc] truncate">{config.location}</p>
                  </div>
                </div>
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-3.5 flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-[#8b949e] uppercase font-mono">Role</p>
                    <p className="text-xs font-bold text-[#f0f6fc] truncate">Senior Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons List */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={`https://github.com/${config.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-xs font-semibold text-[#f0f6fc] transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={`https://linkedin.com/in/${config.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-xs font-semibold text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`https://twitter.com/${config.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] text-xs font-semibold text-sky-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter / X</span>
              </a>
            </div>
          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-7 bg-[#161b22] border border-[#30363d] rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]/60">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <h3 className="text-base font-bold text-[#f0f6fc]">Send Direct Message</h3>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-emerald-400">Opening Email Client...</h4>
                <p className="text-xs text-[#8b949e]">
                  Thank you! Your mail application has been prompted with your message prefilled for {config.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitMessage} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8b949e] font-medium mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-3.5 py-2.5 text-[#f0f6fc] outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8b949e] font-medium mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-3.5 py-2.5 text-[#f0f6fc] outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#8b949e] font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="DevSecOps Architecture / Collaboration Inquiry"
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-3.5 py-2.5 text-[#f0f6fc] outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#8b949e] font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Asish, I would like to discuss..."
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-3.5 py-2.5 text-[#f0f6fc] outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Asish</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
