import { Router } from 'express'
import {
  createTraining,
  deleteTraining,
  getTrainingByUser,
  updateTraining
} from '../controllers/trainings.controller.js'

export const trainingsRouter = Router()

trainingsRouter.post('/', createTraining)
trainingsRouter.get('/', getTrainingByUser)
trainingsRouter.delete('/', deleteTraining)
trainingsRouter.put('/', updateTraining)
