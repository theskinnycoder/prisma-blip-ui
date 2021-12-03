import dbClient from '@/lib/db'

export default async function handler(req, res) {
  const { method, params } = req

  if (method === 'GET') {
    const attendee = await dbClient.attendee.findUnique({
      where: {
        id: params?.id,
      },
      include: {
        workshops: true,
      },
    })

    return res.status(200).json({
      data: attendee,
    })
  }

  res.status(405).json({ message: 'method not allowed' })
}
