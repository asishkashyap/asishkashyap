import { ThemeColors, ThemePreset, TechBadge, FeaturedRepository, ProfileConfig, FolderNode, DesignSystemRule } from '../types';

export const THEMES: Record<ThemePreset, ThemeColors> = {
  darkSlate: {
    name: 'Dark Slate Pro',
    bg: '#0d1117',
    cardBg: '#161b22',
    cardBorder: '#30363d',
    textPrimary: '#f0f6fc',
    textSecondary: '#8b949e',
    accent: '#58a6ff',
    accentGlow: 'rgba(88, 166, 255, 0.15)',
    gradient: 'from-blue-600 to-indigo-600',
    badgeBg: '#1f242d',
    badgeText: '#79c0ff',
  },
  cyberpunk: {
    name: 'Cyberpunk Neon',
    bg: '#05050a',
    cardBg: '#0f0f1b',
    cardBorder: '#2b2140',
    textPrimary: '#f3e8ff',
    textSecondary: '#a78bfa',
    accent: '#ec4899',
    accentGlow: 'rgba(236, 72, 153, 0.2)',
    gradient: 'from-pink-500 via-purple-500 to-cyan-400',
    badgeBg: '#211333',
    badgeText: '#f472b6',
  },
  emeraldCode: {
    name: 'Emerald Matrix',
    bg: '#06120e',
    cardBg: '#0b1d17',
    cardBorder: '#183c2e',
    textPrimary: '#ecfdf5',
    textSecondary: '#6ee7b7',
    accent: '#10b981',
    accentGlow: 'rgba(16, 185, 129, 0.2)',
    gradient: 'from-emerald-500 to-teal-400',
    badgeBg: '#112e23',
    badgeText: '#34d399',
  },
  obsidianGold: {
    name: 'Obsidian Gold',
    bg: '#0a0a0b',
    cardBg: '#141417',
    cardBorder: '#2e2c24',
    textPrimary: '#fef08a',
    textSecondary: '#ca8a04',
    accent: '#eab308',
    accentGlow: 'rgba(234, 179, 8, 0.18)',
    gradient: 'from-amber-500 to-yellow-300',
    badgeBg: '#211e13',
    badgeText: '#fde047',
  },
};

