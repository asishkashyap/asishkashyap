# 📂 Repository Showcase: `powershell-devops-automation` (Modular PowerShell CI/CD Tools & Pester Tests)

[![PowerShell](https://img.shields.io/badge/PowerShell-7.4-5391fe?style=for-the-badge&logo=powershell&logoColor=white)](https://learn.microsoft.com/en-us/powershell/)
[![Pester](https://img.shields.io/badge/Pester-Unit%20Tests-3fb950?style=for-the-badge&logo=powershell&logoColor=white)](#unit-testing-with-pester)
[![Azure Modules](https://img.shields.io/badge/Azure%20DevOps-Automation-0078d4?style=for-the-badge&logo=azuredevops&logoColor=white)](https://azure.microsoft.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-3fb950?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

---

## 📖 Description & Purpose
A modular PowerShell automation framework for Azure DevOps administration, Windows/Linux system hygiene, secret rotation, and infrastructure telemetry auditing, backed by Pester unit tests and PSScriptAnalyzer code quality rules.

---

## 🏷️ Recommended Metadata & Topics
* **Description:** Modular PowerShell automation framework for Azure DevOps administration, system management, and secret auditing backed by Pester unit tests.
* **Topics:** `powershell`, `devops`, `azure-devops`, `pester`, `automation`, `psscriptanalyzer`, `ci-cd`

---

## 📁 Repository Directory Structure

```
.
├── src/
│   ├── AzureDevOps/             # ADO pipeline and permissions management scripts
│   ├── Security/                # Secret rotation and certificate audit scripts
│   └── System/                  # Cross-platform disk hygiene and log rotation
├── tests/
│   ├── AzureDevOps.Tests.ps1    # Pester unit test suites
│   └── Security.Tests.ps1
├── .github/
│   └── workflows/
│       └── pester-ci.yml        # Automated Pester test executor
├── LICENSE
└── README.md
```

---

## 🎯 Recruiter & Hiring Manager Value
* **Demonstrates:** Enterprise script modularization, cross-platform PowerShell 7 automation, automated Pester unit testing, and robust operational error handling.
