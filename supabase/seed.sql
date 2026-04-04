-- Seed Categories
INSERT INTO categories (id, name, slug, description, app) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'Technology', 'technology', 'Articles about technology', 'wiki'),
  ('a0000000-0000-0000-0000-000000000002', 'Science', 'science', 'Articles about science', 'wiki'),
  ('b0000000-0000-0000-0000-000000000001', 'Technology', 'technology', 'Tech news and analysis', 'pulse'),
  ('b0000000-0000-0000-0000-000000000002', 'Science', 'science', 'Science news and discoveries', 'pulse'),
  ('b0000000-0000-0000-0000-000000000003', 'Culture', 'culture', 'Culture and society', 'pulse')
ON CONFLICT (slug) DO NOTHING;

-- Seed Articles (wiki)
INSERT INTO articles (id, title, slug, summary, content, category_id) VALUES
  ('c0000000-0000-0000-0000-000000000001', 'Artificial Intelligence', 'artificial-intelligence', 'The simulation of human intelligence processes by computer systems.', 'Artificial intelligence (AI) is the simulation of human intelligence processes by computer systems.', 'a0000000-0000-0000-0000-000000000001'),
  ('c0000000-0000-0000-0000-000000000002', 'Quantum Computing', 'quantum-computing', 'A type of computation that harnesses quantum mechanical phenomena.', 'Quantum computing is a type of computation that harnesses quantum mechanical phenomena such as superposition and entanglement.', 'a0000000-0000-0000-0000-000000000001'),
  ('c0000000-0000-0000-0000-000000000003', 'Blockchain Technology', 'blockchain-technology', 'A decentralized, distributed ledger technology.', 'Blockchain is a decentralized, distributed ledger technology that records transactions across many computers.', 'a0000000-0000-0000-0000-000000000001'),
  ('c0000000-0000-0000-0000-000000000004', 'CRISPR Gene Editing', 'crispr-gene-editing', 'Technology that enables editing parts of the genome.', 'CRISPR-Cas9 enables geneticists and medical researchers to edit parts of the genome by removing, altering, or adding sections of DNA.', 'a0000000-0000-0000-0000-000000000002'),
  ('c0000000-0000-0000-0000-000000000005', 'Renewable Energy', 'renewable-energy', 'Energy from naturally replenishing sources.', 'Renewable energy comes from sources that are naturally replenishing, including sunlight, wind, rain, tides, waves, and geothermal heat.', 'a0000000-0000-0000-0000-000000000002')
ON CONFLICT (slug) DO NOTHING;

-- Seed Authors (pulse)
INSERT INTO authors (id, name, bio, avatar_url) VALUES
  ('d0000000-0000-0000-0000-000000000001', 'Sarah Chen', 'Technology and science journalist', 'https://i.pravatar.cc/100?u=sarah'),
  ('d0000000-0000-0000-0000-000000000002', 'James Wright', 'Physics correspondent', 'https://i.pravatar.cc/100?u=james'),
  ('d0000000-0000-0000-0000-000000000003', 'Maya Patel', 'Senior tech editor', 'https://i.pravatar.cc/100?u=maya'),
  ('d0000000-0000-0000-0000-000000000004', 'David Kim', 'Environmental reporter', 'https://i.pravatar.cc/100?u=david'),
  ('d0000000-0000-0000-0000-000000000005', 'Lisa Torres', 'Culture and arts critic', 'https://i.pravatar.cc/100?u=lisa'),
  ('d0000000-0000-0000-0000-000000000006', 'Carlos Rivera', 'Lifestyle and travel writer', 'https://i.pravatar.cc/100?u=carlos')
ON CONFLICT DO NOTHING;

