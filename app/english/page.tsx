import Link from 'next/link'

// On change le nom de la fonction pour éviter le conflit
export default function EnglishLandingPage() {
  const plans = [
    { title: "English Starter", level: "Débutant", price: "Sur mesure", features: ["Bases de la grammaire", "Prononciation TikTok Style", "Vocabulaire du quotidien"] },
    { title: "Fluent Talk", level: "Intermédiaire", price: "Populaire", features: ["Conversation intensive", "Réduction d'accent", "Slang & Expressions"] },
    { title: "Business Pro", level: "Avancé", price: "Premium", features: ["Anglais professionnel", "Préparation interview", "E-mails & Présentations"] }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-7xl font-black uppercase italic tracking-tighter mb-4">English <span className="text-blue-500">Academy</span></h1>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm font-bold">Apprenez l'anglais de manière moderne et interactive</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className="p-10 rounded-[3rem] border border-zinc-800 bg-zinc-900/20 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-8 uppercase italic">{plan.title}</h3>
            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((f, idx) => (
                <li key={idx} className="text-xs uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{f}
                </li>
              ))}
            </ul>
            <div className="text-3xl font-black italic mb-10 text-zinc-300">{plan.price}</div>
            <Link href="/register" className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase text-[10px] tracking-widest text-center hover:bg-blue-600 hover:text-white transition-all">
              S'inscrire
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}