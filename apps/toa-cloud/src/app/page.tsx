import React from 'react';

export default function Page() {
  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: 'var(--surface-1)',
    borderBottom: '1px solid var(--border-subtle)',
    padding: '16px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '48px',
    alignItems: 'center',
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    fontSize: '14px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
  };

  const ctaButtonStyle: React.CSSProperties = {
    backgroundColor: 'var(--interactive)',
    color: 'var(--interactive-fg)',
    border: 'none',
    padding: '8px 20px',
    borderRadius: 'var(--radius)',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
  };

  const heroStyle: React.CSSProperties = {
    backgroundColor: 'var(--surface-0)',
    padding: '120px 32px',
    textAlign: 'center',
  };

  const eyebrowStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '24px',
    fontFamily: 'var(--font-sans)',
  };

  const h1Style: React.CSSProperties = {
    fontSize: '64px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)',
    marginBottom: '24px',
    lineHeight: 1.2,
    maxWidth: '800px',
    margin: '0 auto 24px',
    fontFamily: 'var(--font-sans)',
  };

  const leadStyle: React.CSSProperties = {
    fontSize: '18px',
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto 48px',
    lineHeight: 1.6,
    fontFamily: 'var(--font-sans)',
  };

  const heroCTAContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const primaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'var(--interactive)',
    color: 'var(--interactive-fg)',
    border: 'none',
    padding: '12px 32px',
    borderRadius: 'var(--radius)',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)',
    padding: '12px 32px',
    borderRadius: 'var(--radius)',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
  };

  const statsStyle: React.CSSProperties = {
    backgroundColor: 'var(--surface-0)',
    borderTop: '1px solid var(--border-subtle)',
    borderBottom: '1px solid var(--border-subtle)',
    padding: '64px 32px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
    textAlign: 'center',
  };

  const statItemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const statNumberStyle: React.CSSProperties = {
    fontSize: '40px',
    fontWeight: 700,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-sans)',
  };

  const featuresStyle: React.CSSProperties = {
    backgroundColor: 'var(--surface-0)',
    padding: '80px 32px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1px',
    backgroundColor: 'var(--border-subtle)',
  };

  const featureItemStyle: React.CSSProperties = {
    backgroundColor: 'var(--surface-1)',
    padding: '40px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const featureTitleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
  };

  const featureDescStyle: React.CSSProperties = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    fontFamily: 'var(--font-sans)',
  };

  const ctaSectionStyle: React.CSSProperties = {
    backgroundColor: 'var(--surface-1)',
    padding: '80px 32px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
  };

  const ctaHeadlineStyle: React.CSSProperties = {
    fontSize: '40px',
    fontWeight: 700,
    color: 'var(--text-primary)',
    maxWidth: '600px',
    fontFamily: 'var(--font-sans)',
  };

  const footerStyle: React.CSSProperties = {
    backgroundColor: 'var(--surface-1)',
    borderTop: '1px solid var(--border-subtle)',
    padding: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    color: 'var(--text-secondary)',
    fontFamily: 'var(--font-sans)',
  };

  return (
    <div style={{ backgroundColor: 'var(--surface-0)' }}>
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>TOA</div>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Cloud</span>
        </div>
        <nav style={navContainerStyle}>
          <div style={navLinksStyle}>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Features</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Status</a>
          </div>
          <button style={ctaButtonStyle}>Get Started</button>
        </nav>
      </header>

      <section style={heroStyle}>
        <div style={eyebrowStyle}>Deploy at the Speed of Thought</div>
        <h1 style={h1Style}>Infrastructure for{'\n'}abundance builders.</h1>
        <p style={leadStyle}>
          Zero-config deployment, global edge distribution, and intelligent auto-scaling — purpose-built for teams shipping fast.
        </p>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Get Started</button>
          <button style={secondaryButtonStyle}>View Features</button>
        </div>
      </section>

      <section style={statsStyle}>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>99.99%</div>
          <div style={statLabelStyle}>Uptime</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>28</div>
          <div style={statLabelStyle}>Edge regions</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>120K+</div>
          <div style={statLabelStyle}>Deployments</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>200ms</div>
          <div style={statLabelStyle}>Cold start</div>
        </div>
      </section>

      <section style={featuresStyle}>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Zero-Config Deploy</div>
          <p style={featureDescStyle}>Push your code and let us handle the rest. Automatic builds, testing, and global distribution in seconds.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Global Edge Network</div>
          <p style={featureDescStyle}>28 edge regions worldwide delivering content microseconds away from your users anywhere on Earth.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Intelligent Auto-Scale</div>
          <p style={featureDescStyle}>Request-aware scaling that anticipates demand and scales instantly without manual configuration or limits.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Full Observability</div>
          <p style={featureDescStyle}>Real-time metrics, logs, traces, and alerts giving you complete visibility into every deployment.</p>
        </div>
      </section>

      <section style={ctaSectionStyle}>
        <h2 style={ctaHeadlineStyle}>Start Building Free</h2>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Get Started</button>
          <button style={secondaryButtonStyle}>View Pricing</button>
        </div>
      </section>

      <footer style={footerStyle}>
        <div>TOA Cloud</div>
        <div>Copyright 2026. All rights reserved.</div>
      </footer>
    </div>
  );
}
