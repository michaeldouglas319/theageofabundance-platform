import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'GenPulse',
  description: 'Technology, Science, Culture — and the future',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Black top bar */}
        <header style={{ background: 'var(--verge-black)', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', height: '52px', gap: '32px' }}>
            <Link href="/" style={{ color: 'white', fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
              Gen<span style={{ color: 'var(--verge-red)' }}>Pulse</span>
            </Link>
            <nav style={{ display: 'flex', gap: '24px', fontSize: '0.82rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Link href="/category/technology" style={{ color: '#bbb', transition: 'color 0.15s' }} className="hover:text-white">Tech</Link>
              <Link href="/category/science" style={{ color: '#bbb', transition: 'color 0.15s' }} className="hover:text-white">Science</Link>
              <Link href="/category/culture" style={{ color: '#bbb', transition: 'color 0.15s' }} className="hover:text-white">Culture</Link>
            </nav>
            <div style={{ flex: 1 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button style={{ background: 'none', border: 'none', color: '#bbb', cursor: 'pointer', fontSize: '14px' }}>🔍</button>
              <button style={{ background: 'var(--verge-red)', color: 'white', border: 'none', padding: '6px 14px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Subscribe</button>
            </div>
          </div>
        </header>

        <main role="main">{children}</main>

        <footer style={{ background: 'var(--verge-black)', color: '#888', padding: '40px 20px', marginTop: '60px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
            <span style={{ fontWeight: '900', color: 'white', fontSize: '1.1rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Gen<span style={{ color: 'var(--verge-red)' }}>Pulse</span></span>
            <span>&copy; 2026 GenPulse. A Generative Platform Project.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
