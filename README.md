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
├── public/              # Static assets (favicon, social images, etc. )
│   ├── favicon.svg
│   ├── stick_about.svg
│   ├── stick_contact.svg
│   └── stick_projects.svg
├── src/
│   ├── assets/          # Project-specific static assets (e.g., astro.svg, background.svg)
│   ├── components/      # Reusable Astro components (.astro)
│   ├── config/          # Site-wide configuration (site.js, expertise.js, projects.js)
│   ├── content/         # Content collections (Markdown, etc.)
│   │   └── blog/        # Markdown files for blog posts
│   ├── layouts/         # Layout components for pages (.astro)
│   ├── pages/           # Astro pages and API routes (.astro, .md)
│   └── styles/          # Global and component-specific CSS files
└── package.json
```

For detailed information on the project structure and maintainability practices, see [STRUCTURE.md](./STRUCTURE.md).

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository (replace with your repository URL if known)
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
- Social media links and profiles (Email, LinkedIn, BlueSky, GitHub)
- Site metadata and SEO information

The contact information is displayed using the `ContactInfo` component that includes SVG icons and hover animations.

### Security Expertise Areas

Edit the file at `src/config/expertise.js` to update your security expertise areas. Each object in the array should follow this structure:

```javascript
export default [
  {
    title: "Enterprise Security Architecture",
    icon: "carbon:enterprise", // Iconify icon name (e.g., from Carbon, Tabler, MDI)
    description: "Designing and implementing secure architectures for enterprise systems.",
    color: "blue" // Theme color name (e.g., blue, green, yellow)
  },
  // Add more expertise areas
];
```

### Security Projects/Case Studies

Edit the file at `src/config/projects.js` to update your security project showcases. Each object in the array should follow this structure:

```javascript
export default [
  {
    title: "Project Title",
    company: "Client/Company Name",
    duration: "Project Duration (e.g., Jan 2023 - Mar 2023)",
    challenge: "Brief description of the challenge.",
    solution: "Brief description of the solution implemented.",
    result: "Key outcomes and results of the project.",
    accentColor: "blue" // Theme color name for visual accent
  },
  // Add more projects
];
```

### Blog Content

Add or modify Markdown files in the `src/content/blog/` directory with the following format:

```markdown
---
title: "Your Awesome Blog Post Title"
description: "A brief summary of your blog post, used for SEO and previews."
pubDate: YYYY-MM-DD # Publication date
tags: ["RelevantTag1", "AnotherTag", "Cybersecurity"]
# Optional:
# image: "/images/blog/your-post-image.jpg" # Cover image for the post
# author: "Your Name" # If different from site default
# isFeatured: true # To mark as a featured post
---

Your blog post content here...
```

## Icons and Graphics

The site uses inline SVG icons for contact information and other visual elements. These are included directly in components like `ContactInfo.astro` to ensure they:
- Are accessible
- Can be styled with CSS
- Have smooth animations
- Adapt to the current theme colors

## Theme Management

The site includes multiple theme options that can be customized in `src/styles/global.css` and are configured for the theme switcher in `src/config/site.js`. Themes are applied using the `data-theme` attribute on the `html` element.

Available themes (as per `src/config/site.js` and `src/styles/global.css`):
- System (adapts to user's OS preference)
- Solarized Light (default light theme)
- Solarized Dark (default dark theme)
- Dracula
- Gruvbox Dark
- One Light
- Programming Light

To add a new theme:
1. Define its CSS variables in `src/styles/global.css`:
   ```css
   [data-theme="your-new-theme-name"] {
     --bg: #yourBackground;
     --fg: #yourForeground;
     --accent: #yourAccent;
     /* Add other theme-specific variables from the :root or other themes */
   }
   ```
2. Add it to the `themes` array in `src/config/site.js` to make it available in the `ThemeSwitcher` component:
   ```javascript
   // In src/config/site.js
   // ...
   themes: [
     // ... existing themes
     { name: 'Your New Theme Name', value: 'your-new-theme-name' }
   ]
   // ...
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
