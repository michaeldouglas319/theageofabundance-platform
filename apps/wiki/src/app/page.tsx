import Link from 'next/link';

const featuredArticles = [
  { slug: 'artificial-intelligence', title: 'Artificial Intelligence', summary: 'The simulation of human intelligence processes by computer systems, including learning, reasoning, and self-correction.' },
  { slug: 'quantum-computing', title: 'Quantum Computing', summary: 'A type of computation that harnesses quantum mechanical phenomena such as superposition and entanglement.' },
  { slug: 'blockchain-technology', title: 'Blockchain Technology', summary: 'A decentralized, distributed ledger technology that records transactions across many computers.' },
  { slug: 'crispr-gene-editing', title: 'CRISPR Gene Editing', summary: 'A revolutionary gene-editing technology using Cas9 to alter DNA sequences and modify gene function.' },
  { slug: 'renewable-energy', title: 'Renewable Energy', summary: 'Energy from sources that are naturally replenishing, such as sunlight, wind, rain, tides, and geothermal heat.' },
];

export default function HomePage() {
  return (
    <div>
      {/* Article tabs */}
      <div style={{ borderBottom: '1px solid #a2a9b1', marginBottom: '0', display: 'flex', gap: 0 }}>
        <span style={{ padding: '8px 16px', borderBottom: '2px solid #36c', fontWeight: 'bold', fontSize: '0.9em', color: '#36c' }}>Main Page</span>
        <a href="#" style={{ padding: '8px 16px', fontSize: '0.9em', color: '#0645AD' }}>Talk</a>
      </div>

      <h1 style={{ fontFamily: "'Linux Libertine', Georgia, serif", fontSize: '1.8em', fontWeight: 'normal', margin: '16px 0 4px', borderBottom: 'none' }}>
        Welcome to GenWiki
      </h1>
      <p style={{ color: '#54595d', fontSize: '0.88em', marginBottom: '16px' }}>the free encyclopedia that <a href="#">anyone can edit</a>. <strong>5 articles</strong> in English</p>

      {/* Main page content in Wikipedia's dual-column box style */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        {/* Featured Article */}
        <div style={{ border: '1px solid #a2a9b1', background: '#f6f6f6' }}>
          <div style={{ background: '#cef2e0', borderBottom: '1px solid #a7d7f9', padding: '4px 10px', fontFamily: "'Linux Libertine', Georgia, serif", fontSize: '1.1em' }}>
            From today&apos;s featured article
          </div>
          <div style={{ padding: '10px' }}>
            <p><b><Link href="/artificial-intelligence">Artificial intelligence</Link></b> (AI) is the simulation of human intelligence processes by computer systems. These processes include learning (the acquisition of information and rules for using the information), reasoning (using rules to reach approximate or definite conclusions), and self-correction. The field was founded at a workshop held at <b>Dartmouth College</b> in 1956. Early researchers predicted machines would soon match human intelligence, but progress was slower than expected...</p>
          </div>
        </div>

        {/* Did you know */}
        <div style={{ border: '1px solid #a2a9b1', background: '#f6f6f6' }}>
          <div style={{ background: '#cee8f2', borderBottom: '1px solid #a7d7f9', padding: '4px 10px', fontFamily: "'Linux Libertine', Georgia, serif", fontSize: '1.1em' }}>
            Did you know...
          </div>
          <div style={{ padding: '10px' }}>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0 }}>
              <li>... that <Link href="/quantum-computing">quantum computers</Link> use qubits that can exist in superposition, representing both 0 and 1 simultaneously?</li>
              <li>... that <Link href="/crispr-gene-editing">CRISPR-Cas9</Link> won the 2020 Nobel Prize in Chemistry?</li>
              <li>... that <Link href="/blockchain-technology">blockchain</Link> was originally designed for the digital currency Bitcoin?</li>
              <li>... that the cost of <Link href="/renewable-energy">solar panels</Link> has dropped by over 90% since 2010?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* In the news / On this day */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ border: '1px solid #a2a9b1', background: '#f6f6f6' }}>
          <div style={{ background: '#cedff2', borderBottom: '1px solid #a7d7f9', padding: '4px 10px', fontFamily: "'Linux Libertine', Georgia, serif", fontSize: '1.1em' }}>
            In the news
          </div>
          <div style={{ padding: '10px' }}>
            <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0 }}>
              <li>New large language models achieve <b>human-level performance</b> on graduate-level reasoning tasks.</li>
              <li>Ocean-based <b>carbon capture</b> trials show costs under $100 per ton for the first time.</li>
              <li>The <b>Mars Sample Return</b> mission gets a revised timeline targeting 2033.</li>
            </ul>
          </div>
        </div>

        <div style={{ border: '1px solid #a2a9b1', background: '#f6f6f6' }}>
          <div style={{ background: '#f2cee0', borderBottom: '1px solid #a7d7f9', padding: '4px 10px', fontFamily: "'Linux Libertine', Georgia, serif", fontSize: '1.1em' }}>
            All articles
          </div>
          <div style={{ padding: '10px' }}>
            {featuredArticles.map((article) => (
              <div key={article.slug} style={{ marginBottom: '8px' }}>
                <Link href={`/${article.slug}`} style={{ fontWeight: 'bold' }}>{article.title}</Link>
                <span style={{ color: '#54595d' }}> &ndash; {article.summary.slice(0, 80)}...</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
