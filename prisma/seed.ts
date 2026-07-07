import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.service.deleteMany();
  await prisma.user.deleteMany();

  // Create Services
  await prisma.service.createMany({
    data: [
      { name: "Classic Manicure", duration: 30, price: 25, image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" },
      { name: "Gel Manicure", duration: 45, price: 45, image: "https://images.unsplash.com/photo-1632345031435-819519583071?q=80&w=800&auto=format&fit=crop" },
      { name: "Acrylic Full Set", duration: 90, price: 65, image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop" },
    ],
  });

  console.log("Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
