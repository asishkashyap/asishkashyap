#!/usr/bin/env node

/**
 * GitHub Issues & Milestones Automator
 * 
 * Usage with GitHub CLI (gh):
 *   gh auth login
 *   node scripts/create-github-issues.js --use-gh
 * 
 * Usage with Personal Access Token (PAT):
 *   export GITHUB_TOKEN="your_github_pat_here"
 *   node scripts/create-github-issues.js
 */

import { execSync } from 'child_process';

const REPO = 'asishkashyap/asishkashyap';

const MILESTONES = [
  { title: 'M1 - Profile', description: 'Profile Studio, Banner, Badges, & Metrics Setup' },
  { title: 'M2 - Repositories', description: 'Repository Consolidation, Cleanup, & Archiving' },
  { title: 'M3 - Documentation', description: 'Enterprise Readmes, Architecture Diagrams, & Governance' },
  { title: 'M4 - Branding', description: 'Visual Assets, Vector Banners, & Consistency' },
  { title: 'M5 - Automation', description: 'CI/CD Security Workflows, Reusable Actions, & OIDC' },
  { title: 'M6 - Final Polish', description: 'Open Source Releases, Final Audit, & Portfolio Verification' },
];

const ISSUES = [
  // M1 - Profile
  {
    milestone: 'M1 - Profile',
    title: '[M1-PROFILE] Update GitHub profile bio, social links, and terminal intro block',
    body: `Update the main GitHub profile bio (\`asishkashyap/asishkashyap\`) to clearly present Senior DevSecOps & AI Engineer positioning, and replace outdated bio text with an interactive terminal ASCII code block.

### Acceptance Criteria:
- [ ] Bio updated to: *"Senior DevSecOps & AI Engineer (6+ yrs) | Building Zero-Trust CI/CD pipelines, Kubernetes IDPs & Autonomous AI SRE agents."*
- [ ] Location set to Greater Noida, India / Remote.
- [ ] Social links configured for LinkedIn, X (Twitter), and personal site.
- [ ] Profile README contains interactive terminal block (\`asish --version\`, \`asish --get-bio\`).`,
    labels: ['profile', 'documentation', 'branding']
  },
  {
    milestone: 'M1 - Profile',
    title: '[M1-PROFILE] Organize technology stack badges into categorized sections',
    body: `Group all Shields.io badges in \`README.md\` into three distinct sub-headings (Cloud Native & DevOps, AI Systems & Backend Languages, Security & Tooling) instead of an unorganized wall of badges.

### Acceptance Criteria:
- [ ] Badges grouped under \`### 🔸 Cloud Native & DevOps\`, \`### 🔸 AI Systems & Backend Languages\`, and \`### 🔸 Security, Databases & Tooling\`.
- [ ] All badges use \`style=for-the-badge\` and dark canvas colors matching \`#0d1117\`.
- [ ] All icon logo references use accurate tech names (Kubernetes, Docker, Terraform, Azure, Python, Go, TypeScript).`,
    labels: ['profile', 'ui/ux']
  },
  {
    milestone: 'M1 - Profile',
    title: '[M1-PROFILE] Add dark-themed GitHub Readme Stats and Streak cards',
    body: `Embed live GitHub stats, streak counter, and top languages widgets styled to match the dark slate visual identity (\`bg_color=0d1117\`, \`title_color=58a6ff\`).

### Acceptance Criteria:
- [ ] GitHub Readme Stats card rendered with \`username=asishkashyap\`.
- [ ] GitHub Readme Streak card rendered with \`#58a6ff\` theme.
- [ ] Top Languages card rendered side-by-side without overflowing mobile viewports.
- [ ] Images render cleanly without broken links or missing parameters.`,
    labels: ['profile', 'metrics']
  },
  {
    milestone: 'M1 - Profile',
    title: '[M1-PROFILE] Setup GitHub Actions snake animation generator workflow',
    body: `Create \`.github/workflows/snake.yml\` to automatically generate the eating-the-grid contribution snake SVG on a daily schedule and push it to the \`output\` branch.

### Acceptance Criteria:
- [ ] \`.github/workflows/snake.yml\` created with daily cron trigger (\`0 0 * * *\`) and \`workflow_dispatch\`.
- [ ] Generates \`github-contribution-grid-snake.svg\` and \`github-contribution-grid-snake-dark.svg\`.
- [ ] SVG files published cleanly to \`output\` branch.
- [ ] Profile \`README.md\` embeds \`<picture>\` tag rendering snake graphic based on user light/dark mode preference.`,
    labels: ['profile', 'github-actions', 'automation']
  },

  // M2 - Repositories
  {
    milestone: 'M2 - Repositories',
    title: '[M2-REPOS] Populate repository descriptions, tags, and topics for flagship projects',
    body: `Update metadata across the 6 primary public repositories (\`asishkashyap\`, \`InfraPipeline\`, \`GitHubActions_Learning\`, \`terraform_Modules_2026\`, \`Kubernetes_secure_approach\`, \`dockerVolumeDocApp\`).

### Acceptance Criteria:
- [ ] Every flagship repository has a clear 1-2 sentence description.
- [ ] Every flagship repository has 5-8 relevant GitHub topics (e.g., \`#devops\`, \`#terraform\`, \`#kubernetes\`, \`#security\`).
- [ ] Pin top 6 repositories to user profile page.`,
    labels: ['repository-management', 'metadata']
  },
  {
    milestone: 'M2 - Repositories',
    title: '[M2-REPOS] Consolidate fragmented Terraform repositories into terraform-azure-enterprise',
    body: `Combine \`Terraform-Modules\`, \`Terraform-RG\`, \`Terraform_test_pipeline\`, and \`terraform_Modules_2026\` into a clean modular monorepo: \`terraform-azure-enterprise\`.

### Acceptance Criteria:
- [ ] Create \`terraform-azure-enterprise\` monorepo with directories: \`modules/\`, \`environments/dev/\`, \`environments/prod/\`, \`.github/workflows/\`.
- [ ] Migrate reusable module code from legacy repositories.
- [ ] Archive legacy repositories (\`Terraform-Modules\`, \`Terraform-RG\`, \`Terraform_test_pipeline\`) with explicit redirection banner in their READMEs.`,
    labels: ['terraform', 'refactoring', 'iac']
  },
  {
    milestone: 'M2 - Repositories',
    title: '[M2-REPOS] Merge Helm charts repositories into helm-cloud-native',
    body: `Merge \`helm-charts\`, \`helm-charts-repo\`, and \`helm-masterclass\` into a single high-quality Helm charts repository \`helm-cloud-native\`.

### Acceptance Criteria:
- [ ] \`helm-cloud-native\` created with valid Chart.yaml files and Helm linting setup.
- [ ] Add GitHub Pages or ChartReleaser workflow for hosting Helm chart packages.
- [ ] Mark legacy repos as archived.`,
    labels: ['kubernetes', 'helm', 'refactoring']
  },
  {
    milestone: 'M2 - Repositories',
    title: '[M2-REPOS] Delete empty repositories and archive outdated study notes',
    body: `Delete unneeded empty repos (\`Todo_deployment\`), delete uncustomized zero-commit forks (\`hello-world-mlops\`), and archive personal utility scripts (\`SIP_Calculator\`, \`Docker_Learning\`, \`K8_sessions\`).

### Acceptance Criteria:
- [ ] Delete \`Todo_deployment\` and \`hello-world-mlops\`.
- [ ] Add archival notice to \`SIP_Calculator\`, \`Docker_Learning\`, and \`K8_sessions\` and switch visibility to Archived.
- [ ] Public repository grid reduced from 20 to 8 clean, high-impact repositories.`,
    labels: ['housekeeping', 'repository-management']
  },

  // M3 - Documentation
  {
    milestone: 'M3 - Documentation',
    title: '[M3-DOCS] Overhaul InfraPipeline README with Mermaid architecture diagram',
    body: `Enhance \`InfraPipeline\` README with visual Mermaid execution flow diagram, prerequisites, Azure OIDC setup instructions, and failure recovery steps.

### Acceptance Criteria:
- [ ] Includes badges for Azure DevOps, Terraform, and Checkov.
- [ ] Includes rendered Mermaid flowchart showing code commit -> GitHub Actions -> Checkov scan -> Azure OIDC -> Terraform Apply.
- [ ] Contains copy-pasteable CLI commands for local execution and validation.`,
    labels: ['documentation', 'terraform', 'architecture']
  },
  {
    milestone: 'M3 - Documentation',
    title: '[M3-DOCS] Sanitize secrets and add zero-trust architecture guide to Kubernetes_secure_approach',
    body: `Audit \`Kubernetes_secure_approach\` repository, replace any mock secret literals with SealedSecrets or SOPS references, and write a zero-trust pod security documentation guide.

### Acceptance Criteria:
- [ ] No hardcoded passwords, tokens, or plaintext secrets in any YAML or commit history.
- [ ] README explains Kubernetes Pod Security Standards (Privileged vs Baseline vs Restricted).
- [ ] Provides example integration with HashiCorp Vault / External Secrets Operator.`,
    labels: ['security', 'kubernetes', 'documentation']
  },
  {
    milestone: 'M3 - Documentation',
    title: '[M3-DOCS] Create standard LICENSE, CONTRIBUTING, and SECURITY.md across flagship repos',
    body: `Add MIT \`LICENSE\`, \`CONTRIBUTING.md\`, and \`SECURITY.md\` vulnerability reporting guidelines across all active repositories.

### Acceptance Criteria:
- [ ] Standard MIT \`LICENSE\` file present in root of all active repos.
- [ ] \`.github/CONTRIBUTING.md\` created with git commit and PR guidelines.
- [ ] \`.github/SECURITY.md\` created defining security disclosure policy.`,
    labels: ['governance', 'open-source']
  },

  // M4 - Branding
  {
    milestone: 'M4 - Branding',
    title: '[M4-BRANDING] Create custom dark slate vector hero banner SVG for profile',
    body: `Design and commit a high-resolution banner SVG in \`/assets/banner.svg\` featuring dark slate gradients, tech stack logos, and professional typography.

### Acceptance Criteria:
- [ ] Banner graphic created at width \`100%\` / 1200x300 viewBox.
- [ ] Features title *"Asish Kashyap | Senior DevSecOps & AI Engineer"*.
- [ ] Visual elements render crisp on high-DPI screens without pixelation.`,
    labels: ['design', 'assets', 'branding']
  },
  {
    milestone: 'M4 - Branding',
    title: '[M4-BRANDING] Enforce kebab-case repository naming and badge consistency',
    body: `Rename remaining active repositories to kebab-case convention (\`github-actions-devsecops-suite\`, \`kubernetes-secure-approach\`, \`docker-volume-doc-app\`) to ensure visual symmetry.

### Acceptance Criteria:
- [ ] All active repository names use lower-case kebab-case.
- [ ] All internal cross-links and badges updated to match new repository URLs.`,
    labels: ['branding', 'housekeeping']
  },

  // M5 - Automation
  {
    milestone: 'M5 - Automation',
    title: '[M5-AUTOMATION] Implement reusable GitHub Actions workflow for Terraform linting and Checkov scanning',
    body: `Create \`.github/workflows/reusable-terraform-ci.yml\` in the \`asishkashyap\` profile repo or shared workflow repo to perform automated \`terraform fmt -check\`, \`tflint\`, and \`checkov\` security scans.

### Acceptance Criteria:
- [ ] Reusable workflow callable via \`workflow_call\`.
- [ ] Runs \`tflint\` for syntax and best practices.
- [ ] Runs \`Checkov\` static analysis for IaC misconfigurations.
- [ ] Emits SARIF report to GitHub Security tab.`,
    labels: ['github-actions', 'devsecops', 'terraform']
  },
  {
    milestone: 'M5 - Automation',
    title: '[M5-AUTOMATION] Replace Azure client secrets with passwordless OIDC authentication in GitHub Actions',
    body: `Configure Azure OIDC federated credentials for GitHub Actions in \`InfraPipeline\`, eliminating the need to store long-lived \`AZURE_CLIENT_SECRET\` keys in repository secrets.

### Acceptance Criteria:
- [ ] Workflow uses \`permissions: id-token: write, contents: read\`.
- [ ] Authenticates with \`azure/login@v2\` using Azure Client ID, Tenant ID, and Subscription ID without client secrets.
- [ ] Terraform pipeline executes \`terraform plan\` securely.`,
    labels: ['security', 'azure', 'github-actions']
  },
  {
    milestone: 'M5 - Automation',
    title: '[M5-AUTOMATION] Add Trivy vulnerability scanning workflow for Docker images',
    body: `Add a GitHub Actions workflow in \`dockerVolumeDocApp\` to run Aqua Security's \`trivy-action\` on every push and pull request.

### Acceptance Criteria:
- [ ] Scans Dockerfile and built image for CVE vulnerabilities.
- [ ] Fails build on \`CRITICAL\` vulnerability severity.
- [ ] Displays vulnerability summary in GitHub Actions workflow job summary.`,
    labels: ['security', 'docker', 'github-actions']
  },

  // M6 - Final Polish
  {
    milestone: 'M6 - Final Polish',
    title: '[M6-POLISH] Tag v1.0.0 semantic releases and generate changelogs',
    body: `Create formal GitHub Releases with tagged versions (\`v1.0.0\`) and auto-generated changelogs for \`asishkashyap\`, \`InfraPipeline\`, \`terraform-azure-enterprise\`, and \`github-actions-devsecops-suite\`.

### Acceptance Criteria:
- [ ] Tag \`v1.0.0\` pushed with signed release notes on each featured repository.
- [ ] Release binaries / manifests attached where applicable.`,
    labels: ['release', 'open-source']
  },
  {
    milestone: 'M6 - Final Polish',
    title: '[M6-POLISH] Perform end-to-end audit against Senior DevSecOps recruiter scoring checklist',
    body: `Verify all profile rendering across desktop, mobile, dark mode, and light mode. Confirm all external badge links, repository stars, topics, and GitHub Actions pass without errors.

### Acceptance Criteria:
- [ ] Target Profile Readiness Score reaches \`96/100\` or higher.
- [ ] Zero broken links or missing images in profile or repository READMEs.
- [ ] All GitHub Actions status badges display \`passing\` green status.`,
    labels: ['audit', 'profile', 'career']
  }
];

