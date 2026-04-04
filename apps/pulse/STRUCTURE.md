# GenPulse - Next.js 15 Application Structure

Complete generative news and blog platform inspired by The Verge and Substack.

## Project Layout

```
apps/pulse/
├── .env.local                          # Environment variables (local dev)
├── next.config.ts                      # Next.js configuration
├── package.json                        # Dependencies and scripts
├── playwright.config.ts                # E2E testing config
├── tsconfig.json                       # TypeScript configuration
├── vitest.config.ts                    # Unit testing config
│
├── e2e/
│   └── smoke.test.ts                   # Smoke test for homepage
│
└── src/
    ├── env.ts                          # Environment validation (t3-oss)
    ├── middleware.ts                   # Next.js middleware
    │
    ├── app/
    │   ├── layout.tsx                  # Root layout with header/footer
    │   ├── page.tsx                    # Home page (editorial hub)
    │   ├── globals.css                 # Global styles (Tailwind)
    │   ├── not-found.tsx               # 404 page
    │   │
    │   ├── [category]/[slug]/
    │   │   └── page.tsx                # Post detail page
    │   │
    │   └── category/[name]/
    │       └── page.tsx                # Category feed page
    │
    ├── lib/
    │   └── posts.ts                    # Post data and utilities
    │
    └── __tests__/
        ├── setup.ts                    # Test environment setup
        ├── home.test.tsx               # Home page tests
        └── post.test.tsx               # Post page tests
```

## Key Features

- Editorial homepage with hero section and feed grid
- Post detail pages with full content display
- Category browsing (technology, science, culture)
- Author information and reading time
- Responsive design with Tailwind CSS
- Environment validation with t3-oss
- Unit tests with Vitest and Testing Library
- E2E tests with Playwright
- Workspace dependency management

## Scripts

```bash
pnpm dev          # Start development server (port 3003)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Type checking
pnpm test         # Run unit tests
pnpm test:e2e     # Run E2E tests
```

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL          # Supabase API URL
NEXT_PUBLIC_SUPABASE_ANON_KEY     # Supabase public key
SUPABASE_SERVICE_ROLE_KEY         # Supabase service key
NEXT_PUBLIC_APP_URL               # Application URL
SKIP_ENV_VALIDATION               # Skip validation in dev
```

## Dependencies

- **Framework**: Next.js 15.1.4
- **React**: 19.0.0
- **Styling**: Tailwind CSS (via @repo/ui)
- **Testing**: Vitest, Playwright, Testing Library
- **Validation**: Zod, t3-oss env
- **Utilities**: next-mdx-remote, reading-time

## Post Data Structure

```typescript
interface PostData {
  slug: string;              // URL-friendly identifier
  title: string;             // Article title
  summary: string;           // Brief description
  content: string;           // Full article content
  category: string;          // technology|science|culture
  author: {
    name: string;
    avatar: string;          // Avatar URL
  };
  cover_image: string;       // Hero image URL
  published_at: string;      // Publication date (YYYY-MM-DD)
  reading_time: string;      // e.g., "5 min read"
}
```

## Sample Posts Included

1. AI Transforms Healthcare in 2026 (Technology)
2. Scientists Achieve Quantum Internet Milestone (Science)
3. The Rise of Spatial Computing (Technology)
4. Ocean-Based Carbon Capture Shows Promising Results (Science)
5. The Generative Music Revolution (Culture)
6. The Cities Designed for Digital Nomads (Culture)
7. Mars Sample Return Mission Gets New Timeline (Science)
8. Open Source AI Models Are Changing the Game (Technology)

Each post includes full editorial content, author information, and metadata.
