'use client';

import Link from 'next/link';

const artworks = [
  {
    id: '1',
    prompt: 'A cyberpunk cityscape at sunset with neon lights reflecting on wet streets, rain puddles, cybernetic advertisements',
    image_url: 'https://picsum.photos/seed/art1/400/500',
    model: 'SDXL',
    likes: 342,
  },
  {
    id: '2',
    prompt: 'An ethereal forest with bioluminescent trees and floating particles, magical atmosphere, glowing flora',
    image_url: 'https://picsum.photos/seed/art2/400/600',
    model: 'DALL-E 3',
    likes: 891,
  },
  {
    id: '3',
    prompt: 'Abstract geometric shapes in vibrant neon colors on dark background, 3D render, sleek design',
    image_url: 'https://picsum.photos/seed/art3/400/400',
    model: 'MJ v6',
    likes: 156,
  },
  {
    id: '4',
    prompt: 'A steampunk mechanical owl with brass gears and copper plating, detailed engineering, sitting on industrial pipe',
    image_url: 'https://picsum.photos/seed/art4/400/550',
    model: 'SDXL',
    likes: 478,
  },
  {
    id: '5',
    prompt: 'Underwater ancient temple ruins surrounded by tropical fish and coral, bioluminescent lighting, deep ocean',
    image_url: 'https://picsum.photos/seed/art5/400/450',
    model: 'DALL-E 3',
    likes: 267,
  },
  {
    id: '6',
    prompt: 'Japanese zen garden in autumn with red maple leaves falling gently, stone lantern, koi pond, serene',
    image_url: 'https://picsum.photos/seed/art6/400/500',
    model: 'MJ v6',
    likes: 723,
  },
  {
    id: '7',
    prompt: 'Futuristic space station interior with holographic displays and control panels, orbiting Jupiter, sci-fi aesthetic',
    image_url: 'https://picsum.photos/seed/art7/400/600',
    model: 'SDXL',
    likes: 534,
  },
  {
    id: '8',
    prompt: 'Art deco travel poster of a retro-futuristic rocket launch at dawn, vintage aesthetic, bold typography',
    image_url: 'https://picsum.photos/seed/art8/400/550',
    model: 'DALL-E 3',
    likes: 189,
  },
  {
    id: '9',
    prompt: 'Crystal cave with prismatic light refractions and underground lake, glowing crystals, photorealistic',
    image_url: 'https://picsum.photos/seed/art9/400/480',
    model: 'SDXL',
    likes: 612,
  },
  {
    id: '10',
    prompt: 'Surreal melting clock landscape inspired by Dalí in digital art style, dreamlike, flowing forms',
    image_url: 'https://picsum.photos/seed/art10/400/520',
    model: 'MJ v6',
    likes: 445,
  },
  {
    id: '11',
    prompt: 'Cozy fantasy tavern interior with fireplace and magical creatures, warm lighting, wooden beams',
    image_url: 'https://picsum.photos/seed/art11/400/460',
    model: 'SDXL',
    likes: 301,
  },
  {
    id: '12',
    prompt: 'Northern lights over a frozen Scandinavian fjord at midnight, aurora borealis, snow-covered mountains',
    image_url: 'https://picsum.photos/seed/art12/400/580',
    model: 'DALL-E 3',
    likes: 867,
  },
];

export default function GalleryPage() {
  return (
    <div>
      {/* Page Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}
      >
        <div>
          <h1
            className="gradient-text"
            style={{
              fontSize: '2.2em',
              fontWeight: '700',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Explore
          </h1>
          <p
            style={{
              color: 'var(--studio-text-muted)',
              fontSize: '0.95em',
              marginTop: '8px',
              fontWeight: '400',
            }}
          >
            Discover AI-generated artwork from the community
          </p>
        </div>
        <Link
          href="/create"
          className="gradient-btn"
          style={{
            padding: '12px 28px',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '15px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          ✨ Create
        </Link>
      </div>

      {/* Filter Pills */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '28px',
          flexWrap: 'wrap',
        }}
      >
        {['All', 'SDXL', 'DALL-E 3', 'Midjourney', 'Flux'].map((tag) => (
          <button
            key={tag}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500',
              background:
                tag === 'All' ? 'var(--studio-accent)' : 'var(--studio-surface-2)',
              color:
                tag === 'All' ? 'white' : 'var(--studio-text-muted)',
              border:
                tag === 'All'
                  ? '1px solid var(--studio-accent)'
                  : '1px solid var(--studio-border)',
              cursor: 'pointer',
              transition: 'all 0.15s ease-out',
            }}
            className={
              tag !== 'All'
                ? 'hover:border-[var(--studio-accent)] hover:text-[var(--studio-accent)]'
                : ''
            }
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <div className="masonry" data-testid="gallery-grid">
        {artworks.map((artwork) => (
          <Link
            key={artwork.id}
            href={`/${artwork.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className="masonry-item card-hover"
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                background: 'var(--studio-surface)',
                border: '1px solid var(--studio-border)',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '1 / 1.25',
                  background: 'var(--studio-bg)',
                }}
              >
                <img
                  src={artwork.image_url}
                  alt={artwork.prompt}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.2s ease-out',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    backdropFilter: 'blur(0px)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0';
                  }}
                >
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#e8e8f0',
                      lineHeight: 1.5,
                      margin: 0,
                      fontWeight: '400',
                      textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                    }}
                  >
                    {artwork.prompt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div
                style={{
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--studio-border)',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'var(--studio-surface-2)',
                    color: 'var(--studio-text-muted)',
                    fontWeight: '500',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {artwork.model}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    color: 'var(--studio-text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontWeight: '500',
                  }}
                >
                  <span style={{ fontSize: '14px' }}>♥</span>
                  {artwork.likes}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
