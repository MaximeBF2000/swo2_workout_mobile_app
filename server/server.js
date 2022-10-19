import express from 'express'
import { config as initEnv } from 'dotenv'
import { authRouter } from './routes/auth.router.js'
import { seriesRouter } from './routes/series.router.js'
import { trainingsRouter } from './routes/trainings.router.js'

initEnv()

const app = express()

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/series', seriesRouter)
app.use('/api/trainings', trainingsRouter)

app.listen(
  process.env.SERVER_PORT,
  console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`)
)
