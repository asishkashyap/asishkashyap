# 📋 GitHub Transformation Issues Backlog & Issue Creation Guide

This document contains all granular GitHub Issues mapped directly to Milestones **M1 through M6**. Each issue contains clear acceptance criteria, priority, effort estimates, dependencies, and labels.

---

## 🚩 Milestone Overview

- **M1 - Profile:** Profile Studio, Banner, Badges, & Metrics Setup
- **M2 - Repositories:** Repository Consolidation, Cleanup, & Archiving
- **M3 - Documentation:** Enterprise Readmes, Architecture Diagrams, & Governance
- **M4 - Branding:** Visual Assets, Vector Banners, & Consistency
- **M5 - Automation:** CI/CD Security Workflows, Reusable Actions, & OIDC
- **M6 - Final Polish:** Open Source Releases, Final Audit, & Portfolio Verification

---

## 📌 Milestone M1: Profile (Profile Studio & Metrics)

### Issue #1: Update Profile Bio and Terminal Architecture Block
- **Title:** `[M1-PROFILE] Update GitHub profile bio, social links, and terminal intro block`
- **Milestone:** `M1 - Profile`
- **Priority:** `P0 - Critical`
- **Labels:** `profile`, `documentation`, `branding`
- **Estimated Effort:** `15 minutes`
- **Dependencies:** None
- **Description:**  
  Update the main GitHub profile bio (`asishkashyap/asishkashyap`) to clearly present Senior DevSecOps & AI Engineer positioning, and replace outdated bio text with an interactive terminal ASCII code block.
- **Acceptance Criteria:**
  - [ ] Bio updated to: *"Senior DevSecOps & AI Engineer (6+ yrs) | Building Zero-Trust CI/CD pipelines, Kubernetes IDPs & Autonomous AI SRE agents."*
  - [ ] Location set to Greater Noida, India / Remote.
  - [ ] Social links configured for LinkedIn, X (Twitter), and personal site.
  - [ ] Profile README contains interactive terminal block (`asish --version`, `asish --get-bio`).

---

### Issue #2: Configure Categorized Technology Badges
- **Title:** `[M1-PROFILE] Organize technology stack badges into categorized sections`
- **Milestone:** `M1 - Profile`
- **Priority:** `P0 - Critical`
- **Labels:** `profile`, `ui/ux`
- **Estimated Effort:** `20 minutes`
- **Dependencies:** Issue #1
- **Description:**  
  Group all Shields.io badges in `README.md` into three distinct sub-headings (Cloud Native & DevOps, AI Systems & Backend Languages, Security & Tooling) instead of an unorganized wall of badges.
- **Acceptance Criteria:**
  - [ ] Badges grouped under `### 🔸 Cloud Native & DevOps`, `### 🔸 AI Systems & Backend Languages`, and `### 🔸 Security, Databases & Tooling`.
  - [ ] All badges use `style=for-the-badge` and dark canvas colors matching `#0d1117`.
  - [ ] All icon logo references use accurate tech names (Kubernetes, Docker, Terraform, Azure, Python, Go, TypeScript).

---

### Issue #3: Integrate Dynamic GitHub Stats and Streak Cards
- **Title:** `[M1-PROFILE] Add dark-themed GitHub Readme Stats and Streak cards`
- **Milestone:** `M1 - Profile`
- **Priority:** `P1 - High`
- **Labels:** `profile`, `metrics`
- **Estimated Effort:** `15 minutes`
- **Dependencies:** Issue #1
- **Description:**  
  Embed live GitHub stats, streak counter, and top languages widgets styled to match the dark slate visual identity (`bg_color=0d1117`, `title_color=58a6ff`).
- **Acceptance Criteria:**
  - [ ] GitHub Readme Stats card rendered with `username=asishkashyap`.
  - [ ] GitHub Readme Streak card rendered with `#58a6ff` theme.
  - [ ] Top Languages card rendered side-by-side without overflowing mobile viewports.
  - [ ] Images render cleanly without broken links or missing parameters.

---

