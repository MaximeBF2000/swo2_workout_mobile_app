import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _createTraining(training) {
  const { data } = await server.post('/api/trainings', training)

  return get(data, 'training')
}

export async function _updateTraining(trainingId, training) {
  const { data } = await server.put(
    '/api/trainings',
    JSON.stringify({ ...training, id: trainingId })
  )

  return get(data, 'serie')
}

export async function _removeTraining(trainingId) {
  const { data } = await server.delete(
    `/api/trainings?trainingId=${trainingId}`
  )

  return get(data, 'training')
}

export async function _getTrainings(userId) {
  const { data } = await server.get(`/api/trainings?userId=${userId}`)

  return get(data, 'trainings')
}
