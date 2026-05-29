import { SparkleIcon, ArrowDownIcon } from './ui/icons'

export default function Hero() {
  return (
    <header id="inicio" className="relative overflow-hidden">
      <div className="container-app grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
        {/* Texto */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-dark/25 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-purple-deep">
            <SparkleIcon className="h-3.5 w-3.5 text-accent" />
            Tortas hechas a tu medida
          </span>

          <h1 className="mt-5 font-display text-[clamp(36px,8vw,60px)] font-semibold leading-[1.05] text-plum">
            Cotiza la torta
            <br />
            <span className="text-purple-dark">de tus sueños</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted lg:mx-0">
            Elige tamaño, sabor, relleno y los detalles que más te gusten. Calculamos
            el precio al instante y coordinamos tu pedido por WhatsApp.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#cotizador"
              className="inline-flex items-center gap-2 rounded-full bg-purple-dark px-7 py-3.5 text-[15px] font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-purple-deep"
            >
              Empezar a cotizar
              <ArrowDownIcon className="h-4 w-4" />
            </a>
            <span className="text-sm text-muted">Sin compromiso · respuesta rápida</span>
          </div>
        </div>

        {/* Ilustración */}
        <div className="relative flex justify-center animate-fade-in">
          <div className="absolute h-64 w-64 rounded-full bg-blush/70 blur-2xl sm:h-80 sm:w-80" />
          <div className="relative animate-float text-[140px] leading-none drop-shadow-sm sm:text-[180px]">
            🎂
          </div>
          {/* Detalles flotantes */}
          <span className="absolute left-2 top-6 rounded-2xl bg-white/80 px-3 py-2 text-sm shadow-card backdrop-blur-sm sm:left-6">
            🍓 Frutos rojos
          </span>
          <span className="absolute bottom-8 right-2 rounded-2xl bg-white/80 px-3 py-2 text-sm shadow-card backdrop-blur-sm sm:right-6">
            👑 Topper incluido
          </span>
        </div>
      </div>
    </header>
  )
}
