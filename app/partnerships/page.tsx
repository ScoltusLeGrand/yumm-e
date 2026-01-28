export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Partenariats & Collaboration
        </h1>
        <p className="text-xl text-zinc-400">
          Propulsez votre marque auprès d'une communauté engagée de plus de 100 000 passionnés d'anglais sur TikTok.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 text-center">
          <div className="text-4xl font-bold text-white mb-2">100K+</div>
          <div className="text-zinc-500 uppercase text-sm tracking-widest">Abonnés TikTok</div>
        </div>
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 text-center">
          <div className="text-4xl font-bold text-white mb-2">1M+</div>
          <div className="text-zinc-500 uppercase text-sm tracking-widest">Vues mensuelles</div>
        </div>
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 text-center">
          <div className="text-4xl font-bold text-white mb-2">95%</div>
          <div className="text-zinc-500 uppercase text-sm tracking-widest">Taux d'engagement</div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Mes Services</h2>
        <div className="space-y-6">
          <div className="flex items-center p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-6 text-blue-500">📱</div>
            <div>
              <h3 className="text-xl font-bold">Placement de produit TikTok</h3>
              <p className="text-zinc-400 text-sm">Intégration naturelle de votre service dans mes leçons quotidiennes.</p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-6 text-purple-500">🎥</div>
            <div>
              <h3 className="text-xl font-bold">Vidéo dédiée / Review</h3>
              <p className="text-zinc-400 text-sm">Présentation complète et détaillée de votre application ou méthode d'anglais.</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <a 
            href="mailto:contact@yumm-e.com" 
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Discuter d'un projet
          </a>
        </div>
      </div>
    </div>
  )
}