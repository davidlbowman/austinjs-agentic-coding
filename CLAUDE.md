<!-- markdownlint-disable-file MD013 -->
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page static site about agentic coding, teaching people how to use multiple agents simultaneously with Claude Code and GitHub CLI. Built with Astro v5.11.0, React, Tailwind CSS v4, shadcn/ui components, and Effect for functional programming patterns.

## Common Commands

### Development

```bash
bun dev          # Start dev server at localhost:4321
bun build        # Build for production to ./dist/
bun preview      # Preview production build locally
```

### Code Quality

```bash
bun format       # Format code using Biome
bun lint         # Lint code using Biome  
bun check        # Run both format and lint checks
```

### Testing

```bash
bun typecheck    # Run TypeScript type checking
bun test:e2e     # Run Playwright E2E tests with text output
```

### Dependency Management

```bash
bun install      # Install dependencies
bun add <pkg>    # Add new dependency
```

## Architecture

### Technology Stack

- **Framework**: Astro with React integration
- **Styling**: Tailwind CSS v4 (using new Vite plugin approach)
- **Components**: shadcn/ui with Radix UI primitives
- **Language**: TypeScript with strict mode
- **Package Manager**: Bun
- **Code Quality**: Biome for formatting and linting
- **Testing**: Playwright for E2E tests (multi-browser: Chrome, Firefox, Edge, Mobile)
- **Functional Programming**: Effect for type-safe functions

### Project Structure

- `src/pages/` - Astro pages (file-based routing)
- `src/components/ui/` - shadcn/ui components
- `src/lib/` - Utility functions and Effect-based logic
  - `utils.ts` - Includes `cn()` for className merging
- `src/styles/global.css` - Global styles with Tailwind directives and CSS variables
- `e2e/` - Playwright E2E tests (files must end with `-e2e.ts`)
- `public/` - Static assets served directly

### Key Configurations

- **TypeScript**: Path alias `@/*` maps to `./src/*`
- **Tailwind CSS**: Configured via astro.config.mjs using Vite plugin
- **shadcn/ui**: Configured in components.json with "new-york" style and CSS variables
- **Biome**: Auto-formatting on file modifications
- **Playwright**: Configured for textual output to enable test result reading
- **E2E Test Pattern**: Files in `e2e/` directory must end with `-e2e.ts`

## Frontend Development Patterns

### Core Philosophy

**React and Shadcn take priority in ALL cases**. Use Effect only for type-safe utility functions and data transformations.

### Component Development

- Use shadcn/ui components directly - never modify them
- Add new components with: `bunx shadcn@latest add <component-name>`
- Use `cn()` utility for conditional classes:

  ```typescript
  import { cn } from "@/lib/utils"
  
  <div className={cn(
    "base-classes",
    condition && "conditional-classes"
  )} />
  ```

### Using Effect for Functions

When implementing utility functions or data transformations:

```typescript
import { Effect, Schema } from "effect"

// Define schemas for type safety
const InputSchema = Schema.Struct({
  field1: Schema.String,
  field2: Schema.Number
})

// Create type-safe functions
export const processData = (input: unknown) =>
  Effect.gen(function* () {
    const validated = yield* Schema.decode(InputSchema)(input)
    // Process validated data
    return transformedResult
  })

// Usage in React components
const handleAction = async () => {
  const result = await Effect.runPromise(
    processData(data).pipe(
      Effect.catchAll(() => Effect.succeed(defaultValue))
    )
  )
}
```

### CSS Architecture

- Tailwind CSS v4 with CSS custom properties for theming
- Dark mode support via CSS variables in src/styles/global.css
- Always use `cn()` for conditional classes
- Follow Tailwind's utility-first approach

## Testing Patterns

### E2E Testing with Playwright

**Configuration**: Tests output text format for Claude Code readability

**Test Structure**:

```typescript
import { test, expect } from '@playwright/test'

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display expected content', async ({ page }) => {
    // Use semantic locators
    await expect(page.getByRole('heading', { name: 'Title' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Action' })).toBeVisible()
  })
})
```

**Best Practices**:

- Test user-visible behavior
- Use `getByRole()`, `getByText()` over CSS selectors
- Be specific with selectors when multiple elements exist
- Use `await expect()` for auto-retrying assertions

### Effect Function Testing

```typescript
import { expect, test } from "bun:test"
import { Effect } from "effect"
import { someFunction } from "@/lib/functions"

test("should process data correctly", async () => {
  const result = await Effect.runPromise(
    someFunction({ input: "test" })
  )
  
  expect(result).toEqual(expectedOutput)
})

test("should handle errors", async () => {
  const result = await Effect.runPromise(
    someFunction({ invalid: "input" }).pipe(Effect.flip)
  )
  
  expect(result).toBeInstanceOf(ExpectedError)
})
```

