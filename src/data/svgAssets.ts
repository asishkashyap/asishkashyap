import { ProfileConfig, ThemePreset } from '../types';
import { THEMES } from './profileData';

export interface SvgAssetInfo {
  id: string;
  filename: string;
  title: string;
  description: string;
  generateSvg: (config: ProfileConfig) => string;
}

export const SVG_ASSETS: SvgAssetInfo[] = [
  {
    id: 'banner',
    filename: 'banner.svg',
    title: 'Animated Hero Banner',
    description: 'Main brand header image with dynamic gradient mesh, particle effects, and title text.',
    generateSvg: (config: ProfileConfig) => {
      const theme = THEMES[config.theme] || THEMES.darkSlate;
      const cleanName = config.fullName.toUpperCase().replace(/&/g, '&amp;');
      const cleanTitle = config.title.replace(/&/g, '&amp;');
      const cleanTagline = config.tagline.replace(/&/g, '&amp;');
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" width="100%" fill="none">
  <defs>
    <linearGradient id="bg-grad-dyn" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${theme.bg}" />
      <stop offset="50%" stop-color="${theme.cardBg}" />
      <stop offset="100%" stop-color="#090d11" />
    </linearGradient>
    <linearGradient id="azure-grad-dyn" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${theme.accent}" />
      <stop offset="100%" stop-color="#3FA4F6" />
    </linearGradient>
    <pattern id="grid-dyn" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${theme.cardBorder}" stroke-width="0.5" stroke-opacity="0.3" />
      <circle cx="40" cy="40" r="1" fill="${theme.accent}" fill-opacity="0.2" />
    </pattern>
    <filter id="glow-dyn" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="300" rx="12" fill="url(#bg-grad-dyn)" stroke="${theme.cardBorder}" stroke-width="1" />
  <rect width="1200" height="300" rx="12" fill="url(#grid-dyn)" />
  <rect x="0" y="0" width="1200" height="4" rx="2" fill="url(#azure-grad-dyn)" />

  <!-- Orbit Nodes Right Side -->
  <g transform="translate(1020, 150)" stroke="${theme.accent}" stroke-opacity="0.3" fill="none">
    <circle cx="0" cy="0" r="80" stroke-width="1" stroke-dasharray="4, 6" />
    <circle cx="0" cy="0" r="110" stroke-width="1.5" stroke-dasharray="12, 8" />
  </g>
  <g transform="translate(1020, 150)">
    <rect x="-35" y="-35" width="70" height="70" rx="16" fill="${theme.cardBg}" stroke="${theme.accent}" stroke-width="2" filter="url(#glow-dyn)" />
    <path d="M 0 -18 L 16 -8 L 16 12 L 0 20 L -16 12 L -16 -8 Z" fill="none" stroke="${theme.accent}" stroke-width="2" />
    <circle cx="0" cy="1" r="5" fill="#3fb950" />
  </g>

  <!-- Content Block -->
  <g transform="translate(60, 75)">
    <rect x="0" y="0" width="220" height="28" rx="14" fill="${theme.cardBg}" stroke="${theme.cardBorder}" stroke-width="1" />
    <circle cx="14" cy="14" r="4" fill="#3fb950" />
    <text x="28" y="18" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="600" fill="${theme.textSecondary}">DEVSECOPS &amp; AI SRE</text>

    <text x="0" y="72" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="800" font-size="42" fill="${theme.textPrimary}">${cleanName}</text>
    <text x="0" y="105" font-family="'JetBrains Mono', monospace" font-weight="600" font-size="18" fill="${theme.accent}">${cleanTitle}</text>
    <text x="0" y="132" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="14" fill="${theme.textSecondary}">${cleanTagline}</text>
  </g>
</svg>`;
    },
  },
  {
    id: 'wave',
    filename: 'wave.svg',
    title: 'Section Separator Wave',
    description: 'Smooth vector gradient wave for breaking profile sections visually.',
    generateSvg: (config: ProfileConfig) => {
      const theme = THEMES[config.theme] || THEMES.darkSlate;
      return `<svg viewBox="0 0 980 60" width="100%" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${theme.accent}" stop-opacity="0.8" />
      <stop offset="50%" stop-color="${theme.cardBorder}" stop-opacity="0.4" />
      <stop offset="100%" stop-color="${theme.accent}" stop-opacity="0.9" />
    </linearGradient>
  </defs>
  <path d="M0,30 C150,60 350,0 500,30 C650,60 830,10 980,30 L980,60 L0,60 Z" fill="url(#waveGrad)"/>
</svg>`;
    },
  },
  {
    id: 'hero',
    filename: 'hero.svg',
    title: 'Brand Hero Graphics Card',
    description: 'Compact brand header badge with tech stack pill indicators.',
    generateSvg: (config: ProfileConfig) => {
      const theme = THEMES[config.theme] || THEMES.darkSlate;
      return `<svg viewBox="0 0 980 120" width="100%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="980" height="120" rx="12" fill="${theme.cardBg}" stroke="${theme.cardBorder}" stroke-width="1"/>
  <text x="40" y="48" fill="${theme.textPrimary}" font-family="system-ui, sans-serif" font-size="22" font-weight="bold">${config.fullName}</text>
  <text x="40" y="78" fill="${theme.textSecondary}" font-family="system-ui, sans-serif" font-size="14">${config.bio.slice(0, 90)}...</text>
  <rect x="740" y="35" width="200" height="48" rx="8" fill="${theme.badgeBg}" stroke="${theme.cardBorder}"/>
  <text x="840" y="64" fill="${theme.badgeText}" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">ACTIVE CONTRIBUTOR</text>
</svg>`;
    },
  },
  {
    id: 'platform',
    filename: 'platform.svg',
    title: 'Cloud & Platform Engineering Architecture',
    description: 'Technical vector diagram card highlighting platform engineering competencies.',
    generateSvg: (config: ProfileConfig) => {
      const theme = THEMES[config.theme] || THEMES.darkSlate;
      return `<svg viewBox="0 0 980 160" width="100%" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="980" height="160" rx="14" fill="${theme.bg}" stroke="${theme.cardBorder}"/>
  <g transform="translate(30, 25)">
    <text x="0" y="20" fill="${theme.accent}" font-family="monospace" font-size="14" font-weight="bold">☁️ PLATFORM & CLOUD NATIVE ENGINE</text>
    <text x="0" y="48" fill="${theme.textPrimary}" font-family="system-ui, sans-serif" font-size="18" font-weight="600">Kubernetes // Docker // AWS // Terraform // eBPF Observability</text>
    <text x="0" y="75" fill="${theme.textSecondary}" font-family="system-ui, sans-serif" font-size="14">Automated multi-region cluster management, microservice service mesh, zero-trust security architecture.</text>
  </g>
  <circle cx="880" cy="80" r="45" fill="${theme.cardBg}" stroke="${theme.accent}" stroke-width="2"/>
  <path d="M860 80 L875 95 L905 65" stroke="${theme.accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
    },
  },
  {
    id: 'ai',
    filename: 'ai.svg',
    title: 'AI & Neural Systems Banner',
    description: 'Specialized graphic for Machine Learning, LLM Agents, and Vector Databases.',
    generateSvg: (config: ProfileConfig) => {
      const theme = THEMES[config.theme] || THEMES.darkSlate;
      return `<svg viewBox="0 0 980 160" width="100%" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="980" height="160" rx="14" fill="${theme.cardBg}" stroke="${theme.cardBorder}"/>
  <g transform="translate(30, 30)">
    <text x="0" y="20" fill="${theme.accent}" font-family="monospace" font-size="14" font-weight="bold">🧠 INTELLIGENT AI SYSTEMS & LLM AGENTS</text>
    <text x="0" y="50" fill="${theme.textPrimary}" font-family="system-ui, sans-serif" font-size="18" font-weight="600">PyTorch // LangChain // Gemini API // Vector Embeddings // RAG Pipeline</text>
    <text x="0" y="78" fill="${theme.textSecondary}" font-family="system-ui, sans-serif" font-size="14">Architecting autonomous AI agent teams, real-time context retrieval, and low-latency inference runtimes.</text>
  </g>
</svg>`;
    },
  },
  {
    id: 'kubernetes',
    filename: 'kubernetes.svg',
    title: 'Kubernetes & Service Mesh Vector',
    description: 'Cluster topology & orchestration visual element.',
    generateSvg: (config: ProfileConfig) => {
      const theme = THEMES[config.theme] || THEMES.darkSlate;
      return `<svg viewBox="0 0 980 120" width="100%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="980" height="120" rx="12" fill="${theme.bg}" stroke="${theme.cardBorder}"/>
  <text x="30" y="45" fill="${theme.accent}" font-family="monospace" font-size="15" font-weight="bold">☸️ KUBERNETES & SERVICE MESH</text>
  <text x="30" y="75" fill="${theme.textSecondary}" font-family="system-ui" font-size="14">GitOps workflow automation, Istio traffic management, custom CRDs, and Helm chart deployments.</text>
</svg>`;
    },
  },
  {
    id: 'background',
    filename: 'background.svg',
    title: 'Subtle Technical Background Grid',
    description: 'SVG background pattern with glowing radial nodes.',
    generateSvg: (config: ProfileConfig) => {
      const theme = THEMES[config.theme] || THEMES.darkSlate;
      return `<svg viewBox="0 0 1000 600" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${theme.cardBorder}" stroke-width="0.5" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="${theme.bg}"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <circle cx="500" cy="300" r="250" fill="${theme.accent}" opacity="0.08"/>
</svg>`;
    },
  },
];
