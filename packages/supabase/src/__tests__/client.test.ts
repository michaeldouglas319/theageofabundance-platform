import { describe, it, expect, vi } from 'vitest';

// Mock @supabase/ssr
vi.mock('@supabase/ssr', () => ({
  createBrowserClient: vi.fn(() => ({
    from: vi.fn(),
    auth: { getUser: vi.fn() },
  })),
  createServerClient: vi.fn(() => ({
    from: vi.fn(),
    auth: { getUser: vi.fn() },
  })),
}));

describe('@repo/supabase', () => {
  it('createBrowserClient returns a valid Supabase client', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key';

    const { createBrowserClient } = await import('../../client/browser');
    const client = createBrowserClient();
    expect(client).toBeDefined();
    expect(client.from).toBeDefined();
    expect(client.auth).toBeDefined();
  });

  it('createBrowserClient has auth methods', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key';

    const { createBrowserClient } = await import('../../client/browser');
    const client = createBrowserClient();
    expect(client.auth.getUser).toBeDefined();
  });
});
