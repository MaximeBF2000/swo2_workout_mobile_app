import { useEffect } from 'react'

export const useOnMount = callback => {
  useEffect(() => {
    callback()
  }, [])
}
