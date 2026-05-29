import Card from './ui/Card'
import { FillingIcon, CheckIcon } from './ui/icons'
import { RELLENOS, MAX_RELLENOS, formatPrecio } from '../data/pricing'

// Opción de relleno con checkbox. Se deshabilita cuando ya hay 2 elegidos
// y esta no está seleccionada (para respetar el máximo).
function FillingTile({ relleno, active, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      disabled={disabled}
      className={`flex items-center gap-3 rounded-2xl border-[1.5px] px-4 py-3 text-left transition-all duration-200
        ${
          active
            ? 'border-purple-dark bg-purple/15 shadow-sm'
            : disabled
              ? 'cursor-not-allowed border-line bg-white opacity-40'
              : 'border-line bg-white hover:-translate-y-0.5 hover:border-purple hover:shadow-soft'
        }`}
    >
      {/* Checkbox */}
      <span
        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-[1.5px] transition-all
          ${active ? 'border-purple-dark bg-purple-dark' : 'border-line bg-white'}`}
      >
        <CheckIcon className={`h-3 w-3 transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`} />
      </span>

      <span className="flex-1 text-sm font-medium">
        <span className={active ? 'text-purple-deep' : 'text-ink'}>
          {relleno.emoji} {relleno.name}
        </span>
      </span>

      <span className={`text-xs font-medium ${active ? 'text-purple-dark' : 'text-muted'}`}>
        {relleno.extra > 0 ? `+${formatPrecio(relleno.extra)}` : 'incluido'}
      </span>
    </button>
  )
}

export default function FillingSelector({ selected, onToggle, step }) {
  const atMax = selected.length >= MAX_RELLENOS

  return (
    <Card icon={<FillingIcon />} title="Relleno" step={step}>
      <p className="mb-3 text-[13px] text-muted">
        Elige 1 o 2 rellenos ·{' '}
        <span className="font-medium text-purple-dark">
          {selected.length}/{MAX_RELLENOS} seleccionados
        </span>
      </p>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {RELLENOS.map((r) => {
          const active = selected.includes(r.id)
          return (
            <FillingTile
              key={r.id}
              relleno={r}
              active={active}
              disabled={!active && atMax}
              onClick={() => onToggle(r.id)}
            />
          )
        })}
      </div>

      {atMax && (
        <p className="mt-3 text-xs text-muted">
          Llegaste al máximo de {MAX_RELLENOS}. Deselecciona uno para cambiarlo.
        </p>
      )}
    </Card>
  )
}
