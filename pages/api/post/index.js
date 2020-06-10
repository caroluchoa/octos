import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/post

export default async function handle(req, res) {
  const { cameraname, serialnumber, manufacturer } = req.body
  const result = await prisma.cameras.create({
    data: {
      cameraname: cameraname,
      serialnumber: serialnumber,
      manufacturer: manufacturer
    },
  })
  res.json(result)
}
