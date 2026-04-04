# Generative Platform Monorepo

A production-grade Turborepo monorepo containing three Next.js 15 applications sharing a common Supabase backend, AI gateway, and authentication layer.

## Apps

| App | Port | Description |
|-----|------|-------------|
| `apps/wiki` | 3001 | Generative Wikipedia clone — browse and search knowledge articles |
| `apps/studio` | 3002 | AI Art Studio — gallery of AI-generated artwork with create flow |
| `apps/pulse` | 3003 | Generative News & Blog — editorial content platform |

## Tech Stack

- **Monorepo**: Turborepo + pnpm workspaces
- **Framework**: Next.js 15, React 19, App Router, Server Components
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Backend**: Supabase (PostgreSQL, Auth, Storage, RLS)
- **AI Gateway**: Vercel AI SDK (provider-agnostic)
- **Testing**: Vitest + Playwright + MSW
- **Env Validation**: @t3-oss/env-nextjs (Zod)

## Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 9
- Supabase CLI (`pnpm add -g supabase`)

### Local Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Start Supabase local instance
supabase start

# 3. Apply database migrations
supabase db push

# 4. Generate TypeScript types from schema
supabase gen types typescript --local > packages/supabase/types/database.types.ts

# 5. Seed the database
supabase db seed

# 6. Copy .env.example to .env.local in each app and fill in values
# (apps already include .env.local with local Supabase defaults)

# 7. Start all apps
turbo dev
```

### Environment Variables

Each app requires these variables in `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
NEXT_PUBLIC_APP_URL=http://localhost:<port>

# For AI features (optional for initial setup)
AI_PROVIDER=openai
AI_MODEL=gpt-4o-mini
OPENAI_API_KEY=<your-key>
```

Run `supabase status` after `supabase start` to get your local anon and service role keys.

## Running Commands

```bash
# Development (all apps)
turbo dev

# Single app
turbo dev --filter=wiki
turbo dev --filter=studio
turbo dev --filter=pulse

# Type checking
turbo type-check

# Linting
turbo lint

# Unit & integration tests
turbo test

# Build all apps
turbo build

# E2E tests (requires built apps)
turbo test:e2e
```

## Shared Packages

| Package | Purpose |
|---------|---------|
| `@repo/config` | Shared TypeScript, ESLint, and Tailwind configurations |
| `@repo/types` | Shared TypeScript type definitions |
| `@repo/supabase` | Supabase client factories and database types |
| `@repo/auth` | Authentication helpers (middleware, server, client) |
| `@repo/ai` | AI gateway wrapper (Vercel AI SDK) |
| `@repo/ui` | Shared UI components (shadcn/ui base) |

## Project Structure

```
├── apps/
│   ├── wiki/           # Generative Wikipedia (port 3001)
│   ├── studio/         # AI Art Studio (port 3002)
│   └── pulse/          # News & Blog platform (port 3003)
├── packages/
│   ├── config/         # Shared configs (TS, ESLint, Tailwind)
│   ├── types/          # Shared TypeScript types
│   ├── supabase/       # Supabase client + schema + types
│   ├── auth/           # Auth helpers (Supabase Auth)
│   ├── ai/             # AI Gateway (Vercel AI SDK)
│   └── ui/             # Shared UI components
├── supabase/           # Supabase config, migrations, seed
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```
