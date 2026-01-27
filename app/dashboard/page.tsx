'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/register') // Redirige si pas connecté
      } else {
        setUser(user)
      }
    }
    getUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/register')
  }

  if (!user) return <div className="bg-black min-h-screen text-white p-10">Chargement...</div>

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold border-l-4 border-blue-500 pl-4">Mon Espace Yummy</h1>
          <button 
            onClick={handleLogout}
            className="text-sm bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition"
          >
            Déconnexion
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">Bienvenue, {user.email} 👋</h2>
            <p className="text-zinc-400">Prêt pour ton cours d'anglais du jour ?</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Progression</h2>
            <p className="text-blue-100 italic">"The limit of your language is the limit of your world."</p>
          </div>
        </div>

        <div className="mt-10 p-20 border-2 border-dashed border-zinc-800 rounded-3xl text-center">
          <p className="text-zinc-500 text-lg">Tes cours apparaîtront ici très bientôt !</p>
        </div>
      </div>
    </div>
  )
}