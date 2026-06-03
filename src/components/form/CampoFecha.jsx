import { useEffect } from 'react'
import { useForm } from './FormContext'
import InputField from './InputField'

const NAME = 'fecha'
const validar = (v) =>
  !v
    ? 'Seleccione una fecha'
    : v < new Date().toISOString().split('T')[0]
      ? 'La fecha no puede ser pasada'
      : ''

export default function CampoFecha() {
  const f = useForm()
  useEffect(() => {
    f.register(NAME, validar)
  }, [])

  return (
    <InputField
      label="Fecha de reserva"
      name={NAME}
      type="date"
      value={f.values[NAME] || ''}
      error={f.touched[NAME] ? f.errors[NAME] : ''}
      onChange={(e) => f.setValue(NAME, e.target.value)}
      onBlur={() => f.blur(NAME)}
    />
  )
}
