import bcrypt from 'bcryptjs'
import { prisma } from '../prisma/index.js'

const EMPTY_OBJECT = {}

export const createUser = async (req, res) => {
  const { email, password } = req?.body ?? EMPTY_OBJECT
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const { password: _, ...user } = await prisma.user.create({
    data: { email, password: hashedPassword }
  })

  return res.json({ user, error: null })
}

export const getUser = async (req, res) => {
  const { email, password } = req?.query ?? EMPTY_OBJECT

  const { password: hashedPassword, ...user } =
    (await prisma.user.findFirst({
      where: { email }
    })) ?? EMPTY_OBJECT

  if (!hashedPassword || !(await bcrypt.compare(password, hashedPassword)))
    return res.json({ error: 'Invalid credentials', user: null })

  return res.json({ error: null, user })
}
