import { notFound } from 'next/navigation';
import Link from 'next/link';

const artworks: Record<
  string,
  {
    id: string;
    prompt: string;
    image_url: string;
    model: string;
    likes: number;
    created_at: string;
    dimensions: string;
  }
> = {
  '1': {
    id: '1',
    prompt:
      'A cyberpunk cityscape at sunset with neon lights reflecting on wet streets, rain puddles, cybernetic advertisements',
    image_url: 'https://picsum.photos/seed/art1/800/1000',
    model: 'Stable Diffusion XL',
    likes: 342,
    created_at: '2026-03-15',
    dimensions: '1024 × 1024',
  },
  '2': {
    id: '2',
    prompt:
      'An ethereal forest with bioluminescent trees and floating particles, magical atmosphere, glowing flora',
    image_url: 'https://picsum.photos/seed/art2/800/1200',
    model: 'DALL-E 3',
    likes: 891,
    created_at: '2026-03-14',
    dimensions: '1024 × 1536',
  },
  '3': {
    id: '3',
    prompt:
      'Abstract geometric shapes in vibrant neon colors on dark background, 3D render, sleek design',
    image_url: 'https://picsum.photos/seed/art3/800/800',
    model: 'Midjourney v6',
    likes: 156,
    created_at: '2026-03-13',
    dimensions: '1024 × 1024',
  },
  '4': {
    id: '4',
    prompt:
      'A steampunk mechanical owl with brass gears and copper plating, detailed engineering, sitting on industrial pipe',
    image_url: 'https://picsum.photos/seed/art4/800/1100',
    model: 'Stable Diffusion XL',
    likes: 478,
    created_at: '2026-03-12',
    dimensions: '1024 × 1408',
  },
  '5': {
    id: '5',
    prompt:
      'Underwater ancient temple ruins surrounded by tropical fish and coral, bioluminescent lighting, deep ocean',
    image_url: 'https://picsum.photos/seed/art5/800/900',
    model: 'DALL-E 3',
    likes: 267,
    created_at: '2026-03-11',
    dimensions: '1024 × 1152',
  },
  '6': {
    id: '6',
    prompt:
      'Japanese zen garden in autumn with red maple leaves falling gently, stone lantern, koi pond, serene',
    image_url: 'https://picsum.photos/seed/art6/800/1000',
    model: 'Midjourney v6',
    likes: 723,
    created_at: '2026-03-10',
    dimensions: '1024 × 1280',
  },
  '7': {
    id: '7',
    prompt:
      'Futuristic space station interior with holographic displays and control panels, orbiting Jupiter, sci-fi aesthetic',
    image_url: 'https://picsum.photos/seed/art7/800/1200',
    model: 'Stable Diffusion XL',
    likes: 534,
    created_at: '2026-03-09',
    dimensions: '1024 × 1536',
  },
  '8': {
    id: '8',
    prompt:
      'Art deco travel poster of a retro-futuristic rocket launch at dawn, vintage aesthetic, bold typography',
    image_url: 'https://picsum.photos/seed/art8/800/1100',
    model: 'DALL-E 3',
    likes: 189,
    created_at: '2026-03-08',
    dimensions: '1024 × 1408',
  },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArtworkDetailPage({ params }: PageProps) {
  const { id } = await params;
  const artwork = artworks[id];

  if (!artwork) {
    notFound();
  }

  return (
    <div>
      {/* Back Link */}
      <Link
        href="/"
        style={{
          color: 'var(--studio-accent)',
          fontSize: '14px',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '28px',
          fontWeight: '500',
          transition: 'all 0.15s',
        }}
        className="hover:gap-2"
      >
        ← Back to Gallery
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '28px' }}>
        {/* Main Image */}
        <div
          style={{
            background: 'var(--studio-surface)',
            borderRadius: '16px',
            border: '1px solid var(--studio-border)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '600px',
            padding: '20px',
          }}
        >
          <img
            src={artwork.image_url}
            alt={artwork.prompt}
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '12px',
            }}
          />
        </div>

        {/* Details Sidebar */}
        <div
          style={{
            background: 'var(--studio-surface)',
            borderRadius: '16px',
            border: '1px solid var(--studio-border)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Creator Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--studio-border)',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: '700',
                color: 'white',
              }}
            >
              A
            </div>
            <div>
              <div
                style={{
                  fontWeight: '600',
                  fontSize: '15px',
                  color: 'var(--studio-text)',
                }}
              >
                Anonymous Artist
              </div>
              <div
                style={{
                  fontSize: '13px',
                  color: 'var(--studio-text-muted)',
                  marginTop: '2px',
                }}
              >
                Created {artwork.created_at}
              </div>
            </div>
          </div>

          {/* Prompt Box */}
          <div>
            <label
              style={{
                fontSize: '11px',
                color: 'var(--studio-text-muted)',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '10px',
              }}
            >
              Prompt
            </label>
            <div
              style={{
                background: 'var(--studio-bg)',
                borderRadius: '10px',
                padding: '14px',
                fontSize: '14px',
                lineHeight: 1.6,
                border: '1px solid var(--studio-border)',
                color: 'var(--studio-text)',
              }}
            >
              {artwork.prompt}
            </div>
          </div>

          {/* Model & Dimensions Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div
              style={{
                background: 'var(--studio-bg)',
                borderRadius: '10px',
                padding: '14px',
                border: '1px solid var(--studio-border)',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  color: 'var(--studio-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '6px',
                  fontWeight: '600',
                }}
              >
                Model
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--studio-text)',
                }}
              >
                {artwork.model}
              </div>
            </div>
            <div
              style={{
                background: 'var(--studio-bg)',
                borderRadius: '10px',
                padding: '14px',
                border: '1px solid var(--studio-border)',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  color: 'var(--studio-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '6px',
                  fontWeight: '600',
                }}
              >
                Size
              </div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--studio-text)',
                }}
              >
                {artwork.dimensions}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              style={{
                flex: 1,
                background: 'var(--studio-bg)',
                border: '1px solid var(--studio-border)',
                borderRadius: '10px',
                padding: '12px',
                color: 'var(--studio-text)',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                transition: 'all 0.15s',
              }}
              className="hover:border-[var(--studio-accent)] hover:text-[var(--studio-accent)]"
            >
              ♥ {artwork.likes}
            </button>
            <button
              style={{
                flex: 1,
                background: 'var(--studio-bg)',
                border: '1px solid var(--studio-border)',
                borderRadius: '10px',
                padding: '12px',
                color: 'var(--studio-text)',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.15s',
              }}
              className="hover:border-[var(--studio-accent)] hover:text-[var(--studio-accent)]"
            >
              🔗 Share
            </button>
          </div>

          {/* Download Button */}
          <a
            href={artwork.image_url}
            download
            className="gradient-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '13px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              gap: '6px',
            }}
          >
            ↓ Download Image
          </a>
        </div>
      </div>
    </div>
  );
}
