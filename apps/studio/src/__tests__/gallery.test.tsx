import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import GalleryPage from '../app/page';

afterEach(cleanup);

describe('Gallery Page', () => {
  it('renders the gallery grid', () => {
    render(<GalleryPage />);
    expect(screen.getByTestId('gallery-grid')).toBeInTheDocument();
  });

  it('renders artwork items', () => {
    const { container } = render(<GalleryPage />);
    const images = container.querySelectorAll('[data-testid="gallery-grid"] img');
    expect(images.length).toBe(8);
  });

  it('displays artwork prompts', () => {
    render(<GalleryPage />);
    expect(screen.getAllByText(/cyberpunk cityscape/i).length).toBeGreaterThan(0);
  });
});
