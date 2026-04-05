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
    backgroundColor: 'var(--border-subtle)',
    padding: '80px 32px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1px',
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
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: 15 }}>
          <span style={{ width: 26, height: 26, background: 'var(--text-primary)', color: 'var(--surface-0)', borderRadius: 4, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.02em', flexShrink: 0 }}>TOA</span>
          Space
        </a>
        <nav style={navContainerStyle}>
          <div style={navLinksStyle}>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Templates</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Examples</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</a>
          </div>
          <button style={ctaButtonStyle}>Start Building</button>
        </nav>
      </header>

      <section style={heroStyle}>
        <div style={eyebrowStyle}>Build Without Limits</div>
        <h1 style={h1Style}>Your workspace.{'\n'}Your rules.</h1>
        <p style={leadStyle}>
          An AI-powered visual builder for creators, founders, and teams who want to ship beautiful products without engineering overhead.
        </p>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Start Building</button>
          <button style={secondaryButtonStyle}>View Templates</button>
        </div>
      </section>

      <section style={statsStyle}>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>12K+</div>
          <div style={statLabelStyle}>Sites built</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>200+</div>
          <div style={statLabelStyle}>Templates</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>4 min</div>
          <div style={statLabelStyle}>Average publish time</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>Pro-code</div>
          <div style={statLabelStyle}>No-code to</div>
        </div>
      </section>

      <section style={featuresStyle}>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Visual Drag-and-Drop</div>
          <p style={featureDescStyle}>Intuitive interface for creating layouts, components, and interactions without touching code.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>AI Content Assistant</div>
          <p style={featureDescStyle}>Generate copy, images, and designs with AI, perfectly integrated into your creative workflow.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Team Collaboration</div>
          <p style={featureDescStyle}>Real-time collaboration, comments, and version history for distributed creative teams.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>One-Click Publish</div>
          <p style={featureDescStyle}>Deploy to production instantly with automatic optimization, CDN distribution, and custom domains.</p>
        </div>
      </section>

      <section style={ctaSectionStyle}>
        <h2 style={ctaHeadlineStyle}>Build Something Today</h2>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Get Started Free</button>
          <button style={secondaryButtonStyle}>View Gallery</button>
        </div>
      </section>

      <footer style={footerStyle}>
        <div>TOA Space</div>
        <div>Copyright 2026. All rights reserved.</div>
      </footer>
    </div>
  );
}
