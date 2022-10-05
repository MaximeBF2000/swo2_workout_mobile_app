import { useState } from 'react'

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)

  const toggle = value =>
    setState(prev => (value && typeof value === 'boolean' ? value : !prev))

  return [state, toggle]
}
