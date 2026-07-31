import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerId, staffId, serviceId, startTime, endTime, notes } = body;

    // Check for double booking
    const existingBooking = await prisma.booking.findFirst({
      where: {
        staffId,
        startTime: {
          lt: new Date(endTime),
        },
        endTime: {
          gt: new Date(startTime),
        },
        status: {
          not: "CANCELLED",
        },
      },
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: "This time slot is already booked for the selected technician." },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        customerId,
        staffId,
        serviceId,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        notes,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        customer: { include: { user: true } },
        staff: { include: { user: true } },
        service: true,
      },
      orderBy: {
        startTime: "desc",
      },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
