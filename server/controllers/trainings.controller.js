import { prisma } from '../prisma/index.js'

const EMPTY_OBJECT = {}

export const createTraining = async (req, res) => {
  const { name, description, userId } = req?.body ?? EMPTY_OBJECT

  const training = await prisma.training.create({
    data: {
      name,
      description,
      user: { connect: { id: parseInt(userId) } }
    }
  })

  return res.json({ training })
}

export const getTrainingByUser = async (req, res) => {
  const { userId } = req?.query ?? EMPTY_OBJECT

  const trainings = await prisma.training.findMany({
    take: 15,
    where: { userId: parseInt(userId) }
  })

  return res.json({ trainings })
}
