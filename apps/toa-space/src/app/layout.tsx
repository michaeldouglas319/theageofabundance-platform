import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AoA Space - Visual Platform Builder',
  description: 'Build anything. Ship today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
