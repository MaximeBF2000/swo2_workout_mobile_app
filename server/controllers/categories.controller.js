import { prisma } from '../prisma/index.js'

export const getExerciceCategories = async (req, res) => {
  const categories = await prisma.exerciceCategory.findMany({
    orderBy: { id: 'asc' }
  })

  return res.json({ categories })
}
