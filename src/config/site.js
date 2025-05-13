// Site configuration
export default {
  siteName: "Security Professional Portfolio",
  siteDescription: "Personal website for IT Security Professional showcasing expertise and insights",
  author: {
    name: "Travis D'Amico",
    title: "Senior IT Security Administrator",
    company: "Hypertherm Associates",
    yearsOfExperience: "10",
    email: "CyberSec@Travis.lol",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "@yourhandle"
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
