import { PrismaClient } from '@prisma/client'

let dbClient

if (process.env.NODE_ENV === 'production') dbClient = new PrismaClient()
else {
  if (!global.dbClient) global.dbClient = new PrismaClient()
  dbClient = global.dbClient
}

export default dbClient
