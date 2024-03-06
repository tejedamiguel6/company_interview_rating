import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  for (let i = 0; i < 13; i++) {
    // Create User
    const user = await prisma.user.create({
      data: {
        email: `user${i}@example.com`,
        name: `User ${i}`,
        userName: `user${i}`,
        password: `password${i}`,
      },
    })

    // Create Company
    const company = await prisma.company.create({
      data: {
        name: `Company ${i}`,
        website: `https://company${i}.com`,
        about: `About Company ${i}`,
        city: `City ${i}`,
        state: `Colorado ${i}`,
        country: `Country ${i}`,
        type: `Type ${i}`,
      },
    })

    // Create Interview Experience related to User and Company
    await prisma.interviewExperience.create({
      data: {
        title: `Interview at Company ${i}`,
        content: `The interview process at Company ${i} was thorough.`,
        rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
        interviewType: i % 2 === 0 ? 'On-site' : 'Remote', // Alternating interview types for variety
        difficultyLevel: Math.floor(Math.random() * 5) + 1, // Random difficulty between 1 and 5
        receivedOffer: i % 2 === 0, // Alternating between received offer and not
        userId: user.id,
        companyId: company.id,
      },
    })

    console.log(`Created user, company, and interview experience set ${i + 1}`)
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
