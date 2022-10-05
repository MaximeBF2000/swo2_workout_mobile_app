import { prisma } from '../../prisma/client'

export const getAll = async () => {
  const exercices = await prisma.exercice.findMany({
    orderBy: { id: 'desc' }
  })

  return res.status(200).json(exercices)
}

export const get = async (req, res) => {
  const exercices = await prisma.exercice.findFirst({
    where: { id: req?.params?.id },
    orderBy: { id: 'desc' }
  })

  return res.status(200).json(exercices)
}

export const update = async req => {
  const exercice = await prisma.exercice.update({
    where: { id: Number(req?.params?.id) },
    data: req?.body?.data
  })

  return res.status(200).json(exercice)
}

export const remove = async req => {
  const exercice = await prisma.exercice.delete({
    where: { id: Number(req?.params?.id) }
  })

  return res.status(200).json(exercice)
}

export const add = async req => {
  const exercice = await prisma.exercice.create({
    data: req?.body?.data
  })

  return res.status(200).json(exercice)
}
