import Hero from './components/Hero'
import Filmstrip from './components/Filmstrip'
import Solution from './components/Solution'
import Steps from './components/Steps'
import Deliverables from './components/Deliverables'
import Case from './components/Case'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <Hero />
      <Filmstrip />
      <Solution />
      <Steps />
      <Deliverables />
      <Case />
      <FinalCTA />
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Rapid Prototyping</span>
          <a href="/test" className="hover:text-slate-200 transition-colors">Systemcheck</a>
        </div>
      </footer>
    </div>
  )
}

export default App
