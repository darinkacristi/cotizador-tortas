import { useMemo, useState } from 'react'
import {
  MAX_RELLENOS,
  TAMANOS,
  SABORES,
  RELLENOS,
  EXTRAS,
  findTamano,
  findSabor,
} from '../data/pricing'

// Estado inicial del pedido.
const ESTADO_INICIAL = {
  // Datos del cliente
  nombre: '',
  fecha: '',
  mensaje: '',
  // Configuración de la torta
  tamano: TAMANOS[0].id,
  sabor: SABORES[0].id,
  // Rellenos: array de ids (mínimo 1, máximo MAX_RELLENOS)
  rellenos: [RELLENOS[0].id],
  // Extras: { topper: bool, vintage: bool, delivery: bool }
  extras: EXTRAS.reduce((acc, e) => {
    acc[e.id] = false
    return acc
  }, {}),
}

export function useQuote() {
  const [state, setState] = useState(ESTADO_INICIAL)
  const [errors, setErrors] = useState({})

  // ── Acciones ──────────────────────────────────────────────
  const setField = (field, value) => {
    setState((s) => ({ ...s, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const setTamano = (id) => setState((s) => ({ ...s, tamano: id }))
  const setSabor = (id) => setState((s) => ({ ...s, sabor: id }))

  // Multiselección de rellenos: mínimo 1, máximo MAX_RELLENOS.
  const toggleRelleno = (id) =>
    setState((s) => {
      const yaElegido = s.rellenos.includes(id)
      if (yaElegido) {
        // No permitir quedar sin relleno (mínimo 1)
        if (s.rellenos.length === 1) return s
        return { ...s, rellenos: s.rellenos.filter((r) => r !== id) }
      }
      // Agregar solo si no se superó el máximo
      if (s.rellenos.length >= MAX_RELLENOS) return s
      return { ...s, rellenos: [...s.rellenos, id] }
    })

  const toggleExtra = (id) =>
    setState((s) => ({ ...s, extras: { ...s.extras, [id]: !s.extras[id] } }))

  const reset = () => {
    setState(ESTADO_INICIAL)
    setErrors({})
  }

  // ── Validaciones básicas ──────────────────────────────────
  const validate = () => {
    const next = {}
    if (!state.nombre.trim()) next.nombre = 'Cuéntanos tu nombre para coordinar el pedido.'
    if (state.nombre.trim().length > 60) next.nombre = 'El nombre es demasiado largo.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  // ── Cálculo derivado del precio ───────────────────────────
  const quote = useMemo(() => {
    const tamano = findTamano(state.tamano)
    const sabor = findSabor(state.sabor)

    const base = tamano?.precio ?? 0
    const saborCosto = sabor?.extra ?? 0

    // Rellenos seleccionados (en el orden definido en RELLENOS)
    const rellenosSeleccionados = RELLENOS.filter((r) => state.rellenos.includes(r.id))
    // Suma de recargos. Como cada relleno aparece una sola vez, el recargo
    // de Ganache se aplica exactamente una vez aunque se elijan 2 rellenos.
    const rellenosCosto = rellenosSeleccionados.reduce((sum, r) => sum + (r.extra ?? 0), 0)

    // Extras (todos tipo check)
    let extrasCosto = 0
    const extrasDetalle = []
    EXTRAS.forEach((e) => {
      if (state.extras[e.id]) {
        extrasCosto += e.precio
        extrasDetalle.push({ ...e, subtotal: e.precio })
      }
    })

    const total = base + saborCosto + rellenosCosto + extrasCosto

    return {
      tamano,
      sabor,
      base,
      saborCosto,
      rellenosSeleccionados,
      rellenosCosto,
      extrasCosto,
      extrasDetalle,
      total,
    }
  }, [state])

  return {
    state,
    errors,
    quote,
    setField,
    setTamano,
    setSabor,
    toggleRelleno,
    toggleExtra,
    validate,
    reset,
  }
}
