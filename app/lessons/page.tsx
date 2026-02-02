import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function LessonsAcademyPage() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll() { return cookieStore.getAll() } } }
  )

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('has_paid, full_name')
    .eq('id', session.user.id)
    .single()

  const hasPaid = profile?.has_paid || false

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
      
      {/* ÉCRAN DE VERROU (Si hasPaid est FALSE) */}
      {!hasPaid && (
        <div className="absolute inset-0 z-50 flex items-center justify-center px-6 bg-black/40 backdrop-blur-md">
          <div className="w-full max-w-xl bg-zinc-900/90 p-12 rounded-[3rem] border border-blue-500/30 text-center shadow-2xl">
            <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter">Accès <span className="text-blue-500 italic">Restreint</span></h2>
            <p className="text-zinc-400 mb-8 font-medium italic">Ton compte est bien créé ! Pour accéder aux cours vidéo et aux PDF, contacte Yummy pour valider ton paiement.</p>
            {/* ICI ON POURRA METTRE L'INPUT POUR LE CODE PIN À 4 CHIFFRES */}
            <div className="flex flex-col gap-4">
               <input type="text" maxLength={4} placeholder="CODE PIN" className="bg-black border border-zinc-800 p-4 rounded-xl text-center text-2xl tracking-[1em] font-bold outline-none focus:border-blue-500 transition-colors" />
               <button className="bg-blue-600 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                 Débloquer mon accès
               </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTENU RÉEL (Visible si hasPaid est TRUE) */}
      <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${!hasPaid ? 'blur-2xl grayscale pointer-events-none' : ''}`}>
        <h1 className="text-5xl font-black italic mb-12 uppercase tracking-tighter">Yummy <span className="text-blue-500">Academy</span></h1>
        <div className="grid md:grid-cols-2 gap-8">
           {/* TA VIDÉO */}
           <div className="space-y-4 group">
             <div className="aspect-video bg-zinc-900 rounded-[2.5rem] border border-zinc-800 flex items-center justify-center overflow-hidden relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4.5 3.5v13l11-6.5-11-6.5z"/></svg>
                </div>
             </div>
             <h3 className="text-xl font-bold uppercase italic px-4">01. Prononciation Masterclass</h3>
           </div>

           {/* TON PDF */}
           <div className="space-y-4 group">
             <div className="aspect-video bg-zinc-900 rounded-[2.5rem] border border-zinc-800 flex items-center justify-center">
                <svg className="w-12 h-12 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
             </div>
             <h3 className="text-xl font-bold uppercase italic px-4">Grammar Cheat Sheet</h3>
           </div>
        </div>
      </div>
    </div>
  )
}