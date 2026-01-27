export default function Lessons() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Nos Leçons d'Anglais
        </h1>
        <p className="text-zinc-400 text-lg mb-8">
          Yummy vous prépare une petite surprise... Les modules arrivent bientôt !
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl opacity-50">
            <h2 className="text-xl font-bold mb-2 text-zinc-300">Niveau Débutant</h2>
            <p className="text-sm text-zinc-500">Bases de la grammaire et vocabulaire quotidien.</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl opacity-50">
            <h2 className="text-xl font-bold mb-2 text-zinc-300">Niveau Avancé</h2>
            <p className="text-sm text-zinc-500">Maîtrisez les expressions idiomatiques et le Business English.</p>
          </div>
        </div>
      </div>
    </div>
  )
}