import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    console.log("✅ MongoDB Connected");

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
