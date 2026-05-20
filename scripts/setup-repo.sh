#!/usr/bin/env bash
# setup-repo.sh — One-time repo configuration via GitHub CLI
# Run after initial push: bash scripts/setup-repo.sh
#
# Prerequisites:
#   - gh CLI authenticated: gh auth login
#   - Repo already pushed to GitHub
#   - Add secrets manually via: gh secret set <NAME> --env <ENV>

set -euo pipefail

REPO="Project37/travislolsite"
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

log()  { echo -e "${BLUE}▶ $*${NC}"; }
ok()   { echo -e "${GREEN}✓ $*${NC}"; }
warn() { echo -e "${YELLOW}⚠ $*${NC}"; }

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  travislolsite — DevSecOps repo setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── 1. Branch protection on main ─────────────────────────────────────────────
log "Setting branch protection on main..."
gh api --method PUT "/repos/${REPO}/branches/main/protection" \
  --field 'required_status_checks[strict]=true' \
  --field 'required_status_checks[contexts][]=Build' \
  --field 'required_status_checks[contexts][]=Security' \
  --field 'required_pull_request_reviews[dismiss_stale_reviews]=true' \
  --field 'required_pull_request_reviews[require_last_push_approval]=true' \
  --field 'enforce_admins=false' \
  --field 'restrictions=null' \
  --field 'allow_force_pushes=false' \
  --field 'allow_deletions=false' \
  --silent
ok "Branch protection set (requires Build + Security checks, no force push)"

# ── 2. GitHub Environments ────────────────────────────────────────────────────
log "Creating 'preview' environment..."
gh api --method PUT "/repos/${REPO}/environments/preview" \
  --field wait_timer=0 \
  --silent
ok "preview environment created"

log "Creating 'production' environment (protected branches only)..."
gh api --method PUT "/repos/${REPO}/environments/production" \
  --field wait_timer=0 \
  --field can_admins_bypass=false \
  --field 'deployment_branch_policy[protected_branches]=true' \
  --field 'deployment_branch_policy[custom_branch_policies]=false' \
  --silent
ok "production environment created (deploys from protected branches only)"

# ── 3. Enable security features ───────────────────────────────────────────────
log "Enabling vulnerability alerts (Dependabot)..."
gh api --method PUT "/repos/${REPO}/vulnerability-alerts" --silent 2>/dev/null && \
  ok "Dependabot vulnerability alerts enabled" || \
  warn "Could not enable vulnerability alerts (may already be on)"

log "Enabling automated security fixes..."
gh api --method PUT "/repos/${REPO}/automated-security-fixes" --silent 2>/dev/null && \
  ok "Automated security fixes enabled" || \
  warn "Could not enable automated security fixes"

# ── 4. Secrets instructions ───────────────────────────────────────────────────
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  📋 Manual steps remaining"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
warn "Add the following secrets to each environment in GitHub:"
echo ""
echo "  For BOTH 'preview' and 'production' environments:"
echo "    CF_API_TOKEN    — Cloudflare API token (Workers:Edit scope)"
echo "    CF_ACCOUNT_ID   — Your Cloudflare account ID"
echo ""
echo "  Commands:"
echo "    gh secret set CF_API_TOKEN  --env preview"
echo "    gh secret set CF_ACCOUNT_ID --env preview"
echo "    gh secret set CF_API_TOKEN  --env production"
echo "    gh secret set CF_ACCOUNT_ID --env production"
echo ""
warn "Create a scoped Cloudflare API token at:"
echo "    https://dash.cloudflare.com/profile/api-tokens"
echo ""
echo "  Recommended token permissions:"
echo "    Account — Workers Scripts: Edit"
echo "    Account — Workers KV Storage: Edit  (if using KV)"
echo "    Zone — Workers Routes: Edit         (for custom domain)"
echo ""
echo "  Use a SEPARATE token for preview (narrower scope) vs production"
echo ""
ok "Repo setup complete!"
