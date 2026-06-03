import { useEffect } from 'react'
import { useForm } from './FormContext'
import SelectField from './SelectField'

const NAME = 'mesa'
const validar = (v) => (!v ? 'Seleccione el tipo de mesa' : '')

export default function CampoMesa() {
  const f = useForm()
  useEffect(() => {
    f.register(NAME, validar)
  }, [])

  return (
    <SelectField
      label="Tipo de mesa"
      name={NAME}
      options={['Interior', 'Terraza', 'Ventana', 'Privada']}
      value={f.values[NAME] || ''}
      error={f.touched[NAME] ? f.errors[NAME] : ''}
      onChange={(e) => f.setValue(NAME, e.target.value)}
      onBlur={() => f.blur(NAME)}
    />
  )
}
