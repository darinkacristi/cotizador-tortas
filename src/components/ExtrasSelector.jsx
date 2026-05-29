import Card from './ui/Card'
import { StarIcon, CheckIcon } from './ui/icons'
import { EXTRAS, formatPrecio } from '../data/pricing'

// Fila de extra tipo check (on/off)
function ExtraRow({ extra, active, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      className={`flex w-full items-center justify-between rounded-2xl border-[1.5px] px-4 py-3 text-left transition-all duration-200
        ${active ? 'border-purple-dark bg-purple/12' : 'border-line bg-white hover:border-purple'}`}
    >
      <span className="flex items-center gap-3">
        <span
          className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-[1.5px] transition-all
            ${active ? 'border-purple-dark bg-purple-dark' : 'border-line bg-white'}`}
        >
          <CheckIcon className={`h-3 w-3 transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`} />
        </span>
        <span>
          <span className={`block text-sm font-medium ${active ? 'text-purple-deep' : 'text-ink'}`}>
            {extra.emoji} {extra.name}
          </span>
          <span className="block text-xs text-muted">{extra.desc}</span>
        </span>
      </span>
      <span className={`text-xs font-medium ${active ? 'text-purple-dark' : 'text-muted'}`}>
        +{formatPrecio(extra.precio)}
      </span>
    </button>
  )
}

export default function ExtrasSelector({ extras, onToggle, step }) {
  return (
    <Card icon={<StarIcon />} title="Extras y decoración" step={step}>
      <div className="flex flex-col gap-2.5">
        {EXTRAS.map((e) => (
          <ExtraRow key={e.id} extra={e} active={extras[e.id]} onToggle={() => onToggle(e.id)} />
        ))}
      </div>
    </Card>
  )
}
