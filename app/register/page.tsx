"use client"

import { useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: 'beginner',
    goal: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Génère un message WhatsApp automatique avec les infos du formulaire
    const message = `Hello Yummy! Inscription de ${formData.name}. Niveau: ${formData.level}. Objectif: ${formData.goal}`
    window.open(`https://wa.me/+243993413998?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        
        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">Join the <span className="text-blue-500 italic font-light text-4xl block">Academy</span></h1>
          <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Formulaire d'inscription aux leçons</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 border-t border-zinc-900 pt-12">
          {/* NOM */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2 group-focus-within:text-blue-500 transition-colors">Nom Complet</label>
            <input 
              required
              type="text" 
              className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors text-xl"
              placeholder="John Doe"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* EMAIL */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2 group-focus-within:text-blue-500 transition-colors">Email</label>
            <input 
              required
              type="email" 
              className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors text-xl"
              placeholder="votre@email.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* NIVEAU */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-6">Niveau Actuel</label>
            <div className="grid grid-cols-3 gap-4">
              {['beginner', 'intermediate', 'advanced'].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setFormData({...formData, level: lvl})}
                  className={`py-3 rounded-full border text-[10px] uppercase tracking-widest transition-all ${formData.level === lvl ? 'bg-white text-black border-white' : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'}`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* OBJECTIF */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2 group-focus-within:text-blue-500 transition-colors">Votre Objectif</label>
            <textarea 
              className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-white transition-colors text-xl resize-none"
              placeholder="Ex: Voyager aux USA, Business..."
              rows={2}
              onChange={(e) => setFormData({...formData, goal: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-white hover:text-black py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] transition-all mt-12"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </div>
  )
}