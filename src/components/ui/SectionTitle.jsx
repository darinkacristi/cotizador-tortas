// Encabezado de cada sección del formulario.
export default function SectionTitle({ icon, step, children }) {
  return (
    <header className="mb-4 flex items-center gap-3">
      {step != null && (
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple/20 font-display text-sm font-semibold text-purple-deep">
          {step}
        </span>
      )}
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-plum">
        {icon && (
          <span className="text-purple-dark [&>svg]:h-[18px] [&>svg]:w-[18px]">{icon}</span>
        )}
        {children}
      </h3>
    </header>
  )
}
