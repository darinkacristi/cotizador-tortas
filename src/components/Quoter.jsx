import CustomerDetails from './CustomerDetails'
import SizeSelector from './SizeSelector'
import FlavorSelector from './FlavorSelector'
import FillingSelector from './FillingSelector'
import ExtrasSelector from './ExtrasSelector'
import OrderSummary from './OrderSummary'

// Sección principal: formulario a la izquierda, resumen pegajoso a la derecha.
export default function Quoter({ quoter }) {
  const {
    state,
    errors,
    quote,
    setField,
    setTamano,
    setSabor,
    toggleRelleno,
    toggleExtra,
    validate,
  } = quoter

  return (
    <section id="cotizador" className="container-app scroll-mt-20 py-12 sm:py-16">
      <div className="mb-8 text-center">
        <h2 className="font-display text-[clamp(26px,5vw,36px)] font-semibold text-plum">
          Arma tu torta
        </h2>
        <p className="mt-2 text-muted">Personaliza cada detalle y mira el precio actualizarse.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        {/* Columna del formulario */}
        <div className="flex flex-col gap-5">
          <CustomerDetails state={state} errors={errors} onChange={setField} step={1} />
          <SizeSelector value={state.tamano} onChange={setTamano} step={2} />
          <FlavorSelector value={state.sabor} onChange={setSabor} step={3} />
          <FillingSelector selected={state.rellenos} onToggle={toggleRelleno} step={4} />
          <ExtrasSelector extras={state.extras} onToggle={toggleExtra} step={5} />
        </div>

        {/* Columna del resumen (pegajosa en escritorio) */}
        <div className="lg:sticky lg:top-20">
          <OrderSummary state={state} quote={quote} validate={validate} />
        </div>
      </div>
    </section>
  )
}
