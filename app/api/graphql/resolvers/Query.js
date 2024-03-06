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
