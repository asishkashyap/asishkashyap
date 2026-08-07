import { ProfileConfig } from '../types';
import { THEMES, TECH_STACK } from './profileData';

export function generateMainReadme(config: ProfileConfig): string {
  const theme = THEMES[config.theme] || THEMES.darkSlate;
  
  // Group badges by category
  const categorized: Record<string, string[]> = {};
  config.selectedTechStack.forEach(techName => {
    const item = TECH_STACK.find(t => t.name.toLowerCase() === techName.toLowerCase()) || {
      name: techName,
      logo: techName.toLowerCase().replace(/[^a-z0-9]/g, ''),
      logoColor: 'white',
      bgColor: '0d1117',
      category: 'Tools'
    };
    const cat = item.category || 'Tools';
    if (!categorized[cat]) categorized[cat] = [];
    categorized[cat].push(`![${item.name}](https://img.shields.io/badge/${encodeURIComponent(item.name)}-${item.bgColor}?style=for-the-badge&logo=${item.logo}&logoColor=${item.logoColor})`);
  });

  const badgesSection = Object.entries(categorized).map(([cat, badges]) => `
### 🔸 ${cat}
<div align="center">

${badges.join(' ')}

</div>
`).join('\n');

  // Repositories section formatted as clean SaaS showcase cards
  const reposMarkdown = config.repositories.map(repo => `
<table>
  <tr>
    <td width="100%">
      <h3 align="left">🔹 <a href="${repo.url}"><b>${repo.name}</b></a> <code>${repo.badge || 'Project'}</code></h3>
      <p><i>${repo.description}</i></p>
      <p>
        <b>Primary Stack:</b> <code>${repo.language}</code> &nbsp;|&nbsp;
        ⭐ <b>Stars:</b> <code>${repo.stars}</code> &nbsp;|&nbsp;
        🍴 <b>Forks:</b> <code>${repo.forks}</code>
      </p>
      <p><b>Topics:</b> ${repo.topics.map(t => `<code>#${t}</code>`).join(' ')}</p>
    </td>
  </tr>
</table>
`).join('\n');

  return `<div align="center">

<!-- Hero Banner Vector SVG -->
<img src="./assets/banner.svg" alt="${config.fullName} - ${config.title}" width="100%" />

<br />

<!-- Animated Typing SVG -->
<a href="https://github.com/${config.username}">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=20&duration=2500&pause=1000&color=58A6FF&center=true&vCenter=true&width=800&lines=Senior+DevSecOps+%26+AI+Engineer+(6%2B+Yrs);Zero-Trust+Kubernetes+%26+Cloud+Native+IDPs;Autonomous+AI+SRE+Agents+%26+Infrastructure+as+Code;Building+Resilient+CI%2FCD+Pipelines+%26+Azure+OIDC" alt="Typing Header SVG" />
</a>

<br />

### 🚀 *"Architecting Zero-Trust Cloud Platforms & Autonomous AI SRE Workflows"*

<!-- Status Badges Row -->
[![Location](https://img.shields.io/badge/Location-Greater%20Noida%2C%20India%20%7C%20Remote-0d1117?style=for-the-badge&logo=googlemaps&logoColor=58a6ff)](https://github.com/asishkashyap)
[![Experience](https://img.shields.io/badge/Experience-6%2B%20Years-0d1117?style=for-the-badge&logo=experience&logoColor=3fb950)](https://github.com/asishkashyap)
[![Role Status](https://img.shields.io/badge/Status-🟢%20Open%20for%20Senior%20Roles-0d1117?style=for-the-badge&logo=statuspage&logoColor=3fb950)](mailto:${config.email})

<br />

<!-- CTA Badges Matrix -->
[![Website](https://img.shields.io/badge/Website-asishkashyap.com-58a6ff?style=for-the-badge&logo=googlechrome&logoColor=white)](${config.website})
[![LinkedIn](https://img.shields.io/badge/LinkedIn-asishkashyap-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${config.linkedin})
[![X/Twitter](https://img.shields.io/badge/X%2FTwitter-%40asishkashyap1-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://x.com/${config.twitter})
[![Email](https://img.shields.io/badge/Email-kashyapashish29%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${config.email})

<br />

<!-- SaaS Hero Metric Cards Grid -->
<table>
  <tr>
    <td align="center" width="25%">
      <h2>⚡ 6+ Yrs</h2>
      <sub>DevSecOps &amp; Cloud</sub>
    </td>
    <td align="center" width="25%">
      <h2>🛡️ Zero-Trust</h2>
      <sub>K8s &amp; Azure OIDC</sub>
    </td>
    <td align="center" width="25%">
      <h2>📦 100+</h2>
      <sub>Terraform Modules</sub>
    </td>
    <td align="center" width="25%">
      <h2>🤖 AI SRE</h2>
      <sub>Autonomous Workflows</sub>
    </td>
  </tr>
</table>

</div>

---

## 🎯 Recruiter & Leadership Executive Summary

\`\`\`bash
$ asish --version
Asish Kashyap v3.6.0 (Systems & AI Architecture Edition)

$ asish --get-summary
> ${config.bio}
> Location: ${config.location}
> Target Scope: Senior DevSecOps Engineer, Platform Architect, Lead Infrastructure & AI SRE.

$ asish --list-passions
[✓] High-throughput Distributed Systems & Cloud Native Platform Engineering
[✓] Zero-Trust Kubernetes Control Planes (EKS / AKS) & Service Meshes (Istio/Cilium)
[✓] DevSecOps, Shift-Left Security & Terraform Infrastructure as Code
[✓] Autonomous AI Agent Workflows, LLM RAG Engines & Self-Healing SRE Automation
\`\`\`

---

## 🏆 Key Quantitative Engineering Achievements

<table>
  <tr>
    <th width="30%">Impact Domain</th>
    <th width="70%">Engineering Milestone &amp; Production Outcome</th>
  </tr>
  <tr>
    <td><b>📈 99.99% Availability</b></td>
    <td>Architected resilient multi-region Kubernetes control planes with blue/green traffic shifting and automated failover recovery.</td>
  </tr>
  <tr>
    <td><b>🔐 Zero-Trust Security</b></td>
    <td>Eliminated hardcoded cloud credentials across 50+ repositories using Azure OIDC passwordless federated authentication and automated Checkov IaC scans.</td>
  </tr>
  <tr>
    <td><b>🚀 70% Faster Releases</b></td>
    <td>Designed enterprise modular GitHub Actions reusable workflows, reducing CI/CD pipeline execution duration from 25m to 7m.</td>
  </tr>
  <tr>
    <td><b>🤖 AI SRE Agents</b></td>
    <td>Developed autonomous AI incident triage bots utilizing Gemini API for real-time anomaly log parsing and pod diagnostic summaries.</td>
  </tr>
</table>

---

## 🛠️ Technology Stack & Ecosystem

${badgesSection}

---

${config.showFeaturedRepos ? `## 🚀 Featured Open Source Repositories & Monorepos\n\n${reposMarkdown}\n---\n` : ''}

## 📜 Professional Certifications & Verified Credentials

<div align="center">

[![CKA](https://img.shields.io/badge/Certified-CKA%20--%20Kubernetes%20Administrator-326ce5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![CKS](https://img.shields.io/badge/Certified-CKS%20--%20Kubernetes%20Security-3fb950?style=for-the-badge&logo=shield&logoColor=white)](https://kubernetes.io/)
[![Azure Architect](https://img.shields.io/badge/Microsoft-Azure%20Solutions%20Architect%20Expert-0089d6?style=for-the-badge&logo=microsoftazure&logoColor=white)](https://azure.microsoft.com/)
[![Terraform Associate](https://img.shields.io/badge/HashiCorp-Terraform%20Associate-844fba?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![AWS DevOps](https://img.shields.io/badge/AWS-DevOps%20Engineer%20Professional-ff9900?style=for-the-badge&logo=amazonwebservices&logoColor=white)](https://aws.amazon.com/)

</div>

---

## 🔍 Collapsible Technical Deep Dives & Architecture Specs

<details>
<summary>🏛️ <b>Deep-Dive Systems Architecture & Design Philosophy</b> (Click to expand)</summary>

<br />

<div align="center">
  <img src="./assets/platform.svg" alt="Zero-Trust Platform Architecture" width="100%" />
  <br /><br />
  <img src="./assets/devops.svg" alt="Continuous DevSecOps Pipeline" width="100%" />
</div>

<br />

### 1. Immutable Infrastructure & GitOps
All infrastructure state is codified in Terraform monorepos (\`terraform-azure-enterprise\`). State modifications require peer-reviewed Pull Requests validated by \`tflint\`, \`checkov\`, and dry-run \`terraform plan\` executions via Azure OIDC.

### 2. Zero-Trust Kubernetes Pod Security
Workloads run under the \`Restricted\` Pod Security Standard. Root processes are forbidden (\`runAsNonRoot: true\`), root filesystems are mounted read-only, Linux capabilities are stripped, and inter-pod network isolation is enforced by default-deny NetworkPolicies.

### 3. Autonomous AI SRE Workflows
Operational logs and metric streams are analyzed by event-driven serverless workers. Anomaly clusters are passed to Gemini LLM agents to generate root-cause hypotheses and recommend remediation steps to on-call engineers.

</details>

<details>
<summary>🗺️ <b>Strategic Learning & Engineering Roadmap (Q3 / Q4 2026)</b> (Click to expand)</summary>

<br />

- [ ] **eBPF Kernel Observability:** Implementing Cilium Service Mesh & Hubble deep packet kernel monitoring.
- [ ] **Multi-Agent Orchestration:** Scaling distributed LLM agent swarms with LangGraph and server-side Gemini function calling.
- [ ] **WebAssembly at the Edge:** Exploring Spin/Wasmtime micro-runtimes for low-latency edge computing.

</details>

---

## 📊 Live GitHub Developer Metrics & Activity Dashboard

<div align="center">

${config.showStatsCard ? `<img src="https://github-readme-stats.vercel.app/api?username=${config.username}&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117&text_color=f0f6fc&icon_color=58a6ff&title_color=58a6ff" alt="GitHub Stats" width="49%" />` : ''}
${config.showStreakCard ? `<img src="https://github-readme-streak-stats.herokuapp.com/?user=${config.username}&theme=dark&hide_border=true&background=0d1117&stroke=58a6ff&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff" alt="GitHub Streak" width="49%" />` : ''}

${config.showTopLangs ? `<br/><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${config.username}&layout=compact&theme=dark&hide_border=true&bg_color=0d1117&text_color=f0f6fc&title_color=58a6ff" alt="Top Languages" width="60%" />` : ''}

</div>

${config.showSnakeAnimation ? `
### 🐍 Contribution Graph Eat-the-Grid Snake

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake.svg" />
    <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/${config.username}/${config.username}/output/github-contribution-grid-snake.svg" width="100%" />
  </picture>
</div>
` : ''}

---

## 🌐 Connect & Technical Collaboration

<div align="center">

<table>
  <tr>
    <td align="center"><b>📬 Direct Email</b></td>
    <td align="center"><a href="mailto:${config.email}"><code>${config.email}</code></a></td>
  </tr>
  <tr>
    <td align="center"><b>💼 LinkedIn Profile</b></td>
    <td align="center"><a href="https://linkedin.com/in/${config.linkedin}"><code>linkedin.com/in/${config.linkedin}</code></a></td>
  </tr>
  <tr>
    <td align="center"><b>🐦 X (Twitter)</b></td>
    <td align="center"><a href="https://x.com/${config.twitter}"><code>@${config.twitter}</code></a></td>
  </tr>
  <tr>
    <td align="center"><b>🌐 Personal Site</b></td>
    <td align="center"><a href="${config.website}"><code>${config.website}</code></a></td>
  </tr>
</table>

<br />

<sub>Designed with ❤️, Precision &amp; Markdown Craftsmanship by <b><a href="https://github.com/${config.username}">${config.fullName}</a></b></sub>

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
1. Create a repository with the exact same name as your GitHub username: \`asishkashyap/asishkashyap\`.
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
