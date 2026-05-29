import { MARCA } from '../data/pricing'

// Pantalla de carga que se muestra brevemente al iniciar la app.
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream animate-fade-in">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple to-purple-dark shadow-mark">
        <span className="font-display text-xl font-bold text-cream">D</span>
        <span className="absolute right-3.5 top-5 h-1.5 w-1.5 rounded-full bg-accent" />
      </div>

      <div className="mt-6 h-6 w-6 animate-spin rounded-full border-2 border-purple/30 border-t-purple-dark" />

      <p className="mt-4 font-display text-sm tracking-wide text-muted">
        {MARCA.nombre} · {MARCA.rubro}
      </p>
    </div>
  )
}
