import { MARCA } from '../data/pricing'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-line/60 bg-cream/80 backdrop-blur-md">
      <div className="container-app flex items-center justify-between py-3">
        {/* Marca */}
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple to-purple-dark shadow-sm">
            <span className="font-display text-base font-bold text-cream">D</span>
            <span className="absolute right-1.5 top-2 h-1 w-1 rounded-full bg-accent" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-semibold text-plum">
              {MARCA.nombre}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted">
              {MARCA.rubro}
            </span>
          </span>
        </a>

        {/* CTA */}
        <a
          href="#cotizador"
          className="rounded-full bg-purple-dark px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-deep"
        >
          Cotizar ahora
        </a>
      </div>
    </nav>
  )
}
