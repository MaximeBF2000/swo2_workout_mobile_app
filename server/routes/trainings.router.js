import { Router } from 'express'
import { prisma } from '../prisma/index.js'

export const trainingsRouter = Router()

trainingsRouter.post('/', async (req, res) => {
  const { name, description, userId } = req?.body ?? {}

  const training = await prisma.training.create({
    data: {
      name,
      description,
      user: { connect: { id: parseInt(userId) } }
    }
  })

  return res.json({ training })
})

trainingsRouter.get('/', async (req, res) => {
  const { userId } = req?.query ?? {}

  const trainings = await prisma.training.findMany({
    take: 15,
    where: { userId: parseInt(userId) }
  })

  return res.json({ trainings })
})
