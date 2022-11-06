import { Router } from 'express'
import { getExerciceCategories } from '../controllers/categories.controller.js'

export const categoriesRouter = Router()

categoriesRouter.get('/', getExerciceCategories)