console.log(`\n🚀 GitHub Issue Automator loaded ${MILESTONES.length} Milestones and ${ISSUES.length} Issues for repository '${REPO}'.\n`);

if (process.argv.includes('--use-gh')) {
  console.log('📌 Executing using GitHub CLI (gh)...\n');
  
  // 1. Create Milestones
  for (const m of MILESTONES) {
    try {
      console.log(`Creating Milestone: "${m.title}"...`);
      execSync(`gh api repos/${REPO}/milestones -f title="${m.title}" -f description="${m.description}"`, { stdio: 'inherit' });
    } catch (err) {
      console.log(`  Note: Milestone "${m.title}" might already exist.`);
    }
  }

  // 2. Create Issues
  for (const issue of ISSUES) {
    console.log(`Creating Issue: "${issue.title}"...`);
    const labelsArg = issue.labels.join(',');
    const cmd = `gh issue create --repo "${REPO}" --title ${JSON.stringify(issue.title)} --body ${JSON.stringify(issue.body)} --label "${labelsArg}"`;
    try {
      execSync(cmd, { stdio: 'inherit' });
    } catch (err) {
      console.error(`  Failed to create issue "${issue.title}":`, err.message);
    }
  }
  console.log('\n✅ All Milestones and Issues created successfully via GitHub CLI!');
} else {
  console.log(`
ℹ️ Instructions to execute this script on your local machine:

1. Install GitHub CLI if you haven't already:
   brew install gh    # macOS
   sudo apt install gh # Ubuntu/Debian
   winget install GitHub.cli # Windows

2. Authenticate with GitHub CLI:
   gh auth login

3. Clone your repository locally or navigate to this folder and run:
   node scripts/create-github-issues.js --use-gh

Alternatively, if you have a Personal Access Token (PAT) with 'repo' scope:
   export GITHUB_TOKEN="your_personal_access_token"
   node scripts/create-github-issues.js
`);
}
