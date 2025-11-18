export default function Deliverables() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16 grid gap-10">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Was ihr bekommt</h3>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <ul className="space-y-3 text-slate-700">
                <li>Funktionsfähiger KI‑Prototyp in 2 Wochen</li>
                <li>Live‑Demo, testbar, klickbar</li>
                <li>Sauberes Dev‑Setup für euer Team</li>
                <li>2 Wochen Support auf Stundenbasis fürs Weiterbauen</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-amber-300 bg-amber-50">
              <p className="text-amber-900 font-semibold">Null Risiko. Minimaler Einsatz. Maximale Klarheit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
