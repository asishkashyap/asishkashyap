# 📂 Repository Showcase: `helm-cloud-native` (Enterprise Helm Chart Registry & K8s Apps)

[![Helm](https://img.shields.io/badge/Helm-v3.15-0f1689?style=for-the-badge&logo=helm&logoColor=white)](https://helm.sh/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Cloud%20Native-326ce5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![ChartReleaser](https://img.shields.io/badge/GitHub%20Pages-Chart%20Registry-2088ff?style=for-the-badge&logo=github&logoColor=white)](#chart-releaser-workflow)
[![License: MIT](https://img.shields.io/badge/License-MIT-3fb950?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

---

## 📖 Description & Purpose
A curated monorepo registry of production-grade Helm charts for microservices, monitoring stacks, and AI agents. Features automated ChartReleaser workflows publishing packaged chart tarballs to GitHub Pages, Helm linting, and Artifact Hub compatibility.

---

## 🏷️ Recommended Metadata & Topics
* **Description:** Production-grade Helm charts for cloud-native microservices, monitoring tools, and AI agents with automated ChartReleaser workflows.
* **Topics:** `helm`, `kubernetes`, `cloud-native`, `devops`, `helm-charts`, `chart-releaser`, `gitops`

---

## 📁 Repository Directory Structure

```
.
├── charts/
│   ├── microservice-app/        # Production baseline chart with HPA and ingress
│   │   ├── Chart.yaml
│   │   ├── values.yaml
│   │   └── templates/
│   ├── ai-agent-runner/         # Containerized LLM worker execution chart
│   └── monitoring-stack/        # Prometheus & Grafana exporter bundle
├── .github/
│   └── workflows/
│       ├── helm-lint.yml        # Helm lint & ct (chart-testing) workflow
│       └── release.yml          # Helm ChartReleaser workflow to GitHub Pages
├── LICENSE
└── README.md
```

---

## 🎯 Recruiter & Hiring Manager Value
* **Demonstrates:** Helm chart packaging expertise, GitOps chart releasing pipelines, microservice deployment templates, and cloud-native application management.
