import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() //instancia o prismaclient

// Endpoint que recebe a requisição de criação de nova câmera,
// através da função de Submit na página Create

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
