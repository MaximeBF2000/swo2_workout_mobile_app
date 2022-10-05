import express from 'express'
import config from './config.json'
import {
  trainingRouter,
  sessionRouter,
  serieRouter,
  exerciceRouter
} from './features'

const app = express()

app.use(express.json())

app.use('/api/trainings', trainingRouter)
app.use('/api/sessions', sessionRouter)
app.use('/api/series', serieRouter)
app.use('/api/exercices', exerciceRouter)

app.listen(
  config.PORT,
  console.log(`Server running at http://localhost:${config.PORT}`)
)
