import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ArticlePage from '../app/[slug]/page';

describe('Article Page', () => {
  it('renders article content for a valid slug', async () => {
    const Component = await ArticlePage({ params: Promise.resolve({ slug: 'artificial-intelligence' }) });
    render(Component);
    expect(screen.getByRole('heading', { level: 1, name: 'Artificial Intelligence' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'History' })).toBeInTheDocument();
  });

  it('calls notFound for an unknown slug', async () => {
    await expect(
      ArticlePage({ params: Promise.resolve({ slug: 'nonexistent-article' }) }),
    ).rejects.toThrow();
  });
});
