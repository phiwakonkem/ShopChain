import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopChain | AI-Powered Shopping',
  description: 'Shop smarter with AI-powered search and recommendations',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-800 bg-gray-950 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              Shop<span className="text-violet-400">Chain</span>
            </Link>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <Link href="/search" className="hover:text-white transition-colors">AI Search</Link>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-colors">
                Cart (0)
              </button>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}