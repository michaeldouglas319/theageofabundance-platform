'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const moodData = [
  { day: 'Mon', mood: 7 },
  { day: 'Tue', mood: 8 },
  { day: 'Wed', mood: 6 },
  { day: 'Thu', mood: 8 },
  { day: 'Fri', mood: 9 },
  { day: 'Sat', mood: 9 },
  { day: 'Sun', mood: 7 },
];

const recentMeals = [
  { id: 1, name: 'Greek Yogurt Bowl', time: '8:00 AM', calories: 280, protein: 20 },
  { id: 2, name: 'Grilled Salmon & Vegetables', time: '12:30 PM', calories: 520, protein: 45 },
  { id: 3, name: 'Protein Shake', time: '3:00 PM', calories: 250, protein: 30 },
  { id: 4, name: 'Chicken & Quinoa', time: '7:00 PM', calories: 480, protein: 40 },
];

const habits = [
  { id: 1, name: 'Morning meditation', completed: true },
  { id: 2, name: '30min walk', completed: true },
  { id: 3, name: '8 glasses water', completed: false },
  { id: 4, name: 'No processed food', completed: false },
  { id: 5, name: 'Journaling', completed: false },
];

export default function DashboardPage() {
  return (
    <div className="bg-[#0d3321] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#fefdf8] mb-2">
            Good morning, Michael
          </h1>
          <p className="text-[#d1f2eb]">Here's your health snapshot for today</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#1a5c3a] rounded-xl p-6 border border-[#2a8c5a]">
            <div className="text-sm text-[#d1f2eb] mb-2">Today's Score</div>
            <div className="text-4xl font-bold text-[#4ade80] mb-2">87</div>
            <div className="text-xs text-[#4ade80]">↑ 3 from yesterday</div>
          </div>

          <div className="bg-[#1a5c3a] rounded-xl p-6 border border-[#2a8c5a]">
            <div className="text-sm text-[#d1f2eb] mb-2">Steps</div>
            <div className="text-4xl font-bold text-[#4ade80] mb-2">8,240</div>
            <div className="text-xs text-[#4ade80]">↑ 1,200 needed</div>
          </div>

          <div className="bg-[#1a5c3a] rounded-xl p-6 border border-[#2a8c5a]">
            <div className="text-sm text-[#d1f2eb] mb-2">Sleep</div>
            <div className="text-4xl font-bold text-[#4ade80] mb-2">7.2h</div>
            <div className="text-xs text-[#4ade80]">Good quality</div>
          </div>

          <div className="bg-[#1a5c3a] rounded-xl p-6 border border-[#2a8c5a]">
            <div className="text-sm text-[#d1f2eb] mb-2">Hydration</div>
            <div className="text-4xl font-bold text-[#4ade80] mb-2">6/8</div>
            <div className="text-xs text-[#4ade80]">2 glasses remaining</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weekly Mood Chart */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a]">
              <h2 className="text-xl font-bold text-[#fefdf8] mb-6">Weekly Mood Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={moodData}>
                  <defs>
                    <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a8c5a" />
                  <XAxis dataKey="day" stroke="#d1f2eb" />
                  <YAxis stroke="#d1f2eb" domain={[0, 10]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a5c3a', border: '1px solid #2a8c5a', borderRadius: '8px' }}
                    labelStyle={{ color: '#4ade80' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="mood"
                    stroke="#4ade80"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorMood)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Habits Checklist */}
          <div>
            <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a]">
              <h2 className="text-xl font-bold text-[#fefdf8] mb-6">Today's Habits</h2>
              <div className="space-y-4">
                {habits.map((habit) => (
                  <label key={habit.id} className="flex items-center gap-3 cursor-pointer">
                    <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition ${
                      habit.completed
                        ? 'bg-[#4ade80] border-[#4ade80]'
                        : 'border-[#2a8c5a] hover:border-[#4ade80]'
                    }`}>
                      {habit.completed && <span className="text-[#0d3321] font-bold">✓</span>}
                    </div>
                    <span className={habit.completed ? 'text-[#d1f2eb] line-through' : 'text-[#fefdf8]'}>
                      {habit.name}
                    </span>
                  </label>
                ))}
              </div>
              <button className="w-full mt-6 px-4 py-2 bg-[#4ade80] text-[#0d3321] font-semibold rounded-lg hover:bg-[#22c55e] transition">
                Save Progress
              </button>
            </div>
          </div>
        </div>

        {/* Recent Meals */}
        <div className="mt-8">
          <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a]">
            <h2 className="text-xl font-bold text-[#fefdf8] mb-6">Recent Meals</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2a8c5a]">
                    <th className="text-left py-3 px-4 text-[#d1f2eb] font-semibold">Meal</th>
                    <th className="text-left py-3 px-4 text-[#d1f2eb] font-semibold">Time</th>
                    <th className="text-left py-3 px-4 text-[#d1f2eb] font-semibold">Calories</th>
                    <th className="text-left py-3 px-4 text-[#d1f2eb] font-semibold">Protein</th>
                  </tr>
                </thead>
                <tbody>
                  {recentMeals.map((meal) => (
                    <tr key={meal.id} className="border-b border-[#2a8c5a] hover:bg-[#0d3321] transition">
                      <td className="py-3 px-4 text-[#fefdf8]">{meal.name}</td>
                      <td className="py-3 px-4 text-[#d1f2eb]">{meal.time}</td>
                      <td className="py-3 px-4 text-[#fefdf8]">{meal.calories} kcal</td>
                      <td className="py-3 px-4 text-[#4ade80] font-semibold">{meal.protein}g</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-6 px-6 py-2 border border-[#4ade80] text-[#4ade80] font-semibold rounded-lg hover:bg-[#1a5c3a] transition">
              Log New Meal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
