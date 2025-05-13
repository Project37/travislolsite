# Project Structure & Maintainability Guide

This document outlines the structure and best practices for maintaining this website.

## Directory Structure

```
src/
  ├── assets/             # Static assets like images and SVGs
  ├── components/         # Reusable UI components
  │   ├── Button.astro    # Button component
  │   ├── ContactForm.astro
  │   ├── ExpertiseCard.astro
  │   └── ProjectCard.astro
  │
  ├── config/             # Site-wide configuration
  │   ├── expertise.js    # Expertise areas data
  │   ├── projects.js     # Project showcase data
  │   └── site.js         # Site-wide settings
  │
  ├── content/            # Content collections
  │   ├── config.ts       # Content collection schema
  │   └── blog/           # Blog content in Markdown
  │
  ├── layouts/            # Page layouts
  │   ├── Layout.astro    # Main site layout
  │   └── BlogPostLayout.astro
  │
  ├── pages/              # Routes and pages
  │   ├── index.astro     # Home page
  │   └── blog/           # Blog pages
  │
  └── styles/             # CSS files
      ├── global.css      # Global styles and variables
      ├── layout.css      # Layout component styles
      ├── components.css  # Component-specific styles
      └── blog.css        # Blog-specific styles
```

## Maintainability Best Practices

### 1. CSS Organization

- Use the dedicated CSS files in `src/styles/` instead of inline styles whenever possible
- Follow the component-based CSS organization
- Use CSS variables for colors, spacing, and other design tokens

### 2. Component Structure

- Create reusable components for UI elements used in multiple places
- Define proper TypeScript interfaces for component props
- Document components with JSDoc comments

### 3. Content Management

- Store blog posts as Markdown files in `src/content/blog/`
- Define schemas for content collections in `src/content/config.ts`
- Use front matter for metadata

### 4. Configuration

- Store site-wide configuration in `src/config/site.js`
- Keep expertise areas and projects in their respective config files
- Update author information and other site metadata in one central place

### 5. Adding New Content

#### New Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Include required front matter:
```md
---
title: "Your Post Title"
description: "Brief description of the post"
pubDate: 2025-06-01
tags: ["Tag1", "Tag2"]
---
```

#### New Projects

1. Add a new entry to the array in `src/config/projects.js`

#### New Expertise Areas

1. Add a new entry to the array in `src/config/expertise.js`

### 6. Theme Management

- Theme variables are defined in `src/styles/global.css`
- To add a new theme, create a new `[data-theme="theme-name"]` selector
