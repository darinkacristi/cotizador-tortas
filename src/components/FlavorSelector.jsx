import Card from './ui/Card'
import OptionButton from './ui/OptionButton'
import { FlavorIcon } from './ui/icons'
import { SABORES, formatPrecio } from '../data/pricing'

export default function FlavorSelector({ value, onChange, step }) {
  return (
    <Card icon={<FlavorIcon />} title="Sabor del bizcocho" step={step}>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {SABORES.map((s) => (
          <OptionButton
            key={s.id}
            layout="tile"
            emoji={s.emoji}
            name={s.name}
            price={s.extra > 0 ? `+${formatPrecio(s.extra)}` : 'incluido'}
            active={value === s.id}
            onClick={() => onChange(s.id)}
          />
        ))}
      </div>
    </Card>
  )
}
