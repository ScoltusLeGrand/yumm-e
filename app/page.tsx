import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      
      {/* SECTION HERO */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium mb-6 animate-fade-in">
          Plus de 100 000 abonnés sur TikTok 🚀
        </span>

        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
          YUMMY <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent italic">UNIVERSE</span>
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 blur-[120px] -z-10"></div>
      </section>

      {/* SECTION PORTRAIT */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16 border-t border-zinc-900">
        <div className="w-full md:w-1/2">
          <div className="aspect-[3/4] bg-zinc-900 rounded-3xl overflow-hidden relative border border-zinc-800 group shadow-2xl shadow-blue-500/5">
            <div className="absolute inset-0 flex items-center justify-center text-zinc-700 italic text-center p-8">
              [ Photo de profil Yummy ]
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 italic tracking-tight">Apprendre avec passion.</h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Hello ! Je suis Yummy. Avec plus de 100 000 abonnés sur TikTok, ma mission est de rendre l'anglais accessible et fun pour tout le monde. 
          </p>
          
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">100K+</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">TikTok Fans</div>
            </div>
            <div className="w-[1px] h-10 bg-zinc-800 mx-4"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">1.6M</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Total Likes</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION VIDEOS SPONSORISÉES (La nouveauté !) */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4 tracking-tighter uppercase">Collaborations Récentes</h2>
            <p className="text-zinc-500 max-w-md text-sm md:text-base">
              Découvrez comment je valorise les marques à travers des contenus créatifs et authentiques.
            </p>
          </div>
          <Link href="/partnerships" className="text-xs font-bold tracking-[0.3em] uppercase border-b border-white pb-2 hover:text-pink-400 hover:border-pink-400 transition-all">
            Voir tout le portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vidéo 1 */}
          <div className="group relative aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl">
             <div className="absolute inset-0 flex items-center justify-center text-zinc-700 italic text-xs text-center p-6 group-hover:text-zinc-400 transition-colors">
               [ Vidéo Sponsorisée 1 ]
             </div>
          </div>

          {/* Vidéo 2 */}
          <div className="group relative aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl">
             <div className="absolute inset-0 flex items-center justify-center text-zinc-700 italic text-xs text-center p-6 group-hover:text-zinc-400 transition-colors">
               [ Vidéo Sponsorisée 2 ]
             </div>
          </div>

          {/* Vidéo 3 */}
          <div className="group relative aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-xl hidden lg:block">
             <div className="absolute inset-0 flex items-center justify-center text-zinc-700 italic text-xs text-center p-6 group-hover:text-zinc-400 transition-colors">
               [ Vidéo Sponsorisée 3 ]
             </div>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-bold tracking-tighter uppercase">Mes Univers</h2>
          <div className="hidden md:block text-5xl font-thin text-zinc-900 italic">01 — 03</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-blue-500/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute top-8 left-8 z-20 text-[10px] font-mono text-zinc-500 uppercase">01 / Education</div>
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <h3 className="text-2xl font-bold mb-2">Lessons</h3>
              <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mb-6">
                Accédez à mes cours d'anglais exclusifs.
              </p>
              <Link href="/lessons" className="inline-block text-xs uppercase tracking-[0.2em] border-b border-white pb-1">Découvrir</Link>
            </div>
          </div>

          <div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-purple-500/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute top-8 left-8 z-20 text-[10px] font-mono text-zinc-500 uppercase">02 / Image</div>
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <h3 className="text-2xl font-bold mb-2">Modeling</h3>
              <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mb-6">
                Services de mannequinat professionnel.
              </p>
              <button className="inline-block text-xs uppercase tracking-[0.2em] border-b border-white pb-1">Voir le Book</button>
            </div>
          </div>

          <div className="group relative aspect-[4/5] overflow-hidden bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-pink-500/30 transition-all">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute top-8 left-8 z-20 text-[10px] font-mono text-zinc-500 uppercase">03 / Social</div>
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <h3 className="text-2xl font-bold mb-2">Influence</h3>
              <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 mb-6">
                Propulser votre marque sur TikTok.
              </p>
              <Link href="/partnerships" className="inline-block text-xs uppercase tracking-[0.2em] border-b border-white pb-1">Collaborer</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-12 text-center border-t border-zinc-900 text-zinc-600 text-[10px] tracking-[0.3em] uppercase">
        © 2026 English Yummy — Tous droits réservés
      </footer>
    </div>
  )
}