import { Router } from 'express'
import { prisma } from '../prisma/index.js'

export const sessionsRouter = Router()

sessionsRouter.get('/byDate', async (req, res) => {
  const { date } = req?.query ?? {}

  const sessions = await prisma.session.findFirst({
    where: { date }
  })

  return res.json({ sessions })
})
