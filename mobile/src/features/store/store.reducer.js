import { get } from 'lodash'
import { incrementTimer, resetTimer, setTimerPlaying } from './actions'

export const storeReducer = (state, action) => {
  const payload = get(action, 'payload')

  switch (get(action, 'type')) {
    case 'incrementTimer':
      return incrementTimer(state)
    case 'resetTimer':
      return resetTimer(state)
    case 'setTimerPlaying':
      return setTimerPlaying(state, payload)
    case 'toggleEditMode':
      return { ...state, inEditMode: !get(state, 'inEditMode') }
    case 'setUser':
      return { ...state, user: payload }
    default:
      return state
  }
}
