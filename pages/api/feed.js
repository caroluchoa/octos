import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const cameras = await prisma.cameras.findMany()
  res.json(cameras)
}
