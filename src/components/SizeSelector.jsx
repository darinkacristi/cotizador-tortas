import Card from './ui/Card'
import { SizeIcon } from './ui/icons'
import { TAMANOS, formatPrecio } from '../data/pricing'

// Tarjeta de tamaño: nombre destacado + porciones y cm en una línea clara.
function SizeCard({ size, active, onClick }) {
  const detalle = size.medida
    ? `${size.porciones} porciones · ${size.medida}`
    : `${size.porciones} porciones`

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group flex items-center gap-3.5 rounded-2xl border-[1.5px] p-4 text-left transition-all duration-200
        ${
          active
            ? 'border-purple-dark bg-purple/12 shadow-sm'
            : 'border-line bg-white hover:-translate-y-0.5 hover:border-purple hover:shadow-soft'
        }`}
    >
      {/* Indicador tipo radio */}
      <span
        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors
          ${active ? 'border-purple-dark' : 'border-line'}`}
      >
        <span
          className={`h-2.5 w-2.5 rounded-full transition-all ${active ? 'bg-purple-dark' : 'bg-transparent'}`}
        />
      </span>

      {/* Contenido */}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span
            className={`font-display text-base font-semibold ${active ? 'text-purple-deep' : 'text-ink'}`}
          >
            {size.name}
          </span>
          <span
            className={`flex-shrink-0 text-sm font-semibold ${active ? 'text-purple-dark' : 'text-muted'}`}
          >
            {formatPrecio(size.precio)}
          </span>
        </div>
        <p className="mt-0.5 text-[13px] text-muted">{detalle}</p>
      </div>
    </button>
  )
}

export default function SizeSelector({ value, onChange, step }) {
  return (
    <Card icon={<SizeIcon />} title="Tamaño de la torta" step={step}>
      <div className="flex flex-col gap-2.5">
        {TAMANOS.map((t) => (
          <SizeCard key={t.id} size={t} active={value === t.id} onClick={() => onChange(t.id)} />
        ))}
      </div>
    </Card>
  )
}
