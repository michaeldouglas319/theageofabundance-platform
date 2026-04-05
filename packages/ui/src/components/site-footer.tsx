export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SiteFooterProps {
  brand?: string;
  tagline?: string;
  sections?: FooterSection[];
  legal?: string;
}

const defaultSections: FooterSection[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Health', href: 'https://me.theageofabundance.com' },
      { label: 'Shop', href: 'https://shop.theageofabundance.com' },
      { label: 'Network', href: 'https://net.theageofabundance.com' },
      { label: 'Cloud', href: 'https://cloud.theageofabundance.com' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Wiki', href: 'https://wiki.theageofabundance.com' },
      { label: 'Agency', href: 'https://agency.theageofabundance.com' },
      { label: 'Space', href: 'https://space.theageofabundance.com' },
    ],
  },
  {
    title: 'Organization',
    links: [
      { label: 'Mission', href: '/mission' },
      { label: 'Foundation', href: 'https://org.theageofabundance.com' },
      { label: 'Research', href: '/research' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export function SiteFooter({
  brand = 'The Age of Abundance',
  tagline = 'Building the infrastructure for human flourishing.',
  sections = defaultSections,
  legal,
}: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--surface-1)',
        borderTop: '1px solid var(--border-subtle)',
        marginTop: 'auto',
      }}
    >
      <div className="container-void" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div style={{ maxWidth: '18rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '1.75rem',
                height: '1.75rem',
                background: 'var(--text-primary)',
                color: 'var(--surface-0)',
                borderRadius: '4px',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                marginBottom: '0.875rem',
              }}
            >
              TOA
            </div>
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {tagline}
            </p>
          </div>

          {/* Link sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                }}
              >
                {section.title}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {section.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
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
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>
            &copy; {year} {brand}. All rights reserved.
          </p>
          {legal && (
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>
              {legal}
            </p>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.5fr repeat(${sections.length}, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
}
