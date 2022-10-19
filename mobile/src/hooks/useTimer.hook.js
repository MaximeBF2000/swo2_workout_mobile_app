import { useState } from 'react'
import { get, padStart } from 'lodash'
import { useStore } from '../features/store'

export const useTimer = () => {
  const { timer, dispatch } = useStore()
  const [timerInterval, setTimerInterval] = useState(null)

  const formatted =
    padStart(get(timer, 'minutes', 0), 2, '0') +
    ':' +
    padStart(get(timer, 'seconds', 0), 2, '0')

  const play = () => {
    const interval = setInterval(() => {
      dispatch('incrementTimer')
    }, 1000)
    setTimerInterval(interval)
  }

  const pause = () => clearInterval(timerInterval)

  const reset = () => {
    dispatch('resetTimer')
    setTimerInterval(null)
  }

  return { value: timer, formatted, play, pause, reset }
}
