import { get } from 'lodash'

export const incrementTimer = state => {
  const seconds = get(state, 'timer.seconds')
  const minutes = get(state, 'timer.minutes')

  if (minutes === 59 && seconds === 59) return state

  if (seconds === 59)
    return {
      ...state,
      timer: { ...get(state, 'timer'), minutes: minutes + 1, seconds: 0 }
    }

  return {
    ...state,
    timer: { ...get(state, 'timer'), minutes, seconds: seconds + 1 }
  }
}

export const resetTimer = state => {
  return {
    ...state,
    timer: { ...get(state, 'timer'), playing: false, minutes: 0, seconds: 0 }
  }
}

export const setTimerPlaying = (state, payload) => {
  return {
    ...state,
    timer: {
      ...get(state, 'timer'),
      playing: payload
    }
  }
}
