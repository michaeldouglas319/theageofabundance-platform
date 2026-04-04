'use client';

import { useState } from 'react';

const models = [
  'Stable Diffusion XL',
  'DALL-E 3',
  'Midjourney v6',
  'Flux Pro',
];

const styles = [
  'Photorealistic',
  'Digital Art',
  'Anime',
  'Oil Painting',
  'Watercolor',
  '3D Render',
  'Pixel Art',
  'Concept Art',
  'Illustration',
  'Fantasy',
];

export default function CreatePage() {
  const [prompt, setPrompt] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function toggleStyle(style: string) {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  }

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);
    // Simulate generation delay
    await new Promise((r) => setTimeout(r, 2000));
    setResult(
      `https://picsum.photos/seed/${encodeURIComponent(prompt.slice(0, 30))}/768/768`
    );
    setLoading(false);
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '420px 1fr',
        gap: '28px',
        height: 'calc(100vh - 92px)',
      }}
    >
      {/* Left Panel — Form */}
      <div
        style={{
          background: 'var(--studio-surface)',
          borderRadius: '16px',
          border: '1px solid var(--studio-border)',
          padding: '28px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div>
          <h2
            className="gradient-text"
            style={{
              fontSize: '1.6em',
              fontWeight: '700',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            Create Artwork
          </h2>
          <p
            style={{
              color: 'var(--studio-text-muted)',
              fontSize: '13px',
              marginTop: '6px',
              fontWeight: '400',
            }}
          >
            Describe your vision and let AI bring it to life
          </p>
        </div>

        {/* Model Selector */}
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
            AI Model
          </label>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            style={{
              width: '100%',
              background: 'var(--studio-bg)',
              border: '1px solid var(--studio-border)',
              borderRadius: '10px',
              padding: '12px 14px',
              color: 'var(--studio-text)',
              fontSize: '14px',
              outline: 'none',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            {models.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Prompt */}
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
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to create... Be detailed and specific."
            rows={4}
            style={{
              width: '100%',
              background: 'var(--studio-bg)',
              border: '1px solid var(--studio-border)',
              borderRadius: '10px',
              padding: '12px 14px',
              color: 'var(--studio-text)',
              fontSize: '14px',
              resize: 'none',
              outline: 'none',
              lineHeight: 1.5,
              fontFamily: 'inherit',
            }}
          />
          <p
            style={{
              fontSize: '12px',
              color: 'var(--studio-text-muted)',
              marginTop: '8px',
              margin: '8px 0 0 0',
            }}
          >
            {prompt.length} / 2000 characters
          </p>
        </div>

        {/* Negative Prompt */}
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
            Negative Prompt
          </label>
          <textarea
            value={negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)}
            placeholder="What to exclude from the image (optional)"
            rows={2}
            style={{
              width: '100%',
              background: 'var(--studio-bg)',
              border: '1px solid var(--studio-border)',
              borderRadius: '10px',
              padding: '12px 14px',
              color: 'var(--studio-text)',
              fontSize: '14px',
              resize: 'none',
              outline: 'none',
              lineHeight: 1.5,
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Style Tags */}
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
            Style
          </label>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {styles.map((s) => (
              <button
                key={s}
                onClick={() => toggleStyle(s)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  cursor: 'pointer',
                  background: selectedStyles.includes(s)
                    ? 'var(--studio-accent)'
                    : 'var(--studio-bg)',
                  color: selectedStyles.includes(s)
                    ? 'white'
                    : 'var(--studio-text-muted)',
                  border:
                    '1px solid ' +
                    (selectedStyles.includes(s)
                      ? 'transparent'
                      : 'var(--studio-border)'),
                  transition: 'all 0.15s ease-out',
                  fontWeight: '500',
                }}
                className={
                  !selectedStyles.includes(s)
                    ? 'hover:text-[var(--studio-accent)] hover:border-[var(--studio-accent)]'
                    : ''
                }
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div style={{ marginTop: 'auto' }}>
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="gradient-btn"
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: loading || !prompt.trim() ? 'not-allowed' : 'pointer',
              opacity: loading || !prompt.trim() ? 0.5 : 1,
              letterSpacing: '-0.01em',
            }}
          >
            {loading ? '✨ Generating...' : '✨ Generate Image'}
          </button>
          <p
            style={{
              fontSize: '12px',
              color: 'var(--studio-text-muted)',
              marginTop: '12px',
              textAlign: 'center',
              margin: '12px 0 0 0',
            }}
          >
            Typical generation: 30-60 seconds
          </p>
        </div>
      </div>

      {/* Right Panel — Preview */}
      <div
        style={{
          background: 'var(--studio-surface)',
          borderRadius: '16px',
          border: '1px solid var(--studio-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {result ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <img
              src={result}
              alt={prompt}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 12px 48px rgba(139, 92, 246, 0.2)',
              }}
            />
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              color: 'var(--studio-text-muted)',
              padding: '60px 40px',
            }}
          >
            <div
              style={{
                fontSize: '64px',
                marginBottom: '20px',
                opacity: 0.4,
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            >
              ✨
            </div>
            <p
              style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '8px',
                color: 'var(--studio-text)',
              }}
            >
              Your artwork will appear here
            </p>
            <p
              style={{
                fontSize: '14px',
                opacity: 0.7,
              }}
            >
              Enter a detailed prompt and click Generate to create
            </p>
          </div>
        )}

        {/* Loading Spinner Overlay */}
        {loading && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                border: '3px solid rgba(139, 92, 246, 0.2)',
                borderTopColor: 'var(--studio-accent)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginBottom: '16px',
              }}
            />
            <p
              style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              Generating your masterpiece...
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
