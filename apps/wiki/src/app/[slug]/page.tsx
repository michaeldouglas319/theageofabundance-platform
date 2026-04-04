import { notFound } from 'next/navigation';
import Link from 'next/link';

const articles: Record<string, {
  title: string;
  category: string;
  categories: string[];
  hatnote?: string;
  summary: string;
  infobox: Record<string, string>;
  sections: { heading: string; content: string; subsections?: { heading: string; content: string }[] }[];
}> = {
  'artificial-intelligence': {
    title: 'Artificial intelligence',
    category: 'Technology',
    categories: ['Artificial intelligence', 'Computer science', 'Emerging technologies', 'Computational neuroscience'],
    hatnote: 'For other uses, see Artificial intelligence (disambiguation).',
    summary: '**Artificial intelligence** (**AI**), in its broadest sense, is [intelligence](/search) exhibited by [machines](/search), particularly [computer systems](/search). It is a field of research in [computer science](/search) that develops and studies methods and [software](/search) that enable machines to perceive their environment and use learning and intelligence to take actions that maximize their chances of achieving defined goals.',
    infobox: {
      'Field': 'Computer science, Cognitive science',
      'First coined': '1956, Dartmouth workshop',
      'Coined by': 'John McCarthy',
      'Key researchers': 'Alan Turing, Marvin Minsky, Geoffrey Hinton, Yann LeCun',
      'Sub-fields': 'Machine learning, NLP, Computer vision, Robotics',
      'Applications': 'Virtual assistants, Autonomous vehicles, Medical diagnosis',
    },
    sections: [
      {
        heading: 'History',
        content: 'The field of artificial intelligence research was founded at a workshop held on the campus of Dartmouth College, USA during the summer of 1956. Those who attended would become the leaders of AI research for decades. Many of them predicted that a machine as intelligent as a human being would exist in no more than a generation, and they were given millions of dollars to make this vision come true. Eventually, it became obvious that commercial developers and researchers had grossly underestimated the difficulty of the project.',
        subsections: [
          { heading: 'Early enthusiasm', content: 'In the 1960s and 1970s, AI research was heavily funded by DARPA. Researchers developed early expert systems and natural language processing programs. The Dartmouth workshop participants were optimistic about achieving artificial general intelligence within two decades.' },
          { heading: 'AI winter', content: 'The "AI winter" was a period of reduced funding and interest in artificial intelligence research. There were two major periods: 1974–1980 and 1987–1993. The causes included overpromising by researchers, the limitations of early AI systems, and the Lighthill report in the UK.' },
        ],
      },
      {
        heading: 'Approaches',
        content: 'AI research has explored a number of different approaches, including symbolic AI, connectionism, and statistical learning. Modern AI is predominantly based on deep learning, a subset of machine learning that uses artificial neural networks with many layers to learn complex patterns in data. The transformer architecture, introduced in 2017, has become the foundation for large language models.',
      },
      {
        heading: 'Applications',
        content: 'AI is used in a wide variety of fields including healthcare, finance, transportation, entertainment, and scientific research. Notable applications include virtual assistants such as Siri and Alexa, autonomous vehicles being developed by Waymo and Tesla, medical imaging diagnosis systems that can detect cancer with accuracy rivaling experienced radiologists, and content recommendation systems used by Netflix and YouTube.',
      },
      {
        heading: 'Ethics and risks',
        content: 'The development of AI raises important ethical questions about bias, privacy, employment, and existential risk. Algorithmic bias can perpetuate and amplify existing social inequalities. The use of AI in surveillance raises significant privacy concerns. Many experts have warned about the potential risks of artificial general intelligence and the importance of AI safety research.',
      },
      {
        heading: 'See also',
        content: '',
      },
    ],
  },
  'quantum-computing': {
    title: 'Quantum computing',
    category: 'Technology',
    categories: ['Quantum computing', 'Quantum mechanics', 'Theoretical computer science', 'Emerging technologies'],
    summary: '**Quantum computing** is a type of [computation](/search) that harnesses the collective properties of [quantum states](/search), such as [superposition](/search), [interference](/search), and [entanglement](/search), to perform calculations. The devices that perform quantum computations are known as **quantum computers**.',
    infobox: {
      'Field': 'Physics, Computer science',
      'Key concept': 'Qubits',
      'First proposed': '1980s (Feynman, Benioff)',
      'Leaders': 'IBM, Google, IonQ, Rigetti',
      'Key milestone': 'Quantum supremacy (Google, 2019)',
      'Applications': 'Cryptography, Drug discovery, Optimization',
    },
    sections: [
      { heading: 'Fundamentals', content: 'Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or qubits. Qubits can exist in a superposition of states, meaning they can represent both 0 and 1 simultaneously. This property, combined with quantum entanglement, allows quantum computers to process vast amounts of information in parallel. When measured, a qubit collapses to either 0 or 1, but during computation, the superposition of states allows for an exponential increase in processing power for certain types of problems.' },
      { heading: 'Quantum gates', content: 'Quantum logic gates are the building blocks of quantum circuits. Unlike classical logic gates, quantum gates are reversible. Common quantum gates include the Hadamard gate (which creates superposition), the CNOT gate (which creates entanglement), and the Pauli gates (which perform rotations on the Bloch sphere). These gates manipulate qubits to perform computations.' },
      { heading: 'Current state', content: 'As of the mid-2020s, quantum computers are in the NISQ (Noisy Intermediate-Scale Quantum) era. Companies like IBM, Google, and startups like IonQ and Rigetti are racing to build increasingly powerful quantum processors. Google claimed quantum supremacy in 2019 with its Sycamore processor, completing a calculation in 200 seconds that would take a classical supercomputer roughly 10,000 years.' },
      { heading: 'See also', content: '' },
    ],
  },
  'blockchain-technology': {
    title: 'Blockchain',
    category: 'Technology',
    categories: ['Blockchain', 'Cryptography', 'Distributed computing', 'Financial technology'],
    summary: 'A **blockchain** is a [distributed ledger](/search) with growing lists of [records](/search) (blocks) that are securely linked together via [cryptographic hashes](/search). Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.',
    infobox: { 'Type': 'Distributed ledger', 'Invented': '2008', 'Original author': 'Satoshi Nakamoto', 'First use': 'Bitcoin (2009)', 'Key feature': 'Immutability, Decentralization' },
    sections: [
      { heading: 'How it works', content: 'A blockchain is a chain of blocks, where each block contains a list of transactions. Each block includes a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree). By design, a blockchain is resistant to modification of its data. This is because once recorded, the data in any given block cannot be altered retroactively without alteration of all subsequent blocks.' },
      { heading: 'Beyond cryptocurrency', content: 'While blockchain was originally designed for Bitcoin, the technology has found applications in supply chain management, healthcare records, voting systems, and decentralized finance (DeFi). Smart contracts, pioneered by Ethereum, allow programmable transactions that execute automatically when predefined conditions are met.' },
      { heading: 'See also', content: '' },
    ],
  },
  'crispr-gene-editing': {
    title: 'CRISPR gene editing',
    category: 'Science',
    categories: ['CRISPR', 'Genetic engineering', 'Molecular biology', 'Biotechnology'],
    hatnote: 'For the natural biological process, see CRISPR.',
    summary: '**CRISPR gene editing** (colloquially **CRISPR**) is a [genetic engineering](/search) technique in [molecular biology](/search) by which the [genomes](/search) of living organisms may be modified. It is based on a simplified version of the bacterial [CRISPR-Cas9](/search) antiviral defense system.',
    infobox: { 'Full name': 'Clustered Regularly Interspaced Short Palindromic Repeats', 'Discovered': '2012', 'Nobel Prize': '2020 (Chemistry)', 'Pioneers': 'Jennifer Doudna, Emmanuelle Charpentier', 'Applications': 'Gene therapy, Agriculture, Research' },
    sections: [
      { heading: 'Mechanism', content: 'CRISPR-Cas9 works by using a guide RNA (gRNA) to direct the Cas9 nuclease to a specific location in the genome, where it creates a double-strand break (DSB) in the DNA. The cell\'s natural repair mechanisms then kick in through either non-homologous end joining (NHEJ) or homology-directed repair (HDR), allowing researchers to delete, insert, or modify genetic material at that precise location.' },
      { heading: 'Medical applications', content: 'CRISPR holds enormous potential for treating genetic diseases such as sickle cell disease, cystic fibrosis, and certain forms of cancer. In December 2023, the first CRISPR-based therapy (Casgevy, developed by Vertex Pharmaceuticals and CRISPR Therapeutics) was approved by the FDA for treating sickle cell disease, marking a historic milestone in genetic medicine.' },
      { heading: 'See also', content: '' },
    ],
  },
  'renewable-energy': {
    title: 'Renewable energy',
    category: 'Science',
    categories: ['Renewable energy', 'Sustainability', 'Energy development', 'Climate change mitigation'],
    summary: '**Renewable energy** is [energy](/search) that is collected from [renewable resources](/search) that are naturally replenished on a human timescale. It includes sources such as [sunlight](/search), [wind](/search), [rain](/search), [tides](/search), [waves](/search), and [geothermal heat](/search).',
    infobox: { 'Types': 'Solar, Wind, Hydro, Geothermal, Biomass', 'Global share': '~30% of electricity (2024)', 'Growth rate': '~10% annually', 'Key goal': 'Net-zero emissions by 2050', 'Largest source': 'Hydroelectric power' },
    sections: [
      { heading: 'Solar energy', content: 'Solar power converts sunlight into electricity using photovoltaic (PV) cells or concentrated solar power (CSP) systems. The cost of solar panels has dropped by over 90% since 2010, making it one of the cheapest sources of new electricity generation globally. In 2023, solar PV capacity additions reached over 400 GW worldwide, a new record.' },
      { heading: 'Wind energy', content: 'Wind turbines convert the kinetic energy of wind into electrical power. Both onshore and offshore wind farms have grown dramatically in capacity. Offshore wind, in particular, has seen rapid innovation with larger turbines reaching over 15 MW capacity and floating platform technology enabling deployment in deeper waters.' },
      { heading: 'Future outlook', content: 'The transition to renewable energy is accelerating globally. Battery storage technology, particularly lithium-ion and emerging solid-state batteries, green hydrogen produced via electrolysis, and improved grid infrastructure including high-voltage direct current (HVDC) transmission are key enablers. Many countries have set legally binding targets to achieve net-zero carbon emissions by 2050.' },
      { heading: 'See also', content: '' },
    ],
  },
};

