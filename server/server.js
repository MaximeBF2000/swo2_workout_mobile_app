import express from 'express'
import { config as initEnv } from 'dotenv'
import { authRouter } from './routes/auth.router.js'
import { seriesRouter } from './routes/series.router.js'
import { trainingsRouter } from './routes/trainings.router.js'
import { workoutsRouter } from './routes/workouts.router.js'
import { exercicesRouter } from './routes/exercices.router.js'
import { categoriesRouter } from './routes/categories.router.js'

initEnv()

const app = express()

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/series', seriesRouter)
app.use('/api/trainings', trainingsRouter)
app.use('/api/exercices', exercicesRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/workouts', workoutsRouter)

app.listen(
  process.env.SERVER_PORT,
  console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`)
)
