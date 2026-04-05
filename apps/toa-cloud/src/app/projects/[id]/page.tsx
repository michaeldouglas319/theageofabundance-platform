'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Edit2, Trash2, Plus, Copy } from 'lucide-react'
import { useState } from 'react'

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview')

  const project = {
    id: params.id,
    name: 'Web Dashboard',
    framework: 'Next.js 15',
    status: 'Ready',
    domain: 'dashboard.example.com',
    deployments: 24,
    created: '2024-01-15',
    team: ['user1@example.com', 'user2@example.com'],
    analyticsData: [
      { day: 'Mon', requests: 1200, errors: 12 },
      { day: 'Tue', requests: 1900, errors: 8 },
      { day: 'Wed', requests: 2000, errors: 14 },
      { day: 'Thu', requests: 2780, errors: 10 },
      { day: 'Fri', requests: 1890, errors: 5 },
      { day: 'Sat', requests: 2390, errors: 6 },
      { day: 'Sun', requests: 3490, errors: 11 },
    ],
    envVars: [
      { key: 'DATABASE_URL', value: '••••••••', secret: true },
      { key: 'API_KEY', value: '••••••••', secret: true },
      { key: 'NODE_ENV', value: 'production', secret: false },
      { key: 'NEXT_PUBLIC_API_URL', value: 'https://api.example.com', secret: false },
    ],
    domains: [
      { domain: 'dashboard.example.com', status: 'Active', ssl: true },
      { domain: 'www.dashboard.example.com', status: 'Configured', ssl: true },
    ],
    deploymentHistory: [
      { id: 1, branch: 'main', commit: 'abc1234', time: '2h ago', status: 'Success' },
      { id: 2, branch: 'main', commit: 'def5678', time: '5h ago', status: 'Success' },
      { id: 3, branch: 'develop', commit: 'ghi9012', time: '1d ago', status: 'Failed' },
      { id: 4, branch: 'main', commit: 'jkl3456', time: '2d ago', status: 'Success' },
    ],
  }

  return (
    <main className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
          <p className="text-zinc-400">{project.framework} • {project.status}</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition">
            <Edit2 size={20} />
          </button>
          <button className="p-2 bg-red-900/20 hover:bg-red-900/30 text-red-400 rounded-lg transition">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-zinc-800 flex space-x-8">
        {['overview', 'environment', 'domains', 'deployments', 'analytics'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-2 border-b-2 transition ${
              activeTab === tab
                ? 'border-blue-500 text-white'
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Project Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-zinc-400">Framework</div>
                  <div className="text-white">{project.framework}</div>
                </div>
                <div>
                  <div className="text-zinc-400">Status</div>
                  <div className="text-green-400">{project.status}</div>
                </div>
                <div>
                  <div className="text-zinc-400">Created</div>
                  <div className="text-white">{project.created}</div>
                </div>
                <div>
                  <div className="text-zinc-400">Total Deployments</div>
                  <div className="text-white">{project.deployments}</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Team</h3>
              <div className="space-y-2">
                {project.team.map((member) => (
                  <div key={member} className="flex justify-between items-center p-2 bg-zinc-800 rounded">
                    <span className="text-sm">{member}</span>
                    <span className="text-xs text-zinc-500">Admin</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded transition text-sm">
                <Plus size={16} />
                <span>Invite Team Member</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'environment' && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Environment Variables</h3>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                <Plus size={16} />
                <span>Add Variable</span>
              </button>
            </div>
            <div className="space-y-3">
              {project.envVars.map((envVar) => (
                <div key={envVar.key} className="flex items-center justify-between bg-zinc-800 p-4 rounded">
                  <div>
                    <div className="font-mono text-sm font-semibold">{envVar.key}</div>
                    <div className="font-mono text-xs text-zinc-500">{envVar.value}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-zinc-700 rounded">
                      <Copy size={16} />
                    </button>
                    <button className="p-2 hover:bg-red-900/30 rounded text-red-400">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'domains' && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Domains</h3>
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                <Plus size={16} />
                <span>Add Domain</span>
              </button>
            </div>
            <div className="space-y-3">
              {project.domains.map((domain, idx) => (
                <div key={idx} className="flex items-center justify-between bg-zinc-800 p-4 rounded">
                  <div>
                    <div className="font-semibold">{domain.domain}</div>
                    <div className="text-sm text-zinc-500">SSL: {domain.ssl ? 'Enabled' : 'Disabled'}</div>
                  </div>
                  <div className="text-sm bg-green-900/20 text-green-400 px-3 py-1 rounded">
                    {domain.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'deployments' && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-800">
              <h3 className="text-lg font-bold">Deployment History</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-zinc-800 border-b border-zinc-700">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Branch</th>
                    <th className="px-6 py-3 text-left font-semibold">Commit</th>
                    <th className="px-6 py-3 text-left font-semibold">Status</th>
                    <th className="px-6 py-3 text-left font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {project.deploymentHistory.map((deployment) => (
                    <tr key={deployment.id} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                      <td className="px-6 py-4 font-mono text-sm">{deployment.branch}</td>
                      <td className="px-6 py-4 font-mono text-sm">{deployment.commit}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded ${
                            deployment.status === 'Success'
                              ? 'bg-green-900/30 text-green-400'
                              : 'bg-red-900/30 text-red-400'
                          }`}
                        >
                          {deployment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-zinc-400">{deployment.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Request Analytics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={project.analyticsData}>
                <defs>
                  <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#18181b',
                    border: '1px solid #27272a',
                    borderRadius: '6px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="requests"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorRequests)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </main>
  )
}
