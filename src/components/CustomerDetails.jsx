import Card from './ui/Card'
import { UserIcon } from './ui/icons'

// Campos de contacto. El nombre es obligatorio (validación básica).
export default function CustomerDetails({ state, errors, onChange, step }) {
  return (
    <Card icon={<UserIcon />} title="Tus datos" step={step}>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Nombre */}
        <div className="sm:col-span-2">
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-ink">
            Nombre <span className="text-purple-dark">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            value={state.nombre}
            onChange={(e) => onChange('nombre', e.target.value)}
            placeholder="¿Cómo te llamas?"
            maxLength={60}
            className={`w-full rounded-xl border-[1.5px] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-purple
              ${errors.nombre ? 'border-red-300' : 'border-line'}`}
          />
          {errors.nombre && (
            <p className="mt-1.5 text-xs text-red-500">{errors.nombre}</p>
          )}
        </div>

        {/* Fecha del evento */}
        <div>
          <label htmlFor="fecha" className="mb-1.5 block text-sm font-medium text-ink">
            Fecha del evento
          </label>
          <input
            id="fecha"
            type="date"
            value={state.fecha}
            onChange={(e) => onChange('fecha', e.target.value)}
            className="w-full rounded-xl border-[1.5px] border-line bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-purple"
          />
        </div>

        {/* Mensaje opcional */}
        <div>
          <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-ink">
            Nota (opcional)
          </label>
          <input
            id="mensaje"
            type="text"
            value={state.mensaje}
            onChange={(e) => onChange('mensaje', e.target.value)}
            placeholder="Color, temática, alergias…"
            maxLength={140}
            className="w-full rounded-xl border-[1.5px] border-line bg-white px-4 py-2.5 text-sm outline-none transition focus:border-purple"
          />
        </div>
      </div>
    </Card>
  )
}
