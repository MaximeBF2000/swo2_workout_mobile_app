import { get } from 'lodash'
import { server } from '../serverInstance'

export async function _createWorkout(workout) {
  const { data } = await server.post(`/api/workouts`, workout)

  return get(data, 'workout')
}

export async function _updateWorkout(workoutId) {
  return workoutId
}

export async function _removeWorkout(workoutId) {
  return workoutId
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
