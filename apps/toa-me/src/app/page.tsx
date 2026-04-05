import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-[#0d3321]">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-center px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
              Your Health,
            </span>
            <br />
            <span className="text-[#fefdf8]">Abundant.</span>
          </h1>
          <p className="text-xl text-[#d1f2eb] mb-8 max-w-2xl mx-auto">
            Track your nutrition, movement, sleep, and mental wellness all in one beautiful platform. Your journey to optimal health starts here.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-[#4ade80] text-[#0d3321] font-semibold rounded-lg hover:bg-[#22c55e] transition">
              Start Free Trial
            </button>
            <Link href="/dashboard" className="px-8 py-3 border-2 border-[#4ade80] text-[#4ade80] font-semibold rounded-lg hover:bg-[#1a5c3a] transition">
              See Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#fefdf8]">
          Everything You Need
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a] hover:border-[#4ade80] transition">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold text-[#4ade80] mb-2">Nutrition</h3>
            <p className="text-[#d1f2eb]">Track your meals, monitor macros, and optimize your diet with intelligent insights.</p>
          </div>

          <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a] hover:border-[#4ade80] transition">
            <div className="text-4xl mb-4">🏃</div>
            <h3 className="text-xl font-bold text-[#4ade80] mb-2">Movement</h3>
            <p className="text-[#d1f2eb]">Log workouts, count steps, and celebrate your active lifestyle every single day.</p>
          </div>

          <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a] hover:border-[#4ade80] transition">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-[#4ade80] mb-2">Mental Wellness</h3>
            <p className="text-[#d1f2eb]">Check your mood, practice meditation, and prioritize your mental health daily.</p>
          </div>

          <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a] hover:border-[#4ade80] transition">
            <div className="text-4xl mb-4">😴</div>
            <h3 className="text-xl font-bold text-[#4ade80] mb-2">Sleep</h3>
            <p className="text-[#d1f2eb]">Monitor sleep cycles, track rest quality, and wake up feeling refreshed.</p>
          </div>
        </div>
      </section>

      {/* Health Score Preview */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#fefdf8]">
          Your Health Score
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full bg-[#1a5c3a] border-8 border-[#4ade80] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#4ade80] mb-2">87</div>
                <div className="text-[#d1f2eb]">out of 100</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-[#fefdf8] font-semibold">Nutrition</span>
                <span className="text-[#4ade80]">92%</span>
              </div>
              <div className="w-full bg-[#1a5c3a] rounded-full h-2 border border-[#2a8c5a]">
                <div className="bg-[#4ade80] h-full rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-[#fefdf8] font-semibold">Movement</span>
                <span className="text-[#4ade80]">85%</span>
              </div>
              <div className="w-full bg-[#1a5c3a] rounded-full h-2 border border-[#2a8c5a]">
                <div className="bg-[#4ade80] h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-[#fefdf8] font-semibold">Sleep</span>
                <span className="text-[#4ade80]">78%</span>
              </div>
              <div className="w-full bg-[#1a5c3a] rounded-full h-2 border border-[#2a8c5a]">
                <div className="bg-[#4ade80] h-full rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-[#fefdf8] font-semibold">Mental Health</span>
                <span className="text-[#4ade80]">88%</span>
              </div>
              <div className="w-full bg-[#1a5c3a] rounded-full h-2 border border-[#2a8c5a]">
                <div className="bg-[#4ade80] h-full rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#fefdf8]">
          Loved by Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a]">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#4ade80]">★</span>
              ))}
            </div>
            <p className="text-[#d1f2eb] mb-4">
              This platform completely transformed how I think about my health. The comprehensive tracking and beautiful interface make it a joy to use daily.
            </p>
            <div className="font-semibold text-[#fefdf8]">Sarah Chen</div>
            <div className="text-[#4ade80] text-sm">Health Coach</div>
          </div>

          <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a]">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#4ade80]">★</span>
              ))}
            </div>
            <p className="text-[#d1f2eb] mb-4">
              Finally a wellness app that's actually designed for real people. The insights are actionable and the community is incredibly supportive.
            </p>
            <div className="font-semibold text-[#fefdf8]">Marcus Johnson</div>
            <div className="text-[#4ade80] text-sm">Athlete</div>
          </div>

          <div className="bg-[#1a5c3a] rounded-xl p-8 border border-[#2a8c5a]">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#4ade80]">★</span>
              ))}
            </div>
            <p className="text-[#d1f2eb] mb-4">
              I've tried dozens of health apps, but AoA Wellness is the only one I actually stick with. It's simple, beautiful, and truly effective.
            </p>
            <div className="font-semibold text-[#fefdf8]">Emma Williams</div>
            <div className="text-[#4ade80] text-sm">Wellness Enthusiast</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#fefdf8]">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-[#d1f2eb] mb-8">
          Join thousands of people pursuing abundant health.
        </p>
        <button className="px-8 py-3 bg-[#4ade80] text-[#0d3321] font-semibold rounded-lg hover:bg-[#22c55e] transition">
          Start Your Free Trial
        </button>
      </section>
    </div>
  );
}
