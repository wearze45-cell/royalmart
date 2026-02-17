import { NextResponse } from "next/server";

let categories = ["Electronics", "Fashion", "T-shirt"];

export async function GET() {
  return NextResponse.json(categories);
}

export async function POST(req: Request) {
  const body = await req.json();
  categories.push(body.name);
  return NextResponse.json({ success: true });
}
