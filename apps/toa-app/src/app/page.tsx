const platforms = [
  { tld: '.me',     label: 'Health',      desc: 'Wellness tracking and optimization for every dimension of life.' },
  { tld: '.shop',   label: 'Shop',        desc: 'Curated goods aligned with the abundant, conscious life.' },
  { tld: '.org',    label: 'Foundation',  desc: 'Nonprofit research and advocacy for human flourishing.' },
  { tld: '.net',    label: 'Network',     desc: 'Global community of abundance seekers and changemakers.' },
  { tld: '.agency', label: 'Agency',      desc: 'Deploy intelligent AI agents for any mission or workflow.' },
  { tld: '.cloud',  label: 'Cloud',       desc: 'Enterprise infrastructure built for abundance builders.' },
  { tld: '.space',  label: 'Space',       desc: 'AI-powered workspace for creators and teams.' },
  { tld: '.wiki',   label: 'Wiki',        desc: 'Open knowledge base for the science of flourishing.' },
];

const stats = [
  { num: '8',     label: 'Platform properties' },
  { num: '40K+',  label: 'Active members' },
  { num: '99.98%',label: 'Uptime SLA' },
  { num: '12',    label: 'Countries served' },
];

export default function Page() {
  return (
    <div style={{ background: 'var(--surface-0)', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)', minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>

      {/* Nav */}
      <header style={{ background: 'var(--surface-1)', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1rem,4vw,2rem)', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: 15 }}>
            <span style={{ width: 26, height: 26, background: 'var(--text-primary)', color: 'var(--surface-0)', borderRadius: 4, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.02em', flexShrink: 0 }}>TOA</span>
            Platform
          </a>
          <a href="#" style={{ background: 'var(--interactive)', color: 'var(--interactive-fg)', padding: '7px 16px', borderRadius: 'var(--radius)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Explore</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'var(--surface-0)', padding: 'clamp(5rem,12vw,9rem) clamp(1rem,4vw,2rem) clamp(3rem,6vw,5rem)', textAlign: 'center', flex: 1 }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 24 }}>The Age of Abundance</p>
        <h1 style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--text-primary)', marginBottom: 24, maxWidth: 840, marginLeft: 'auto', marginRight: 'auto' }}>
          One ecosystem.<br />Infinite possibility.
        </h1>
        <p style={{ fontSize: 'clamp(1rem,2vw,1.175rem)', color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Eight integrated platforms unified by a single mission: advancing human flourishing at every scale.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#ecosystem" style={{ background: 'var(--interactive)', color: 'var(--interactive-fg)', padding: '11px 24px', borderRadius: 'var(--radius)', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Explore the Ecosystem</a>
          <a href="#mission" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-default)', padding: '11px 24px', borderRadius: 'var(--radius)', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Our Mission</a>
        </div>
      </section>

      {/* Stats */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))' }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ padding: '2.5rem 2rem', borderRight: i < stats.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
            <div style={{ fontSize: 'clamp(1.875rem,4vw,3rem)', fontWeight: 700, letterSpacing: '-0.04em', color: 'var(--text-primary)', lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Ecosystem */}
      <section id="ecosystem" style={{ padding: 'clamp(4rem,8vw,6rem) clamp(1rem,4vw,2rem)', background: 'var(--surface-0)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Ecosystem</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.15 }}>Every dimension of abundance</h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 500, lineHeight: 1.65, marginBottom: 48 }}>
            Each platform stands alone and grows stronger together — vertically integrated across health, commerce, community, and infrastructure.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 1, background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 8, overflow: 'hidden' }}>
            {platforms.map((p) => (
              <div key={p.tld} style={{ background: 'var(--surface-1)', padding: '1.75rem 2rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>theageofabundance{p.tld}</span>
                <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{p.label}</div>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="mission" style={{ background: 'var(--surface-1)', borderTop: '1px solid var(--border-subtle)', padding: 'clamp(4rem,8vw,6rem) clamp(1rem,4vw,2rem)', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>Get Involved</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.25rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 16, lineHeight: 1.2 }}>Join the movement</h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 32 }}>
            Whether you are building, researching, or growing — there is a place for you in this ecosystem.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" style={{ background: 'var(--interactive)', color: 'var(--interactive-fg)', padding: '11px 24px', borderRadius: 'var(--radius)', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Create Account</a>
            <a href="#" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-default)', padding: '11px 24px', borderRadius: 'var(--radius)', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>Read the Mission</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--surface-1)', borderTop: '1px solid var(--border-subtle)', padding: '2rem clamp(1rem,4vw,2rem)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>The Age of Abundance</span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()}. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
