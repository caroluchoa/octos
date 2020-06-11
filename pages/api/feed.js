import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default async function handle(req, res) {
  const cameras = await prisma.cameras.findMany() //pega lista de cameras usando instancia do prisma
  res.json(cameras)
}
