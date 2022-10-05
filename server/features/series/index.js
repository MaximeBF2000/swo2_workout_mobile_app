import { Router } from 'express'
import { get, getAll, remove, update, add } from './controller'

export const serieRouter = Router()

serieRouter.get('/', getAll)

serieRouter.get('/:id', get)

serieRouter.post('/', add)

serieRouter.put('/:id', update)

serieRouter.delete('/:id', remove)
