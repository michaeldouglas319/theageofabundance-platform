'use client'

import { Plus, Zap, Globe, Check } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: 'Web Dashboard',
      framework: 'Next.js',
      icon: '⚛️',
      status: 'Ready',
      domain: 'dashboard.example.com',
      deployments: 24,
    },
    {
      id: 2,
      name: 'API Backend',
      framework: 'Node.js',
      icon: '🟢',
      status: 'Ready',
      domain: 'api.example.com',
      deployments: 18,
    },
    {
      id: 3,
      name: 'Mobile App',
      framework: 'React Native',
      icon: '📱',
      status: 'Building',
      domain: 'mobile.example.com',
      deployments: 12,
    },
    {
      id: 4,
      name: 'Static Site',
      framework: 'Astro',
      icon: '🚀',
      status: 'Ready',
      domain: 'blog.example.com',
      deployments: 9,
    },
    {
      id: 5,
      name: 'Python Service',
      framework: 'FastAPI',
      icon: '🐍',
      status: 'Ready',
      domain: 'service.example.com',
      deployments: 15,
    },
    {
      id: 6,
      name: 'Monorepo',
      framework: 'Next.js + Node.js',
      icon: '📦',
      status: 'Ready',
      domain: 'monorepo.example.com',
      deployments: 31,
    },
  ]

  return (
    <main className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-zinc-400">Manage your deployed projects</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          <Plus size={20} />
          <span>New Project</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-700 transition"
          >
            {/* Project Header */}
            <div className="p-6 border-b border-zinc-800">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{project.icon}</div>
                <div
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    project.status === 'Ready'
                      ? 'bg-green-900/30 text-green-400'
                      : 'bg-yellow-900/30 text-yellow-400'
                  }`}
                >
                  {project.status}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1">{project.name}</h3>
              <p className="text-sm text-zinc-500">{project.framework}</p>
            </div>

            {/* Project Details */}
            <div className="px-6 py-4 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-zinc-400">
                <Globe size={16} />
                <span className="truncate">{project.domain}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-zinc-400">
                <Zap size={16} />
                <span>{project.deployments} deployments</span>
              </div>

              <div className="pt-2 flex space-x-2">
                <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded transition text-sm font-semibold">
                  View
                </button>
                <button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded transition text-sm font-semibold">
                  Deploy
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* New Project Card */}
        <div className="bg-zinc-900 border border-dashed border-zinc-700 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-zinc-800 transition cursor-pointer">
          <Plus size={40} className="text-zinc-600 mb-3" />
          <h3 className="text-lg font-bold text-center">Create New Project</h3>
          <p className="text-sm text-zinc-400 text-center mt-2">Get started with your next application</p>
        </div>
      </div>
    </main>
  )
}
