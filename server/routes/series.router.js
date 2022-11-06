import { Router } from 'express'
import {
  createSerie,
  getSeriesByDate,
  getSeriesByExercice,
  createSerieForWorkoutAndExercice
} from '../controllers/series.controller.js'

export const seriesRouter = Router()

seriesRouter.post('/', createSerie)
seriesRouter.post(
  '/createForWorkoutAndExercice',
  createSerieForWorkoutAndExercice
)
seriesRouter.get('/byDate', getSeriesByDate)
seriesRouter.get('/byExercice', getSeriesByExercice)
