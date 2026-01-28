"use client"

import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <html lang="fr">
      <body className="bg-black text-white antialiased">
        <nav className="flex items-center justify-between p-4 border-b border-zinc-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
          {/* Logo plus petit sur mobile */}
          <Link href="/" className="text-base md:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent shrink-0">
            English Yummy
          </Link>
          
          {/* Conteneur de liens avec scroll horizontal invisible pour mobile */}
          <div className="flex gap-4 md:gap-8 items-center overflow-x-auto no-scrollbar ml-2 px-2">
            <Link 
              href="/" 
              className={`text-xs md:text-sm transition whitespace-nowrap ${isActive('/') ? 'text-blue-400 font-bold' : 'text-zinc-400 hover:text-blue-400'}`}
            >
              Accueil
            </Link>
            <Link 
              href="/lessons" 
              className={`text-xs md:text-sm transition whitespace-nowrap ${isActive('/lessons') ? 'text-blue-400 font-bold' : 'text-zinc-400 hover:text-blue-400'}`}
            >
              Lessons
            </Link>
            <Link 
              href="/partnerships" 
              className={`text-xs md:text-sm transition whitespace-nowrap ${isActive('/partnerships') ? 'text-pink-400 font-bold' : 'text-zinc-400 hover:text-pink-400'}`}
            >
              Partenariats
            </Link>
            <Link 
              href="/register" 
              className="bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg text-[10px] md:text-sm font-bold transition shrink-0"
            >
              S'inscrire
            </Link>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  )
}