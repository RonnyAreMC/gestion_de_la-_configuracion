import { useEffect } from 'react'
import { useForm } from './FormContext'
import SelectField from './SelectField'

const NAME = 'personas'
const validar = (v) => (!v ? 'Seleccione el número de personas' : '')

export default function CampoPersonas() {
  const f = useForm()
  useEffect(() => {
    f.register(NAME, validar)
  }, [])

  return (
    <SelectField
      label="Número de personas"
      name={NAME}
      options={['1', '2', '3', '4', '5', '6 o más']}
      value={f.values[NAME] || ''}
      error={f.touched[NAME] ? f.errors[NAME] : ''}
      onChange={(e) => f.setValue(NAME, e.target.value)}
      onBlur={() => f.blur(NAME)}
    />
  )
}
