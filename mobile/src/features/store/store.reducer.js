import { get } from 'lodash'
import { incrementTimer, resetTimer } from './actions'

export const storeReducer = (state, action) => {
  const payload = get(action, 'payload')

  switch (get(action, 'type')) {
    case 'incrementTimer':
      return incrementTimer(state)
    case 'resetTimer':
      return resetTimer(state)
    case 'toggleEditMode':
      return { ...state, inEditMode: !get(state, 'inEditMode') }
    case 'setUser':
      return { ...state, user: payload }
    default:
      return state
  }
}
