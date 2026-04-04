import Link from 'next/link';
import { getPostsByCategory } from '@/lib/posts';

interface PageProps {
  params: Promise<{ name: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { name } = await params;
  const categoryPosts = getPostsByCategory(name);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 20px' }}>
      <div style={{ borderBottom: '3px solid var(--verge-black)', paddingBottom: '12px', marginBottom: '32px' }}>
        <span className={`category-badge category-${name}`} style={{ fontSize: '0.85rem', padding: '4px 12px' }}>{name}</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.03em', marginTop: '8px', textTransform: 'capitalize' }}>{name}</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {categoryPosts.map((post) => (
          <Link key={post.slug} href={`/${post.category}/${post.slug}`} className="hover-underline">
            <article>
              <img src={post.cover_image} alt={post.title} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', marginBottom: '12px' }} />
              <span className={`category-badge category-${post.category}`}>{post.category}</span>
              <h3 className="headline-lg" style={{ margin: '8px 0 10px' }}>{post.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--verge-gray)', lineHeight: 1.5, marginBottom: '8px' }}>{post.summary}</p>
              <div className="byline">
                <img src={post.author.avatar} alt="" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                <span style={{ fontWeight: '600' }}>{post.author.name}</span>
                <span>/</span>
                <span>{post.reading_time}</span>
              </div>
            </article>
          </Link>
        ))}
        {categoryPosts.length === 0 && (
          <p style={{ color: 'var(--verge-gray)', gridColumn: 'span 3', textAlign: 'center', padding: '40px' }}>No posts in this category yet.</p>
        )}
      </div>
    </div>
  );
}
