'use client'

import { Search, Download } from 'lucide-react'
import { useState } from 'react'

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const allAgents = [
    {
      id: 1,
      name: 'Web Scraper',
      description: 'Extract and process web data intelligently',
      icon: '🕷️',
      category: 'Web',
      installs: '12.4K',
      rating: 4.8,
      author: 'Data Team',
    },
    {
      id: 2,
      name: 'Data Analyst',
      description: 'Advanced analytics and insights generation',
      icon: '📊',
      category: 'Data',
      installs: '8.9K',
      rating: 4.9,
      author: 'Analytics Crew',
    },
    {
      id: 3,
      name: 'Code Reviewer',
      description: 'Automated code review and quality checks',
      icon: '👁️',
      category: 'Code',
      installs: '7.2K',
      rating: 4.7,
      author: 'DevTools Inc',
    },
    {
      id: 4,
      name: 'Email Manager',
      description: 'Intelligent email processing and filtering',
      icon: '📧',
      category: 'Communication',
      installs: '5.8K',
      rating: 4.6,
      author: 'Comm Suite',
    },
    {
      id: 5,
      name: 'Calendar Assistant',
      description: 'Smart scheduling and meeting coordination',
      icon: '📅',
      category: 'Productivity',
      installs: '6.3K',
      rating: 4.8,
      author: 'Productivity Labs',
    },
    {
      id: 6,
      name: 'File Organizer',
      description: 'Automatic file organization and management',
      icon: '📁',
      category: 'Files',
      installs: '4.1K',
      rating: 4.5,
      author: 'Storage Team',
    },
    {
      id: 7,
      name: 'Research Assistant',
      description: 'Deep research and information synthesis',
      icon: '🔬',
      category: 'Research',
      installs: '9.7K',
      rating: 4.9,
      author: 'Knowledge Corp',
    },
    {
      id: 8,
      name: 'API Connector',
      description: 'Connect and orchestrate multiple APIs',
      icon: '🔗',
      category: 'Integration',
      installs: '11.2K',
      rating: 4.8,
      author: 'Integration Hub',
    },
    {
      id: 9,
      name: 'PDF Extractor',
      description: 'Extract text and data from PDF documents',
      icon: '📄',
      category: 'Data',
      installs: '3.2K',
      rating: 4.6,
      author: 'Document Pro',
    },
    {
      id: 10,
      name: 'Translation Engine',
      description: 'Multi-language translation and localization',
      icon: '🌍',
      category: 'Communication',
      installs: '4.5K',
      rating: 4.7,
      author: 'Language Labs',
    },
    {
      id: 11,
      name: 'Image Processor',
      description: 'Advanced image recognition and manipulation',
      icon: '🖼️',
      category: 'Data',
      installs: '6.8K',
      rating: 4.8,
      author: 'Vision AI',
    },
    {
      id: 12,
      name: 'Task Scheduler',
      description: 'Intelligent task automation and scheduling',
      icon: '⏰',
      category: 'Productivity',
      installs: '5.9K',
      rating: 4.7,
      author: 'Automation Works',
    },
  ]

  const categories = ['All', 'Web', 'Data', 'Code', 'Files', 'Communication', 'Research', 'Integration', 'Productivity']

  const filteredAgents = allAgents.filter((agent) => {
    const matchesCategory = selectedCategory === 'All' || agent.category === selectedCategory
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2">Agent Registry</h1>
        <p className="text-zinc-400 mb-8">Browse and install agents for your workflows</p>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" size={20} />
            <input
              type="text"
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-electric-blue focus:outline-none transition"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm transition ${
                  selectedCategory === category
                    ? 'bg-electric-blue text-white'
                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-zinc-400 mb-6">
          Showing {filteredAgents.length} of {allAgents.length} agents
        </p>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-electric-blue transition group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="text-4xl">{agent.icon}</div>
                <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                  {agent.category}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-electric-blue transition">
                {agent.name}
              </h3>

              <p className="text-zinc-400 text-sm mb-4">{agent.description}</p>

              <div className="mb-4 space-y-2 text-sm text-zinc-500">
                <div>By {agent.author}</div>
                <div className="flex justify-between">
                  <span>{agent.rating} ★</span>
                  <span>{agent.installs} installs</span>
                </div>
              </div>

              <button className="w-full bg-electric-blue hover:bg-blue-600 text-white py-2 rounded transition font-semibold text-sm flex items-center justify-center space-x-2">
                <Download size={16} />
                <span>Install</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
