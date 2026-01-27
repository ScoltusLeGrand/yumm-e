'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

// Initialisation du client Supabase avec tes variables d'environnement
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter() // Initialisation du routeur pour la redirection

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMsg('')
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setMsg("Erreur : " + error.message)
      setLoading(false) // On arrête le chargement pour permettre de corriger
    } else {
      setMsg("Succès ! Redirection vers ton espace...")
      
      // On attend un tout petit peu pour que l'utilisateur voit le message de succès
      setTimeout(() => {
        router.push('/dashboard')
      }, 1500)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="w-full max-w-md p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          English Yummy
        </h1>
        <p className="text-zinc-500 text-center mb-8">Crée ton compte pour accéder aux cours</p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
            <input 
              type="email" 
              required
              className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="exemple@email.com"
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Mot de passe</label>
            <input 
              type="password" 
              required
              className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button 
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 disabled:opacity-50"
          >
            {loading ? "Chargement..." : "S'inscrire"}
          </button>
        </form>

        {msg && (
          <div className={`mt-6 p-4 rounded-xl text-center text-sm ${msg.includes('Erreur') ? 'bg-red-900/20 text-red-400' : 'bg-green-900/20 text-green-400'}`}>
            {msg}
          </div>
        )}
      </div>
    </div>
  )
}