import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Cloud, Shield, Filter } from 'lucide-react';
import { TECH_STACK } from '../data/profileData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Cloud & Containers',
    'Infrastructure as Code (IaC)',
    'CI/CD & Automation',
    'SRE & AI',
    'DevSecOps',
  ];

  const filteredTech = selectedCategory === 'All'
    ? TECH_STACK
    : TECH_STACK.filter((item) => item.category === selectedCategory);

  return (
    <motion.section
      id="skills"
      className="space-y-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Section Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#fafafa] vcard-title-heading">
          Technical Skills & Stack
        </h2>
        <p className="text-xs sm:text-sm text-[#9f9f9f] mt-3 leading-relaxed">
          Production-proven technologies engineered across high-security cloud environments, zero-trust Kubernetes clusters, and AI integrations.
        </p>
      </div>

      {/* Category Filter Tabs with Morphing Sliding Indicator */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar bg-[#2b2b2c] p-1.5 rounded-2xl border border-[#383838]">
        <Filter className="w-3.5 h-3.5 text-[#ffdb70] ml-2 shrink-0" />
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-colors shrink-0 ${
                isSelected
                  ? 'text-[#121212] font-bold'
                  : 'text-[#d6d6d6] hover:text-[#fafafa]'
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-gradient-to-r from-[#ffdb70] to-[#e2b714] rounded-xl shadow-md -z-10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span>{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredTech.map((tech, idx) => (
          <motion.div
            key={tech.name}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.25) }}
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: '0 8px 24px -6px rgba(255, 219, 112, 0.25)',
              transition: { duration: 0.15 } 
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] hover:border-[#ffdb70]/70 rounded-2xl p-3.5 flex flex-col items-center justify-center gap-2 transition-colors group shadow-md cursor-default"
          >
            <img
              src={`https://img.shields.io/badge/${encodeURIComponent(tech.name)}-0d1117?style=flat-square&logo=${tech.logo}&logoColor=${tech.logoColor}`}
              alt={tech.name}
              className="h-6 object-contain group-hover:scale-110 transition-transform duration-200"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="text-xs font-bold text-[#fafafa] group-hover:text-[#ffdb70] transition-colors text-center">
              {tech.name}
            </span>
            <span className="text-[10px] text-[#9f9f9f] font-mono text-center truncate w-full">
              {tech.category}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Engineering Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] p-5 rounded-2xl space-y-2 shadow-lg hover:border-[#ffdb70]/40 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1e1e1f] border border-[#383838] text-[#ffdb70] flex items-center justify-center mb-2">
            <Cloud className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#fafafa]">Cloud Native Platforms</h3>
          <p className="text-xs text-[#9f9f9f] leading-relaxed">
            Provisioning immutable Terraform infrastructure on Azure & AWS with automated drift detection, Helm charts, and GitOps deployments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] p-5 rounded-2xl space-y-2 shadow-lg hover:border-[#ffdb70]/40 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1e1e1f] border border-[#383838] text-[#ffdb70] flex items-center justify-center mb-2">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#fafafa]">Zero-Trust DevSecOps</h3>
          <p className="text-xs text-[#9f9f9f] leading-relaxed">
            Embedding Checkov policy-as-code, passwordless Azure OIDC authentication, image scanning, and Kyverno policy enforcement into CI/CD.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.19 }}
          className="bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] p-5 rounded-2xl space-y-2 shadow-lg hover:border-[#ffdb70]/40 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1e1e1f] border border-[#383838] text-[#ffdb70] flex items-center justify-center mb-2">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#fafafa]">Autonomous AI Agents</h3>
          <p className="text-xs text-[#9f9f9f] leading-relaxed">
            Designing intelligent Python SRE agents to monitor Kubernetes health logs and automate incident resolution.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};
