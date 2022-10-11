import { Router } from 'express'
import bcrypt from 'bcryptjs'
import { prisma } from '../prisma/index.js'

export const authRouter = Router()

authRouter.post('/', async (req, res) => {
  console.log({ body: req?.body })
  const { email, password } = req?.body ?? {}
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const { password: _, ...user } = await prisma.user.create({
    data: { email, password: hashedPassword }
  })

  return res.json({ user })
})

authRouter.get(['/', '/:email'], async (req, res) => {
  const { password: _, ...user } = await prisma.user.findFirst({
    where: { email: req?.params?.email }
  })

  return res.json({ user })
})
