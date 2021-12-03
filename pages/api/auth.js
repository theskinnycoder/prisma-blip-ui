import dbClient from '@/lib/db'

export default async function handler(req, res) {
  const { method, body } = req

  if (method === 'POST') {
    await dbClient.user.create({
      data: {
        email: body?.email.toLowerCase(),
        handle: body?.handle,
      },
    })

    return res.status(201).json({
      success: true,
    })
  }

  res.status(405).json({ message: 'Method not allowed' })
}
