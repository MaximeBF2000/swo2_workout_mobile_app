import { prisma } from '../prisma/index.js'

const EMPTY_OBJECT = {}

export const createWorkout = async (req, res) => {
  const { name, description, trainingId, userId } = req?.body ?? EMPTY_OBJECT

  const workout = await prisma.workout.create({
    data: {
      name,
      description,
      training: { connect: { id: parseInt(trainingId) } },
      user: { connect: { id: parseInt(userId) } }
    }
  })

  return res.json({ workout })
}

export const getWorkoutByTraining = async (req, res) => {
  const { trainingId } = req?.query ?? EMPTY_OBJECT

  const workouts = await prisma.workout.findMany({
    take: 15,
    where: { trainingId: parseInt(trainingId) }
  })

  return res.json({ workouts })
}

// const getWorkoutById = async () => {
//   const { workoutId } = req?.query ?? EMPTY_OBJECT

//   const workout = await prisma.workout.findFirst({
//     where: { trainingId: parseInt(workoutId) }
//   })

//   return res.json({ workout })
// }

export const addExerciceToWorkout = async (req, res) => {
  const { workoutId, exerciceId } = req?.body ?? EMPTY_OBJECT

  const workout = await prisma.workout.update({
    where: { id: workoutId },
    data: {
      exercices: { connect: { id: exerciceId } }
    }
  })

  return res.json({ workout })
}
