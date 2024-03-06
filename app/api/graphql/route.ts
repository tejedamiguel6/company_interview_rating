import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { NextRequest } from 'next/server'
import { gql } from 'graphql-tag'
import { typeDefs } from './schema/schema.js'
import { resolvers } from './resolvers/Query.js'
import { PrismaClient } from '@prisma/client'

export interface Context {
  prisma: PrismaClient
  req: any
}

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async ({ req }) => {
    return {
      prisma,
      req,
    }
  },
})
export { handler as GET, handler as POST }
