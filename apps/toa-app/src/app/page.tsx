'use client'

import Link from 'next/link'
import { ExternalLink, Leaf, ShoppingBag, Building2, Users, Zap, Hexagon, Star } from 'lucide-react'

interface Platform {
  id: string
  name: string
  tld: string
  emoji: string
  color: string
  description: string
  status: 'Live' | 'Beta' | 'Coming Soon'
  tech: string
  bgGradient: string
  iconGradient: string
}

const platforms: Platform[] = [
  {
    id: 'me',
    name: 'Personal Health & Wellness',
    tld: '.me',
    emoji: '🌿',
    color: 'emerald',
    description: 'Personal Health & Wellness Platform',
    status: 'Live',
    tech: 'Next.js 15',
    bgGradient: 'from-emerald-500/10 to-emerald-600/10',
    iconGradient: 'gradient-icon-me',
  },
  {
    id: 'shop',
    name: 'Premium Lifestyle Store',
    tld: '.shop',
    emoji: '🛍️',
    color: 'amber',
    description: 'Premium Lifestyle Storefront',
    status: 'Live',
    tech: 'Next.js 15',
    bgGradient: 'from-amber-500/10 to-amber-600/10',
    iconGradient: 'gradient-icon-shop',
  },
  {
    id: 'org',
    name: 'Abundance Foundation',
    tld: '.org',
    emoji: '🏛️',
    color: 'blue',
    description: 'The Age of Abundance Foundation',
    status: 'Live',
    tech: 'Next.js 15',
    bgGradient: 'from-blue-500/10 to-blue-600/10',
    iconGradient: 'gradient-icon-org',
  },
  {
    id: 'net',
    name: 'Community Platform',
    tld: '.net',
    emoji: '💬',
    color: 'violet',
    description: 'Community Social Platform',
    status: 'Beta',
    tech: 'Next.js 15',
    bgGradient: 'from-violet-500/10 to-violet-600/10',
    iconGradient: 'gradient-icon-net',
  },
  {
    id: 'agency',
    name: 'Agentic Services',
    tld: '.agency',
    emoji: '🤖',
    color: 'sky',
    description: 'Agentic Services Marketplace',
    status: 'Beta',
    tech: 'Next.js 15',
    bgGradient: 'from-sky-500/10 to-sky-600/10',
    iconGradient: 'gradient-icon-agency',
  },
  {
    id: 'cloud',
    name: 'Cloud Platform',
    tld: '.cloud',
    emoji: '☁️',
    color: 'cyan',
    description: 'SaaS Cloud Provider Platform',
    status: 'Coming Soon',
    tech: 'Next.js 15',
    bgGradient: 'from-cyan-500/10 to-cyan-600/10',
    iconGradient: 'gradient-icon-cloud',
  },
  {
    id: 'space',
    name: 'Visual Builder',
    tld: '.space',
    emoji: '🪐',
    color: 'indigo',
    description: 'Visual Website Builder',
    status: 'Beta',
    tech: 'Next.js 15',
    bgGradient: 'from-indigo-500/10 to-indigo-600/10',
    iconGradient: 'gradient-icon-space',
  },
  {
    id: 'app',
    name: 'Platform Hub',
    tld: '.app',
    emoji: '⬡',
    color: 'gradient',
    description: 'Platform Hub & Directory',
    status: 'Live',
    tech: 'Next.js 15',
    bgGradient: 'from-purple-500/10 via-blue-500/10 to-cyan-500/10',
    iconGradient: 'gradient-icon-app',
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Live':
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    case 'Beta':
      return 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    case 'Coming Soon':
      return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
  }
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
              Explore the Ecosystem
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6 text-white">Age of Abundance</h1>
          <p className="text-xl text-gray-400 mb-4 leading-relaxed">
            A unified ecosystem of eight interconnected platforms designed to unlock human potential.
          </p>
          <p className="text-lg text-gray-500">
            From personal wellness and community connection to enterprise innovation—everything you need for a world of shared prosperity.
          </p>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-24">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">All 8 Platforms</h2>
            <p className="text-gray-400">
              Every platform in the Age of Abundance ecosystem is built with Next.js 15, React 19, and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {platforms.map((platform) => (
              <a
                key={platform.id}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.bgGradient} opacity-50 group-hover:opacity-80 transition-opacity`}></div>

                {/* Card content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon area */}
                  <div className={`w-12 h-12 ${platform.iconGradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-xl">{platform.emoji}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white">{platform.name}</h3>
                      <span className="text-xs text-gray-500">{platform.tld}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">{platform.description}</p>
                  </div>

                  {/* Footer */}
                  <div className="space-y-3 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{platform.tech}</span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold border ${getStatusColor(platform.status)}`}>
                        {platform.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between group/link">
                      <span className="text-xs font-medium text-purple-400 group-hover/link:text-purple-300">
                        Explore Platform
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover/link:text-purple-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-24 border-y border-gray-800">
        <div className="container">
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">8</div>
              <p className="text-gray-400">Integrated Platforms</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1200+</div>
              <p className="text-gray-400">Combined Features</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2024</div>
              <p className="text-gray-400">Launch Year</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1M+</div>
              <p className="text-gray-400">Active Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-8">What We're Building</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              The Age of Abundance is a movement to reimagine human potential in the digital age. We believe that technology, when designed with intent and ethics, can unlock prosperity for everyone—not just the privileged few.
            </p>
            <p>
              Our ecosystem of platforms is built on a shared vision: that abundance isn't a scarce resource to compete for, but an emerging reality we can collectively create. Through personal wellness platforms that prioritize mental and physical health, community spaces that foster genuine connection, and agentic services that augment human capability, we're building the infrastructure of a more equitable future.
            </p>
            <p>
              Each platform serves a distinct purpose, yet they're all unified by a commitment to transparency, user autonomy, and shared value creation. We're not building walls; we're building bridges. Not hoarding data; we're empowering individuals. Not concentrating power; we're distributing it.
            </p>
            <p>
              The Age of Abundance isn't coming. It's being built, right now, by thousands of builders, creators, and believers across our ecosystem. You're invited to be part of it.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 border-t border-gray-800">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Start with any platform and experience the future of interconnected digital services.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Explore All Platforms
            </button>
            <button className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer info */}
      <section className="py-16 border-t border-gray-800 bg-gray-950/50">
        <div className="container text-center text-gray-500 text-sm">
          <p>
            Built with Next.js 15, React 19, Tailwind CSS, and Lucide React. Part of the Age of Abundance ecosystem.
          </p>
        </div>
      </section>
    </>
  )
}
