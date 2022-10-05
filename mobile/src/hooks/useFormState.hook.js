import { useState } from 'react'

export const useFormState = (formState = {}) => {
  const [state, setState] = useState(formState)

  const setFormState = inputName => value => {
    setState(prevState => ({
      ...prevState,
      [inputName]: value
    }))
  }

  return [state, setFormState]
}
