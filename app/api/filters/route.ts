import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/* GET ALL GROUPS WITH OPTIONS */
export async function GET() {
  try {
    const groups = await db.filterGroup.findMany({
      include: {
        options: true,
      },
      orderBy: { id: "asc" },
    });

    return NextResponse.json(groups);
  } catch (err) {
    return NextResponse.json({ error: "Failed to load filters" }, { status: 500 });
  }
}

/* CREATE GROUP */
export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Name required" }, { status: 400 });
    }

    const group = await db.filterGroup.create({
      data: { name },
    });

    return NextResponse.json(group);
  } catch (err) {
    return NextResponse.json({ error: "Group create failed" }, { status: 500 });
  }
}
