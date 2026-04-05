import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'AoA Shop',
  description: 'Premium lifestyle products for the abundant life',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111111]">
        {/* Announcement Bar */}
        <div className="bg-[#111111] text-white py-2 text-center text-sm font-medium">
          Free shipping on orders over $75
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#111111]">
              AoA
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/shop" className="text-[#111111] hover:text-[#c9a96e] transition font-medium">
                Shop
              </Link>
              <Link href="/products" className="text-[#111111] hover:text-[#c9a96e] transition font-medium">
                Collections
              </Link>
              <Link href="/" className="text-[#111111] hover:text-[#c9a96e] transition font-medium">
                About
              </Link>
            </nav>

            <div className="flex items-center gap-6">
              <Link href="/cart" className="relative">
                <button className="text-[#111111] hover:text-[#c9a96e] transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0l2 9m-12 0h14" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-[#c9a96e] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    3
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#111111] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-[#c9a96e] mb-4">Shop</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/products" className="hover:text-[#c9a96e] transition">All Products</Link></li>
                  <li><Link href="/products" className="hover:text-[#c9a96e] transition">New Arrivals</Link></li>
                  <li><Link href="/products" className="hover:text-[#c9a96e] transition">Best Sellers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#c9a96e] mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-[#c9a96e] transition">About Us</Link></li>
                  <li><Link href="/" className="hover:text-[#c9a96e] transition">Blog</Link></li>
                  <li><Link href="/" className="hover:text-[#c9a96e] transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#c9a96e] mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-[#c9a96e] transition">Privacy</Link></li>
                  <li><Link href="/" className="hover:text-[#c9a96e] transition">Terms</Link></li>
                  <li><Link href="/" className="hover:text-[#c9a96e] transition">Shipping</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#c9a96e] mb-4">Newsletter</h4>
                <form className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-[#222222] text-white rounded border border-[#c9a96e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                  />
                  <button className="px-4 py-2 bg-[#c9a96e] text-[#111111] font-semibold rounded hover:bg-[#b8985d] transition">
                    Subscribe
                  </button>
                </form>
                <div className="flex gap-4 mt-4">
                  <Link href="/" className="text-[#c9a96e] hover:text-white transition">f</Link>
                  <Link href="/" className="text-[#c9a96e] hover:text-white transition">ig</Link>
                  <Link href="/" className="text-[#c9a96e] hover:text-white transition">tw</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-[#333333] pt-8 text-center text-sm">
              <p>&copy; 2026 The Age of Abundance. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