export const TECH_STACK: TechBadge[] = [
  // Frontend
  { name: 'TypeScript', logo: 'typescript', logoColor: '3178C6', bgColor: '0d1117', category: 'Frontend' },
  { name: 'React', logo: 'react', logoColor: '61DAFB', bgColor: '0d1117', category: 'Frontend' },
  { name: 'Next.js', logo: 'nextdotjs', logoColor: 'ffffff', bgColor: '0d1117', category: 'Frontend' },
  { name: 'Tailwind CSS', logo: 'tailwindcss', logoColor: '06B6D4', bgColor: '0d1117', category: 'Frontend' },
  { name: 'Vue.js', logo: 'vuedotjs', logoColor: '4FC08D', bgColor: '0d1117', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', logo: 'nodedotjs', logoColor: '5FA04E', bgColor: '0d1117', category: 'Backend' },
  { name: 'Python', logo: 'python', logoColor: '3776AB', bgColor: '0d1117', category: 'Backend' },
  { name: 'Go', logo: 'go', logoColor: '00ADD8', bgColor: '0d1117', category: 'Backend' },
  { name: 'FastAPI', logo: 'fastapi', logoColor: '009688', bgColor: '0d1117', category: 'Backend' },
  { name: 'Express', logo: 'express', logoColor: 'ffffff', bgColor: '0d1117', category: 'Backend' },

  // Cloud & DevOps
  { name: 'Docker', logo: 'docker', logoColor: '2496ED', bgColor: '0d1117', category: 'Cloud & DevOps' },
  { name: 'Kubernetes', logo: 'kubernetes', logoColor: '326CE5', bgColor: '0d1117', category: 'Cloud & DevOps' },
  { name: 'AWS', logo: 'amazonwebservices', logoColor: 'FF9900', bgColor: '0d1117', category: 'Cloud & DevOps' },
  { name: 'Google Cloud', logo: 'googlecloud', logoColor: '4285F4', bgColor: '0d1117', category: 'Cloud & DevOps' },
  { name: 'GitHub Actions', logo: 'githubactions', logoColor: '2088FF', bgColor: '0d1117', category: 'Cloud & DevOps' },
  { name: 'Terraform', logo: 'terraform', logoColor: '844FBA', bgColor: '0d1117', category: 'Cloud & DevOps' },

  // AI & ML
  { name: 'PyTorch', logo: 'pytorch', logoColor: 'EE4C2C', bgColor: '0d1117', category: 'AI & ML' },
  { name: 'TensorFlow', logo: 'tensorflow', logoColor: 'FF6F00', bgColor: '0d1117', category: 'AI & ML' },
  { name: 'OpenAI API', logo: 'openai', logoColor: '412991', bgColor: '0d1117', category: 'AI & ML' },
  { name: 'LangChain', logo: 'langchain', logoColor: '1C3C3C', bgColor: '0d1117', category: 'AI & ML' },

  // Databases
  { name: 'PostgreSQL', logo: 'postgresql', logoColor: '4169E1', bgColor: '0d1117', category: 'Databases' },
  { name: 'Redis', logo: 'redis', logoColor: 'FF4438', bgColor: '0d1117', category: 'Databases' },
  { name: 'MongoDB', logo: 'mongodb', logoColor: '47A248', bgColor: '0d1117', category: 'Databases' },
  { name: 'Firestore', logo: 'firebase', logoColor: 'FFCA28', bgColor: '0d1117', category: 'Databases' },

  // Tools
  { name: 'Git', logo: 'git', logoColor: 'F05032', bgColor: '0d1117', category: 'Tools' },
  { name: 'Linux', logo: 'linux', logoColor: 'FCC624', bgColor: '0d1117', category: 'Tools' },
  { name: 'Neovim', logo: 'neovim', logoColor: '57A143', bgColor: '0d1117', category: 'Tools' },
  { name: 'Figma', logo: 'figma', logoColor: 'F24E1E', bgColor: '0d1117', category: 'Tools' },
];

export const DEFAULT_REPOSITORIES: FeaturedRepository[] = [
  {
    name: 'ai-agent-orchestrator',
    description: 'High-performance distributed AI agent runtime and workflow engine built with TypeScript & Go.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 1240,
    forks: 182,
    topics: ['ai-agent', 'orchestration', 'typescript', 'distributed-systems', 'llm'],
    url: 'https://github.com/kashyapashish29/ai-agent-orchestrator',
    badge: '⭐ Featured Project',
  },
  {
    name: 'cloud-native-k8s-mesh',
    description: 'Zero-trust microservices mesh control plane with automated eBPF observability and routing.',
    language: 'Go',
    languageColor: '#00add8',
    stars: 890,
    forks: 114,
    topics: ['kubernetes', 'ebpf', 'golang', 'service-mesh', 'cloud-native'],
    url: 'https://github.com/kashyapashish29/cloud-native-k8s-mesh',
    badge: '🚀 Cloud Native',
  },
  {
    name: 'vector-search-engine',
    description: 'Ultra-fast SIMD-accelerated vector similarity search engine written in C++ and Python.',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 650,
    forks: 92,
    topics: ['vector-database', 'embeddings', 'python', 'simd', 'ann-search'],
    url: 'https://github.com/kashyapashish29/vector-search-engine',
    badge: '⚡ High Performance',
  },
  {
    name: 'react-design-system-pro',
    description: 'Accessible, unstyled-first UI component ecosystem with motion design and automatic dark mode.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 430,
    forks: 65,
    topics: ['react', 'design-system', 'tailwind', 'framer-motion', 'a11y'],
    url: 'https://github.com/kashyapashish29/react-design-system-pro',
    badge: '🎨 Design System',
  },
];

export const DEFAULT_PROFILE: ProfileConfig = {
  username: 'asishkashyap',
  fullName: 'Asish Kashyap',
  title: 'Senior DevSecOps & AI Engineer',
  tagline: 'Architecting High-Performance Cloud Native Platforms & Intelligent AI Systems',
  bio: 'Senior DevSecOps & AI Engineer (6+ yrs) | Building Zero-Trust CI/CD pipelines, Kubernetes IDPs & Autonomous AI SRE agents.',
  location: 'Greater Noida, India',
  company: 'Senior DevSecOps & AI Engineer',
  email: 'kashyapashish29@gmail.com',
  website: 'https://github.com/asishkashyap',
  twitter: 'asishkashyap',
  linkedin: 'asish-kashyap-23631115',
  theme: 'darkSlate',
  showStatsCard: true,
  showStreakCard: true,
  showTopLangs: true,
  showContributionGraph: true,
  showSnakeAnimation: true,
  showTerminalBio: true,
  showFeaturedRepos: true,
  selectedTechStack: [
    'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Go',
    'Docker', 'Kubernetes', 'AWS', 'PyTorch', 'OpenAI API', 'PostgreSQL', 'Redis', 'Git'
  ],
  repositories: DEFAULT_REPOSITORIES,
};

export const REPO_FOLDER_TREE: FolderNode = {
  name: 'kashyapashish29',
  type: 'folder',
  path: '/',
  description: 'Root repository directory for GitHub Profile brand',
  children: [
    {
      name: '.github',
      type: 'folder',
      path: '/.github',
      description: 'GitHub configuration and automated CI/CD workflows',
      children: [
        {
          name: 'workflows',
          type: 'folder',
          path: '/.github/workflows',
          description: 'GitHub Actions workflow definitions',
          children: [
            {
              name: 'snake.yml',
              type: 'file',
              path: '/.github/workflows/snake.yml',
              description: 'Generates contribution graph eat-the-grid snake animation SVG on daily schedule',
            },
            {
              name: 'metrics.yml',
              type: 'file',
              path: '/.github/workflows/metrics.yml',
              description: 'Generates deep developer profile metrics, language percentages, and commit streak SVGs',
            },
            {
              name: 'validate.yml',
              type: 'file',
              path: '/.github/workflows/validate.yml',
              description: 'Validates README links, SVG assets format, and markdown linting on every push',
            },
          ],
        },
      ],
    },
    {
      name: 'assets',
      type: 'folder',
      path: '/assets',
      description: 'Custom high-resolution vector SVG branding assets',
      children: [
        {
          name: 'banner.svg',
          type: 'file',
          path: '/assets/banner.svg',
          description: 'Animated primary hero banner graphic with dynamic glowing gradients and developer title',
        },
        {
          name: 'wave.svg',
          type: 'file',
          path: '/assets/wave.svg',
          description: 'Seamless section separator wave with animated gradient fill',
        },
        {
          name: 'hero.svg',
          type: 'file',
          path: '/assets/hero.svg',
          description: 'Main profile header image combining tech stack badge cluster & tagline',
        },
        {
          name: 'platform.svg',
          type: 'file',
          path: '/assets/platform.svg',
          description: 'Cloud Native & Platform Engineering technical badge banner',
        },
        {
          name: 'ai.svg',
          type: 'file',
          path: '/assets/ai.svg',
          description: 'Artificial Intelligence & Neural Systems architecture vector asset',
        },
        {
          name: 'kubernetes.svg',
          type: 'file',
          path: '/assets/kubernetes.svg',
          description: 'Kubernetes & Service Mesh ecosystem custom graphic',
        },
        {
          name: 'background.svg',
          type: 'file',
          path: '/assets/background.svg',
          description: 'Subtle technical grid background pattern with ambient glow effects',
        },
      ],
    },
    {
      name: 'docs',
      type: 'folder',
      path: '/docs',
      description: 'Brand documentation, design guidelines, and roadmap',
      children: [
        {
          name: 'branding-guide.md',
          type: 'file',
          path: '/docs/branding-guide.md',
          description: 'Complete brand guide covering typography, color tokens, voice, and visual rules',
        },
        {
          name: 'customization.md',
          type: 'file',
          path: '/docs/customization.md',
          description: 'Step-by-step instructions for customizing badges, themes, and automated stats',
        },
        {
          name: 'roadmap.md',
          type: 'file',
          path: '/docs/roadmap.md',
          description: 'Quarterly engineering goals, upcoming open-source projects, and talk schedules',
        },
      ],
    },
    {
      name: 'scripts',
      type: 'folder',
      path: '/scripts',
      description: 'Automation helper scripts for asset generation and maintenance',
      children: [
        {
          name: 'generate-svgs.js',
          type: 'file',
          path: '/scripts/generate-svgs.js',
          description: 'Node script to render dynamic SVGs based on theme parameters',
        },
        {
          name: 'update-readme.js',
          type: 'file',
          path: '/scripts/update-readme.js',
          description: 'Auto-updates latest blog posts, dynamic stats, and activity feeds in README',
        },
      ],
    },
    {
      name: 'README.md',
      type: 'file',
      path: '/README.md',
      description: 'Primary GitHub Profile README markdown file displayed on user profile page',
    },
    {
      name: 'LICENSE',
      type: 'file',
      path: '/LICENSE',
      description: 'MIT Open Source License file',
    },
  ],
};

export const DESIGN_SYSTEM_RULES: DesignSystemRule[] = [
  {
    category: 'Color Palette',
    title: 'Dark Slate Pro & High-Contrast Accents',
    description: 'Designed specifically for GitHub Dark Mode with high contrast legibility and vibrant accent glows.',
    specs: [
      { label: 'Background Canvas', value: '#0d1117 (GitHub Dark Base)' },
      { label: 'Card Base', value: '#161b22 with 1px border (#30363d)' },
      { label: 'Primary Accent', value: '#58a6ff (Electric Blue Glow)' },
      { label: 'Secondary Accent', value: '#a371f7 (Cyber Purple Glow)' },
      { label: 'Success Glow', value: '#3fb950 (Emerald Green)' },
    ],
  },
  {
    category: 'Typography',
    title: 'Monospaced Precision + Modern Sans',
    description: 'Strict font pairing combining Fira Code / JetBrains Mono for code elements with Plus Jakarta Sans / Inter for headings.',
    specs: [
      { label: 'Headings Font', value: 'Plus Jakarta Sans / Inter (-apple-system)' },
      { label: 'Terminal / Badges Font', value: 'Fira Code / JetBrains Mono / monospace' },
      { label: 'Base Line Height', value: '1.6 for paragraph text' },
      { label: 'Header Scale Ratio', value: '1.333 (Perfect Fourth)' },
    ],
  },
  {
    category: 'Spacing',
    title: 'Mathematical Grid System (8px Baseline)',
    description: 'Rhythmic padding and container margins that guarantee clean visual hierarchy without visual clutter.',
    specs: [
      { label: 'Section Gap', value: '32px (2rem)' },
      { label: 'Card Internal Padding', value: '20px (1.25rem)' },
      { label: 'Badge Gap', value: '8px (0.5rem)' },
      { label: 'Outer Boundary', value: 'Max width 980px centered' },
    ],
  },
  {
    category: 'Badge Rules',
    title: 'Unified Shield Badges Format',
    description: 'All badges use standard shields.io flat-square syntax with uniform height, high-contrast logos, and matching border radius.',
    specs: [
      { label: 'Style', value: 'for-the-badge or flat-square' },
      { label: 'Logo Color', value: 'White / High Contrast Hex' },
      { label: 'Background Color', value: '#0d1117 or Theme Matching Dark' },
      { label: 'Grouping', value: 'Categorized by domain (Frontend, Backend, Cloud, AI, DB, Tools)' },
    ],
    exampleCode: '![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)',
  },
  {
    category: 'Icon Rules',
    title: 'Lucide Vector Suite & Official Tech Logos',
    description: 'Monochrome or themed vector icons with consistent 20px height and stroke alignment.',
    specs: [
      { label: 'Icon Set', value: 'Simple Icons + Lucide React + Standard GitHub Octicons' },
      { label: 'Size', value: '20px x 20px uniform' },
      { label: 'Spacing', value: '6px right margin next to labels' },
    ],
  },
  {
    category: 'SVG Style',
    title: 'Vector Artwork with Gradient Fills & Animations',
    description: 'Self-contained inline SVG assets with embedded CSS keyframe animations, dark background fills, and crisp vectors.',
    specs: [
      { label: 'ViewBox Aspect', value: '980x220 for Hero Banner, 980x80 for Section Headers' },
      { label: 'Embedded CSS', value: 'CSS @keyframes pulse, shimmer, and gradient-shift' },
      { label: 'Accessibility', value: 'Full contrast WCAG AA pass' },
    ],
  },
  {
    category: 'Animation Rules',
    title: 'Subtle Ambient Motion (60 FPS)',
    description: 'Smooth 3-6 second loops for ambient glow, snake contribution movement, and typing terminal effect.',
    specs: [
      { label: 'Banner Shimmer', value: '4s infinite ease-in-out' },
      { label: 'Terminal Cursor', value: '1s step-end infinite blink' },
      { label: 'Snake Animation', value: 'Daily automated cron trigger' },
    ],
  },
  {
    category: 'Section Layout',
    title: 'Logical Developer Flow Architecture',
    description: 'Top-down narrative structure guiding visitors from high-impact Hero Banner -> About Terminal -> Tech Stack -> Featured Repos -> Live Metrics -> Contacts.',
    specs: [
      { label: 'Hero Section', value: 'Animated SVG Banner + Tagline + Quick Badges' },
      { label: 'Terminal Section', value: 'Interactive CLI presentation of bio & philosophy' },
      { label: 'Tech Matrix', value: 'Categorized technology shields' },
      { label: 'Metrics Grid', value: 'GitHub Stats + Top Languages + Commit Streak + Snake Graph' },
    ],
  },
  {
    category: 'Widget Placement',
    title: 'Symmetrical Dashboard Grid',
    description: '2-column side-by-side card grid for GitHub Stats & Streak, maintaining optical balance on desktop.',
    specs: [
      { label: 'GitHub Stats Card', value: 'Left Column (50% width)' },
      { label: 'Streak Stats Card', value: 'Right Column (50% width)' },
      { label: 'Contribution Snake', value: 'Full width (100%) below cards' },
    ],
  },
  {
    category: 'Responsive Guidelines',
    title: 'Fluid Stacking from 320px to 1440px+',
    description: 'Ensures flawless rendering on GitHub Mobile app, tablet view, and ultra-wide desktop monitors.',
    specs: [
      { label: 'Mobile (<640px)', value: 'Single column stack, wrapped badge rows, 100% SVG scaling' },
      { label: 'Desktop (>=1024px)', value: '2-column metrics cards, aligned grid items, 980px max container' },
    ],
  },
];
