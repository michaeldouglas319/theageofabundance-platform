'use client';

import { useState } from 'react';
import Link from 'next/link';

const allProducts = [
  { id: 1, name: 'Wellness Journal', price: 48, category: 'wellness', image: 'journal' },
  { id: 2, name: 'Morning Ritual Kit', price: 124, category: 'wellness', image: 'ritual' },
  { id: 3, name: 'Abundance Planner', price: 36, category: 'digital', image: 'planner' },
  { id: 4, name: 'Crystal Collection', price: 89, category: 'wellness', image: 'crystal' },
  { id: 5, name: 'Meditation Cushion', price: 75, category: 'wellness', image: 'cushion' },
  { id: 6, name: 'Premium Tea Collection', price: 42, category: 'wellness', image: 'tea' },
  { id: 7, name: 'Mindfulness App', price: 99, category: 'digital', image: 'app' },
  { id: 8, name: 'Digital Wellness Guide', price: 29, category: 'digital', image: 'guide' },
  { id: 9, name: 'Premium Apparel', price: 65, category: 'apparel', image: 'apparel' },
  { id: 10, name: 'Yoga Mat', price: 58, category: 'wellness', image: 'mat' },
  { id: 11, name: 'Wellness Experience', price: 199, category: 'experiences', image: 'experience' },
  { id: 12, name: 'Retreat Package', price: 399, category: 'experiences', image: 'retreat' },
];

const categories = ['All', 'Wellness', 'Digital Tools', 'Experiences', 'Apparel'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(500);
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === 'All' ||
      (selectedCategory === 'Wellness' && product.category === 'wellness') ||
      (selectedCategory === 'Digital Tools' && product.category === 'digital') ||
      (selectedCategory === 'Experiences' && product.category === 'experiences') ||
      (selectedCategory === 'Apparel' && product.category === 'apparel');

    const priceMatch = product.price <= priceRange;
    return categoryMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#111111] mb-12">All Products</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#111111] mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-4 h-4 rounded accent-[#c9a96e]"
                      />
                      <span className="text-[#111111]">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#111111] mb-4">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#c9a96e]"
                />
                <div className="text-sm text-gray-600 mt-2">
                  Up to ${priceRange}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-lg font-bold text-[#111111] mb-4">Sort</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#c9a96e]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
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
                        {product.image === 'app' && '📱'}
                        {product.image === 'guide' && '📖'}
                        {product.image === 'apparel' && '👕'}
                        {product.image === 'mat' && '🧘‍♀️'}
                        {product.image === 'experience' && '✨'}
                        {product.image === 'retreat' && '🏞️'}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#c9a96e] transition">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#c9a96e]">${product.price}</span>
                      <button className="px-4 py-2 bg-[#111111] text-white rounded hover:bg-[#333333] transition text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
