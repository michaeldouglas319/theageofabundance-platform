import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('Home Page', () => {
  it('renders the latest stories section', () => {
    render(<HomePage />);
    expect(screen.getByText('Latest Stories')).toBeInTheDocument();
  });

  it('renders post titles', () => {
    render(<HomePage />);
    expect(screen.getAllByText('How AI Is Transforming Healthcare in 2026').length).toBeGreaterThan(0);
  });
});
