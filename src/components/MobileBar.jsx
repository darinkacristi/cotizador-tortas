import { formatPrecio } from '../data/pricing'
import { buildWhatsappUrl } from '../utils/whatsapp'

// Barra fija inferior visible solo en móvil: total siempre a la vista + acción rápida.
export default function MobileBar({ state, quote, validate }) {
  const handleClick = () => {
    if (!validate()) {
      document.getElementById('nombre')?.focus()
      document.getElementById('cotizador')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    window.open(buildWhatsappUrl(state, quote), '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-cream/95 px-4 py-3 shadow-float backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="leading-tight">
          <span className="block text-[11px] uppercase tracking-wide text-muted">Total</span>
          <span className="font-display text-xl font-bold text-plum">
            {formatPrecio(quote.total)}
          </span>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="flex-1 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition active:scale-[0.98]"
        >
          Cotizar por WhatsApp
        </button>
      </div>
    </div>
  )
}
