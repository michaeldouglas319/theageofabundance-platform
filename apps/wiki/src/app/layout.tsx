import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'GenWiki — The Free Encyclopedia',
  description: 'The free encyclopedia that anyone can generate',
};

function WikiLogo() {
  return (
    <div className="flex items-center gap-3 px-3 py-2">
      <div className="w-[50px] h-[50px] flex items-center justify-center text-3xl">
        🌐
      </div>
      <div>
        <div style={{ fontFamily: "'Linux Libertine', Georgia, serif", fontSize: '1.3em', letterSpacing: '-0.02em' }}>
          GenWiki
        </div>
        <div className="text-xs text-gray-600" style={{ fontSize: '0.7em', letterSpacing: '0.04em' }}>
          The Free Encyclopedia
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Top bar */}
        <div style={{ background: '#fff', borderBottom: '1px solid #a7d7f9', padding: '0 8px' }}>
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs py-1">
              <span className="text-gray-600">Not logged in</span>
              <a href="#">Talk</a>
              <a href="#">Contributions</a>
              <a href="#" className="font-bold text-[var(--wiki-blue)]">Create account</a>
              <a href="#" className="font-bold text-[var(--wiki-blue)]">Log in</a>
            </div>
            <form action="/search" method="GET" className="flex items-center gap-1 py-1">
              <input
                type="search"
                name="q"
                role="searchbox"
                placeholder="Search GenWiki"
                className="border border-[#a2a9b1] rounded-l px-2 py-[3px] text-sm w-[220px] outline-none focus:border-[#36c]"
                style={{ fontSize: '13px' }}
              />
              <button type="submit" className="bg-[#f8f9fa] border border-[#a2a9b1] rounded-r px-3 py-[3px] text-xs hover:bg-[#eaecf0]">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto flex">
          {/* Sidebar */}
          <nav style={{ width: '160px', minWidth: '160px', background: 'var(--wiki-sidebar-bg)', borderRight: '1px solid #c8ccd1', padding: '8px 0', fontSize: '0.82em' }}>
            <div className="px-3 py-1">
              <Link href="/"><WikiLogo /></Link>
            </div>
            <div className="mt-2">
              <div className="px-3 py-1 font-bold text-[#54595d] text-xs uppercase tracking-wide">Navigation</div>
              <Link href="/" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Main page</Link>
              <Link href="/search" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Contents</Link>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Current events</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Random article</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">About GenWiki</a>
            </div>
            <div className="mt-3">
              <div className="px-3 py-1 font-bold text-[#54595d] text-xs uppercase tracking-wide">Contribute</div>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Help</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Learn to edit</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Community portal</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Recent changes</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Upload file</a>
            </div>
            <div className="mt-3">
              <div className="px-3 py-1 font-bold text-[#54595d] text-xs uppercase tracking-wide">Tools</div>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">What links here</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Related changes</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Special pages</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Permanent link</a>
              <a href="#" className="block px-3 py-[2px] hover:bg-[#eaecf0]">Page information</a>
            </div>
          </nav>

          {/* Main content */}
          <main style={{ flex: 1, padding: '0 24px 40px', minHeight: '80vh' }}>
            {children}
          </main>
        </div>

        {/* Footer */}
        <footer style={{ background: 'var(--wiki-sidebar-bg)', borderTop: '1px solid #a2a9b1', padding: '12px 24px', fontSize: '0.75em', color: '#54595d', textAlign: 'center' }}>
          <div className="max-w-[1200px] mx-auto">
            Content is available under <a href="#">Creative Commons Attribution-ShareAlike License</a> &bull;
            <a href="#"> Privacy policy</a> &bull;
            <a href="#"> About GenWiki</a> &bull;
            <a href="#"> Disclaimers</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
