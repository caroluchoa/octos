import { PrismaClient } from '@prisma/client'
import { MANUFACTURERS } from '../../../constants'

const prisma = new PrismaClient() // instancia o prismaclient

// Endpoint que recebe a requisição de criação de nova câmera
export default async function handle(req, res) {
  if (req.method !== 'POST') {
    res.status(405)
    res.end()
    return
  }

  const { cameraname = '', serialnumber = '', manufacturer = '' } = req.body

  if (cameraname.length > 50 || serialnumber.length > 16 || !serialnumber.match(/[A-Z0-9]/) || !MANUFACTURERS.includes(manufacturer)) {
    res.status(400)
    res.end()
    return
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
