// Íconos SVG (stroke = currentColor) para reutilizar en toda la app.
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const SizeIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <rect x="6" y="8" width="12" height="6" rx="2" />
    <path d="M12 8V5" />
    <circle cx="12" cy="4" r="1" />
  </svg>
)

export const FlavorIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 11a7 7 0 0 1 14 0" />
    <path d="M5 11h14l-6.5 9a1 1 0 0 1-1 0L5 11z" />
  </svg>
)

export const FillingIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

export const StarIcon = (props) => (
  <svg {...base} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export const UserIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

export const CheckIcon = (props) => (
  <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" {...props}>
    <polyline points="1.5,6 4.5,9 10.5,3" />
  </svg>
)

export const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.82c2.17 0 4.21.85 5.75 2.38a8.06 8.06 0 0 1 2.38 5.73c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.54 3.69-8.23 8.23-8.23zm-4.51 4.46c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.38 4.62 2.63 1.02 3.16.82 3.73.77.57-.05 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37-.31-.16-1.84-.91-2.12-1.01-.29-.1-.5-.16-.71.16-.21.31-.81 1.01-.99 1.22-.18.21-.37.23-.68.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.54-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.69-1.7-.96-2.32-.25-.6-.5-.52-.69-.53-.18-.01-.39-.01-.6-.01z" />
  </svg>
)

export const SparkleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z" />
  </svg>
)

export const ArrowDownIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
)
