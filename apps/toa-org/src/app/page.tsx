'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Book, Heart, Cpu, ArrowRight, Check } from 'lucide-react'

function AnimatedCounter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [end])

  return (
    <div className="text-center">
      <div className="text-4xl font-serif font-bold text-gold mb-2">
        {count.toLocaleString()}
        {label.includes('Billion') && 'B'}
        {label.includes('Million') && 'M'}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-light py-32">
        <div className="container max-w-3xl text-center">
          <h1 className="text-6xl font-serif font-bold mb-6 leading-tight">
            We believe the future is abundant — for everyone.
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Working at the intersection of technology, health, and human potential.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/mission"
              className="px-8 py-3 bg-white text-navy rounded-lg font-semibold hover:bg-gold hover:text-white transition-all"
            >
              Learn More
            </Link>
            <button className="px-8 py-3 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-navy transition-all">
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section id="impact" className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Our Impact</h2>
          <div className="grid grid-cols-4 gap-8">
            <AnimatedCounter end={12.4} label="Lives Reached (Millions)" />
            <AnimatedCounter end={61} label="Countries" />
            <AnimatedCounter end={3.1} label="Capital Mobilized (Billions)" />
            <AnimatedCounter end={4200} label="Partners" />
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Our Three Pillars</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Education */}
            <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Book className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Education</h3>
              <p className="text-gray-600 mb-6">
                Providing access to quality education and skill development for underprivileged communities worldwide. We're building pathways to opportunity through technology and innovation.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span>3.2M students reached</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span>45 countries active</span>
                </li>
              </ul>
            </div>

            {/* Health */}
            <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Health</h3>
              <p className="text-gray-600 mb-6">
                Advancing healthcare access and wellness programs, from preventive care to cutting-edge treatments. We believe health is a human right.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span>8.1M healthcare services</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span>250+ clinics supported</span>
                </li>
              </ul>
            </div>

            {/* Technology */}
            <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Technology</h3>
              <p className="text-gray-600 mb-6">
                Leveraging AI, blockchain, and emerging technologies to solve complex global challenges. Innovation is our foundation.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span>2,000+ engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span>1,200+ open-source projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Featured Initiatives</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                badge: 'Active',
                title: 'Global Learning Network',
                desc: 'Connecting 500K+ students with mentors and resources across 40 countries.',
                funding: 75,
              },
              {
                badge: 'Active',
                title: 'Health Equity Project',
                desc: 'Deploying telemedicine and preventive care to underserved rural communities.',
                funding: 62,
              },
              {
                badge: 'Planned',
                title: 'AI for Good Initiative',
                desc: 'Building ethical AI systems to solve climate, poverty, and disease challenges.',
                funding: 28,
              },
            ].map((init, i) => (
              <div key={i} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <span className="inline-block px-3 py-1 bg-gold text-white text-xs font-bold rounded mb-4">
                  {init.badge}
                </span>
                <h3 className="text-xl font-serif font-bold mb-3">{init.title}</h3>
                <p className="text-gray-600 mb-6">{init.desc}</p>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold">Funding Progress</span>
                    <span className="text-gray-600">{init.funding}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gold h-2 rounded-full"
                      style={{ width: `${init.funding}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-navy text-light">
        <div className="container max-w-2xl">
          <div className="flex gap-8 items-center">
            <div className="w-32 h-32 bg-gray-600 rounded-lg flex-shrink-0"></div>
            <div>
              <blockquote className="text-2xl font-serif italic mb-6">
                "The Age of Abundance is not a destination—it's a commitment. Every innovation, every partnership, every life touched is proof that a better world is possible."
              </blockquote>
              <p className="font-bold">Dr. Sarah Chen</p>
              <p className="text-gold">Executive Director, The Age of Abundance Foundation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">Our Partners & Supporters</h2>
          <div className="grid grid-cols-5 gap-8 items-center text-center">
            {[
              'Global Health Alliance',
              'Tech for Humanity',
              'World Education Fund',
              'Innovation Summit',
              'Community First NGO',
            ].map((partner, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                <p className="font-semibold text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section id="donate" className="py-24 bg-navy text-light">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Make an Impact Today</h2>
          <p className="text-lg text-gray-300 mb-12">
            Your donation helps us reach more communities, fund more initiatives, and build a world of shared abundance.
          </p>
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <button className="px-6 py-3 bg-white text-navy rounded font-bold hover:bg-gold hover:text-white transition-all">
              $25
            </button>
            <button className="px-6 py-3 bg-white text-navy rounded font-bold hover:bg-gold hover:text-white transition-all">
              $50
            </button>
            <button className="px-6 py-3 bg-white text-navy rounded font-bold hover:bg-gold hover:text-white transition-all">
              $100
            </button>
            <button className="px-6 py-3 border-2 border-gold text-gold rounded font-bold hover:bg-gold hover:text-navy transition-all">
              Custom Amount
            </button>
          </div>
          <button className="px-8 py-4 bg-gold text-navy rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
            Donate Now
          </button>
        </div>
      </section>
    </>
  )
}
