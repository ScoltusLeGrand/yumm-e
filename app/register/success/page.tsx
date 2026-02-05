import Link from 'next/link'

export default function RegisterSuccess() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-zinc-900/50 border border-zinc-800 p-12 rounded-[3rem] text-center backdrop-blur-sm">
        
        {/* ICON DE SUCCÈS */}
        <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-black uppercase italic italic mb-4 tracking-tighter">
          Bienvenue dans <span className="text-blue-500">l'Academy</span>
        </h1>
        
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          Ton compte a été créé avec succès ! Pour accéder aux masterclass de Yummy, suis ces deux étapes :
        </p>

        {/* ÉTAPES */}
        <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
          <div className="bg-black/40 p-6 rounded-2xl border border-zinc-800">
            <span className="text-blue-500 font-black text-2xl mb-2 block">01.</span>
            <h3 className="font-bold uppercase text-xs tracking-widest mb-2">Vérifie tes mails</h3>
            <p className="text-zinc-500 text-xs">Clique sur le lien de confirmation que nous venons de t'envoyer.</p>
          </div>
          
          <div className="bg-black/40 p-6 rounded-2xl border border-zinc-800">
            <span className="text-blue-500 font-black text-2xl mb-2 block">02.</span>
            <h3 className="font-bold uppercase text-xs tracking-widest mb-2">Paiement & PIN</h3>
            <p className="text-zinc-500 text-xs">Contacte Yummy pour valider ton plan et recevoir ton code PIN à 4 chiffres.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link 
            href="/lessons" 
            className="bg-white text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all"
          >
            Aller vers mon espace membre
          </Link>
          
          <Link 
            href="https://wa.me/243993413998" 
            className="text-zinc-500 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
          >
            Besoin d'aide ? Contacte-nous
          </Link>
        </div>
      </div>
    </div>
  )
}