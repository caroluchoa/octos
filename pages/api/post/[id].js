import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const cameraId = req.query.id

  if (req.method === 'GET') {
    handleGET(cameraId, res)
  } else if (req.method === 'DELETE') {
    handleDELETE(cameraId, res)
  }
  //   else if(req.method === 'PUT') {
  //   handlePUT(cameraId, res)
  // }
  else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

///////////////////// ignorar essa parte, deixei pra depois tentar adicionar um feature de edição/////////////////
// // PUT /api/post/:id
// async function handlePUT(cameraId, res) {
// const cameras = await prisma.cameras.update({
//   data: {
//     cameraname: 'nome',
//     serialnumber: 'ADS123',
//     manufacturer: 'FFF'
//   },
//   where: { id: Number(cameraId) },
// })
// res.json(cameras)
// }
////////////////////////////////////////


// GET /api/post/:id
async function handleGET(cameraId, res) {
  const cameras = await prisma.cameras.findOne({
    where: { id: Number(cameraId) }
  })
  res.json(cameras)
}

// DELETE /api/post/:id
async function handleDELETE(cameraId, res) {
  const cameras = await prisma.cameras.delete({
    where: { id: Number(cameraId) },
  })
  res.json(cameras)
}
