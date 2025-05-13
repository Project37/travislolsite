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
    title: "Network Security",
    description: "Designing secure network architectures, implementing firewalls, IDS/IPS, and network segmentation strategies.",
    color: "blue",
    icon: "mdi:lan-check"
  },
  {
    title: "Identity & Access Management",
    description: "Implementing robust IAM solutions, multi-factor authentication, and privileged access management.",
    color: "green",
    icon: "carbon:fingerprint-recognition"
  },
  {
    title: "Security Compliance",
    description: "Ensuring adherence to regulatory frameworks including GDPR, HIPAA, PCI-DSS, and industry best practices.",
    color: "yellow",
    icon: "tabler:certificate"
  },
  {
    title: "Incident Response",
    description: "Developing and implementing incident response plans, security monitoring, and threat hunting.",
    color: "orange",
    icon: "mdi:shield-alert"
  },
  {
    title: "Cloud Security",
    description: "Securing cloud environments (AWS, Azure, GCP), implementing security controls, and ensuring data protection.",
    color: "violet",
    icon: "carbon:cloud-security"
  },
  {
    title: "Security Awareness",
    description: "Developing and delivering security training programs to foster a security-first culture.",
    color: "cyan",
    icon: "tabler:user-shield"
  },
  {
    title: "Penetration Testing",
    description: "Conducting thorough security assessments to identify vulnerabilities before they can be exploited by malicious actors.",
    color: "red",
    icon: "mdi:lock-open"
  },
  {
    title: "Threat Intelligence",
    description: "Analyzing and correlating security data to identify emerging threats and proactively strengthen defenses.",
    color: "teal",
    icon: "carbon:data-security"
  },
  {
    title: "Zero Trust Architecture",
    description: "Implementing modern security frameworks that verify every access request regardless of source or resource location.",
    color: "purple",
    icon: "tabler:shield-lock"
  }
];
