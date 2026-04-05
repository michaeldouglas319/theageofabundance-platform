import { cn } from '../lib/utils';

export interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  className?: string;
}

export function HeroSection({
  eyebrow,
  title,
  lead,
  primaryCTA,
  secondaryCTA,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn('py-24 px-8 text-center', className)}
      style={{ backgroundColor: 'var(--surface-0)' }}
    >
      {eyebrow && (
        <div
          style={{
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '1.5rem',
          }}
        >
          {eyebrow}
        </div>
      )}

      <h1
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          lineHeight: 1.1,
          maxWidth: '50rem',
          margin: '0 auto 1.5rem',
        }}
      >
        {title}
      </h1>

      {lead && (
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            maxWidth: '37.5rem',
            margin: '0 auto 3rem',
            lineHeight: 1.6,
          }}
        >
          {lead}
        </p>
      )}

      {(primaryCTA || secondaryCTA) && (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {primaryCTA && (
            <a
              href={primaryCTA.href}
              style={{
                backgroundColor: 'var(--interactive)',
                color: 'var(--interactive-fg)',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: 'var(--radius)',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {primaryCTA.label}
            </a>
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-default)',
                padding: '0.75rem 2rem',
                borderRadius: 'var(--radius)',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      )}
    </section>
  );
}
