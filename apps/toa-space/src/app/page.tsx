'use client'

import { ArrowRight, Zap } from 'lucide-react'

export default function Home() {
  const templates = [
    { id: 1, name: 'Portfolio', emoji: '🎨' },
    { id: 2, name: 'Landing Page', emoji: '🚀' },
    { id: 3, name: 'SaaS', emoji: '💼' },
    { id: 4, name: 'Blog', emoji: '📝' },
    { id: 5, name: 'E-commerce', emoji: '🛍️' },
    { id: 6, name: 'Community', emoji: '👥' },
    { id: 7, name: 'Dashboard', emoji: '📊' },
    { id: 8, name: 'Agency', emoji: '🎯' },
  ]

  const features = [
    {
      title: 'Drag & Drop Builder',
      description: 'Intuitive visual editor that makes building websites effortless',
    },
    {
      title: 'AI-Powered Generation',
      description: 'Generate layouts and content with artificial intelligence',
    },
    {
      title: 'One-Click Vercel Deploy',
      description: 'Deploy your site to production with a single click',
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time',
    },
  ]

  const pricing = [
    {
      plan: 'Free',
      price: 'Free',
      features: [
        'Up to 3 sites',
        'Basic templates',
        'Shared hosting',
        'Community support',
        '100MB storage',
      ],
    },
    {
      plan: 'Pro',
      price: '$29/mo',
      features: [
        'Unlimited sites',
        'Premium templates',
        'Fast hosting',
        'Priority support',
        '5GB storage',
        'Custom domain',
      ],
      highlighted: true,
    },
    {
      plan: 'Team',
      price: '$99/mo',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Advanced analytics',
        '24/7 support',
        '100GB storage',
        'Advanced security',
      ],
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build anything. Ship today.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The visual platform builder for the Age of Abundance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center justify-center space-x-2">
              <span>Start Building Free</span>
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition">
              See Templates
            </button>
          </div>

          {/* Hero Graphic */}
          <div className="w-full h-96 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-xl mb-16"></div>
        </div>
      </section>

      {/* Template Gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-4 text-center">Template Gallery</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose from our collection of professionally designed templates
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group cursor-pointer bg-gradient-to-br from-indigo-100 to-purple-100 hover:from-indigo-200 hover:to-purple-200 rounded-lg aspect-square flex flex-col items-center justify-center transition transform hover:scale-105"
            >
              <div className="text-5xl mb-3">{template.emoji}</div>
              <h3 className="font-semibold text-gray-900">{template.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                    <Zap size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-4 text-center">Simple Pricing</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose the plan that works for you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((tier) => (
            <div
              key={tier.plan}
              className={`rounded-lg border-2 p-8 transition ${
                tier.highlighted
                  ? 'border-indigo-600 bg-indigo-50 transform scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.plan}</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-6">{tier.price}</div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-indigo-600 mt-1">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  tier.highlighted
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to build?</h2>
          <p className="text-xl mb-8">Start creating amazing websites today with AoA Space</p>
          <button className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition">
            Start Building Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Templates</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Docs</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
                <li><a href="#" className="hover:text-white transition">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">&copy; 2026 AoA Space. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
