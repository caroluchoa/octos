import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const cameraId = req.query.id

  if (req.method === 'GET') {
    handleGET(cameraId, res)
  } else if (req.method === 'DELETE') {
    handleDELETE(cameraId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}


// GET /api/camera/:id
async function handleGET(cameraId, res) {
  const cameras = await prisma.cameras.findOne({
    where: { id: Number(cameraId) }
  })
  res.json(cameras)
}

// DELETE /api/camera/:id
async function handleDELETE(cameraId, res) {
  const cameras = await prisma.cameras.delete({
    where: { id: Number(cameraId) },
  })
  res.json(cameras)
}
