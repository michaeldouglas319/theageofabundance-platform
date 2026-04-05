import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'AoA Wellness',
  description: 'Your health, abundant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0d3321] text-[#fefdf8]">
        <nav className="sticky top-0 z-50 bg-[#0d3321] border-b border-[#1a5c3a]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#4ade80]">
              ✦ Wellness
            </Link>

            <div className="flex items-center gap-8">
              <Link href="/" className="text-[#fefdf8] hover:text-[#4ade80] transition">
                Dashboard
              </Link>
              <Link href="/" className="text-[#fefdf8] hover:text-[#4ade80] transition">
                Nutrition
              </Link>
              <Link href="/" className="text-[#fefdf8] hover:text-[#4ade80] transition">
                Movement
              </Link>
              <Link href="/" className="text-[#fefdf8] hover:text-[#4ade80] transition">
                Sleep
              </Link>
              <Link href="/" className="text-[#fefdf8] hover:text-[#4ade80] transition">
                Community
              </Link>
            </div>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-[#1a5c3a] border-t border-[#0d3321] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-[#4ade80] mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-[#4ade80] transition">Dashboard</Link></li>
                  <li><Link href="/" className="hover:text-[#4ade80] transition">Features</Link></li>
                  <li><Link href="/" className="hover:text-[#4ade80] transition">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#4ade80] mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-[#4ade80] transition">About</Link></li>
                  <li><Link href="/" className="hover:text-[#4ade80] transition">Blog</Link></li>
                  <li><Link href="/" className="hover:text-[#4ade80] transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#4ade80] mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-[#4ade80] transition">Privacy</Link></li>
                  <li><Link href="/" className="hover:text-[#4ade80] transition">Terms</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#4ade80] mb-4">Social</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-[#4ade80] transition">Twitter</Link></li>
                  <li><Link href="/" className="hover:text-[#4ade80] transition">Instagram</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#0d3321] pt-8 text-center text-sm">
              <p>&copy; 2026 The Age of Abundance. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
