import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yummy Universe | Academy & Partnerships',
  description: 'Apprends l\'anglais avec Yummy et découvre ses services.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  
  // Initialisation de Supabase pour vérifier la session dans le Layout
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()

  return (
    <html lang="fr">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* NAVBAR FIXE */}
        <header className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* LOGO */}
            <Link href="/" className="text-xl font-black uppercase italic tracking-tighter">
              Yummy <span className="text-blue-500">Universe</span>
            </Link>

            {/* NAVIGATION */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
                Accueil
              </Link>
              <Link href="/english" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
                English
              </Link>
              <Link href="/partnerships" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
                Partenariats
              </Link>
              
              {/* TIKTOK ICON */}
              <Link href="https://www.tiktok.com/@votre_compte" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.23-.15-.44-.31-.64-.49v8.29c.04 2.1-.6 4.34-2.22 5.76-1.88 1.67-4.69 2.06-6.94 1.14-2.58-1.01-4.22-3.85-3.96-6.6.21-2.61 2.3-4.87 4.9-5.26.83-.13 1.69-.07 2.49.16v4.14c-.69-.24-1.46-.29-2.16-.13-1.29.28-2.23 1.54-2.09 2.85.11 1.25 1.34 2.21 2.58 2.03 1.25-.13 2.13-1.42 2.06-2.65.04-3.04.01-6.08.02-9.12z"/>
                </svg>
              </Link>

              {/* BOUTON DYNAMIQUE */}
              {session ? (
                <Link 
                  href="/lessons" 
                  className="bg-blue-600 hover:bg-white hover:text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
                >
                  Mon Académie
                </Link>
              ) : (
                <Link 
                  href="/login" 
                  className="bg-blue-600 hover:bg-white hover:text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
                >
                  Se connecter
                </Link>
              )}
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* FLOATING WHATSAPP BUTTON (Optionnel, reste pro) */}
        <Link 
          href="https://wa.me/243993413998" 
          target="_blank"
          className="fixed bottom-8 right-8 z-[100] bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.52.909 3.325 1.388 5.163 1.39h.005c5.428 0 9.845-4.416 9.847-9.847.002-2.628-1.023-5.1-2.887-6.963s-4.337-2.891-6.963-2.892c-5.43 0-9.847 4.417-9.847 9.848 0 1.902.544 3.758 1.571 5.353l-.988 3.605 3.693-.969z"/>
          </svg>
        </Link>
      </body>
    </html>
  )
}