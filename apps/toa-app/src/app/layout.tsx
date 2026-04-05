import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Age of Abundance - Platform Hub',
  description: 'Explore all platforms and properties of the Age of Abundance ecosystem.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        {/* Header */}
        <header className="border-b border-gray-800 bg-gray-900 sticky top-0 z-50">
          <div className="container h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">⬡</span>
              </div>
              <span className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                Age of Abundance
              </span>
            </Link>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search platforms..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            <nav className="flex items-center gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors font-medium text-sm"
              >
                All Apps
              </Link>
              <Link
                href="#"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Explore
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
