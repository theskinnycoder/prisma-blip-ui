import dbClient from '@/lib/db'

export default async function handler(req, res) {
  const { method, params, uid, body } = req

  if (method === 'GET') {
    const workshop = await dbClient.workshop.findUnique({
      where: {
        managerId: uid,
        id: params?.id,
      },
      include: {
        attendees: true,
      },
    })

    return res.status(200).json({
      data: workshop,
    })
  } else if (method === 'PATCH') {
    const { attendees } = body

    await dbClient.workshop.update({
      where: {
        managerId: uid,
        id: params?.id,
      },
      data: {
        attendees,
      },
    })

    return res.status(201).json({
      message: `${attendees.length} attendees imported...😁`,
    })
  } else if (method === 'DELETE') {
    await dbClient.workshop.delete({
      where: {
        managerId: uid,
        id: params?.id,
      },
    })

    return res.status(201).json({
      message: `1 workshop deleted...`,
    })
  }

  res.status(405).json({ message: 'method not allowed' })
}
