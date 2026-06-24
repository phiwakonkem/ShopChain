'use client'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const mockProducts = [
  { id: '1', name: 'MacBook Pro M3', price: 35999, category: 'Electronics', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80', rating: 4.9, reviews: 2341 },
  { id: '2', name: 'Sony WH-1000XM5', price: 8999, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80', rating: 4.8, reviews: 5621 },
  { id: '3', name: 'Nike Air Max 2024', price: 2499, category: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', rating: 4.7, reviews: 892 },
  { id: '4', name: 'Samsung 4K Monitor', price: 12999, category: 'Electronics', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80', rating: 4.6, reviews: 1203 },
  { id: '5', name: 'Leather Office Chair', price: 4999, category: 'Furniture', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80', rating: 4.5, reviews: 431 },
  { id: '6', name: 'iPhone 16 Pro', price: 29999, category: 'Electronics', image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&q=80', rating: 4.9, reviews: 8932 },
]

const categories = ['All', 'Electronics', 'Footwear', 'Furniture']

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = mockProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || p.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Products</h1>

        {/* Search + Filter */}
        <div className="flex gap-4 mb-8">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products..."
            className="flex-1 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition-colors"
          />
          <div className="flex gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setCategory(cat)}
                      className={`px-4 py-3 rounded-xl text-sm transition-colors ${
                        category === cat
                          ? 'bg-violet-600 text-white'
                          : 'bg-gray-900 border border-gray-700 text-gray-400 hover:text-white'
                      }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map(product => (
            <div key={product.id}
                 className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all hover:shadow-xl hover:shadow-violet-500/5 group">
              <div className="relative h-52 overflow-hidden">
                <img src={product.image} alt={product.name}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400 text-xs">{'★'.repeat(Math.floor(product.rating))}</span>
                  <span className="text-gray-500 text-xs">{product.rating} ({product.reviews.toLocaleString()})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-violet-400">
                    R{product.price.toLocaleString()}
                  </span>
                  <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg mb-2">No products found</p>
            <p className="text-sm">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  )
}