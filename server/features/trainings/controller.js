import { prisma } from '../../prisma/client'

export const getAll = async () => {
  const trainings = await prisma.training.findMany({
    orderBy: { id: 'desc' }
  })

  return res.status(200).json(trainings)
}

export const get = async (req, res) => {
  const trainings = await prisma.training.findFirst({
    where: { id: req?.params?.id },
    orderBy: { id: 'desc' }
  })

  return res.status(200).json(trainings)
}

export const update = async req => {
  const training = await prisma.training.update({
    where: { id: Number(req?.params?.id) },
    data: req?.body?.data
  })

  return res.status(200).json(training)
}

export const remove = async req => {
  const training = await prisma.training.delete({
    where: { id: Number(req?.params?.id) }
  })

  return res.status(200).json(training)
}

export const add = async req => {
  const training = await prisma.training.create({
    data: req?.body?.data
  })

  return res.status(200).json(training)
}
