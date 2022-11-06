import { useEffect } from 'react'

export const useLogger = (args, otherArgs) =>
  useEffect(() => {
    console.warn([...args, ...otherArgs])
  }, args)
