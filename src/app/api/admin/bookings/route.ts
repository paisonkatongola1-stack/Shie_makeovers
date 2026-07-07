import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const bookings = await prisma.booking.findMany({
    include: {
      customer: { include: { user: true } },
      staff: { include: { user: true } },
      service: true,
    },
    orderBy: { startTime: "desc" }
  });

  const formattedBookings = bookings.map((booking) => ({
    id: booking.id,
    customer: booking.customer.user.name || booking.customer.user.email,
    service: booking.service.name,
    price: booking.service.price,
    staff: booking.staff.user.name || booking.staff.user.email,
    status: booking.status,
    startTime: booking.startTime.toISOString(),
    endTime: booking.endTime.toISOString(),
    notes: booking.notes,
    createdAt: booking.createdAt.toISOString(),
  }));

  return NextResponse.json(formattedBookings);
}
