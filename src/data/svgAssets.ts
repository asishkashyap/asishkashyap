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
      return `<svg fill="none" viewBox="0 0 980 240" width="100%" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .container {
          width: 980px;
          height: 240px;
          background: linear-gradient(135deg, ${theme.bg} 0%, ${theme.cardBg} 50%, #050811 100%);
          border-radius: 16px;
          border: 1px solid ${theme.cardBorder};
          box-sizing: border-box;
          padding: 32px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .glow-orb {
          position: absolute;
          right: -40px;
          top: -40px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, ${theme.accent} 0%, transparent 70%);
          animation: pulseGlow 6s ease-in-out infinite;
          pointer-events: none;
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(${theme.cardBorder} 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.25;
        }
        .title-gradient {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(90deg, ${theme.textPrimary} 0%, ${theme.accent} 50%, #ffffff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 5s linear infinite;
          margin: 0;
          letter-spacing: -0.02em;
        }
        .subtitle {
          font-size: 16px;
          color: ${theme.textSecondary};
          margin-top: 8px;
          font-weight: 500;
          letter-spacing: 0.01em;
        }
        .badge-row {
          display: flex;
          gap: 12px;
          margin-top: 20px;
          align-items: center;
        }
        .pill {
          background: ${theme.cardBorder};
          color: ${theme.accent};
          border: 1px solid ${theme.accent}40;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          font-family: "Fira Code", monospace;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
      </style>

      <div class="container">
        <div class="grid-overlay"></div>
        <div class="glow-orb"></div>
        <div style="position: relative; z-index: 2;">
          <div style="font-family: 'Fira Code', monospace; color: ${theme.accent}; font-size: 13px; font-weight: 600; margin-bottom: 6px;">
            👋 HELLO WORLD // ${config.username.toUpperCase()}
          </div>
          <h1 class="title-gradient">${config.fullName}</h1>
          <p class="subtitle">${config.title} — ${config.tagline}</p>
          <div class="badge-row">
            <span class="pill">⚡ Systems Architecture</span>
            <span class="pill">🤖 AI & LLM Infrastructure</span>
            <span class="pill">☁️ Cloud Native Platform</span>
          </div>
        </div>
      </div>
    </div>
  </foreignObject>
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
