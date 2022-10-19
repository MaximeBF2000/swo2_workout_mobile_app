import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { prisma } from '../prisma/index.js'

export const authRouter = Router()

authRouter.post('/', async (req, res) => {
  const { email, password } = req?.body ?? {}
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const { password: _, ...user } = await prisma.user.create({
    data: { email, password: hashedPassword }
  })

  return res.json({ user, error: null })
})

authRouter.get('/', async (req, res) => {
  const { email, password } = req?.query ?? {}

  const { password: hashedPassword, ...user } =
    (await prisma.user.findFirst({
      where: { email }
    })) ?? {}

  if (!hashedPassword || !(await bcrypt.compare(password, hashedPassword)))
    return res.json({ error: 'Invalid credentials', user: null })

  return res.json({ error: null, user })
})
