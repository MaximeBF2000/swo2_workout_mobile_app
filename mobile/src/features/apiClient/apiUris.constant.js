export const apiUris = {
  catagories: () => '/api/categories',
  exercicesByCategory: () => '/api/exercices/byCategory',
  exercicesByWorkout: workoutId =>
    `/api/exercices/byWorkout?workoutId=${workoutId}`,
  trainingsByUser: userId => `/api/trainings?userId=${userId}`,
  workoutsByTraining: trainingId => `/api/workouts?trainingId=${trainingId}`,
  seriesByExercice: (workoutId, exerciceId) =>
    `/api/series/byExercice?workoutId=${workoutId}&exerciceId=${exerciceId}`
}
