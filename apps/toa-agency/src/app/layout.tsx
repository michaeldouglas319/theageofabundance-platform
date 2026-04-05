import type { Metadata } from 'next'
import './globals.css'
import { Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AoA Agency - Agentic Services Platform',
  description: 'Connect, deploy, and orchestrate AI agents at scale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Top Navigation */}
        <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Zap size={28} className="text-electric-blue" />
                <span className="text-xl font-bold">AoA Agency</span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Agents
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  MCPs
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Workflows
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Docs
                </a>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Pricing
                </a>
              </div>

              <button className="bg-electric-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition font-semibold">
                Connect Agent
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid-pattern bg-black min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
