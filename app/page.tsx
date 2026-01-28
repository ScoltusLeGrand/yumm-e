import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* SECTION HERO - Impact visuel immédiat */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium mb-6 animate-fade-in">
          Plus de 100 000 abonnés sur TikTok 🚀
        </span>

        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
          ENGLISH <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent italic">YUMMY</span>
        </h1>

        <p className="max-w-xl text-zinc-400 text-base md:text-xl mb-10 leading-relaxed">
          Apprends l'anglais, découvre mon univers modeling et collabore avec une communauté engagée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/lessons" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all text-center">
            Voir les leçons
          </Link>
          <Link href="/partnerships" className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 font-bold rounded-2xl hover:bg-zinc-800 transition-all text-center">
            Partenariats
          </Link>
        </div>

        {/* Déco de fond */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[120px] -z-10"></div>
      </section>

      {/* SECTION SERVICES - Les 3 Piliers */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Carte 1 : Cours d'Anglais */}
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-blue-500/50 transition-colors group">
          <div className="text-3xl mb-4">🇬🇧</div>
          <h3 className="text-xl font-bold mb-3">Cours d'Anglais</h3>
          <p className="text-zinc-400 text-sm mb-6">Des leçons interactives et fun pour maîtriser l'anglais rapidement.</p>
          <Link href="/lessons" className="text-blue-400 font-semibold group-hover:underline">Découvrir →</Link>
        </div>

        {/* Carte 2 : Modeling & Image */}
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-purple-500/50 transition-colors group">
          <div className="text-3xl mb-4">📸</div>
          <h3 className="text-xl font-bold mb-3">Modeling & Image</h3>
          <p className="text-zinc-400 text-sm mb-6">Services professionnels de mannequinat et vente d'image de marque.</p>
          <button className="text-purple-400 font-semibold group-hover:underline">En savoir plus →</button>
        </div>

        {/* Carte 3 : Influence TikTok */}
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-pink-500/50 transition-colors group">
          <div className="text-3xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-3">100K sur TikTok</h3>
          <p className="text-zinc-400 text-sm mb-6">Boostez votre marque avec des placements de produits authentiques.</p>
          <Link href="/partnerships" className="text-pink-400 font-semibold group-hover:underline">Collaborer →</Link>
        </div>

      </section>
    </div>
  )
}