"use client"

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })

    if (error) {
      alert("Email ou mot de passe incorrect")
      setLoading(false)
      return
    }

    router.push('/lessons')
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 flex items-center justify-center">
      <div className="max-w-md w-full px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Welcome <span className="text-blue-500 italic">Back</span></h1>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">Accède à ton espace Academy</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <input required type="email" placeholder="EMAIL"
            className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-blue-500 transition-all text-white"
            onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <input required type="password" placeholder="MOT DE PASSE"
            className="w-full bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-blue-500 transition-all text-white"
            onChange={(e) => setFormData({...formData, password: e.target.value})} />
          
          <button type="submit" disabled={loading} className="w-full bg-blue-600 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>

          <p className="text-center text-zinc-500 text-[10px] uppercase tracking-widest mt-8">
            Nouveau ici ? <Link href="/register" className="text-blue-500 hover:text-white transition-colors font-bold">Créer un compte</Link>
          </p>
        </form>
      </div>
    </div>
  )
}