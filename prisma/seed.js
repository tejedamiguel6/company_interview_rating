const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  for (let i = 1; i <= 13; i++) {
    // Create User
    const user = await prisma.user.create({
      data: {
        email: `user${i}@example.com`,
        name: `User ${i}`,
        userName: `user${i}`,
        password: `password${i}`, // Remember to hash passwords in a real app
      },
    })

    // Create Company
    const company = await prisma.company.create({
      data: {
        name: `Company ${i}`,
        website: `https://company${i}.com`,
      },
    })

    // Create InterviewExperience
    await prisma.interviewExperience.create({
      data: {
        title: `Interview at Company ${i}`,
        content: `The interview process at Company ${i} was thorough and engaging.`,
        rating: i % 5, // Just an example to vary the ratings
        interviewType: i % 2 === 0 ? 'On-site' : 'Remote',
        difficultyLevel: i % 5,
        receivedOffer: i % 2 === 0,
        userId: user.id,
        companyId: company.id,
      },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
