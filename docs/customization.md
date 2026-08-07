# Customization & Setup Guide

## Step 1: Fork or Clone Profile Repo
Ensure your repository matches your GitHub username (e.g. `kashyapashish29/kashyapashish29` or `asishkashyap/asishkashyap`).

## Step 2: Configure Repository Secrets
To enable automated metrics and the contribution snake:
1. Navigate to **Settings -> Secrets and variables -> Actions**.
2. Add `METRICS_TOKEN` with a Personal Access Token (PAT) having `repo`, `read:user`, `read:org` scopes.

## Step 3: Trigger Workflows
Go to the **Actions** tab in GitHub and manually trigger the `Generate Snake Contribution Grid` and `GitHub Metrics Synchronization` workflows.
