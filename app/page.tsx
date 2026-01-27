import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-black flex flex-col items-center justify-center p-6 text-center">
      {/* Badge stylé */}
      <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
        Apprends l'anglais avec Yummy 🇬🇧
      </span>

      {/* Titre principal */}
      <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
        SPEAK <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">YUMMY</span>
      </h1>

      <p className="max-w-xl text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
        La méthode la plus fun pour maîtriser l'anglais. 
        Découvre nos leçons exclusives et progresse à ton rythme.
      </p>

      {/* Boutons d'action */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/lessons">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all text-lg w-full sm:w-auto">
            Voir les leçons
          </button>
        </Link>
        <Link href="/register">
          <button className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 font-bold rounded-2xl hover:bg-zinc-800 transition-all text-lg w-full sm:w-auto">
            S'inscrire aux cours
          </button>
        </Link>
      </div>

      {/* Petite déco de fond */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] -z-10"></div>
    </div>
  )
}