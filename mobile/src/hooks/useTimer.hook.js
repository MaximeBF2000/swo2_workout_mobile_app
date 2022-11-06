import { useState } from 'react'
import { get, padStart } from 'lodash'
import { useStore } from '../features/store'

export const useTimer = () => {
  const { timer, dispatch } = useStore()
  const [timerInterval, setTimerInterval] = useState(null)

  const seconds = get(timer, 'seconds', 0)
  const minutes = get(timer, 'minutes', 0)

  const formatted = padStart(minutes, 2, '0') + ':' + padStart(seconds, 2, '0')

  const play = () => {
    dispatch('setTimerPlaying', true)
    const interval = setInterval(() => dispatch('incrementTimer'), 1000)
    setTimerInterval(interval)
  }

  const pause = () => {
    dispatch('setTimerPlaying', false)
    clearInterval(timerInterval)
  }

  const reset = () => {
    if (seconds === 0 && minutes === 0) return
    dispatch('resetTimer')
    clearInterval(timerInterval)
    setTimerInterval(null)
    dispatch('setTimerPlaying', false)
  }

  return {
    value: timer,
    formatted,
    play,
    pause,
    reset,
    playing: get(timer, 'playing')
  }
}
