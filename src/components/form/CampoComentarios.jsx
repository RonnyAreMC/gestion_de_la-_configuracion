import { useEffect } from 'react'
import { useForm } from './FormContext'
import TextAreaField from './TextAreaField'

const NAME = 'comentarios'

export default function CampoComentarios() {
  const f = useForm()
  useEffect(() => {
    f.register(NAME, () => '')
  }, [])

  return (
    <TextAreaField
      label="Comentarios (opcional)"
      name={NAME}
      placeholder="Alguna petición especial..."
      value={f.values[NAME] || ''}
      onChange={(e) => f.setValue(NAME, e.target.value)}
    />
  )
}
