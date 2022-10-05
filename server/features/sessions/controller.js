import { prisma } from '../../prisma/client'

export const getAll = async () => {
  const sessions = await prisma.session.findMany({
    orderBy: { id: 'desc' }
  })

  return res.status(200).json(sessions)
}

export const get = async (req, res) => {
  const sessions = await prisma.session.findFirst({
    where: { id: req?.params?.id },
    orderBy: { id: 'desc' }
  })

  return res.status(200).json(sessions)
}

export const update = async req => {
  const session = await prisma.session.update({
    where: { id: Number(req?.params?.id) },
    data: req?.body?.data
  })

  return res.status(200).json(session)
}

export const remove = async req => {
  const session = await prisma.session.delete({
    where: { id: Number(req?.params?.id) }
  })

  return res.status(200).json(session)
}

export const add = async req => {
  const session = await prisma.session.create({
    data: req?.body?.data
  })

  return res.status(200).json(session)
}
