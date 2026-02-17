import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const totalOrders = await db.order.count();

    const pendingOrders = await db.order.count({
      where: { status: "Pending" },
    });

    const deliveredOrders = await db.order.count({
      where: { status: "Delivered" },
    });

    const products = await db.product.count();

    const delivered = await db.order.findMany({
      where: { status: "Delivered" },
      include: { product: true },
    });

    let revenue = 0;
    delivered.forEach((o) => {
      if (o.product?.offer) revenue += o.product.offer;
      else if (o.product?.price) revenue += o.product.price;
    });

    return NextResponse.json({
      totalOrders,
      pendingOrders,
      deliveredOrders,
      products,
      revenue,
    });
  } catch (e) {
    return NextResponse.json({ error: "Dashboard error" }, { status: 500 });
  }
}