## MCP Tools Setup

The project is designed to demonstrate MCP (Model Context Protocol) tools integration. Future setup will include tools for enhanced development workflows.

## Development Workflow

### Quality Assurance Protocol

After completing EACH todo item, run these verification scripts:

```bash
bun typecheck    # Ensure TypeScript types are correct
bun check        # Run Biome format and lint checks
bun test:e2e     # Run Playwright E2E tests
```

**CRITICAL**: Never proceed to the next todo until all checks pass.

### Task Management

1. User assigns tasks
2. Create todos for each task
3. Complete one todo at a time
4. Run ALL verification scripts after each todo
5. Fix any issues before proceeding
6. Mark todo as completed only when all checks pass

## Important Notes

- **Static Site Focus**: This is a single-page site - avoid overcomplicating
- **Effect Usage**: Only use Effect for utility functions, not component logic
- **Testing Output**: Playwright tests must use text reporter for readability
- **No Backend**: This is a static site with no server-side logic
- **Educational Purpose**: Code should be clear and demonstrate best practices for teaching
- **Quality Gates**: Every change must pass typecheck, biome check, and E2E tests

## UI/UX Strategy: Converting README to Interactive Single-Page App

### Design Philosophy

Transform the technical README content into an engaging, interactive experience using shadcn/ui components with creative layouts and micro-interactions. Each section should feel distinct while maintaining visual cohesion.

### Section-by-Section Component Mapping

#### 1. Hero Section

- **Components**: Typography (gradient text), Badge, Card
- **Layout**: Centered hero with animated text reveal
- **Interactions**: Subtle parallax on scroll, typewriter effect for subtitle

#### 2. Current State Section  

- **Components**: Card grid, Progress bars, Timeline
- **Layout**: Stats dashboard with 3-column grid
- **Features**: Animated counters (90%, 78%, etc.), progress indicators, hover tooltips

#### 3. Pros Section

- **Components**: Cards with icons, Accordion for expandable details
- **Layout**: 2x2 grid of benefit cards
- **Interactions**: Hover animations, expand for more details

#### 4. Cons Section

- **Components**: Alert variants, Tabs for categorization
- **Layout**: Tabbed interface (Skills, Security, Integration, Future)
- **Features**: Severity indicators, warning icons

#### 5. AI as Scalar Section

- **Components**: Slider, Card, Visual diagram
- **Layout**: Interactive demonstration with before/after comparison
- **Interactions**: Drag slider to see skill multiplication effect

#### 6. Context Section

- **Components**: Badge, Card, Counter animation
- **Layout**: Token visualization with model comparisons
- **Features**: Animated token counter, context window size comparison

#### 7. Compute Section

- **Components**: Progress meters, Toggle switch, Cards
- **Layout**: Resource usage dashboard
- **Interactions**: Toggle between local/API compute modes

#### 8. Context-Compute Relationship

- **Components**: Custom SVG visualization, Cards
- **Layout**: Interactive matrix or Venn diagram
- **Features**: Hover to explore relationships

#### 9. MCP Section

- **Components**: Feature cards, Badge, Flow diagram
- **Layout**: Integration showcase with visual flow
- **Features**: Connection animations, platform badges

#### 10. Agentic Coding Section

- **Components**: Workflow visualization, Chart component
- **Layout**: Agent orchestration diagram with growth metrics
- **Features**: Animated agent interactions, market growth visualization

#### 11. Tool Selection Section

- **Components**: Checkbox cards, Table, Scorecard
- **Layout**: Interactive criteria checklist
- **Interactions**: Calculate tool fit score based on selections

#### 12. Preparation Section

- **Components**: Roadmap, Progress indicators, Resource cards
- **Layout**: Learning path visualization
- **Features**: Skill tree with progress tracking

#### 13. Conclusion Section

- **Components**: CTA cards, Summary list
- **Layout**: Action-oriented wrap-up
- **Features**: Emphasis animations, next steps

### Global Features

- **Navigation**: Sticky header with section progress indicator
- **Animations**: Framer Motion for smooth transitions
- **Scroll Effects**: Intersection Observer for reveal animations
- **Theme**: Dark mode ready with CSS variables
- **Responsiveness**: Mobile-first design approach

### Implementation Priority

1. Start with Hero and Current State (high visual impact)
2. Build reusable card and stat components
3. Add interactive elements (sliders, toggles)
4. Implement smooth scrolling and navigation
5. Polish with animations and transitions
