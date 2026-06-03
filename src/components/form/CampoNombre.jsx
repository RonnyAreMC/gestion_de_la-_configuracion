import { useEffect } from 'react'
import { useForm } from './FormContext'
import InputField from './InputField'

const NAME = 'nombre'
const validar = (v) =>
  !v.trim()
    ? 'El nombre es obligatorio'
    : v.trim().length < 3
      ? 'Mínimo 3 caracteres'
      : ''

export default function CampoNombre() {
  const f = useForm()
  useEffect(() => {
    f.register(NAME, validar)
  }, [])

  return (
    <InputField
      label="Nombre completo"
      name={NAME}
      autoComplete="name"
      placeholder="Ej: Ana Pérez"
      value={f.values[NAME] || ''}
      error={f.touched[NAME] ? f.errors[NAME] : ''}
      onChange={(e) => f.setValue(NAME, e.target.value)}
      onBlur={() => f.blur(NAME)}
    />
  )
}
