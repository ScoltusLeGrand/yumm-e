import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function LessonsPage() {
  // On récupère les données de la table 'Lessons' (avec un L majuscule comme dans ta base)
  const { data: lessons, error } = await supabase.from('Lessons').select('*')

  if (error) {
    console.error("Erreur Supabase :", error.message)
  }

  return (
    <div className="min-h-screen bg-black text-white p-12">
      <h1 className="text-4xl font-bold mb-8 text-blue-500">Nos Leçons d'Anglais</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lessons && lessons.length > 0 ? (
          lessons.map((lesson) => (
            <div key={lesson.id} className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <span className="text-xs font-mono text-zinc-500 uppercase">{lesson.level}</span>
              <h2 className="text-2xl font-bold mt-2 mb-4">{lesson.title}</h2>
              <p className="text-zinc-400 mb-6">{lesson.description}</p>
              <a 
                href={lesson.meet_link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-zinc-200 transition"
              >
                Rejoindre le cours
              </a>
            </div>
          ))
        ) : (
          <p className="text-zinc-500 italic">Aucune leçon trouvée. Vérifiez la connexion ou les politiques RLS.</p>
        )}
      </div>
    </div>
  )
}