### Issue #4: Implement Automated Contribution Grid Snake Workflow
- **Title:** `[M1-PROFILE] Setup GitHub Actions snake animation generator workflow`
- **Milestone:** `M1 - Profile`
- **Priority:** `P1 - High`
- **Labels:** `profile`, `github-actions`, `automation`
- **Estimated Effort:** `30 minutes`
- **Dependencies:** Issue #1
- **Description:**  
  Create `.github/workflows/snake.yml` to automatically generate the eating-the-grid contribution snake SVG on a daily schedule and push it to the `output` branch.
- **Acceptance Criteria:**
  - [ ] `.github/workflows/snake.yml` created with daily cron trigger (`0 0 * * *`) and `workflow_dispatch`.
  - [ ] Generates `github-contribution-grid-snake.svg` and `github-contribution-grid-snake-dark.svg`.
  - [ ] SVG files published cleanly to `output` branch.
  - [ ] Profile `README.md` embeds `<picture>` tag rendering snake graphic based on user light/dark mode preference.

---

## 📌 Milestone M2: Repositories (Consolidation & Metadata)

### Issue #5: Add Descriptions, Topics, and Web Links to Top 6 Repositories
- **Title:** `[M2-REPOS] Populate repository descriptions, tags, and topics for flagship projects`
- **Milestone:** `M2 - Repositories`
- **Priority:** `P0 - Critical`
- **Labels:** `repository-management`, `metadata`
- **Estimated Effort:** `25 minutes`
- **Dependencies:** None
- **Description:**  
  Update metadata across the 6 primary public repositories (`asishkashyap`, `InfraPipeline`, `GitHubActions_Learning`, `terraform_Modules_2026`, `Kubernetes_secure_approach`, `dockerVolumeDocApp`).
- **Acceptance Criteria:**
  - [ ] Every flagship repository has a clear 1-2 sentence description.
  - [ ] Every flagship repository has 5-8 relevant GitHub topics (e.g., `#devops`, `#terraform`, `#kubernetes`, `#security`).
  - [ ] Pin top 6 repositories to user profile page.

---

### Issue #6: Consolidate Terraform Repositories into Monorepo
- **Title:** `[M2-REPOS] Consolidate fragmented Terraform repositories into terraform-azure-enterprise`
- **Milestone:** `M2 - Repositories`
- **Priority:** `P0 - Critical`
- **Labels:** `terraform`, `refactoring`, `iac`
- **Estimated Effort:** `2 hours`
- **Dependencies:** None
- **Description:**  
  Combine `Terraform-Modules`, `Terraform-RG`, `Terraform_test_pipeline`, and `terraform_Modules_2026` into a clean modular monorepo: `terraform-azure-enterprise`.
- **Acceptance Criteria:**
  - [ ] Create `terraform-azure-enterprise` monorepo with directories: `modules/`, `environments/dev/`, `environments/prod/`, `.github/workflows/`.
  - [ ] Migrate reusable module code from legacy repositories.
  - [ ] Archive legacy repositories (`Terraform-Modules`, `Terraform-RG`, `Terraform_test_pipeline`) with explicit redirection banner in their READMEs.

---

### Issue #7: Consolidate Helm Repositories into Unified Registry
- **Title:** `[M2-REPOS] Merge Helm charts repositories into helm-cloud-native`
- **Milestone:** `M2 - Repositories`
- **Priority:** `P1 - High`
- **Labels:** `kubernetes`, `helm`, `refactoring`
- **Estimated Effort:** `1.5 hours`
- **Dependencies:** None
- **Description:**  
  Merge `helm-charts`, `helm-charts-repo`, and `helm-masterclass` into a single high-quality Helm charts repository `helm-cloud-native`.
- **Acceptance Criteria:**
  - [ ] `helm-cloud-native` created with valid Chart.yaml files and Helm linting setup.
  - [ ] Add GitHub Pages or ChartReleaser workflow for hosting Helm chart packages.
  - [ ] Mark legacy repos as archived.

---

### Issue #8: Clean Up Non-essential & Empty Repositories
- **Title:** `[M2-REPOS] Delete empty repositories and archive outdated study notes`
- **Milestone:** `M2 - Repositories`
- **Priority:** `P1 - High`
- **Labels:** `housekeeping`, `repository-management`
- **Estimated Effort:** `30 minutes`
- **Dependencies:** None
- **Description:**  
  Delete unneeded empty repos (`Todo_deployment`), delete uncustomized zero-commit forks (`hello-world-mlops`), and archive personal utility scripts (`SIP_Calculator`, `Docker_Learning`, `K8_sessions`).
