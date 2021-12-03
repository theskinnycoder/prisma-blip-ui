import adminAuth from '@/lib/admin-auth'
import dbClient from '@/lib/db'

export default async function handler(req, res) {
  const idToken = req.headers.authorization
  // const { uid } = await adminAuth.verifyIdToken(idToken)

  const { method, body } = req

  if (method === 'GET') {
    const workshops = await dbClient.workshop.findMany({
      // where: {
      //   managerId: uid,
      // },
      include: {
        _count: {
          select: {
            attendees: true,
          },
        },
      },
    })

    return res.status(200).json({ data: workshops })
  } else if (method === 'POST') {
    await dbClient.workshop.create({
      data: {
        name: body?.name,
        // managerId: uid,
      },
    })

    return res.status(201).json({
      message: `new workshop created...😁`,
    })
  }

  res.status(405).json({ message: 'method not allowed' })
}
