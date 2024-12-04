import {faker} from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    
  for (let i = 0; i < 50; i++) {
    await prisma.toy.createMany({
        data: {
          name: faker.animal.type(),
          material: faker.helpers.arrayElement(['wood', 'metal', 'plastic', 'other']),
          weight: faker.number.float({min:1, max:10}),
          
          
        }
    });
  };
  for (let i = 0; i < 10; i++) {
    await prisma.children.create({
      data: {
        name: faker.person.fullName(),
        addressfull: faker.location.streetAddress()+ ", "+ faker.location.country(),
        goodornot: true,
        toyId: faker.number.int({min:1, max:25}),

      }
    })
  };
  
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    //process.exit(1)
  })
