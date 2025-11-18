import { ArrowRight, CalendarDays } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="termin" className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
          Ihr wollt eure Idee testen – ohne Risiko?
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Bauen wir euren Prototyp
          <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-3 text-slate-500 text-sm">Oder direkt: Termin buchen</p>
        <div className="mt-4 flex justify-center">
          <a className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-md border border-indigo-200" href="#">
            <CalendarDays className="w-4 h-4" /> Termin buchen
          </a>
        </div>
      </div>
    </section>
  )
}
