import Link from 'next/link';

const featuredProducts = [
  { id: 1, name: 'Wellness Journal', price: 48, image: 'journal' },
  { id: 2, name: 'Morning Ritual Kit', price: 124, image: 'ritual' },
  { id: 3, name: 'Abundance Planner', price: 36, image: 'planner' },
  { id: 4, name: 'Crystal Collection', price: 89, image: 'crystal' },
  { id: 5, name: 'Meditation Cushion', price: 75, image: 'cushion' },
  { id: 6, name: 'Premium Tea Collection', price: 42, image: 'tea' },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Curated for the<br />Abundant Life
          </h1>
          <Link href="/products" className="inline-block px-8 py-3 bg-[#c9a96e] text-[#111111] font-semibold rounded-lg hover:bg-[#b8985d] transition">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#111111]">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/products" className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition"></div>
            <div className="absolute inset-0 flex items-end justify-start p-6">
              <h3 className="text-2xl font-bold text-white">Wellness</h3>
            </div>
          </Link>

          <Link href="/products" className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition"></div>
            <div className="absolute inset-0 flex items-end justify-start p-6">
              <h3 className="text-2xl font-bold text-white">Digital Tools</h3>
            </div>
          </Link>

          <Link href="/products" className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition"></div>
            <div className="absolute inset-0 flex items-end justify-start p-6">
              <h3 className="text-2xl font-bold text-white">Experiences</h3>
            </div>
          </Link>

          <Link href="/products" className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
              <span className="text-2xl">👕</span>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition"></div>
            <div className="absolute inset-0 flex items-end justify-start p-6">
              <h3 className="text-2xl font-bold text-white">Apparel</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#111111]">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link href={`/products/${product.image}`} key={product.id}>
              <div className="group cursor-pointer">
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition transform duration-300">
                    {product.image === 'journal' && '📓'}
                    {product.image === 'ritual' && '🌅'}
                    {product.image === 'planner' && '📅'}
                    {product.image === 'crystal' && '💎'}
                    {product.image === 'cushion' && '🧘'}
                    {product.image === 'tea' && '🫖'}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#c9a96e] transition">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#c9a96e]">${product.price}</span>
                  <button className="px-4 py-2 bg-[#111111] text-white rounded hover:bg-[#333333] transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#111111]">
            Our Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Ethically Sourced
              </h3>
              <p className="text-gray-600">
                Every product is carefully sourced from suppliers who share our commitment to ethical practices and fair wages.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Carbon Neutral
              </h3>
              <p className="text-gray-600">
                We offset 100% of our carbon emissions through verified environmental projects and sustainable shipping.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">♾️</div>
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Lifetime Guarantee
              </h3>
              <p className="text-gray-600">
                We stand behind every product. If you're not satisfied, we'll replace or refund it, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#111111]">
          Discover Your Abundant Lifestyle
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Carefully curated products for living your best life.
        </p>
        <Link href="/products" className="inline-block px-8 py-3 bg-[#111111] text-white font-semibold rounded-lg hover:bg-[#333333] transition">
          Explore Collections
        </Link>
      </section>
    </div>
  );
}
