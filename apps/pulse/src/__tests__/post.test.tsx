import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PostPage from '../app/[category]/[slug]/page';

describe('Post Page', () => {
  it('renders post content for a valid slug', async () => {
    const Component = await PostPage({
      params: Promise.resolve({ category: 'technology', slug: 'ai-transforms-healthcare' }),
    });
    render(Component);
    expect(screen.getByText('How AI Is Transforming Healthcare in 2026')).toBeInTheDocument();
  });

  it('calls notFound for an unknown slug', async () => {
    await expect(
      PostPage({ params: Promise.resolve({ category: 'technology', slug: 'nonexistent' }) }),
    ).rejects.toThrow();
  });
});