function renderMarkdownLinks(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <b key={i}>{part.slice(2, -2)}</b>;
    }
    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      return <a key={i} href={linkMatch[2]}>{linkMatch[1]}</a>;
    }
    return part;
  });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  let sectionNum = 0;

  return (
    <div>
      {/* Article tabs */}
      <div style={{ borderBottom: '1px solid #a2a9b1', display: 'flex', gap: 0 }}>
        <span style={{ padding: '8px 16px', borderBottom: '2px solid #36c', fontWeight: 'bold', fontSize: '0.9em', color: '#36c' }}>Article</span>
        <a href="#" style={{ padding: '8px 16px', fontSize: '0.9em' }}>Talk</a>
        <div style={{ flex: 1 }} />
        <a href="#" style={{ padding: '8px 16px', fontSize: '0.9em' }}>Read</a>
        <a href="#" style={{ padding: '8px 16px', fontSize: '0.9em' }}>Edit</a>
        <a href="#" style={{ padding: '8px 16px', fontSize: '0.9em' }}>View history</a>
      </div>

      <h1 style={{ fontFamily: "'Linux Libertine', Georgia, serif", fontSize: '1.8em', fontWeight: 'normal', margin: '8px 0 4px', borderBottom: 'none', lineHeight: 1.2 }}>
        {article.title}
      </h1>

      {article.hatnote && (
        <div className="wiki-hatnote">{article.hatnote}</div>
      )}

      {/* Infobox */}
      <table className="wiki-infobox">
        <caption>{article.title}</caption>
        <tbody>
          {Object.entries(article.infobox).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Lead paragraph */}
      <p style={{ marginBottom: '1em' }}>{renderMarkdownLinks(article.summary)}</p>

      {/* Table of Contents */}
      <div className="wiki-toc">
        <div className="wiki-toc-title">Contents</div>
        <ol style={{ paddingLeft: '24px', margin: 0 }}>
          {article.sections.map((section, i) => (
            <li key={i} style={{ margin: '2px 0' }}>
              <a href={`#section-${i}`}>{section.heading}</a>
              {section.subsections && (
                <ol style={{ paddingLeft: '20px', margin: '2px 0' }}>
                  {section.subsections.map((sub, j) => (
                    <li key={j} style={{ margin: '1px 0' }}>
                      <a href={`#subsection-${i}-${j}`}>{sub.heading}</a>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </div>

      <div style={{ clear: 'both' }} />

      {/* Article Sections */}
      {article.sections.map((section, i) => {
        sectionNum++;
        if (section.heading === 'See also') {
          return (
            <div key={i}>
              <h2 id={`section-${i}`}>
                See also
                <a href="#" className="wiki-edit-link">[edit]</a>
              </h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '24px' }}>
                {article.categories.slice(0, 3).map((cat, ci) => (
                  <li key={ci}><a href="#">{cat}</a></li>
                ))}
              </ul>
            </div>
          );
        }
        return (
          <div key={i}>
            <h2 id={`section-${i}`}>
              {section.heading}
              <a href="#" className="wiki-edit-link">[edit]</a>
            </h2>
            <p>{section.content}</p>
            {section.subsections?.map((sub, j) => (
              <div key={j}>
                <h3 id={`subsection-${i}-${j}`}>
                  {sub.heading}
                  <a href="#" className="wiki-edit-link">[edit]</a>
                </h3>
                <p>{sub.content}</p>
              </div>
            ))}
          </div>
        );
      })}

      {/* Categories */}
      <div className="wiki-categories">
        <b>Categories:</b>{' '}
        {article.categories.map((cat, i) => (
          <span key={i}>
            <a href="#">{cat}</a>
            {i < article.categories.length - 1 && ' | '}
          </span>
        ))}
      </div>
    </div>
  );
}
