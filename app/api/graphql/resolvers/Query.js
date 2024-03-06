import { PrismaClient } from '@prisma/client'

export const resolvers = {
  Query: {
    users: async (parent, args, ctx, info) => {
      return ctx.prisma.user.findMany()
    },
    hello: () => 'Hello world! from resolver!',
  },
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    users: async (parent, args, ctx, info) => {
      const users = await ctx.prisma.user.findMany({
        include: {
          interviewExperiences: true,
        },
      })

      return users.map((user) => ({
        ...user,
        interviewExperience: user.interviewExperiences,
      }))
    },
  },
}
