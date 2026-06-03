import { FormProvider, useForm } from './form/FormContext'
import CampoNombre from './form/CampoNombre'
import CampoCorreo from './form/CampoCorreo'
import CampoTelefono from './form/CampoTelefono'
import CampoFecha from './form/CampoFecha'
import CampoPersonas from './form/CampoPersonas'
import CampoMesa from './form/CampoMesa'
import CampoComentarios from './form/CampoComentarios'
import Button from './form/Button'

function FormularioReserva() {
  const { submit, enviado } = useForm()

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      {enviado && (
        <div className="form-success">
          ¡Reservación enviada con éxito! Te contactaremos pronto.
        </div>
      )}

      <div className="form-row">
        <CampoNombre />
        <CampoCorreo />
      </div>

      <div className="form-row">
        <CampoTelefono />
        <CampoFecha />
      </div>

      <div className="form-row">
        <CampoPersonas />
        <CampoMesa />
      </div>

      <CampoComentarios />

      <Button type="submit" block>Confirmar reservación</Button>
    </form>
  )
}

export default function Reservation() {
  return (
    <section className="reservation" id="reservar">
      <div className="container">
        <h2 className="section-title">Reserva tu mesa</h2>
        <p className="section-subtitle">Completa el formulario y te esperamos</p>

        <FormProvider onSubmit={(datos) => console.log('Reserva:', datos)}>
          <FormularioReserva />
        </FormProvider>
      </div>
    </section>
  )
}
