import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Age of Abundance Foundation',
  description: 'Working at the intersection of technology, health, and human potential.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Top gold accent bar */}
        <div className="h-1 bg-gold w-full"></div>

        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="container flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <h1 className="text-xl font-serif font-bold text-navy group-hover:text-gold transition-colors">
                The Age of Abundance Foundation
              </h1>
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/#mission"
                className="text-navy hover:text-gold transition-colors font-medium"
              >
                Mission
              </Link>
              <Link
                href="/initiatives"
                className="text-navy hover:text-gold transition-colors font-medium"
              >
                Initiatives
              </Link>
              <Link
                href="/#impact"
                className="text-navy hover:text-gold transition-colors font-medium"
              >
                Impact
              </Link>
              <Link
                href="/#donate"
                className="px-4 py-2 bg-gold text-white rounded hover:opacity-90 transition-opacity font-medium"
              >
                Give
              </Link>
              <Link
                href="/mission"
                className="text-navy hover:text-gold transition-colors font-medium"
              >
                About
              </Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-navy text-light py-16 mt-32">
          <div className="container">
            <div className="grid grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-gold font-serif text-lg mb-4">Foundation</h3>
                <p className="text-sm leading-relaxed">
                  We believe the future is abundant—for everyone. Through technology, health, and human potential, we're building a world of shared prosperity.
                </p>
              </div>
              <div>
                <h4 className="font-serif font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-gold transition-colors">
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gold transition-colors">
                      Initiatives
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gold transition-colors">
                      Impact Reports
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gold transition-colors">
                      Donate
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-gold transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gold transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gold transition-colors">
                      Annual Report
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif font-bold mb-4">Organization</h4>
                <p className="text-sm">
                  <span className="block font-bold mb-2">501(c)(3) Nonprofit</span>
                  EIN: 45-1234567
                </p>
              </div>
            </div>
            <div className="border-t border-gold pt-8 flex items-center justify-between">
              <p className="text-sm text-gray-400">
                © 2024 The Age of Abundance Foundation. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
