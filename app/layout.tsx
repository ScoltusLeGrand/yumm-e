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
          {/* Logo */}
          <Link href="/" className="text-base md:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent shrink-0">
            Yummy Universe
          </Link>
          
          {/* Conteneur de navigation */}
          <div className="flex gap-4 md:gap-6 items-center ml-2">
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

            {/* LIEN TIKTOK - Ajouté ici */}
            <a 
              href="https://www.tiktok.com/@yummy.yummy2384" // Mets son vrai lien ici
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#ff0050] transition-colors"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.21-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.1-3.44-3.37-3.5-5.75-.12-2.13.86-4.23 2.56-5.52 1.39-1.05 3.11-1.51 4.84-1.39.03 1.3.03 2.6 0 3.89-.8-.24-1.68-.19-2.43.27-.88.49-1.44 1.41-1.41 2.42.01.89.54 1.7 1.34 2.1.75.4 1.64.47 2.42.21.94-.3 1.63-1.1 1.83-2.07.16-.8.07-5.98.07-11.46V.02z"/>
              </svg>
            </a>

            <Link 
              href="/register" 
              className="bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg text-[10px] md:text-sm font-bold transition shrink-0"
            >
              S'inscrire
            </Link>
          </div>
        </nav>

        <main>{children}</main>

        {/* BOUTON WHATSAPP FLOTTANT */}
        <a 
          href="https://wa.me/+243993413998"
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[60] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="absolute right-16 top-3 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">
            Contact Direct
          </span>
        </a>
      </body>
    </html>
  )
}