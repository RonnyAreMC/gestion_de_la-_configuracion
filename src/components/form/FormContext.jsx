import { createContext, useContext, useRef, useState } from 'react'

const FormContext = createContext(null)

export const useForm = () => useContext(FormContext)

const ESTADO_INICIAL = { values: {}, errors: {}, touched: {} }

export function FormProvider({ children, onSubmit }) {
  const [state, setState] = useState(ESTADO_INICIAL)
  const [enviado, setEnviado] = useState(false)
  const reglas = useRef({})

  const register = (name, rule) => {
    reglas.current[name] = rule
  }

  const validar = (name, value) =>
    reglas.current[name] ? reglas.current[name](value ?? '') : ''

  const setValue = (name, value) => {
    setState((s) => ({
      ...s,
      values: { ...s.values, [name]: value },
      errors: s.touched[name]
        ? { ...s.errors, [name]: validar(name, value) }
        : s.errors,
    }))
  }

  const blur = (name) => {
    setState((s) => ({
      ...s,
      touched: { ...s.touched, [name]: true },
      errors: { ...s.errors, [name]: validar(name, s.values[name]) },
    }))
  }

  const submit = (e) => {
    e.preventDefault()
    const nuevosErrores = {}
    const todosTocados = {}
    Object.keys(reglas.current).forEach((name) => {
      todosTocados[name] = true
      const msg = validar(name, state.values[name])
      if (msg) nuevosErrores[name] = msg
    })
    setState((s) => ({ ...s, errors: nuevosErrores, touched: todosTocados }))

    if (Object.keys(nuevosErrores).length === 0) {
      if (onSubmit) onSubmit(state.values)
      setState(ESTADO_INICIAL)
      setEnviado(true)
      setTimeout(() => setEnviado(false), 5000)
    }
  }

  const api = { ...state, enviado, register, setValue, blur, submit }
  return <FormContext.Provider value={api}>{children}</FormContext.Provider>
}
