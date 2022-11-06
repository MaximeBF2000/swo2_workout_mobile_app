import { Router } from 'express'
import {
  createWorkout,
  getWorkoutByTraining,
  addExerciceToWorkout
} from '../controllers/workouts.controller.js'

export const workoutsRouter = Router()

workoutsRouter.post('/', createWorkout)
workoutsRouter.post('/add_exercice', addExerciceToWorkout)
workoutsRouter.get('/', getWorkoutByTraining)
