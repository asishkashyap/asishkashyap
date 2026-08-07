# 📂 Repository Showcase: `InfraPipeline` (DevSecOps Infrastructure Delivery Pipeline)

[![Azure DevOps](https://img.shields.io/badge/Azure%20DevOps-Pipelines-0078d4?style=for-the-badge&logo=azuredevops&logoColor=white)](https://azure.microsoft.com/en-us/products/devops)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-OIDC-2088ff?style=for-the-badge&logo=githubactions&logoColor=white)](.github/workflows/pipeline.yml)
[![Checkov](https://img.shields.io/badge/Checkov-Zero--Trust-3fb950?style=for-the-badge&logo=shield&logoColor=white)](#pipeline-security)
[![License: MIT](https://img.shields.io/badge/License-MIT-3fb950?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

---

## 📖 Description & Purpose
An end-to-end DevSecOps infrastructure delivery pipeline orchestrating multi-cloud resource deployment via Terraform, secretless Azure OIDC federated authentication, shift-left Checkov IaC security policy enforcement, and automated rollback capabilities.

---

## 🏷️ Recommended Metadata & Topics
* **Description:** End-to-end DevSecOps infrastructure delivery pipeline featuring Azure OIDC authentication, Terraform automation, and Checkov security gate enforce.
* **Topics:** `devsecops`, `infrapipeline`, `terraform`, `azure`, `oidc`, `checkov`, `security-pipeline`, `ci-cd`

---

## 📐 Architecture & Pipeline Flow

```mermaid
flowchart LR
    Commit[Git Push to Main] --> OIDC[Azure OIDC Auth - Passwordless]
    OIDC --> Checkov[Checkov Static IaC Security Scan]
    Checkov --> Policy{Passes Policy?}
    Policy -- No --> Block[Block Build & Notify Security]
    Policy -- Yes --> TFPlan[Terraform Plan Generation]
    TFPlan --> Approval[Manual Production Gate]
    Approval --> TFApply[Terraform Apply to Azure]
    TFApply --> Audit[Post-Deployment Telemetry Audit]
```

---

## 📁 Repository Directory Structure

```
.
├── .github/
│   └── workflows/
│       └── pipeline.yml         # GitHub Actions pipeline with Azure OIDC & Checkov
├── azure-pipelines.yml          # Mirror Azure DevOps YAML pipeline
├── terraform/
│   ├── main.tf                  # Infrastructure state and provider configuration
│   ├── modules/                 # Reusable compute and database modules
│   └── policies/                # Custom Checkov YAML policies
├── scripts/
│   ├── validate-oidc.sh         # OIDC token verification tool
│   └── post-deploy-check.sh     # Health check and telemetry verify script
├── LICENSE
└── README.md
```

---

## ⚡ Local Verification Commands

```bash
# Clone repository
git clone https://github.com/asishkashyap/InfraPipeline.git
cd InfraPipeline

# Validate Terraform syntax
terraform -chdir=terraform fmt -check

# Execute Checkov security scan against custom policies
checkov -d terraform/ --framework terraform
```

---

## 🎯 Recruiter & Hiring Manager Value
* **Demonstrates:** Shift-left security pipeline enforcement, passwordless OIDC cloud integration, automated policy gates, and enterprise deployment safety controls.
