import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/posts';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);
  if (!post) notFound();

  return (
    <div>
      {/* Full-width hero */}
      <div style={{ position: 'relative', height: '50vh', minHeight: '400px', overflow: 'hidden' }}>
        <img src={post.cover_image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '800px', padding: '0 20px', color: 'white' }}>
          <span className={`category-badge category-${post.category}`}>{post.category}</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', lineHeight: 1.1, letterSpacing: '-0.03em', margin: '12px 0 16px' }}>{post.title}</h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, lineHeight: 1.4 }}>{post.summary}</p>
        </div>
      </div>

      {/* Article content */}
      <article style={{ maxWidth: '700px', margin: '0 auto', padding: '32px 20px 60px' }}>
        {/* Byline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '24px', marginBottom: '32px', borderBottom: '1px solid var(--verge-border)' }}>
          <img src={post.author.avatar} alt={post.author.name} style={{ width: '44px', height: '44px', borderRadius: '50%' }} />
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{post.author.name}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--verge-gray)' }}>{post.published_at} &middot; {post.reading_time}</div>
          </div>
        </div>

        {/* Body */}
        <div className="article-body">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        {/* Bottom nav */}
        <div style={{ borderTop: '3px solid var(--verge-black)', paddingTop: '20px', marginTop: '40px' }}>
          <Link href={`/category/${post.category}`} style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--verge-gray)' }}>
            ← More in {post.category}
          </Link>
        </div>
      </article>
    </div>
  );
}
