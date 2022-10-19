import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _getUser(email, password) {
  const { data } = await server.get('/api/auth', {
    params: {
      email,
      password
    }
  })

  return { error: get(data, 'error'), user: get(data, 'user') }
}

export async function _registerUser(email, password) {
  const { data } = await server.post('/api/auth', {
    email,
    password
  })

  return { error: get(data, 'error'), user: get(data, 'user') }
}
