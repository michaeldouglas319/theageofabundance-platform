'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Plus, GitBranch, Check, AlertCircle, Clock } from 'lucide-react'

export default function Dashboard() {
  const deploymentData = [
    { day: 'Mon', deployments: 3 },
    { day: 'Tue', deployments: 5 },
    { day: 'Wed', deployments: 2 },
    { day: 'Thu', deployments: 8 },
    { day: 'Fri', deployments: 12 },
    { day: 'Sat', deployments: 4 },
    { day: 'Sun', deployments: 1 },
  ]

  const recentDeployments = [
    {
      id: 1,
      project: 'Web Dashboard',
      branch: 'main',
      status: 'Ready',
      time: '2 hours ago',
      commit: 'feat: add analytics panel',
      statusColor: 'success-green',
      icon: Check,
    },
    {
      id: 2,
      project: 'API Server',
      branch: 'develop',
      status: 'Building',
      time: '5 minutes ago',
      commit: 'fix: database connection timeout',
      statusColor: 'yellow-500',
      icon: Clock,
    },
    {
      id: 3,
      project: 'Mobile App',
      branch: 'staging',
      status: 'Failed',
      time: '15 minutes ago',
      commit: 'refactor: update dependencies',
      statusColor: 'error-red',
      icon: AlertCircle,
    },
    {
      id: 4,
      project: 'Backend Service',
      branch: 'main',
      status: 'Ready',
      time: '1 hour ago',
      commit: 'chore: update documentation',
      statusColor: 'success-green',
      icon: Check,
    },
    {
      id: 5,
      project: 'Frontend Lib',
      branch: 'feature/ui-update',
      status: 'Ready',
      time: '3 hours ago',
      commit: 'feat: new component library',
      statusColor: 'success-green',
      icon: Check,
    },
  ]

  return (
    <main className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-zinc-400">Overview of your cloud infrastructure</p>
      </div>

      {/* Usage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Compute', used: 2840, total: 5000, unit: 'hrs', color: 'bg-blue-500' },
          { label: 'Bandwidth', used: 142, total: 500, unit: 'GB', color: 'bg-purple-500' },
          { label: 'Storage', used: 38, total: 100, unit: 'GB', color: 'bg-green-500' },
          { label: 'Functions', used: 1.2, total: 5, unit: 'M invocations', color: 'bg-orange-500' },
        ].map((card) => (
          <div key={card.label} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-sm text-zinc-400 mb-2">{card.label}</h3>
            <div className="text-2xl font-bold mb-3">
              {card.used} <span className="text-sm text-zinc-400">/ {card.total} {card.unit}</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2">
              <div
                className={`${card.color} h-2 rounded-full transition-all`}
                style={{ width: `${(card.used / card.total) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-zinc-500 mt-2">
              {Math.round((card.used / card.total) * 100)}% used
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Deployments This Week</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={deploymentData}>
              <defs>
                <linearGradient id="colorDeploy" x1="0" y1="0" x2="0" y2="1">
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
                cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
              />
              <Area type="monotone" dataKey="deployments" stroke="#3b82f6" fillOpacity={1} fill="url(#colorDeploy)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
          {[
            { label: 'New Project', icon: Plus },
            { label: 'Deploy', icon: Plus },
            { label: 'Add Domain', icon: Plus },
            { label: 'Invite Team', icon: Plus },
          ].map((action) => (
            <button
              key={action.label}
              className="w-full flex items-center space-x-2 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white px-4 py-3 rounded-lg transition"
            >
              <action.icon size={18} />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Deployments Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-800">
          <h2 className="text-lg font-bold">Recent Deployments</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-zinc-800 border-b border-zinc-700">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Project</th>
                <th className="px-6 py-3 text-left font-semibold">Branch</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Time</th>
                <th className="px-6 py-3 text-left font-semibold">Commit</th>
              </tr>
            </thead>
            <tbody>
              {recentDeployments.map((deploy) => (
                <tr key={deploy.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition">
                  <td className="px-6 py-4 font-semibold">{deploy.project}</td>
                  <td className="px-6 py-4 flex items-center space-x-2 text-zinc-400">
                    <GitBranch size={16} />
                    <span>{deploy.branch}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center space-x-2 text-${deploy.statusColor}`}>
                      <deploy.icon size={16} />
                      <span>{deploy.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-400">{deploy.time}</td>
                  <td className="px-6 py-4 text-zinc-400">{deploy.commit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
