import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _createWorkout(workout) {
  const { data } = await server.post('/api/workouts', workout)

  return get(data, 'workout')
}

export async function _updateWorkout(workoutId, workout) {
  const { data } = await server.put(
    '/api/workouts',
    JSON.stringify({ ...workout, id: workoutId })
  )

  return get(data, 'workout')
}

export async function _removeWorkout(workoutId) {
  const { data } = await server.delete(`/api/workout?workoutId=${workoutId}`)

  return get(data, 'workout')
}

export async function _getWorkouts(trainingId) {
  const { data } = await server.get(`/api/workouts?trainingId=${trainingId}`)

  return get(data, 'workout')
}

export async function _addExerciceToWorkout(workoutId, exerciceId) {
  const { data } = await server.post('/api/workouts/add_exercice', {
    workoutId,
    exerciceId
  })

  return get(data, 'workout')
}
