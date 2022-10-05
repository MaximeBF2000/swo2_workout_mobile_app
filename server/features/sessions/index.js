import { Router } from 'express'
import { get, getAll, remove, update, add } from './controller'

export const sessionRouter = Router()

sessionRouter.get('/', getAll)

sessionRouter.get('/:id', get)

sessionRouter.post('/', add)

sessionRouter.put('/:id', update)

sessionRouter.delete('/:id', remove)