-- Seed Posts (pulse)
INSERT INTO posts (id, title, slug, summary, content, category_id, author_id, cover_image_url, published_at) VALUES
  ('e0000000-0000-0000-0000-000000000001', 'How AI Is Transforming Healthcare in 2026', 'ai-transforms-healthcare', 'From diagnostic imaging to drug discovery, AI is reshaping modern medicine.', 'AI has moved beyond the experimental phase in healthcare.', 'b0000000-0000-0000-0000-000000000001', 'd0000000-0000-0000-0000-000000000001', 'https://picsum.photos/seed/health/1200/600', '2026-04-01'),
  ('e0000000-0000-0000-0000-000000000002', 'Scientists Achieve Quantum Internet Milestone', 'quantum-internet-milestone', 'Researchers teleported quantum information across 100 kilometers.', 'A team announced a breakthrough that brings the quantum internet closer to reality.', 'b0000000-0000-0000-0000-000000000002', 'd0000000-0000-0000-0000-000000000002', 'https://picsum.photos/seed/quantum/1200/600', '2026-03-28'),
  ('e0000000-0000-0000-0000-000000000003', 'The Rise of Spatial Computing', 'rise-of-spatial-computing', 'Mixed reality headsets are finding their killer app.', 'Spatial computing is finding its footing in unexpected places.', 'b0000000-0000-0000-0000-000000000001', 'd0000000-0000-0000-0000-000000000003', 'https://picsum.photos/seed/spatial/1200/600', '2026-03-25'),
  ('e0000000-0000-0000-0000-000000000004', 'Ocean-Based Carbon Capture Shows Promising Results', 'ocean-carbon-capture', 'A new approach uses engineered ocean alkalinity to sequester CO2.', 'A startup has released results from the largest ocean-based carbon capture trial.', 'b0000000-0000-0000-0000-000000000002', 'd0000000-0000-0000-0000-000000000004', 'https://picsum.photos/seed/ocean/1200/600', '2026-03-22'),
  ('e0000000-0000-0000-0000-000000000005', 'The Generative Music Revolution', 'generative-music-revolution', 'AI-composed music is reshaping how we think about creativity.', 'The boundary between human and machine creativity has never been blurrier.', 'b0000000-0000-0000-0000-000000000003', 'd0000000-0000-0000-0000-000000000005', 'https://picsum.photos/seed/music/1200/600', '2026-03-20'),
  ('e0000000-0000-0000-0000-000000000006', 'The Cities Designed for Digital Nomads', 'digital-nomad-cities', 'Purpose-built communities are emerging for remote workers.', 'A new wave of urban development is catering to digital nomads.', 'b0000000-0000-0000-0000-000000000003', 'd0000000-0000-0000-0000-000000000006', 'https://picsum.photos/seed/nomad/1200/600', '2026-03-18'),
  ('e0000000-0000-0000-0000-000000000007', 'Mars Sample Return Mission Gets New Timeline', 'mars-sample-return-update', 'NASA and ESA revised plan to bring Martian samples to Earth by 2033.', 'NASA and ESA unveiled a revised architecture for Mars Sample Return.', 'b0000000-0000-0000-0000-000000000002', 'd0000000-0000-0000-0000-000000000001', 'https://picsum.photos/seed/mars/1200/600', '2026-03-15'),
  ('e0000000-0000-0000-0000-000000000008', 'Open Source AI Models Are Changing the Game', 'open-source-ai-models', 'The open-source AI movement is democratizing powerful language models.', 'The open-source AI movement has reached a tipping point.', 'b0000000-0000-0000-0000-000000000001', 'd0000000-0000-0000-0000-000000000003', 'https://picsum.photos/seed/opensource/1200/600', '2026-03-12')
ON CONFLICT (slug) DO NOTHING;

-- Seed Artworks (studio)
INSERT INTO artworks (id, prompt, image_url, model, width, height) VALUES
  ('f0000000-0000-0000-0000-000000000001', 'A cyberpunk cityscape at sunset with neon lights', 'https://picsum.photos/seed/art1/400/500', 'stable-diffusion-xl', 400, 500),
  ('f0000000-0000-0000-0000-000000000002', 'An ethereal forest with bioluminescent trees', 'https://picsum.photos/seed/art2/400/600', 'dall-e-3', 400, 600),
  ('f0000000-0000-0000-0000-000000000003', 'Abstract geometric shapes in vibrant colors', 'https://picsum.photos/seed/art3/400/400', 'midjourney-v6', 400, 400),
  ('f0000000-0000-0000-0000-000000000004', 'A steampunk mechanical owl perched on gears', 'https://picsum.photos/seed/art4/400/550', 'stable-diffusion-xl', 400, 550),
  ('f0000000-0000-0000-0000-000000000005', 'Underwater temple ruins with tropical fish', 'https://picsum.photos/seed/art5/400/450', 'dall-e-3', 400, 450),
  ('f0000000-0000-0000-0000-000000000006', 'A Japanese garden in autumn with falling leaves', 'https://picsum.photos/seed/art6/400/500', 'midjourney-v6', 400, 500),
  ('f0000000-0000-0000-0000-000000000007', 'Futuristic space station orbiting a gas giant', 'https://picsum.photos/seed/art7/400/600', 'stable-diffusion-xl', 400, 600),
  ('f0000000-0000-0000-0000-000000000008', 'Art deco poster of a vintage rocket launch', 'https://picsum.photos/seed/art8/400/550', 'dall-e-3', 400, 550)
ON CONFLICT DO NOTHING;
