"use client"
import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: { data: { full_name: formData.name } }
    })
    if (error) { alert(error.message); setLoading(false); return; }
    setLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-md text-center p-12 rounded-[3rem] border border-zinc-900 bg-zinc-900/20">
          <h2 className="text-3xl font-black uppercase mb-4">Vérifie tes <span className="text-blue-500 italic">emails</span></h2>
          <p className="text-zinc-400 mb-8 text-sm">Clique sur le lien envoyé à {formData.email} pour valider ton compte.</p>
          <Link href="/login" className="block w-full py-4 rounded-2xl bg-white text-black font-black uppercase text-xs">Se connecter</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-12">Join the <span className="text-blue-500 italic text-4xl block">Academy</span></h1>
        
        <form onSubmit={handleSubmit} className="space-y-8 border-t border-zinc-900 pt-12">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Nom Complet</label>
            <input required type="text" className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white text-xl" placeholder="John Doe" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Email</label>
            <input required type="email" className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white text-xl" placeholder="votre@email.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Mot de passe</label>
            <input required type="password" minLength={6} className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white text-xl" placeholder="••••••••" onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-600 py-6 rounded-2xl font-black uppercase text-xs tracking-widest mt-8">
            {loading ? 'Inscription...' : 'Créer mon profil'}
          </button>

          {/* LE BOUTON MANQUANT */}
          <p className="text-center text-zinc-500 text-[10px] uppercase tracking-widest mt-8 font-medium">
            Déjà inscrit ? <Link href="/login" className="text-blue-500 hover:text-white transition-colors underline underline-offset-4">Se connecter ici</Link>
          </p>
        </form>
      </div>
    </div>
  )
}