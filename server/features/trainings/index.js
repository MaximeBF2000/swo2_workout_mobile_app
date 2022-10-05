import { Router } from 'express'
import { get, getAll, remove, update, add } from './controller'

export const trainingRouter = Router()

trainingRouter.get('/', getAll)

trainingRouter.get('/:id', get)

trainingRouter.post('/', add)

trainingRouter.put('/:id', update)

trainingRouter.delete('/:id', remove)
