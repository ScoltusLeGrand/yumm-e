import Link from 'next/link'

export default function PartnershipsPage() {
  const videos = [1, 2, 3, 4, 5, 6] // Simulation de sa collection de vidéos

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER AVEC RAPPEL DES 100K */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-pink-500/10 text-pink-500 text-[10px] font-bold px-3 py-1 rounded-full border border-pink-500/20 uppercase tracking-widest">
                Top Creator
              </span>
              <span className="text-zinc-600 font-mono text-[10px]">TIKTOK VERIFIED</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
              Influencer <span className="italic text-zinc-500">& Partnerships</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Propulsez votre marque auprès d'une communauté de <span className="text-white font-bold">100 000+ abonnés engagés</span>. 
              Spécialisée dans la création de contenus authentiques qui captivent et convertissent.
            </p>
          </div>
          
          <div className="flex gap-8 border-l border-zinc-800 pl-8">
            <div>
              <div className="text-3xl font-black text-white">100K</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Followers</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">1.6M</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Likes</div>
            </div>
          </div>
        </div>

        {/* GRILLE VIDÉO (FORMAT TIKTOK 9/16) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((id) => (
            <div key={id} className="group relative aspect-[9/16] overflow-hidden bg-zinc-900 border border-zinc-800 rounded-[2rem] transition-all hover:border-pink-500/50">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-75 group-hover:scale-100 transition-transform">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span className="mt-4 text-[10px] font-bold tracking-[0.3em] uppercase">Regarder</span>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-800 italic p-6 text-center">
                <p className="text-xs uppercase font-mono mb-2 text-zinc-700">Video {id}</p>
                <p className="text-[10px] non-italic text-zinc-600 uppercase">Sponsorship Content</p>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION CTA AVEC TOUS LES CONTACTS (HUB DE CONTACT) */}
        <div className="mt-32 p-12 md:p-20 bg-gradient-to-b from-zinc-900/50 to-black border border-zinc-800 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">Démarrer une collaboration</h2>
          <p className="text-zinc-500 mb-12 max-w-lg mx-auto text-lg italic">
            "Donnons à votre marque la visibilité qu'elle mérite sur TikTok."
          </p>
          
          {/* GRILLE DES CONTACTS RÉSEAUX + DIRECT */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 items-center max-w-4xl mx-auto">
            {/* WhatsApp */}
            <a href="https://wa.me/+243993413998" target="_blank" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-[#25D366] group-hover:text-[#25D366] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">WhatsApp</span>
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@yummy" target="_blank" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-[#ff0050] group-hover:text-[#ff0050] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.21-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.1-3.44-3.37-3.5-5.75-.12-2.13.86-4.23 2.56-5.52 1.39-1.05 3.11-1.51 4.84-1.39.03 1.3.03 2.6 0 3.89-.8-.24-1.68-.19-2.43.27-.88.49-1.44 1.41-1.41 2.42.01.89.54 1.7 1.34 2.1.75.4 1.64.47 2.42.21.94-.3 1.63-1.1 1.83-2.07.16-.8.07-5.98.07-11.46V.02z"/></svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">TikTok</span>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/yummy" target="_blank" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-[#1877F2] group-hover:text-[#1877F2] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Facebook</span>
            </a>

            {/* Gmail */}
            <a href="mailto:yummy@gmail.com" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-[#EA4335] group-hover:text-[#EA4335] transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Gmail</span>
            </a>

            {/* Phone */}
            <a href="tel:+243993413998" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">Appeler</span>
            </a>
          </div>

          <div className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.5em] mt-8">
            Direct Line: +243 993 413 998
          </div>
        </div>
      </div>
    </div>
  )
}