- **Acceptance Criteria:**
  - [ ] Delete `Todo_deployment` and `hello-world-mlops`.
  - [ ] Add archival notice to `SIP_Calculator`, `Docker_Learning`, and `K8_sessions` and switch visibility to Archived.
  - [ ] Public repository grid reduced from 20 to 8 clean, high-impact repositories.

---

## 📌 Milestone M3: Documentation (Readmes & Architecture)

### Issue #9: Add Enterprise README and Architecture Diagram to InfraPipeline
- **Title:** `[M3-DOCS] Overhaul InfraPipeline README with Mermaid architecture diagram`
- **Milestone:** `M3 - Documentation`
- **Priority:** `P0 - Critical`
- **Labels:** `documentation`, `terraform`, `architecture`
- **Estimated Effort:** `1 hour`
- **Dependencies:** Issue #5
- **Description:**  
  Enhance `InfraPipeline` README with visual Mermaid execution flow diagram, prerequisites, Azure OIDC setup instructions, and failure recovery steps.
- **Acceptance Criteria:**
  - [ ] Includes badges for Azure DevOps, Terraform, and Checkov.
  - [ ] Includes rendered Mermaid flowchart showing code commit -> GitHub Actions -> Checkov scan -> Azure OIDC -> Terraform Apply.
  - [ ] Contains copy-pasteable CLI commands for local execution and validation.

---

### Issue #10: Harden Kubernetes Security Repository and Sanitize Secrets
- **Title:** `[M3-DOCS] Sanitize secrets and add zero-trust architecture guide to Kubernetes_secure_approach`
- **Milestone:** `M3 - Documentation`
- **Priority:** `P0 - Critical`
- **Labels:** `security`, `kubernetes`, `documentation`
- **Estimated Effort:** `1 hour`
- **Dependencies:** Issue #5
- **Description:**  
  Audit `Kubernetes_secure_approach` repository, replace any mock secret literals with SealedSecrets or SOPS references, and write a zero-trust pod security documentation guide.
- **Acceptance Criteria:**
  - [ ] No hardcoded passwords, tokens, or plaintext secrets in any YAML or commit history.
  - [ ] README explains Kubernetes Pod Security Standards (Privileged vs Baseline vs Restricted).
  - [ ] Provides example integration with HashiCorp Vault / External Secrets Operator.

---

### Issue #11: Add Standard Open Source Governance Files
- **Title:** `[M3-DOCS] Create standard LICENSE, CONTRIBUTING, and SECURITY.md across flagship repos`
- **Milestone:** `M3 - Documentation`
- **Priority:** `P1 - High`
- **Labels:** `governance`, `open-source`
- **Estimated Effort:** `45 minutes`
- **Dependencies:** Issue #5
- **Description:**  
  Add MIT `LICENSE`, `CONTRIBUTING.md`, and `SECURITY.md` vulnerability reporting guidelines across all active repositories.
- **Acceptance Criteria:**
  - [ ] Standard MIT `LICENSE` file present in root of all active repos.
  - [ ] `.github/CONTRIBUTING.md` created with git commit and PR guidelines.
  - [ ] `.github/SECURITY.md` created defining security disclosure policy.

---

## 📌 Milestone M4: Branding (Visual Assets & Banner)

### Issue #12: Generate High-Resolution Header Banner Graphic
- **Title:** `[M4-BRANDING] Create custom dark slate vector hero banner SVG for profile`
- **Milestone:** `M4 - Branding`
- **Priority:** `P0 - Critical`
- **Labels:** `design`, `assets`, `branding`
- **Estimated Effort:** `30 minutes`
- **Dependencies:** None
- **Description:**  
  Design and commit a high-resolution banner SVG in `/assets/banner.svg` featuring dark slate gradients, tech stack logos, and professional typography.
