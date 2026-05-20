# Security Policy

## Supported Versions

This is a personal site — only the latest deployed version is maintained.

| Version | Supported |
|---------|-----------|
| latest (main) | ✅ |
| older commits | ❌ |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please **do not open a public issue**.

### Preferred method

Use [GitHub Private Security Advisories](https://github.com/Project37/travislolsite/security/advisories/new) to report privately.

### What to include

- Description of the vulnerability
- Steps to reproduce
- Potential impact assessment
- Suggested fix (if you have one)

### Response timeline

| Stage | Target |
|-------|--------|
| Acknowledgement | 48 hours |
| Initial assessment | 5 business days |
| Fix or mitigation | Best effort |

## Scope

This project is a static personal site deployed on Cloudflare Workers. The attack surface is limited, but the following are in scope:

- Dependency vulnerabilities (supply chain)
- CI/CD pipeline misconfigurations
- Secrets or credentials accidentally committed
- Cloudflare Worker misconfigurations that could expose data

## Out of scope

- Social engineering
- Cloudflare infrastructure vulnerabilities (report to Cloudflare directly)
- Issues in GitHub's platform (report to GitHub directly)
