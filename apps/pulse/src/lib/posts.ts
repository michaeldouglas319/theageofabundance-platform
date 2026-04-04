export interface PostData {
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: { name: string; avatar: string };
  cover_image: string;
  published_at: string;
  reading_time: string;
}

export const posts: PostData[] = [
  {
    slug: 'ai-transforms-healthcare',
    title: 'How AI Is Transforming Healthcare in 2026',
    summary: 'From diagnostic imaging to drug discovery, artificial intelligence is reshaping every corner of modern medicine.',
    content: 'Artificial intelligence has moved beyond the experimental phase in healthcare. Hospitals worldwide are now deploying AI systems that can detect diseases from medical scans with accuracy rivaling experienced radiologists. In drug discovery, machine learning models are cutting development timelines from years to months by predicting molecular interactions and identifying promising drug candidates before they enter clinical trials.\n\nThe integration of large language models into clinical workflows has also transformed how physicians interact with electronic health records. Natural language processing tools now summarize patient histories, flag potential drug interactions, and even draft clinical notes — freeing physicians to spend more time with patients.\n\nHowever, challenges remain. Data privacy concerns, algorithmic bias, and the need for regulatory frameworks that can keep pace with rapid innovation are all active areas of debate. The coming years will determine whether AI fulfills its transformative promise or becomes another case of technology outpacing governance.',
    category: 'technology',
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    cover_image: 'https://picsum.photos/seed/health/1200/600',
    published_at: '2026-04-01',
    reading_time: '5 min read',
  },
  {
    slug: 'quantum-internet-milestone',
    title: 'Scientists Achieve Quantum Internet Milestone',
    summary: 'Researchers successfully teleported quantum information across 100 kilometers of fiber optic cable.',
    content: 'A team of researchers at the European Quantum Communications Hub announced a breakthrough that brings the quantum internet one step closer to reality. For the first time, quantum information was reliably teleported across 100 kilometers of standard fiber optic cable without significant loss of fidelity.\n\nQuantum teleportation — the transfer of quantum states between particles without physical movement — is the backbone of proposed quantum networks. Unlike classical internet data, quantum information cannot be copied or intercepted without detection, making quantum networks theoretically unhackable.\n\nThe experiment used entangled photon pairs and a series of quantum repeaters to maintain coherence over the unprecedented distance. Previous records had been limited to about 50 kilometers in laboratory conditions.',
    category: 'science',
    author: { name: 'James Wright', avatar: 'https://i.pravatar.cc/100?u=james' },
    cover_image: 'https://picsum.photos/seed/quantum/1200/600',
    published_at: '2026-03-28',
    reading_time: '4 min read',
  },
  {
    slug: 'rise-of-spatial-computing',
    title: 'The Rise of Spatial Computing: Beyond the Screen',
    summary: 'Mixed reality headsets are finally finding their killer app — and it is not gaming.',
    content: 'After years of hype and false starts, spatial computing is finding its footing in unexpected places. Enterprise adoption of mixed reality headsets has surged 340% in the past year, driven not by gaming but by industrial applications like remote maintenance, architectural visualization, and medical training.\n\nCompanies like Meta, Apple, and a wave of startups are competing to define the spatial computing platform of the future. The key differentiator is not hardware specs but software ecosystems — whoever builds the most compelling development platform will likely win the market.\n\nFor consumers, the shift may be more gradual. While spatial computing offers transformative possibilities for how we interact with digital information, the social dynamics of wearing a headset in public remain a barrier. The industry is betting that lighter, more stylish form factors will eventually overcome this resistance.',
    category: 'technology',
    author: { name: 'Maya Patel', avatar: 'https://i.pravatar.cc/100?u=maya' },
    cover_image: 'https://picsum.photos/seed/spatial/1200/600',
    published_at: '2026-03-25',
    reading_time: '6 min read',
  },
  {
    slug: 'ocean-carbon-capture',
    title: 'Ocean-Based Carbon Capture Shows Promising Results',
    summary: 'A new approach to carbon removal uses engineered ocean alkalinity to sequester CO2 at scale.',
    content: 'A startup backed by the US Department of Energy has released results from the largest ocean-based carbon capture trial to date. The two-year experiment, conducted off the coast of Nova Scotia, demonstrated that engineered ocean alkalinity enhancement could sequester carbon dioxide at a cost of under $100 per ton — a threshold widely considered necessary for commercial viability.\n\nThe approach works by adding finely ground mineral silicates to ocean water, which reacts with dissolved CO2 to form stable bicarbonates. Unlike direct air capture, which requires significant energy input, ocean alkalinity enhancement leverages the ocean natural chemistry.\n\nCritics caution that the long-term ecological impacts of large-scale ocean alkalinity modification are not yet fully understood. Marine biologists have called for extensive environmental monitoring before any commercial deployment.',
    category: 'science',
    author: { name: 'David Kim', avatar: 'https://i.pravatar.cc/100?u=david' },
    cover_image: 'https://picsum.photos/seed/ocean/1200/600',
    published_at: '2026-03-22',
    reading_time: '5 min read',
  },
  {
    slug: 'generative-music-revolution',
    title: 'The Generative Music Revolution',
    summary: 'AI-composed music is no longer a novelty — it is reshaping how we think about creativity and authorship.',
    content: 'The boundary between human and machine creativity has never been blurrier than in the music industry of 2026. AI music generation tools have evolved from producing simple melodies to crafting full arrangements that are indistinguishable from human-composed works in blind listening tests.\n\nMajor streaming platforms now host millions of AI-generated tracks, raising complex questions about royalties, copyright, and artistic authenticity. Some artists have embraced the technology as a collaborative tool, using AI to generate ideas that they then refine and develop. Others see it as an existential threat to human musicianship.\n\nThe legal landscape is still catching up. Courts in several countries are grappling with whether AI-generated music can be copyrighted and who owns the rights — the developer of the AI, the user who prompted it, or nobody at all.',
    category: 'culture',
    author: { name: 'Lisa Torres', avatar: 'https://i.pravatar.cc/100?u=lisa' },
    cover_image: 'https://picsum.photos/seed/music/1200/600',
    published_at: '2026-03-20',
    reading_time: '7 min read',
  },
  {
    slug: 'digital-nomad-cities',
    title: 'The Cities Designed for Digital Nomads',
    summary: 'Purpose-built communities are emerging worldwide to cater to the growing remote work population.',
    content: 'A new wave of urban development is catering specifically to digital nomads — the growing population of remote workers who move between cities and countries while maintaining their careers. From Madeira to Bali to Mexico City, purpose-built or retrofitted neighborhoods are offering high-speed internet, coworking spaces, and community programming designed for transient professionals.\n\nSome countries are going further, creating special visa categories and tax incentives to attract digital nomads. Portugal, Estonia, and Thailand have emerged as leaders in this space, with streamlined visa processes and favorable tax treatment for remote workers earning foreign income.\n\nThe trend is reshaping both real estate markets and social dynamics in popular nomad destinations. While the economic benefits are clear, some local communities have raised concerns about gentrification and the displacement of long-term residents.',
    category: 'culture',
    author: { name: 'Carlos Rivera', avatar: 'https://i.pravatar.cc/100?u=carlos' },
    cover_image: 'https://picsum.photos/seed/nomad/1200/600',
    published_at: '2026-03-18',
    reading_time: '5 min read',
  },
  {
    slug: 'mars-sample-return-update',
    title: 'Mars Sample Return Mission Gets New Timeline',
    summary: 'NASA and ESA have announced a revised plan to bring Martian soil samples to Earth by 2033.',
    content: 'NASA and the European Space Agency have unveiled a revised architecture for the Mars Sample Return mission, the most ambitious robotic space mission ever attempted. The new plan aims to bring samples collected by the Perseverance rover back to Earth by 2033, two years later than originally hoped but with significantly reduced cost and complexity.\n\nThe redesigned mission replaces the original two-launch architecture with a single heavy-lift vehicle that will carry both the lander and the orbital return vehicle. This simplification was made possible by advances in lightweight materials and more efficient propulsion systems.\n\nThe samples, currently cached in sealed tubes on the Martian surface, could provide definitive answers about whether life ever existed on Mars. Scientists believe the ancient river delta explored by Perseverance is one of the most promising locations to find signs of past microbial life.',
    category: 'science',
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/100?u=sarah' },
    cover_image: 'https://picsum.photos/seed/mars/1200/600',
    published_at: '2026-03-15',
    reading_time: '4 min read',
  },
  {
    slug: 'open-source-ai-models',
    title: 'Open Source AI Models Are Changing the Game',
    summary: 'The open-source AI movement is democratizing access to powerful language models and reshaping the competitive landscape.',
    content: 'The open-source AI movement has reached a tipping point. Models like Llama, Mistral, and Qwen now rival proprietary systems on many benchmarks while being freely available for anyone to download, modify, and deploy. This democratization is having profound effects on the AI industry and beyond.\n\nStartups that previously could not afford to build competitive AI products are now leveraging open-source models as foundations, fine-tuning them for specific use cases at a fraction of the cost. Enterprises are adopting open-source models for data privacy reasons, keeping sensitive information within their own infrastructure rather than sending it to third-party APIs.\n\nThe trend has forced major AI companies to rethink their business models. Some have responded by accelerating their own open-source efforts, while others are doubling down on proprietary capabilities that open-source models have not yet matched, such as advanced reasoning and multimodal understanding.',
    category: 'technology',
    author: { name: 'Maya Patel', avatar: 'https://i.pravatar.cc/100?u=maya' },
    cover_image: 'https://picsum.photos/seed/opensource/1200/600',
    published_at: '2026-03-12',
    reading_time: '6 min read',
  },
];

export function getPostBySlug(category: string, slug: string): PostData | undefined {
  return posts.find((p) => p.category === category && p.slug === slug);
}

export function getPostsByCategory(category: string): PostData[] {
  return posts.filter((p) => p.category === category);
}
