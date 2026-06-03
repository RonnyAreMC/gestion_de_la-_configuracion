import { useEffect } from 'react'
import { useForm } from './FormContext'
import InputField from './InputField'

const NAME = 'email'
const validar = (v) =>
  !v.trim()
    ? 'El correo es obligatorio'
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? 'Correo no válido'
      : ''

export default function CampoCorreo() {
  const f = useForm()
  useEffect(() => {
    f.register(NAME, validar)
  }, [])

  return (
    <InputField
      label="Correo electrónico"
      name={NAME}
      type="email"
      inputMode="email"
      autoComplete="email"
      placeholder="correo@ejemplo.com"
      value={f.values[NAME] || ''}
      error={f.touched[NAME] ? f.errors[NAME] : ''}
      onChange={(e) => f.setValue(NAME, e.target.value)}
      onBlur={() => f.blur(NAME)}
    />
  )
}
