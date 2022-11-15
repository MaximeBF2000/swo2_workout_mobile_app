import { Router } from 'express'
import {
  createWorkout,
  getWorkoutByTraining,
  addExerciceToWorkout,
  updateWorkout,
  deleteWorkout
} from '../controllers/workouts.controller.js'

export const workoutsRouter = Router()

workoutsRouter.post('/', createWorkout)
workoutsRouter.post('/add_exercice', addExerciceToWorkout)
workoutsRouter.get('/', getWorkoutByTraining)
workoutsRouter.put('/', updateWorkout)
workoutsRouter.delete('/', deleteWorkout)
