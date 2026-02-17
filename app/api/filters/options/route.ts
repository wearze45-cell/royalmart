import { NextResponse } from "next/server";
import { db } from "@/lib/db";

/* ADD OPTION */
export async function POST(req: Request) {
  try {
    const { groupId, name } = await req.json();

    if (!groupId || !name) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const option = await db.filterOption.create({
      data: {
        name,
        groupId: Number(groupId),
      },
    });

    return NextResponse.json(option);
  } catch (err) {
    return NextResponse.json({ error: "Option create failed" }, { status: 500 });
  }
}

/* DELETE OPTION */
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await db.filterOption.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
