import type { Metadata } from 'next'
import './globals.css'
import { Cloud, BarChart3, Boxes, Database, HardDrive, Code2, FileText, Settings, Bell, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AoA Cloud - Cloud Infrastructure Platform',
  description: 'Deploy, manage, and scale your applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        <div className="flex h-screen">
          {/* Left Sidebar */}
          <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-zinc-800">
              <div className="flex items-center space-x-2">
                <Cloud size={28} className="text-blue-500" />
                <span className="text-xl font-bold">AoA Cloud</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {[
                { icon: BarChart3, label: 'Overview', href: '/' },
                { icon: Boxes, label: 'Projects', href: '/projects' },
                { icon: Code2, label: 'Deployments', href: '#' },
                { icon: Database, label: 'Databases', href: '#' },
                { icon: HardDrive, label: 'Storage', href: '#' },
                { icon: Code2, label: 'Functions', href: '#' },
                { icon: FileText, label: 'Logs', href: '#' },
                { icon: Settings, label: 'Settings', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Usage Mini-Meters */}
            <div className="p-4 border-t border-zinc-800 space-y-3">
              <div>
                <div className="text-xs text-zinc-400 mb-1">Compute Usage</div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '57%' }}></div>
                </div>
                <div className="text-xs text-zinc-500 mt-1">1,425 / 2,500 hrs</div>
              </div>
              <div>
                <div className="text-xs text-zinc-400 mb-1">Storage Usage</div>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '38%' }}></div>
                </div>
                <div className="text-xs text-zinc-500 mt-1">38 / 100 GB</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Bar */}
            <div className="bg-zinc-900 border-b border-zinc-800 px-8 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-zinc-400 text-sm">Org:</span>
                <button className="flex items-center space-x-2 hover:bg-zinc-800 px-3 py-1 rounded transition">
                  <span className="font-semibold">My Org</span>
                  <ChevronDown size={16} />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-zinc-800 rounded-lg transition">
                  <Bell size={20} />
                </button>
                <button className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
