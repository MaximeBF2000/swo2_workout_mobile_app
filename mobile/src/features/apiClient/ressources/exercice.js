import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _createExercices(exercices) {
  const { data } = await server.post('/api/exercices', exercices)

  return get(data, 'exercice')
}

export async function _updateExercice(exerciceId) {
  return exerciceId
}

export async function _removeExercice(exerciceId) {
  return exerciceId
}

export async function _getAllExercices(exercice) {
  return exercice
}

export async function _getExercice(exerciceId) {
  const { data } = await server.get(`/api/exercices?exerciceId=${exerciceId}`)

  return get(data, 'exercice')
}

export async function _getExerciceByWorkout(workoutId) {
  const { data } = await server.get(
    `/api/exercices/byWorkout?workoutId=${workoutId}`
  )

  return get(data, 'exercices')
}
