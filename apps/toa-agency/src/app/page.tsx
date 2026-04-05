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
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Agency</span>
        </div>
        <nav style={navContainerStyle}>
          <div style={navLinksStyle}>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Agents</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Marketplace</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Docs</a>
          </div>
          <button style={ctaButtonStyle}>Deploy Agent</button>
        </nav>
      </header>

      <section style={heroStyle}>
        <div style={eyebrowStyle}>Your AI Workforce</div>
        <h1 style={h1Style}>Deploy intelligence{'\n'}at any scale.</h1>
        <p style={leadStyle}>
          A marketplace and orchestration layer for AI agents — pre-built, customizable, and enterprise-ready for any workflow or mission.
        </p>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Deploy Agent</button>
          <button style={secondaryButtonStyle}>Browse Agents</button>
        </div>
      </section>

      <section style={statsStyle}>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>340+</div>
          <div style={statLabelStyle}>Agents</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>18K</div>
          <div style={statLabelStyle}>Tasks / day</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>99.9%</div>
          <div style={statLabelStyle}>Reliability</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>SOC 2</div>
          <div style={statLabelStyle}>Compliant</div>
        </div>
      </section>

      <section style={featuresStyle}>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Pre-Built Agent Library</div>
          <p style={featureDescStyle}>Deploy agents instantly from our curated library covering customer service, data processing, and more.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Custom Workflows</div>
          <p style={featureDescStyle}>Compose agents into workflows tailored to your exact business processes and operational requirements.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Enterprise Security</div>
          <p style={featureDescStyle}>SOC 2 compliance, encryption, audit logs, and VPC endpoints for regulated enterprise environments.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Real-Time Analytics</div>
          <p style={featureDescStyle}>Dashboard monitoring, performance metrics, and cost tracking for every agent and workflow running.</p>
        </div>
      </section>

      <section style={ctaSectionStyle}>
        <h2 style={ctaHeadlineStyle}>Start Deploying</h2>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Get Started</button>
          <button style={secondaryButtonStyle}>View Demo</button>
        </div>
      </section>

      <footer style={footerStyle}>
        <div>TOA Agency</div>
        <div>Copyright 2026. All rights reserved.</div>
      </footer>
    </div>
  );
}
