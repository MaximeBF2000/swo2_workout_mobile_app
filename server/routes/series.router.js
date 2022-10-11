import { Router } from 'express'
import { prisma } from '../prisma/index.js'

export const seriesRouter = Router()

seriesRouter.post('/create', async (req, res) => {
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

seriesRouter.get('/seriesByDate', async (req, res) => {
  const { sessionId, date } = req?.params ?? {}

  const series = await prisma.serie.findMany({
    take: 15,
    include: { exercice: true },
    orderBy: { date: 'desc' },
    where: { sessionId, date }
  })

  return res.json({ series })
})

seriesRouter.get('/seriesByExercice', async (req, res) => {
  const { sessionId, exerciceId } = req?.params ?? {}

  const series = await prisma.serie.findMany({
    take: 15,
    include: { exercice: true },
    orderBy: { date: 'desc' },
    where: { sessionId, exerciceId }
  })

  return res.json({ series })
})
