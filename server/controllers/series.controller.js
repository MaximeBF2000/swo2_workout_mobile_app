import { prisma } from '../prisma/index.js'
import moment from 'moment'

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

export const updateSerie = async (req, res) => {
  const { id, ...body } = req?.body ?? EMPTY_OBJECT

  const updatedSerie = await prisma.serie.update({
    data: body,
    where: { id }
  })

  return res.json({ serie: updatedSerie })
}

export const deleteSerie = async (req, res) => {
  const deletedSerie = await prisma.serie.delete({
    where: { id: parseFloat(req?.query?.serieId) }
  })

  return res.json({ serie: deletedSerie })
}

export const getSeriesByDate = async (req, res) => {
  const { userId, date_range: dateRange } = req?.query ?? EMPTY_OBJECT
  const [beginDate, endDate] = JSON.parse(dateRange)

  const seriesArray = await prisma.serie.findMany({
    take: 120,
    include: { exercice: true },
    orderBy: { date: 'desc' },
    where: {
      userId: parseInt(userId),
      date: {
        gte: beginDate,
        lt: endDate
      }
    }
  })

  const series = {}
  seriesArray?.forEach(serie => {
    const exercice = serie?.exercice?.name
    if (exercice in series) {
      const previousSeries = structuredClone(series[exercice])
      series[exercice] = [...previousSeries, serie]
    } else {
      series[exercice] = [serie]
    }
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

export const getSeriesDates = async (req, res) => {
  const { userId } = req?.query ?? EMPTY_OBJECT

  const dates = await prisma.serie.findMany({
    take: 200,
    select: { date: true },
    where: { userId: parseInt(userId) },
    orderBy: { date: 'desc' }
  })

  const formattedDates = []
  dates?.forEach(serie => {
    const formattedDate = moment(serie?.date).format('YYYY-MM-DD')
    if (!formattedDates.includes(formattedDate))
      formattedDates.push(formattedDate)
  })

  return res.json({ dates: formattedDates })
}

export const createSerieForWorkoutAndExercice = async (req, res) => {
  const { reps, weight, date, spoted, note, exerciceId, workoutId, userId } =
    req?.body ?? EMPTY_OBJECT

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
