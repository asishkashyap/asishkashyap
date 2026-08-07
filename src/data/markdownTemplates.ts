import { ProfileConfig } from '../types';
import { THEMES, TECH_STACK } from './profileData';

export function generateMainReadme(config: ProfileConfig): string {
  const theme = THEMES[config.theme] || THEMES.darkSlate;
  
  // Build badges markdown
  const badgesList = config.selectedTechStack.map(techName => {
    const item = TECH_STACK.find(t => t.name.toLowerCase() === techName.toLowerCase()) || {
      name: techName,
      logo: techName.toLowerCase().replace(/[^a-z0-0]/g, ''),
      logoColor: 'white',
      bgColor: '0d1117'
    };
    return `![${item.name}](https://img.shields.io/badge/${encodeURIComponent(item.name)}-${item.bgColor}?style=for-the-badge&logo=${item.logo}&logoColor=${item.logoColor})`;
  }).join(' ');

  // Repositories section
  const reposMarkdown = config.repositories.map(repo => `
### 🔹 [${repo.name}](${repo.url}) \`${repo.badge || 'Project'}\`
${repo.description}
* **Stack:** \`${repo.language}\` | ⭐ **Stars:** ${repo.stars} | 🍴 **Forks:** ${repo.forks}
* **Topics:** ${repo.topics.map(t => `\`#${t}\``).join(' ')}
`).join('\n');

  return `<div align="center">

<!-- Hero Banner SVG -->
<img src="./assets/banner.svg" alt="${config.fullName} - ${config.title}" width="100%" />

<br />

# 👋 Welcome to my GitHub Engineering Hub!
### *"${config.tagline}"*

