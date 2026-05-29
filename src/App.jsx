import { useEffect, useState } from 'react'
import { useQuote } from './hooks/useQuote'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Quoter from './components/Quoter'
import MobileBar from './components/MobileBar'
import Footer from './components/Footer'

export default function App() {
  // Loading state inicial (breve, mejora la percepción de carga)
  const [loading, setLoading] = useState(true)

  // Estado y lógica del cotizador centralizados en un hook
  const quoter = useQuote()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="relative z-10 min-h-screen pb-24 lg:pb-0">
      <Navbar />
      <Hero />
      <Quoter quoter={quoter} />
      <Footer />

      {/* Barra de acción fija solo en móvil */}
      <MobileBar
        state={quoter.state}
        quote={quoter.quote}
        validate={quoter.validate}
      />
    </div>
  )
}
