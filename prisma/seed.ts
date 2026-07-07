import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient({});

async function main() {
  await prisma.booking.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.staff.deleteMany();
  await prisma.service.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

  const adminPassword = await bcrypt.hash("Admin123!", 10);
  const staffPassword = await bcrypt.hash("Ashleigh123!", 10);
  const customerPassword = await bcrypt.hash("Customer123!", 10);

  const adminUser = await prisma.user.create({
    data: {
      name: "Ashleigh",
      email: "admin@shiemakeovers.com",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  const staffUser = await prisma.user.create({
    data: {
      name: "Ashleigh",
      email: "ashleigh@shiemakeovers.com",
      password: staffPassword,
      role: "STAFF",
    },
  });

  const customerUser = await prisma.user.create({
    data: {
      name: "Jane Cooper",
      email: "customer@shiemakeovers.com",
      password: customerPassword,
      role: "CUSTOMER",
    },
  });

  const stickOn = await prisma.service.create({
    data: {
      name: "Stick On",
      description: "Quick and easy stick-on nails for an instant manicure look.",
      duration: 15,
      price: 5,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    },
  });

  const naturals = await prisma.service.create({
    data: {
      name: "Naturals",
      description: "Natural nail care service with shaping, cuticle care, and polish.",
      duration: 30,
      price: 5,
      image: "https://images.unsplash.com/photo-1632345031435-819519583071?q=80&w=800&auto=format&fit=crop",
    },
  });

  const gelUp = await prisma.service.create({
    data: {
      name: "Gel Up",
      description: "Gel polish application that lasts up to 14 days without chipping.",
      duration: 45,
      price: 5,
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop",
    },
  });

  const clusters = await prisma.service.create({
    data: {
      name: "Clusters",
      description: "Lightweight lash clusters for a natural yet voluminous look.",
      duration: 60,
      price: 5,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    },
  });

  const staff = await prisma.staff.create({
    data: {
      userId: staffUser.id,
      bio: "Owner & Technician",
      skills: ["Stick On", "Naturals", "Gel Up", "Clusters"],
      workingHours: {
        monday: "9:00 AM - 7:00 PM",
        tuesday: "9:00 AM - 7:00 PM",
        wednesday: "9:00 AM - 7:00 PM",
        thursday: "9:00 AM - 7:00 PM",
        friday: "9:00 AM - 7:00 PM",
      },
      vacationDates: [],
    },
  });

  const customer = await prisma.customer.create({
    data: {
      userId: customerUser.id,
      phone: "+263 719 706 464",
    },
  });

  await prisma.booking.create({
    data: {
      customerId: customer.id,
      staffId: staff.id,
      serviceId: gelUp.id,
      startTime: new Date("2026-07-09T10:00:00.000Z"),
      endTime: new Date("2026-07-09T10:45:00.000Z"),
      status: "CONFIRMED",
      notes: "First sample booking for admin review.",
    },
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
