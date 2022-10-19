import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _createTraining(training) {
  const { data } = await server.post(`/api/trainings`, training)

  return get(data, 'training')
}

export async function _updateTraining(trainingId) {
  return trainingId
}

export async function _removeTraining(trainingId) {
  return trainingId
}

export async function _getTrainings(userId) {
  const { data } = await server.get(`/api/trainings?userId=${userId}`)

  return get(data, 'trainings')
}
