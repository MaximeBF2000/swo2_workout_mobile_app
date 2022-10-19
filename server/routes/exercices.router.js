import { Router } from 'express'
import { prisma } from '../prisma/index.js'

export const exercicesRouter = Router()

exercicesRouter.get('/bySession', async (req, res) => {
  const { sessionId } = req?.query ?? {}

  const exercices = await prisma.exercice.findMany({
    where: {
      sessions: { every: { id: parseInt(sessionId) } }
    }
  })

  return res.json({ exercices })
})
