import { Router } from 'express'
import {
  createSerie,
  getSeriesByDate,
  getSeriesByExercice,
  createSerieForWorkoutAndExercice,
  updateSerie,
  deleteSerie,
  getSeriesDates
} from '../controllers/series.controller.js'

export const seriesRouter = Router()

seriesRouter.post('/', createSerie)
seriesRouter.put('/', updateSerie)
seriesRouter.delete('/', deleteSerie)
seriesRouter.post(
  '/createForWorkoutAndExercice',
  createSerieForWorkoutAndExercice
)
seriesRouter.get('/byDate', getSeriesByDate)
seriesRouter.get('/byExercice', getSeriesByExercice)
seriesRouter.get('/dates', getSeriesDates)
