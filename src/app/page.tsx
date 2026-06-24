import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          AI-Powered Shopping Experience
        </div>
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          Shop Smarter with
          <span className="text-violet-400"> AI Search</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
          Describe what you're looking for in plain language. Our AI finds exactly what you need.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/search" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-medium transition-colors">
            Start Shopping
          </Link>
          <Link href="/products" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-8 py-4 rounded-xl font-medium transition-colors">
            Browse Products
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🤖', title: 'AI Search', desc: 'Describe what you want in natural language and our AI finds the perfect match.' },
            { icon: '⚡', title: 'Instant Results', desc: 'Powered by TanStack Query for lightning-fast, real-time search results.' },
            { icon: '🔒', title: 'Secure Checkout', desc: 'End-to-end encrypted payments with multiple payment options.' },
          ].map((f, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-violet-500/50 transition-colors">
              <span className="text-4xl mb-4 block">{f.icon}</span>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}