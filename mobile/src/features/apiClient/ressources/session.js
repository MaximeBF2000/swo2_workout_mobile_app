import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _createSession(session) {
  return session
}

export async function _updateSession(sessionId) {
  return sessionId
}

export async function _removeSession(sessionId) {
  return sessionId
}

export async function _getSessions(trainingId) {
  const { data } = await server.get(`/api/sessions/${trainingId}`)

  return get(data, 'session')
}
