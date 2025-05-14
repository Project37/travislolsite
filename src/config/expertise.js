/**
 * Expertise areas configuration
 * 
 * Icons use the format "pack:icon-name" for the astro-iconify integration
 * Popular icon packs for security:
 * - mdi (Material Design Icons): https://icon-sets.iconify.design/mdi/
 * - carbon: https://icon-sets.iconify.design/carbon/
 * - tabler: https://icon-sets.iconify.design/tabler/
 * - cil (CoreUI Icons): https://icon-sets.iconify.design/cil/
 * - lucide: https://icon-sets.iconify.design/lucide/
 */
export default [
  {
    title: "Software Development Security",
    description: "Implementing security best practices across the SDLC, integrating DevSecOps practices, automated code scanning, vulnerability management, and secure coding standards.",
    color: "blue",
    icon: "tabler:shield-code"
  },
  {
    title: "Identity & Access Management",
    description: "Implementing robust IAM solutions, multi-factor authentication, and privileged access management.",
    color: "orange",
    icon: "carbon:fingerprint-recognition"
  },
  {
    title: "Security Compliance",
    description: "Ensuring compliance with NIST and CIS cybersecurity frameworks, implementing controls and best practices for secure configuration and continuous monitoring.",
    color: "yellow",
    icon: "tabler:certificate"
  },
  {
    title: "Incident Response",
    description: "Developing and implementing incident response plans, security monitoring, and threat hunting.",
    color: "green",
    icon: "mdi:shield-alert"
  },
  {
    title: "Cloud Security",
    description: "Securing cloud environments (AWS, Azure, GCP), implementing security controls, and ensuring data protection.",
    color: "violet",
    icon: "mdi:cloud-lock"
  },
  {
    title: "Security Awareness",
    description: "Developing and delivering security training programs, coaching, and collaborating with business teams to embed security practices and foster a security-first culture.",
    color: "cyan",
    icon: "tabler:user-shield"
  },
  {
    title: "Secrets & Credential Management",
    description: "Implementing robust secrets management: secure storage, rotation, and access controls for credentials using solutions like Azure Key Vault and AWS Secrets Manager",
    color: "red",
    icon: "mdi:key"
  },
  {
    title: "Vulnerability & Patch Management",
    description: "Managing vulnerabilities through assessment, prioritization, patch deployment, and verification to reduce risk and maintain secure systems.",
    color: "teal",
    icon: "tabler:tools"
  },
  {
    title: "Zero-Trust Architecture",
    description: "Implementing modern security frameworks that verify every access request regardless of source or resource location.",
    color: "purple",
    icon: "tabler:shield-lock"
  }
];
