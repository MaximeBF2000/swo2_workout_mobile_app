import { prisma } from '../prisma/index.js'

const EMPTY_OBJECT = {}

const createExerciceObject = exercice => ({
  name: exercice?.name,
  description: exercice?.description,
  categoryId: parseInt(exercice?.categoryId),
  userId: parseInt(exercice?.userId)
})

export const createExercices = async (req, res) => {
  const exercices = await prisma.exercice.createMany({
    data: Array.isArray(req?.body)
      ? req?.body?.map(exercice => createExerciceObject(exercice))
      : [createExerciceObject(req?.body)]
  })

  return res.json({ exercices })
}

export const getExerciceById = async (req, res) => {
  const { exerciceId } = req?.query ?? EMPTY_OBJECT

  const exercice = await prisma.exercice.findFirst({
    where: { id: exerciceId }
  })

  return res.json({ exercice })
}

export const getExercicesByCategory = async (req, res) => {
  const categories = await prisma.exerciceCategory.findMany({
    orderBy: { id: 'asc' }
  })

  const exercices = await prisma.exercice.findMany({
    orderBy: { categoryId: 'desc' }
  })

  const exercicesByCategory = {}

  categories?.forEach(category => {
    const exercicesFilteredByCategory = exercices?.filter(
      exercice => exercice?.categoryId === category?.id
    )

    exercicesByCategory[category?.name] = exercicesFilteredByCategory
  })

  return res.json({ exercicesByCategory })
}

export const getExercicesByWorkout = async (req, res) => {
  const { workoutId } = req?.query ?? EMPTY_OBJECT

  const exercices = (
    await prisma.workout.findMany({
      where: { id: parseInt(workoutId) },
      select: { exercices: true }
    })
  )?.map(elem => elem?.exercices)?.[0]

  return res.json({ exercices })
}

export const getExercicesBySession = async (req, res) => {
  const { sessionId } = req?.query ?? EMPTY_OBJECT

  const exercices = await prisma.exercice.findMany({
    where: {
      sessions: { every: { id: parseInt(sessionId) } }
    }
  })

  return res.json({ exercices })
}
