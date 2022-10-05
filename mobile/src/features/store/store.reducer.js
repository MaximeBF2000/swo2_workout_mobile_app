import { get } from 'lodash'

export const storeReducer = (state, action) => {
  const payload = get(action, 'payload')

  switch (get(action, 'type')) {
    case 'toggleShowLogin':
      return { ...state, showLogin: !get(state, 'showLogin') }
    default:
      return state
  }
}