- **Acceptance Criteria:**
  - [ ] Banner graphic created at width `100%` / 1200x300 viewBox.
  - [ ] Features title *"Asish Kashyap | Senior DevSecOps & AI Engineer"*.
  - [ ] Visual elements render crisp on high-DPI screens without pixelation.

---

### Issue #13: Standardize Repository Naming and Visual Badges
- **Title:** `[M4-BRANDING] Enforce kebab-case repository naming and badge consistency`
- **Milestone:** `M4 - Branding`
- **Priority:** `P1 - High`
- **Labels:** `branding`, `housekeeping`
- **Estimated Effort:** `30 minutes`
- **Dependencies:** Milestone M2
- **Description:**  
  Rename remaining active repositories to kebab-case convention (`github-actions-devsecops-suite`, `kubernetes-secure-approach`, `docker-volume-doc-app`) to ensure visual symmetry.
- **Acceptance Criteria:**
  - [ ] All active repository names use lower-case kebab-case.
  - [ ] All internal cross-links and badges updated to match new repository URLs.

---

## 📌 Milestone M5: Automation (CI/CD & Security Workflows)

### Issue #14: Build Reusable Terraform DevSecOps Workflow
- **Title:** `[M5-AUTOMATION] Implement reusable GitHub Actions workflow for Terraform linting and Checkov scanning`
- **Milestone:** `M5 - Automation`
- **Priority:** `P0 - Critical`
- **Labels:** `github-actions`, `devsecops`, `terraform`
- **Estimated Effort:** `1 hour`
- **Dependencies:** Issue #6
- **Description:**  
  Create `.github/workflows/reusable-terraform-ci.yml` in the `asishkashyap` profile repo or shared workflow repo to perform automated `terraform fmt -check`, `tflint`, and `checkov` security scans.
- **Acceptance Criteria:**
  - [ ] Reusable workflow callable via `workflow_call`.
  - [ ] Runs `tflint` for syntax and best practices.
  - [ ] Runs `Checkov` static analysis for IaC misconfigurations.
  - [ ] Emits SARIF report to GitHub Security tab.

---

### Issue #15: Configure Azure Workload Identity OIDC in InfraPipeline
- **Title:** `[M5-AUTOMATION] Replace Azure client secrets with passwordless OIDC authentication in GitHub Actions`
- **Milestone:** `M5 - Automation`
- **Priority:** `P0 - Critical`
- **Labels:** `security`, `azure`, `github-actions`
- **Estimated Effort:** `1.5 hours`
- **Dependencies:** Issue #9
- **Description:**  
  Configure Azure OIDC federated credentials for GitHub Actions in `InfraPipeline`, eliminating the need to store long-lived `AZURE_CLIENT_SECRET` keys in repository secrets.
- **Acceptance Criteria:**
  - [ ] Workflow uses `permissions: id-token: write, contents: read`.
  - [ ] Authenticates with `azure/login@v2` using Azure Client ID, Tenant ID, and Subscription ID without client secrets.
  - [ ] Terraform pipeline executes `terraform plan` securely.

---

### Issue #16: Add Automated Container Security Scan with Trivy
- **Title:** `[M5-AUTOMATION] Add Trivy vulnerability scanning workflow for Docker images`
- **Milestone:** `M5 - Automation`
- **Priority:** `P1 - High`
- **Labels:** `security`, `docker`, `github-actions`
- **Estimated Effort:** `45 minutes`
- **Dependencies:** Milestone M2
- **Description:**  
  Add a GitHub Actions workflow in `dockerVolumeDocApp` to run Aqua Security's `trivy-action` on every push and pull request.
- **Acceptance Criteria:**
  - [ ] Scans Dockerfile and built image for CVE vulnerabilities.
  - [ ] Fails build on `CRITICAL` vulnerability severity.
  - [ ] Displays vulnerability summary in GitHub Actions workflow job summary.

---

## 📌 Milestone M6: Final Polish (Releases & Audit)

### Issue #17: Tag Semantic Releases and Changelogs Across Flagship Repos
- **Title:** `[M6-POLISH] Tag v1.0.0 semantic releases and generate changelogs`
- **Milestone:** `M6 - Final Polish`
- **Priority:** `P1 - High`
- **Labels:** `release`, `open-source`
- **Estimated Effort:** `45 minutes`
- **Dependencies:** Milestones M1 - M5
- **Description:**  
  Create formal GitHub Releases with tagged versions (`v1.0.0`) and auto-generated changelogs for `asishkashyap`, `InfraPipeline`, `terraform-azure-enterprise`, and `github-actions-devsecops-suite`.
