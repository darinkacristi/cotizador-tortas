import { MARCA, formatPrecio } from '../data/pricing'

// Emojis escritos con su código Unicode (\u{...}) en vez del caracter directo.
// Así son texto ASCII normal en el archivo y NUNCA se corrompen al editar/subir;
// JavaScript los convierte en el emoji real al ejecutarse.
const EMOJI = {
  torta: '\u{1F382}',   // 🎂
  persona: '\u{1F464}', // 👤
  fecha: '\u{1F4C5}',   // 📅
  pastel: '\u{1F370}',  // 🍰
  relleno: '\u{1F967}', // 🥧
  estrella: '\u{2728}', // ✨
  dinero: '\u{1F4B0}',  // 💰
  nota: '\u{1F4DD}',    // 📝
}

// Construye el texto del pedido para WhatsApp a partir del estado y la cotización.
export function buildWhatsappMessage(state, quote) {
  const { tamano, sabor, rellenosSeleccionados, extrasDetalle, total } = quote

  // Tamaño con porciones y cm
  const tamanoLinea = tamano
    ? `${tamano.name} (${tamano.porciones} porciones${tamano.medida ? `, ${tamano.medida}` : ''})`
    : '-'

  // Rellenos (1 o 2) unidos con " + "
  const rellenosLinea =
    rellenosSeleccionados && rellenosSeleccionados.length > 0
      ? rellenosSeleccionados.map((r) => r.name).join(' + ')
      : '-'

  // Lista de extras
  const extrasLinea =
    extrasDetalle.length > 0 ? extrasDetalle.map((e) => e.name).join(', ') : 'Ninguno'

  const lineas = [
    `${EMOJI.torta} ¡Hola! Quiero cotizar esta torta`,
    '',
    `${EMOJI.persona} Nombre: ${state.nombre.trim() || 'Por definir'}`,
    `${EMOJI.fecha} Fecha del evento: ${state.fecha || 'Por definir'}`,
    '',
    `${EMOJI.torta} Tamaño: ${tamanoLinea}`,
    `${EMOJI.pastel} Sabor: ${sabor?.name ?? '-'}`,
    `${EMOJI.relleno} Relleno: ${rellenosLinea}`,
    `${EMOJI.estrella} Extras: ${extrasLinea}`,
    '',
    `${EMOJI.dinero} Total estimado: ${formatPrecio(total)}`,
  ]

  if (state.mensaje.trim()) {
    lineas.push('', `${EMOJI.nota} Nota: ${state.mensaje.trim()}`)
  }

  return lineas.join('\n')
}

// Devuelve la URL completa de WhatsApp lista para abrir.
export function buildWhatsappUrl(state, quote) {
  const texto = buildWhatsappMessage(state, quote)
  return `https://wa.me/${MARCA.whatsapp}?text=${encodeURIComponent(texto)}`
}
