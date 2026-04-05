export default function InitiativesPage() {
  const initiatives = [
    {
      id: 1,
      title: 'Global Learning Network',
      status: 'Active',
      category: 'Education',
      description: 'Connecting 500K+ students with mentors and resources across 40 countries. Building pathways to opportunity through technology and peer learning.',
      impact: '500,000+ students reached',
      funding: 75,
    },
    {
      id: 2,
      title: 'Health Equity Project',
      status: 'Active',
      category: 'Health',
      description: 'Deploying telemedicine and preventive care to underserved rural communities. Bringing diagnostic and treatment capabilities to areas with limited medical access.',
      impact: '3.2M healthcare interactions',
      funding: 62,
    },
    {
      id: 3,
      title: 'AI for Good Initiative',
      status: 'Planned',
      category: 'Technology',
      description: 'Building ethical AI systems to solve climate, poverty, and disease challenges. Ensuring AI development centers human welfare and democratic values.',
      impact: 'Launching Q3 2024',
      funding: 28,
    },
    {
      id: 4,
      title: 'Climate Resilience Fund',
      status: 'Active',
      category: 'Environment',
      description: 'Investing in climate adaptation and renewable energy projects in vulnerable regions. Supporting communities building resilience to climate impacts.',
      impact: '15M+ people protected',
      funding: 81,
    },
    {
      id: 5,
      title: 'Women Entrepreneurs Program',
      status: 'Active',
      category: 'Economic',
      description: 'Providing capital, mentorship, and market access to 10,000+ women founders across Africa and Southeast Asia. Unlocking economic potential.',
      impact: '$250M in capital deployed',
      funding: 68,
    },
    {
      id: 6,
      title: 'Tech Access Initiative',
      status: 'Completed',
      category: 'Technology',
      description: 'Distributed 100K+ refurbished devices to students and educators in developing nations. Bridging the digital divide across continents.',
      impact: '100,000 devices distributed',
      funding: 100,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Planned':
        return 'bg-blue-100 text-blue-800'
      case 'Completed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Education':
        return 'border-blue-300 bg-blue-50'
      case 'Health':
        return 'border-red-300 bg-red-50'
      case 'Technology':
        return 'border-purple-300 bg-purple-50'
      case 'Environment':
        return 'border-green-300 bg-green-50'
      case 'Economic':
        return 'border-yellow-300 bg-yellow-50'
      default:
        return 'border-gray-300 bg-gray-50'
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-light py-20">
        <div className="container max-w-3xl">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Initiatives</h1>
          <p className="text-xl text-gray-300">
            From education to healthcare to technology innovation—here's where your support creates impact.
          </p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-2 gap-8">
            {initiatives.map((init) => (
              <div
                key={init.id}
                className={`p-8 rounded-lg border-2 hover:shadow-lg transition-shadow ${getCategoryColor(
                  init.category
                )}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-gold text-white text-xs font-bold rounded mb-3">
                      {init.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-navy mb-2">{init.title}</h3>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded text-xs font-bold flex-shrink-0 ${getStatusColor(init.status)}`}>
                    {init.status}
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{init.description}</p>

                <div className="mb-6 pb-6 border-b border-gray-300">
                  <p className="text-sm font-semibold text-gray-600">Key Metric</p>
                  <p className="text-lg font-bold text-navy">{init.impact}</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-gray-700">Funding Progress</span>
                    <span className="text-gray-600">{init.funding}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className="bg-gold h-2 rounded-full transition-all"
                      style={{ width: `${init.funding}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">How We Select Initiatives</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold text-white text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Community Input</h3>
                <p className="text-gray-700">
                  We listen deeply to communities. Are they asking for this? Will it address their priorities?
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold text-white text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Evidence Review</h3>
                <p className="text-gray-700">
                  We examine the evidence. What does research tell us about what works at scale?
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold text-white text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Impact Potential</h3>
                <p className="text-gray-700">
                  We measure potential. Could this reach millions? Create systemic change?
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold text-white text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Partnership Strength</h3>
                <p className="text-gray-700">
                  We vet partners. Who will execute this? Do they have deep roots in the communities they serve?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-24 bg-light">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Initiative Metrics at a Glance</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <p className="text-4xl font-serif font-bold text-gold mb-2">6</p>
              <p className="text-gray-700">Active initiatives</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <p className="text-4xl font-serif font-bold text-gold mb-2">50M+</p>
              <p className="text-gray-700">People reached</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <p className="text-4xl font-serif font-bold text-gold mb-2">$1.2B</p>
              <p className="text-gray-700">Capital deployed</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <p className="text-4xl font-serif font-bold text-gold mb-2">40+</p>
              <p className="text-gray-700">Countries active</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-navy text-light text-center">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-serif font-bold mb-6">Support an Initiative</h2>
          <p className="text-lg text-gray-300 mb-8">
            Each initiative needs support. Your contribution helps us scale impact and reach more communities.
          </p>
          <button className="px-8 py-4 bg-gold text-navy rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
            Donate to an Initiative
          </button>
        </div>
      </section>
    </>
  )
}
