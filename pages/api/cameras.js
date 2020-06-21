import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const cameras = await prisma.cameras.findMany() //retorna dados de todas as cameras do banco de dados, usando instancia do prisma
  res.json(cameras)
}
