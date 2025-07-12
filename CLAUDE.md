# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is an Astro v5.11.0 project using React, Tailwind CSS v4, and shadcn/ui components. The project uses Bun as the package manager.

## Common Commands

### Development
```bash
bun dev          # Start dev server at localhost:4321
bun build        # Build for production to ./dist/
bun preview      # Preview production build locally
```

### Dependency Management
```bash
bun install      # Install dependencies
bun add <pkg>    # Add new dependency
```

### Astro CLI
```bash
bun astro add <integration>  # Add Astro integrations
bun astro check              # Type-check .astro files
```

## Architecture

### Technology Stack
- **Framework**: Astro with React integration
- **Styling**: Tailwind CSS v4 (using new Vite plugin approach)
- **Components**: shadcn/ui with Radix UI primitives
- **Language**: TypeScript with strict mode
- **Package Manager**: Bun

### Project Structure
- `src/pages/` - Astro pages (file-based routing)
- `src/components/ui/` - shadcn/ui components
- `src/lib/utils.ts` - Utility functions (includes `cn()` for className merging)
- `src/styles/global.css` - Global styles with Tailwind directives and CSS variables
- `public/` - Static assets served directly

### Key Configurations
- **TypeScript**: Path alias `@/*` maps to `./src/*`
- **Tailwind CSS**: Configured via astro.config.mjs using Vite plugin
- **shadcn/ui**: Configured in components.json with "new-york" style and CSS variables

### CSS Architecture
The project uses Tailwind CSS v4 with CSS custom properties for theming. Dark mode is supported through CSS variables defined in src/styles/global.css. The `cn()` utility function from src/lib/utils.ts should be used for conditional class names.

### Component Development
When adding new UI components, use the shadcn/ui CLI where possible:
```bash
bunx shadcn@latest add <component-name>
```

This ensures consistency with the existing component architecture and styling approach.