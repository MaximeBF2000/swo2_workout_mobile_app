import { Router } from 'express'
import {
  createTraining,
  getTrainingByUser
} from '../controllers/trainings.controller.js'

export const trainingsRouter = Router()

trainingsRouter.post('/', createTraining)
trainingsRouter.get('/', getTrainingByUser)
