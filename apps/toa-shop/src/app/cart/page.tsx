'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const mockCartItems: CartItem[] = [
  { id: 1, name: 'Wellness Journal', price: 48, quantity: 1, image: '📓' },
  { id: 2, name: 'Meditation Cushion', price: 75, quantity: 1, image: '🧘' },
  { id: 3, name: 'Premium Tea Collection', price: 42, quantity: 2, image: '🫖' },
];

const relatedProducts = [
  { id: 1, name: 'Morning Ritual Kit', price: 124, image: '🌅' },
  { id: 2, name: 'Crystal Collection', price: 89, image: '💎' },
  { id: 3, name: 'Abundance Planner', price: 36, image: '📅' },
  { id: 4, name: 'Premium Apparel', price: 65, image: '👕' },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 75 ? 0 : 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#111111] mb-12">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
                <Link href="/products" className="inline-block px-6 py-2 bg-[#111111] text-white rounded-lg hover:bg-[#333333] transition">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 rounded-lg p-6 border border-gray-200">
                    {/* Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-4xl">
                      {item.image}
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#111111] mb-2">{item.name}</h3>
                      <p className="text-[#c9a96e] font-bold">${item.price}</p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-3 py-2 text-[#111111] hover:bg-gray-200"
                      >
                        −
                      </button>
                      <span className="px-4 py-2 text-[#111111] border-l border-r border-gray-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-3 py-2 text-[#111111] hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>

                    {/* Total */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-[#111111]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm mt-2 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 sticky top-20">
              <h2 className="text-2xl font-bold text-[#111111] mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 border-b border-gray-300 pb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold text-[#111111] mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full px-6 py-3 bg-[#111111] text-white font-bold rounded-lg hover:bg-[#333333] transition mb-3">
                Proceed to Checkout
              </button>

              <Link href="/products" className="block text-center px-6 py-2 border-2 border-[#c9a96e] text-[#111111] font-bold rounded-lg hover:bg-[#c9a96e] hover:text-white transition">
                Continue Shopping
              </Link>

              {subtotal <= 75 && (
                <p className="text-sm text-green-600 mt-4 text-center">
                  Add ${(75 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* You Might Also Like */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#111111] mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link href={`/products/${product.image}`} key={product.id}>
                <div className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-48 flex items-center justify-center text-6xl mb-4 group-hover:shadow-lg transition">
                    {product.image}
                  </div>
                  <h3 className="font-bold text-[#111111] group-hover:text-[#c9a96e] transition mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[#c9a96e] font-bold">${product.price}</p>
                    <button className="px-3 py-1 bg-[#111111] text-white text-sm rounded hover:bg-[#333333] transition">
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
