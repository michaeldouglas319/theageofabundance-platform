'use client';

import { use, useState } from 'react';
import Link from 'next/link';

const productData: Record<string, any> = {
  journal: {
    name: 'Wellness Journal',
    price: 48,
    rating: 4.8,
    reviews: 124,
    image: '📓',
    description: 'A beautifully designed journal for tracking your daily wellness journey. Includes guided prompts, meditation logs, and gratitude sections.',
    features: [
      'Premium hardcover binding',
      'Eco-friendly paper',
      'Guided daily prompts',
      '365 pages',
      'Ribbon bookmark included'
    ]
  },
  ritual: {
    name: 'Morning Ritual Kit',
    price: 124,
    rating: 4.9,
    reviews: 89,
    image: '🌅',
    description: 'Everything you need to create a nourishing morning ritual. Includes premium tea blend, meditation guide, and journal.',
    features: [
      'Organic tea blend',
      'Ceramic mug',
      'Meditation guide book',
      'Gratitude cards',
      'Luxury packaging'
    ]
  },
  planner: {
    name: 'Abundance Planner',
    price: 36,
    rating: 4.7,
    reviews: 156,
    image: '📅',
    description: 'Plan your year with intention using this comprehensive abundance planner designed for your goals and dreams.',
    features: [
      'Monthly planning pages',
      'Goal-setting sections',
      'Habit tracking',
      'Monthly reviews',
      'Inspirational quotes'
    ]
  },
  crystal: {
    name: 'Crystal Collection',
    price: 89,
    rating: 4.6,
    reviews: 73,
    image: '💎',
    description: 'Hand-selected crystals for healing and wellness. Each stone comes with care instructions and properties guide.',
    features: [
      'Five premium crystals',
      'Velvet display box',
      'Care instruction cards',
      'Properties guide',
      'Authenticity certificate'
    ]
  },
  cushion: {
    name: 'Meditation Cushion',
    price: 75,
    rating: 4.9,
    reviews: 203,
    image: '🧘',
    description: 'Premium meditation cushion for comfortable, prolonged sitting. Supports proper posture and alignment.',
    features: [
      'Organic cotton cover',
      'Buckwheat fill',
      'Adjustable height',
      'Machine washable',
      'Non-slip base'
    ]
  },
  tea: {
    name: 'Premium Tea Collection',
    price: 42,
    rating: 4.8,
    reviews: 95,
    image: '🫖',
    description: 'Curated selection of organic wellness teas blended for different times of day and intentions.',
    features: [
      'Four tea varieties',
      'Organic ingredients',
      'Loose leaf format',
      'Reusable infuser included',
      'Tasting guide'
    ]
  }
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [quantity, setQuantity] = useState(1);
  const product = productData[slug] || productData.journal;

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart`);
  };

  const handleAddToWishlist = () => {
    alert(`Added ${product.name} to wishlist`);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/products" className="text-[#c9a96e] hover:text-[#111111] transition mb-8 inline-block">
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 flex items-center justify-center text-9xl">
            {product.image}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-[#111111] mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#c9a96e]">★</span>
                ))}
              </div>
              <span className="text-gray-600">{product.reviews} reviews</span>
            </div>

            <div className="text-3xl font-bold text-[#c9a96e] mb-6">${product.price}</div>

            <p className="text-gray-700 text-lg mb-8">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#111111] mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#c9a96e]">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-[#111111] hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-6 py-2 text-[#111111] border-l border-r border-gray-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-[#111111] hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 px-8 py-3 bg-[#111111] text-white font-bold rounded-lg hover:bg-[#333333] transition"
              >
                Add to Cart
              </button>
              <button
                onClick={handleAddToWishlist}
                className="px-6 py-3 border-2 border-[#c9a96e] text-[#111111] font-bold rounded-lg hover:bg-[#c9a96e] hover:text-white transition"
              >
                ♡
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
              <p className="mb-2"><strong>Shipping:</strong> Free on orders over $75</p>
              <p><strong>Returns:</strong> 30-day satisfaction guarantee</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-gray-200 py-12">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Details</h3>
              <p className="text-gray-700">
                Crafted with premium materials and designed for everyday use. Each product is carefully inspected for quality before shipping.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Reviews</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#c9a96e]">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">"Exceeded my expectations in every way!"</p>
                  <p className="text-gray-500 text-xs mt-1">- Alex M.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-4">Shipping</h3>
              <p className="text-gray-700 text-sm">
                Standard shipping (5-7 business days): Free on orders over $75
              </p>
              <p className="text-gray-700 text-sm mt-2">
                Express shipping available for $15
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-[#111111] mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['journal', 'ritual', 'tea', 'cushion'].map((slug) => {
              const relatedProduct = productData[slug];
              return (
                <Link href={`/products/${slug}`} key={slug}>
                  <div className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-40 flex items-center justify-center text-5xl mb-4 group-hover:shadow-lg transition">
                      {relatedProduct.image}
                    </div>
                    <h3 className="font-bold text-[#111111] group-hover:text-[#c9a96e] transition">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-[#c9a96e] font-bold">${relatedProduct.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
