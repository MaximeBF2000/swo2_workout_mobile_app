import { Router } from 'express'
import { createUser, getUser } from '../controllers/auth.controller.js'

export const authRouter = Router()

authRouter.post('/', createUser)
authRouter.get('/', getUser)
