import Link from 'next/link';

const allArticles = [
  { slug: 'artificial-intelligence', title: 'Artificial intelligence', summary: 'Artificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems.' },
  { slug: 'quantum-computing', title: 'Quantum computing', summary: 'Quantum computing is a type of computation that harnesses the collective properties of quantum states, such as superposition and entanglement.' },
  { slug: 'blockchain-technology', title: 'Blockchain', summary: 'A blockchain is a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes.' },
  { slug: 'crispr-gene-editing', title: 'CRISPR gene editing', summary: 'CRISPR gene editing is a genetic engineering technique in molecular biology by which the genomes of living organisms may be modified.' },
  { slug: 'renewable-energy', title: 'Renewable energy', summary: 'Renewable energy is energy that is collected from renewable resources that are naturally replenished on a human timescale.' },
];

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.toLowerCase() ?? '';

  const results = query
    ? allArticles.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.summary.toLowerCase().includes(query),
      )
    : allArticles;

  return (
    <div>
      <div style={{ borderBottom: '1px solid #a2a9b1', display: 'flex', gap: 0, marginBottom: '12px' }}>
        <span style={{ padding: '8px 16px', borderBottom: '2px solid #36c', fontWeight: 'bold', fontSize: '0.9em', color: '#36c' }}>Search results</span>
      </div>

      {query && (
        <p style={{ fontSize: '0.88em', color: '#54595d', marginBottom: '16px' }}>
          Showing results for <b>{q}</b> — {results.length} result{results.length !== 1 ? 's' : ''} found
        </p>
      )}

      {!query && (
        <p style={{ fontSize: '0.88em', color: '#54595d', marginBottom: '16px' }}>
          Browse all articles:
        </p>
      )}

      <div>
        {results.map((article) => (
          <div key={article.slug} style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #eaecf0' }}>
            <div style={{ fontSize: '1.1em' }}>
              <Link href={`/${article.slug}`} style={{ fontWeight: 'bold' }}>{article.title}</Link>
            </div>
            <div style={{ fontSize: '0.88em', color: '#202122', marginTop: '2px' }}>{article.summary}</div>
            <div style={{ fontSize: '0.78em', color: '#72777d', marginTop: '4px' }}>
              Article • Last updated recently
            </div>
          </div>
        ))}
        {results.length === 0 && (
          <div style={{ padding: '20px', color: '#54595d' }}>
            There were no results matching the query. <a href="/search">Search all articles</a>
          </div>
        )}
      </div>
    </div>
  );
}
