'use client'

import { Download, Star, User } from 'lucide-react'
import { use, useState } from 'react'

export default function AgentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [activeTab, setActiveTab] = useState('overview')

  const agent = {
    slug,
    name: 'Web Scraper',
    icon: '🕷️',
    rating: 4.8,
    reviews: 234,
    installs: '12.4K',
    author: 'Data Team',
    version: '1.2.3',
    description: 'Intelligent web scraping agent that can extract structured data from any website. Handles JavaScript rendering, pagination, and complex DOM structures.',
    longDescription: 'The Web Scraper agent is a powerful tool for automated data collection from websites. It combines intelligent HTML parsing with JavaScript execution capabilities to handle modern web applications. The agent supports custom selectors, automatic pagination, and data transformation pipelines.',
    features: [
      'JavaScript rendering support',
      'Automatic pagination',
      'Custom CSS selectors',
      'Data validation and transformation',
      'Rate limiting and politeness controls',
      'Proxy support',
      'Session management',
      'Error handling and retries',
    ],
    config: {
      apiKey: 'Required',
      rateLimit: 'Configurable (default: 1000 req/min)',
      timeout: 'Configurable (default: 30s)',
      retries: 'Configurable (default: 3)',
      proxyRotation: 'Optional',
    },
    usageExample: `import { WebScraper } from '@agents/web-scraper';

const scraper = new WebScraper({
  apiKey: 'your-api-key',
  rateLimit: 500,
  timeout: 45000,
});

const data = await scraper.scrape({
  url: 'https://example.com/products',
  selector: '.product-card',
  fields: {
    title: '.title',
    price: '.price',
    description: '.desc',
  },
  pagination: {
    type: 'next-button',
    selector: 'a.next-page',
  },
});`,
    changelog: [
      { version: '1.2.3', date: '2024-01-15', changes: 'Added proxy rotation support' },
      { version: '1.2.2', date: '2024-01-10', changes: 'Fixed JavaScript rendering timeout issues' },
      { version: '1.2.1', date: '2024-01-05', changes: 'Improved error messages and logging' },
      { version: '1.2.0', date: '2023-12-20', changes: 'Added data validation pipeline' },
    ],
  }

  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start space-x-4">
            <div className="text-6xl">{agent.icon}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{agent.name}</h1>
              <p className="text-zinc-400 mb-4">{agent.description}</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-yellow-500" />
                  <span>{agent.rating} ({agent.reviews} reviews)</span>
                </div>
                <span className="text-zinc-600">|</span>
                <span>{agent.installs} installations</span>
                <span className="text-zinc-600">|</span>
                <span>v{agent.version}</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-400 mt-2">
                <User size={16} />
                <span>By {agent.author}</span>
              </div>
            </div>
          </div>
          <button className="bg-electric-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition font-semibold flex items-center space-x-2">
            <Download size={20} />
            <span>Install</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-zinc-800 mb-8 flex space-x-8">
          {['overview', 'config', 'usage', 'changelog'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 border-b-2 transition ${
                activeTab === tab
                  ? 'border-electric-blue text-white'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-zinc-300 mb-4">{agent.longDescription}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {agent.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-zinc-300">
                      <span className="text-electric-blue mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'config' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Configuration</h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 font-mono text-sm space-y-3">
                {Object.entries(agent.config).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-electric-blue">{key}</span>
                    <span className="text-zinc-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'usage' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Usage Example</h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-zinc-300">
                  <code>{agent.usageExample}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'changelog' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Changelog</h2>
              <div className="space-y-4">
                {agent.changelog.map((entry, idx) => (
                  <div key={idx} className="border-l-2 border-electric-blue pl-4">
                    <div className="font-bold">{entry.version}</div>
                    <div className="text-sm text-zinc-400 mb-1">{entry.date}</div>
                    <div className="text-zinc-300">{entry.changes}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
