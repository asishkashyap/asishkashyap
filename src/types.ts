export type ThemePreset = 'darkSlate' | 'cyberpunk' | 'emeraldCode' | 'obsidianGold';

export interface ThemeColors {
  name: string;
  bg: string;
  cardBg: string;
  cardBorder: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
  accentGlow: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
}

export interface TechBadge {
  name: string;
  logo: string;
  logoColor: string;
  bgColor: string;
  category: 'Cloud Native & DevOps' | 'AI Systems & Backend' | 'Security, Databases & Tooling' | 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'AI & ML' | 'Databases' | 'Tools';
}

export interface FeaturedRepository {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  topics: string[];
  url: string;
  badge?: string;
}

export interface ProfileConfig {
  username: string;
  fullName: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  company: string;
  email: string;
  website: string;
  twitter: string;
  linkedin: string;
  theme: ThemePreset;
  showStatsCard: boolean;
  showStreakCard: boolean;
  showTopLangs: boolean;
  showContributionGraph: boolean;
  showSnakeAnimation: boolean;
  showTerminalBio: boolean;
  showFeaturedRepos: boolean;
  selectedTechStack: string[];
  repositories: FeaturedRepository[];
}

export interface FolderNode {
  name: string;
  type: 'file' | 'folder';
  path: string;
  description?: string;
  children?: FolderNode[];
  content?: string;
}

export interface DesignSystemRule {
  category: string;
  title: string;
  description: string;
  specs: { label: string; value: string }[];
  exampleCode?: string;
}
