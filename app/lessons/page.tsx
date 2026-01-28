import Link from 'next/link'

export default function LessonsPage() {
  const courses = [
    {
      title: "English Starter",
      level: "Débutant",
      price: "Sur mesure",
      features: ["Bases de la grammaire", "Prononciation TikTok Style", "Vocabulaire du quotidien"],
      color: "blue"
    },
    {
      title: "Fluent Talk",
      level: "Intermédiaire",
      price: "Populaire",
      features: ["Conversation intensive", "Réduction d'accent", "Slang & Expressions"],
      color: "pink"
    },
    {
      title: "Business Pro",
      level: "Avancé",
      price: "Premium",
      features: ["Anglais professionnel", "Préparation interview", "E-mails & Présentations"],
      color: "purple"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* EN-TÊTE PAGE LESSONS */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
            Master <span className="italic text-blue-500">English</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Apprenez l'anglais de manière moderne et interactive. Des cours adaptés à votre rythme pour ne plus jamais avoir peur de prendre la parole.
          </p>
        </div>

        {/* GRILLE DES OFFRES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-[2.5rem] bg-zinc-900/30 border border-zinc-800 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Badge Niveau */}
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] mb-4">
                Level: {course.level}
              </div>
              
              <h3 className="text-3xl font-bold mb-6 tracking-tight">{course.title}</h3>
              
              <ul className="space-y-4 mb-12">
                {course.features.map((feature, i) => (
                  <li key={i} className="text-sm text-zinc-400 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-2xl font-black mb-8 italic text-zinc-300">
                {course.price}
              </div>

              <Link 
                href={`https://wa.me/+243993413998?text=Hello%20Yummy!%20Je%20souhaite%20m'inscrire%20au%20cours%20${course.title}`}
                target="_blank"
                className="block w-full text-center py-4 rounded-2xl bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-blue-500 hover:text-white transition-all"
              >
                S'inscrire
              </Link>
            </div>
          ))}
        </div>

        {/* SECTION FAQ RAPIDE */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-zinc-900 pt-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 italic tracking-tight">Pourquoi apprendre avec moi ?</h2>
            <p className="text-zinc-500 leading-relaxed">
              Oubliez les méthodes scolaires ennuyeuses. En tant que créatrice de contenu, je me concentre sur l'anglais **réel**, celui que vous entendez sur TikTok, dans les films et dans le business.
            </p>
          </div>
          <div className="bg-blue-500/5 rounded-3xl p-8 border border-blue-500/10">
            <div className="text-sm font-bold text-blue-400 mb-2">Méthodologie</div>
            <p className="text-zinc-400 text-sm">
              Sessions privées via Zoom ou Google Meet. Support PDF inclus et exercices interactifs après chaque leçon.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}