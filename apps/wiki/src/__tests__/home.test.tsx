import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('Home Page', () => {
  it('renders the search box', () => {
    render(<HomePage />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('renders featured articles', () => {
    render(<HomePage />);
    expect(screen.getAllByText('Artificial Intelligence').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Quantum Computing').length).toBeGreaterThan(0);
  });
});
