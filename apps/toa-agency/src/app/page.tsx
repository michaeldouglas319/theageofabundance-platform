'use client'

import { Search, Download, Zap, Code2, Database, Mail, FileText, Shield } from 'lucide-react'

export default function Home() {
  const agents = [
    {
      id: 1,
      name: 'Web Scraper',
      description: 'Extract and process web data intelligently',
      icon: '🕷️',
      category: 'Web',
      installs: '12.4K',
    },
    {
      id: 2,
      name: 'Data Analyst',
      description: 'Advanced analytics and insights generation',
      icon: '📊',
      category: 'Data',
      installs: '8.9K',
    },
    {
      id: 3,
      name: 'Code Reviewer',
      description: 'Automated code review and quality checks',
      icon: '👁️',
      category: 'Code',
      installs: '7.2K',
    },
    {
      id: 4,
      name: 'Email Manager',
      description: 'Intelligent email processing and filtering',
      icon: '📧',
      category: 'Communication',
      installs: '5.8K',
    },
    {
      id: 5,
      name: 'Calendar Assistant',
      description: 'Smart scheduling and meeting coordination',
      icon: '📅',
      category: 'Productivity',
      installs: '6.3K',
    },
    {
      id: 6,
      name: 'File Organizer',
      description: 'Automatic file organization and management',
      icon: '📁',
      category: 'Files',
      installs: '4.1K',
    },
    {
      id: 7,
      name: 'Research Assistant',
      description: 'Deep research and information synthesis',
      icon: '🔬',
      category: 'Research',
      installs: '9.7K',
    },
    {
      id: 8,
      name: 'API Connector',
      description: 'Connect and orchestrate multiple APIs',
      icon: '🔗',
      category: 'Integration',
      installs: '11.2K',
    },
  ]

  const categories = [
    'All',
    'Web',
    'Data',
    'Code',
    'Files',
    'Communication',
    'Research',
    'Productivity',
  ]

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            The Agentic Services Platform
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Connect, deploy, and orchestrate AI agents at scale
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-500" size={20} />
              <input
                type="text"
                placeholder="Search agents, MCPs, tools..."
                className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:border-electric-blue focus:outline-none transition"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-electric-blue">2,400+</div>
              <div className="text-zinc-400">Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-electric-blue">180+</div>
              <div className="text-zinc-400">MCP Servers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-electric-blue">50K+</div>
              <div className="text-zinc-400">Installs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition ${
                category === 'All'
                  ? 'bg-electric-blue text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Agents Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold mb-8">Featured Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-electric-blue transition group"
            >
              <div className="text-4xl mb-3">{agent.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-electric-blue transition">
                {agent.name}
              </h3>
              <p className="text-zinc-400 text-sm mb-4">{agent.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                  {agent.category}
                </span>
                <span className="text-xs text-zinc-500">{agent.installs}</span>
              </div>
              <button className="w-full bg-electric-blue hover:bg-blue-600 text-white py-2 rounded transition font-semibold text-sm">
                Install
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: 'Browse',
              description: 'Explore our catalog of 2,400+ agents and integrations',
              icon: '🔍',
            },
            {
              step: 2,
              title: 'Connect',
              description: 'Link agents to your workflows and configure settings',
              icon: '🔗',
            },
            {
              step: 3,
              title: 'Deploy',
              description: 'Launch and scale your agentic systems instantly',
              icon: '🚀',
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
