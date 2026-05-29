import { useState } from 'react'
import { WhatsappIcon } from './ui/icons'
import { buildWhatsappUrl } from '../utils/whatsapp'

// Genera el mensaje y abre WhatsApp. Valida antes de enviar.
export default function WhatsappButton({ state, quote, validate }) {
  const [sending, setSending] = useState(false)

  const handleClick = () => {
    // Validación básica antes de continuar
    if (!validate()) {
      // Lleva el foco al primer campo con error
      document.getElementById('nombre')?.focus()
      document.getElementById('cotizador')?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // Loading state breve mientras se arma el mensaje
    setSending(true)
    const url = buildWhatsappUrl(state, quote)
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
      setSending(false)
    }, 500)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={sending}
      className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-3.5 text-[15px] font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#1ebe5b] disabled:translate-y-0 disabled:opacity-70"
    >
      {sending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          Generando mensaje…
        </>
      ) : (
        <>
          <WhatsappIcon className="h-5 w-5" />
          Cotizar por WhatsApp
        </>
      )}
    </button>
  )
}
