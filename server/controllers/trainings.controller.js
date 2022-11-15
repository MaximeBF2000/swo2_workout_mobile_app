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

export const deleteTraining = async (req, res) => {
  const deletedTraining = await prisma.training.delete({
    where: { id: parseInt(req?.query?.trainingId) }
  })

  return res.json({ training: deletedTraining })
}

export const updateTraining = async (req, res) => {
  const { id, ...body } = req?.body ?? EMPTY_OBJECT

  const updatedTraining = await prisma.training.update({
    data: body,
    where: { id }
  })

  return res.json({ training: updatedTraining })
}
