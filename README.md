# AustinJS Agentic Coding

A single-page educational site teaching developers how to leverage multiple AI agents simultaneously with Claude Code and GitHub CLI for enhanced productivity.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Open http://localhost:4321
```

## 📚 What You'll Learn

- **Multi-Agent Workflows**: How to use multiple Claude agents in parallel
- **GitHub CLI Integration**: Automating GitHub workflows with AI assistance
- **MCP Tools**: Setting up Model Context Protocol tools for enhanced capabilities
- **Best Practices**: Effective patterns for AI-assisted development

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build) v5.11.0 - Fast static site generator
- **UI**: React + [shadcn/ui](https://ui.shadcn.com) - Beautiful, accessible components
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Modern utility-first CSS
- **Language**: TypeScript - Type-safe development
- **Testing**: [Playwright](https://playwright.dev) - Cross-browser E2E testing
- **Code Quality**: [Biome](https://biomejs.dev) - Fast formatter and linter
- **Runtime**: [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime

## 📁 Project Structure

```
austinjs-agentic-coding/
├── src/
│   ├── pages/          # Astro pages (file-based routing)
│   ├── components/     # React components and shadcn/ui
│   ├── lib/           # Utility functions and Effect code
│   └── styles/        # Global styles and Tailwind config
├── e2e/               # Playwright E2E tests (*-e2e.ts)
├── public/            # Static assets
└── CLAUDE.md          # AI assistant guidance file
```

## 🧞 Commands

All commands are run from the root of the project:

| Command | Action |
|---------|--------|
| `bun install` | Install dependencies |
| `bun dev` | Start local dev server at `localhost:4321` |
| `bun build` | Build production site to `./dist/` |
| `bun preview` | Preview production build locally |
| `bun format` | Format code with Biome |
| `bun lint` | Lint code with Biome |
| `bun check` | Run format and lint checks |
| `bun typecheck` | Check TypeScript types |
| `bun test:e2e` | Run Playwright E2E tests |

## 🧪 Testing

This project uses Playwright for E2E testing across multiple browsers:
- Chrome
- Firefox  
- Edge
- Mobile Chrome
- Mobile Firefox

Tests are located in the `e2e/` directory and must end with `-e2e.ts`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run quality checks before committing:
   ```bash
   bun typecheck
   bun check
   bun test:e2e
   ```
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Resources

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [GitHub CLI Documentation](https://cli.github.com)
- [Astro Documentation](https://docs.astro.build)
- [Effect Documentation](https://effect.website)