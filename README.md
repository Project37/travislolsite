# Security Professional Portfolio Site

A modern, maintainable personal website for IT security professionals to showcase their expertise, projects, and share security insights via a blog.

## Features

- 🔒 Professional security-focused design
- 🎨 Theme switching with predefined color schemes  
- 📱 Responsive design for all devices
- ✍️ Markdown-based blog with content collections
- 🧩 Component-based architecture
- 🔄 Centralized configuration for easy updates

## 🚀 Project Structure

Inside your Astro project, you'll find the following structure:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI components
│   ├── config/          # Site configuration files
│   ├── content/         # Content collections
│   │   └── blog/        # Markdown blog posts
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes and pages
│   └── styles/          # CSS files
└── package.json
```

For detailed information on the project structure and maintainability practices, see [STRUCTURE.md](./STRUCTURE.md).

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/security-portfolio.git
cd security-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:4321`

## Customization

### Personal Information

Edit the file at `src/config/site.js` to update:

- Your name and professional title
- Contact information
- Company/organization name
- Social media links and profiles
- Site metadata and SEO information

### Security Expertise Areas

Edit the file at `src/config/expertise.js` to update your security expertise areas:

```javascript
export default [
  {
    title: "Penetration Testing",
    icon: "shield", // Icon identifier
    description: "Comprehensive security assessment services...",
    accentColor: "blue" 
  },
  // Add more expertise areas
];
```

### Security Projects/Case Studies

Edit the file at `src/config/projects.js` to update your security project showcases:

```javascript
export default [
  {
    title: "Financial Institution Security Audit",
    description: "Conducted a comprehensive security assessment...",
    tags: ["Penetration Testing", "Compliance", "OWASP"],
    image: "/images/finance-security.jpg",
    accentColor: "blue"
  },
  // Add more projects
];
```

### Blog Content

Add or modify Markdown files in the `src/content/blog/` directory with the following format:

```markdown
---
title: "Zero Trust Architecture Implementation"
description: "A guide to implementing Zero Trust security models in enterprise environments"
pubDate: 2023-06-01
tags: ["Zero Trust", "Enterprise Security", "Architecture"]
---

Your blog post content here...
```

## Theme Management

The site includes multiple theme options that can be customized in `src/styles/global.css`. Themes are applied using the `data-theme` attribute on the `html` element.

Available themes:
- Light (default)
- Dark
- Solarized Light
- Solarized Dark
- High Contrast

To add a new theme, define CSS variables in a new theme selector:

```css
[data-theme="your-theme-name"] {
  --color-background: #value;
  --color-text: #value;
  --color-accent: #value;
  /* Add other variables as needed */
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static site)
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint
- `npm run astro ...` - Run Astro CLI commands

## Performance Considerations

- The site is built as a static site for optimal performance
- Images should be properly optimized before adding to the project
- Use the built-in lazy loading for images and components

## License

[MIT License](./LICENSE)
