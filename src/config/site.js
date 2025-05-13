/**
 * Site Configuration
 * 
 * Central configuration file for the security professional portfolio site.
 * Contains all site-wide settings, personal information, and configuration options.
 */
export default {
  // Site basics
  siteName: "Security Professional Portfolio",
  siteDescription: "Personal website for IT Security Professional showcasing expertise and insights",
  siteUrl: "https://security.travis.lol",
  
  // SEO and social sharing
  ogImage: "/images/security-portfolio-og.jpg",
  twitterHandle: "@travis_lol",
  
  // Personal information
  author: {
    name: "Travis D'Amico",
    title: "Senior IT Security Administrator",
    company: "Hypertherm Associates",
    yearsOfExperience: "10",
    email: "CyberSec@Travis.lol",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "@yourhandle",
    github: "https://github.com/yourusername"
  },
  navigation: [
    { title: "Home", url: "/" },
    { title: "About", url: "/#about" },
    { title: "Expertise", url: "/#expertise" },
    { title: "Projects", url: "/#projects" },
    { title: "Security Blog", url: "/blog/" },
    { title: "Contact", url: "/#contact" }
  ],
  themes: [
    { name: 'System', value: 'system' },
    { name: 'Solarized Light', value: 'light' },
    { name: 'Solarized Dark', value: 'dark' },
    { name: 'Dracula', value: 'dracula' },
    { name: 'Gruvbox Dark', value: 'gruvbox', default: true }
  ]
};
