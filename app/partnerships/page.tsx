export default function Partnerships() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          PARTENARIATS
        </h1>
        <p className="text-xl text-zinc-400 mb-12">Collaborez avec English Yummy et touchez une audience engagée.</p>
        
        {/* Stats TikTok */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-10 bg-zinc-900 rounded-3xl border border-zinc-800">
            <h2 className="text-5xl font-bold mb-2">100K</h2>
            <p className="text-zinc-500 uppercase tracking-widest">Abonnés TikTok</p>
          </div>
          <div className="p-10 bg-zinc-900 rounded-3xl border border-zinc-800">
            <h2 className="text-5xl font-bold mb-2">1.6M</h2>
            <p className="text-zinc-500 uppercase tracking-widest">Likes cumulés</p>
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-left">
          <h3 className="text-2xl font-bold mb-4">Pourquoi collaborer ?</h3>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Avec une communauté fidèle et passionnée par l'apprentissage de l'anglais, 
            English Yummy offre une visibilité unique pour votre marque à travers des vidéos 
            créatives et authentiques.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition">
            CONTACTER POUR UN PROJET
          </button>
        </div>
      </div>
    </div>
  )
}