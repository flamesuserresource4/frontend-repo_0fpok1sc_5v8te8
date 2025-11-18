import Spline from '@splinetool/react-spline'
import { CalendarDays } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background aura + Spline */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-40">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* soft radial spotlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_40%,rgba(124,58,237,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          {/* Eyebrow + price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200">
              Rapid Prototyping
            </span>
            <span className="inline-flex items-center rounded-full bg-amber-400/10 border border-amber-500/30 text-amber-300 px-3 py-1 text-xs font-semibold">
              1.000,-
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Euer KI‑Prototyp in 2 Wochen –
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-amber-300">
              funktionsfähig, real, testbar.
            </span>
          </h1>

          <div className="mt-6 text-slate-300 text-lg max-w-2xl">
            Wir bauen schnell, sauber und greifbar – damit ihr Klarheit bekommt, ohne euer Budget zu verbrennen.
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#termin" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-3 transition-colors">
              <CalendarDays className="w-5 h-5" />
              Termin buchen
            </a>
            <div className="text-slate-400 text-sm">oder sprecht mit uns kurz im Chat</div>
          </div>

          {/* Trust logos */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
            {['Logo 1','Logo 2','Logo 3','Logo 4'].map((l) => (
              <div key={l} className="h-10 bg-white/5 border border-white/10 rounded-md flex items-center justify-center text-slate-300 text-xs">
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
