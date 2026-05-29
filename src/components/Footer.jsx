import { MARCA } from '../data/pricing'
import { WhatsappIcon } from './ui/icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line/60 bg-cream/60">
      <div className="container-app flex flex-col items-center gap-4 py-10 text-center">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple to-purple-dark shadow-sm">
          <span className="font-display text-lg font-bold text-cream">D</span>
          <span className="absolute right-2.5 top-3 h-1 w-1 rounded-full bg-accent" />
        </div>

        <div>
          <p className="font-display text-lg font-semibold text-plum">
            {MARCA.nombre} {MARCA.rubro}
          </p>
          <p className="mt-1 text-sm text-muted">Tortas personalizadas hechas con cariño 💜</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${MARCA.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#25D366] shadow-card transition hover:-translate-y-0.5"
            aria-label="WhatsApp"
          >
            <WhatsappIcon className="h-5 w-5" />
          </a>
          <a
            href={MARCA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-purple-dark shadow-card transition hover:-translate-y-0.5"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <p className="mt-2 text-xs text-muted">
          © {year} {MARCA.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
