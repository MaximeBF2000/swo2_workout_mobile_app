import { prisma } from '../prisma/index.js'
import moment from 'moment'

import { inspect } from 'node:util'

const EMPTY_OBJECT = {}

export const createSerie = async (req, res) => {
  const {
    reps,
    weight,
    date,
    spoted = false,
    note = '',
    exerciceId,
    sessionId,
    userId
  } = req?.body ?? EMPTY_OBJECT

  const serie = await prisma.serie.create({
    data: {
      reps,
      weight,
      date,
      spoted,
      note,
      exerciceId,
      sessionId,
      userId
    }
  })

  return res.json({ serie })
}

export const getSeriesByDate = async (req, res) => {
  const { userId, date } = req?.query ?? EMPTY_OBJECT

  const series = await prisma.serie.findMany({
    take: 120,
    include: { exercice: true },
    orderBy: { date: 'desc' },
    where: { sessionId: parseInt(userId), date }
  })

  return res.json({ series })
}

export const getSeriesByExercice = async (req, res) => {
  const { workoutId, exerciceId } = req?.query ?? EMPTY_OBJECT

  const seriesArray = await prisma.serie.findMany({
    take: 120,
    include: { exercice: true },
    orderBy: { date: 'desc' },
    where: {
      workoutId: parseInt(workoutId),
      exerciceId: parseInt(exerciceId)
    }
  })

  const series = {}
  seriesArray?.forEach(serie => {
    const formattedDate = moment(serie?.date).format('DD/MM/YYYY')
    if (formattedDate in series) {
      const previousSeries = structuredClone(series[formattedDate])
      series[formattedDate] = [...previousSeries, serie]
    } else {
      series[formattedDate] = [serie]
    }
  })

  return res.json({ series })
}

export const createSerieForWorkoutAndExercice = async (req, res) => {
  const { reps, weight, date, spoted, note, exerciceId, workoutId, userId } =
    req?.body ?? {}

  const serie = await prisma.serie.create({
    data: {
      reps,
      weight,
      date,
      spoted,
      note,
      exerciceId: exerciceId ? parseInt(exerciceId) : undefined,
      workoutId: workoutId ? parseInt(workoutId) : undefined,
      userId: userId ? parseInt(userId) : undefined
    }
  })

  return res.json({ serie })
}
