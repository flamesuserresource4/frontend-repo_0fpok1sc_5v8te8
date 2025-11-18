import { useRef } from 'react'

const frames = [
  'Ihr habt eine Idee. Aber kein Budget für ein komplettes Projekt.',
  'Ihr wollt testen, ob’s funktioniert – ohne gleich 50.000€ zu verbrennen.',
  'Die Agentur will 6 Monate Vorlauf. Ihr braucht in 2 Wochen was zum Anfassen.',
  'Ihr wisst nicht, ob die Idee trägt – aber alle wollen ein fertiges Konzept sehen.',
  "Jede Agentur will Zehntausende. Ihr wollt erst mal sehen, ob's funktioniert.",
  'Ohne Prototyp keine Freigabe. Ohne Freigabe kein Prototyp.',
  'Großes Projekt starten – ohne zu wissen, ob die Idee überhaupt funktioniert.',
]

export default function Filmstrip() {
  const ref = useRef(null)

  return (
    <section className="relative bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="sr-only">Problemframes</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              ref={ref}
              className="flex gap-6 p-8 will-change-transform"
              style={{
                animation: 'scroll-x 28s linear infinite',
              }}
            >
              {frames.concat(frames).map((text, i) => (
                <div
                  key={i}
                  className="min-w-[320px] sm:min-w-[420px] bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 shadow-md"
                >
                  <div className="text-sm uppercase tracking-wider text-slate-400 mb-2">Frame {i + 1}</div>
                  <p className="text-lg leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        `}</style>
        <p className="mt-4 text-center text-slate-500 text-sm">Das läuft als Filmrolle, Frame für Frame beim Scrollen.</p>
      </div>
    </section>
  )
}
