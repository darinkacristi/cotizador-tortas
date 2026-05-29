// Botón de opción seleccionable, usado por varios selectores.
// Muestra emoji opcional, nombre, subtítulo y etiqueta de precio.
export default function OptionButton({
  emoji,
  name,
  sub,
  price,
  active,
  onClick,
  layout = 'row', // 'row' | 'tile'
}) {
  const isTile = layout === 'tile'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group relative rounded-2xl border-[1.5px] transition-all duration-200
        ${isTile ? 'flex flex-col items-center gap-1 px-2 py-3 text-center' : 'flex items-center gap-3 px-4 py-3 text-left'}
        ${
          active
            ? 'border-purple-dark bg-purple/15 shadow-sm'
            : 'border-line bg-white hover:-translate-y-0.5 hover:border-purple hover:shadow-soft'
        }`}
    >
      {emoji && (
        <span className={isTile ? 'text-2xl leading-none' : 'text-xl leading-none'}>
          {emoji}
        </span>
      )}

      <span className={isTile ? '' : 'flex-1'}>
        <span
          className={`block font-medium ${isTile ? 'text-[13px] leading-tight' : 'text-sm'} ${
            active ? 'text-purple-deep' : 'text-ink'
          }`}
        >
          {name}
        </span>
        {sub && (
          <span className={`block text-[11px] ${active ? 'text-purple-dark' : 'text-muted'}`}>
            {sub}
          </span>
        )}
      </span>

      {price != null && (
        <span
          className={`${isTile ? 'text-[10px]' : 'text-xs font-medium'} ${
            active ? 'text-purple-dark' : 'text-muted'
          }`}
        >
          {price}
        </span>
      )}
    </button>
  )
}
