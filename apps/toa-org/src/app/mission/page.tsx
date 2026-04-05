import Link from 'next/link'

export default function MissionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-light py-20">
        <div className="container max-w-3xl">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Mission, Vision & Values</h1>
          <p className="text-xl text-gray-300">
            At the heart of everything we do is a conviction: the future is abundant.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif font-bold mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The Age of Abundance Foundation works to unlock human potential and create shared prosperity through the strategic deployment of technology, health innovation, and educational opportunity. We believe that abundance—true, equitable, and sustainable—is not a distant dream but an achievable reality for all.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our mission is threefold: to democratize access to life-changing education, to advance healthcare as a fundamental right, and to harness emerging technologies as tools for human flourishing rather than concentration of power.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We operate across 61 countries, partnering with governments, NGOs, businesses, and community organizations to build systems that create lasting change. Every initiative we fund, every partnership we forge, and every technology we deploy is measured against one criterion: does it expand opportunity and dignity for those who need it most?
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-light">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif font-bold mb-8">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We envision a world where:
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex gap-4">
              <span className="text-gold font-bold text-xl flex-shrink-0">→</span>
              <span className="text-lg text-gray-700">
                <strong>Every child</strong> has access to world-class education, regardless of geography or economic circumstance.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-gold font-bold text-xl flex-shrink-0">→</span>
              <span className="text-lg text-gray-700">
                <strong>Healthcare</strong> is delivered with dignity and efficacy to every person on Earth.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-gold font-bold text-xl flex-shrink-0">→</span>
              <span className="text-lg text-gray-700">
                <strong>Technology</strong> serves humanity—solving problems, creating opportunity, and respecting human autonomy.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-gold font-bold text-xl flex-shrink-0">→</span>
              <span className="text-lg text-gray-700">
                <strong>Abundance</strong> is measured not by wealth concentration but by flourishing—people living lives of meaning, health, learning, and possibility.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-serif font-bold mb-12">Our Core Values</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-3">1. Equity Over Charity</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in systemic change, not charity. Our work dismantles barriers and builds systems that create opportunity at scale. We listen to communities, center their voices, and fund solutions they identify.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-3">2. Evidence-Driven Impact</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every dollar we deploy is guided by rigorous research, measurement, and accountability. We track outcomes, learn from failures, and scale what works. Transparency is not optional—it's foundational.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-3">3. Partnership Over Ego</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are one player in a global ecosystem of change-makers. We collaborate across sectors, share knowledge openly, and believe that the best solutions emerge from diverse minds working together.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-3">4. Innovation with Humility</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We embrace cutting-edge technology and bold ideas, but never at the expense of wisdom, culture, or human agency. Innovation must serve people, not the reverse.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-3">5. Long-Term Commitment</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lasting change takes time. We fund and support initiatives for the long haul, not the quick win. Our commitment is measured in decades, not quarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-24 bg-light">
        <div className="container">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Chen',
                role: 'Executive Director',
                bio: 'Former VP of Global Health at a major tech company.',
              },
              {
                name: 'James Okonkwo',
                role: 'Chief Strategy Officer',
                bio: 'Impact investor with 20 years in development finance.',
              },
              {
                name: 'Dr. Priya Sharma',
                role: 'Chief Innovation Officer',
                bio: 'AI researcher and biotech entrepreneur.',
              },
            ].map((leader, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
                <h3 className="text-xl font-serif font-bold mb-1">{leader.name}</h3>
                <p className="text-gold font-semibold mb-3">{leader.role}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-navy text-light text-center">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-serif font-bold mb-6">Join Us in Building Abundance</h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether through a donation, partnership, or volunteer commitment, there's a way for you to be part of this movement.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#"
              className="px-8 py-3 bg-gold text-navy rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Donate
            </Link>
            <Link
              href="#"
              className="px-8 py-3 border-2 border-gold text-gold rounded-lg font-bold hover:bg-gold hover:text-navy transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
