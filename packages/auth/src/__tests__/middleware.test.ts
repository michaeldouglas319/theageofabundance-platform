import { describe, it, expect, vi } from 'vitest';

// Mock @supabase/ssr
vi.mock('@supabase/ssr', () => ({
  createServerClient: vi.fn(() => ({
    auth: {
      getUser: vi.fn().mockResolvedValue({ data: { user: null }, error: null }),
    },
  })),
}));

// Mock next/server
vi.mock('next/server', () => ({
  NextResponse: {
    next: vi.fn(({ request }: { request: { cookies: { getAll: () => never[] } } }) => ({
      cookies: {
        set: vi.fn(),
      },
    })),
  },
}));

describe('@repo/auth middleware', () => {
  it('updateSession returns a response', async () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key';

    const { updateSession } = await import('../middleware');

    const mockRequest = {
      cookies: {
        getAll: () => [],
        set: vi.fn(),
      },
    };

    const response = await updateSession(mockRequest as never);
    expect(response).toBeDefined();
  });

  it('updateSession refreshes the session', async () => {
    const { createServerClient } = await import('@supabase/ssr');
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test-anon-key';

    const { updateSession } = await import('../middleware');

    const mockRequest = {
      cookies: {
        getAll: () => [],
        set: vi.fn(),
      },
    };

    await updateSession(mockRequest as never);
    expect(createServerClient).toHaveBeenCalled();
  });
});
