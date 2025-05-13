# Security Professional Portfolio Site

A modern, maintainable personal website for IT security professionals to showcase their expertise, projects, and share security insights via a blog.

## Features

- 🎨 Theme switching (Solarized Light/Dark, Dracula, Gruvbox)
- 📱 Responsive design for all devices
- ✍️ Markdown-based blog with content collections
- 🧩 Component-based architecture
- 🔄 Reusable configuration

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

For detailed information on the project structure and maintainability practices, see [STRUCTURE.md](./STRUCTURE.md).

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

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

- Your name and title
- Contact information
- Company name
- Social media links

### Expertise Areas

Edit the file at `src/config/expertise.js` to update your areas of expertise.

### Projects/Case Studies

Edit the file at `src/config/projects.js` to update your project showcases.

### Blog Content

Add or modify Markdown files in the `src/content/blog/` directory.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint

## License

[MIT License](./LICENSE)
