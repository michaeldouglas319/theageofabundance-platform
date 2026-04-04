import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'GenStudio — AI Art Studio',
  description: 'Create, browse, and organize AI-generated artwork',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar Navigation */}
          <aside
            style={{
              width: '72px',
              minWidth: '72px',
              background: 'var(--studio-surface)',
              borderRight: '1px solid var(--studio-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px 0',
              gap: '4px',
              position: 'sticky',
              top: 0,
              height: '100vh',
              overflowY: 'auto',
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              title="GenStudio"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                fontSize: '20px',
                fontWeight: '700',
                color: 'white',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(139, 92, 246, 0.3)',
              }}
              className="card-hover"
            >
              G
            </Link>

            {/* Explore */}
            <Link
              href="/"
              title="Explore Gallery"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--studio-text-muted)',
                textDecoration: 'none',
                fontSize: '10px',
                gap: '4px',
                transition: 'all 0.15s ease-out',
              }}
              className="hover:bg-[var(--studio-surface-2)] hover:text-[var(--studio-accent)]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
              <span style={{ fontWeight: '500', letterSpacing: '-0.01em' }}>Explore</span>
            </Link>

            {/* Create */}
            <Link
              href="/create"
              title="Create New Artwork"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--studio-text-muted)',
                textDecoration: 'none',
                fontSize: '10px',
                gap: '4px',
                transition: 'all 0.15s ease-out',
              }}
              className="hover:bg-[var(--studio-surface-2)] hover:text-[var(--studio-accent)]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <span style={{ fontWeight: '500', letterSpacing: '-0.01em' }}>Create</span>
            </Link>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* User Avatar */}
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '15px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '8px',
              }}
              title="User profile"
            >
              U
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Top Header Bar */}
            <header
              style={{
                height: '64px',
                borderBottom: '1px solid var(--studio-border)',
                background: 'var(--studio-surface)',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '24px',
                paddingRight: '24px',
                gap: '20px',
                position: 'sticky',
                top: 0,
                zIndex: 40,
              }}
            >
              {/* Search Bar */}
              <div style={{ flex: 1 }}>
                <input
                  type="search"
                  placeholder="Search artworks, prompts, models..."
                  style={{
                    background: 'var(--studio-bg)',
                    border: '1px solid var(--studio-border)',
                    borderRadius: '10px',
                    padding: '10px 16px',
                    color: 'var(--studio-text)',
                    width: '100%',
                    maxWidth: '480px',
                    fontSize: '14px',
                    outline: 'none',
                    fontWeight: '400',
                  }}
                />
              </div>

              {/* Filter Tags */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '13px',
                  color: 'var(--studio-text-muted)',
                }}
              >
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--studio-border)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    color: 'var(--studio-text-muted)',
                    fontSize: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                  className="hover:text-[var(--studio-accent)] hover:border-[var(--studio-accent)]"
                  title="Sort by trending"
                >
                  🔥 Trending
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--studio-border)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    color: 'var(--studio-text-muted)',
                    fontSize: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                  className="hover:text-[var(--studio-accent)] hover:border-[var(--studio-accent)]"
                  title="Featured artworks"
                >
                  ⭐ Featured
                </button>
              </div>
            </header>

            {/* Main Content */}
            <main
              style={{
                flex: 1,
                padding: '28px 32px',
                overflowY: 'auto',
              }}
            >
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
