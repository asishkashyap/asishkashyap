# 📂 Repository Showcase: `github-actions-devsecops-suite` (Enterprise CI/CD Automation)

[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-2088ff?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-3fb950?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Reusable Workflows](https://img.shields.io/badge/Workflows-Reusable%20Modules-a371f7?style=for-the-badge&logo=github&logoColor=white)](#reusable-workflow-architecture)
[![Security Scan](https://img.shields.io/badge/DevSecOps-OIDC%20%2B%20SARIF-58a6ff?style=for-the-badge&logo=shield&logoColor=white)](#security--governance)

---

## 📖 Description & Purpose
An enterprise-grade repository containing reusable GitHub Actions workflows, composite actions, matrix build strategies, security scanners (SAST, Dependency Review, Container Scanning, Secret Detection), and OIDC cloud provider authentication patterns.

---

## 🏷️ Recommended Metadata & Topics
* **Description:** Enterprise GitHub Actions CI/CD framework featuring reusable workflows, matrix strategy pipelines, DevSecOps security scanners, and OIDC auth.
* **Topics:** `github-actions`, `cicd`, `devsecops`, `automation`, `reusable-workflows`, `oidc`, `security`, `matrix-builds`

---

## 📐 Architecture & Execution Flow

```mermaid
flowchart TD
    Push[Code Push / Pull Request] --> Caller[Caller Workflow]
    Caller --> Lint[1. Lint & Static Analysis]
    Caller --> Scan[2. DevSecOps Scan - Semgrep / Gitleaks]
    Caller --> Matrix[3. Matrix Test Pipeline - Node/Python/Go]
    
    Scan --> SARIF[Emit SARIF to GitHub Security Tab]
    Matrix --> OIDC[4. OIDC Passwordless Authentication]
    OIDC --> Deploy[5. Deployment to AWS / Azure Environments]
```

---

## 📁 Repository Directory Structure

```
.
├── .github/
│   ├── actions/
│   │   ├── setup-toolchain/         # Composite action for caching and environment setup
│   │   └── security-audit/          # Composite action for SAST and secret scanning
│   └── workflows/
│       ├── reusable-build.yml       # Centralized build engine callable via workflow_call
│       ├── reusable-security.yml    # Centralized DevSecOps scanning
│       ├── reusable-terraform.yml   # IaC validation and Checkov security scan
│       └── main-ci.yml              # Entrypoint workflow invoking reusable actions
├── templates/
│   ├── nodejs-ci-template.yml
│   └── python-ci-template.yml
├── docs/
│   └── REUSABLE_WORKFLOWS_GUIDE.md
├── LICENSE
└── README.md
```

---

## 🛠️ Reusable Workflow Usage Example

```yaml
# In any target repository: .github/workflows/deploy.yml
name: App Pipeline

on:
  push:
    branches: [ main ]

jobs:
  security-audit:
    uses: asishkashyap/github-actions-devsecops-suite/.github/workflows/reusable-security.yml@v1
    with:
      enable-gitleaks: true
      enable-semgrep: true

  build-and-test:
    needs: security-audit
    uses: asishkashyap/github-actions-devsecops-suite/.github/workflows/reusable-build.yml@v1
    with:
      node-version: '20'
      run-tests: true
```

---

## 🎯 Recruiter & Hiring Manager Value
* **Demonstrates:** Enterprise CI/CD pipeline architecture, modular workflow composition, passwordless OIDC security, and matrix build optimization.
