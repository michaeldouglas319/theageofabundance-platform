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
          Shop
        </a>
        <nav style={navContainerStyle}>
          <div style={navLinksStyle}>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Products</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Collections</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Brands</a>
          </div>
          <button style={ctaButtonStyle}>Shop Now</button>
        </nav>
      </header>

      <section style={heroStyle}>
        <div style={eyebrowStyle}>Curated for the Abundant Life</div>
        <h1 style={h1Style}>Goods that align{'\n'}with your values.</h1>
        <p style={leadStyle}>
          A curated marketplace of premium, sustainable products selected for quality, ethics, and alignment with the abundant life.
        </p>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Shop Now</button>
          <button style={secondaryButtonStyle}>Browse Collections</button>
        </div>
      </section>

      <section style={statsStyle}>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>2,400+</div>
          <div style={statLabelStyle}>Products</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>180</div>
          <div style={statLabelStyle}>Brands</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>98%</div>
          <div style={statLabelStyle}>Satisfaction</div>
        </div>
        <div style={statItemStyle}>
          <div style={statNumberStyle}>Carbon</div>
          <div style={statLabelStyle}>Neutral shipping</div>
        </div>
      </section>

      <section style={featuresStyle}>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Expert Curation</div>
          <p style={featureDescStyle}>Hand-selected items evaluated for quality, ethics, and alignment with your values and lifestyle.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Sustainable Standards</div>
          <p style={featureDescStyle}>Every brand meets rigorous sustainability and ethical sourcing criteria across our entire catalog.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Community Reviews</div>
          <p style={featureDescStyle}>Real feedback from members about quality, durability, and actual impact of every product offered.</p>
        </div>
        <div style={featureItemStyle}>
          <div style={featureTitleStyle}>Global Delivery</div>
          <p style={featureDescStyle}>Fast, reliable shipping to 150+ countries with full transparency on environmental impact per order.</p>
        </div>
      </section>

      <section style={ctaSectionStyle}>
        <h2 style={ctaHeadlineStyle}>Browse the Collection</h2>
        <div style={heroCTAContainerStyle}>
          <button style={primaryButtonStyle}>Start Shopping</button>
          <button style={secondaryButtonStyle}>View Brands</button>
        </div>
      </section>

      <footer style={footerStyle}>
        <div>TOA Shop</div>
        <div>Copyright 2026. All rights reserved.</div>
      </footer>
    </div>
  );
}
