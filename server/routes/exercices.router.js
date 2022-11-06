import { Router } from 'express'
import {
  createExercices,
  getExerciceById,
  getExercicesByCategory,
  getExercicesBySession,
  getExercicesByWorkout
} from '../controllers/exercices.controller.js'

export const exercicesRouter = Router()

exercicesRouter.post('/', createExercices)
exercicesRouter.get('/', getExerciceById)
exercicesRouter.get('/byCategory', getExercicesByCategory)
exercicesRouter.get('/byWorkout', getExercicesByWorkout)
exercicesRouter.get('/bySession', getExercicesBySession)