- **Acceptance Criteria:**
  - [ ] Tag `v1.0.0` pushed with signed release notes on each featured repository.
  - [ ] Release binaries / manifests attached where applicable.

---

### Issue #18: Conduct Final Profile Verification and Recruiter Audit
- **Title:** `[M6-POLISH] Perform end-to-end audit against Senior DevSecOps recruiter scoring checklist`
- **Milestone:** `M6 - Final Polish`
- **Priority:** `P0 - Critical`
- **Labels:** `audit`, `profile`, `career`
- **Estimated Effort:** `30 minutes`
- **Dependencies:** Issue #17
- **Description:**  
  Verify all profile rendering across desktop, mobile, dark mode, and light mode. Confirm all external badge links, repository stars, topics, and GitHub Actions pass without errors.
- **Acceptance Criteria:**
  - [ ] Target Profile Readiness Score reaches `96/100` or higher.
  - [ ] Zero broken links or missing images in profile or repository READMEs.
  - [ ] All GitHub Actions status badges display `passing` green status.

---

## 🛠️ Automated Issue Creation Script (GitHub CLI)

To automatically create all 18 issues directly in your GitHub repository using the `gh` CLI, run the following bash command in your terminal:

```bash
# Ensure gh CLI is authenticated: gh auth login

# Set target repository
REPO="asishkashyap/asishkashyap"

# Create Milestones
gh api repos/$REPO/milestones -f title="M1 - Profile" -f description="Profile Studio, Banner, Badges, & Metrics Setup"
gh api repos/$REPO/milestones -f title="M2 - Repositories" -f description="Repository Consolidation, Cleanup, & Archiving"
gh api repos/$REPO/milestones -f title="M3 - Documentation" -f description="Enterprise Readmes, Architecture Diagrams, & Governance"
gh api repos/$REPO/milestones -f title="M4 - Branding" -f description="Visual Assets, Vector Banners, & Consistency"
gh api repos/$REPO/milestones -f title="M5 - Automation" -f description="CI/CD Security Workflows, Reusable Actions, & OIDC"
gh api repos/$REPO/milestones -f title="M6 - Final Polish" -f description="Open Source Releases, Final Audit, & Portfolio Verification"

# Create Issue #1
gh issue create --repo $REPO \
  --title "[M1-PROFILE] Update GitHub profile bio, social links, and terminal intro block" \
  --body "Update the main GitHub profile bio to clearly present Senior DevSecOps & AI Engineer positioning, and replace outdated bio text with an interactive terminal ASCII code block.
  
  Acceptance Criteria:
  - [ ] Bio updated to Senior DevSecOps & AI Engineer.
  - [ ] Terminal block added with asish --version commands." \
  --label "profile,documentation,branding"

# Create Issue #2
gh issue create --repo $REPO \
  --title "[M1-PROFILE] Organize technology stack badges into categorized sections" \
  --body "Group all Shields.io badges in README.md into Cloud Native, AI Systems, and Security sections.
  
  Acceptance Criteria:
  - [ ] Categorized subheadings with for-the-badge style." \
  --label "profile,ui/ux"

# Create Issue #3
gh issue create --repo $REPO \
  --title "[M1-PROFILE] Add dark-themed GitHub Readme Stats and Streak cards" \
  --body "Embed live GitHub stats, streak counter, and top languages widgets styled in dark mode.
  
  Acceptance Criteria:
  - [ ] Cards render cleanly with username asishkashyap." \
  --label "profile,metrics"

# Create Issue #4
gh issue create --repo $REPO \
  --title "[M1-PROFILE] Setup GitHub Actions snake animation generator workflow" \
  --body "Create .github/workflows/snake.yml to generate eating-the-grid contribution snake SVG.
  
  Acceptance Criteria:
  - [ ] Snake workflow runs daily and commits to output branch." \
  --label "profile,github-actions,automation"
```

---
