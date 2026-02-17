import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* CREATE ORDER */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const order = await prisma.order.create({
      data: {
        customer: body.name,
        phone: body.phone,
        address: body.address,
        status: "Pending",
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.log("ORDER ERROR:", error);
    return NextResponse.json(
      { error: "Order create failed" },
      { status: 500 }
    );
  }
}
