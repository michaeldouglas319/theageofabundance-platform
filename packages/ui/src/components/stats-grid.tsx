import { cn } from '../lib/utils';

export interface Stat {
  value: string;
  label: string;
}

export interface StatsGridProps {
  stats: Stat[];
  className?: string;
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <section
      className={cn('px-8 py-16', className)}
      style={{
        backgroundColor: 'var(--surface-0)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'grid',
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        gap: '2rem',
        textAlign: 'center',
      }}
    >
      {stats.map((stat, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
