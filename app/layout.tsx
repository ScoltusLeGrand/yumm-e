import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'English Yummy',
  description: 'Apprendre l anglais avec Yummy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        {/* LA NAVBAR */}
        <nav className="flex items-center justify-between p-6 border-b border-zinc-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            English Yummy
          </Link>
          
          <div className="flex gap-8 items-center">
            <Link href="/" className="hover:text-blue-400 transition text-sm">Accueil</Link>
            <Link href="/lessons" className="hover:text-blue-400 transition text-sm font-semibold text-blue-300">Lessons</Link>
            <Link href="/register" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-bold transition">
              S'inscrire
            </Link>
          </div>
        </nav>

        {/* CONTENU DE LA PAGE */}
        <main>{children}</main>
      </body>
    </html>
  )
}