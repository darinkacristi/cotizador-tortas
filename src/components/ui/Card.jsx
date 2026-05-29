import SectionTitle from './SectionTitle'

// Tarjeta contenedora con título e ícono opcionales.
// Permite numerar los pasos del formulario con `step`.
export default function Card({ icon, title, step, children, className = '' }) {
  return (
    <section className={`card-surface p-5 sm:p-6 ${className}`}>
      {title && <SectionTitle icon={icon} step={step}>{title}</SectionTitle>}
      {children}
    </section>
  )
}
