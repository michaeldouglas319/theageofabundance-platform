import Link from 'next/link';
import { posts } from '@/lib/posts';

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className={`category-badge category-${category}`}>
      {category}
    </span>
  );
}

export default function HomePage() {
  const hero = posts[0];
  const secondary = posts.slice(1, 4);
  const rest = posts.slice(4);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
      {/* Hero section */}
      <section style={{ padding: '32px 0 40px', borderBottom: '3px solid var(--verge-black)' }}>
        <Link href={`/${hero.category}/${hero.slug}`} className="hover-underline" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div>
            <CategoryBadge category={hero.category} />
            <h2 className="headline-xl" style={{ margin: '12px 0 16px' }}>{hero.title}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--verge-gray)', lineHeight: 1.5, marginBottom: '12px' }}>{hero.summary}</p>
            <div className="byline">
              <img src={hero.author.avatar} alt="" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
              <span style={{ fontWeight: '600' }}>{hero.author.name}</span>
              <span>/</span>
              <span>{hero.reading_time}</span>
            </div>
          </div>
          <div>
            <img src={hero.cover_image} alt={hero.title} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} />
          </div>
        </Link>
      </section>

      {/* Secondary stories row */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', padding: '32px 0', borderBottom: '1px solid var(--verge-border)' }}>
        {secondary.map((post) => (
          <Link key={post.slug} href={`/${post.category}/${post.slug}`} className="hover-underline">
            <article>
              <img src={post.cover_image} alt={post.title} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', marginBottom: '12px' }} />
              <CategoryBadge category={post.category} />
              <h3 className="headline-lg" style={{ margin: '8px 0 10px' }}>{post.title}</h3>
              <div className="byline">
                <span style={{ fontWeight: '600' }}>{post.author.name}</span>
                <span>/</span>
                <span>{post.reading_time}</span>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Two-column: stories list + sidebar */}
      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', padding: '32px 0' }}>
        {/* Story list */}
        <div>
          <h2 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px', color: 'var(--verge-gray)' }}>Latest Stories</h2>
          {rest.map((post) => (
            <Link key={post.slug} href={`/${post.category}/${post.slug}`} className="hover-underline" style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '20px', paddingBottom: '20px', marginBottom: '20px', borderBottom: '1px solid var(--verge-border)', alignItems: 'start' }}>
              <div>
                <CategoryBadge category={post.category} />
                <h3 className="headline-md" style={{ margin: '6px 0 8px' }}>{post.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--verge-gray)', lineHeight: 1.5, margin: '0 0 8px' }}>{post.summary}</p>
                <div className="byline">
                  <span style={{ fontWeight: '600' }}>{post.author.name}</span>
                  <span>/</span>
                  <span>{post.reading_time}</span>
                </div>
              </div>
              <img src={post.cover_image} alt="" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
            </Link>
          ))}
        </div>

        {/* Sidebar */}
        <aside>
          <h2 style={{ fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px', color: 'var(--verge-gray)', borderBottom: '3px solid var(--verge-red)', paddingBottom: '8px' }}>Most Popular</h2>
          {posts.slice(0, 5).map((post, i) => (
            <Link key={post.slug} href={`/${post.category}/${post.slug}`} className="hover-underline" style={{ display: 'flex', gap: '12px', paddingBottom: '14px', marginBottom: '14px', borderBottom: '1px solid var(--verge-border)' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: '900', color: '#ddd', lineHeight: 1, minWidth: '30px' }}>{i + 1}</span>
              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: '700', lineHeight: 1.25, letterSpacing: '-0.01em' }}>{post.title}</h3>
                <div className="byline" style={{ marginTop: '4px' }}>
                  <span>{post.author.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </aside>
      </section>
    </div>
  );
}
