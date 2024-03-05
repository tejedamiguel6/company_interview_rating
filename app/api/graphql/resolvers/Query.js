import { PrismaClient } from '@prisma/client'

export const resolvers = {
  Query: {
    users: async (parent, args, ctx, info) => {
      return ctx.prisma.user.findMany()
    },
    hello: () => 'Hello world! from resolver!',
  },
}
