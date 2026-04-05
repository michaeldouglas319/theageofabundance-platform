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
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Foundation</span>
        </div>
        <nav style={navContainerStyle}>
          <div style={navLinksStyle}>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Mission</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Research</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Initiatives</a>
          </div>
          <button style={ctaButtonStyle}>Support the Mission</button>
        </nav>
      </header>

      <section style={heroStyle}>
        <div style={eyebrowStyle}>Advancing Human Flourishing</div>
        <h1 style={h1Style}>The science of{'\n'}human flourishing.</h1>
        <p style={leadStyle}>
          A nonprofit organization working at the intersection of technology, health, and social science to advance the conditions for abundant human lives.
        </p>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Support the Mission</button>
          <button style={secondaryButtonStyle}>View Research</button>
        </div>
      </section>

      <section style={statsStyle}>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>12</div>
          <div style={statLabelStyle}>Research programs</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>80+</div>
          <div style={statLabelStyle}>Partner institutions</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>6</div>
          <div style={statLabelStyle}>Countries</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>$4.2M</div>
          <div style={statLabelStyle}>Grants awarded</div>
        </div>
      </section>

      <section style={featuresStyle}>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Frontier Research</div>
          <p style={featureDescStyle}>Cutting-edge studies at the intersection of health, technology, and human science advancing the field forward.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Open Publishing</div>
          <p style={featureDescStyle}>All research published openly and freely accessible, democratizing knowledge about human flourishing.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Community Grants</div>
          <p style={featureDescStyle}>Funding programs supporting researchers and organizations aligned with our mission to advance abundance.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Policy Advocacy</div>
          <p style={featureDescStyle}>Evidence-based recommendations shaping policy at local, national, and international levels.</p>
        </div>
      </section>

      <section style={ctaSectionStyle}>
        <h2 style={ctaHeadlineStyle}>Join the Foundation</h2>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Donate Now</button>
          <button style={secondaryButtonStyle}>Learn More</button>
        </div>
      </section>

      <footer style={footerStyle}>
        <div>TOA Foundation</div>
        <div>Copyright 2026. All rights reserved.</div>
      </footer>
    </div>
  );
}
