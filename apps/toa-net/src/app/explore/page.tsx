'use client'

import { TrendingUp, Users } from 'lucide-react'

export default function ExplorePage() {
  const trendingTopics = [
    { id: 1, topic: '#Abundance', posts: '45.2K', growth: '+12%' },
    { id: 2, topic: '#FutureOfWork', posts: '32.1K', growth: '+8%' },
    { id: 3, topic: '#QuantumComputing', posts: '28.5K', growth: '+15%' },
    { id: 4, topic: '#SustainableTech', posts: '19.8K', growth: '+6%' },
    { id: 5, topic: '#AIRevolution', posts: '15.6K', growth: '+23%' },
    { id: 6, topic: '#DecentralizedWeb', posts: '14.2K', growth: '+9%' },
    { id: 7, topic: '#QuantumBiology', posts: '12.8K', growth: '+11%' },
    { id: 8, topic: '#SpaceExploration', posts: '10.5K', growth: '+18%' },
  ]

  const featuredCommunities = [
    { id: 1, name: 'Abundance Builders', members: '12.4K', description: 'Building the future with abundance mindset' },
    { id: 2, name: 'Tech Futures', members: '8.9K', description: 'Exploring emerging technologies and their impact' },
    { id: 3, name: 'Wellness Circle', members: '6.2K', description: 'Health, wellness, and sustainable living' },
    { id: 4, name: 'Quantum Minds', members: '5.8K', description: 'Quantum computing and physics discussions' },
    { id: 5, name: 'Green Innovation', members: '7.1K', description: 'Sustainable technology and eco solutions' },
    { id: 6, name: 'AI Collective', members: '9.3K', description: 'AI development and ethical implications' },
  ]

  return (
    <main className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-[#0f0f13] border-b border-[#2d2d3d] p-6 sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-white">Explore</h1>
        <p className="text-[#9ca3af] mt-1">Discover trending topics and communities</p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {/* Trending Topics */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp size={24} className="text-[#7c3aed]" />
            <h2 className="text-2xl font-bold text-white">Trending Topics</h2>
          </div>

          <div className="space-y-3">
            {trendingTopics.map((trend) => (
              <div
                key={trend.id}
                className="bg-[#1a1a24] border border-[#2d2d3d] p-4 rounded-lg hover:bg-[#252535] transition cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{trend.topic}</h3>
                    <p className="text-sm text-[#9ca3af]">{trend.posts} posts</p>
                  </div>
                  <div className="text-sm font-semibold text-green-400">{trend.growth}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Communities */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Users size={24} className="text-[#7c3aed]" />
            <h2 className="text-2xl font-bold text-white">Featured Communities</h2>
          </div>

          <div className="space-y-3">
            {featuredCommunities.map((community) => (
              <div
                key={community.id}
                className="bg-[#1a1a24] border border-[#2d2d3d] p-4 rounded-lg hover:bg-[#252535] transition"
              >
                <h3 className="text-lg font-bold text-white">{community.name}</h3>
                <p className="text-sm text-[#9ca3af] my-1">{community.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-[#6b7280]">{community.members} members</span>
                  <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-4 py-1 rounded-full text-sm transition">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
