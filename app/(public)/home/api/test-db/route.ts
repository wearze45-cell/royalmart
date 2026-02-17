import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Test PostgreSQL connection via Prisma
    const productCount = await prisma.product.count();

    console.log("✅ PostgreSQL Connected via Prisma");

    return NextResponse.json({
      success: true,
      message: "MongoDB connected successfully",
    });
  } catch (error: any) {
    console.error("❌ MongoDB Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "MongoDB connection failed",
      },
      { status: 500 }
    );
  }
}
