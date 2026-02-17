import { NextResponse } from "next/server";

let products: any[] = [];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newProduct = {
    id: Date.now(),
    name: body.name,
    category: body.category,
    description: body.description,
    image: body.image,
  };

  products.push(newProduct);

  // 🔴 VERY IMPORTANT
  return NextResponse.json(newProduct);
}

export async function DELETE(req: Request) {
  const body = await req.json();

  products = products.filter(p => p.id !== body.id);

  // 🔴 VERY IMPORTANT
  return NextResponse.json({ success: true });
}
