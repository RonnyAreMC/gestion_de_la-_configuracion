import { useEffect } from 'react'
import { useForm } from './FormContext'
import InputField from './InputField'

const NAME = 'telefono'
const validar = (v) =>
  !v.trim()
    ? 'El teléfono es obligatorio'
    : !/^\d{7,10}$/.test(v)
      ? 'Ingrese de 7 a 10 dígitos'
      : ''

export default function CampoTelefono() {
  const f = useForm()
  useEffect(() => {
    f.register(NAME, validar)
  }, [])

  return (
    <InputField
      label="Teléfono"
      name={NAME}
      type="tel"
      inputMode="numeric"
      maxLength={10}
      autoComplete="tel"
      placeholder="0999999999"
      value={f.values[NAME] || ''}
      error={f.touched[NAME] ? f.errors[NAME] : ''}
      onChange={(e) => f.setValue(NAME, e.target.value)}
      onBlur={() => f.blur(NAME)}
    />
  )
}
