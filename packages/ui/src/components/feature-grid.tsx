import { cn } from '../lib/utils';

export interface Feature {
  title: string;
  description: string;
}

export interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({ features, columns = 4, className }: FeatureGridProps) {
  return (
    <section
      className={cn('py-20 px-8', className)}
      style={{
        backgroundColor: 'var(--border-subtle)',
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1px',
      }}
    >
      {features.map((feature, i) => (
        <div
          key={i}
          style={{
            backgroundColor: 'var(--surface-1)',
            padding: '2.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}
          >
            {feature.title}
          </div>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}
