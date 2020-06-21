import { PrismaClient } from '@prisma/client'
import { MANUFACTURERS } from '../../../constants'

const prisma = new PrismaClient()

/** 
 * Endpoint que recebe a requisição POST para criação de nova câmera 
 */ 
export default async function handle(req, res) {
  if (req.method !== 'POST') {
    /** Faz o tratamento de erro para METHOD NOT ALLOWED*/
    res.status(405)
    res.end()
    return
  }

  const { name = '', serialNumber = '', manufacturer = '' } = req.body

  if (name.length > 50 || serialNumber.length > 16 || !serialNumber.match(/[A-Z0-9]/) || !MANUFACTURERS.includes(manufacturer)) {
    /** Faz o tratamento de erro para BAD REQUEST caso cliente entre com dados incorretos*/
    res.status(400)
    res.end()
    return
  }

  const result = await prisma.cameras.create({
    data: {
      name: name,
      serialNumber: serialNumber,
      manufacturer: manufacturer
    },
  })

  res.json(result)
}
