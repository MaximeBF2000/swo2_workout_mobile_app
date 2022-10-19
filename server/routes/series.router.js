import { Router } from 'express'
import { prisma } from '../prisma/index.js'

export const seriesRouter = Router()

seriesRouter.post('/', async (req, res) => {
  const {
    reps,
    weight,
    date,
    spoted = false,
    note = '',
    exerciceId,
    sessionId,
    userId
  } = req?.body ?? {}

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
})

/**
 * {
 *  date: session.date,
 *  ...serie
 * }
 */
seriesRouter.get('/byDate', async (req, res) => {
  const { sessionId, date } = req?.query ?? {}

  const series = await prisma.serie.findMany({
    take: 15,
    include: { exercice: true },
    orderBy: { date: 'desc' },
    where: { sessionId: parseInt(sessionId), date }
  })

  return res.json({ series })
})

/**
 * {
 *  exercice: { ...exercice }
 *  serie: { ...serie }
 * }
 */
seriesRouter.get('/byExercice', async (req, res) => {
  const { sessionId, exerciceId } = req?.query ?? {}

  const series = await prisma.serie.findMany({
    take: 15,
    include: { exercice: true },
    orderBy: { date: 'desc' },
    where: { sessionId, exerciceId }
  })

  return res.json({ series })
})
