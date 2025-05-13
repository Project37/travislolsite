# Project Structure & Maintainability Guide

This document outlines the structure and best practices for maintaining this security professional portfolio website.

## Directory Structure

```
src/
  ├── components/         # Reusable UI components
  │   ├── Button.astro    # Styled button component
  │   ├── ContactForm.astro  # Contact form with validation
  │   ├── ExpertiseCard.astro  # Security expertise card 
  │   ├── ProjectCard.astro  # Security project showcase card
  │   └── ThemePreview.astro  # Theme preview component
  │
  ├── config/             # Site-wide configuration
  │   ├── expertise.js    # Security expertise areas data
  │   ├── projects.js     # Project/case study showcase data
  │   └── site.js         # Site-wide settings and personal info
  │
  ├── content/            # Content collections
  │   ├── config.ts       # Content collection schema
  │   └── blog/           # Security blog content in Markdown
  │       └── zero-trust-architecture.md  # Sample blog post
  │
  ├── layouts/            # Page layouts
  │   ├── Layout.astro    # Main site layout with theme support
  │   └── BlogPostLayout.astro  # Layout for blog articles
  │
  ├── pages/              # Routes and pages
  │   ├── index.astro     # Home page with all sections
  │   └── blog/           # Blog pages
  │       ├── index.astro # Blog listing page
  │       └── [slug].astro  # Dynamic blog post page
  │
  └── styles/             # CSS files
      ├── global.css      # Global styles and theme variables
      ├── layout.css      # Layout component styles
      ├── components.css  # Component-specific styles
      └── blog.css        # Blog-specific styles
```

## Maintainability Best Practices

### 1. CSS Organization

- Use the dedicated CSS files in `src/styles/` instead of inline styles
- Follow the component-based CSS organization:
  - `global.css` - Theme variables and site-wide styles
  - `layout.css` - Layout and structural styles
  - `components.css` - Styles for specific components
  - `blog.css` - Blog-specific styles
- Use CSS variables for theming, colors, spacing, and typography
- Maintain consistent naming conventions for CSS classes

### 2. Component Structure

- Create reusable components for UI elements used in multiple places
- Define TypeScript interfaces for component props to ensure type safety
- Document components with JSDoc comments
- Keep components focused on a single responsibility
- Use slots and props for component customization

Example component structure:
```astro
---
// Component: ExpertiseCard.astro
// Description: Displays a security expertise area with icon and description

interface Props {
  title: string;
  icon: string;
  description: string;
  accentColor?: string;
}

const { title, icon, description, accentColor = "blue" } = Astro.props;
---

<div class={`expertise-card accent-${accentColor}`}>
  <h3>{title}</h3>
  <p>{description}</p>
</div>

<style>
  /* Component-specific styles can be included here */
</style>
```

### 3. Content Management

- Store security blog posts as Markdown files in `src/content/blog/`
- Define collection schemas in `src/content/config.ts` for type safety
- Use front matter for metadata and consistent tagging
- Follow security industry best practices for content organization
- Use appropriate tags for categorizing security-related content

### 4. Configuration

- Store site-wide configuration in `src/config/site.js`
- Keep security expertise areas in `src/config/expertise.js`
- Maintain project showcases in `src/config/projects.js`
- Centralize site metadata for SEO and social sharing
- Update all personal information in one place

### 5. Adding New Content

#### New Security Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Include required front matter:
```md
---
title: "Security Analysis of XYZ Vulnerability"
description: "A detailed breakdown of the recent XYZ vulnerability"
pubDate: 2023-11-15
tags: ["Vulnerability Analysis", "Incident Response", "CVE-2023-XYZ"]
---

Blog content with properly formatted markdown, code samples, and security recommendations.
```

#### New Security Projects

Add a new entry to the array in `src/config/projects.js`:
```javascript
{
  title: "Enterprise Zero Trust Implementation",
  description: "Designed and implemented a zero trust architecture...",
  tags: ["Zero Trust", "Network Security", "Identity Management"],
  image: "/images/zero-trust-project.jpg",
  accentColor: "blue"
}
```

#### New Security Expertise Areas

Add a new entry to the array in `src/config/expertise.js`:
```javascript
{
  title: "Threat Intelligence",
  icon: "radar",
  description: "Proactive identification and analysis of emerging threats...",
  accentColor: "red"
}
```

### 6. Theme Management

- Theme variables are defined in `src/styles/global.css`
- To add a new theme, create a new CSS selector:
```css
[data-theme="high-security"] {
  --color-background: #0a0a0a;
  --color-text: #00ff00;
  --color-accent: #ff0000;
  --color-card-bg: #111111;
  /* Add all necessary theme variables */
}
```

### 7. Performance Optimization

- Use static site generation for optimal security and performance
- Properly size and compress images
- Implement lazy loading for below-the-fold content
- Minimize third-party dependencies
- Follow accessibility best practices
