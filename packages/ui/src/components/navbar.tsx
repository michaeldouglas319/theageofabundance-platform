'use client';

import { useState } from 'react';
import { cn } from '../lib/utils';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  brand?: string;
  brandHref?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function Navbar({
  brand = 'TOA',
  brandHref = '/',
  links = [],
  ctaLabel,
  ctaHref,
  className,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn('sticky top-0 z-50 w-full', className)}
      style={{
        background: 'var(--surface-1)',
        borderBottom: '1px solid var(--border-subtle)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <nav className="container-void flex items-center justify-between h-14">
        {/* Brand */}
        <a
          href={brandHref}
          style={{
            color: 'var(--text-primary)',
            fontWeight: 600,
            fontSize: '0.9375rem',
            letterSpacing: '-0.01em',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '1.625rem',
              height: '1.625rem',
              background: 'var(--text-primary)',
              color: 'var(--surface-0)',
              borderRadius: '4px',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            TOA
          </span>
          {brand !== 'TOA' && <span>{brand}</span>}
        </a>

        {/* Desktop links */}
        {links.length > 0 && (
          <ul
            style={{
              display: 'flex',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="hidden md:flex"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="hidden md:inline-flex"
              style={{
                background: 'var(--interactive)',
                color: 'var(--interactive-fg)',
                padding: '0.4375rem 1rem',
                borderRadius: 'var(--radius)',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '-0.005em',
                transition: 'opacity 150ms',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
            >
              {ctaLabel}
            </a>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'currentColor', transition: '200ms', transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : undefined }} />
            <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'currentColor', opacity: open ? 0 : 1, transition: '200ms' }} />
            <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'currentColor', transition: '200ms', transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : undefined }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'var(--surface-1)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '1rem 0',
          }}
          className="md:hidden"
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    display: 'block',
                    padding: '0.625rem 1.5rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
            {ctaLabel && ctaHref && (
              <li style={{ padding: '0.5rem 1.5rem' }}>
                <a
                  href={ctaHref}
                  style={{
                    display: 'inline-block',
                    background: 'var(--interactive)',
                    color: 'var(--interactive-fg)',
                    padding: '0.5rem 1.25rem',
                    borderRadius: 'var(--radius)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  {ctaLabel}
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