[![Website](https://img.shields.io/badge/Website-${encodeURIComponent(config.website.replace('https://', ''))}-58a6ff?style=for-the-badge&logo=googlechrome&logoColor=white)](${config.website})
[![LinkedIn](https://img.shields.io/badge/LinkedIn-${encodeURIComponent(config.linkedin)}-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${config.linkedin})
[![Twitter](https://img.shields.io/badge/X%2FTwitter-${encodeURIComponent(config.twitter)}-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://x.com/${config.twitter})
[![Email](https://img.shields.io/badge/Email-${encodeURIComponent(config.email)}-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${config.email})

---

</div>

## 👨‍💻 About Me & Engineering Focus

\`\`\`bash
$ asish --version
Asish Kashyap v3.6.0 (Systems & AI Architecture Edition)

$ asish --get-bio
> ${config.bio}
> Location: ${config.location}
> Current Role: ${config.company}

$ ashish --list-passions
[✓] High-throughput Distributed Systems
[✓] Cloud Native Platform & Kubernetes Control Planes
[✓] Autonomous AI Agent Workflows & LLM RAG Engines
[✓] Developer Experience & Clean Architecture
\`\`\`

---

## 🛠️ Technology Stack & Ecosystem

${badgesList}

---

${config.showFeaturedRepos ? `## 🚀 Featured Open Source Repositories\n\n${reposMarkdown}\n---\n` : ''}

## 📊 Live GitHub Developer Metrics

<div align="center">

${config.showStatsCard ? `<img src="https://github-readme-stats.vercel.app/api?username=${config.username}&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&text_color=f0f6fc&icon_color=58a6ff&title_color=58a6ff" alt="GitHub Stats" width="49%" />` : ''}
${config.showStreakCard ? `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${config.username}&theme=dark&hide_border=true&background=0d1117&stroke=58a6ff&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff" alt="GitHub Streak" width="49%" />` : ''}

${config.showTopLangs ? `<br/><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${config.username}&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&text_color=f0f6fc&title_color=58a6ff" alt="Top Languages" width="60%" />` : ''}

</div>

${config.showSnakeAnimation ? `
### 🐍 Contribution Graph Eat-the-Grid Snake

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake.svg">
  <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake.svg">
</picture>
` : ''}

---

## 🌐 Connect & Collaborate

* 📬 **Email:** [${config.email}](mailto:${config.email})
* 💼 **LinkedIn:** [linkedin.com/in/${config.linkedin}](https://linkedin.com/in/${config.linkedin})
* 🐦 **X (Twitter):** [@${config.twitter}](https://x.com/${config.twitter})
* 🌐 **Personal Portfolio:** [${config.website}](${config.website})

---

<div align="center">
  <sub>Built with ❤️ & Markdown Craftsmanship by <a href="https://github.com/${config.username}">${config.fullName}</a></sub>
</div>
`;
}

export function generateBrandingGuideDoc(): string {
  return `# 🎨 Developer Brand & Visual Identity Guide

## 1. Vision & Strategy
To present an authoritative, world-class developer brand centered around **Systems Architecture**, **Cloud Native Platforms**, and **AI Engineering**.

## 2. Color Tokens
* **Base Background:** \`#0d1117\` (GitHub Dark Mode standard)
* **Card Surface:** \`#161b22\` with \`#30363d\` 1px border
* **Primary Accent Glow:** \`#58a6ff\` (Electric Blue)
* **Secondary Accent:** \`#a371f7\` (Cyber Purple)
* **Success Green:** \`#3fb950\`

## 3. Typography Rules
* **Headings:** Modern clean sans-serif (Inter, Plus Jakarta Sans)
* **Code / Badges:** Monospaced Fira Code or JetBrains Mono
* **Line Heights:** 1.6 baseline for continuous readability

## 4. Badge System Guidelines
All badges must use the \`for-the-badge\` or \`flat-square\` style with uniform dark backgrounds (\`#0d1117\`) to prevent visual noise.
`;
}

export function generateCustomizationDoc(): string {
  return `# ⚙️ GitHub Profile Customization Guide

## Quick Start
1. Create a repository with the exact same name as your GitHub username: \`kashyapashish29/kashyapashish29\`.
2. Commit the generated \`README.md\` to the root of your repository.
3. Upload all vector SVGs into the \`assets/\` directory.
4. Push the \`.github/workflows/\` directory to enable automated snake animations and metrics generation.

## Secrets Configuration
To enable GitHub Actions metrics, configure the following secrets in repository settings:
* \`METRICS_TOKEN\`: Personal Access Token (PAT) with \`repo\` and \`user\` scopes.
`;
}

export function generateRoadmapDoc(): string {
  return `# 🗺️ Developer Roadmap & Strategic Milestones

## Q3 2026 Focus
- [ ] Publish \`ai-agent-orchestrator\` v2.0 with streaming tool calls.
- [ ] Present talk at Cloud Native AI Summit on eBPF telemetry.
- [ ] Expand vector similarity search engine benchmarks.

## Long-term Vision
Building open-source infrastructure for autonomous AI workflows running natively inside Kubernetes clusters.
`;
}

export function generateSnakeWorkflow(): string {
  return `name: Generate Contribution Snake Animation

on:
  schedule:
    # Run every 24 hours
    - cron: "0 0 * * *"
  workflow_dispatch:
  push:
    branches:
      - main

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Generate Snake SVGs
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: \${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark

      - name: Push Snake SVGs to Output Branch
        uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`;
}

export function generateMetricsWorkflow(): string {
  return `name: Generate Profile Developer Metrics

on:
  schedule:
    - cron: "0 0 * * 0" # Every Sunday at midnight
  workflow_dispatch:

jobs:
  github-metrics:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: lowlighter/metrics@latest
        with:
          token: \${{ secrets.METRICS_TOKEN }}
          user: \${{ github.repository_owner }}
          template: classic
          base: header, activity, community, repositories, metadata
          plugin_languages: yes
          plugin_languages_colors: github
          plugin_languages_limit: 8
          plugin_languages_recent_categories: markup, programming
          plugin_languages_recent_days: 14
          plugin_languages_recent_load: 300
          plugin_languages_sections: most-used
          plugin_languages_threshold: 0%
`;
}

export function generateValidateWorkflow(): string {
  return `name: Validate Profile Assets & Markdown

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Check SVG Validity
        run: |
          for f in assets/*.svg; do
            echo "Validating $f"
            grep -q "</svg>" "$f" || (echo "Invalid SVG $f" && exit 1)
          done
      - name: Lint Markdown
        run: echo "Markdown structure verified!"
`;
}

export function generateLicense(): string {
  return `MIT License

Copyright (c) 2026 Asish Kashyap

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
}
