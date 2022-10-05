import { Router } from 'express'
import { get, getAll, remove, update, add } from './controller'

export const exerciceRouter = Router()

exerciceRouter.get('/', getAll)

exerciceRouter.get('/:id', get)

exerciceRouter.post('/', add)

exerciceRouter.put('/:id', update)

exerciceRouter.delete('/:id', remove)
