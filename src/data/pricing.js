// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN DEL COTIZADOR
//  Edita este archivo para ajustar tu menú, precios y datos de marca.
//  Es la única fuente de verdad: la UI y los cálculos se basan en esto.
// ─────────────────────────────────────────────────────────────

// Datos de marca y contacto
export const MARCA = {
  nombre: 'Dannae',
  rubro: 'Repostería',
  // Número de WhatsApp en formato internacional SIN signos ni espacios.
  whatsapp: '56936980342',
  instagram: 'https://www.instagram.com/dannaereposteria.cl',
}

// Máximo de rellenos que el cliente puede combinar
export const MAX_RELLENOS = 2

// ── Tamaños de torta (precio base) ────────────────────────────
// porciones: rango de personas · medida: diámetro en cm (puede ir vacío)
export const TAMANOS = [
  { id: 'pequena', name: 'Pequeña', porciones: '8-10', medida: '18 cm', precio: 18000 },
  { id: 'grande', name: 'Grande', porciones: '25-30', medida: '26 cm', precio: 42000 },
  { id: 'xl', name: 'Extra grande', porciones: '35-40', medida: '', precio: 60000 },
]

// ── Sabores del bizcocho ──────────────────────────────────────
export const SABORES = [
  { id: 'vainilla', emoji: '🍦', name: 'Vainilla', extra: 0 },
  { id: 'chocolate', emoji: '🍫', name: 'Chocolate', extra: 0 },
  { id: 'naranja', emoji: '🍊', name: 'Naranja', extra: 0 },
  { id: 'red_velvet', emoji: '❤️', name: 'Red velvet', extra: 3000 },
  { id: 'zanahoria', emoji: '🥕', name: 'Zanahoria', extra: 2500 },
  { id: 'limon', emoji: '🍋', name: 'Limón', extra: 2000 },
]

// ── Rellenos (multiselección: 1 o 2) ──────────────────────────
// El recargo de cada relleno se suma automáticamente. Como cada relleno
// solo puede elegirse una vez, el recargo de Ganache se aplica una sola vez.
export const RELLENOS = [
  { id: 'manjar', emoji: '🍮', name: 'Manjar', extra: 0 },
  { id: 'ganache', emoji: '🍫', name: 'Ganache', extra: 2000 },
  { id: 'pastelera', emoji: '🤍', name: 'Crema pastelera', extra: 0 },
  { id: 'chantilly', emoji: '🍨', name: 'Chantilly', extra: 0 },
  { id: 'frutos rojos', emoji: '🫐', name: 'Frutos Rojos', extra: 0 },
]

// ── Extras opcionales (todos tipo check on/off) ───────────────
export const EXTRAS = [
  { id: 'topper', emoji: '👑', name: 'Topper personalizado', desc: 'Nombre o figura en la cima', precio: 5000 },
  { id: 'vintage', emoji: '🎀', name: 'Diseño coquette', desc: 'Estilo lambeth con boquillas', precio: 8000 },
  { id: 'delivery', emoji: '🚚', name: 'Envío a domicilio', desc: 'Entrega coordinada', precio: 4000 },
]

// ── Utilidad de formato de moneda (neutro: miles con punto) ───
export function formatPrecio(n) {
  return '$' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

// Helpers para buscar por id
export const findTamano = (id) => TAMANOS.find((t) => t.id === id)
export const findSabor = (id) => SABORES.find((s) => s.id === id)
export const findRelleno = (id) => RELLENOS.find((r) => r.id === id)
export const findExtra = (id) => EXTRAS.find((e) => e.id === id)
