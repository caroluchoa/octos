import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() //instancia o prismaclient
const MANUFACTURERS = ['Secure Câmeras Inc', 'Surveillance Cams LLC', 'DigiEye Group', 'CâmeraFi Inc', 'VidMasters Inc']

// Endpoint que recebe a requisição de criação de nova câmera
export default async function handle(req, res) {
  const { cameraname, serialnumber, manufacturer } = req.body

  if (cameraname.length > 50 || serialnumber.length > 16 || !serialnumber.match(/[A-Z0-9]/) || !MANUFACTURERS.includes(manufacturer)) {
    throw new Error(
      `Entrada incorreta`
    )
  }

  const result = await prisma.cameras.create({
    data: {
      cameraname: cameraname,
      serialnumber: serialnumber,
      manufacturer: manufacturer
    },
  })

  res.json(result)
}
