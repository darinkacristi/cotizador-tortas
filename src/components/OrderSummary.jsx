import { useEffect, useRef } from 'react'
import WhatsappButton from './WhatsappButton'
import { formatPrecio } from '../data/pricing'

function Row({ label, value, muted }) {
  return (
    <div className="flex items-baseline justify-between gap-3 text-sm">
      <span className={muted ? 'text-muted' : 'text-ink'}>{label}</span>
      <span className={`text-right font-medium ${muted ? 'text-muted' : 'text-ink'}`}>{value}</span>
    </div>
  )
}

export default function OrderSummary({ state, quote, validate }) {
  const totalRef = useRef(null)

  // Animación "pop" del total cada vez que cambia
  useEffect(() => {
    const el = totalRef.current
    if (!el) return
    el.classList.remove('animate-pop')
    void el.offsetWidth
    el.classList.add('animate-pop')
  }, [quote.total])

  // Texto del tamaño con porciones y cm
  const tamanoDetalle = quote.tamano
    ? `${quote.tamano.name} · ${quote.tamano.porciones} porciones${quote.tamano.medida ? ` · ${quote.tamano.medida}` : ''}`
    : '—'

  // Nombres de los rellenos seleccionados (1 o 2)
  const rellenosNombres =
    quote.rellenosSeleccionados.length > 0
      ? quote.rellenosSeleccionados.map((r) => r.name).join(' + ')
      : '—'

  return (
    <div className="card-surface overflow-hidden p-0">
      {/* Encabezado oscuro con total */}
      <div className="relative overflow-hidden bg-plum p-6">
        <span className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 text-[80px] opacity-[0.08]">
          🎂
        </span>
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-white/55">
          Resumen del pedido
        </p>
        <p
          ref={totalRef}
          className="mt-1 font-display text-[clamp(32px,8vw,44px)] font-bold leading-none text-white"
        >
          {formatPrecio(quote.total)}
        </p>
        <p className="mt-1 text-xs text-white/45">Precio estimado · IVA incluido</p>
      </div>

      {/* Desglose */}
      <div className="flex flex-col gap-2.5 p-6">
        <Row label="Tamaño" value={formatPrecio(quote.base)} />
        <p className="-mt-1.5 text-xs text-muted">{tamanoDetalle}</p>

        <Row
          label={`Sabor · ${quote.sabor?.name ?? '—'}`}
          value={quote.saborCosto > 0 ? `+${formatPrecio(quote.saborCosto)}` : 'incluido'}
          muted={quote.saborCosto === 0}
        />

        <Row
          label="Relleno"
          value={quote.rellenosCosto > 0 ? `+${formatPrecio(quote.rellenosCosto)}` : 'incluido'}
          muted={quote.rellenosCosto === 0}
        />
        <p className="-mt-1.5 text-xs text-muted">{rellenosNombres}</p>

        {/* Extras detallados */}
        {quote.extrasDetalle.length > 0 ? (
          quote.extrasDetalle.map((e) => (
            <Row key={e.id} label={e.name} value={`+${formatPrecio(e.subtotal)}`} />
          ))
        ) : (
          <Row label="Extras" value="—" muted />
        )}

        <div className="my-1 h-px bg-line" />
        <Row label="Total" value={formatPrecio(quote.total)} />

        {/* CTA */}
        <div className="mt-3">
          <WhatsappButton state={state} quote={quote} validate={validate} />
        </div>

        <p className="mt-2 text-center text-[11px] leading-relaxed text-muted">
          ⚠️ Valores orientativos. El precio final se confirma por WhatsApp según
          disponibilidad y temporada.
        </p>
      </div>
    </div>
  )
}
