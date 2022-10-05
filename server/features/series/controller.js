import { prisma } from '../../prisma/client'

export const getAll = async () => {
  const series = await prisma.serie.findMany({
    orderBy: { id: 'desc' }
  })

  return res.status(200).json(series)
}

export const get = async (req, res) => {
  const series = await prisma.serie.findFirst({
    where: { id: req?.params?.id },
    orderBy: { id: 'desc' }
  })

  return res.status(200).json(series)
}

export const update = async req => {
  const serie = await prisma.serie.update({
    where: { id: Number(req?.params?.id) },
    data: req?.body?.data
  })

  return res.status(200).json(serie)
}

export const remove = async req => {
  const serie = await prisma.serie.delete({
    where: { id: Number(req?.params?.id) }
  })

  return res.status(200).json(serie)
}

export const add = async req => {
  const serie = await prisma.serie.create({
    data: req?.body?.data
  })

  return res.status(200).json(serie)
}
