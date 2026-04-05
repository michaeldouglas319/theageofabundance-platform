import type { Metadata } from 'next'
import './globals.css'
import { Home, Compass, Users, Bell, Mail, Bookmark, User, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Net - Social Community Platform',
  description: 'The Age of Abundance Social Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f13]">
        <div className="flex h-screen">
          {/* Left Sidebar */}
          <div className="fixed left-0 top-0 h-screen w-64 bg-[#0f0f13] border-r border-[#2d2d3d] p-6 flex flex-col">
            <div className="text-2xl font-bold mb-8 text-white">◈ Net</div>

            <nav className="flex-1 space-y-4">
              {[
                { icon: Home, label: 'Home', href: '#' },
                { icon: Compass, label: 'Explore', href: '#' },
                { icon: Users, label: 'Communities', href: '#' },
                { icon: Bell, label: 'Notifications', href: '#' },
                { icon: Mail, label: 'Messages', href: '#' },
                { icon: Bookmark, label: 'Bookmarks', href: '#' },
                { icon: User, label: 'Profile', href: '#' },
                { icon: Settings, label: 'Settings', href: '#' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#1a1a24] transition text-[#9ca3af] hover:text-white"
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="ml-64 flex-1 flex">
            <div className="flex-1 border-r border-[#2d2d3d] overflow-y-auto">
              {children}
            </div>

            {/* Right Sidebar */}
            <div className="w-72 bg-[#0f0f13] border-l border-[#2d2d3d] p-6 hidden lg:block">
              {/* Trending Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Trending</h3>
                <div className="space-y-3">
                  {[
                    { topic: '#Abundance', posts: '45.2K' },
                    { topic: '#FutureOfWork', posts: '32.1K' },
                    { topic: '#QuantumComputing', posts: '28.5K' },
                    { topic: '#SustainableTech', posts: '19.8K' },
                    { topic: '#AIRevolution', posts: '15.6K' },
                  ].map((trend) => (
                    <div
                      key={trend.topic}
                      className="p-3 rounded-lg bg-[#1a1a24] hover:bg-[#252535] transition cursor-pointer"
                    >
                      <div className="font-semibold text-white">{trend.topic}</div>
                      <div className="text-xs text-[#9ca3af]">{trend.posts} Posts</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Communities to Join */}
              <div>
                <h3 className="text-xl font-bold mb-4">Communities to Join</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Abundance Builders', members: '12.4K' },
                    { name: 'Tech Futures', members: '8.9K' },
                    { name: 'Wellness Circle', members: '6.2K' },
                  ].map((community) => (
                    <div
                      key={community.name}
                      className="p-3 rounded-lg bg-[#1a1a24] hover:bg-[#252535] transition"
                    >
                      <div className="font-semibold text-white">{community.name}</div>
                      <div className="text-xs text-[#9ca3af] mb-2">{community.members} members</div>
                      <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-3 py-1 rounded text-sm transition">
                        Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
